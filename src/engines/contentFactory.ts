/**
 * Seeded procedural content — every hour/day feels unique without a 50MB bundle.
 * Deterministic: same seed → same item.
 */

import type { PageId } from '../types/nav'

export function hashSeed(...parts: (string | number)[]): number {
  let h = 2166136261
  const s = parts.join('|')
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

export function pick<T>(arr: readonly T[], seed: number): T {
  // hashSeed returns unsigned 32-bit; signed >> can go negative → arr[neg] === undefined
  const i = (seed >>> 0) % arr.length
  return arr[i]!
}

export function hourKey(d = new Date()): string {
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}-${d.getHours()}`
}

export function dayKey(d = new Date()): string {
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
}

const HEROES = [
  'Mimi', 'Flocke', 'Pati', 'Nova', 'Tiko', 'Luna', 'Funke', 'Wolke', 'Olive', 'Koralle',
  'Kompass', 'Blatt', 'Leuchtturm', 'Wind', 'Sand', 'Feige', 'Dahlie', 'Blau', 'Zimt', 'Lale',
]
const PLACES = [
  'Wald', 'Küste', 'Himmel', 'Bibliothek', 'Garten', 'Insel', 'Berg', 'Dorf', 'Labyrinth', 'Teich',
  'Raumstation', 'Regenbogenbrücke', 'Märchenschloss', 'Wissenschaftsinsel', 'Musiktal',
]
const MOODS = ['ruhig', 'fröhlich', 'neugierig', 'mutig', 'sanft', 'hell', 'warm', 'abenteuerlich']
const THEMES = ['Freundschaft', 'Mut', 'Neugier', 'Teilen', 'Schlaf', 'Natur', 'Weltraum', 'Schule', 'Kunst', 'Sport']
const EMOJIS = ['⭐', '🦊', '🌙', '🌊', '🚀', '🌿', '🎈', '🐻', '🦋', '🌈', '🐢', '🦄', '🐠', '🌻', '🏰', '🧠']

export interface FactoryStory {
  id: string
  title: string
  emoji: string
  age: string
  duration: string
  theme: string
  summary: string
  text: string
  source: 'live'
}

export function factoryStory(seed: number): FactoryStory {
  const s = seed >>> 0
  const hero = pick(HEROES, s)
  const place = pick(PLACES, s >>> 3)
  const mood = pick(MOODS, s >>> 5)
  const theme = pick(THEMES, s >>> 7)
  const emoji = pick(EMOJIS, s >>> 2)
  const n = (s % 900) + 1
  return {
    id: `live-story-${s}`,
    title: `${hero}s Abenteuer rund um ${place} #${n}`,
    emoji,
    age: pick(['3-5', '4-7', '5-8', '6-9', '7-10'], s),
    duration: `${3 + (s % 5)} Min.`,
    theme,
    summary: `Eine ${theme.toLowerCase()}-Geschichte: ${hero} entdeckt ${place} und findet einen neuen Freund.`,
    text: `Es war einmal ein ${mood}er Held namens ${hero}, der im ${place} lebte.
Eines Tages gab es ein kleines Problem: Niemand fand den richtigen Weg.
${hero} atmete tief durch, sah sich um und fasste einen Plan.
Mit Freunden und guter Zusammenarbeit blieb am Ende alles sicher.
Nach diesem ${theme.toLowerCase()}-Tag wirkte der Himmel noch heller.
Lächle jetzt wie ${hero} und atme ganz ruhig ein.`,
    source: 'live',
  }
}

export interface FactoryChallenge {
  id: string
  title: string
  emoji: string
  stars: number
  minutes: number
  page: PageId
  hint: string
  window: 'hourly' | 'daily' | 'slot'
  slot?: string
}

