export interface Feeling {
  id: string
  label: string
  emoji: string
  color: string
  tip: string
  activity: string
}

export const FEELINGS: Feeling[] = [
  { id: 'happy', label: 'glücklich', emoji: '😊', color: '#ffe66d', tip: 'Wenn man sein Glück mit jemandem teilt, wird es größer.', activity: 'Sag ein fröhliches Reimwort.' },
  { id: 'calm', label: 'ruhig', emoji: '😌', color: '#a8edea', tip: 'Ruhe ist eine Superkraft.', activity: 'Atme dreimal langsam ein und aus.' },
  { id: 'excited', label: 'aufgeregt', emoji: '🤩', color: '#ff9f43', tip: 'Leite deine Begeisterung in sicheres Spiel.', activity: 'Mach eine kurze Tanzpause!' },
  { id: 'sad', label: 'traurig', emoji: '😢', color: '#74b9ff', tip: 'Es ist in Ordnung, traurig zu sein; Erzählen kann helfen.', activity: 'Höre eine sanfte Geschichte.' },
  { id: 'angry', label: 'wütend', emoji: '😤', color: '#ff6b6b', tip: 'Wut ist ein Signal; beruhige zuerst deinen Körper.', activity: 'Drücke ein Kissen oder zähle bis zehn.' },
  { id: 'scared', label: 'ängstlich', emoji: '😨', color: '#a29bfe', tip: 'Angst wird kleiner, wenn eine vertraute Person bei dir ist.', activity: 'Erzähle es einem Erwachsenen und schalte ein Nachtlicht an.' },
  { id: 'tired', label: 'müde', emoji: '😴', color: '#b2bec3', tip: 'Ausruhen ist keine Faulheit, sondern wichtig.', activity: 'Mach eine kurze Pause oder beginne die Schlafroutine.' },
  { id: 'proud', label: 'stolz', emoji: '🌟', color: '#55efc4', tip: 'Anerkennung stärkt das Selbstvertrauen.', activity: 'Erzähle von einer Sache, die dir heute gelungen ist.' },
  { id: 'curious', label: 'neugierig', emoji: '🤔', color: '#fdcb6e', tip: 'Neugier ist die Tür zum Lernen.', activity: 'Stelle heute eine „Warum?“-Frage.' },
  { id: 'lonely', label: 'einsam', emoji: '🥺', color: '#dfe6e9', tip: 'Es ist normal, sich einsam zu fühlen. Reden hilft.', activity: 'Schreibe einer vertrauten Person oder bitte um eine Umarmung.' },
  { id: 'bored', label: 'gelangweilt', emoji: '😐', color: '#b8e994', tip: 'Langeweile ist oft der Anfang kreativer Ideen.', activity: 'Probiere ein neues Spiel oder eine Malvorlage.' },
  { id: 'nervous', label: 'nervös', emoji: '😬', color: '#fab1a0', tip: 'Anspannung sagt: „Mach dich bereit.“', activity: 'Senke die Schultern und atme fünfmal langsam.' },
  { id: 'loving', label: 'liebevoll', emoji: '🥰', color: '#ff7675', tip: 'Liebe zu zeigen ist ein schönes Geschenk.', activity: 'Bedanke dich bei jemandem oder schenke eine Umarmung.' },
  { id: 'surprised', label: 'überrascht', emoji: '😲', color: '#ffeaa7', tip: 'Überraschungen können der Anfang von etwas Neuem sein.', activity: 'Beschreibe, was passiert ist, in einem Satz.' },
  { id: 'hopeful', label: 'hoffnungsvoll', emoji: '🌱', color: '#81ecec', tip: 'Hoffnung bringt auch an schwierigen Tagen Licht.', activity: 'Schreibe einen schönen Gedanken für morgen auf.' },
  { id: 'grateful', label: 'dankbar', emoji: '🙏', color: '#a29bfe', tip: 'Dankbarkeit macht das Herz leichter.', activity: 'Nenne drei Dinge, für die du dankbar bist.' },
  { id: 'confused', label: 'verwirrt', emoji: '😕', color: '#636e72', tip: 'Nachzufragen, wenn etwas unklar ist, braucht Mut.', activity: 'Sag einem Erwachsenen: „Ich verstehe es noch nicht.“' },
  { id: 'brave', label: 'mutig', emoji: '💪', color: '#e17055', tip: 'Mut bedeutet nicht, keine Angst zu haben, sondern es zu versuchen.', activity: 'Zeige heute eine kleine Portion Mut.' },
  { id: 'peaceful', label: 'friedlich', emoji: '🕊️', color: '#74b9ff', tip: 'Halte friedliche Momente bewusst fest.', activity: 'Sitze eine Minute still und lausche.' },
  { id: 'jealous', label: 'eifersüchtig', emoji: '😒', color: '#fab1a0', tip: 'Eifersucht möchte manchmal Menschen schützen, die wir lieben.', activity: 'Sprich mit jemandem, dem du vertraust.' },
  { id: 'shy', label: 'schüchtern', emoji: '😳', color: '#ffeaa7', tip: 'Schüchternheit ist in neuen Umgebungen normal.', activity: 'Lächle und winke jemandem zu.' },
  { id: 'disappointed', label: 'enttäuscht', emoji: '😞', color: '#b2bec3', tip: 'Enttäuschung vergeht, wenn Erwartungen nicht erfüllt wurden.', activity: 'Atme tief durch und überlege einen neuen Plan.' },
  { id: 'energetic', label: 'energiegeladen', emoji: '⚡', color: '#fdcb6e', tip: 'Lenke deine Energie in sicheres Spiel.', activity: 'Springe oder tanze fünf Minuten.' },
  { id: 'thankful', label: 'dankbar', emoji: '🤗', color: '#55efc4', tip: 'Dankbarkeit lässt das Herz größer werden.', activity: 'Wem möchtest du heute danken?' }
,
  { id: 'feel-portal-1', label: 'voller Neugier', emoji: '🤩', color: '#fdcb6e', tip: 'Es kann schwierig sein, dieses Gefühl zu erkennen.', activity: 'Beschreibe es in einem Satz.' },
  { id: 'feel-portal-2', label: 'Dankbarkeit', emoji: '🙏', color: '#a29bfe', tip: 'Es kann schwierig sein, dieses Gefühl zu erkennen.', activity: 'Beschreibe es in einem Satz.' },
  { id: 'feel-portal-3', label: 'Hoffnung', emoji: '🌱', color: '#55efc4', tip: 'Es kann schwierig sein, dieses Gefühl zu erkennen.', activity: 'Beschreibe es in einem Satz.' },
  { id: 'feel-portal-4', label: 'Explosion der Aufregung', emoji: '🎉', color: '#ff9ff3', tip: 'Es kann schwierig sein, dieses Gefühl zu erkennen.', activity: 'Beschreibe es in einem Satz.' },
  { id: 'feel-portal-5', label: 'gelassen', emoji: '🧘', color: '#74b9ff', tip: 'Es kann schwierig sein, dieses Gefühl zu erkennen.', activity: 'Beschreibe es in einem Satz.' }]

