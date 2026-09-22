import { useMemo, useState } from 'react'
import { HEROES } from '../data/heroes'
import { useSpeech } from '../hooks/useSpeech'
import { VoicePicker } from '../components/VoicePicker'
import { announceActivityResult } from '../components/Toast'
import { completeActivity, setCreatePrefill } from '../hooks/useProgress'
import { SocialShare } from '../components/SocialShare'
import { ContentPortalBar } from '../components/ContentPortalBar'
import { useContentItemId } from '../hooks/useContentItemId'
import type { PageId } from '../types/nav'

interface HeroesPageProps {
  onNavigate: (page: PageId) => void
}

export function HeroesPage({ onNavigate }: HeroesPageProps) {
  const [activeId, setActiveId] = useContentItemId('heroes', HEROES[0].id)
  const [query, setQuery] = useState('')
  const hero = HEROES.find((h) => h.id === activeId) || HEROES[0]
  const { speaking, speak, stop, profile, setProfile } = useSpeech()

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return HEROES
    return HEROES.filter((h) =>
      `${h.name} ${h.motto} ${h.power} ${h.bio} ${h.age}`.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <div className="page">
      <header className="page-header">
        <h1>🦸 Originelle Helden</h1>
        <p>
          {HEROES.length} lizenzfreie Figuren – keine Kopien von Marvel oder DC. Zeichne, spiele und füge sie deiner Geschichte hinzu.
        </p>
      </header>

      <ContentPortalBar
        count={list.length}
        label="Kahraman"
        query={query}
        onQuery={setQuery}
        placeholder="Held, Fähigkeit oder Motto suchen …"
      />

      <VoicePicker profile={profile} onChange={setProfile} />

      <div className="heroes-grid">
        {list.map((h) => (
          <button
            key={h.id}
            className={`hero-card ${activeId === h.id ? 'is-active' : ''}`}
            style={{ background: h.color }}
            onClick={() => setActiveId(h.id)}
          >
            <span>{h.emoji}</span>
            <strong>{h.name}</strong>
            <small>{h.motto}</small>
          </button>
        ))}
      </div>

      <div className="panel hero-detail">
        <div className="hero-detail__top">
          <span className="hero-detail__emoji">{hero.emoji}</span>
          <div>
            <h2>{hero.name}</h2>
            <p className="hero-detail__motto">"{hero.motto}"</p>
          </div>
        </div>
        <div className="hero-detail__meta">
          <span>⚡ {hero.power}</span>
          <span>👶 {hero.age}</span>
          <span>✅ Telifsiz</span>
        </div>
        <p>{hero.bio}</p>
        <h3>📖 Mini Macera</h3>
        <p>{hero.adventure}</p>
        <h3>💡 Familientipp</h3>
        <p>{hero.tip}</p>
        <div className="btn-row">
          <button
            className="btn btn--primary"
            onClick={() => {
              if (speaking) stop()
              else {
                speak(`${hero.name}. ${hero.bio} ${hero.adventure}`)
                announceActivityResult(completeActivity('hero'))
              }
            }}
          >
            {speaking ? '⏹ Stoppen' : '🎧 Geschichte anhören'}
          </button>
          <button
            className="btn btn--ghost"
            onClick={() => {
              setCreatePrefill({
                heroName: hero.name.split(' ')[0],
                category: 'personalized',
                prompt: `${hero.name} adlı kahraman: ${hero.motto}. Gücü: ${hero.power}. ${hero.adventure}`,
              })
              onNavigate('create')
            }}
          >
            ✨ Machen Sie mit diesem Helden eine KI-Geschichte
          </button>
          <button className="btn btn--ghost" onClick={() => onNavigate('coloring')}>
            🖍️ Gehen Sie zu den Malvorlagen
          </button>
        </div>
        <SocialShare
          payload={{
            title: `${hero.emoji} ${hero.name}`,
            text: `${hero.motto} — ${hero.power}`,
            page: 'heroes',
            itemId: hero.id,
            hashtags: ['KitapCenneti', 'Kahraman', 'Cocuk'],
          }}
        />
      </div>
    </div>
  )
}
