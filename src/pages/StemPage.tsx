import { useMemo, useState } from 'react'
import { STEM_CARDS } from '../data/stem'
import { AdSlot } from '../components/AdSlot'
import { announceActivityResult } from '../components/Toast'
import { completeActivity } from '../hooks/useProgress'
import { SocialShare } from '../components/SocialShare'
import { ContentPortalBar } from '../components/ContentPortalBar'
import { useContentItemId } from '../hooks/useContentItemId'

export function StemPage() {
  const [activeId, setActiveId] = useContentItemId('stem', STEM_CARDS[0].id)
  const [query, setQuery] = useState('')
  const card = STEM_CARDS.find((c) => c.id === activeId) || STEM_CARDS[0]

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return STEM_CARDS
    return STEM_CARDS.filter((c) =>
      `${c.title} ${c.why} ${c.materials.join(' ')} ${c.age}`.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <div className="page">
      <header className="page-header">
        <h1>🔬 MINT- und Wissenschaftsportal</h1>
        <p>
          {STEM_CARDS.length} sichere Mini-Experimente – neugierig sein, ausprobieren, verstehen und teilen.
        </p>
      </header>

      <ContentPortalBar
        count={list.length}
        label="STEM"
        query={query}
        onQuery={setQuery}
        placeholder="Experiment, Material oder Alter suchen …"
      />

      <div className="stem-grid">
        {list.map((c) => (
          <button
            key={c.id}
            className={`stem-chip ${activeId === c.id ? 'is-active' : ''}`}
            onClick={() => setActiveId(c.id)}
          >
            {c.emoji} {c.title}
          </button>
        ))}
      </div>

      <div className="panel">
        <h2>
          {card.emoji} {card.title}
        </h2>
        <p>
          <strong>Alter:</strong> {card.age} · <strong>Dauer:</strong> ca. {card.minutes} Min.
        </p>
        <h3>Materialien</h3>
        <ul className="tip-list">
          {card.materials.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
        <h3>Schritte</h3>
        <ol className="tip-list">
          {card.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        <h3>Warum passiert das?</h3>
        <p>{card.why}</p>
        <div className="btn-row" style={{ marginTop: 16 }}>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => announceActivityResult(completeActivity('stem'))}
          >
            ✓ Ich habe die Erfahrung gemacht
          </button>
        </div>
        <SocialShare
          payload={{
            title: `${card.emoji} ${card.title}`,
            text: `${card.why} (${card.age}, ~${card.minutes} dk)`,
            page: 'stem',
            itemId: card.id,
            hashtags: ['KitapCenneti', 'STEM', 'Wissenschaft'],
          }}
        />
      </div>

      <AdSlot slot="bottom" />
    </div>
  )
}