const CHALLENGE_TEMPLATES: Omit<FactoryChallenge, 'id' | 'window' | 'slot'>[] = [
  { title: 'Kurze Hörpause', emoji: '🎧', stars: 2, minutes: 5, page: 'audio', hint: 'Höre eine Geschichte' },
  { title: 'Farbenregen', emoji: '🖍️', stars: 2, minutes: 10, page: 'coloring', hint: 'Male eine Seite aus' },
  { title: 'Denkfunke', emoji: '❓', stars: 2, minutes: 5, page: 'activities', hint: 'Löse ein Mini-Quiz' },
  { title: 'Memory-Blitz', emoji: '🧠', stars: 3, minutes: 8, page: 'activities', hint: 'Beende ein Memory-Spiel' },
  { title: 'Wörtertanz', emoji: '🔤', stars: 2, minutes: 6, page: 'activities', hint: 'Spiele das Buchstabenrätsel' },
  { title: 'Gefühlsradar', emoji: '💛', stars: 1, minutes: 3, page: 'feelings', hint: 'Mach einen Check-in' },
  { title: 'STEM-Funke', emoji: '🔬', stars: 2, minutes: 10, page: 'stem', hint: 'Öffne eine Experimentkarte' },
  { title: 'Reimtempo', emoji: '🎵', stars: 2, minutes: 4, page: 'rhymes', hint: 'Sag einen Reim auf' },
  { title: 'Heldengruß', emoji: '🦸', stars: 2, minutes: 5, page: 'heroes', hint: 'Lies über einen Helden' },
  { title: 'KI-Funke', emoji: '✨', stars: 3, minutes: 12, page: 'create', hint: 'Erfinde eine kurze Geschichte' },
  { title: 'Kartenentdeckung', emoji: '🗺️', stars: 2, minutes: 6, page: 'world', hint: 'Öffne eine Region' },
  { title: 'Bibliotheks-Schatzsuche', emoji: '📚', stars: 1, minutes: 5, page: 'library', hint: 'Entdecke drei Inhalte' },
  { title: 'Glücksrad', emoji: '🎡', stars: 1, minutes: 4, page: 'fun', hint: 'Drehe das Rad' },
  { title: 'Sammlungsrunde', emoji: '🧭', stars: 2, minutes: 6, page: 'discover', hint: 'Schau dir eine Sammlung an' },
  { title: 'Ruhiger Atemzug', emoji: '🌬️', stars: 1, minutes: 3, page: 'feelings', hint: 'Atme dreimal tief ein' },
]

export function hourlyChallenge(d = new Date()): FactoryChallenge {
  const seed = hashSeed(hourKey(d), 'hourly')
  const t = pick(CHALLENGE_TEMPLATES, seed)
  return {
    ...t,
    id: `hour-${hourKey(d)}-${t.page}`,
    title: `Aufgabe der Stunde: ${t.title}`,
    window: 'hourly',
  }
}

export function slotChallenges(d = new Date()): FactoryChallenge[] {
  const hour = d.getHours()
  const slot =
    hour < 11 ? 'morning' : hour < 15 ? 'midday' : hour < 19 ? 'afternoon' : 'evening'
  const seed = hashSeed(dayKey(d), slot)
  return [0, 1, 2].map((i) => {
    const t = pick(CHALLENGE_TEMPLATES, seed + i * 17)
    const labels: Record<string, string> = {
      morning: 'Morgen',
      midday: 'Mittag',
      afternoon: 'Nachmittag',
      evening: 'Abend',
    }
    return {
      ...t,
      id: `slot-${dayKey(d)}-${slot}-${i}`,
      title: `${labels[slot]}aufgabe: ${t.title}`,
      window: 'slot' as const,
      slot,
    }
  })
}

export interface FactoryQuiz {
  question: string
  options: string[]
  answer: number
}

export function factoryQuiz(seed: number): FactoryQuiz {
  const s = seed >>> 0
  const a = 2 + (s % 12)
  const b = 1 + ((s >>> 3) % 9)
  const kind = s % 5
  if (kind === 0) {
    return {
      question: `Wie viel ist ${a} + ${b}?`,
      options: [`${a + b - 1}`, `${a + b}`, `${a + b + 1}`, `${a * b}`],
      answer: 1,
    }
  }
  if (kind === 1) {
    const animal = pick(['Katze', 'Hund', 'Fisch', 'Vogel', 'Hase', 'Bär'], s)
    return {
      question: `Zu welcher Gruppe gehört der ${animal}?`,
      options: ['Pflanze', 'Tier', 'Stein', 'Wolke'],
      answer: 1,
    }
  }
  if (kind === 2) {
    const place = pick(['Berlin', 'Hamburg', 'München', 'Köln'], s)
    const isCapital = place === 'Berlin'
    return {
      question: 'Was ist die Hauptstadt von Deutschland?',
      options: isCapital
        ? ['Hamburg', 'Berlin', 'München', 'Köln']
        : ['Hamburg', 'München', 'Berlin', place],
      answer: isCapital ? 1 : 2,
    }
  }
  if (kind === 3) {
    return {
      question: 'Wie viele Farben hat ein Regenbogen ungefähr?',
      options: ['3', '5', '7', '12'],
      answer: 2,
    }
  }
  return {
    question: 'Was stärkt Lesen besonders?',
    options: ['Die Fantasie', 'Nur den Schlaf', 'Das Rennen', 'Gar nichts'],
    answer: 0,
  }
}

