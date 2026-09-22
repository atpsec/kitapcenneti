import { useEffect, useState } from 'react'
import type { PageId } from '../types/nav'
import { getLastVisit, type LastVisit } from '../utils/lastVisit'

interface Props {
  onNavigate: (page: PageId, itemId?: string) => void
}

export function ContinueCard({ onNavigate }: Props) {
  const [visit, setVisit] = useState<LastVisit | null>(null)

  useEffect(() => {
    setVisit(getLastVisit())
  }, [])

  if (!visit) return null
  const hours = (Date.now() - visit.at) / 3600000
  if (hours > 72) return null

  return (
    <button
      type="button"
      className="continue-card"
      onClick={() => onNavigate(visit.page, visit.itemId)}
    >
      <span>▶️</span>
      <div>
        <strong>Machen Sie dort weiter, wo Sie aufgehört haben</strong>
        <p>
          {visit.label}
          {hours < 1 ? ' · gerade eben' : hours < 24 ? ` · ${Math.floor(hours)} Stunden zuvor` : ' · gestern'}
        </p>
      </div>
      <small>Öffnen →</small>
    </button>
  )
}
