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
SITE_URL=https://<cloudflare-pages-domain>
AUTH_ALLOWED_ORIGIN=https://<cloudflare-pages-domain>
AUTH_SESSION_TTL_DAYS=30
AUTH_COOKIE_SAMESITE=Lax
```

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
```

Checkout yalnızca giriş yapılmış ebeveyn hesabı için açılır. Kullanıcı önce Profil sayfasından hesap
oluşturmalı veya giriş yapmalıdır; üyelik kaydı Stripe e-postasıyla değil hesap ID’siyle bağlanır.

GitHub Pages üzerinde frontend’i Cloudflare API’ye bağlamak için build ortamına şu değişkeni ekleyin:

```text
VITE_MEMBERSHIP_API_BASE=https://<cloudflare-pages-domain>/api
```

Cloudflare Pages üzerinde frontend ve Functions aynı domainde olduğunda bu değişken boş bırakılabilir; frontend otomatik `/api` kullanır.
