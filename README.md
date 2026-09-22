# Kitap Cenneti 📚

Eine deutschsprachige Familienplattform für Geschichten, Spiele, MINT-Entdeckungen und ruhige Lernmomente.

## Live

<https://atpsec.github.io/kitapcenneti/>

## Funktionen

- ⭐ Tagesaufgaben mit Sternen und Fortschritt
- 🎧 Hörgeschichten, 🖍️ Malvorlagen und KI-Geschichten
- 🔬 MINT-Experimente, 💛 Gefühlsbereich und eigene Heldinnen und Helden
- 📝 Familienblog mit alltagstauglichen Elternratgebern
- 🖨️ Druckvorlagen, 🏆 Urkunden und Familienplanung
- 🔒 Datenschutz, Nutzungsbedingungen, Kontakt und Cookie-Einstellungen
- 👨‍👩‍👧 Kostenloser Bereich plus Familien+-Mitgliedschaft

## Werbeeinstellungen

Werbung wird erst nach einer ausdrücklichen Einwilligung geladen und bleibt auf Eltern- und redaktionelle Bereiche beschränkt. Auf Kinderseiten werden keine personalisierten Anzeigen eingebunden.

Nach der AdSense-Freigabe:

1. Publisher-ID in `VITE_ADSENSE_CLIENT=ca-pub-…` hinterlegen.
2. Die Einwilligungstexte, Anbieterinformationen und Auftragsverarbeitungen prüfen.
3. Neu bauen und bereitstellen.

## Lokale Entwicklung

```bash
npm install
npm run dev
npm run build:gh
```

## Familien+-Mitgliedschaft

Der kostenlose Bereich bleibt nutzbar. Für echte Zahlungen werden Cloudflare Pages Functions, Stripe und D1 benötigt. Hinterlegen Sie serverseitig `STRIPE_SECRET_KEY`, `STRIPE_PRICE_MONTHLY`, `STRIPE_PRICE_ANNUAL`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_TERMS_URL` und `SITE_URL`. Der Checkout verlangt die aktuellen Nutzungsbedingungen auch im Stripe-Dashboard. Das D1-Binding muss `DB` heißen; die Migrationen werden in der Reihenfolge `0001` bis `0004` ausgeführt.

Die kostenpflichtige Schaltfläche bleibt gesperrt, solange die vollständigen Unternehmensangaben für Impressum und Datenschutz nicht als Build-Variablen gesetzt sind. Verwenden Sie dafür `VITE_LEGAL_COMPANY`, `VITE_LEGAL_ADDRESS`, `VITE_LEGAL_REPRESENTATIVE`, `VITE_LEGAL_REGISTER`, `VITE_LEGAL_VAT_ID` und `VITE_SUPPORT_EMAIL`.

Konten, Fortschritt und Zahlungen laufen ausschließlich über serverseitige Functions. Passwörter werden mit PBKDF2-SHA-256 verarbeitet; Sitzungen verwenden HttpOnly-, Secure- und SameSite-Cookies.

Wichtige Endpunkte:

- `POST /api/auth/register`, `POST /api/auth/login`, `POST /api/auth/logout`, `GET /api/auth/me`
- `GET/POST/PUT/DELETE /api/family/children`
- `GET/POST /api/family/progress?childId=…`
- `GET /api/membership/account-status`
- `POST /api/membership/portal`

Die vollständige Produktions-Checkliste steht in [`docs/production-setup.md`](docs/production-setup.md).
