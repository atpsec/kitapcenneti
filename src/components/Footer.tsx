import type { PageId } from '../types/nav'
import { OPEN_COOKIE_SETTINGS_EVENT } from '../utils/cookieConsent'

interface FooterProps {
  onNavigate?: (page: PageId) => void
}

export function Footer({ onNavigate }: FooterProps) {
  const go = (id: PageId) => {
    if (onNavigate) onNavigate(id)
    else window.location.hash = id
  }

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__brand">📚 Kitap Cenneti</p>
        <p className="footer__text">
          Sichere, neugierig machende Entdeckungen für Kinder und Familien ✨
        </p>
        <div className="footer__nav">
          <button onClick={() => go('portal')}>Portal</button>
          <button onClick={() => go('library')}>Bibliothek</button>
          <button onClick={() => go('paths')}>Lernwege</button>
          <button onClick={() => go('teachers')}>Lehrkräfte</button>
          <button onClick={() => go('blog')}>Familienblog</button>
          <button onClick={() => go('membership')}>Familien+ Mitgliedschaft</button>
          <button onClick={() => go('about')}>Über uns</button>
          <button onClick={() => go('impressum')}>Impressum</button>
          <button onClick={() => go('privacy')}>Datenschutz</button>
          <button onClick={() => go('terms')}>Bedingungen</button>
          <button onClick={() => go('contact')}>Kontakt</button>
        </div>
      <div className="footer__links">
          <button type="button" onClick={() => go('world')}>Entdeckerkarte</button>
          <span>•</span>
          <button type="button" onClick={() => go('shop')}>Kostenlose Pakete</button>
          <span>•</span>
          <button type="button" onClick={() => go('calendar')}>Wochenplan</button>
          <span>•</span>
          <button type="button" onClick={() => go('journal')}>Entwicklungstagebuch</button>
      </div>
      <button
        type="button"
        className="footer__cookie-settings"
        onClick={() => window.dispatchEvent(new CustomEvent(OPEN_COOKIE_SETTINGS_EVENT))}
      >
        Cookie-Einstellungen
      </button>
      <p className="footer__tech">GitHub Pages · React · Vite</p>
      </div>
    </footer>
  )
}
