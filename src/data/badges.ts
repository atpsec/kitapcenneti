export type ActivityKind =
  | 'listen'
  | 'color'
  | 'quiz'
  | 'memory'
  | 'rhyme'
  | 'hero'
  | 'story'
  | 'stem'
  | 'feel'
  | 'print'
  | 'blog'
  | 'cert'
  | 'bedtime'
  | 'favorite'
  | 'spin'
  | 'scramble'
  | 'speed'
  | 'doodle'
  | 'sticker'
  | 'explore'
  | 'calm'
  | 'pet'
  | 'rhythm'
  | 'bubble'
  | 'pattern'
  | 'adventure'
  | 'hunt'

export interface Badge {
  id: string
  emoji: string
  title: string
  description: string
  /** Total stars needed, or activity count key */
  requireStars?: number
  requireStreak?: number
  requireActivity?: ActivityKind
  requireActivityCount?: number
}

export const BADGES: Badge[] = [
  {
    id: 'first-star',
    emoji: '⭐',
    title: 'Erster Stern',
    description: 'Du hast dir deinen ersten Stern verdient!',
    requireStars: 1,
  },
  {
    id: 'star-collector',
    emoji: '🌟',
    title: 'Sternenzerstörer',
    description: 'Du hast 10 Sterne gesammelt.',
    requireStars: 10,
  },
  {
    id: 'constellation',
    emoji: '✨',
    title: 'Konstellation',
    description: '25 Sterne – der Himmel gehört dir!',
    requireStars: 25,
  },
  {
    id: 'streak-3',
    emoji: '🔥',
    title: '3-Tage-Serie',
    description: 'Sie haben drei Tage hintereinander gedient.',
    requireStreak: 3,
  },
  {
    id: 'streak-7',
    emoji: '🏆',
    title: 'Wöchentlicher Held',
    description: '7-Tage-Serie – unglaublich!',
    requireStreak: 7,
  },
  {
    id: 'listener',
    emoji: '🎧',
    title: 'Märchenzuhörer',
    description: 'Sie haben sich eine dreistimmige Geschichte angehört.',
    requireActivity: 'listen',
    requireActivityCount: 3,
  },
  {
    id: 'artist',
    emoji: '🖍️',
    title: 'Kleiner Maler',
    description: 'Sie haben 3 Malvorlagen heruntergeladen.',
    requireActivity: 'color',
    requireActivityCount: 3,
  },
  {
    id: 'storyteller',
    emoji: '📚',
    title: 'Geschichtenerzähler',
    description: 'Sie haben Ihre erste KI-Geschichte erstellt.',
    requireActivity: 'story',
    requireActivityCount: 1,
  },
  {
    id: 'gamer',
    emoji: '🎮',
    title: 'Spielleiter',
    description: 'Sie haben das Quiz oder Memory-Spiel beendet.',
    requireActivity: 'quiz',
    requireActivityCount: 1,
  },
  {
    id: 'heart',
    emoji: '💛',
    title: 'Gefühlsfreund',
    description: 'Sie haben über Ihr Gefühl gesprochen.',
    requireActivity: 'feel',
    requireActivityCount: 1,
  },
  {
    id: 'night-owl',
    emoji: '🌙',
    title: 'Sternennacht',
    description: 'Du hast deine Stimmung vor dem Schlafengehen verändert.',
    requireActivity: 'bedtime',
    requireActivityCount: 1,
  },
  {
    id: 'spinner',
    emoji: '🎡',
    title: 'Glücksrad-Profi',
    description: 'Sie haben das Rad der Überraschung gedreht.',
    requireActivity: 'spin',
    requireActivityCount: 1,
  },
  {
    id: 'artist-doodle',
    emoji: '🎨',
    title: 'Freiberuflicher Maler',
    description: 'Du hast es auf die Kritzeltafel gezeichnet.',
    requireActivity: 'doodle',
    requireActivityCount: 1,
  },
  {
    id: 'word-wizard',
    emoji: '🔤',
    title: 'Wortzauberer',
    description: 'Du hast das Buchstabenrätsel gelöst.',
    requireActivity: 'scramble',
    requireActivityCount: 1,
  },
  {
    id: 'explorer',
    emoji: '🗺️',
    title: 'Weltreisender',
    description: 'Sie haben 3 Regionen entdeckt.',
    requireActivity: 'explore',
    requireActivityCount: 3,
  },
  {
    id: 'zen',
    emoji: '🌬️',
    title: 'Atemmeister',
    description: 'Sie haben das Atemberuhigungsspiel beendet.',
    requireActivity: 'calm',
    requireActivityCount: 1,
  },
  {
    id: 'pet-friend',
    emoji: '🐾',
    title: 'Freundliche Pflegekraft',
    description: 'Du hast deinen Portalfreund gefüttert oder mit ihm gespielt.',
    requireActivity: 'pet',
    requireActivityCount: 1,
  },
  {
    id: 'rhythm-star',
    emoji: '🥁',
    title: 'Rhythmus-Star',
    description: 'Du hast das Rhythmusspiel abgeschlossen.',
    requireActivity: 'rhythm',
    requireActivityCount: 1,
  },
  {
    id: 'adventurer',
    emoji: '📖',
    title: 'Optionales Abenteuer',
    description: 'Sie haben eine interaktive Geschichte fertiggestellt.',
    requireActivity: 'adventure',
    requireActivityCount: 1,
  },
]

/** Maps activity → matching daily quest id */
export const ACTIVITY_TO_QUEST: Partial<Record<ActivityKind, string>> = {
  listen: 'listen',
  color: 'color',
  quiz: 'quiz',
  memory: 'memory',
  rhyme: 'rhyme',
  hero: 'hero',
  story: 'story',
  stem: 'stem',
  feel: 'feel',
  print: 'print',
  blog: 'parent-read',
  cert: 'cert',
}