export const CALM_SCRIPTS = [
  'Atme durch die Nase vier Zählzeiten ein und durch den Mund vier Zählzeiten aus.',
  'Spüre deine Füße auf dem Boden. Lass deine Schultern locker.',
  'Heute kann ein schwieriger Moment sein; du bist sicher.',
  'Sag dir leise: „Dieses Gefühl geht vorbei, ich bin stark.“',
  'Schließe die Augen und atme langsam durch die Nase ein. 1 … 2 … 3 … 4. Atme durch den Mund aus.',
  'Öffne und schließe langsam deine Finger. Dein Körper wird ruhiger.',
  'Lege eine Hand auf den Bauch. Beim Einatmen hebt er sich, beim Ausatmen senkt er sich.',
  'Sieh fünf Dinge: ein Fenster, eine Farbe, einen Ton, einen Duft und eine Berührung.',
  'Sei freundlich zu dir. Jeder Mensch hat manchmal einen schweren Tag.',
  'Dieser Moment geht vorbei. Jemand, der dich liebt, ist bei dir.',
  'Schließe die Lippen, atme durch die Nase ein und aus wie eine ruhige Welle.',
  'Erinnere dich an etwas Gutes, das du heute getan hast. Sei stolz darauf.',
  'Drücke deine Fußsohlen auf den Boden. Dein Körper ist sicher.',
  'Lass die Schultern von den Ohren sinken. Die Anspannung darf gehen.',
  'Atme langsam durch die Nase ein … 1 … 2 … 3 … und durch den Mund aus.',
  'Stell dir einen ruhigen Ort vor – am Strand oder im Wald.',
  'Lege eine Hand auf dein Herz. Spüre den Herzschlag und werde langsamer.',
  'Sag dir leise: „Ich bin wertvoll.“ Jedes Kind ist wertvoll.',
  'Wähle eine Farbe und finde drei Dinge in dieser Farbe.',
  'Drehe den Kopf langsam nach rechts und links. Entspanne deinen Nacken.',
  'Ruheimpuls 1: Atme ein und lass die Schultern sinken.',
  'Ruheimpuls 2: Atme ein und lass die Schultern sinken.',
  'Ruheimpuls 3: Atme ein und lass die Schultern sinken.',
  'Ruheimpuls 4: Atme ein und lass die Schultern sinken.',
  'Ruheimpuls 5: Atme ein und lass die Schultern sinken.',
  'Ruheimpuls 6: Atme ein und lass die Schultern sinken.',
  'Ruheimpuls 7: Atme ein und lass die Schultern sinken.',
  'Ruheimpuls 8: Atme ein und lass die Schultern sinken.',
  'Ruheimpuls 9: Atme ein und lass die Schultern sinken.',
  'Ruheimpuls 10: Atme ein und lass die Schultern sinken.'
]
