import { useMemo, useState } from 'react'
import type { PageId } from '../types/nav'
import { buildCatalog, type CatalogKind } from '../data/catalog'

interface Props {
  onNavigate: (page: PageId, itemId?: string) => void
}

const KINDS: { id: CatalogKind | 'all'; label: string }[] = [
  { id: 'all', label: 'Alle' },
  { id: 'audio', label: 'Geschichten' },
  { id: 'coloring', label: 'Malen' },
  { id: 'stem', label: 'STEM' },
  { id: 'hero', label: 'Held' },
  { id: 'path', label: 'Lernwege' },
  { id: 'blog', label: 'Blog' },
  { id: 'shop', label: 'Paketler' },
  { id: 'teacher', label: 'Lehrkräfte' },
  { id: 'collection', label: 'Sammlungen' },
]

const KIND_LABELS: Record<CatalogKind, string> = {
  audio: 'Hörgeschichten', blog: 'Blog', coloring: 'Malvorlagen', hero: 'Helden',
  rhyme: 'Reime', stem: 'MINT', feeling: 'Gefühle', path: 'Lernwege',
  collection: 'Sammlungen', world: 'Weltkarte', shop: 'Pakete', teacher: 'Lehrkräfte', page: 'Bereich',
}

export function LibraryPage({ onNavigate }: Props) {
  const [q, setQ] = useState('')
  const [kind, setKind] = useState<CatalogKind | 'all'>('all')
  const [age, setAge] = useState('')
  const all = useMemo(() => buildCatalog(), [])

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    return all.filter((item) => {
      if (kind !== 'all' && item.kind !== kind) return false
      if (age && item.age && !item.age.includes(age.replace('+', ''))) return false
      if (!query) return true
      return `${item.title} ${item.description} ${item.tags.join(' ')}`.toLowerCase().includes(query)
    })
  }, [all, q, kind, age])

  return (
    <div className="page">
      <header className="page-header">
        <h1>📚 Portalbibliothek</h1>
        <p>
          {all.length}+ Inhalte in einem Katalog. Filtern, suchen und direkt zum Bereich springen.
        </p>
      </header>

      <div className="library-toolbar panel">
        <input
          className="library-search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Titel, Tag oder Thema suchen …"
        />
        <div className="library-filters">
          {KINDS.map((k) => (
            <button
              key={k.id}
              type="button"
              className={`stem-chip ${kind === k.id ? 'is-active' : ''}`}
              onClick={() => setKind(k.id)}
            >
              {k.label}
            </button>
          ))}
        </div>
        <div className="library-filters">
          {['', '3', '6', '9'].map((a) => (
            <button
              key={a || 'all-age'}
              type="button"
              className={`stem-chip ${age === a ? 'is-active' : ''}`}
              onClick={() => setAge(a)}
            >
              {a ? `${a}+ Jahre` : 'Alle Altersstufen'}
            </button>
          ))}
        </div>
        <p className="section-hint" style={{ margin: 0 }}>
          {filtered.length} Ergebnisse
        </p>
      </div>

      <div className="library-grid">
        {filtered.map((item) => (
          <button
            key={item.id}
            type="button"
            className="library-card"
            onClick={() => onNavigate(item.page, item.sourceId)}
          >
            <span className="library-card__emoji">{item.emoji}</span>
            <div>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
              <small>
                {KIND_LABELS[item.kind] || item.kind}
                {item.age ? ` · ${item.age}` : ''}
                {item.minutes ? ` · ~${item.minutes} Min.` : ''}
              </small>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
