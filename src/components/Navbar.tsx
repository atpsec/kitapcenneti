import type { PageId } from '../types/nav'
import { MORE_LINKS, NAV_ITEMS } from '../data/nav'
import { useState } from 'react'

interface NavbarProps {
  current: PageId
  onNavigate: (page: PageId) => void
}

export function Navbar({ current, onNavigate }: NavbarProps) {
  const [moreOpen, setMoreOpen] = useState(false)

  return (
    <nav className="navbar" aria-label="Hauptmenü">
      <div className="navbar__brand" onClick={() => onNavigate('home')} role="button" tabIndex={0}>
        <span className="navbar__logo">📚</span>
        <div>
          <div className="navbar__title">Kitap Cenneti</div>
          <div className="navbar__tag">Kinder- & Familienportal</div>
        </div>
      </div>
      <div className="navbar__links">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`navbar__link ${current === item.id ? 'navbar__link--active' : ''}`}
            onClick={() => onNavigate(item.id)}
            title={item.label}
          >
            <span>{item.emoji}</span>
            <span className="navbar__link-label">{item.short}</span>
          </button>
        ))}
        <div className="navbar__more">
          <button
            className={`navbar__link ${moreOpen ? 'navbar__link--active' : ''}`}
            onClick={() => setMoreOpen((v) => !v)}
          >
            <span>⋯</span>
            <span className="navbar__link-label">Mehr</span>
          </button>
          {moreOpen && (
            <div className="navbar__dropdown">
              {MORE_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id)
                    setMoreOpen(false)
                  }}
                >
                  {link.emoji} {link.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
