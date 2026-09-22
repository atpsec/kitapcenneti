export interface AdventureNode {
  id: string
  text: string
  emoji: string
  choices?: { label: string; next: string; stars?: number }[]
  ending?: boolean
}

export interface Adventure {
  id: string
  title: string
  emoji: string
  start: string
  nodes: Record<string, AdventureNode>
}

export const ADVENTURES: Adventure[] = [
  {
    id: 'forest-lantern',
    title: 'Verlorene Laterne',
    emoji: '🏮',
    start: 'start',
    nodes: {
      start: {
        id: 'start',
        emoji: '🌲',
        text: 'Im Wald flackert ein kleines Licht. Gehen Sie zu ihm oder fragen Sie nach dem Weg?',
        choices: [
          { label: 'Komm näher ans Licht', next: 'light', stars: 1 },
          { label: 'frag die Eule', next: 'owl' },
        ],
      },
      light: {
        id: 'light',
        emoji: '✨',
        text: 'Ein Fuchs hält eine Laterne. „Der Wind hat es weggeblasen“, sagt er. Vermasselt man es oder schützt man es?',
        choices: [
          { label: 'Mit Schutz tragen', next: 'safe', stars: 2 },
          { label: 'zusammenblasen', next: 'blow' },
        ],
      },
      owl: {
        id: 'owl',
        emoji: '🦉',
        text: 'Eule: „Die Laterne ist auf der Brücke.“ Die Brücke wackelt – langsam oder laufend?',
        choices: [
          { label: 'Langsam und vorsichtig', next: 'safe', stars: 2 },
          { label: 'Lauf!', next: 'slip' },
        ],
      },
      blow: {
        id: 'blow',
        emoji: '🌬️',
        text: 'Du hast geblasen... aber die Laterne leuchtete wieder auf! Der Fuchs lächelt.',
        choices: [{ label: 'Rückkehr ins Dorf', next: 'end-warm', stars: 1 }],
      },
      slip: {
        id: 'slip',
        emoji: '🌉',
        text: 'Du bist ausgerutscht, aber dein Freund hat dich aufgefangen. Ihr habt gemeinsam die Laterne mitgenommen.',
        choices: [{ label: 'Danke', next: 'end-warm', stars: 1 }],
      },
      safe: {
        id: 'safe',
        emoji: '🏡',
        text: 'Die Laterne beleuchtete den Dorfplatz. Alle applaudieren!',
        choices: [{ label: 'Ende', next: 'end-warm', stars: 1 }],
      },
      'end-warm': {
        id: 'end-warm',
        emoji: '⭐',
        text: 'Das Abenteuer ist vorbei: Mut + Freundschaft gewonnen. Sind Sie bereit für eine neue Geschichte?',
        ending: true,
      },
    },
  },
  {
    id: 'space-crumb',
    title: 'Cracker im Weltraum',
    emoji: '🚀',
    start: 'start',
    nodes: {
      start: {
        id: 'start',
        emoji: '🌌',
        text: 'Cracker fliegen in der Kapsel! Zuerst fangen oder anschnallen?',
        choices: [
          { label: 'Gürtel zuerst', next: 'belt', stars: 2 },
          { label: 'Schnapp dir den Cracker', next: 'crumb' },
        ],
      },
      belt: {
        id: 'belt',
        emoji: '🛟',
        text: 'Du bist in Sicherheit. Jetzt kommt der Cracker langsam zu Ihnen – können Sie ihn teilen?',
        choices: [
          { label: 'Mit Roboter teilen', next: 'end-share', stars: 2 },
          { label: 'iss alles', next: 'end-funny' },
        ],
      },
      crumb: {
        id: 'crumb',
        emoji: '🍪',
        text: 'Du wurdest erwischt, bist aber zurückgekommen! Der Roboter lacht. Können Sie Ihren Gürtel anlegen und packen?',
        choices: [{ label: 'Ja, bring es zusammen', next: 'belt', stars: 1 }],
      },
      'end-share': {
        id: 'end-share',
        emoji: '🤖',
        text: 'Durch das Teilen wurde der Raum wärmer. Mission abgeschlossen!',
        ending: true,
      },
      'end-funny': {
        id: 'end-funny',
        emoji: '😂',
        text: 'Cracker ... flogen ihm in die Nase! Versuchen Sie es das nächste Mal mit dem Teilen.',
        ending: true,
      },
    },
  },
  {
    id: 'rainbow-brush',
    title: 'Pinsel rannte weg',
    emoji: '🖌️',
    start: 'start',
    nodes: {
      start: {
        id: 'start',
        emoji: '🎨',
        text: 'Der Pinsel malt von selbst! Streben Sie nach Farbe oder fragen Sie nach ihr?',
        choices: [
          { label: 'renne hinter dir her', next: 'chase' },
          { label: '„Welche Farbe?“ fragen', next: 'ask', stars: 1 },
        ],
      },
      chase: {
        id: 'chase',
        emoji: '🏃',
        text: 'Der Pinsel ging zum Regenbogen. Wählen Sie auch eine Farbe!',
        choices: [
          { label: 'blaue Ruhe', next: 'end-art', stars: 1 },
          { label: 'gelbe Freude', next: 'end-art', stars: 1 },
        ],
      },
      ask: {
        id: 'ask',
        emoji: '💬',
        text: 'Pinsel: „Was ist deine Farbe?“ Nennen Sie eine Farbe, die Ihnen am Herzen liegt.',
        choices: [{ label: 'Ich habe meine Farbe gewählt', next: 'end-art', stars: 2 }],
      },
      'end-art': {
        id: 'end-art',
        emoji: '🌈',
        text: 'Die Wand verwandelte sich in ein Gemälde. Du bist auch ein Künstler!',
        ending: true,
      },
    },
  },
]
