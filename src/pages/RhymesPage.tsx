import { useMemo, useState } from 'react'
import { RHYMES } from '../data/rhymes'
import { useSpeech } from '../hooks/useSpeech'
import { VoicePicker } from '../components/VoicePicker'
import { announceActivityResult } from '../components/Toast'
import { completeActivity } from '../hooks/useProgress'
import { SocialShare } from '../components/SocialShare'
import { ContentPortalBar } from '../components/ContentPortalBar'
import { useContentItemId } from '../hooks/useContentItemId'

export function RhymesPage() {
  const [activeId, setActiveId] = useContentItemId('rhymes', RHYMES[0].id)
  const [query, setQuery] = useState('')
  const rhyme = RHYMES.find((r) => r.id === activeId) || RHYMES[0]
  const { speaking, speak, stop, profile, setProfile } = useSpeech()

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return RHYMES
    return RHYMES.filter((r) =>
      `${r.title} ${r.lyrics}`.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <div className="page">
      <header className="page-header">
        <h1>🎵 Lieder und Kinderreime</h1>
        <p>{RHYMES.length} klassische Kinderreime – auswendig lernen, sprechen und vorlesen.</p>
      </header>

      <ContentPortalBar
        count={list.length}
        label="Kinderreim"
        query={query}
        onQuery={setQuery}
        placeholder="Reim oder Text suchen …"
      />

      <VoicePicker profile={profile} onChange={setProfile} />

      <div className="rhymes-grid">
        {list.map((r) => (
          <button
            key={r.id}
            className={`rhyme-chip ${activeId === r.id ? 'is-active' : ''}`}
            onClick={() => {
              stop()
              setActiveId(r.id)
            }}
          >
            {r.emoji} {r.title}
          </button>
        ))}
      </div>

      <div className="panel">
        <h2>{rhyme.emoji} {rhyme.title}</h2>
        <pre className="lyrics">{rhyme.lyrics}</pre>
        <div className="btn-row">
          <button
            className="btn btn--primary"
            onClick={() => {
              if (speaking) stop()
              else {
                speak(rhyme.lyrics, 0.85)
                announceActivityResult(completeActivity('rhyme'))
              }
            }}
          >
            {speaking ? '⏹ Stoppen' : '🎧 Vorlesen'}
          </button>
        </div>
        <SocialShare
          payload={{
            title: `${rhyme.emoji} ${rhyme.title}`,
            text: rhyme.lyrics.slice(0, 120) + (rhyme.lyrics.length > 120 ? '…' : ''),
            page: 'rhymes',
            itemId: rhyme.id,
            hashtags: ['KitapCenneti', 'Reim', 'Kinder'],
          }}
        />
      </div>
    </div>
  )
}
