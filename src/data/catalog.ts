import type { PageId } from '../types/nav'
import { AUDIO_STORIES } from './audioStories'
import { BLOG_POSTS } from './blog'
import { COLORING_PAGES } from './coloringPages'
import { HEROES } from './heroes'
import { RHYMES } from './rhymes'
import { STEM_CARDS } from './stem'
import { FEELINGS } from './feelings'
import { LEARNING_PATHS } from './paths'
import { COLLECTIONS } from './collections'
import { WORLD_REGIONS } from './world'
import { SHOP_PACKS } from './shop'
import { TEACHER_RESOURCES } from './teachers'

export type CatalogKind =
  | 'audio'
  | 'blog'
  | 'coloring'
  | 'hero'
  | 'rhyme'
  | 'stem'
  | 'feeling'
  | 'path'
  | 'collection'
  | 'world'
  | 'shop'
  | 'teacher'
  | 'page'

export interface CatalogItem {
  id: string
  kind: CatalogKind
  title: string
  emoji: string
  description: string
  tags: string[]
  age?: string
  page: PageId
  minutes?: number
  /** Deep-link item id for #page/itemId */
  sourceId?: string
}

export const STATIC_PAGES: CatalogItem[] = [
  { id: 'p-create', kind: 'page', title: 'KI-Geschichtenbuch', emoji: '✨', description: 'Erfinde deine eigene Bildergeschichte', tags: ['ki', 'geschichte', 'kreativ'], page: 'create' },
  { id: 'p-quests', kind: 'page', title: 'Tagesaufgaben', emoji: '⭐', description: 'Sammle Sterne und bleib dran', tags: ['Aufgabe', 'Sterne'], page: 'quests' },
  { id: 'p-fun', kind: 'page', title: 'Kreativgarten', emoji: '🎡', description: 'Glücksrad, Doodle und Sticker', tags: ['Spaß', 'Spiel'], page: 'fun' },
  { id: 'p-activities', kind: 'page', title: 'Spielesalon', emoji: '🎮', description: 'Memory, Quiz, Wörter und Tempo', tags: ['Spiele', 'Denken'], page: 'activities' },
  { id: 'p-journal', kind: 'page', title: 'Entwicklungstagebuch', emoji: '📔', description: 'Halte eure gemeinsamen Momente fest', tags: ['Tagebuch', 'Familie'], page: 'journal' },
  { id: 'p-calendar', kind: 'page', title: 'Wochenplan', emoji: '📅', description: 'Ein Familienplan für sieben Tage', tags: ['Planung', 'Familie'], page: 'calendar' },
  { id: 'p-teachers', kind: 'page', title: 'Lehrkräfte-Ecke', emoji: '👩‍🏫', description: 'Aktivitäten für Kita und Schule', tags: ['Lehrkräfte', 'Klasse'], page: 'teachers' },
  { id: 'p-shop', kind: 'page', title: 'Kostenlose Pakete', emoji: '🎁', description: 'Druckbare Inhalte zum Herunterladen', tags: ['PDF', 'Download'], page: 'shop' },
  { id: 'p-live', kind: 'page', title: 'Live-Arena', emoji: '⚡', description: 'Stündliche Aufgaben und Überraschungen', tags: ['live', 'Aufgabe', 'stündlich'], page: 'live' },
]

