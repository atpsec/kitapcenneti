import { dayKey, factoryStory, hashSeed, pick } from '../engines/contentFactory'
import type { AgeGroup } from '../hooks/usePortalProfile'
import { getMood, type MoodId } from './lastVisit'
import type { PageId } from '../types/nav'

export interface SmartPick {
  id: string
  emoji: string
  title: string
  blurb: string
  page: PageId
  reason: string
}

const MOOD_PAGES: Record<MoodId, PageId[]> = {
  mutlu: ['fun', 'playground', 'activities'],
  sakin: ['audio', 'feelings', 'coloring'],
  meraklı: ['stem', 'world', 'playground'],
  yorgun: ['audio', 'feelings', 'rhymes'],
  cesur: ['heroes', 'create', 'live'],
}

const AGE_BIAS: Record<AgeGroup, PageId[]> = {
  '3-5': ['audio', 'coloring', 'playground', 'fun'],
  '6-8': ['activities', 'playground', 'stem', 'live'],
  '9-12': ['create', 'stem', 'world', 'playground'],
}

export function editorPicks(d = new Date()): SmartPick[] {
  const seed = hashSeed(dayKey(d), 'editor')
  const story = factoryStory(seed)
  const catalog: SmartPick[] = [
    {
      id: 'ed-story',
      emoji: story.emoji,
      title: story.title,
      blurb: story.summary,
      page: 'audio',
      reason: 'Geschichte der Redaktion',
    },
    {
      id: 'ed-live',
      emoji: '⚡',
      title: 'Zeit für die Live-Arena',
      blurb: 'Eine Tagesaufgabe und eine Überraschungsbox warten.',
      page: 'live',
      reason: 'Heute im Rhythmus',
    },
    {
      id: 'ed-feel',
      emoji: '💛',
      title: 'Gefühlsmoment',
      blurb: 'Zwei Minuten zum Ankommen und ein Gefühlsradar.',
      page: 'feelings',
      reason: 'Wohlbefinden',
    },
    {
      id: 'ed-stem',
      emoji: '🔬',
      title: 'Mini-Wissenschaftskarte',
      blurb: 'Ein neugieriger Moment mit Dingen aus dem Haushalt.',
      page: 'stem',
      reason: 'MINT-Auswahl',
    },
    {
      id: 'ed-color',
      emoji: '🖍️',
      title: 'Malvorlage des Tages',
      blurb: 'Ruhiges Tempo, viele Farben.',
      page: 'coloring',
      reason: 'Kreativpause',
    },
  ]
  // rotate order by day
  const start = seed % catalog.length
  return [...catalog.slice(start), ...catalog.slice(0, start)]
}

export function smartRecommendations(age: AgeGroup, interests: string[]): SmartPick[] {
  const mood = getMood()
  const seed = hashSeed(dayKey(), mood, age, interests.join(','))
  const pages = Array.from(
    new Set([...MOOD_PAGES[mood], ...AGE_BIAS[age], ...interestPages(interests)]),
  )
  const story = factoryStory(seed)
  return pages.slice(0, 6).map((page, i) => {
    const base = pick(
      [
        { emoji: '🎧', title: 'Geschichte für dich', blurb: story.summary, page: 'audio' as PageId },
        { emoji: '🎮', title: 'Kurze Spielrunde', blurb: 'Quiz oder Memory – 5 Min.', page: 'activities' as PageId },
        { emoji: '🗺️', title: 'Ein Kartenstopp', blurb: 'Entdecke eine neue Region.', page: 'world' as PageId },
        { emoji: '✨', title: 'Kurze KI-Geschichte', blurb: 'Erfinde deinen eigenen Helden.', page: 'create' as PageId },
        { emoji: '🖍️', title: 'Farbpause', blurb: 'Male eine Seite und komm zur Ruhe.', page: 'coloring' as PageId },
        { emoji: '🦸', title: 'Heldengruß', blurb: 'Mut und Freundschaft.', page: 'heroes' as PageId },
      ],
      seed + i * 13,
    )
    return {
      id: `smart-${page}-${i}`,
      emoji: base.emoji,
      title: base.title,
      blurb: base.blurb,
      page,
      reason: reasonFor(page, mood, age),
    }
  })
}

function interestPages(interests: string[]): PageId[] {
  const map: Record<string, PageId> = {
    masal: 'audio',
    oyun: 'activities',
    boyama: 'coloring',
    uzay: 'world',
    hayvan: 'heroes',
    stem: 'stem',
    müzik: 'rhymes',
    duygu: 'feelings',
  }
  return interests.map((i) => map[i]).filter(Boolean) as PageId[]
}

function reasonFor(page: PageId, mood: MoodId, age: AgeGroup): string {
  if (MOOD_PAGES[mood].includes(page)) return 'Passend zur Stimmung'
  if (AGE_BIAS[age].includes(page)) return 'Altersgerechte Empfehlung'
  return 'Passt zu deinen Interessen'
}
