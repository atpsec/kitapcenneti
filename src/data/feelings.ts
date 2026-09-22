export interface Feeling {
  id: string
  label: string
  emoji: string
  color: string
  tip: string
  activity: string
}

export const FEELINGS: Feeling[] = [
  { id: 'happy', label: 'glücklich', emoji: '😊', color: '#ffe66d', tip: 'Wenn man sein Glück mit jemandem teilt, wird es größer.', activity: 'Neşeli bir tekerleme söyle.' },
  { id: 'calm', label: 'ruhig', emoji: '😌', color: '#a8edea', tip: 'Ruhe ist eine Superkraft.', activity: '3 yavaş nefes al.' },
  { id: 'excited', label: 'aufgeregt', emoji: '🤩', color: '#ff9f43', tip: 'Leiten Sie Ihre Begeisterung in sicheres Spiel um.', activity: 'Kısa bir dans molası!' },
  { id: 'sad', label: 'traurig', emoji: '😢', color: '#74b9ff', tip: 'Es ist in Ordnung, traurig zu sein; Erzählen heilt.', activity: 'Yumuşak bir sesli masal dinle.' },
  { id: 'angry', label: 'wütend', emoji: '😤', color: '#ff6b6b', tip: 'Wut ist ein Signal; Beruhige zuerst den Körper.', activity: 'Yastığa yumruk (oyuncak) veya 10’a kadar say.' },
  { id: 'scared', label: 'Angst', emoji: '😨', color: '#a29bfe', tip: 'Die Angst wird geringer, wenn jemand, der sicher ist, bei dir ist.', activity: 'Bir yetişkine anlat + gece lambası.' },
  { id: 'tired', label: 'müde', emoji: '😴', color: '#b2bec3', tip: 'Ausruhen ist keine Faulheit, es ist eine Notwendigkeit.', activity: 'Kısa dinlenme veya erken uyku rutini.' },
  { id: 'proud', label: 'stolz', emoji: '🌟', color: '#55efc4', tip: 'Die Anerkennung Ihrer Bemühungen stärkt das Selbstvertrauen.', activity: 'Bugün başardığın 1 şeyi söyle.' },
  { id: 'curious', label: 'neugierig', emoji: '🤔', color: '#fdcb6e', tip: 'Neugier ist die Tür zum Lernen.', activity: 'Bugün bir "Neden?" sorusu sor.' },
  { id: 'lonely', label: 'einsam', emoji: '🥺', color: '#dfe6e9', tip: 'Es ist normal, sich einsam zu fühlen. Reden hilft.', activity: 'Güvendiğin birine mesaj veya sarılma.' },
  { id: 'bored', label: 'gelangweilt', emoji: '😐', color: '#b8e994', tip: 'Langeweile ist der Vorbote kreativer Ideen.', activity: 'Yeni bir oyun veya boyama dene.' },
  { id: 'nervous', label: 'nervös', emoji: '😬', color: '#fab1a0', tip: 'Anspannung ist die Art und Weise des Körpers, „Mach dich bereit“ zu sagen.', activity: 'Omuzları indir, 5 yavaş nefes al.' },
  { id: 'loving', label: 'Liebevoll', emoji: '🥰', color: '#ff7675', tip: 'Seine Liebe zu zeigen ist ein schönes Geschenk.', activity: 'Birine teşekkür et veya sarıl.' },
  { id: 'surprised', label: 'verwirrt', emoji: '😲', color: '#ffeaa7', tip: 'Überraschung kann der Moment sein, in dem wir etwas Neues lernen.', activity: 'Ne olduğunu bir cümleyle anlat.' },
  { id: 'hopeful', label: 'hoffnungsvoll', emoji: '🌱', color: '#81ecec', tip: 'Hoffnung bringt auch an schwierigen Tagen Licht ins Dunkel.', activity: 'Yarın için güzel bir düşünce yaz.' },
  { id: 'grateful', label: 'dankbar', emoji: '🙏', color: '#a29bfe', tip: 'Danken macht das Herz leichter.', activity: 'Bugün için 3 şey say: neye şükrediyorsun?' },
  { id: 'confused', label: 'Verwirrt', emoji: '😕', color: '#636e72', tip: 'Fragen Sie etwas, das Sie nicht verstehen – das ist Mut.', activity: 'Bir yetişkine "Anlamadım" de.' },
  { id: 'brave', label: 'mutig', emoji: '💪', color: '#e17055', tip: 'Bei Mut geht es nicht darum, furchtlos zu sein, sondern darum, es zu versuchen.', activity: 'Bugün küçük bir cesaret göster.' },
  { id: 'peaceful', label: 'friedlich', emoji: '🕊️', color: '#74b9ff', tip: 'Erinnern Sie sich an die Momente des Friedens, halten Sie sie noch einmal fest.', activity: 'Sessizce 1 dakika otur, dinle.' },
  { id: 'jealous', label: 'eifersüchtig', emoji: '😒', color: '#fab1a0', tip: 'Eifersucht möchte manchmal den Menschen beschützen, den wir lieben.', activity: 'Güvendiğin birine anlat.' },
  { id: 'shy', label: 'schüchtern', emoji: '😳', color: '#ffeaa7', tip: 'Schüchternheit ist in neuen Umgebungen normal.', activity: 'Gülümse ve el salla.' },
  { id: 'disappointed', label: 'Enttäuschung', emoji: '😞', color: '#b2bec3', tip: 'Wir sind verärgert, wenn Erwartungen nicht erfüllt werden; das wird vorübergehen.', activity: 'Derin nefes + yeni plan.' },
  { id: 'energetic', label: 'energisch', emoji: '⚡', color: '#fdcb6e', tip: 'Lenken Sie Ihre Energie in sicheres Spiel.', activity: '5 dk zıpla veya dans et.' },
  { id: 'thankful', label: 'Voller Dank', emoji: '🤗', color: '#55efc4', tip: 'Danken lässt das Herz größer werden.', activity: 'Bugün kime teşekkür edersin?' }
,
  { id: 'feel-portal-1', label: 'voller Neugier', emoji: '🤩', color: '#fdcb6e', tip: 'Es ist schwierig, dieses Gefühl zu erkennen.', activity: 'Bir cümleyle anlat.' },
  { id: 'feel-portal-2', label: 'Dankbarkeit', emoji: '🙏', color: '#a29bfe', tip: 'Es ist schwierig, dieses Gefühl zu erkennen.', activity: 'Bir cümleyle anlat.' },
  { id: 'feel-portal-3', label: 'Hoffnung', emoji: '🌱', color: '#55efc4', tip: 'Es ist schwierig, dieses Gefühl zu erkennen.', activity: 'Bir cümleyle anlat.' },
  { id: 'feel-portal-4', label: 'Explosion der Aufregung', emoji: '🎉', color: '#ff9ff3', tip: 'Es ist schwierig, dieses Gefühl zu erkennen.', activity: 'Bir cümleyle anlat.' },
  { id: 'feel-portal-5', label: 'gelassen', emoji: '🧘', color: '#74b9ff', tip: 'Es ist schwierig, dieses Gefühl zu erkennen.', activity: 'Bir cümleyle anlat.' }]

