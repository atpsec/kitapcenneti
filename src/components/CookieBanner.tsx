import { useEffect, useState } from 'react'

const KEY = 'kitapcenneti-cookie-consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(KEY, 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem(KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-modal="true" aria-labelledby="cookie-banner-title">
      <h2 id="cookie-banner-title" className="sr-only">Çerez bildirimi</h2>
      <p>
        Gerekli çerezler siteyi çalıştırır. İsteğe bağlı çerezler deneyimi ölçmek ve (onay sonrası)
        reklam göstermek için kullanılır.{' '}
        <a href="#privacy">Gizlilik Politikası</a>.
      </p>
      <div className="cookie-banner__actions">
        <button type="button" className="btn btn--ghost" onClick={reject}>Yalnızca gerekli</button>
        <button type="button" className="btn btn--primary" onClick={accept}>İzin ver</button>
      </div>
    </div>
  )
}
