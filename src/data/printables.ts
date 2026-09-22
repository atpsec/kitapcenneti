import type { PageId } from '../types/nav'

export interface Printable {
  id: string
  title: string
  emoji: string
  age: string
  category: string
  link: PageId
  description: string
  premium?: boolean
}

export const PRINTABLES: Printable[] = [
  { id: 'boyama-pack', title: 'Malpaket', emoji: '🖍️', age: '3+', category: 'Kunst', link: 'coloring', description: '30 lizenzfreie Malvorlagen – PDF herunterladen', premium: true },
  { id: 'sertifika', title: 'Leistungsbescheinigung', emoji: '🏆', age: '3+', category: 'Belohnung', link: 'certificates', description: 'Personalisierte PDF-Auszeichnungsurkunde' },
  { id: 'gorev', title: 'Tägliche Aufgabenliste', emoji: '⭐', age: '4+', category: 'Hausaufgaben', link: 'quests', description: 'Laden Sie die heutigen Aufgaben mit einem Klick als PDF herunter' },
  { id: 'stem', title: 'STEM-Experimentkarte', emoji: '🔬', age: '4+', category: 'Wissenschaft', link: 'stem', description: 'Mini-Experiment mit Haushaltsmaterialien', premium: true },
  { id: 'duygu', title: 'Emotionskarten', emoji: '💛', age: '3+', category: 'Emotion', link: 'feelings', description: 'Druckbares Emotionskartenpaket (PDF)' },
  { id: 'tekerleme', title: 'Kinderreimseite', emoji: '🎵', age: '3+', category: 'Sprache', link: 'rhymes', description: 'Auswendiglernen und Vorlesen' },
  { id: 'kahraman', title: 'Heldendatei', emoji: '🦸', age: '5+', category: 'Lesen', link: 'heroes', description: 'Originalbiografien der Charaktere' },
  { id: 'aile', title: 'Familienführer', emoji: '👨‍👩‍👧', age: 'Ebeveyn', category: 'Familie', link: 'blog', description: 'Eltern-Blogbeiträge', premium: true },
  { id: 'gunluk', title: 'Tagebuchseite', emoji: '📓', age: '5+', category: 'Schreiben', link: 'journal', description: 'Vorlage für ein Gefühls- und Zeichentagebuch' },
  { id: 'takvim', title: 'Wochenkalender', emoji: '📅', age: '4+', category: 'planen', link: 'calendar', description: 'Plan für Lese- und Spieltage', premium: true },
  { id: 'kutuphane', title: 'Märchenliste', emoji: '📚', age: '3+', category: 'Lesen', link: 'library', description: 'Checkliste für Bibliotheksmärchen', premium: true },
  { id: 'yol-haritasi', title: 'Lernpfad', emoji: '🛤️', age: '6+', category: 'Bildung', link: 'paths', description: 'Schritt-für-Schritt-Skill-Plan' },
  { id: 'ogretmen', title: 'Unterrichtsaktivität', emoji: '🍎', age: 'Öğretmen', category: 'Bildung', link: 'teachers', description: 'Ideen für den Einsatz im Unterricht', premium: true },
  { id: 'kesfet-kart', title: 'Entdeckungskarten', emoji: '🔍', age: '5+', category: 'Wissenschaft', link: 'discover', description: 'Wöchentliche Kuriositätenthemen' },
  { id: 'dunya-haritasi', title: 'Weltkarte', emoji: '🌍', age: '6+', category: 'Geographie', link: 'world', description: 'Regionen und Naturnotizen' },
  { id: 'profil-rozet', title: 'Abzeichenseite', emoji: '🏅', age: '4+', category: 'Belohnung', link: 'profile', description: 'Stern- und Fortschrittsübersicht' },
  { id: 'dukkan-liste', title: 'Auszeichnungsliste', emoji: '🛒', age: '5+', category: 'Motivation', link: 'shop', description: 'Mit Sternen freigeschaltete Auszeichnungen' },
  { id: 'kelime-oyunu', title: 'Wortsuche', emoji: '🔤', age: '6+', category: 'Sprache', link: 'activities', description: 'Seite mit gemischten Buchstabenspielen' },
  { id: 'nefes-karti', title: 'ruhige Atemkarte', emoji: '🌬️', age: '4+', category: 'Emotion', link: 'feelings', description: '4-4 Atemübungen' },
  { id: 'aile-sozlesme', title: 'Familienausstellungsvereinbarung', emoji: '🤝', age: 'Ebeveyn', category: 'Familie', link: 'parents', description: 'Die Regeln müssen gemeinsam unterzeichnet werden' },
  { id: 'masal-kahraman', title: 'Heldenkarten', emoji: '🃏', age: '4+', category: 'Lesen', link: 'heroes', description: 'Zusammenfassung der 12 einzigartigen Helden' },
  { id: 'bilmece', title: 'Rätselseite', emoji: '🧩', age: '5+', category: 'Unterhaltung', link: 'fun', description: 'druckbare Rätsel' },
  { id: 'haftalik-menu', title: 'Wöchentlicher Menüplan', emoji: '📋', age: 'Ebeveyn', category: 'planen', link: 'calendar', description: 'Wöchentlicher Menüplan – druckbare PDF-Idee' },
  { id: 'roket-kes', title: 'Rucola ausschneiden und einfügen', emoji: '🚀', age: '5+', category: 'Kunst', link: 'coloring', description: 'Ausschneiden und Einfügen einer Rakete – druckbare PDF-Idee' },
  { id: 'duygu-gunluk', title: 'Emotionstagebuchseite', emoji: '📓', age: '5+', category: 'Emotion', link: 'journal', description: 'Gefühlstagebuchseite – druckbare PDF-Idee' },
  { id: 'yildiz-tablo', title: 'Sternenkarte', emoji: '⭐', age: '4+', category: 'Motivation', link: 'quests', description: 'Sternkarte – druckbare PDF-Idee' },
  { id: 'okuma-liste', title: 'Leseliste', emoji: '📚', age: '4+', category: 'Lesen', link: 'library', description: 'Leseliste – druckbare PDF-Idee' },
  { id: 'dogada-liste', title: 'Naturbeobachtungsliste', emoji: '🌿', age: '5+', category: 'Natur', link: 'stem', description: 'Naturbeobachtungsliste – druckbare PDF-Idee' },
  { id: 'tekerleme-kart', title: 'Kinderreimkarten', emoji: '🎵', age: '3+', category: 'Sprache', link: 'rhymes', description: 'Kinderreimkarten – druckbare PDF-Idee' },
  { id: 'kahraman-ciz', title: 'Helden-Zeichenseite', emoji: '🦸', age: '5+', category: 'Kunst', link: 'heroes', description: 'Helden-Zeichenblatt – druckbare PDF-Idee' },
  { id: 'bilmece-kart', title: 'Rätselkarten', emoji: '🧩', age: '5+', category: 'Unterhaltung', link: 'fun', description: 'Rätselkarten – druckbare PDF-Idee' },
  { id: 'ogretmen-plan', title: 'Unterrichtsplan für Lehrer', emoji: '👩‍🏫', age: 'Öğretmen', category: 'Bildung', link: 'teachers', description: 'Unterrichtsplan für Lehrer – druckbare PDF-Idee' },
  { id: 'kesfet-liste', title: 'Checkliste für die Entdeckung', emoji: '🧭', age: '5+', category: 'Entdeckung', link: 'discover', description: 'Discovery-Checkliste – druckbare PDF-Idee' },
  { id: 'dunya-not', title: 'Weltnotizseite', emoji: '🌍', age: '6+', category: 'Geographie', link: 'world', description: 'Weltnotizblatt – druckbare PDF-Idee', premium: true },
  { id: 'profil-hedef', title: 'Profilzielseite', emoji: '🎯', age: '5+', category: 'Motivation', link: 'profile', description: 'Profilzielblatt – druckbare PDF-Idee' }
]