export function factoryQuizBatch(baseSeed: number, count: number): FactoryQuiz[] {
  return Array.from({ length: count }, (_, i) => factoryQuiz(hashSeed(baseSeed, i)))
}

export interface LiveDrop {
  id: string
  emoji: string
  title: string
  blurb: string
  page: PageId
  itemId?: string
  kind: string
}

export function liveDrops(d = new Date(), count = 12): LiveDrop[] {
  const base = hashSeed(hourKey(d), 'drops')
  return Array.from({ length: count }, (_, i) => {
    const seed = hashSeed(base, i)
    const story = factoryStory(seed)
    const page = pick(
      ['audio', 'coloring', 'stem', 'heroes', 'fun', 'activities', 'world', 'discover', 'rhymes', 'feelings'] as PageId[],
      seed,
    )
    return {
      id: `drop-${hourKey(d)}-${i}`,
      emoji: story.emoji,
      title: i % 2 === 0 ? story.title : `Entdeckung: ${pick(THEMES, seed)}-Ecke`,
      blurb: story.summary,
      page,
      itemId: page === 'audio' ? undefined : undefined,
      kind: page,
    }
  })
}

/** How many ms until next hour boundary */
export function msUntilNextHour(d = new Date()): number {
  const next = new Date(d)
  next.setMinutes(0, 0, 0)
  next.setHours(next.getHours() + 1)
  return next.getTime() - d.getTime()
}

export const DAY_SLOTS = [
  { id: 'morning', label: 'Morgenlicht', emoji: '🌅', start: 6, end: 11 },
  { id: 'midday', label: 'Mittagsfunke', emoji: '☀️', start: 11, end: 15 },
  { id: 'afternoon', label: 'Nachmittagsabenteuer', emoji: '🌤️', start: 15, end: 19 },
  { id: 'evening', label: 'Abendsterne', emoji: '🌙', start: 19, end: 23 },
  { id: 'night', label: 'Nachtlied', emoji: '😴', start: 23, end: 6 },
] as const

export function currentSlot(d = new Date()) {
  const h = d.getHours()
  for (const s of DAY_SLOTS) {
    if (s.id === 'night') {
      if (h >= 23 || h < 6) return s
    } else if (h >= s.start && h < s.end) return s
  }
  return DAY_SLOTS[0]
}

export function weeklyEvent(d = new Date()) {
  const day = d.getDay()
  const events = [
    { title: 'Sonntags-Geschichtenmarathon', emoji: '📖', page: 'audio' as PageId, blurb: 'Höre drei Geschichten und sammle Sterne!' },
    { title: 'Montag ist Denktag', emoji: '🧠', page: 'activities' as PageId, blurb: 'Quiz und Memory – stark in die Woche.' },
    { title: 'Dienstag-Kunstwerkstatt', emoji: '🎨', page: 'coloring' as PageId, blurb: 'Mal- und Doodle-Tag.' },
    { title: 'Mittwoch ist Wissenschaftstag', emoji: '🔬', page: 'stem' as PageId, blurb: 'Entdecke STEM-Karten.' },
    { title: 'Donnerstag der Gefühle', emoji: '💛', page: 'feelings' as PageId, blurb: 'Check-in und zur Ruhe kommen.' },
    { title: 'Freitagabend-Spaß', emoji: '🎡', page: 'fun' as PageId, blurb: 'Rad, Rätsel und Sticker!' },
    { title: 'Samstag als Familie', emoji: '👨‍👩‍👧', page: 'paths' as PageId, blurb: 'Lernweg und Tagebuch.' },
  ]
  return events[day]
}
