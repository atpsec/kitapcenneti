import { useEffect, useState } from 'react'
import type { PageId, PortalMode } from '../types/nav'
import { KIDS_NAV, PARENT_NAV, SIDEBAR_EXTRA } from '../data/portalNav'
import { usePortalProfile } from '../hooks/usePortalProfile'
import { useProgress } from '../hooks/useProgress'
import { FamilyLockModal } from './FamilyLockModal'

const KIDS_PRIMARY_IDS: PageId[] = ['portal', 'audio', 'coloring', 'playground', 'quests', 'create']
const PARENT_PRIMARY_IDS: PageId[] = ['portal', 'calendar', 'paths', 'journal', 'parents', 'membership']

interface PortalShellProps {
  current: PageId
  onNavigate: (page: PageId, query?: string) => void
  children: React.ReactNode
}

export function PortalShell({ current, onNavigate, children }: PortalShellProps) {
  const { mode, setMode, profile, profiles, switchProfile, pinEnabled, checkFamilyPin } =
    usePortalProfile()
  const { stars, streak, stickers } = useProgress()
  const [query, setQuery] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarMoreOpen, setSidebarMoreOpen] = useState(false)
  const [lockOpen, setLockOpen] = useState(false)
  const nav = mode === 'kids' ? KIDS_NAV : PARENT_NAV
  const primaryIds = mode === 'kids' ? KIDS_PRIMARY_IDS : PARENT_PRIMARY_IDS
  const allNavItems = Array.from(
    new Map(
      [
        ...nav,
        ...SIDEBAR_EXTRA,
      ].map((item) => [item.id, item]),
    ).values(),
  )
  const primaryNav = primaryIds
    .map((id) => allNavItems.find((item) => item.id === id))
    .filter((item): item is (typeof allNavItems)[number] => Boolean(item))
  const secondaryNav = allNavItems.filter((item) => !primaryIds.includes(item.id))

  useEffect(() => {
    setSidebarOpen(false)
    if (!primaryIds.includes(current)) setSidebarMoreOpen(true)
  }, [current, mode])

  const requestParentMode = () => {
    if (mode === 'parent') return
    if (pinEnabled) setLockOpen(true)
    else setMode('parent')
  }

  const runSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const q = query.trim()
    if (!q) {
      onNavigate('search')
      return
    }
    sessionStorage.setItem('kitapcenneti-search-q', q)
    onNavigate('search')
  }

  return (
    <div className={`portal-shell portal-shell--${mode}`}>
      <FamilyLockModal
        open={lockOpen}
        onClose={() => setLockOpen(false)}
        checkPin={checkFamilyPin}
        onUnlock={() => {
          setLockOpen(false)
          setMode('parent')
        }}
      />

      <header className="portal-topbar">
        <button
          type="button"
          className="portal-topbar__menu"
          aria-label="Menü öffnen"
          onClick={() => setSidebarOpen((v) => !v)}
        >
          ☰
        </button>
        <button type="button" className="portal-brand" onClick={() => onNavigate('portal')}>
          <span className="portal-brand__mark">📚</span>
          <div>
            <strong>Kitap Cenneti</strong>
            <small>Geschichten · Spiele · Entdeckungen</small>
          </div>
        </button>

        <form className="portal-search" onSubmit={runSearch}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Geschichte, Spiel oder Thema suchen …"
            aria-label="Im Portal suchen"
          />
          <button type="submit" className="btn btn--small">
            Suchen
          </button>
        </form>

        <div className="portal-topbar__stats">
          <span title="Sterne">⭐ {stars}</span>
          <span title="Serie">🔥 {streak}</span>
          <span title="Sticker">🏷️ {stickers.length}</span>
        </div>

        <div className="portal-mode">
          <button
            type="button"
            className={mode === 'kids' ? 'is-active' : ''}
            onClick={() => setMode('kids')}
          >
            🧒 Kinder
          </button>
          <button
            type="button"
            className={mode === 'parent' ? 'is-active' : ''}
            onClick={requestParentMode}
          >
            👨‍👩‍👧 Familie {pinEnabled ? '🔐' : ''}
          </button>
        </div>

        <div className="portal-profiles">
          {profiles.length > 1 && (
            <select
              aria-label="Profil auswählen"
              value={profile.id}
              onChange={(e) => switchProfile(e.target.value)}
            >
              {profiles.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.avatar} {p.childName || 'Profil'}
                </option>
              ))}
            </select>
          )}
          <button type="button" className="portal-avatar" onClick={() => onNavigate('profile')}>
            <span>{profile.avatar || '🦊'}</span>
            <small>{profile.childName || 'Profil'}</small>
          </button>
        </div>
      </header>

      <div className="portal-body">
        <aside className={`portal-sidebar ${sidebarOpen ? 'is-open' : ''}`}>
          <p className="portal-sidebar__label">{mode === 'kids' ? 'Los geht’s' : 'Prioritäten'}</p>
          <nav className="portal-sidebar__nav">
            {primaryNav.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`portal-side-link ${current === item.id ? 'is-active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                <span>{item.emoji}</span>
                {item.label}
              </button>
            ))}
          </nav>
          <button
            type="button"
            className="portal-sidebar__more"
            aria-expanded={sidebarMoreOpen}
            aria-controls="portal-sidebar-more"
            onClick={() => setSidebarMoreOpen((value) => !value)}
          >
            <span>{sidebarMoreOpen ? 'Weniger anzeigen' : 'Alle Bereiche'}</span>
            <span aria-hidden="true">{sidebarMoreOpen ? '−' : '+'}</span>
          </button>
          {sidebarMoreOpen && (
            <div id="portal-sidebar-more">
              <p className="portal-sidebar__label">Weitere Bereiche</p>
              <nav className="portal-sidebar__nav portal-sidebar__nav--compact">
                {secondaryNav.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`portal-side-link ${current === item.id ? 'is-active' : ''}`}
                    onClick={() => onNavigate(item.id)}
                  >
                    <span>{item.emoji}</span>
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </aside>

        {sidebarOpen && (
          <button
            type="button"
            className="portal-backdrop"
            aria-label="Menü schließen"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className="portal-content">{children}</div>
      </div>
    </div>
  )
}

export function ModeBanner({
  mode,
  onSwitch,
}: {
  mode: PortalMode
  onSwitch: (m: PortalMode) => void
}) {
  return (
    <div className="mode-banner">
      <p>
        {mode === 'kids'
          ? 'Du bist im Kindermodus – Spiele, Geschichten und Aufgaben stehen im Mittelpunkt.'
          : 'Du bist im Familienmodus – Planung, Blog, Lehrkräfte und Entwicklungswerkzeuge stehen im Mittelpunkt.'}
      </p>
      <button
        type="button"
        className="btn btn--ghost"
        onClick={() => onSwitch(mode === 'kids' ? 'parent' : 'kids')}
      >
        {mode === 'kids' ? 'Zum Familienmodus' : 'Zum Kindermodus'}
      </button>
    </div>
  )
}
