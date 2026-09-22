# Kitap Cenneti üretim kurulumu

GitHub Pages sürümü statik fallback olarak çalışır. Hesap, ilerleme senkronizasyonu ve Stripe aboneliği için Cloudflare Pages Functions + D1 gerekir.

## 1. Cloudflare Pages projesi

Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git** yolundan `atpsec/kitapcenneti` deposunu seçin.

- Build command: `npm run build:cf`
- Output directory: `dist`
- Production branch: `main`

GitHub Actions deploy’unu kullanacaksanız repo secret’larına değerleri güvenli biçimde ekleyin. Secret değerlerini kaynak koda veya sohbete yazmayın:

```powershell
gh secret set CLOUDFLARE_API_TOKEN --repo atpsec/kitapcenneti
gh secret set CLOUDFLARE_ACCOUNT_ID --repo atpsec/kitapcenneti
```

## 2. D1 veritabanı

Cloudflare’da `kitapcenneti` adlı D1 veritabanı oluşturun. `wrangler.toml` içindeki yorumlu `[[d1_databases]]` bloğuna gerçek `database_id` değerini yazıp Pages projesine `DB` binding’i ekleyin.

Migrations’ı sırayla uygulayın:

```bash
npx wrangler d1 migrations apply kitapcenneti --remote
```

`0003_billing_hardening.sql` üyeliği ebeveyn hesabına bağlar, Stripe event idempotency kaydı
oluşturur ve fatura/dönem alanlarını ekler. Bu migration uygulanmadan ödeme akışını production’da
etkinleştirmeyin.

## 3. Stripe

Stripe Dashboard’da iki recurring Price oluşturun (aylık/yıllık). Stripe webhook endpoint’i:

```text
https://<cloudflare-pages-domain>/api/membership/webhook
```

Aşağıdaki değerleri Cloudflare Pages → Settings → Environment variables → Production alanına ekleyin:

```text
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PRICE_MONTHLY=price_...
STRIPE_PRICE_ANNUAL=price_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_CHECKOUT_LOCALE=de
# Stripe Dashboard'da güncel Terms of Service URL'si tanımlandıktan sonra true yapın.
STRIPE_REQUIRE_TERMS=false
SITE_URL=https://<cloudflare-pages-domain>
AUTH_ALLOWED_ORIGIN=https://<cloudflare-pages-domain>
AUTH_SESSION_TTL_DAYS=30
AUTH_COOKIE_SAMESITE=Lax
```

### Konto-E-Mail und Wiederherstellung

Die Endpunkte für E-Mail-Bestätigung und Passwortzurücksetzung bleiben absichtlich deaktiviert,
solange kein E-Mail-Dienst konfiguriert ist. Mit Resend können sie nach Prüfung der Absenderdomain
aktiviert werden:

```text
AUTH_EMAIL_PROVIDER=resend
AUTH_EMAIL_API_KEY=re_...
AUTH_EMAIL_FROM=Kitap Cenneti <konto@ihre-domain.de>
AUTH_EMAIL_APP_URL=https://<cloudflare-pages-domain>
AUTH_REQUIRE_EMAIL_VERIFICATION=true
```

`AUTH_EMAIL_API_KEY` ist ein Cloudflare-Pages-Secret und gehört nicht in das Repository. Ohne diese
Werte melden die Endpunkte `email_service_not_configured`; Konten werden dadurch nicht mit einem
falschen Bestätigungsstatus versehen.

Almanya hedefi için Stripe Checkout varsayılan olarak Almanca açılır ve müşterinin USt-IdNr.
girebilmesi etkinleştirilir. `STRIPE_REQUIRE_TERMS=true` yalnızca Stripe Dashboard'da güncel
Terms of Service URL'si tanımlandıktan sonra kullanılmalıdır; aksi halde Checkout yapılandırma
hatası verebilir.

Stripe webhook olayları olarak `checkout.session.completed`, `customer.subscription.created`,
`customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_succeeded` ve
`invoice.payment_failed` seçin.

## 4. Smoke test

Deploy sonrası şu endpoint’leri kontrol edin:

```text
GET  /api/auth/me
POST /api/auth/register
GET  /api/family/children
GET  /api/membership/account-status
POST /api/membership/portal
POST /api/membership/cancel
```

Zusätzliche Kontorechte:

```text
GET    /api/auth/export
DELETE /api/auth/delete
POST   /api/auth/request-verification
POST   /api/auth/verify-email
POST   /api/auth/request-password-reset
POST   /api/auth/reset-password
```

`/api/membership/cancel` iptali dönem sonuna planlar. Üretim arayüzündeki “Verträge hier kündigen”
düğmesi bu endpoint'i kullanıcı onayından sonra çağırır. Stripe webhook'u son durumu doğrulamaya devam eder.

Checkout yalnızca giriş yapılmış ebeveyn hesabı için açılır. Kullanıcı önce Profil sayfasından hesap
oluşturmalı veya giriş yapmalıdır; üyelik kaydı Stripe e-postasıyla değil hesap ID’siyle bağlanır.

GitHub Pages üzerinde frontend’i Cloudflare API’ye bağlamak için build ortamına şu değişkeni ekleyin:

```text
VITE_MEMBERSHIP_API_BASE=https://<cloudflare-pages-domain>/api
VITE_SUPPORT_EMAIL=<gerçek destek adresi>
VITE_LEGAL_COMPANY=<şirket unvanı>
VITE_LEGAL_ADDRESS=<Almanya iş adresi>
VITE_LEGAL_REPRESENTATIVE=<temsilci>
VITE_LEGAL_REGISTER=<register mahkemesi ve numarası>
VITE_LEGAL_VAT_ID=<USt-IdNr.>
VITE_LEGAL_PHONE=<telefon, varsa>
VITE_LEGAL_DPO_EMAIL=<veri koruma iletişim adresi, varsa>
VITE_LEGAL_SUPERVISORY_AUTHORITY=<yetkili Datenschutzaufsichtsbehörde>
```

Cloudflare Pages üzerinde frontend ve Functions aynı domainde olduğunda bu değişken boş bırakılabilir; frontend otomatik `/api` kullanır.
