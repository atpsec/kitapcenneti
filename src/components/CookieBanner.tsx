import { useEffect, useState } from 'react'
import {
  OPEN_COOKIE_SETTINGS_EVENT,
  readCookieConsent,
  saveCookieConsent,
} from '../utils/cookieConsent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [ads, setAds] = useState(false)

  useEffect(() => {
    const existing = readCookieConsent()
    if (existing) {
      setAnalytics(existing.analytics)
      setAds(existing.ads)
    }
    setVisible(!existing)
    const openSettings = () => {
      const current = readCookieConsent()
      if (current) {
        setAnalytics(current.analytics)
        setAds(current.ads)
      }
      setVisible(true)
    }
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings)
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings)
  }, [])

  const save = (next: { analytics: boolean; ads: boolean }) => {
    saveCookieConsent(next)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-modal="true" aria-labelledby="cookie-banner-title">
      <h2 id="cookie-banner-title" className="sr-only">Cookie-Hinweis</h2>
      <p>
        Erforderliche Cookies halten die Website am Laufen. Optionale Kategorien werden erst nach
        Ihrer Auswahl aktiviert.{' '}
        <a href="#privacy">Datenschutzerklärung</a>.
      </p>
      <label className="cookie-banner__option">
        <input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} />
        <span>Analyse und Verbesserung</span>
      </label>
      <label className="cookie-banner__option">
        <input type="checkbox" checked={ads} onChange={(event) => setAds(event.target.checked)} />
        <span>Personalisierte Werbung auf Elternseiten</span>
      </label>
      <div className="cookie-banner__actions">
        <button type="button" className="btn btn--ghost" onClick={() => save({ analytics: false, ads: false })}>Nur notwendige</button>
        <button type="button" className="btn btn--ghost" onClick={() => save({ analytics, ads })}>Auswahl speichern</button>
        <button type="button" className="btn btn--primary" onClick={() => save({ analytics: true, ads: true })}>Alle akzeptieren</button>
      </div>
    </div>
  )
}
