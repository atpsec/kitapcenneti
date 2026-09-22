import { useState } from 'react'
import type { PageId } from '../types/nav'
import { COLLECTIONS } from '../data/collections'
import { SocialShare } from '../components/SocialShare'

interface Props {
  onNavigate: (page: PageId) => void
}

export function DiscoverPage({ onNavigate }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <div className="page">
      <header className="page-header">
        <h1>🧭 Koleksiyonlar</h1>
        <p>{COLLECTIONS.length} kuratierte Auswahlen – Schlaf, Schule, Gefühle und Abenteuer als fertige Sammlungen.</p>
      </header>
      <div className="discover-grid">
        {COLLECTIONS.map((c) => (
          <article key={c.id} className="panel discover-card">
            <h2>
              {c.emoji} {c.title}
            </h2>
            <p>{c.description}</p>
            <small>{c.tags.join(' · ')}</small>
            <ul className="discover-items">
              {c.items.map((item) => (
                <li key={`${c.id}-${item.label}`}>
                  <button type="button" className="week-link" onClick={() => onNavigate(item.page as PageId)}>
                    {item.emoji} {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => setExpandedId((id) => (id === c.id ? null : c.id))}
            >
              {expandedId === c.id ? 'Freigabe ausblenden' : 'Teilen'}
            </button>
            {expandedId === c.id && (
              <SocialShare
                compact
                payload={{
                  title: `${c.emoji} ${c.title}`,
                  text: c.description,
                  page: 'discover',
                  itemId: c.id,
                  hashtags: ['KitapCenneti', 'Koleksiyon', ...c.tags.slice(0, 2)],
                }}
              />
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
