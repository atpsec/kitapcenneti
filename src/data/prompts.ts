import type { ArtStyleInfo, CategoryInfo } from '../types'

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'personalized',
    title: 'Führe mich durch das Märchen',
    emoji: '🦸',
    description: 'Schreiben Sie Ihren Namen oder laden Sie Ihr Foto hoch – seien Sie der Held!',
    gradient: 'linear-gradient(135deg, #FF6B9D 0%, #C44DFF 50%, #6B5BFF 100%)',
    samplePrompts: [
      'Ormanın derinliklerinde kaybolan bir macera',
      'Bulutların üstünde uçan sihirli bir yolculuk',
      'Deniz kızlarıyla dostluk kuran sualtı macerası',
      'Ejderha ile arkadaş olan cesur bir kahraman',
      'Yıldızların arasında kayıp gezegeni aramak',
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
      'Sihirli bir harita bulan cesur kaşifler',
      'Kayıp krallığı kurtaran minik kahramanlar',
      'Gökkuşağı köprüsünden geçen macera',
      'Konuşan ağaçların ormanında kaybolmak',
    ],
  },
  {
    id: 'animals',
    title: 'Tierfreunde',
    emoji: '🐻',
    description: 'Warme Geschichten voller süßer Tiere!',
    gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    samplePrompts: [
      'Ormanın en cesur tavşanı ve arkadaşları',
      'Kedilerin gizli şehrinde bir gece macerası',
      'Penguen ailesinin kutup yolculuğu',
      'Fil yavrusunun ilk günü okulda',
    ],
  },
  {
    id: 'space',
    title: 'Weltraumforschung',
    emoji: '🚀',
    description: 'Eine erstaunliche Reise zwischen den Sternen!',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    samplePrompts: [
      'Mars\'ta yaşayan minik astronotlar',
      'Uzaylı dostlarla tanışan çocuklar',
      'Kayıp yıldızı arayan roket ekibi',
      'Ay\'da kurulan sihirli çiftlik',
    ],
  },
  {
    id: 'underwater',
    title: 'Unterseeisch',
    emoji: '🐠',
    description: 'Eine bunte Welt in Korallenriffen!',
    gradient: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)',
    samplePrompts: [
      'Deniz kızı ile arkadaş olan balıkçı çocuk',
      'Hazine sandığı arayan yunus sürüsü',
      'Mercan sarayında düzenlenen balo',
      'Ahtapotun renkli sanat atölyesi',
    ],
  },
  {
    id: 'fairy',
    title: 'Märchen',
    emoji: '🧚',
    description: 'Feen, Prinzen und Zauberschlösser!',
    gradient: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)',
    samplePrompts: [
      'Uyuyan prensesi uyandıran minik peri',
      'Sihirli değneği kaybeden peri kız',
      'Bulutlardaki peri okulunda ilk gün',
      'Ejdersiz kalede yaşayan prenses',
    ],
  },
  {
    id: 'dinosaurs',
    title: 'Dinosaurierwelt',
    emoji: '🦕',
    description: 'Abenteuer mit prähistorischen Riesenfreunden!',
    gradient: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)',
    samplePrompts: [
      'Sevimli dinozor yavrusu ile arkadaşlık',
      'Volkan kraterinde gizli vadi keşfi',
      'T-Rex ile futbol maçı',
      'Dinozorların piknik günü',
    ],
  },
  {
    id: 'superhero',
    title: 'Superhelden',
    emoji: '⚡',
    description: 'Spannende Geschichten voller Superkräfte!',
    gradient: 'linear-gradient(135deg, #f12711 0%, #f5af19 100%)',
    samplePrompts: [
      'Gizli süper gücünü keşfeden çocuk',
      'Şehri kurtaran minik kahraman takımı',
      'Süper kahraman okulunda ilk ders',
      'Kötü kalpli robotu durduran cesaret',
    ],
  },
  {
    id: 'custom',
    title: 'Schreiben Sie Ihre eigene Geschichte',
    emoji: '✏️',
    description: 'Lassen Sie Ihrer Fantasie freien Lauf und kreieren Sie Ihr eigenes Märchen!',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    samplePrompts: [
      'Bir gün her şeyin tersine döndüğü komik bir macera',
      'Konuşan ayakkabılarla şehir turu',
      'Bulut fabrikasında çalışan minik işçiler',
      'Zaman makinesiyle geçmişe yolculuk',
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
  { id: 'pollinations' as const, name: 'Bestäubungs-KI', emoji: '🆓', description: 'Völlig kostenlos, kein API-Schlüssel erforderlich' },
  { id: 'netlify-gemini' as const, name: 'Zwillinge (Netlify)', emoji: '✨', description: 'Hohe Qualität mit Netlify AI Gateway' },
]

export const AGE_GROUPS = [
  { id: '3-5' as const, label: '3-5 Jahre alt', emoji: '🐣' },
  { id: '6-8' as const, label: '6-8 Jahre alt', emoji: '🌟' },
  { id: '9-12' as const, label: '9-12 Jahre alt', emoji: '🚀' },
]

export const PAGE_COUNTS = [4, 6, 8]

export function getArtStyleSuffix(styleId: string): string {
  return ART_STYLES.find((s) => s.id === styleId)?.promptSuffix ?? ART_STYLES[0].promptSuffix
}

export function getCategoryInfo(id: string): CategoryInfo | undefined {
  return CATEGORIES.find((c) => c.id === id)
}
