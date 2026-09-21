# Kitap Cenneti 📚

Ücretsiz çocuk & aile içerik platformu — **Google AdSense odaklı** içerik merkezi.

## Canlı

https://atpsec.github.io/kitapcenneti/

## Ne var?

- ⭐ Günlük görevler (yıldız + streak, üyelik yok)
- 🎧 Sesli masallar · 🖍️ Boyama PDF · ✨ AI hikaye
- 🔬 STEM deneyleri · 💛 Duygu köşesi · 🦸 Telifsiz kahramanlar
- 📝 **Aile Blog** (AdSense için ebeveyn odaklı uzun yazılar)
- 🖨️ Çıktılar · 🏆 Sertifika · 👨‍👩‍👧 Aile rehberi
- 🔒 Gizlilik / Koşullar / İletişim + çerez bildirimi
- 📢 AdSense yer tutucuları (`VITE_ADSENSE_CLIENT`)

## AdSense kurulumu

1. [Google AdSense](https://www.google.com/adsense/) başvurusu yap (site URL’si ile)
2. Onay sonrası Publisher ID al (`ca-pub-...`)
3. Repo’da `.env` veya GitHub Actions secret:
   `VITE_ADSENSE_CLIENT=ca-pub-xxxxxxxx`
4. Rebuild / redeploy

> Not: Google, çocuk odaklı sitelerde reklam kurallarını sıkı tutar. Reklamları özellikle **Aile Blog / Aile Köşesi** gibi ebeveyn içeriklerinde tutuyoruz.

## Geliştirme

```bash
npm install
npm run dev
npm run build:gh
```

## Aile+ üyelik altyapısı

Üyelik ekranı ücretsiz ve Aile+ planlarını içerir. Gerçek ödeme için Cloudflare Pages Functions ortamında Stripe anahtarlarını tanımlayın: `STRIPE_SECRET_KEY`, `STRIPE_PRICE_MONTHLY`, `STRIPE_PRICE_ANNUAL`, `STRIPE_WEBHOOK_SECRET` ve `SITE_URL`. D1 kullanacaksanız `migrations/0001_membership.sql` dosyasını çalıştırıp `DB` binding'ini Pages projesine ekleyin.

Tarayıcı tarafında `VITE_MEMBERSHIP_API_BASE` değerini Functions adresine bağlayın. Anahtarlar istemciye açılmamalı; ödeme ve webhook uçları yalnızca sunucu ortamında çalışmalıdır.
