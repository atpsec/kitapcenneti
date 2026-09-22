import type { ArtStyleInfo, CategoryInfo } from '../types'

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'personalized',
    title: 'Führe mich durch das Märchen',
    emoji: '🦸',
    description: 'Schreiben Sie Ihren Namen oder laden Sie Ihr Foto hoch – seien Sie der Held!',
    gradient: 'linear-gradient(135deg, #FF6B9D 0%, #C44DFF 50%, #6B5BFF 100%)',
    samplePrompts: [
      'Ein Abenteuer in den Tiefen des Waldes',
      'Eine magische Reise über den Wolken',
      'Ein Unterwasserabenteuer mit Meerjungfrauen',
      'Ein mutiger Held freundet sich mit einem Drachen an',
      'Auf der Suche nach einem verlorenen Planeten zwischen den Sternen',
    ],
    featured: true,
  },
  {
    id: 'adventure',
    title: 'Magische Abenteuer',
    emoji: '🗺️',
    description: 'Verborgene Schätze und magische Wälder warten auf Sie!',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    samplePrompts: [
      'Mutige Entdecker finden eine magische Karte',
      'Kleine Helden retten ein verlorenes Königreich',
      'Ein Abenteuer über die Regenbogenbrücke',
      'Verloren im Wald der sprechenden Bäume',
    ],
  },
  {
    id: 'animals',
    title: 'Tierfreunde',
    emoji: '🐻',
    description: 'Warme Geschichten voller süßer Tiere!',
    gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    samplePrompts: [
      'Der mutigste Hase im Wald und seine Freunde',
      'Ein Nachtabenteuer in der geheimen Stadt der Katzen',
      'Eine Pinguinfamilie auf einer Reise durch die Polarregion',
      'Der erste Schultag eines Elefantenbabys',
    ],
  },
  {
    id: 'space',
    title: 'Weltraumforschung',
    emoji: '🚀',
    description: 'Eine erstaunliche Reise zwischen den Sternen!',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    samplePrompts: [
      'Kleine Astronauten leben auf dem Mars',
      'Kinder treffen außerirdische Freunde',
      'Ein Raketenteam sucht einen verlorenen Stern',
      'Ein magischer Bauernhof auf dem Mond',
    ],
  },
  {
    id: 'underwater',
    title: 'Unterwasserwelt',
    emoji: '🐠',
    description: 'Eine bunte Welt in Korallenriffen!',
    gradient: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)',
    samplePrompts: [
      'Ein Fischerjunge freundet sich mit einer Meerjungfrau an',
      'Eine Delfinfamilie sucht eine Schatzkiste',
      'Ein Ball im Korallenpalast',
      'Die bunte Kunstwerkstatt des Oktopus',
    ],
  },
  {
    id: 'fairy',
    title: 'Märchen',
    emoji: '🧚',
    description: 'Feen, Prinzen und Zauberschlösser!',
    gradient: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)',
    samplePrompts: [
      'Eine kleine Fee weckt die schlafende Prinzessin',
      'Ein Feenmädchen verliert seinen Zauberstab',
      'Der erste Tag in der Feenschule über den Wolken',
      'Eine Prinzessin lebt in einer Burg ohne Drachen',
    ],
  },
  {
    id: 'dinosaurs',
    title: 'Dinosaurierwelt',
    emoji: '🦕',
    description: 'Abenteuer mit prähistorischen Riesenfreunden!',
    gradient: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)',
    samplePrompts: [
      'Freundschaft mit einem niedlichen Dinosaurierbaby',
      'Entdeckung eines geheimen Tals im Vulkankrater',
      'Ein Fußballspiel mit dem T-Rex',
      'Picknicktag der Dinosaurier',
    ],
  },
  {
    id: 'superhero',
    title: 'Superhelden',
    emoji: '⚡',
    description: 'Spannende Geschichten voller Superkräfte!',
    gradient: 'linear-gradient(135deg, #f12711 0%, #f5af19 100%)',
    samplePrompts: [
      'Ein Kind entdeckt seine geheime Superkraft',
      'Ein kleines Heldenteam rettet die Stadt',
      'Die erste Stunde in der Superheldenschule',
      'Mut hält einen bösen Roboter auf',
    ],
  },
  {
    id: 'custom',
    title: 'Schreiben Sie Ihre eigene Geschichte',
    emoji: '✏️',
    description: 'Lassen Sie Ihrer Fantasie freien Lauf und kreieren Sie Ihr eigenes Märchen!',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    samplePrompts: [
      'Ein lustiges Abenteuer, an dem sich eines Tages alles umkehrt',
      'Ein Stadtrundgang mit sprechenden Schuhen',
      'Kleine Arbeiter in einer Wolkenfabrik',
      'Eine Reise mit der Zeitmaschine in die Vergangenheit',
    ],
  },
]

