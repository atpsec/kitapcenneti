import type { Story, StoryRequest } from '../types'

type Theme = { setting: string; emoji: string; scenes: string[]; imageScenes: string[]; imageSetting: string }

const theme = (setting: string, emoji: string, scenes: string[], imageSetting: string): Theme => ({
  setting,
  emoji,
  scenes,
  imageSetting,
  imageScenes: scenes.map((scene) => `a child ${scene}`),
})

const CATEGORY_THEMES: Record<string, Theme> = {
  personalized: theme('eine magische Welt', '🦸', ['eine leuchtende Tür entdecken', 'sprechende Tiere treffen', 'eine geheime Karte finden', 'über weiche Wolken fliegen', 'einen Schatz suchen', 'neue Freunde finden', 'ein Rätsel lösen', 'glücklich nach Hause zurückkehren'], 'a colorful magical adventure world'),
  adventure: theme('ein verwunschener Wald', '🗺️', ['eine alte Karte finden', 'sprechende Bäume treffen', 'eine geheime Höhle betreten', 'eine Regenbogenbrücke überqueren', 'eine magische Blume pflücken', 'den Heimweg finden', 'eine Schatzkiste öffnen', 'als Held nach Hause zurückkehren'], 'an enchanted forest'),
  animals: theme('ein sonniger Tierwald', '🐻', ['einen freundlichen Hasen treffen', 'ein Picknick im Wald machen', 'mit bunten Vögeln singen', 'mit einem Bären angeln', 'mit einem Fuchs Verstecken spielen', 'nachts die Sterne beobachten', 'gemeinsam tanzen', 'ein fröhliches Abschiedsfest feiern'], 'a sunny forest of friendly animals'),
  space: theme('das bunte Weltall', '🚀', ['mit einer Rakete starten', 'auf dem Mond spazieren', 'freundliche Außerirdische treffen', 'einen Kometen beobachten', 'den Mars erkunden', 'Sternenstaub sammeln', 'eine Galaxiekarte zeichnen', 'glücklich zur Erde zurückkehren'], 'colorful outer space'),
  underwater: theme('eine farbenfrohe Unterwasserwelt', '🐠', ['eine freundliche Meerjungfrau treffen', 'Korallenriffe erkunden', 'mit Delfinen schwimmen', 'eine Schatzkiste finden', 'eine Oktopus-Galerie besuchen', 'mit einem Fischschwarm tanzen', 'Seesterne sammeln', 'die Sonne an der Oberfläche begrüßen'], 'a bright underwater coral reef'),
  fairy: theme('ein Feenreich', '🧚', ['Feenstaub finden', 'einen Zauberstab kennenlernen', 'ein Schloss in den Wolken sehen', 'mit einem Drachen Frieden schließen', 'einen Zaubergarten besuchen', 'an einem Feenfest teilnehmen', 'eine verlorene Krone finden', 'ein glückliches Ende feiern'], 'a fairy-tale castle kingdom'),
  dinosaurs: theme('ein freundliches Dino-Tal', '🦕', ['ein Dino-Baby treffen', 'riesige Blätter sammeln', 'einen Vulkan erkunden', 'mit einem T-Rex Freundschaft schließen', 'Fossilien suchen', 'ein Dino-Picknick machen', 'einen Flugdinosaurier sehen', 'sicher in einer Höhle schlafen'], 'a friendly dinosaur valley'),
  superhero: theme('eine fröhliche Heldenstadt', '⚡', ['eine Superkraft entdecken', 'anderen zu Hilfe eilen', 'einen Sturm mit Freundlichkeit stoppen', 'ein Heldenteam finden', 'eine geheime Basis betreten', 'die Stadt retten', 'eine Medaille erhalten', 'als Held gefeiert werden'], 'a cheerful superhero city'),
  custom: theme('eine Welt voller Fantasie', '✨', ['ein großes Abenteuer beginnen', 'eine interessante Figur treffen', 'eine Herausforderung annehmen', 'eine kluge Lösung finden', 'etwas Überraschendes entdecken', 'einander helfen', 'gemeinsam Erfolg haben', 'ein glückliches Ende feiern'], 'a whimsical world of imagination'),
}

function buildPageTexts(request: StoryRequest): string[] {
  const hero = request.heroName || 'Mutiger Held'
  const selected = CATEGORY_THEMES[request.category] ?? CATEGORY_THEMES.custom
  const hint = request.prompt ? ` Dabei geht es um ${request.prompt}.` : ''
  const personalized = request.category === 'personalized' || Boolean(request.heroName)
  const intros = personalized
    ? [`Es war einmal ${hero}, ein neugieriges und mutiges Kind.${hint}`, `${hero} wachte eines Morgens auf und sah ein ${selected.emoji} leuchtendes Licht.`]
    : [`Es war einmal ein Ort namens ${selected.setting}.${hint}`, `Dort suchten Kinder jeden Tag neue Abenteuer ${selected.emoji}`]
  const middles = selected.scenes.slice(0, Math.max(0, request.pageCount - 3)).map((scene) => personalized ? `${hero} machte sich auf, um ${scene} zu erleben. Jeder Schritt machte die Reise spannender!` : `Eines Tages beschlossen die Kinder, ${scene}. Sie konnten kaum erwarten, was passieren würde!`)
  const endings = personalized
    ? [`${hero} kehrte mit einem warmen Lächeln nach Hause zurück.`, `Seit diesem Tag träumte ${hero} jede Nacht von diesem Abenteuer. Ende gut, alles gut! 🌟`]
    : ['Die Kinder umarmten sich und wussten, wie besonders dieser Tag war.', 'Von diesem Tag an gab es dort immer Lachen und Freude. Ende! 🌟']
  return [...intros, ...middles, ...endings].slice(0, request.pageCount)
}

export function generateFallbackStory(request: StoryRequest): Story {
  const selected = CATEGORY_THEMES[request.category] ?? CATEGORY_THEMES.custom
  const texts = buildPageTexts(request)
  const heroName = request.heroName
  const title = heroName ? `${heroName}s magische Reise` : request.prompt ? request.prompt.slice(0, 40) + (request.prompt.length > 40 ? '…' : '') : `${selected.emoji} Eine magische Geschichte`
  const pages = texts.map((text, i) => ({
    pageNumber: i + 1,
    text,
    imagePrompt: `${selected.imageScenes[i % selected.imageScenes.length]}, ${selected.imageSetting}, cheerful children, storybook illustration`,
  }))
  return { title, pages, heroName: request.heroName, heroImage: request.heroImage, category: request.category, artStyle: request.artStyle }
}
