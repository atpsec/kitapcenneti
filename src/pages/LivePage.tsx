import { useEffect, useMemo, useState } from 'react'
import type { PageId } from '../types/nav'
import { useLiveEngagement } from '../hooks/useLiveEngagement'
import {
  currentSlot,
  factoryQuizBatch,
  factoryStory,
  hashSeed,
  hourKey,
  liveDrops,
  weeklyEvent,
} from '../engines/contentFactory'
import { SocialShare } from '../components/SocialShare'
import { showToast } from '../components/Toast'
import { ConfettiBurst } from '../components/ConfettiBurst'
import { useSpeech } from '../hooks/useSpeech'

interface Props {
  onNavigate: (page: PageId, itemId?: string) => void
}

function formatMs(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000))
  const m = Math.floor(s / 60)
  const r = s % 60
  return `${m}:${r.toString().padStart(2, '0')}`
}

export function LivePage({ onNavigate }: Props) {
  const live = useLiveEngagement()
  const slot = currentSlot(live.now)
  const weekly = weeklyEvent(live.now)
  const drops = useMemo(() => liveDrops(live.now, 16), [live.now.getHours(), live.now.getDate()])
  const story = useMemo(
    () => factoryStory(hashSeed(hourKey(live.now), 'featured')),
    [live.now.getHours(), live.now.getDate()],
  )
  const quizzes = useMemo(
    () => factoryQuizBatch(hashSeed(hourKey(live.now), 'quiz'), 5),
    [live.now.getHours(), live.now.getDate()],
  )
  const [quizIdx, setQuizIdx] = useState(0)
  const [confetti, setConfetti] = useState(false)
  const [msLeft, setMsLeft] = useState(live.msLeft)
  const { speak, speaking, stop } = useSpeech()

  useEffect(() => {
    const t = window.setInterval(() => setMsLeft(live.msLeft), 1000)
    return () => clearInterval(t)
  }, [live.msLeft])

  useEffect(() => {
    if (live.welcomeBack) {
      showToast(live.welcomeBack)
      live.clearWelcome()
    }
  }, [live.welcomeBack])

  const q = quizzes[quizIdx % quizzes.length]

  return (
    <div className="page live-page">
      <ConfettiBurst active={confetti} onDone={() => setConfetti(false)} />

      <header className="page-header">
        <h1>⚡ Live-Arena</h1>
        <p>
          Stündlich neue Missionen, Überraschungen in jedem Abschnitt, jeden Tag andere Ereignisse – verpassen Sie es nicht!
        </p>
      </header>

      <div className="live-ticker panel">
        <div>
          <strong>
            {slot.emoji} {slot.label}
          </strong>
          <p>Nächste Stundenaufgabe: {formatMs(msLeft)}</p>
        </div>
        <div className="live-ticker__stats">
          <span>🔥 Stundenserie {live.hourlyStreak}</span>
          <span>👀 Besuche {live.visitCount}</span>
        </div>
      </div>

      <section className="section">
        <h2 className="section__title">Aufgabe der Uhr</h2>
        <article className="panel live-mission">
          <div className="live-mission__top">
            <span className="live-mission__emoji">{live.challenge.emoji}</span>
            <div>
              <h3>{live.challenge.title}</h3>
              <p>{live.challenge.hint}</p>
              <small>
                +{live.challenge.stars}⭐ · ~{live.challenge.minutes} Min.
                {live.hourlyDone ? ' · erledigt ✓' : ''}
              </small>
            </div>
          </div>
          <div className="btn-row">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => onNavigate(live.challenge.page)}
            >
              Gehen Sie zur Aufgabe →
            </button>
            <button
              type="button"
              className="btn btn--ghost"
              disabled={live.hourlyDone}
              onClick={() => {
                if (live.completeHourly()) {
                  setConfetti(true)
                  showToast(`Stundenaufgabe! +${live.challenge.stars}⭐`)
                }
              }}
            >
              {live.hourlyDone ? 'Diese Stunde ist geschafft' : 'Erledigt, gib mir einen Stern'}
            </button>
          </div>
        </article>
      </section>

      <section className="section">
        <h2 className="section__title">Aufgaben des Tages</h2>
        <div className="live-slot-grid">
          {live.slots.map((c) => {
            const done = live.slotDone.includes(c.id)
            return (
              <article key={c.id} className={`panel live-slot ${done ? 'is-done' : ''}`}>
                <span>{c.emoji}</span>
                <strong>{c.title}</strong>
                <p>{c.hint}</p>
                <button
                  type="button"
                  className="btn btn--small btn--primary"
                  onClick={() => onNavigate(c.page)}
                >
                  Öffnen
                </button>
                <button
                  type="button"
                  className="btn btn--small btn--ghost"
                  disabled={done}
                  onClick={() => {
                    if (live.completeSlot(c)) {
                      showToast(`Abschnittsaufgabe! +${c.stars}⭐`)
                      setConfetti(true)
                    }
                  }}
                >
                  {done ? '✓' : `+${c.stars}⭐`}
                </button>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Geheimnisvolle Box (alle 3 Stunden)</h2>
        <div className="panel live-mystery">
          <span>🎁</span>
          <div>
            <h3>{live.mysteryReady ? 'Box bereit!' : 'Box lädt …'}</h3>
            <p>Alle 3 Stunden ein Überraschungsstern. Vergessen Sie nicht, wiederzukommen.</p>
          </div>
          <button
            type="button"
            className="btn btn--sun"
            disabled={!live.mysteryReady}
            onClick={() => {
              const r = live.openMystery()
              if (r) {
                setConfetti(true)
                showToast(`${r.title} +${r.stars}⭐`)
              }
            }}
          >
            {live.mysteryReady ? 'Box öffnen' : 'Warten …'}
          </button>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Die besondere Geschichte dieser Stunde</h2>
        <article className="panel">
          <h3>
            {story.emoji} {story.title}
          </h3>
          <p>{story.summary}</p>
          <pre className="live-story-text">{story.text}</pre>
          <div className="btn-row">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => (speaking ? stop() : speak(story.text))}
            >
              {speaking ? '⏹ Stoppen' : '🎧 Anhören'}
            </button>
            <button type="button" className="btn btn--ghost" onClick={() => onNavigate('audio')}>
              Zum Geschichtenportal
            </button>
          </div>
          <SocialShare
            payload={{
              title: story.title,
              text: story.summary,
              page: 'live',
              hashtags: ['KitapCenneti', 'LiveArena', story.theme],
            }}
          />
        </article>
      </section>

      <section className="section">
        <h2 className="section__title">Stündliches Mini-Quiz</h2>
        <div className="panel">
          <p>
            <strong>
              Frage {quizIdx + 1}/{quizzes.length}
            </strong>
          </p>
          <h3>{q.question}</h3>
          <div className="quiz-options">
            {q.options.map((opt, i) => (
              <button
                key={opt}
                type="button"
                className="quiz-option"
                onClick={() => {
                  if (i === q.answer) {
                    showToast('Richtig! +1⭐')
                    setConfetti(true)
                    // tiny star via mystery-like bump through completeSlot noop — use stars key
                    const stars = Number(localStorage.getItem('kitapcenneti-stars') || 0) + 1
                    localStorage.setItem('kitapcenneti-stars', String(stars))
                    window.dispatchEvent(new CustomEvent('kitapcenneti-progress'))
                  } else {
                    showToast('Versuch es erneut – Lernen ist auch ein Stern')
                  }
                  setQuizIdx((x) => (x + 1) % quizzes.length)
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Aktivität der Woche</h2>
        <button
          type="button"
          className="portal-dash-card portal-dash-card--accent"
          onClick={() => onNavigate(weekly.page)}
          style={{ width: '100%', textAlign: 'left' }}
        >
          <span>{weekly.emoji}</span>
          <h2>{weekly.title}</h2>
          <p>{weekly.blurb}</p>
        </button>
      </section>

      <section className="section">
        <h2 className="section__title">Entdeckungsregen dieser Stunde ({drops.length})</h2>
        <div className="library-grid">
          {drops.map((d) => (
            <button
              key={d.id}
              type="button"
              className="library-card"
              onClick={() => onNavigate(d.page)}
            >
              <span className="library-card__emoji">{d.emoji}</span>
              <div>
                <strong>{d.title}</strong>
                <p>{d.blurb}</p>
                <small>{({ audio: 'Hörgeschichte', coloring: 'Malvorlage', stem: 'MINT', heroes: 'Helden', fun: 'Unterhaltung', activities: 'Spiel', world: 'Weltkarte', discover: 'Sammlung', rhymes: 'Reim', feelings: 'Gefühl' } as Record<string, string>)[d.kind] || d.kind}</small>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