export const ART_STYLES: ArtStyleInfo[] = [
  {
    id: 'watercolor',
    name: 'Aquarell',
    emoji: '🎨',
    promptSuffix: "beautiful soft watercolor children's book illustration, dreamy pastel colors, gentle brush strokes",
  },
  {
    id: 'cartoon',
    name: 'Cartoon',
    emoji: '📺',
    promptSuffix: "vibrant cartoon style children's book illustration, bold outlines, cheerful colors, Disney-like",
  },
  {
    id: 'pixar',
    name: '3D-Pixar',
    emoji: '🎬',
    promptSuffix: "Pixar 3D animation style children's book illustration, cute rounded characters, cinematic lighting",
  },
  {
    id: 'anime',
    name: 'Anime',
    emoji: '🌸',
    promptSuffix: "kawaii anime children's book illustration, big expressive eyes, soft shading, Studio Ghibli inspired",
  },
  {
    id: 'storybook',
    name: 'Klassisches Märchen',
    emoji: '📖',
    promptSuffix: 'classic European fairy tale book illustration, ornate details, warm golden tones, storybook art',
  },
  {
    id: 'clay',
    name: 'Tonanimation',
    emoji: '🏺',
    promptSuffix: "claymation stop-motion style children's book illustration, textured clay figures, handmade feel",
  },
  {
    id: 'pastel',
    name: 'Pastelltraum',
    emoji: '🌈',
    promptSuffix: "soft pastel children's book illustration, dreamy cotton candy colors, whimsical and magical",
  },
]

export const TEXT_MODELS = [
  { id: 'gpt-4o-mini' as const, name: 'Schnell und intelligent', emoji: '⚡', description: 'GPT-4o Mini – schnelle Produktion' },
  { id: 'gpt-4o' as const, name: 'Top-Qualität', emoji: '💎', description: 'GPT-4o – beste Story-Qualität' },
  { id: 'claude-3-5-haiku-20241022' as const, name: 'kreativ', emoji: '🎭', description: 'Claude Haiku – kreativer Ausdruck' },
]

export const IMAGE_PROVIDERS = [
  { id: 'pollinations' as const, name: 'Pollinations-KI', emoji: '🆓', description: 'Völlig kostenlos, kein API-Schlüssel erforderlich' },
]

export const AGE_GROUPS = [
  { id: '3-5' as const, label: '3–5 Jahre', emoji: '🐣' },
  { id: '6-8' as const, label: '6–8 Jahre', emoji: '🌟' },
  { id: '9-12' as const, label: '9–12 Jahre', emoji: '🚀' },
]

export const PAGE_COUNTS = [4, 6, 8]

export function getArtStyleSuffix(styleId: string): string {
  return ART_STYLES.find((s) => s.id === styleId)?.promptSuffix ?? ART_STYLES[0].promptSuffix
}

export function getCategoryInfo(id: string): CategoryInfo | undefined {
  return CATEGORIES.find((c) => c.id === id)
}
