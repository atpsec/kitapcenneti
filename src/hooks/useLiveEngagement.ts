import { useCallback, useEffect, useState } from 'react'
import {
  dayKey,
  hourKey,
  hourlyChallenge,
  msUntilNextHour,
  slotChallenges,
  type FactoryChallenge,
} from '../engines/contentFactory'

const VISITS_KEY = 'kitapcenneti-visits'
const HOURLY_DONE_KEY = 'kitapcenneti-hourly-done'
const SLOT_DONE_KEY = 'kitapcenneti-slot-done'
const MYSTERY_KEY = 'kitapcenneti-mystery'
const LAST_SEEN_KEY = 'kitapcenneti-last-seen'
const HOURLY_STREAK_KEY = 'kitapcenneti-hourly-streak'
const STARS_KEY = 'kitapcenneti-stars'

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function bumpStars(n: number) {
  const stars = Number(localStorage.getItem(STARS_KEY) || 0) + n
  localStorage.setItem(STARS_KEY, String(stars))
  window.dispatchEvent(new CustomEvent('kitapcenneti-progress'))
}

export function useLiveEngagement() {
  const [now, setNow] = useState(() => new Date())
  const [hourlyDone, setHourlyDone] = useState(false)
  const [slotDone, setSlotDone] = useState<string[]>([])
  const [mysteryReady, setMysteryReady] = useState(false)
  const [hourlyStreak, setHourlyStreak] = useState(0)
  const [visitCount, setVisitCount] = useState(0)
  const [welcomeBack, setWelcomeBack] = useState<string | null>(null)

  const refresh = useCallback(() => {
    const d = new Date()
    setNow(d)
    const hk = hourKey(d)
    const doneHour = readJson<string[]>(HOURLY_DONE_KEY, [])
    setHourlyDone(doneHour.includes(hk))
    const slotKey = `${dayKey(d)}`
    const doneSlots = readJson<Record<string, string[]>>(SLOT_DONE_KEY, {})
    setSlotDone(doneSlots[slotKey] || [])
    const mystery = readJson<{ last: number }>(MYSTERY_KEY, { last: 0 })
    setMysteryReady(Date.now() - mystery.last >= 3 * 60 * 60 * 1000)
    setHourlyStreak(Number(localStorage.getItem(HOURLY_STREAK_KEY) || 0))
    const visits = readJson<string[]>(VISITS_KEY, [])
    setVisitCount(visits.length)
  }, [])

  useEffect(() => {
    // record visit
    const d = new Date()
    const hk = hourKey(d)
    const visits = readJson<string[]>(VISITS_KEY, [])
    if (!visits.includes(hk)) {
      const next = [...visits, hk].slice(-168) // ~1 week of hours
      localStorage.setItem(VISITS_KEY, JSON.stringify(next))

      const lastSeen = Number(localStorage.getItem(LAST_SEEN_KEY) || 0)
      const gapH = lastSeen ? (Date.now() - lastSeen) / 3600000 : 0
      if (gapH >= 4 && gapH < 48) {
        setWelcomeBack('Du bist wieder da! Stündliche Überraschungen warten auf dich ✨')
        bumpStars(1)
      } else if (gapH >= 48) {
        setWelcomeBack('Schön, dass du wieder da bist — eine neue Wochenaktion wartet 🎁')
        bumpStars(3)
      }

      // hourly visit streak
      const prevHour = hourKey(new Date(Date.now() - 3600000))
      let streak = Number(localStorage.getItem(HOURLY_STREAK_KEY) || 0)
      if (visits.includes(prevHour) || readJson<string[]>(HOURLY_DONE_KEY, []).includes(prevHour)) {
        streak += 1
      } else {
        streak = 1
      }
      localStorage.setItem(HOURLY_STREAK_KEY, String(streak))
    }
    localStorage.setItem(LAST_SEEN_KEY, String(Date.now()))
    refresh()

    const tick = window.setInterval(() => {
      setNow(new Date())
      refresh()
    }, 15000)
    window.addEventListener('kitapcenneti-progress', refresh)
    return () => {
      clearInterval(tick)
      window.removeEventListener('kitapcenneti-progress', refresh)
    }
  }, [refresh])

  const challenge = hourlyChallenge(now)
  const slots = slotChallenges(now)
  const msLeft = msUntilNextHour(now)

  const completeHourly = () => {
    const hk = hourKey(now)
    const done = readJson<string[]>(HOURLY_DONE_KEY, [])
    if (done.includes(hk)) return false
    localStorage.setItem(HOURLY_DONE_KEY, JSON.stringify([...done, hk].slice(-200)))
    bumpStars(challenge.stars)
    setHourlyDone(true)
    window.dispatchEvent(new CustomEvent('kitapcenneti-progress'))
    return true
  }

  const completeSlot = (c: FactoryChallenge) => {
    const key = dayKey(now)
    const map = readJson<Record<string, string[]>>(SLOT_DONE_KEY, {})
    const list = map[key] || []
    if (list.includes(c.id)) return false
    map[key] = [...list, c.id]
    localStorage.setItem(SLOT_DONE_KEY, JSON.stringify(map))
    bumpStars(c.stars)
    setSlotDone(map[key])
    window.dispatchEvent(new CustomEvent('kitapcenneti-progress'))
    return true
  }

  const openMystery = () => {
    const mystery = readJson<{ last: number }>(MYSTERY_KEY, { last: 0 })
    if (Date.now() - mystery.last < 3 * 60 * 60 * 1000) return null
    localStorage.setItem(MYSTERY_KEY, JSON.stringify({ last: Date.now() }))
    const reward = 2 + (now.getHours() % 4)
    bumpStars(reward)
    setMysteryReady(false)
    return { stars: reward, title: 'Geheimnisvolle Box!', emoji: '🎁' }
  }

  return {
    now,
    challenge,
    slots,
    hourlyDone,
    slotDone,
    mysteryReady,
    hourlyStreak,
    visitCount,
    welcomeBack,
    clearWelcome: () => setWelcomeBack(null),
    msLeft,
    completeHourly,
    completeSlot,
    openMystery,
    refresh,
  }
}
