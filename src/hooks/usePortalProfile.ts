import { useCallback, useEffect, useState } from 'react'
import type { PortalMode } from '../types/nav'

const PROFILE_KEY = 'kitapcenneti-portal-profile'
const PROFILES_KEY = 'kitapcenneti-profiles'
const ACTIVE_KEY = 'kitapcenneti-active-profile'
const MODE_KEY = 'kitapcenneti-portal-mode'
const JOURNAL_KEY = 'kitapcenneti-journal'
const WEEK_PLAN_KEY = 'kitapcenneti-week-plan'
const PIN_KEY = 'kitapcenneti-family-pin'

export type AgeGroup = '3-5' | '6-8' | '9-12'

export interface PortalProfile {
  id: string
  childName: string
  avatar: string
  ageGroup: AgeGroup
  interests: string[]
  goal: string
}

export interface JournalEntry {
  id: string
  date: string
  kind: string
  title: string
  note: string
  stars: number
}

const DEFAULT_PROFILE: PortalProfile = {
  id: 'default',
  childName: '',
  avatar: '🦊',
  ageGroup: '6-8',
  interests: ['masal', 'oyun'],
  goal: 'Her gün bir masal veya oyun',
}

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function uid() {
  return `p-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`
}

function migrateProfiles(): PortalProfile[] {
  const existing = readJson<PortalProfile[]>(PROFILES_KEY, [])
  if (existing.length) {
    return existing.map((p) => ({ ...DEFAULT_PROFILE, ...p, id: p.id || uid() }))
  }
  const legacy = readJson<Partial<PortalProfile>>(PROFILE_KEY, {})
  const first: PortalProfile = { ...DEFAULT_PROFILE, ...legacy, id: 'default' }
  localStorage.setItem(PROFILES_KEY, JSON.stringify([first]))
  localStorage.setItem(ACTIVE_KEY, first.id)
  return [first]
}

export function getActiveProfileId(): string {
  return localStorage.getItem(ACTIVE_KEY) || 'default'
}

export function getPortalMode(): PortalMode {
  return localStorage.getItem(MODE_KEY) === 'parent' ? 'parent' : 'kids'
}

export function setPortalMode(mode: PortalMode) {
  localStorage.setItem(MODE_KEY, mode)
  window.dispatchEvent(new CustomEvent('kitapcenneti-portal'))
}

export function hasFamilyPin(): boolean {
  return Boolean(localStorage.getItem(PIN_KEY))
}

export function setFamilyPin(pin: string | null) {
  if (!pin) localStorage.removeItem(PIN_KEY)
  else localStorage.setItem(PIN_KEY, pin)
  window.dispatchEvent(new CustomEvent('kitapcenneti-portal'))
}

export function checkFamilyPin(pin: string): boolean {
  const saved = localStorage.getItem(PIN_KEY)
  if (!saved) return true
  return saved === pin
}

export function addJournalEntry(entry: Omit<JournalEntry, 'id' | 'date'>) {
  const list = readJson<JournalEntry[]>(JOURNAL_KEY, [])
  const next: JournalEntry = {
    ...entry,
    id: `${Date.now()}`,
    date: new Date().toISOString(),
  }
  localStorage.setItem(JOURNAL_KEY, JSON.stringify([next, ...list].slice(0, 100)))
  window.dispatchEvent(new CustomEvent('kitapcenneti-portal'))
}

export function usePortalProfile() {
  const [profiles, setProfiles] = useState<PortalProfile[]>([DEFAULT_PROFILE])
  const [activeId, setActiveId] = useState('default')
  const [profile, setProfileState] = useState<PortalProfile>(DEFAULT_PROFILE)
  const [mode, setModeState] = useState<PortalMode>('kids')
  const [journal, setJournal] = useState<JournalEntry[]>([])
  const [weekPlan, setWeekPlan] = useState<Record<string, string[]>>({})
  const [pinEnabled, setPinEnabled] = useState(false)

  const refresh = useCallback(() => {
    const list = migrateProfiles()
    const aid = localStorage.getItem(ACTIVE_KEY) || list[0].id
    const active = list.find((p) => p.id === aid) || list[0]
    setProfiles(list)
    setActiveId(active.id)
    setProfileState(active)
    setModeState(getPortalMode())
    setJournal(readJson(JOURNAL_KEY, []))
    setWeekPlan(readJson(WEEK_PLAN_KEY, {}))
    setPinEnabled(hasFamilyPin())
  }, [])

  useEffect(() => {
    refresh()
    const on = () => refresh()
    window.addEventListener('kitapcenneti-portal', on)
    window.addEventListener('storage', on)
    return () => {
      window.removeEventListener('kitapcenneti-portal', on)
      window.removeEventListener('storage', on)
    }
  }, [refresh])

  const persistProfiles = (list: PortalProfile[], nextActive?: string) => {
    localStorage.setItem(PROFILES_KEY, JSON.stringify(list))
    const aid = nextActive || activeId
    localStorage.setItem(ACTIVE_KEY, aid)
    const active = list.find((p) => p.id === aid) || list[0]
    localStorage.setItem(PROFILE_KEY, JSON.stringify(active))
    setProfiles(list)
    setActiveId(active.id)
    setProfileState(active)
    window.dispatchEvent(new CustomEvent('kitapcenneti-portal'))
    window.dispatchEvent(new CustomEvent('kitapcenneti-progress'))
  }

  const saveProfile = (next: PortalProfile) => {
    const list = profiles.map((p) => (p.id === next.id ? next : p))
    if (!list.find((p) => p.id === next.id)) list.push(next)
    persistProfiles(list, next.id)
  }

  const mergeProfiles = (incoming: PortalProfile[]) => {
    if (!incoming.length) return
    const list = incoming.slice(0, 5).map((item) => ({ ...DEFAULT_PROFILE, ...item, id: item.id }))
    const nextActive = list.some((item) => item.id === activeId) ? activeId : list[0].id
    persistProfiles(list, nextActive)
  }

  const switchProfile = (id: string) => {
    if (!profiles.find((p) => p.id === id)) return
    persistProfiles(profiles, id)
  }

  const addProfile = (maxProfiles = 5) => {
    if (profiles.length >= maxProfiles) return null
    const next: PortalProfile = {
      ...DEFAULT_PROFILE,
      id: uid(),
      childName: `Kardeş ${profiles.length}`,
      avatar: ['🐻', '🦄', '🐱', '🐼', '🦁'][profiles.length % 5],
    }
    persistProfiles([...profiles, next], next.id)
    return next
  }

  const removeProfile = (id: string) => {
    if (profiles.length <= 1) return
    const list = profiles.filter((p) => p.id !== id)
    persistProfiles(list, list[0].id)
  }

  const setMode = (m: PortalMode) => {
    setPortalMode(m)
    setModeState(m)
  }

  const saveWeekPlan = (plan: Record<string, string[]>) => {
    localStorage.setItem(WEEK_PLAN_KEY, JSON.stringify(plan))
    setWeekPlan(plan)
    window.dispatchEvent(new CustomEvent('kitapcenneti-portal'))
  }

  return {
    profile,
    profiles,
    activeId,
    saveProfile,
    mergeProfiles,
    switchProfile,
    addProfile,
    removeProfile,
    mode,
    setMode,
    journal,
    weekPlan,
    saveWeekPlan,
    refresh,
    pinEnabled,
    setFamilyPin,
    checkFamilyPin,
    hasFamilyPin,
  }
}
