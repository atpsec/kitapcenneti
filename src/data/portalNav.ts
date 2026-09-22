import type { NavItem, PageId, PortalMode } from '../types/nav'

export const KIDS_NAV: NavItem[] = [
  { id: 'portal', label: 'Portal', emoji: '🏛️', short: 'Portal', mode: 'kids' },
  { id: 'live', label: 'Live-Arena', emoji: '⚡', short: 'Live', mode: 'kids' },
  { id: 'quests', label: 'Aufgaben', emoji: '⭐', short: 'Aufgaben', mode: 'kids' },
  { id: 'library', label: 'Bibliothek', emoji: '📚', short: 'Bücher', mode: 'kids' },
  { id: 'audio', label: 'Hörgeschichten', emoji: '🎧', short: 'Hören', mode: 'kids' },
  { id: 'playground', label: 'Spielplatz', emoji: '🕹️', short: 'Spielen', mode: 'kids' },
  { id: 'activities', label: 'Spiele', emoji: '🎮', short: 'Spiele', mode: 'kids' },
  { id: 'fun', label: 'Kreativgarten', emoji: '🎡', short: 'Kreativ', mode: 'kids' },
  { id: 'create', label: 'KI-Geschichten', emoji: '✨', short: 'KI', mode: 'kids' },
  { id: 'world', label: 'Entdeckerwelt', emoji: '🗺️', short: 'Karte', mode: 'kids' },
  { id: 'challenge', label: 'Team-Challenge', emoji: '🤝', short: 'Team', mode: 'kids' },
]

export const PARENT_NAV: NavItem[] = [
  { id: 'portal', label: 'Familienpanel', emoji: '👨‍👩‍👧', short: 'Panel', mode: 'parent' },
  { id: 'live', label: 'Familienrhythmus', emoji: '⚡', short: 'Live', mode: 'parent' },
  { id: 'parents', label: 'Elternbereich', emoji: '🏡', short: 'Eltern', mode: 'parent' },
  { id: 'blog', label: 'Familienblog', emoji: '📝', short: 'Blog', mode: 'parent' },
  { id: 'paths', label: 'Lernpfade', emoji: '🛤️', short: 'Pfade', mode: 'parent' },
  { id: 'calendar', label: 'Wochenplan', emoji: '📅', short: 'Plan', mode: 'parent' },
  { id: 'teachers', label: 'Lehrkräfte', emoji: '👩‍🏫', short: 'Klasse', mode: 'parent' },
  { id: 'classroom', label: 'Klassenraum', emoji: '🏫', short: 'Code', mode: 'parent' },
  { id: 'journal', label: 'Entwicklungstagebuch', emoji: '📔', short: 'Tagebuch', mode: 'parent' },
  { id: 'shop', label: 'Kostenlose Pakete', emoji: '🎁', short: 'Pakete', mode: 'parent' },
  { id: 'membership', label: 'Familien+ Mitgliedschaft', emoji: '✦', short: 'Familien+', mode: 'parent' },
]

export const SIDEBAR_EXTRA: { id: PageId; label: string; emoji: string }[] = [
  { id: 'coloring', label: 'Malen', emoji: '🖍️' },
  { id: 'heroes', label: 'Heldinnen und Helden', emoji: '🦸' },
  { id: 'rhymes', label: 'Lieder und Reime', emoji: '🎵' },
  { id: 'stem', label: 'MINT', emoji: '🔬' },
  { id: 'feelings', label: 'Gefühle', emoji: '💛' },
  { id: 'printables', label: 'Druckvorlagen', emoji: '🖨️' },
  { id: 'certificates', label: 'Urkunden', emoji: '🏆' },
  { id: 'discover', label: 'Sammlungen', emoji: '🧭' },
  { id: 'profile', label: 'Mein Profil', emoji: '🧒' },
  { id: 'challenge', label: 'Team-Challenge', emoji: '🤝' },
  { id: 'playground', label: 'Spielplatz', emoji: '🕹️' },
  { id: 'classroom', label: 'Klassenraum', emoji: '🏫' },
  { id: 'search', label: 'Suche', emoji: '🔎' },
  { id: 'membership', label: 'Familien+ Mitgliedschaft', emoji: '✦' },
]

export function navForMode(mode: PortalMode): NavItem[] {
  return mode === 'kids' ? KIDS_NAV : PARENT_NAV
}
