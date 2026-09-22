export interface QuizQuestion {
  question: string
  options: string[]
  answer: number
}

/** Kurze, altersgerechte Quizfragen mit vertrauten deutschen Bezügen. */
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  { question: 'Welche Stadt ist die Hauptstadt Deutschlands?', options: ['Hamburg', 'Berlin', 'München', 'Köln'], answer: 1 },
  { question: 'Welcher Planet ist der Sonne am nächsten?', options: ['Erde', 'Merkur', 'Mars', 'Jupiter'], answer: 1 },
  { question: 'Zu welcher Tiergruppe gehören Wale?', options: ['Fische', 'Reptilien', 'Säugetiere', 'Vögel'], answer: 2 },
  { question: 'Wie viele Farben hat ein Regenbogen ungefähr?', options: ['3', '5', '7', '10'], answer: 2 },
  { question: 'Welcher Fluss fließt durch Köln?', options: ['Rhein', 'Elbe', 'Donau', 'Weser'], answer: 0 },
  { question: 'In welchem Gebirge liegt die Zugspitze?', options: ['Alpen', 'Harz', 'Schwarzwald', 'Eifel'], answer: 0 },
  { question: 'Was produzieren Bienen?', options: ['Milch', 'Honig', 'Käse', 'Brot'], answer: 1 },
  { question: 'Wie viele Tage hat eine Woche?', options: ['5', '6', '7', '8'], answer: 2 },
  { question: 'Was macht der Mond um die Erde?', options: ['Er fällt', 'Er fliegt weg', 'Er kreist', 'Er verschwindet'], answer: 2 },
  { question: 'Was fördert regelmäßiges Lesen?', options: ['Nur den Schlaf', 'Fantasie und Sprache', 'Nur das Rennen', 'Gar nichts'], answer: 1 },
  { question: 'Bei welcher Temperatur kocht Wasser ungefähr?', options: ['50 °C', '100 °C', '150 °C', '0 °C'], answer: 1 },
  { question: 'Welche See liegt im Norden Deutschlands?', options: ['Nordsee', 'Schwarzes Meer', 'Rotes Meer', 'Totes Meer'], answer: 0 },
  { question: 'Welche Pflanze gibt Sauerstoff an die Luft ab?', options: ['Eine Pflanze', 'Ein Stein', 'Ein Glas', 'Ein Schuh'], answer: 0 },
  { question: 'Wo leben Pinguine in freier Natur?', options: ['In der Wüste', 'In Polarregionen', 'Im Regenwald', 'In der Stadt'], answer: 1 },
  { question: 'Wobei helfen Hörgeschichten?', options: ['Nur gegen Hunger', 'Beim Zuhören und Träumen', 'Beim Rennen', 'Bei gar nichts'], answer: 1 },
  { question: 'Wie viele Planeten hat unser Sonnensystem?', options: ['7', '8', '9', '10'], answer: 1 },
  { question: 'Was brauchen Pflanzen zum Wachsen?', options: ['Licht und Wasser', 'Nur Dunkelheit', 'Eis', 'Salz'], answer: 0 },
  { question: 'Was bedeutet eine rote Ampel?', options: ['Stopp', 'Losfahren', 'Rennen', 'Springen'], answer: 0 },
  { question: 'Welche Energiequelle ist erneuerbar?', options: ['Sonne', 'Kohle', 'Erdöl', 'Benzin'], answer: 0 },
  { question: 'Welche Form hat ein Buch meistens?', options: ['Rechteck', 'Kreis', 'Stern', 'Dreieck'], answer: 0 },
  { question: 'Was ist eine Emotion?', options: ['Tisch', 'Freude', 'Stift', 'Auto'], answer: 1 },
  { question: 'Was finden wir in einer Bibliothek?', options: ['Nur Spiele', 'Bücher und Leseplätze', 'Nur Autos', 'Nichts'], answer: 1 },
  { question: 'Wie viel ist 3 × 4?', options: ['7', '10', '12', '14'], answer: 2 },
  { question: 'Welche Farbe haben viele Blätter im Herbst?', options: ['Blau', 'Gelb oder Rot', 'Lila', 'Sie bleiben immer grün'], answer: 1 },
]

export const MEMORY_EMOJIS = ['🦄', '🚀', '🐢', '🌟', '🐠', '🦋', '🌈', '🏰', '🐧', '🎨', '🦊', '🍎', '🌸', '🎈', '🦉', '🐬', '🌻', '🎪', '🍦', '⚽']
