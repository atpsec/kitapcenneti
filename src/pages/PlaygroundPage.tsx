import { useEffect, useMemo, useState } from 'react'
import type { PageId } from '../types/nav'
import { PetCare } from '../components/PetCare'
import { BreathGame } from '../components/BreathGame'
import { ADVENTURES } from '../data/adventures'
import { announceActivityResult, showToast } from '../components/Toast'
import { addBonusStars, completeActivity } from '../hooks/useProgress'
import { ConfettiBurst } from '../components/ConfettiBurst'
import { SocialShare } from '../components/SocialShare'

type Mode =
  | 'menu'
  | 'pet'
  | 'breath'
  | 'rhythm'
  | 'bubbles'
  | 'pattern'
  | 'adventure'
  | 'hunt'

interface Props {
  onNavigate: (page: PageId) => void
}

export function PlaygroundPage({ onNavigate }: Props) {
  const [mode, setMode] = useState<Mode>('menu')

  return (
    <div className="page playground-page">
      <header className="page-header">
        <h1>🕹️ Interaktionsarena</h1>
        <p>
          Rhythmus, Blase, Mustergedächtnis, Auswahlsuche, Schatzsuche, Atem- und Portalfreundlich – alles in einem
          am Boden.
        </p>
      </header>

      {mode === 'menu' && (
        <>
          <div className="activity-menu activity-menu--rich">
            <button type="button" className="panel activity-tile" onClick={() => setMode('rhythm')}>
              <span>🥁</span>
              <h2>Rhythmustanz</h2>
              <p>Tippen Sie rechtzeitig auf die Kämpfe</p>
            </button>
            <button type="button" className="panel activity-tile" onClick={() => setMode('bubbles')}>
              <span>🫧</span>
              <h2>Baloncuk Patlat</h2>
              <p>Machen Sie die Zahlen richtig</p>
            </button>
            <button type="button" className="panel activity-tile" onClick={() => setMode('pattern')}>
              <span>🔆</span>
              <h2>Musterspeicher</h2>
              <p>Wiederholen Sie die Lichter der Reihe nach</p>
            </button>
            <button type="button" className="panel activity-tile" onClick={() => setMode('adventure')}>
              <span>📖</span>
              <h2>Optionales Abenteuer</h2>
              <p>Sie entscheiden, die Geschichte ändert sich</p>
            </button>
            <button type="button" className="panel activity-tile" onClick={() => setMode('hunt')}>
              <span>💎</span>
              <h2>Schatzgitter</h2>
              <p>Finden Sie versteckte Sterne</p>
            </button>
            <button type="button" className="panel activity-tile" onClick={() => setMode('breath')}>
              <span>🌬️</span>
              <h2>Atemgarten</h2>
              <p>3 Runden Cool-Down</p>
            </button>
            <button type="button" className="panel activity-tile" onClick={() => setMode('pet')}>
              <span>🐾</span>
              <h2>Portal Dostu</h2>
              <p>Füttern, spielen, wachsen</p>
            </button>
            <button type="button" className="panel activity-tile" onClick={() => onNavigate('world')}>
              <span>🗺️</span>
              <h2>Welterkundung</h2>
              <p>Territorium öffnen, Schätze sammeln</p>
            </button>
            <button type="button" className="panel activity-tile" onClick={() => onNavigate('activities')}>
              <span>🎮</span>
              <h2>Klasik Oyunlar</h2>
              <p>Erinnerung, Quiz, Aufnahme ...</p>
            </button>
          </div>
          <SocialShare
            payload={{
              title: '🕹️ Interaktionsarena',
              text: 'Ritim, macera, hazine ve portal dostu — Kitap Cenneti’nde oyna!',
              page: 'playground',
              hashtags: ['KitapCenneti', 'Oyun', 'Etkilesim'],
            }}
          />
        </>
      )}

      {mode !== 'menu' && mode !== 'pet' && mode !== 'breath' && (
        <button type="button" className="btn btn--ghost" onClick={() => setMode('menu')} style={{ marginBottom: 12 }}>
          ← Arena-Menü
        </button>
      )}

      {mode === 'pet' && (
        <>
          <button type="button" className="btn btn--ghost" onClick={() => setMode('menu')}>
            ← Arena-Menü
          </button>
          <PetCare />
        </>
      )}
      {mode === 'breath' && (
        <>
          <button type="button" className="btn btn--ghost" onClick={() => setMode('menu')}>
            ← Arena-Menü
          </button>
          <BreathGame />
        </>
      )}
      {mode === 'rhythm' && <RhythmGame />}
      {mode === 'bubbles' && <BubbleGame />}
      {mode === 'pattern' && <PatternGame />}
      {mode === 'adventure' && <AdventureGame />}
      {mode === 'hunt' && <HuntGame />}
    </div>
  )
}

