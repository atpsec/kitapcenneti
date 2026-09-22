import { useEffect, useRef, useState } from 'react'
import { announceActivityResult } from './Toast'
import { completeActivity } from '../hooks/useProgress'
import { ConfettiBurst } from './ConfettiBurst'

const PHASES = [
  { id: 'in', label: 'Atme langsam durch die Nase ein …', seconds: 4 },
  { id: 'hold', label: 'Tut…', seconds: 2 },
  { id: 'out', label: 'Atme langsam durch den Mund aus …', seconds: 4 },
] as const

export function BreathGame() {
  const [running, setRunning] = useState(false)
  const [cycle, setCycle] = useState(0)
  const [phase, setPhase] = useState(0)
  const [left, setLeft] = useState<number>(PHASES[0].seconds)
  const [done, setDone] = useState(false)
  const [confetti, setConfetti] = useState(false)
  const phaseRef = useRef(0)
  const cycleRef = useRef(0)

  useEffect(() => {
    if (!running || done) return
    const t = window.setInterval(() => {
      setLeft((s) => {
        if (s > 1) return s - 1
        let p = phaseRef.current + 1
        let c = cycleRef.current
        if (p >= PHASES.length) {
          p = 0
          c += 1
          cycleRef.current = c
          setCycle(c)
          if (c >= 3) {
            setRunning(false)
            setDone(true)
            setConfetti(true)
            announceActivityResult(completeActivity('calm'))
            return 0
          }
        }
        phaseRef.current = p
        setPhase(p)
        return PHASES[p].seconds
      })
    }, 1000)
    return () => clearInterval(t)
  }, [running, done])

  const p = PHASES[phase]

  return (
    <div className="breath-game panel">
      <ConfettiBurst active={confetti} onDone={() => setConfetti(false)} />
      <h3>🌬️ Atemgarten</h3>
      <p>3 Runden ruhiges Atmen – lassen Sie Ihren Körper weicher werden.</p>
      <div className={`breath-orb is-${p.id} ${running ? 'is-running' : ''}`} aria-hidden="true" />
      <p className="breath-game__label">
        {done ? 'Wunderbar – du fühlst dich ruhiger 💛' : running ? p.label : 'Starte, wenn du bereit bist'}
      </p>
      <p>
        Runde {Math.min(cycle + (running ? 1 : 0), 3)}/3 · {running ? `${left} Sek.` : done ? 'fertig' : '—'}
      </p>
      <div className="btn-row">
        {!running && !done && (
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              phaseRef.current = 0
              cycleRef.current = 0
              setPhase(0)
              setCycle(0)
              setLeft(PHASES[0].seconds)
              setDone(false)
              setRunning(true)
            }}
          >
            beginnen
          </button>
        )}
        {done && (
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => {
              setDone(false)
              setCycle(0)
              setPhase(0)
            }}
          >
            Noch einmal
          </button>
        )}
        {running && (
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => {
              setRunning(false)
              setDone(false)
            }}
          >
            Durdur
          </button>
        )}
      </div>
    </div>
  )
}
