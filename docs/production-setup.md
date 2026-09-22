# Kitap Cenneti – Einrichtung für den Produktivbetrieb

Die GitHub-Pages-Version dient als statischer Fallback. Für Konten, Fortschrittssynchronisierung und Stripe-Abonnements werden Cloudflare Pages Functions und D1 benötigt.

## 1. Cloudflare-Pages-Projekt

Wählen Sie im Cloudflare-Dashboard unter **Workers & Pages → Create → Pages → Connect to Git** das Repository `atpsec/kitapcenneti` aus.

- Build-Befehl: `npm run build:cf`
- Ausgabeverzeichnis: `dist`
- Produktionsbranch: `main`

Wenn Sie den GitHub-Actions-Deploy verwenden, hinterlegen Sie die Werte sicher als Repository-Secrets. Schreiben Sie Secret-Werte niemals in den Quellcode oder in Chats:

```powershell
gh secret set CLOUDFLARE_API_TOKEN --repo atpsec/kitapcenneti
gh secret set CLOUDFLARE_ACCOUNT_ID --repo atpsec/kitapcenneti
```

## 2. D1-Datenbank

Erstellen Sie in Cloudflare eine D1-Datenbank mit dem Namen `kitapcenneti`. Tragen Sie die echte `database_id` im auskommentierten Block `[[d1_databases]]` in `wrangler.toml` ein und fügen Sie dem Pages-Projekt ein `DB`-Binding hinzu.

Wenden Sie die Migrationen in der angegebenen Reihenfolge an:

```bash
npx wrangler d1 migrations apply kitapcenneti --remote
```

`0003_billing_hardening.sql` bindet die Mitgliedschaft an das Elternkonto, protokolliert Stripe-Ereignisse idempotent und ergänzt Abrechnungs- und Laufzeitfelder. `0004_account_rights.sql` ergänzt E-Mail-Bestätigung und Kontorechte; `0005_account_consents.sql` speichert die Versionen und Zeitpunkte der Pflichtbestätigungen. Aktivieren Sie den Zahlungsfluss nicht, bevor alle Migrationen angewendet wurden.

## 3. Stripe

Erstellen Sie im Stripe-Dashboard zwei wiederkehrende Preise (monatlich/jährlich). Der Stripe-Webhook-Endpunkt lautet:

```text
https://<cloudflare-pages-domain>/api/membership/webhook
```

Hinterlegen Sie die folgenden Werte unter Cloudflare Pages → Settings → Environment variables → Production:

```text
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PRICE_MONTHLY=price_...
STRIPE_PRICE_ANNUAL=price_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_CHECKOUT_LOCALE=de
# Der Checkout verlangt standardmäßig aktuelle Nutzungsbedingungen im Stripe-Dashboard.
STRIPE_REQUIRE_TERMS=true
STRIPE_TERMS_URL=https://<ihre-domain>/#terms
SITE_URL=https://<cloudflare-pages-domain>
AUTH_ALLOWED_ORIGIN=https://<cloudflare-pages-domain>
AUTH_SESSION_TTL_DAYS=30
AUTH_COOKIE_SAMESITE=Lax
LEGAL_COMPANY=<Unternehmensname>
LEGAL_ADDRESS=<ladungsfähige Geschäftsanschrift>
LEGAL_REPRESENTATIVE=<vertretungsberechtigte Person>
LEGAL_REGISTER=<Registergericht und Registernummer>
LEGAL_VAT_ID=<USt-IdNr.>
SUPPORT_EMAIL=<echte Support-Adresse>
```

### Konto-E-Mail und Wiederherstellung

Die E-Mail-Bestätigung ist standardmäßig verpflichtend. Kontoerstellung und Anmeldung bleiben
gesperrt, solange kein E-Mail-Dienst konfiguriert ist. Mit Resend wird der Dienst nach Prüfung der
Absenderdomain eingerichtet:

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

Für Deutschland wird Stripe Checkout standardmäßig auf Deutsch geöffnet und die Eingabe einer USt-IdNr. ermöglicht. `STRIPE_REQUIRE_TERMS` bleibt standardmäßig aktiv. Hinterlegen Sie dieselbe aktuelle URL in `STRIPE_TERMS_URL` und im Stripe-Dashboard; fehlt sie, bleibt der Checkout absichtlich gesperrt.

Wählen Sie als Stripe-Webhook-Ereignisse `checkout.session.completed`, `customer.subscription.created`,
`customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_succeeded` und
`invoice.payment_failed` aus.

## 4. Smoke-Test

Prüfen Sie nach dem Deploy die folgenden Endpunkte:

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
POST   /api/auth/consent
POST   /api/auth/request-password-reset
POST   /api/auth/reset-password
```

`/api/membership/cancel` plant die Kündigung zum Ende des Abrechnungszeitraums. Die Schaltfläche „Verträge hier kündigen“ ruft den Endpunkt nach der Bestätigung der Nutzerin oder des Nutzers auf. Der Stripe-Webhook prüft den endgültigen Status weiterhin.

Checkout wird nur für ein angemeldetes, E-Mail-bestätigtes Elternkonto mit gespeicherten Volljährigkeits-, Nutzungsbedingungs- und Datenschutzzustimmungen geöffnet. Neue Konten erfassen diese Nachweise bei der Registrierung; ältere Konten müssen die aktuelle Fassung einmalig auf der Profilseite bestätigen. Die Mitgliedschaft wird über die Konto-ID und nicht über die Stripe-E-Mail-Adresse verknüpft. Zusätzlich prüft die Function serverseitig die vollständige Rechtskonfiguration und eine HTTPS-`SITE_URL`, damit ein direkter API-Aufruf keine Frontend-Sperre umgehen kann.

Fehlen die vollständigen Unternehmensangaben, bleibt die Sperre bereits vor dem Konto- und Consent-Schritt aktiv: Die rechtlichen Seiten zeigen nur einen Vorbereitungsstatus und `POST /api/auth/register` sowie `POST /api/auth/consent` antworten mit `legal_configuration_missing`. Erst nach gesetzter Konfiguration und veröffentlichter Rechtstextprüfung werden diese Flows freigeschaltet.

Damit das Frontend auf GitHub Pages die Cloudflare-API erreicht, setzen Sie im Build-Umfeld diese Variablen:

```text
VITE_MEMBERSHIP_API_BASE=https://<cloudflare-pages-domain>/api
VITE_SUPPORT_EMAIL=<echte Support-Adresse>
VITE_LEGAL_COMPANY=<Unternehmensname>
VITE_LEGAL_ADDRESS=<Geschäftsanschrift in Deutschland>
VITE_LEGAL_REPRESENTATIVE=<vertretungsberechtigte Person>
VITE_LEGAL_REGISTER=<Registergericht und Nummer>
VITE_LEGAL_VAT_ID=<USt-IdNr.>
VITE_LEGAL_PHONE=<Telefon, falls vorhanden>
VITE_LEGAL_DPO_EMAIL=<Datenschutzkontakt, falls vorhanden>
VITE_LEGAL_SUPERVISORY_AUTHORITY=<zuständige Datenschutzaufsichtsbehörde>
```

Wenn Frontend und Functions auf Cloudflare Pages dieselbe Domain verwenden, kann diese Variable leer bleiben; das Frontend verwendet automatisch `/api`.