function RhythmGame() {
  const beats = useMemo(() => Array.from({ length: 12 }, (_, i) => (i % 3 === 0 ? 'hit' : 'rest')), [])
  const [i, setI] = useState(0)
  const [score, setScore] = useState(0)
  const [running, setRunning] = useState(false)
  const [confetti, setConfetti] = useState(false)

  useEffect(() => {
    if (!running) return
    const t = window.setInterval(() => {
      setI((x) => {
        if (x + 1 >= beats.length) {
          setRunning(false)
          announceActivityResult(completeActivity('rhythm'))
          setConfetti(true)
          return x
        }
        return x + 1
      })
    }, 700)
    return () => clearInterval(t)
  }, [running, beats.length])

  const current = beats[i]

  return (
    <div className="panel play-game">
      <ConfettiBurst active={confetti} onDone={() => setConfetti(false)} />
      <h2>🥁 Rhythmustanz</h2>
      <p>Tippe bei Rot! Punktestand: {score}</p>
      <button
        type="button"
        className={`rhythm-pad ${current === 'hit' ? 'is-hit' : ''}`}
        disabled={!running}
        onClick={() => {
          if (current === 'hit') {
            setScore((s) => s + 1)
            showToast('Genau richtig! ✨')
          } else showToast('Zu früh / zu spät – warte auf das nächste Signal')
        }}
      >
        {current === 'hit' ? 'JETZT!' : '…'}
      </button>
      <div className="btn-row">
        <button
          type="button"
          className="btn btn--primary"
          onClick={() => {
            setI(0)
            setScore(0)
            setRunning(true)
            setConfetti(false)
          }}
        >
          {running ? 'Läuft …' : 'Starten'}
        </button>
      </div>
    </div>
  )
}