export const CALM_SCRIPTS = [
  'Burnundan 4 sayarak nefes al… ağzından 4 sayarak ver.',
  'Ayaklarını yerde hisset. Omuzlarını yumuşat.',
  'Bugün zor bir an olabilir; sen güvendesin.',
  'İçinden söyle: "Bu duygu geçici, ben güçlüyüm."',
  'Gözlerini kapat, burnundan yavaşça nefes al. 1… 2… 3… 4. Ağzından ver.',
  'Parmaklarını yavaşça aç ve kapat. Bedenin sakinleşiyor.',
  'Karnına elini koy. Nefes alırken karnın şişsin, verirken insin.',
  'Beş şey gör: pencere, renk, bir ses, bir koku, bir dokunuş.',
  'Kendine nazik ol. Herkes bazen zorlanır.',
  'Bu an geçecek. Yanında seni seven biri var.',
  'Dudaklarını birleştir, burnundan nefes al. Sakin bir dalga gibi.',
  'Bugün yaptığın bir iyi şeyi hatırla. Gurur duy.',
  'Ayak tabanlarını yere bastır. Bedenin güvende.',
  'Omuzlarını kulaklarından uzaklaştır. Gerginlik akıp gitsin.',
  'Burnundan yavaşça nefes al… 1… 2… 3… Ağzından ver.',
  'Gözlerinin önünde sakin bir yer hayal et — sahilde, ormanda.',
  'Kalbine elini koy. Kalp atışını hisset, yavaşlasın.',
  'İçinden "Ben değerliyim" de. Her çocuk değerlidir.',
  'Bir renk seç ve etrafında o renkte 3 şey bul.',
  'Yavaşça başını sağa sola çevir. Boynunu rahatlat.',
  'Sakinleşme notu 1: burnundan nefes al, omuzlarını indir.',
  'Sakinleşme notu 2: burnundan nefes al, omuzlarını indir.',
  'Sakinleşme notu 3: burnundan nefes al, omuzlarını indir.',
  'Sakinleşme notu 4: burnundan nefes al, omuzlarını indir.',
  'Sakinleşme notu 5: burnundan nefes al, omuzlarını indir.',
  'Sakinleşme notu 6: burnundan nefes al, omuzlarını indir.',
  'Sakinleşme notu 7: burnundan nefes al, omuzlarını indir.',
  'Sakinleşme notu 8: burnundan nefes al, omuzlarını indir.',
  'Sakinleşme notu 9: burnundan nefes al, omuzlarını indir.',
  'Sakinleşme notu 10: burnundan nefes al, omuzlarını indir.'
]
