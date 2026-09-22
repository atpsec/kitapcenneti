import { useEffect, useMemo, useRef, useState } from 'react'
import { MEMORY_EMOJIS, QUIZ_QUESTIONS } from '../data/activities'
import { SCRAMBLE_WORDS, SPEED_EMOJIS, WORD_BANK } from '../data/extraGames'
import { announceActivityResult } from '../components/Toast'
import { completeActivity } from '../hooks/useProgress'
import { ConfettiBurst } from '../components/ConfettiBurst'
import { SocialShare } from '../components/SocialShare'

type Mode = 'menu' | 'memory' | 'quiz' | 'scramble' | 'speed' | 'pattern' | 'bubbles'

const SCRAMBLE_BANK =
  SCRAMBLE_WORDS.length > 0
    ? SCRAMBLE_WORDS.map(({ word, hint }) => ({ word, hint }))
    : WORD_BANK

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function ActivitiesPage() {
  const [mode, setMode] = useState<Mode>('menu')

  return (
    <div className="page">
      <header className="page-header">
        <h1>🎮 Arcade</h1>
        <p>6 Spiele: Gedächtnis, Quiz, Wort, Fangen, Muster und Blase – keine Langeweile!</p>
      </header>

      {mode === 'menu' && (
        <>
          <div className="activity-menu activity-menu--rich">
            <button className="panel activity-tile" onClick={() => setMode('memory')}>
              <span>🧠</span>
              <h2>Speicherkarten</h2>
              <p>Finden Sie Übereinstimmungen, trainieren Sie Ihr Gehirn!</p>
            </button>
            <button className="panel activity-tile" onClick={() => setMode('quiz')}>
              <span>❓</span>
              <h2>Mini Quiz</h2>
              <p>Allgemeinwissen – gemeinsam als Familie spielen.</p>
            </button>
            <button className="panel activity-tile" onClick={() => setMode('scramble')}>
              <span>🔤</span>
              <h2>Worträtsel</h2>
              <p>Ordne die Buchstaben in der richtigen Reihenfolge an.</p>
            </button>
            <button className="panel activity-tile" onClick={() => setMode('speed')}>
              <span>⚡</span>
              <h2>Schnelle Aufnahme</h2>
              <p>Klicken Sie auf die richtigen Emojis und knacken Sie die Punktzahl!</p>
            </button>
            <button className="panel activity-tile" onClick={() => setMode('pattern')}>
              <span>🔆</span>
              <h2>Muster wiederholen</h2>
              <p>Merke dir die Lichtsequenz.</p>
            </button>
            <button className="panel activity-tile" onClick={() => setMode('bubbles')}>
              <span>🫧</span>
              <h2>Zahlenblasen</h2>
              <p>Geben Sie die Zielnummer ein.</p>
            </button>
          </div>
          <SocialShare
            payload={{
              title: '🎮 Arcade',
              text: 'Memory, Quiz, Wörter, Fangen, Muster und Blasen – Spiele von Kitap Cenneti!',
              page: 'activities',
              hashtags: ['KitapCenneti', 'Spiele', 'Kinder'],
            }}
          />
        </>
      )}

      {mode === 'memory' && <MemoryGame onBack={() => setMode('menu')} />}
      {mode === 'quiz' && <QuizGame onBack={() => setMode('menu')} />}
      {mode === 'scramble' && <ScrambleGame onBack={() => setMode('menu')} />}
      {mode === 'speed' && <SpeedGame onBack={() => setMode('menu')} />}
      {mode === 'pattern' && <MiniPattern onBack={() => setMode('menu')} />}
      {mode === 'bubbles' && <MiniBubbles onBack={() => setMode('menu')} />}
    </div>
  )
}

