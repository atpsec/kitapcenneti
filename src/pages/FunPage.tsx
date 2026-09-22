import { useEffect, useMemo, useRef, useState } from 'react'
import type { PageId } from '../types/nav'
import {
  JOKES,
  RIDDLES,
  SPIN_REWARDS,
  STICKERS,
  WHAT_NEXT,
} from '../data/stickers'
import { ConfettiBurst } from '../components/ConfettiBurst'
import { SocialShare } from '../components/SocialShare'
import { announceActivityResult, showToast } from '../components/Toast'
import {
  addBonusStars,
  canSpinToday,
  completeActivity,
  markSpunToday,
  unlockSticker,
  useProgress,
} from '../hooks/useProgress'

interface FunPageProps {
  onNavigate: (page: PageId) => void
}

export function FunPage({ onNavigate }: FunPageProps) {
  const { stickers, stars, refresh } = useProgress()
  const [spinning, setSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [rewardIdx, setRewardIdx] = useState<number | null>(null)
  const [confetti, setConfetti] = useState(false)
  const [idea, setIdea] = useState(0)
  const [riddleOpen, setRiddleOpen] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const drawing = useRef(false)
  const day = new Date().getDate()
  const joke = JOKES[day % JOKES.length]
  const riddle = RIDDLES[day % RIDDLES.length]
  const tip = WHAT_NEXT[idea % WHAT_NEXT.length]
  const segment = 360 / SPIN_REWARDS.length

  const ownedSet = useMemo(() => new Set(stickers), [stickers])

  const spin = () => {
    if (spinning) return
    if (!canSpinToday()) {
      showToast('Dein kostenloser Dreh für heute ist aufgebraucht – komm morgen wieder! 🎡')
      return
    }
    setSpinning(true)
    setRewardIdx(null)
    const idx = Math.floor(Math.random() * SPIN_REWARDS.length)
    const extraTurns = 5 + Math.floor(Math.random() * 3)
    const target = extraTurns * 360 + (360 - idx * segment - segment / 2)
    setRotation((r) => r + target)

    window.setTimeout(() => {
      const reward = SPIN_REWARDS[idx]
      setRewardIdx(idx)
      setSpinning(false)
      markSpunToday()
      addBonusStars(reward.stars)
      if (reward.stickerId) {
        const fresh = unlockSticker(reward.stickerId)
        if (fresh) showToast(`Sticker gewonnen: ${reward.emoji}`)
      }
      announceActivityResult(completeActivity('spin'))
      setConfetti(true)
      refresh()
      showToast(`${reward.emoji} ${reward.label} (+${reward.stars}⭐)`)
    }, 4200)
  }

  const initCanvas = () => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    if (!ctx) return
    ctx.fillStyle = '#fffdf8'
    ctx.fillRect(0, 0, c.width, c.height)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.strokeStyle = '#ff6b6b'
    ctx.lineWidth = 6
  }

  useEffect(() => {
    initCanvas()
  }, [])

  const pos = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const c = canvasRef.current!
    const rect = c.getBoundingClientRect()
    return {
      x: ((e.clientX - rect.left) / rect.width) * c.width,
      y: ((e.clientY - rect.top) / rect.height) * c.height,
    }
  }

  return (
    <div className="page fun-page">
      <ConfettiBurst active={confetti} onDone={() => setConfetti(false)} />

      <header className="page-header">
        <h1>🎡 Lustiger Garten</h1>
        <p>
          Langeweile verboten! Drehe das Rad, löse Rätsel, zeichne und sammle Sticker.
          Aktuell {stars}⭐ · {stickers.length}/{STICKERS.length} sticker
        </p>
      </header>

      <section className="fun-grid">
        <div className="panel fun-panel fun-wheel-panel">
          <h2>🎯 Rad der Überraschung</h2>
          <p className="section-hint">Ein Gratisdreh pro Tag – bringt Sterne und Aufkleber.</p>
          <div className="wheel-wrap">
            <div className="wheel-pointer">▼</div>
            <div
              className="wheel"
              style={{
                transform: `rotate(${rotation}deg)`,
                background: `conic-gradient(${SPIN_REWARDS.map(
                  (_reward, i) =>
                    `${['#ff6b6b', '#feca57', '#1dd1a1', '#54a0ff', '#ff9ff3', '#ff9f43', '#48dbfb', '#5f27cd'][i]} ${i * segment}deg ${(i + 1) * segment}deg`,
                ).join(', ')})`,
              }}
            >
              {SPIN_REWARDS.map((r, i) => (
                <span
                  key={r.label}
                  className="wheel-label"
                  style={{ transform: `rotate(${i * segment + segment / 2}deg)` }}
                >
                  {r.emoji}
                </span>
              ))}
            </div>
          </div>
          <button type="button" className="btn btn--primary" onClick={spin} disabled={spinning}>
            {spinning ? 'Dreht sich …' : canSpinToday() ? 'Drehen!' : 'Morgen wieder'}
          </button>
          {rewardIdx != null && (
            <div className="win-banner" style={{ marginTop: 14 }}>
              {SPIN_REWARDS[rewardIdx].emoji} {SPIN_REWARDS[rewardIdx].label}
              {SPIN_REWARDS[rewardIdx].page && (
                <div className="btn-row" style={{ justifyContent: 'center', marginTop: 10 }}>
                  <button
                    type="button"
                    className="btn btn--ghost"
                    onClick={() => onNavigate(SPIN_REWARDS[rewardIdx!].page as PageId)}
                  >
                    Oraya git →
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="panel fun-panel">
          <h2>🎲 Was sollen wir jetzt tun?</h2>
          <div className="idea-card">
            <span>{tip.emoji}</span>
            <div>
              <strong>{tip.title}</strong>
              <p>{tip.blurb}</p>
            </div>
          </div>
          <div className="btn-row">
            <button type="button" className="btn btn--primary" onClick={() => onNavigate(tip.page as PageId)}>
              Lasst uns anfangen
            </button>
            <button type="button" className="btn btn--ghost" onClick={() => setIdea((i) => i + 1)}>
              Schlagen Sie einen anderen vor
            </button>
          </div>

          <h3 style={{ marginTop: 22 }}>😂 Witz des Tages</h3>
          <p className="fun-joke">{joke}</p>

          <h3 style={{ marginTop: 18 }}>🧩 Bilmece</h3>
          <p className="fun-joke">{riddle.q}</p>
          <button type="button" className="btn btn--ghost" onClick={() => setRiddleOpen((v) => !v)}>
            {riddleOpen ? `Antwort: ${riddle.a}` : 'Antwort anzeigen'}
          </button>

          <div style={{ marginTop: 20 }}>
            <SocialShare
              compact
              payload={{
                title: '😂 Witz des Tages',
                text: joke,
                page: 'fun',
                itemId: `joke-${day}`,
                hashtags: ['KitapCenneti', 'Eglence', 'Saka'],
              }}
            />
            <SocialShare
              className="social-share--spaced"
              compact
              payload={{
                title: '🧩 Rätsel des Tages',
                text: riddleOpen ? `${riddle.q} — Antwort: ${riddle.a}` : riddle.q,
                page: 'fun',
                itemId: `riddle-${day}`,
                hashtags: ['KitapCenneti', 'Bilmece', 'Eglence'],
              }}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">
          <span className="section__title-emoji">🎨</span>
          Doodle-Brett
        </h2>
        <p className="section-hint">Zeichnen Sie mit dem Finger oder der Maus – Sie müssen nicht speichern, sondern haben einfach Spaß.</p>
        <div className="panel doodle-panel">
          <canvas
            ref={canvasRef}
            className="doodle-canvas"
            width={900}
            height={420}
            onPointerDown={(e) => {
              drawing.current = true
              const c = canvasRef.current!
              const ctx = c.getContext('2d')!
              const p = pos(e)
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              c.setPointerCapture(e.pointerId)
            }}
            onPointerMove={(e) => {
              if (!drawing.current) return
              const c = canvasRef.current!
              const ctx = c.getContext('2d')!
              const p = pos(e)
              ctx.lineTo(p.x, p.y)
              ctx.stroke()
            }}
            onPointerUp={() => {
              if (drawing.current) {
                drawing.current = false
                announceActivityResult(completeActivity('doodle'))
              }
            }}
          />
          <div className="btn-row">
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => {
                const colors = ['#ff6b6b', '#54a0ff', '#1dd1a1', '#feca57', '#5f27cd', '#2d3436']
                const c = canvasRef.current
                const ctx = c?.getContext('2d')
                if (ctx) ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)]
              }}
            >
              🎨 Farbe ändern
            </button>
            <button type="button" className="btn btn--ghost" onClick={initCanvas}>
              Temizle
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">
          <span className="section__title-emoji">🏷️</span>
          Stickeralbum
        </h2>
        <p className="section-hint">Drehen Sie das Rad, erledigen Sie Aufgaben, spielen Sie Spiele – die Aufkleber stapeln sich.</p>
        <div className="sticker-album">
          {STICKERS.map((s) => {
            const owned = ownedSet.has(s.id)
            return (
              <div key={s.id} className={`sticker-card ${owned ? 'is-owned' : 'is-locked'}`}>
                <span>{owned ? s.emoji : '❔'}</span>
                <strong>{owned ? s.title : 'Gizli'}</strong>
                <small>{s.hint}</small>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
