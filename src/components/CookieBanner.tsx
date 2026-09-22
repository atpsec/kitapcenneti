import { useEffect, useState } from 'react'

const KEY = 'kitapcenneti-cookie-consent'
type Consent = { version: 1; necessary: true; analytics: boolean; ads: boolean }

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [ads, setAds] = useState(false)

  useEffect(() => {
    try {
      const value = localStorage.getItem(KEY)
      if (!value || !JSON.parse(value).version) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const save = (next: { analytics: boolean; ads: boolean }) => {
    const consent: Consent = { version: 1, necessary: true, ...next }
    localStorage.setItem(KEY, JSON.stringify(consent))
    window.dispatchEvent(new CustomEvent('kitapcenneti-cookie-consent'))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-modal="true" aria-labelledby="cookie-banner-title">
      <h2 id="cookie-banner-title" className="sr-only">Çerez bildirimi</h2>
      <p>
        Gerekli çerezler siteyi çalıştırır. İsteğe bağlı kategoriler yalnızca seçiminizden sonra
        etkinleşir.{' '}
        <a href="#privacy">Gizlilik Politikası</a>.
      </p>
      <label className="cookie-banner__option">
        <input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} />
        <span>Ölçüm ve iyileştirme</span>
      </label>
      <label className="cookie-banner__option">
        <input type="checkbox" checked={ads} onChange={(event) => setAds(event.target.checked)} />
        <span>Ebeveyn sayfalarında kişiselleştirilmiş reklam</span>
      </label>
      <div className="cookie-banner__actions">
        <button type="button" className="btn btn--ghost" onClick={() => save({ analytics: false, ads: false })}>Yalnızca gerekli</button>
        <button type="button" className="btn btn--ghost" onClick={() => save({ analytics, ads })}>Seçimleri kaydet</button>
        <button type="button" className="btn btn--primary" onClick={() => save({ analytics: true, ads: true })}>Tümüne izin ver</button>
      </div>
    </div>
  )
}
