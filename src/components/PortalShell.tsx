import { useEffect, useState } from 'react'
import type { PageId, PortalMode } from '../types/nav'
import { KIDS_NAV, PARENT_NAV, SIDEBAR_EXTRA } from '../data/portalNav'
import { usePortalProfile } from '../hooks/usePortalProfile'
import { useProgress } from '../hooks/useProgress'
import { FamilyLockModal } from './FamilyLockModal'

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
  const [lockOpen, setLockOpen] = useState(false)
  const nav = mode === 'kids' ? KIDS_NAV : PARENT_NAV

  useEffect(() => {
    setSidebarOpen(false)
  }, [current])

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
          aria-label="Menüyü aç"
          onClick={() => setSidebarOpen((v) => !v)}
        >
          ☰
        </button>
        <button type="button" className="portal-brand" onClick={() => onNavigate('portal')}>
          <span className="portal-brand__mark">📚</span>
          <div>
            <strong>Kitap Cenneti</strong>
            <small>Masal · Oyun · Keşif</small>
          </div>
        </button>

        <form className="portal-search" onSubmit={runSearch}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Bir masal, oyun veya konu ara…"
            aria-label="Portalda ara"
          />
          <button type="submit" className="btn btn--small">
            Ara
          </button>
        </form>

        <div className="portal-topbar__stats">
          <span title="Yıldız">⭐ {stars}</span>
          <span title="Seri">🔥 {streak}</span>
          <span title="Sticker">🏷️ {stickers.length}</span>
        </div>

        <div className="portal-mode">
          <button
            type="button"
            className={mode === 'kids' ? 'is-active' : ''}
            onClick={() => setMode('kids')}
          >
            🧒 Çocuk
          </button>
          <button
            type="button"
            className={mode === 'parent' ? 'is-active' : ''}
            onClick={requestParentMode}
          >
            👨‍👩‍👧 Aile {pinEnabled ? '🔐' : ''}
          </button>
        </div>

        <div className="portal-profiles">
          {profiles.length > 1 && (
            <select
              aria-label="Profil seç"
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
          <p className="portal-sidebar__label">{mode === 'kids' ? 'Keşfet' : 'Aile Araçları'}</p>
          <nav className="portal-sidebar__nav">
            {nav.map((item) => (
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
          <p className="portal-sidebar__label">Tüm Bölümler</p>
          <nav className="portal-sidebar__nav portal-sidebar__nav--compact">
            {SIDEBAR_EXTRA.map((item) => (
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
        </aside>

        {sidebarOpen && (
          <button
            type="button"
            className="portal-backdrop"
            aria-label="Menüyü kapat"
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
          ? 'Çocuk modundasın — oyun, masal ve görevler önde.'
          : 'Aile modundasın — plan, blog, öğretmen ve gelişim araçları önde.'}
      </p>
      <button
        type="button"
        className="btn btn--ghost"
        onClick={() => onSwitch(mode === 'kids' ? 'parent' : 'kids')}
      >
        {mode === 'kids' ? 'Aile moduna geç' : 'Çocuk moduna geç'}
      </button>
    </div>
  )
}