export function buildCatalog(): CatalogItem[] {
  const items: CatalogItem[] = [...STATIC_PAGES]

  for (const s of AUDIO_STORIES) {
    items.push({
      id: `audio-${s.id}`,
      kind: 'audio',
      title: s.title,
      emoji: s.emoji,
      description: s.summary,
      tags: [s.theme, s.age, 'masal', 'sesli'],
      age: s.age,
      page: 'audio',
      sourceId: s.id,
      minutes: parseInt(s.duration, 10) || 5,
    })
  }
  for (const b of BLOG_POSTS) {
    items.push({
      id: `blog-${b.id}`,
      kind: 'blog',
      title: b.title,
      emoji: b.emoji,
      description: b.summary,
      tags: [...b.tags, 'blog', 'aile'],
      page: 'blog',
      sourceId: b.id,
      minutes: b.minutes,
    })
  }
  for (const c of COLORING_PAGES) {
    items.push({
      id: `color-${c.id}`,
      kind: 'coloring',
      title: c.title,
      emoji: c.emoji,
      description: c.description,
      tags: [c.category, c.age, 'boyama'],
      age: c.age,
      page: 'coloring',
      sourceId: c.id,
    })
  }
  for (const h of HEROES) {
    items.push({
      id: `hero-${h.id}`,
      kind: 'hero',
      title: h.name,
      emoji: h.emoji,
      description: h.bio,
      tags: [h.power, h.age, 'kahraman'],
      age: h.age,
      page: 'heroes',
      sourceId: h.id,
    })
  }
  for (const r of RHYMES) {
    items.push({
      id: `rhyme-${r.id}`,
      kind: 'rhyme',
      title: r.title,
      emoji: r.emoji,
      description: r.lyrics.slice(0, 80),
      tags: ['şarkı', 'tekerleme'],
      page: 'rhymes',
      sourceId: r.id,
    })
  }
  for (const s of STEM_CARDS) {
    items.push({
      id: `stem-${s.id}`,
      kind: 'stem',
      title: s.title,
      emoji: s.emoji,
      description: s.why,
      tags: [s.age, 'stem', 'bilim'],
      age: s.age,
      page: 'stem',
      sourceId: s.id,
      minutes: s.minutes,
    })
  }
  for (const f of FEELINGS) {
    items.push({
      id: `feel-${f.id}`,
      kind: 'feeling',
      title: f.label,
      emoji: f.emoji,
      description: f.tip,
      tags: ['duygu', 'empati'],
      page: 'feelings',
      sourceId: f.id,
    })
  }
  for (const p of LEARNING_PATHS) {
    items.push({
      id: `path-${p.id}`,
      kind: 'path',
      title: p.title,
      emoji: p.emoji,
      description: p.summary,
      tags: [...p.tags, 'yol', p.age],
      age: p.age,
      page: 'paths',
      sourceId: p.id,
    })
  }
  for (const c of COLLECTIONS) {
    items.push({
      id: `col-${c.id}`,
      kind: 'collection',
      title: c.title,
      emoji: c.emoji,
      description: c.description,
      tags: [...c.tags, 'koleksiyon'],
      page: 'discover',
      sourceId: c.id,
    })
  }
  for (const w of WORLD_REGIONS) {
    items.push({
      id: `world-${w.id}`,
      kind: 'world',
      title: w.title,
      emoji: w.emoji,
      description: w.blurb,
      tags: [...w.tags, 'dünya', 'harita'],
      page: 'world',
      sourceId: w.id,
    })
  }
  for (const s of SHOP_PACKS) {
    items.push({
      id: `shop-${s.id}`,
      kind: 'shop',
      title: s.title,
      emoji: s.emoji,
      description: s.description,
      tags: [...s.tags, 'paket', 'ücretsiz'],
      age: s.age,
      page: 'shop',
      sourceId: s.id,
    })
  }
  for (const t of TEACHER_RESOURCES) {
    items.push({
      id: `teach-${t.id}`,
      kind: 'teacher',
      title: t.title,
      emoji: t.emoji,
      description: t.summary,
      tags: [...t.tags, 'öğretmen', 'sınıf'],
      age: t.age,
      page: 'teachers',
      sourceId: t.id,
    })
  }

  return items
}

export function searchCatalog(query: string, age?: string): CatalogItem[] {
  const q = query.trim().toLowerCase()
  const all = buildCatalog()
  if (!q && !age) return all
  return all.filter((item) => {
    if (age && age !== 'all' && item.age) {
      const needle = age.replace('+', '')
      if (!item.age.includes(needle) && !(needle[0] && item.age.startsWith(needle[0]))) {
        return false
      }
    }
    if (!q) return true
    const hay = `${item.title} ${item.description} ${item.tags.join(' ')} ${item.kind}`.toLowerCase()
    return hay.includes(q)
  })
}
