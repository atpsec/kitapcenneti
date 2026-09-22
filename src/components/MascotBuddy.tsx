import { useMemo, useState } from 'react'
import type { PageId } from '../types/nav'
import { WHAT_NEXT } from '../data/stickers'

interface MascotBuddyProps {
  onNavigate: (page: PageId) => void
}

const LINES = [
  'Wohin schauen wir heute?',
  'Möchtest du ein kurzes Spiel?',
  'Sollen wir eine Geschichte hören?',
  'Das Überraschungsrad wartet auf dich.',
  'Du kannst einen neuen Sticker öffnen.',
  'In der Live-Arena wartet eine Stundenaufgabe!',
  'Die Überraschungsbox könnte geladen sein …',
  'Dein Portal-Freund könnte hungrig sein!',
  'In der Interaktionsarena gibt es einen Rhythmustanz!',
  'Auf der Karte wartet vielleicht ein Schatz …',
]

export function MascotBuddy({ onNavigate }: MascotBuddyProps) {
  const [open, setOpen] = useState(false)
  const [tick, setTick] = useState(0)
  const line = useMemo(() => LINES[tick % LINES.length], [tick])
  const tip = useMemo(() => WHAT_NEXT[tick % WHAT_NEXT.length], [tick])

  return (
    <div className={`mascot ${open ? 'is-open' : ''}`}>
      {open && (
        <div className="mascot__bubble">
          <p>{line}</p>
          <button
            type="button"
            className="btn btn--small"
            onClick={() => {
              onNavigate(tip.page as PageId)
              setOpen(false)
            }}
          >
            {tip.emoji} {tip.title}
          </button>
          <button
            type="button"
            className="mascot__shuffle"
            onClick={() => setTick((t) => t + 1)}
          >
            Noch ein Vorschlag
          </button>
        </div>
      )}
      <button
        type="button"
        className="mascot__btn"
        aria-label="Hilfreicher Begleiter"
        onClick={() => {
          setOpen((v) => !v)
          setTick((t) => t + 1)
        }}
      >
        <span className="mascot__face">🦊</span>
      </button>
    </div>
  )
}
