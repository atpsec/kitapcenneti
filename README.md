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
