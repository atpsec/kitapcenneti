import { useEffect, useMemo, useState } from 'react'
import type { PageId } from '../types/nav'
import { searchCatalog } from '../data/catalog'

interface Props {
  onNavigate: (page: PageId, itemId?: string) => void
}

export function SearchPage({ onNavigate }: Props) {
  const [q, setQ] = useState(() => sessionStorage.getItem('kitapcenneti-search-q') || '')
  const results = useMemo(() => searchCatalog(q), [q])

  useEffect(() => {
    sessionStorage.setItem('kitapcenneti-search-q', q)
  }, [q])

  return (
    <div className="page">
      <header className="page-header">
        <h1>🔎 Portalsuche</h1>
        <p>Märchen, Spiele, MINT, Blogs, Pakete, Ressourcen für Lehrer – alles ist hier.</p>
      </header>
      <div className="panel" style={{ marginBottom: 20 }}>
        <input
          className="library-search"
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Wonach suchst du?"
        />
        <p className="section-hint">{q ? `${results.length} Ergebnisse` : 'Beginne mit einer Suche'}</p>
      </div>
      <div className="library-grid">
        {results.slice(0, 60).map((item) => (
          <button key={item.id} type="button" className="library-card" onClick={() => onNavigate(item.page, item.sourceId)}>
            <span className="library-card__emoji">{item.emoji}</span>
            <div>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
              <small>{item.tags.slice(0, 4).join(' · ')}</small>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
