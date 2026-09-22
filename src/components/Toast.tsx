import { useEffect, useState } from 'react'

export interface ToastMessage {
  id: number
  text: string
}

let pushToast: ((text: string) => void) | null = null
let toastId = 1

export function showToast(text: string) {
  pushToast?.(text)
}

export function ToastHost() {
  const [items, setItems] = useState<ToastMessage[]>([])

  useEffect(() => {
    pushToast = (text: string) => {
      const id = toastId++
      setItems((prev) => [...prev, { id, text }])
      window.setTimeout(() => {
        setItems((prev) => prev.filter((t) => t.id !== id))
      }, 3200)
    }
    return () => {
      pushToast = null
    }
  }, [])

  if (!items.length) return null

  return (
    <div className="toast-host" aria-live="polite">
      {items.map((t) => (
        <div key={t.id} className="toast">
          {t.text}
        </div>
      ))}
    </div>
  )
}

/** Helper: announce activity rewards */
export function announceActivityResult(result: {
  newBadges: { emoji: string; title: string }[]
  questCompleted?: { title: string; stars: number; emoji: string }
}) {
  if (result.questCompleted) {
    showToast(
      `${result.questCompleted.emoji} Aufgabe erledigt: ${result.questCompleted.title} (+${result.questCompleted.stars}⭐)`,
    )
  }
  for (const b of result.newBadges) {
    showToast(`${b.emoji} Yeni rozet: ${b.title}`)
  }
}