function MemoryGame({ onBack }: { onBack: () => void }) {
  const cards = useMemo(
    () =>
      shuffle(
        MEMORY_EMOJIS.flatMap((emoji, i) => [
          { id: `${i}-a`, emoji, key: i },
          { id: `${i}-b`, emoji, key: i },
        ]),
      ),
    [],
  )
  const [flipped, setFlipped] = useState<string[]>([])
  const [matched, setMatched] = useState<number[]>([])
  const [lock, setLock] = useState(false)
  const awarded = useRef(false)
  const won = matched.length === MEMORY_EMOJIS.length

  useEffect(() => {
    if (won && !awarded.current) {
      awarded.current = true
      announceActivityResult(completeActivity('memory'))
    }
  }, [won])

  const onFlip = (id: string, key: number) => {
    if (lock || flipped.includes(id) || matched.includes(key)) return
    const next = [...flipped, id]
    setFlipped(next)
    if (next.length === 2) {
      setLock(true)
      const [a, b] = next
      const ca = cards.find((c) => c.id === a)!
      const cb = cards.find((c) => c.id === b)!
      setTimeout(() => {
        if (ca.key === cb.key) setMatched((m) => [...m, ca.key])
        setFlipped([])
        setLock(false)
      }, 700)
    }
  }

  return (
    <div className="panel">
      <div className="btn-row" style={{ marginBottom: 16 }}>
        <button className="btn btn--ghost" onClick={onBack}>← Menü</button>
        <strong>{matched.length}/{MEMORY_EMOJIS.length} Paare</strong>
      </div>
      {won && <p className="win-banner">🎉 Großartig! Du hast alle Paare gefunden!</p>}
      <div className="memory-grid">
        {cards.map((card) => {
          const open = flipped.includes(card.id) || matched.includes(card.key)
          return (
            <button
              key={card.id}
              className={`memory-card ${open ? 'is-open' : ''}`}
              onClick={() => onFlip(card.id, card.key)}
            >
              {open ? card.emoji : '?'}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function QuizGame({ onBack }: { onBack: () => void }) {
  const questions = useMemo(() => shuffle(QUIZ_QUESTIONS).slice(0, 5), [])
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [selected, setSelected] = useState<number | null>(null)
  const awarded = useRef(false)
  const q = questions[index]

  useEffect(() => {
    if (done && !awarded.current) {
      awarded.current = true
      announceActivityResult(completeActivity('quiz'))
    }
  }, [done])

  const choose = (i: number) => {
    if (selected !== null) return
    setSelected(i)
    if (i === q.answer) setScore((s) => s + 1)
    setTimeout(() => {
      if (index + 1 >= questions.length) setDone(true)
      else {
        setIndex((n) => n + 1)
        setSelected(null)
      }
    }, 800)
  }

  return (
    <div className="panel">
      <div className="btn-row" style={{ marginBottom: 16 }}>
        <button className="btn btn--ghost" onClick={onBack}>← Menü</button>
        <strong>Skor: {score}</strong>
      </div>
      {done ? (
        <div className="win-banner">
          🏆 Quiz beendet! {score}/{questions.length} richtig.
          <div className="btn-row" style={{ marginTop: 12, justifyContent: 'center' }}>
            <button className="btn btn--primary" onClick={onBack}>Noch einmal spielen</button>
          </div>
        </div>
      ) : (
        <>
          <p className="quiz-progress">Frage {index + 1}/{questions.length}</p>
          <h2 className="quiz-q">{q.question}</h2>
          <div className="quiz-options">
            {q.options.map((opt, i) => {
              let cls = 'quiz-option'
              if (selected !== null) {
                if (i === q.answer) cls += ' is-correct'
                else if (i === selected) cls += ' is-wrong'
              }
              return (
                <button key={opt} className={cls} onClick={() => choose(i)}>
                  {opt}
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

function ScrambleGame({ onBack }: { onBack: () => void }) {
  const [round, setRound] = useState(0)
  const item = SCRAMBLE_BANK[round % SCRAMBLE_BANK.length]
  const [letters, setLetters] = useState(() => shuffle(item.word.split('')))
  const [picked, setPicked] = useState<string[]>([])
  const [won, setWon] = useState(false)
  const [confetti, setConfetti] = useState(false)
  const pool = letters.map((ch, i) => ({ ch, i }))

  const resetWord = (r: number) => {
    const next = SCRAMBLE_BANK[r % SCRAMBLE_BANK.length]
    setLetters(shuffle(next.word.split('')))
    setPicked([])
    setWon(false)
  }

  const pick = (ch: string, i: number) => {
    if (won || !letters[i]) return
    const nextLetters = [...letters]
    nextLetters[i] = ''
    const nextPicked = [...picked, ch]
    setLetters(nextLetters)
    setPicked(nextPicked)
    if (nextPicked.join('') === item.word) {
      setWon(true)
      setConfetti(true)
      announceActivityResult(completeActivity('scramble'))
    }
  }

  return (
    <div className="panel">
      <ConfettiBurst active={confetti} onDone={() => setConfetti(false)} />
      <div className="btn-row" style={{ marginBottom: 16 }}>
        <button className="btn btn--ghost" onClick={onBack}>← Menü</button>
        <strong>Kelime {round + 1}</strong>
      </div>
      <p className="section-hint">{item.hint}</p>
      <div className="scramble-answer">
        {item.word.split('').map((_, i) => (
          <span key={i} className="scramble-slot">{picked[i] || ''}</span>
        ))}
      </div>
      <div className="scramble-pool">
        {pool.map(({ ch, i }) => (
          <button
            key={`${ch}-${i}`}
            type="button"
            className="scramble-letter"
            disabled={!ch}
            onClick={() => pick(ch, i)}
          >
            {ch || '·'}
          </button>
        ))}
      </div>
      <div className="btn-row" style={{ marginTop: 16 }}>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => {
            setLetters(shuffle(item.word.split('')))
            setPicked([])
            setWon(false)
          }}
        >
          Mischen / Zurücksetzen
        </button>
        {won && (
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              const next = round + 1
              setRound(next)
              resetWord(next)
            }}
          >
            Nächstes Wort →
          </button>
        )}
      </div>
      {won && <p className="win-banner">🎉 Richtig! {item.word}</p>}
    </div>
  )
}

function SpeedGame({ onBack }: { onBack: () => void }) {
  const target = useMemo(() => SPEED_EMOJIS[Math.floor(Math.random() * SPEED_EMOJIS.length)], [])
  const [timeLeft, setTimeLeft] = useState(20)
  const [score, setScore] = useState(0)
  const [items, setItems] = useState(() => spawn(target))
  const [done, setDone] = useState(false)
  const awarded = useRef(false)

  useEffect(() => {
    if (done) return
    const t = window.setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 1) {
          setDone(true)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => window.clearInterval(t)
  }, [done])

  useEffect(() => {
    if (done && !awarded.current) {
      awarded.current = true
      announceActivityResult(completeActivity('speed'))
    }
  }, [done])

  useEffect(() => {
    if (done) return
    const t = window.setInterval(() => setItems(spawn(target)), 900)
    return () => window.clearInterval(t)
  }, [done, target])

  return (
    <div className="panel">
      <div className="btn-row" style={{ marginBottom: 16 }}>
        <button className="btn btn--ghost" onClick={onBack}>← Menü</button>
        <strong>Ziel: {target} · Punktzahl {score} · {timeLeft}s</strong>
      </div>
      {done ? (
        <div className="win-banner">
          ⚡ Zeit abgelaufen! Dein Punktestand: {score}
          <div className="btn-row" style={{ justifyContent: 'center', marginTop: 12 }}>
            <button className="btn btn--primary" onClick={onBack}>Zurück zum Menü</button>
          </div>
        </div>
      ) : (
        <div className="speed-arena">
          <p className="section-hint">Klicke nur auf {target}!</p>
          <div className="speed-grid">
            {items.map((it) => (
              <button
                key={it.id}
                type="button"
                className="speed-cell"
                onClick={() => {
                  if (it.emoji === target) {
                    setScore((s) => s + 1)
                    setItems((prev) => prev.filter((p) => p.id !== it.id))
                  } else {
                    setScore((s) => Math.max(0, s - 1))
                  }
                }}
              >
                {it.emoji}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function spawn(target: string) {
  return Array.from({ length: 12 }, (_, i) => ({
    id: `${Date.now()}-${i}-${Math.random()}`,
    emoji: Math.random() > 0.55 ? target : SPEED_EMOJIS[Math.floor(Math.random() * SPEED_EMOJIS.length)],
  }))
}

function MiniPattern({ onBack }: { onBack: () => void }) {
  const colors = ['#e74c3c', '#2a9d8f', '#f4a261', '#4cc9f0']
  const [seq, setSeq] = useState<number[]>([])
  const [input, setInput] = useState<number[]>([])
  const [flash, setFlash] = useState<number | null>(null)
  const [phase, setPhase] = useState<'idle' | 'watch' | 'play' | 'win'>('idle')
  const [confetti, setConfetti] = useState(false)

  const playSeq = async (s: number[]) => {
    setPhase('watch')
    for (const n of s) {
      setFlash(n)
      await new Promise((r) => setTimeout(r, 420))
      setFlash(null)
      await new Promise((r) => setTimeout(r, 160))
    }
    setPhase('play')
    setInput([])
  }

  return (
    <div className="panel">
      <ConfettiBurst active={confetti} onDone={() => setConfetti(false)} />
      <button type="button" className="btn btn--ghost" onClick={onBack}>
        ← Menü
      </button>
      <h2>🔆 Muster wiederholen</h2>
      <p>{phase === 'watch' ? 'Beobachten …' : phase === 'win' ? 'Wunderbar!' : phase === 'play' ? 'Wiederholen' : 'Starten'}</p>
      <div className="pattern-grid">
        {colors.map((c, i) => (
          <button
            key={c}
            type="button"
            className={`pattern-cell ${flash === i ? 'is-flash' : ''}`}
            style={{ background: c }}
            onClick={() => {
              if (phase !== 'play') return
              const next = [...input, i]
              setInput(next)
              if (seq[next.length - 1] !== i) {
                void playSeq(seq)
                return
              }
              if (next.length === seq.length) {
                if (seq.length >= 4) {
                  setPhase('win')
                  setConfetti(true)
                  announceActivityResult(completeActivity('pattern'))
                  return
                }
                const grown = [...seq, Math.floor(Math.random() * 4)]
                setSeq(grown)
                window.setTimeout(() => void playSeq(grown), 400)
              }
            }}
          />
        ))}
      </div>
      <button
        type="button"
        className="btn btn--primary"
        onClick={() => {
          const s = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)]
          setSeq(s)
          setConfetti(false)
          void playSeq(s)
        }}
      >
        beginnen
      </button>
    </div>
  )
}

function MiniBubbles({ onBack }: { onBack: () => void }) {
  const target = useMemo(() => 2 + Math.floor(Math.random() * 7), [])
  const bubbles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        n: 1 + ((i * 5 + target) % 8),
        x: 10 + ((i * 19) % 75),
        y: 12 + ((i * 21) % 65),
      })),
    [target],
  )
  const [popped, setPopped] = useState<number[]>([])
  const [confetti, setConfetti] = useState(false)
  const need = bubbles.filter((b) => b.n === target).length
  const got = popped.filter((id) => bubbles.find((b) => b.id === id)?.n === target).length

  useEffect(() => {
    if (got >= need && need > 0 && !confetti) {
      setConfetti(true)
      announceActivityResult(completeActivity('bubble'))
    }
  }, [got, need, confetti])

  return (
    <div className="panel">
      <ConfettiBurst active={confetti} onDone={() => setConfetti(false)} />
      <button type="button" className="btn btn--ghost" onClick={onBack}>
        ← Menü
      </button>
      <h2>🫧 Zahlenblasen</h2>
      <p>
        Nur <strong>{target}</strong> ({got}/{need})
      </p>
      <div className="bubble-stage bubble-stage--compact">
        {bubbles.map((b) =>
          popped.includes(b.id) ? null : (
            <button
              key={b.id}
              type="button"
              className={`bubble ${b.n === target ? '' : 'bubble--muted'}`}
              style={{ left: `${b.x}%`, top: `${b.y}%` }}
              onClick={() => {
                if (b.n === target) setPopped((p) => [...p, b.id])
              }}
            >
              {b.n}
            </button>
          ),
        )}
      </div>
    </div>
  )
}