function BubbleGame() {
  const target = useMemo(() => 2 + Math.floor(Math.random() * 8), [])
  const bubbles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        n: 1 + ((i * 3 + target) % 9),
        x: 8 + ((i * 17) % 80),
        y: 10 + ((i * 23) % 70),
        size: 48 + (i % 4) * 10,
      })),
    [target],
  )
  const [popped, setPopped] = useState<number[]>([])
  const [wrong, setWrong] = useState(0)
  const [confetti, setConfetti] = useState(false)
  const need = bubbles.filter((b) => b.n === target).length
  const got = popped.filter((id) => bubbles.find((b) => b.id === id)?.n === target).length

  useEffect(() => {
    if (got >= need && need > 0 && !confetti) {
      setConfetti(true)
      announceActivityResult(completeActivity('bubble'))
      addBonusStars(1)
    }
  }, [got, need, confetti])

  return (
    <div className="panel play-game">
      <ConfettiBurst active={confetti} onDone={() => setConfetti(false)} />
      <h2>🫧 Baloncuk Patlat</h2>
      <p>
        Nur <strong>{target}</strong> die passenden Blasen platzen lassen! ({got}/{need}) · Fehler: {wrong}
      </p>
      <div className="bubble-stage">
        {bubbles.map((b) =>
          popped.includes(b.id) ? null : (
            <button
              key={b.id}
              type="button"
              className="bubble"
              style={{ left: `${b.x}%`, top: `${b.y}%`, width: b.size, height: b.size }}
              onClick={() => {
                if (b.n === target) setPopped((p) => [...p, b.id])
                else {
                  setWrong((w) => w + 1)
                  showToast('Das ist nicht die gesuchte Zahl!')
                }
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

function PatternGame() {
  const colors = ['#e74c3c', '#2a9d8f', '#f4a261', '#4cc9f0']
  const [seq, setSeq] = useState<number[]>([])
  const [input, setInput] = useState<number[]>([])
  const [flash, setFlash] = useState<number | null>(null)
  const [phase, setPhase] = useState<'watch' | 'play' | 'win'>('watch')
  const [confetti, setConfetti] = useState(false)

  const playSeq = async (s: number[]) => {
    setPhase('watch')
    for (const n of s) {
      setFlash(n)
      await new Promise((r) => setTimeout(r, 450))
      setFlash(null)
      await new Promise((r) => setTimeout(r, 180))
    }
    setPhase('play')
    setInput([])
  }

  const start = () => {
    const s = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)]
    setSeq(s)
    void playSeq(s)
  }

  const tap = (n: number) => {
    if (phase !== 'play') return
    const next = [...input, n]
    setInput(next)
    if (seq[next.length - 1] !== n) {
      showToast('Tekrar dene — izle!')
      void playSeq(seq)
      return
    }
    if (next.length === seq.length) {
      if (seq.length >= 5) {
        setPhase('win')
        setConfetti(true)
        announceActivityResult(completeActivity('pattern'))
        return
      }
      const grown = [...seq, Math.floor(Math.random() * 4)]
      setSeq(grown)
      window.setTimeout(() => void playSeq(grown), 500)
    }
  }

  return (
    <div className="panel play-game">
      <ConfettiBurst active={confetti} onDone={() => setConfetti(false)} />
      <h2>🔆 Mustergedächtnis</h2>
      <p>
        {phase === 'watch' ? 'Beobachten …' : phase === 'win' ? 'Mustermeister!' : `Du bist dran (${input.length}/${seq.length})`}
      </p>
      <div className="pattern-grid">
        {colors.map((c, i) => (
          <button
            key={c}
            type="button"
            className={`pattern-cell ${flash === i ? 'is-flash' : ''}`}
            style={{ background: c }}
            onClick={() => tap(i)}
          />
        ))}
      </div>
      <button type="button" className="btn btn--primary" onClick={start}>
        {seq.length ? 'Nochmal' : 'Starten'}
      </button>
    </div>
  )
}

function AdventureGame() {
  const [advId, setAdvId] = useState(ADVENTURES[0].id)
  const adv = ADVENTURES.find((a) => a.id === advId) || ADVENTURES[0]
  const [nodeId, setNodeId] = useState(adv.start)
  const [stars, setStars] = useState(0)
  const [confetti, setConfetti] = useState(false)
  const node = adv.nodes[nodeId]

  useEffect(() => {
    setNodeId(adv.start)
    setStars(0)
  }, [advId])

  return (
    <div className="panel play-game">
      <ConfettiBurst active={confetti} onDone={() => setConfetti(false)} />
      <div className="library-filters" style={{ marginBottom: 12 }}>
        {ADVENTURES.map((a) => (
          <button
            key={a.id}
            type="button"
            className={`stem-chip ${advId === a.id ? 'is-active' : ''}`}
            onClick={() => setAdvId(a.id)}
          >
            {a.emoji} {a.title}
          </button>
        ))}
      </div>
      <h2>
        {node.emoji} {adv.title}
      </h2>
      <p className="adventure-text">{node.text}</p>
      <p className="section-hint">Gesammelte Sterne: {stars}</p>
      {node.ending ? (
        <button
          type="button"
          className="btn btn--primary"
          onClick={() => {
            announceActivityResult(completeActivity('adventure'))
            if (stars) addBonusStars(stars)
            setConfetti(true)
            showToast('Macera tamam!')
            setNodeId(adv.start)
            setStars(0)
          }}
        >
          Holen Sie sich die Belohnung und kehren Sie zum Anfang zurück
        </button>
      ) : (
        <div className="btn-row" style={{ flexWrap: 'wrap' }}>
          {node.choices?.map((c) => (
            <button
              key={c.label}
              type="button"
              className="btn btn--primary"
              onClick={() => {
                setStars((s) => s + (c.stars || 0))
                setNodeId(c.next)
              }}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function HuntGame() {
  const size = 16
  const secret = useMemo(() => {
    const s = new Set<number>()
    while (s.size < 5) s.add(Math.floor(Math.random() * size))
    return s
  }, [])
  const [found, setFound] = useState<number[]>([])
  const [misses, setMisses] = useState(0)
  const [confetti, setConfetti] = useState(false)

  useEffect(() => {
    if (found.length >= 5 && !confetti) {
      setConfetti(true)
      announceActivityResult(completeActivity('hunt'))
      addBonusStars(2)
    }
  }, [found, confetti])

  return (
    <div className="panel play-game">
      <ConfettiBurst active={confetti} onDone={() => setConfetti(false)} />
      <h2>💎 Schatzgitter</h2>
      <p>
        Finde 5 versteckte Sterne! ({found.length}/5) · leer: {misses}
      </p>
      <div className="hunt-grid">
        {Array.from({ length: size }, (_, i) => (
          <button
            key={i}
            type="button"
            className={`hunt-cell ${found.includes(i) ? 'is-found' : ''}`}
            onClick={() => {
              if (found.includes(i)) return
              if (secret.has(i)) setFound((f) => [...f, i])
              else {
                setMisses((m) => m + 1)
                showToast('Leeres Feld')
              }
            }}
          >
            {found.includes(i) ? '⭐' : '?'}
          </button>
        ))}
      </div>
    </div>
  )
}
