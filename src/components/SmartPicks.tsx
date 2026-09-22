import type { PageId } from '../types/nav'
import type { AgeGroup } from '../hooks/usePortalProfile'
import { editorPicks, smartRecommendations } from '../utils/recommendations'
import { getMood, setMood, type MoodId } from '../utils/lastVisit'
import { useState } from 'react'

const MOODS: { id: MoodId; emoji: string; label: string }[] = [
  { id: 'mutlu', emoji: '😄', label: 'Fröhlich' },
  { id: 'sakin', emoji: '😌', label: 'Ruhig' },
  { id: 'meraklı', emoji: '🧐', label: 'Neugierig' },
  { id: 'yorgun', emoji: '😴', label: 'Müde' },
  { id: 'cesur', emoji: '🦸', label: 'Mutig' },
]

interface Props {
  ageGroup: AgeGroup
  interests: string[]
  onNavigate: (page: PageId) => void
}

export function SmartPicks({ ageGroup, interests, onNavigate }: Props) {
  const [mood, setMoodState] = useState<MoodId>(() => getMood())
  const editors = editorPicks()
  const smart = smartRecommendations(ageGroup, interests)

  return (
    <section className="section smart-picks">
      <h2 className="section__title">Die fünf Empfehlungen des Tages – passend zu euch</h2>
      <div className="mood-row" role="group" aria-label="Stimmung">
        {MOODS.map((m) => (
          <button
            key={m.id}
            type="button"
            className={`mood-chip ${mood === m.id ? 'is-active' : ''}`}
            onClick={() => {
              setMood(m.id)
              setMoodState(m.id)
            }}
          >
            {m.emoji} {m.label}
          </button>
        ))}
      </div>
      <div className="smart-picks__grid">
        {editors.slice(0, 5).map((p) => (
          <button key={p.id} type="button" className="smart-pick" onClick={() => onNavigate(p.page)}>
            <span>{p.emoji}</span>
            <strong>{p.title}</strong>
            <small>{p.reason}</small>
          </button>
        ))}
      </div>
      <div className="smart-picks__grid smart-picks__grid--soft">
        {smart.slice(0, 4).map((p) => (
          <button key={p.id} type="button" className="smart-pick" onClick={() => onNavigate(p.page)}>
            <span>{p.emoji}</span>
            <strong>{p.title}</strong>
            <small>{p.reason}</small>
          </button>
        ))}
      </div>
    </section>
  )
}
