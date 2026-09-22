import { useEffect, useMemo, useState } from 'react'
import { useSpeech } from '../hooks/useSpeech'
import { VoicePicker } from './VoicePicker'
import { hasPremiumVoice } from '../utils/premium'
import { showToast } from './Toast'

interface StoryLike {
  id: string
  title: string
  text: string
  emoji: string
}

interface Props {
  story: StoryLike
  bedtime?: boolean
  onListened?: () => void
}

function splitChapters(text: string): string[] {
  const parts = text
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
  if (parts.length >= 2) return parts
  const sentences = text.match(/[^.!?…]+[.!?…]+|[^.!?…]+$/g) || [text]
  const chunks: string[] = []
  let buf = ''
  for (const s of sentences) {
    buf = `${buf} ${s}`.trim()
    if (buf.length > 140) {
      chunks.push(buf)
      buf = ''
    }
  }
  if (buf) chunks.push(buf)
  return chunks.length ? chunks : [text]
}

export function StoryPlayer({ story, bedtime, onListened }: Props) {
  const chapters = useMemo(() => splitChapters(story.text), [story.text])
  const [chapter, setChapter] = useState(0)
  const [together, setTogether] = useState(false)
  const [sleepMin, setSleepMin] = useState(0)
  const { speaking, paused, speak, stop, togglePause, profile, setProfile } = useSpeech()

  useEffect(() => {
    setChapter(0)
    stop()
  }, [story.id])

  useEffect(() => {
    if (!sleepMin) return
    const t = window.setTimeout(() => {
      stop()
      showToast('Einschlaf-Timer – gute Nacht 🌙')
      setSleepMin(0)
    }, sleepMin * 60_000)
    return () => clearTimeout(t)
  }, [sleepMin, story.id])

  const rate = bedtime || hasPremiumVoice() ? (bedtime ? 0.82 : 0.9) : 1
  const premiumPitchHint = hasPremiumVoice()

  const playChapter = (idx: number) => {
    const text = chapters[idx]
    if (together && idx % 2 === 1) {
      showToast('Du bist dran – lies diesen Abschnitt laut vor und drücke dann auf Weiter')
      setChapter(idx)
      return
    }
    speak(text, rate)
    setChapter(idx)
    onListened?.()
  }

  return (
    <div className="story-player">
      <VoicePicker profile={profile} onChange={setProfile} />
      {premiumPitchHint && (
        <p className="section-hint">✨ Premium-Soundpaket aktiviert – flüssigeres Tempo.</p>
      )}

      <div className="story-player__meta">
        <span>
          Kapitel {chapter + 1}/{chapters.length}
        </span>
        <label className="story-player__tog">
          <input type="checkbox" checked={together} onChange={(e) => setTogether(e.target.checked)} />
          gemeinsam lesen
        </label>
        <label>
          Uyku
          <select value={sleepMin} onChange={(e) => setSleepMin(Number(e.target.value))}>
            <option value={0}>Geschlossen</option>
            <option value={5}>5 dk</option>
            <option value={10}>10 dk</option>
            <option value={15}>15 dk</option>
            <option value={20}>20 dk</option>
          </select>
        </label>
      </div>

      <div className="audio-player__controls">
        {!speaking ? (
          <button type="button" className="btn btn--primary" onClick={() => playChapter(chapter)}>
            ▶ Kapitel anhören
          </button>
        ) : (
          <>
            <button type="button" className="btn btn--primary" onClick={togglePause}>
              {paused ? '▶ Weiter' : '⏸ Pause'}
            </button>
            <button type="button" className="btn btn--ghost" onClick={stop}>
              ⏹ Durdur
            </button>
          </>
        )}
        <button
          type="button"
          className="btn btn--ghost"
          disabled={chapter <= 0}
          onClick={() => {
            stop()
            playChapter(Math.max(0, chapter - 1))
          }}
        >
          ← Zurück
        </button>
        <button
          type="button"
          className="btn btn--ghost"
          disabled={chapter >= chapters.length - 1}
          onClick={() => {
            stop()
            const next = Math.min(chapters.length - 1, chapter + 1)
            playChapter(next)
          }}
        >
          Weiter →
        </button>
      </div>

      <div className="chapter-dots">
        {chapters.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`chapter-dot ${i === chapter ? 'is-active' : ''}`}
            onClick={() => {
              stop()
              playChapter(i)
            }}
            aria-label={`Kapitel ${i + 1}`}
          />
        ))}
      </div>

      <div className={`audio-player__text ${together && chapter % 2 === 1 ? 'is-together' : ''}`}>
        {chapters[chapter]}
      </div>
    </div>
  )
}
