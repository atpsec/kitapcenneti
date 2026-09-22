export type PageId =
  | 'home'
  | 'portal'
  | 'quests'
  | 'create'
  | 'audio'
  | 'coloring'
  | 'heroes'
  | 'activities'
  | 'fun'
  | 'rhymes'
  | 'stem'
  | 'feelings'
  | 'blog'
  | 'printables'
  | 'certificates'
  | 'parents'
  | 'library'
  | 'paths'
  | 'journal'
  | 'calendar'
  | 'teachers'
  | 'profile'
  | 'discover'
  | 'world'
  | 'shop'
  | 'search'
  | 'live'
  | 'classroom'
  | 'challenge'
  | 'playground'
  | 'about'
  | 'impressum'
  | 'privacy'
  | 'terms'
  | 'contact'
  | 'membership'

export type PortalMode = 'kids' | 'parent'

export interface NavItem {
  id: PageId
  label: string
  emoji: string
  short: string
  mode?: PortalMode | 'both'
}

export const ALL_PAGES: PageId[] = [
  'home', 'portal', 'quests', 'create', 'audio', 'coloring', 'heroes', 'activities', 'fun',
  'rhymes', 'stem', 'feelings', 'blog', 'printables', 'certificates', 'parents',
  'library', 'paths', 'journal', 'calendar', 'teachers', 'profile', 'discover', 'world', 'shop', 'search',
  'live', 'classroom', 'challenge', 'playground',
  'about', 'impressum', 'privacy', 'terms', 'contact', 'membership',
]
