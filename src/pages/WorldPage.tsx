import { useMemo, useState } from 'react'
import type { PageId } from '../types/nav'
import { WORLD_REGIONS } from '../data/world'
import { SocialShare } from '../components/SocialShare'
import { useWorldExplore } from '../hooks/useWorldExplore'
import { showToast } from '../components/Toast'

interface Props {
  onNavigate: (page: PageId) => void
}

export function WorldPage({ onNavigate }: Props) {
  const { visited, treasures, visit, collectTreasure, progress, total, activeId } = useWorldExplore()
  const [shareId, setShareId] = useState<string | null>(null)
  const [filter, setFilter] = useState<'all' | 'open' | 'new'>('all')

  const list = useMemo(() => {
    if (filter === 'open') return WORLD_REGIONS.filter((r) => visited.includes(r.id))
    if (filter === 'new') return WORLD_REGIONS.filter((r) => !visited.includes(r.id))
    return WORLD_REGIONS
  }, [filter, visited])

  const active = WORLD_REGIONS.find((r) => r.id === activeId) || list[0]

  return (
    <div className="page">
      <header className="page-header">
        <h1>🗺️ Buchen Sie Heaven World</h1>
        <p>
          Interaktive Karte – Regionen öffnen, Schätze sammeln und Abenteuer erleben. Entdeckungen: {visited.length}/{total} (
          {progress}%)
        </p>
      </header>

      <div className="world-progress panel">
        <div className="world-progress__bar" style={{ width: `${progress}%` }} />
        <span>
          💎 Schatz {treasures.length} · 🚩 Entdeckungen {visited.length}
        </span>
      </div>

      <div className="library-filters" style={{ marginBottom: 14 }}>
        {(
          [
            ['all', 'Alle'],
            ['new', 'Yeni'],
            ['open', 'Geöffnet'],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={`stem-chip ${filter === id ? 'is-active' : ''}`}
            onClick={() => setFilter(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="world-map world-map--interactive">
        {list.map((region) => {
          const open = visited.includes(region.id)
          const gem = treasures.includes(region.id)
          return (
            <article
              key={region.id}
              className={`world-region ${open ? 'is-visited' : 'is-locked'} ${activeId === region.id ? 'is-active' : ''}`}
              style={{ background: region.color }}
            >
              <div className="world-region__inner">
                <span className="world-region__emoji">{region.emoji}</span>
                <h2>
                  {region.title} {gem ? '💎' : open ? '✓' : '🔒'}
                </h2>
                <p>{region.blurb}</p>
                <div className="btn-row">
                  <button
                    type="button"
                    className="btn btn--small btn--primary"
                    onClick={() => {
                      const first = visit(region.id)
                      showToast(first ? `${region.title} entdeckt! +⭐` : `${region.title} — willkommen zurück`)
                    }}
                  >
                    {open ? 'Besuchen' : 'Entdecken & öffnen'}
                  </button>
                  <button
                    type="button"
                    className="btn btn--small btn--sun"
                    disabled={!open || gem}
                    onClick={() => {
                      if (collectTreasure(region.id)) showToast('Schatz bulundu! +1⭐')
                    }}
                  >
                    {gem ? 'Schatz eingesammelt' : '💎 Schatz'}
                  </button>
                </div>
                {open && (
                  <div className="world-region__links">
                    {region.links.map((link) => (
                      <button
                        key={link.label}
                        type="button"
                        className="btn btn--small"
                        onClick={() => onNavigate(link.page as PageId)}
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                )}
                <button
                  type="button"
                  className="btn btn--ghost btn--small"
                  style={{ marginTop: 10 }}
                  onClick={() => setShareId((id) => (id === region.id ? null : region.id))}
                >
                  {shareId === region.id ? 'Freigabe ausblenden' : 'Teilen'}
                </button>
                {shareId === region.id && (
                  <SocialShare
                    compact
                    payload={{
                      title: `${region.emoji} ${region.title}`,
                      text: region.blurb,
                      page: 'world',
                      itemId: region.id,
                      hashtags: ['KitapCenneti', 'Macera', region.title.replace(/\s+/g, '')],
                    }}
                  />
                )}
              </div>
            </article>
          )
        })}
      </div>

      {active && visited.includes(active.id) && (
        <p className="section-hint" style={{ marginTop: 12 }}>
          Zuletzt aktive Region: {active.emoji} {active.title}
        </p>
      )}
    </div>
  )
}
