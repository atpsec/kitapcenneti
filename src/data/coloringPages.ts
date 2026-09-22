export interface ColoringPage {
  id: string
  title: string
  emoji: string
  age: string
  category: string
  description: string
}

export const COLORING_CATEGORIES = [
  'Tümü',
  'Hayvanlar',
  'Kahramanlar',
  'Masal',
  'Uzay',
  'Deniz',
  'Doğa',
  'Taşıtlar',
  'Bilim',
  'Mevsim',
] as const

export const COLORING_PAGES: ColoringPage[] = [
  { id: 'unicorn', title: 'Mutlu Unicorn', emoji: '🦄', age: '3+', category: 'Hayvanlar', description: 'Gökkuşağı yeleli sevimli unicorn' },
  { id: 'cat', title: 'Oyuncu Kedi', emoji: '🐱', age: '3+', category: 'Hayvanlar', description: 'Yumakla oynayan kedi' },
  { id: 'puppy', title: 'Minik Köpek', emoji: '🐶', age: '3+', category: 'Hayvanlar', description: 'Kulakları sarkık sevimli köpek' },
  { id: 'owl', title: 'Bilge Baykuş', emoji: '🦉', age: '4+', category: 'Hayvanlar', description: 'Dalda oturan baykuş' },
  { id: 'elephant', title: 'Fil Yavrusu', emoji: '🐘', age: '3+', category: 'Hayvanlar', description: 'Çiçek tutan minik fil' },
  { id: 'turtle', title: 'Cesur Kaplumbağa', emoji: '🐢', age: '3+', category: 'Kahramanlar', description: 'Tiko karakterinin boyama sayfası' },
  { id: 'star-hero', title: 'Yıldız Kız Nova', emoji: '🌟', age: '5+', category: 'Kahramanlar', description: 'Nova\'nın özgün silueti' },
  { id: 'luna', title: 'Luna Deniz', emoji: '🧜', age: '4+', category: 'Kahramanlar', description: 'Deniz koruyucusu Luna' },
  { id: 'rocket', title: 'Uzay Roketi', emoji: '🚀', age: '4+', category: 'Uzay', description: 'Yıldızların arasında uçan roket' },
  { id: 'planet', title: 'Renkli Gezegen', emoji: '🪐', age: '5+', category: 'Uzay', description: 'Halkalı gezegen ve yıldızlar' },
  { id: 'astronaut', title: 'Küçük Astronot', emoji: '👨‍🚀', age: '5+', category: 'Uzay', description: 'Ay\'da yürüyen astronot' },
  { id: 'castle', title: 'Sihirli Kale', emoji: '🏰', age: '5+', category: 'Masal', description: 'Bulutların üstündeki kale' },
  { id: 'dragon', title: 'İyi Ejderha', emoji: '🐉', age: '5+', category: 'Masal', description: 'Baloncuk üreten ejderha' },
  { id: 'fairy', title: 'Çiçek Peri', emoji: '🧚', age: '4+', category: 'Masal', description: 'Kanatlı peri ve çiçekler' },
  { id: 'fish', title: 'Mercan Balığı', emoji: '🐠', age: '3+', category: 'Deniz', description: 'Renkli deniz altı dünyası' },
  { id: 'octopus', title: 'Gülen Ahtapot', emoji: '🐙', age: '3+', category: 'Deniz', description: 'Sekiz kollu neşeli ahtapot' },
  { id: 'submarine', title: 'Sarı Denizaltı', emoji: '🚢', age: '5+', category: 'Deniz', description: 'Pencereli mini denizaltı' },
  { id: 'treehouse', title: 'Ağaç Ev', emoji: '🌳', age: '4+', category: 'Doğa', description: 'Ormandaki eğlenceli ağaç ev' },
  { id: 'butterfly', title: 'Kelebek Bahçesi', emoji: '🦋', age: '3+', category: 'Doğa', description: 'Çiçekler ve kelebekler' },
  { id: 'rainbow', title: 'Gökkuşağı Köprüsü', emoji: '🌈', age: '3+', category: 'Doğa', description: 'İki bulutu birleştiren gökkuşağı' },
  { id: 'flower', title: 'Çiçek Buketi', emoji: '🌸', age: '3+', category: 'Doğa', description: 'Vazoda renkli çiçekler' },
  { id: 'dino', title: 'Sevimli Dinozor', emoji: '🦕', age: '4+', category: 'Hayvanlar', description: 'Gülümseyen uzun boyunlu dino' },
  { id: 'robot', title: 'Dost Robot', emoji: '🤖', age: '6+', category: 'Bilim', description: 'Gülen yardımcı robot' },
  { id: 'car', title: 'Neşeli Araba', emoji: '🚗', age: '3+', category: 'Taşıtlar', description: 'Gülen yüzlü araba' },
  { id: 'train', title: 'Oyuncak Tren', emoji: '🚂', age: '3+', category: 'Taşıtlar', description: 'Vagonlarıyla tren' },
  { id: 'hotair', title: 'Uçan Balon', emoji: '🎈', age: '4+', category: 'Taşıtlar', description: 'Gökyüzünde sıcak hava balonu' },
  { id: 'snowman', title: 'Kardan Adam', emoji: '⛄', age: '3+', category: 'Mevsim', description: 'Atkılı kardan adam' },
  { id: 'sunflower', title: 'Ayçiçeği', emoji: '🌻', age: '3+', category: 'Mevsim', description: 'Büyük ayçiçeği ve arı' },
  { id: 'icecream', title: 'Dondurma Külahı', emoji: '🍦', age: '3+', category: 'Mevsim', description: 'Üç toplu dondurma' },
  { id: 'birthday', title: 'Doğum Günü Pastası', emoji: '🎂', age: '4+', category: 'Masal', description: 'Mumlu pasta ve hediyeler' },
  { id: 'lion', title: 'Sevimli Aslan', emoji: '🦁', age: '4+', category: 'Hayvanlar', description: 'Yeleli gülümseyen aslan' },
  { id: 'rabbit', title: 'Zıplayan Tavşan', emoji: '🐰', age: '3+', category: 'Hayvanlar', description: 'Havuç tutan sevimli tavşan' },
  { id: 'fox', title: 'Orman Tilki', emoji: '🦊', age: '4+', category: 'Hayvanlar', description: 'Kuyruklu meraklı tilki' },
  { id: 'penguin', title: 'Kutup Pengueni', emoji: '🐧', age: '4+', category: 'Hayvanlar', description: 'Buz üstünde yürüyen penguen' },
  { id: 'whale', title: 'Mavi Balina', emoji: '🐋', age: '5+', category: 'Deniz', description: 'Okyanusta yüzen dev balina' },
  { id: 'crab', title: 'Kırmızı Yengeç', emoji: '🦀', age: '3+', category: 'Deniz', description: 'Kumsalda yürüyen yengeç' },
  { id: 'starfish', title: 'Deniz Yıldızı', emoji: '⭐', age: '3+', category: 'Deniz', description: 'Beş kollu deniz yıldızı' },
  { id: 'mira', title: 'Mira Renk', emoji: '🎨', age: '5+', category: 'Kahramanlar', description: 'Sanat kahramanı Mira\'nın silueti' },
  { id: 'ruzgar', title: 'Şimşek Rüzgar', emoji: '⚡', age: '6+', category: 'Kahramanlar', description: 'Hızlı yardım kahramanı Rüzgar' },
  { id: 'kuzey', title: 'Kuzey Pati', emoji: '🐧', age: '5+', category: 'Kahramanlar', description: 'Kaşif penguen Pati' },
  { id: 'spaceship', title: 'Uzay Gemisi', emoji: '🛸', age: '5+', category: 'Uzay', description: 'Yıldızlara doğru uçan gemi' },
  { id: 'moon', title: 'Ay Yüzeyi', emoji: '🌙', age: '4+', category: 'Uzay', description: 'Kraterli ay manzarası' },
  { id: 'comet', title: 'Kuyruklu Yıldız', emoji: '☄️', age: '6+', category: 'Uzay', description: 'Parlak kuyruklu yıldız' },
  { id: 'wizard', title: 'Sihirbaz Şapka', emoji: '🧙', age: '5+', category: 'Masal', description: 'Sihirli şapka ve asa' },
  { id: 'princess', title: 'Prenses Taç', emoji: '👸', age: '4+', category: 'Masal', description: 'Taçlı prenses silueti' },
  { id: 'knight', title: 'Cesur Şövalye', emoji: '⚔️', age: '6+', category: 'Masal', description: 'Kalkanlı şövalye' },
  { id: 'mushroom', title: 'Orman Mantarı', emoji: '🍄', age: '3+', category: 'Doğa', description: 'Ormandaki kırmızı mantar' },
  { id: 'camping', title: 'Kamp Çadırı', emoji: '⛺', age: '5+', category: 'Doğa', description: 'Ormanda kamp çadırı' },
  { id: 'bee', title: 'Çalışkan Arı', emoji: '🐝', age: '3+', category: 'Doğa', description: 'Çiçekte bal toplayan arı' },
  { id: 'tractor', title: 'Kırmızı Traktör', emoji: '🚜', age: '4+', category: 'Taşıtlar', description: 'Tarladaki traktör' },
  { id: 'helicopter', title: 'Kurtarma Helikopteri', emoji: '🚁', age: '5+', category: 'Taşıtlar', description: 'Gökyüzünde uçan helikopter' },
  { id: 'bicycle', title: 'Renkli Bisiklet', emoji: '🚲', age: '4+', category: 'Taşıtlar', description: 'Zil sesli bisiklet' },
  { id: 'microscope', title: 'Mikroskop', emoji: '🔬', age: '7+', category: 'Bilim', description: 'Küçük dünyayı inceleyen mikroskop' },
  { id: 'volcano', title: 'Volkan', emoji: '🌋', age: '6+', category: 'Bilim', description: 'Patlayan volkan ve lav' },
  { id: 'spring', title: 'İlkbahar Bahçesi', emoji: '🌷', age: '3+', category: 'Mevsim', description: 'Laleler ve kelebekler' },
  { id: 'autumn', title: 'Sonbahar Yaprakları', emoji: '🍂', age: '3+', category: 'Mevsim', description: 'Dökülen renkli yapraklar' },
  { id: 'rainboots', title: 'Yağmur Botu', emoji: '🌧️', age: '3+', category: 'Mevsim', description: 'Su birikintisinde botlar' },
  { id: 'kite', title: 'Uçan Uçurtma', emoji: '🪁', age: '4+', category: 'Doğa', description: 'Rüzgârda dans eden uçurtma' },
  { id: 'picnic', title: 'Piknik Sepeti', emoji: '🧺', age: '4+', category: 'Doğa', description: 'Sepet, örtü ve elma' },
  { id: 'boyama-ek-1', title: 'Orman Ördeği', emoji: '🦆', age: '3+', category: 'Hayvanlar', description: 'Orman Ördeği boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-2', title: 'Kirpi Yavrusu', emoji: '🦔', age: '4+', category: 'Doğa', description: 'Kirpi Yavrusu boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-3', title: 'Flamingo', emoji: '🦩', age: '5+', category: 'Uzay', description: 'Flamingo boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-4', title: 'Sincap', emoji: '🐿️', age: '6+', category: 'Deniz', description: 'Sincap boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-5', title: 'Papağan', emoji: '🦜', age: '3+', category: 'Mevsim', description: 'Papağan boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-6', title: 'Çiçek Bahçesi', emoji: '🌺', age: '4+', category: 'Masal', description: 'Çiçek Bahçesi boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-7', title: 'Kaktüs', emoji: '🌵', age: '5+', category: 'Taşıtlar', description: 'Kaktüs boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-8', title: 'Palmiye', emoji: '🌴', age: '6+', category: 'Bilim', description: 'Palmiye boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-9', title: 'Satürn', emoji: '🪐', age: '3+', category: 'Kahramanlar', description: 'Satürn boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-10', title: 'UFO', emoji: '🛸', age: '4+', category: 'Hayvanlar', description: 'UFO boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-11', title: 'Galaksi', emoji: '🌌', age: '5+', category: 'Doğa', description: 'Galaksi boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-12', title: 'Ahtapot', emoji: '🐙', age: '6+', category: 'Uzay', description: 'Ahtapot boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-13', title: 'Köpekbalığı', emoji: '🦈', age: '3+', category: 'Deniz', description: 'Köpekbalığı boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-14', title: 'Deniz Kabuğu', emoji: '🐚', age: '4+', category: 'Mevsim', description: 'Deniz Kabuğu boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-15', title: 'Sonbahar Yaprak', emoji: '🍁', age: '5+', category: 'Masal', description: 'Sonbahar Yaprak boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-16', title: 'Kış Kar Tanesi', emoji: '🌨️', age: '6+', category: 'Taşıtlar', description: 'Kış Kar Tanesi boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-17', title: 'Ayçiçeği Tarlası', emoji: '🌻', age: '3+', category: 'Bilim', description: 'Ayçiçeği Tarlası boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-18', title: 'Mantar Ormanı', emoji: '🍄', age: '4+', category: 'Kahramanlar', description: 'Mantar Ormanı boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-19', title: 'Helikopter', emoji: '🚁', age: '5+', category: 'Hayvanlar', description: 'Helikopter boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-20', title: 'Scooter', emoji: '🚲', age: '6+', category: 'Doğa', description: 'Scooter boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-21', title: 'Kano', emoji: '🛶', age: '3+', category: 'Uzay', description: 'Kano boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-22', title: 'Yelkenli', emoji: '⛵', age: '4+', category: 'Deniz', description: 'Yelkenli boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-23', title: 'Sirk Çadırı', emoji: '🎪', age: '5+', category: 'Mevsim', description: 'Sirk Çadırı boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-24', title: 'Atlıkarınca', emoji: '🎠', age: '6+', category: 'Masal', description: 'Atlıkarınca boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-25', title: 'Teleskop', emoji: '🔭', age: '3+', category: 'Taşıtlar', description: 'Teleskop boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-26', title: 'Deney Tüpleri', emoji: '🧪', age: '4+', category: 'Bilim', description: 'Deney Tüpleri boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-27', title: 'Mini Kahraman', emoji: '🦸', age: '5+', category: 'Kahramanlar', description: 'Mini Kahraman boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-28', title: 'Peri', emoji: '🧚', age: '6+', category: 'Hayvanlar', description: 'Peri boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-29', title: 'Ejderha Yavrusu', emoji: '🐲', age: '3+', category: 'Doğa', description: 'Ejderha Yavrusu boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-30', title: 'Kartal', emoji: '🦅', age: '4+', category: 'Uzay', description: 'Kartal boyama sayfası — özgün çizim' },
  { id: 'boyama-ek-31', title: 'Fok Balığı', emoji: '🦭', age: '5+', category: 'Deniz', description: 'Fok Balığı boyama sayfası — özgün çizim' },
  { id: 'color-portal-1', title: 'Boyama 1', emoji: '🦊', age: '4+', category: 'Kahramanlar', description: 'Portal boyama sayfası 1 — telifsiz çizgi.' },
  { id: 'color-portal-2', title: 'Boyama 2', emoji: '🌙', age: '5+', category: 'Masal', description: 'Portal boyama sayfası 2 — telifsiz çizgi.' },
  { id: 'color-portal-3', title: 'Boyama 3', emoji: '🌊', age: '6+', category: 'Uzay', description: 'Portal boyama sayfası 3 — telifsiz çizgi.' },
  { id: 'color-portal-4', title: 'Boyama 4', emoji: '🚀', age: '3+', category: 'Deniz', description: 'Portal boyama sayfası 4 — telifsiz çizgi.' },
  { id: 'color-portal-5', title: 'Boyama 5', emoji: '🌿', age: '4+', category: 'Doğa', description: 'Portal boyama sayfası 5 — telifsiz çizgi.' },
  { id: 'color-portal-6', title: 'Boyama 6', emoji: '🎈', age: '5+', category: 'Taşıtlar', description: 'Portal boyama sayfası 6 — telifsiz çizgi.' },
  { id: 'color-portal-7', title: 'Boyama 7', emoji: '🐻', age: '6+', category: 'Bilim', description: 'Portal boyama sayfası 7 — telifsiz çizgi.' },
  { id: 'color-portal-8', title: 'Boyama 8', emoji: '🦋', age: '3+', category: 'Mevsim', description: 'Portal boyama sayfası 8 — telifsiz çizgi.' },
  { id: 'color-portal-9', title: 'Boyama 9', emoji: '🌈', age: '4+', category: 'Hayvanlar', description: 'Portal boyama sayfası 9 — telifsiz çizgi.' },
  { id: 'color-portal-10', title: 'Boyama 10', emoji: '🐢', age: '5+', category: 'Kahramanlar', description: 'Portal boyama sayfası 10 — telifsiz çizgi.' },
  { id: 'color-portal-11', title: 'Boyama 11', emoji: '🦄', age: '6+', category: 'Masal', description: 'Portal boyama sayfası 11 — telifsiz çizgi.' },
  { id: 'color-portal-12', title: 'Boyama 12', emoji: '🐠', age: '3+', category: 'Uzay', description: 'Portal boyama sayfası 12 — telifsiz çizgi.' },
  { id: 'color-portal-13', title: 'Boyama 13', emoji: '🌻', age: '4+', category: 'Deniz', description: 'Portal boyama sayfası 13 — telifsiz çizgi.' },
  { id: 'color-portal-14', title: 'Boyama 14', emoji: '🏰', age: '5+', category: 'Doğa', description: 'Portal boyama sayfası 14 — telifsiz çizgi.' },
  { id: 'color-portal-15', title: 'Boyama 15', emoji: '🧠', age: '6+', category: 'Taşıtlar', description: 'Portal boyama sayfası 15 — telifsiz çizgi.' },
  { id: 'color-portal-16', title: 'Boyama 16', emoji: '💛', age: '3+', category: 'Bilim', description: 'Portal boyama sayfası 16 — telifsiz çizgi.' },
  { id: 'color-portal-17', title: 'Boyama 17', emoji: '🎵', age: '4+', category: 'Mevsim', description: 'Portal boyama sayfası 17 — telifsiz çizgi.' },
  { id: 'color-portal-18', title: 'Boyama 18', emoji: '⭐', age: '5+', category: 'Hayvanlar', description: 'Portal boyama sayfası 18 — telifsiz çizgi.' },
  { id: 'color-portal-19', title: 'Boyama 19', emoji: '🦊', age: '6+', category: 'Kahramanlar', description: 'Portal boyama sayfası 19 — telifsiz çizgi.' },
  { id: 'color-portal-20', title: 'Boyama 20', emoji: '🌙', age: '3+', category: 'Masal', description: 'Portal boyama sayfası 20 — telifsiz çizgi.' },
  { id: 'color-portal-21', title: 'Boyama 21', emoji: '🌊', age: '4+', category: 'Uzay', description: 'Portal boyama sayfası 21 — telifsiz çizgi.' },
  { id: 'color-portal-22', title: 'Boyama 22', emoji: '🚀', age: '5+', category: 'Deniz', description: 'Portal boyama sayfası 22 — telifsiz çizgi.' },
  { id: 'color-portal-23', title: 'Boyama 23', emoji: '🌿', age: '6+', category: 'Doğa', description: 'Portal boyama sayfası 23 — telifsiz çizgi.' },
  { id: 'color-portal-24', title: 'Boyama 24', emoji: '🎈', age: '3+', category: 'Taşıtlar', description: 'Portal boyama sayfası 24 — telifsiz çizgi.' },
  { id: 'color-portal-25', title: 'Boyama 25', emoji: '🐻', age: '4+', category: 'Bilim', description: 'Portal boyama sayfası 25 — telifsiz çizgi.' },
  { id: 'color-portal-26', title: 'Boyama 26', emoji: '🦋', age: '5+', category: 'Mevsim', description: 'Portal boyama sayfası 26 — telifsiz çizgi.' },
  { id: 'color-portal-27', title: 'Boyama 27', emoji: '🌈', age: '6+', category: 'Hayvanlar', description: 'Portal boyama sayfası 27 — telifsiz çizgi.' },
  { id: 'color-portal-28', title: 'Boyama 28', emoji: '🐢', age: '3+', category: 'Kahramanlar', description: 'Portal boyama sayfası 28 — telifsiz çizgi.' },
  { id: 'color-portal-29', title: 'Boyama 29', emoji: '🦄', age: '4+', category: 'Masal', description: 'Portal boyama sayfası 29 — telifsiz çizgi.' },
  { id: 'color-portal-30', title: 'Boyama 30', emoji: '🐠', age: '5+', category: 'Uzay', description: 'Portal boyama sayfası 30 — telifsiz çizgi.' },
  { id: 'color-portal-31', title: 'Boyama 31', emoji: '🌻', age: '6+', category: 'Deniz', description: 'Portal boyama sayfası 31 — telifsiz çizgi.' },
  { id: 'color-portal-32', title: 'Boyama 32', emoji: '🏰', age: '3+', category: 'Doğa', description: 'Portal boyama sayfası 32 — telifsiz çizgi.' },
  { id: 'color-portal-33', title: 'Boyama 33', emoji: '🧠', age: '4+', category: 'Taşıtlar', description: 'Portal boyama sayfası 33 — telifsiz çizgi.' },
  { id: 'color-portal-34', title: 'Boyama 34', emoji: '💛', age: '5+', category: 'Bilim', description: 'Portal boyama sayfası 34 — telifsiz çizgi.' },
  { id: 'color-portal-35', title: 'Boyama 35', emoji: '🎵', age: '6+', category: 'Mevsim', description: 'Portal boyama sayfası 35 — telifsiz çizgi.' },
  { id: 'color-portal-36', title: 'Boyama 36', emoji: '⭐', age: '3+', category: 'Hayvanlar', description: 'Portal boyama sayfası 36 — telifsiz çizgi.' },
  { id: 'color-portal-37', title: 'Boyama 37', emoji: '🦊', age: '4+', category: 'Kahramanlar', description: 'Portal boyama sayfası 37 — telifsiz çizgi.' },
  { id: 'color-portal-38', title: 'Boyama 38', emoji: '🌙', age: '5+', category: 'Masal', description: 'Portal boyama sayfası 38 — telifsiz çizgi.' },
  { id: 'color-portal-39', title: 'Boyama 39', emoji: '🌊', age: '6+', category: 'Uzay', description: 'Portal boyama sayfası 39 — telifsiz çizgi.' },
  { id: 'color-portal-40', title: 'Boyama 40', emoji: '🚀', age: '3+', category: 'Deniz', description: 'Portal boyama sayfası 40 — telifsiz çizgi.' },
  { id: 'mega-boyama-1', title: 'Mega Boyama 1', emoji: '🦊', age: '4+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #1' },
  { id: 'mega-boyama-2', title: 'Mega Boyama 2', emoji: '🌙', age: '5+', category: 'Masal', description: 'Telifsiz portal boyaması #2' },
  { id: 'mega-boyama-3', title: 'Mega Boyama 3', emoji: '🌊', age: '6+', category: 'Uzay', description: 'Telifsiz portal boyaması #3' },
  { id: 'mega-boyama-4', title: 'Mega Boyama 4', emoji: '🚀', age: '7+', category: 'Deniz', description: 'Telifsiz portal boyaması #4' },
  { id: 'mega-boyama-5', title: 'Mega Boyama 5', emoji: '🌿', age: '3+', category: 'Doğa', description: 'Telifsiz portal boyaması #5' },
  { id: 'mega-boyama-6', title: 'Mega Boyama 6', emoji: '🎈', age: '4+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #6' },
  { id: 'mega-boyama-7', title: 'Mega Boyama 7', emoji: '🐻', age: '5+', category: 'Bilim', description: 'Telifsiz portal boyaması #7' },
  { id: 'mega-boyama-8', title: 'Mega Boyama 8', emoji: '🦋', age: '6+', category: 'Mevsim', description: 'Telifsiz portal boyaması #8' },
  { id: 'mega-boyama-9', title: 'Mega Boyama 9', emoji: '🌈', age: '7+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #9' },
  { id: 'mega-boyama-10', title: 'Mega Boyama 10', emoji: '🐢', age: '3+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #10' },
  { id: 'mega-boyama-11', title: 'Mega Boyama 11', emoji: '🦄', age: '4+', category: 'Masal', description: 'Telifsiz portal boyaması #11' },
  { id: 'mega-boyama-12', title: 'Mega Boyama 12', emoji: '🐠', age: '5+', category: 'Uzay', description: 'Telifsiz portal boyaması #12' },
  { id: 'mega-boyama-13', title: 'Mega Boyama 13', emoji: '🌻', age: '6+', category: 'Deniz', description: 'Telifsiz portal boyaması #13' },
  { id: 'mega-boyama-14', title: 'Mega Boyama 14', emoji: '🏰', age: '7+', category: 'Doğa', description: 'Telifsiz portal boyaması #14' },
  { id: 'mega-boyama-15', title: 'Mega Boyama 15', emoji: '🧠', age: '3+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #15' },
  { id: 'mega-boyama-16', title: 'Mega Boyama 16', emoji: '💛', age: '4+', category: 'Bilim', description: 'Telifsiz portal boyaması #16' },
  { id: 'mega-boyama-17', title: 'Mega Boyama 17', emoji: '🎵', age: '5+', category: 'Mevsim', description: 'Telifsiz portal boyaması #17' },
  { id: 'mega-boyama-18', title: 'Mega Boyama 18', emoji: '🎨', age: '6+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #18' },
  { id: 'mega-boyama-19', title: 'Mega Boyama 19', emoji: '🔬', age: '7+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #19' },
  { id: 'mega-boyama-20', title: 'Mega Boyama 20', emoji: '⭐', age: '3+', category: 'Masal', description: 'Telifsiz portal boyaması #20' },
  { id: 'mega-boyama-21', title: 'Mega Boyama 21', emoji: '🦊', age: '4+', category: 'Uzay', description: 'Telifsiz portal boyaması #21' },
  { id: 'mega-boyama-22', title: 'Mega Boyama 22', emoji: '🌙', age: '5+', category: 'Deniz', description: 'Telifsiz portal boyaması #22' },
  { id: 'mega-boyama-23', title: 'Mega Boyama 23', emoji: '🌊', age: '6+', category: 'Doğa', description: 'Telifsiz portal boyaması #23' },
  { id: 'mega-boyama-24', title: 'Mega Boyama 24', emoji: '🚀', age: '7+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #24' },
  { id: 'mega-boyama-25', title: 'Mega Boyama 25', emoji: '🌿', age: '3+', category: 'Bilim', description: 'Telifsiz portal boyaması #25' },
  { id: 'mega-boyama-26', title: 'Mega Boyama 26', emoji: '🎈', age: '4+', category: 'Mevsim', description: 'Telifsiz portal boyaması #26' },
  { id: 'mega-boyama-27', title: 'Mega Boyama 27', emoji: '🐻', age: '5+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #27' },
  { id: 'mega-boyama-28', title: 'Mega Boyama 28', emoji: '🦋', age: '6+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #28' },
  { id: 'mega-boyama-29', title: 'Mega Boyama 29', emoji: '🌈', age: '7+', category: 'Masal', description: 'Telifsiz portal boyaması #29' },
  { id: 'mega-boyama-30', title: 'Mega Boyama 30', emoji: '🐢', age: '3+', category: 'Uzay', description: 'Telifsiz portal boyaması #30' },
  { id: 'mega-boyama-31', title: 'Mega Boyama 31', emoji: '🦄', age: '4+', category: 'Deniz', description: 'Telifsiz portal boyaması #31' },
  { id: 'mega-boyama-32', title: 'Mega Boyama 32', emoji: '🐠', age: '5+', category: 'Doğa', description: 'Telifsiz portal boyaması #32' },
  { id: 'mega-boyama-33', title: 'Mega Boyama 33', emoji: '🌻', age: '6+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #33' },
  { id: 'mega-boyama-34', title: 'Mega Boyama 34', emoji: '🏰', age: '7+', category: 'Bilim', description: 'Telifsiz portal boyaması #34' },
  { id: 'mega-boyama-35', title: 'Mega Boyama 35', emoji: '🧠', age: '3+', category: 'Mevsim', description: 'Telifsiz portal boyaması #35' },
  { id: 'mega-boyama-36', title: 'Mega Boyama 36', emoji: '💛', age: '4+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #36' },
  { id: 'mega-boyama-37', title: 'Mega Boyama 37', emoji: '🎵', age: '5+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #37' },
  { id: 'mega-boyama-38', title: 'Mega Boyama 38', emoji: '🎨', age: '6+', category: 'Masal', description: 'Telifsiz portal boyaması #38' },
  { id: 'mega-boyama-39', title: 'Mega Boyama 39', emoji: '🔬', age: '7+', category: 'Uzay', description: 'Telifsiz portal boyaması #39' },
  { id: 'mega-boyama-40', title: 'Mega Boyama 40', emoji: '⭐', age: '3+', category: 'Deniz', description: 'Telifsiz portal boyaması #40' },
  { id: 'mega-boyama-41', title: 'Mega Boyama 41', emoji: '🦊', age: '4+', category: 'Doğa', description: 'Telifsiz portal boyaması #41' },
  { id: 'mega-boyama-42', title: 'Mega Boyama 42', emoji: '🌙', age: '5+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #42' },
  { id: 'mega-boyama-43', title: 'Mega Boyama 43', emoji: '🌊', age: '6+', category: 'Bilim', description: 'Telifsiz portal boyaması #43' },
  { id: 'mega-boyama-44', title: 'Mega Boyama 44', emoji: '🚀', age: '7+', category: 'Mevsim', description: 'Telifsiz portal boyaması #44' },
  { id: 'mega-boyama-45', title: 'Mega Boyama 45', emoji: '🌿', age: '3+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #45' },
  { id: 'mega-boyama-46', title: 'Mega Boyama 46', emoji: '🎈', age: '4+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #46' },
  { id: 'mega-boyama-47', title: 'Mega Boyama 47', emoji: '🐻', age: '5+', category: 'Masal', description: 'Telifsiz portal boyaması #47' },
  { id: 'mega-boyama-48', title: 'Mega Boyama 48', emoji: '🦋', age: '6+', category: 'Uzay', description: 'Telifsiz portal boyaması #48' },
  { id: 'mega-boyama-49', title: 'Mega Boyama 49', emoji: '🌈', age: '7+', category: 'Deniz', description: 'Telifsiz portal boyaması #49' },
  { id: 'mega-boyama-50', title: 'Mega Boyama 50', emoji: '🐢', age: '3+', category: 'Doğa', description: 'Telifsiz portal boyaması #50' },
  { id: 'mega-boyama-51', title: 'Mega Boyama 51', emoji: '🦄', age: '4+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #51' },
  { id: 'mega-boyama-52', title: 'Mega Boyama 52', emoji: '🐠', age: '5+', category: 'Bilim', description: 'Telifsiz portal boyaması #52' },
  { id: 'mega-boyama-53', title: 'Mega Boyama 53', emoji: '🌻', age: '6+', category: 'Mevsim', description: 'Telifsiz portal boyaması #53' },
  { id: 'mega-boyama-54', title: 'Mega Boyama 54', emoji: '🏰', age: '7+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #54' },
  { id: 'mega-boyama-55', title: 'Mega Boyama 55', emoji: '🧠', age: '3+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #55' },
  { id: 'mega-boyama-56', title: 'Mega Boyama 56', emoji: '💛', age: '4+', category: 'Masal', description: 'Telifsiz portal boyaması #56' },
  { id: 'mega-boyama-57', title: 'Mega Boyama 57', emoji: '🎵', age: '5+', category: 'Uzay', description: 'Telifsiz portal boyaması #57' },
  { id: 'mega-boyama-58', title: 'Mega Boyama 58', emoji: '🎨', age: '6+', category: 'Deniz', description: 'Telifsiz portal boyaması #58' },
  { id: 'mega-boyama-59', title: 'Mega Boyama 59', emoji: '🔬', age: '7+', category: 'Doğa', description: 'Telifsiz portal boyaması #59' },
  { id: 'mega-boyama-60', title: 'Mega Boyama 60', emoji: '⭐', age: '3+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #60' },
  { id: 'mega-boyama-61', title: 'Mega Boyama 61', emoji: '🦊', age: '4+', category: 'Bilim', description: 'Telifsiz portal boyaması #61' },
  { id: 'mega-boyama-62', title: 'Mega Boyama 62', emoji: '🌙', age: '5+', category: 'Mevsim', description: 'Telifsiz portal boyaması #62' },
  { id: 'mega-boyama-63', title: 'Mega Boyama 63', emoji: '🌊', age: '6+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #63' },
  { id: 'mega-boyama-64', title: 'Mega Boyama 64', emoji: '🚀', age: '7+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #64' },
  { id: 'mega-boyama-65', title: 'Mega Boyama 65', emoji: '🌿', age: '3+', category: 'Masal', description: 'Telifsiz portal boyaması #65' },
  { id: 'mega-boyama-66', title: 'Mega Boyama 66', emoji: '🎈', age: '4+', category: 'Uzay', description: 'Telifsiz portal boyaması #66' },
  { id: 'mega-boyama-67', title: 'Mega Boyama 67', emoji: '🐻', age: '5+', category: 'Deniz', description: 'Telifsiz portal boyaması #67' },
  { id: 'mega-boyama-68', title: 'Mega Boyama 68', emoji: '🦋', age: '6+', category: 'Doğa', description: 'Telifsiz portal boyaması #68' },
  { id: 'mega-boyama-69', title: 'Mega Boyama 69', emoji: '🌈', age: '7+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #69' },
  { id: 'mega-boyama-70', title: 'Mega Boyama 70', emoji: '🐢', age: '3+', category: 'Bilim', description: 'Telifsiz portal boyaması #70' },
  { id: 'mega-boyama-71', title: 'Mega Boyama 71', emoji: '🦄', age: '4+', category: 'Mevsim', description: 'Telifsiz portal boyaması #71' },
  { id: 'mega-boyama-72', title: 'Mega Boyama 72', emoji: '🐠', age: '5+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #72' },
  { id: 'mega-boyama-73', title: 'Mega Boyama 73', emoji: '🌻', age: '6+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #73' },
  { id: 'mega-boyama-74', title: 'Mega Boyama 74', emoji: '🏰', age: '7+', category: 'Masal', description: 'Telifsiz portal boyaması #74' },
  { id: 'mega-boyama-75', title: 'Mega Boyama 75', emoji: '🧠', age: '3+', category: 'Uzay', description: 'Telifsiz portal boyaması #75' },
  { id: 'mega-boyama-76', title: 'Mega Boyama 76', emoji: '💛', age: '4+', category: 'Deniz', description: 'Telifsiz portal boyaması #76' },
  { id: 'mega-boyama-77', title: 'Mega Boyama 77', emoji: '🎵', age: '5+', category: 'Doğa', description: 'Telifsiz portal boyaması #77' },
  { id: 'mega-boyama-78', title: 'Mega Boyama 78', emoji: '🎨', age: '6+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #78' },
  { id: 'mega-boyama-79', title: 'Mega Boyama 79', emoji: '🔬', age: '7+', category: 'Bilim', description: 'Telifsiz portal boyaması #79' },
  { id: 'mega-boyama-80', title: 'Mega Boyama 80', emoji: '⭐', age: '3+', category: 'Mevsim', description: 'Telifsiz portal boyaması #80' },
  { id: 'mega-boyama-81', title: 'Mega Boyama 81', emoji: '🦊', age: '4+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #81' },
  { id: 'mega-boyama-82', title: 'Mega Boyama 82', emoji: '🌙', age: '5+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #82' },
  { id: 'mega-boyama-83', title: 'Mega Boyama 83', emoji: '🌊', age: '6+', category: 'Masal', description: 'Telifsiz portal boyaması #83' },
  { id: 'mega-boyama-84', title: 'Mega Boyama 84', emoji: '🚀', age: '7+', category: 'Uzay', description: 'Telifsiz portal boyaması #84' },
  { id: 'mega-boyama-85', title: 'Mega Boyama 85', emoji: '🌿', age: '3+', category: 'Deniz', description: 'Telifsiz portal boyaması #85' },
  { id: 'mega-boyama-86', title: 'Mega Boyama 86', emoji: '🎈', age: '4+', category: 'Doğa', description: 'Telifsiz portal boyaması #86' },
  { id: 'mega-boyama-87', title: 'Mega Boyama 87', emoji: '🐻', age: '5+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #87' },
  { id: 'mega-boyama-88', title: 'Mega Boyama 88', emoji: '🦋', age: '6+', category: 'Bilim', description: 'Telifsiz portal boyaması #88' },
  { id: 'mega-boyama-89', title: 'Mega Boyama 89', emoji: '🌈', age: '7+', category: 'Mevsim', description: 'Telifsiz portal boyaması #89' },
  { id: 'mega-boyama-90', title: 'Mega Boyama 90', emoji: '🐢', age: '3+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #90' },
  { id: 'mega-boyama-91', title: 'Mega Boyama 91', emoji: '🦄', age: '4+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #91' },
  { id: 'mega-boyama-92', title: 'Mega Boyama 92', emoji: '🐠', age: '5+', category: 'Masal', description: 'Telifsiz portal boyaması #92' },
  { id: 'mega-boyama-93', title: 'Mega Boyama 93', emoji: '🌻', age: '6+', category: 'Uzay', description: 'Telifsiz portal boyaması #93' },
  { id: 'mega-boyama-94', title: 'Mega Boyama 94', emoji: '🏰', age: '7+', category: 'Deniz', description: 'Telifsiz portal boyaması #94' },
  { id: 'mega-boyama-95', title: 'Mega Boyama 95', emoji: '🧠', age: '3+', category: 'Doğa', description: 'Telifsiz portal boyaması #95' },
  { id: 'mega-boyama-96', title: 'Mega Boyama 96', emoji: '💛', age: '4+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #96' },
  { id: 'mega-boyama-97', title: 'Mega Boyama 97', emoji: '🎵', age: '5+', category: 'Bilim', description: 'Telifsiz portal boyaması #97' },
  { id: 'mega-boyama-98', title: 'Mega Boyama 98', emoji: '🎨', age: '6+', category: 'Mevsim', description: 'Telifsiz portal boyaması #98' },
  { id: 'mega-boyama-99', title: 'Mega Boyama 99', emoji: '🔬', age: '7+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #99' },
  { id: 'mega-boyama-100', title: 'Mega Boyama 100', emoji: '⭐', age: '3+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #100' },
  { id: 'mega-boyama-101', title: 'Mega Boyama 101', emoji: '🦊', age: '4+', category: 'Masal', description: 'Telifsiz portal boyaması #101' },
  { id: 'mega-boyama-102', title: 'Mega Boyama 102', emoji: '🌙', age: '5+', category: 'Uzay', description: 'Telifsiz portal boyaması #102' },
  { id: 'mega-boyama-103', title: 'Mega Boyama 103', emoji: '🌊', age: '6+', category: 'Deniz', description: 'Telifsiz portal boyaması #103' },
  { id: 'mega-boyama-104', title: 'Mega Boyama 104', emoji: '🚀', age: '7+', category: 'Doğa', description: 'Telifsiz portal boyaması #104' },
  { id: 'mega-boyama-105', title: 'Mega Boyama 105', emoji: '🌿', age: '3+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #105' },
  { id: 'mega-boyama-106', title: 'Mega Boyama 106', emoji: '🎈', age: '4+', category: 'Bilim', description: 'Telifsiz portal boyaması #106' },
  { id: 'mega-boyama-107', title: 'Mega Boyama 107', emoji: '🐻', age: '5+', category: 'Mevsim', description: 'Telifsiz portal boyaması #107' },
  { id: 'mega-boyama-108', title: 'Mega Boyama 108', emoji: '🦋', age: '6+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #108' },
  { id: 'mega-boyama-109', title: 'Mega Boyama 109', emoji: '🌈', age: '7+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #109' },
  { id: 'mega-boyama-110', title: 'Mega Boyama 110', emoji: '🐢', age: '3+', category: 'Masal', description: 'Telifsiz portal boyaması #110' },
  { id: 'mega-boyama-111', title: 'Mega Boyama 111', emoji: '🦄', age: '4+', category: 'Uzay', description: 'Telifsiz portal boyaması #111' },
  { id: 'mega-boyama-112', title: 'Mega Boyama 112', emoji: '🐠', age: '5+', category: 'Deniz', description: 'Telifsiz portal boyaması #112' },
  { id: 'mega-boyama-113', title: 'Mega Boyama 113', emoji: '🌻', age: '6+', category: 'Doğa', description: 'Telifsiz portal boyaması #113' },
  { id: 'mega-boyama-114', title: 'Mega Boyama 114', emoji: '🏰', age: '7+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #114' },
  { id: 'mega-boyama-115', title: 'Mega Boyama 115', emoji: '🧠', age: '3+', category: 'Bilim', description: 'Telifsiz portal boyaması #115' },
  { id: 'mega-boyama-116', title: 'Mega Boyama 116', emoji: '💛', age: '4+', category: 'Mevsim', description: 'Telifsiz portal boyaması #116' },
  { id: 'mega-boyama-117', title: 'Mega Boyama 117', emoji: '🎵', age: '5+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #117' },
  { id: 'mega-boyama-118', title: 'Mega Boyama 118', emoji: '🎨', age: '6+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #118' },
  { id: 'mega-boyama-119', title: 'Mega Boyama 119', emoji: '🔬', age: '7+', category: 'Masal', description: 'Telifsiz portal boyaması #119' },
  { id: 'mega-boyama-120', title: 'Mega Boyama 120', emoji: '⭐', age: '3+', category: 'Uzay', description: 'Telifsiz portal boyaması #120' },
  { id: 'mega-boyama-121', title: 'Mega Boyama 121', emoji: '🦊', age: '4+', category: 'Deniz', description: 'Telifsiz portal boyaması #121' },
  { id: 'mega-boyama-122', title: 'Mega Boyama 122', emoji: '🌙', age: '5+', category: 'Doğa', description: 'Telifsiz portal boyaması #122' },
  { id: 'mega-boyama-123', title: 'Mega Boyama 123', emoji: '🌊', age: '6+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #123' },
  { id: 'mega-boyama-124', title: 'Mega Boyama 124', emoji: '🚀', age: '7+', category: 'Bilim', description: 'Telifsiz portal boyaması #124' },
  { id: 'mega-boyama-125', title: 'Mega Boyama 125', emoji: '🌿', age: '3+', category: 'Mevsim', description: 'Telifsiz portal boyaması #125' },
  { id: 'mega-boyama-126', title: 'Mega Boyama 126', emoji: '🎈', age: '4+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #126' },
  { id: 'mega-boyama-127', title: 'Mega Boyama 127', emoji: '🐻', age: '5+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #127' },
  { id: 'mega-boyama-128', title: 'Mega Boyama 128', emoji: '🦋', age: '6+', category: 'Masal', description: 'Telifsiz portal boyaması #128' },
  { id: 'mega-boyama-129', title: 'Mega Boyama 129', emoji: '🌈', age: '7+', category: 'Uzay', description: 'Telifsiz portal boyaması #129' },
  { id: 'mega-boyama-130', title: 'Mega Boyama 130', emoji: '🐢', age: '3+', category: 'Deniz', description: 'Telifsiz portal boyaması #130' },
  { id: 'mega-boyama-131', title: 'Mega Boyama 131', emoji: '🦄', age: '4+', category: 'Doğa', description: 'Telifsiz portal boyaması #131' },
  { id: 'mega-boyama-132', title: 'Mega Boyama 132', emoji: '🐠', age: '5+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #132' },
  { id: 'mega-boyama-133', title: 'Mega Boyama 133', emoji: '🌻', age: '6+', category: 'Bilim', description: 'Telifsiz portal boyaması #133' },
  { id: 'mega-boyama-134', title: 'Mega Boyama 134', emoji: '🏰', age: '7+', category: 'Mevsim', description: 'Telifsiz portal boyaması #134' },
  { id: 'mega-boyama-135', title: 'Mega Boyama 135', emoji: '🧠', age: '3+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #135' },
  { id: 'mega-boyama-136', title: 'Mega Boyama 136', emoji: '💛', age: '4+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #136' },
  { id: 'mega-boyama-137', title: 'Mega Boyama 137', emoji: '🎵', age: '5+', category: 'Masal', description: 'Telifsiz portal boyaması #137' },
  { id: 'mega-boyama-138', title: 'Mega Boyama 138', emoji: '🎨', age: '6+', category: 'Uzay', description: 'Telifsiz portal boyaması #138' },
  { id: 'mega-boyama-139', title: 'Mega Boyama 139', emoji: '🔬', age: '7+', category: 'Deniz', description: 'Telifsiz portal boyaması #139' },
  { id: 'mega-boyama-140', title: 'Mega Boyama 140', emoji: '⭐', age: '3+', category: 'Doğa', description: 'Telifsiz portal boyaması #140' },
  { id: 'mega-boyama-141', title: 'Mega Boyama 141', emoji: '🦊', age: '4+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #141' },
  { id: 'mega-boyama-142', title: 'Mega Boyama 142', emoji: '🌙', age: '5+', category: 'Bilim', description: 'Telifsiz portal boyaması #142' },
  { id: 'mega-boyama-143', title: 'Mega Boyama 143', emoji: '🌊', age: '6+', category: 'Mevsim', description: 'Telifsiz portal boyaması #143' },
  { id: 'mega-boyama-144', title: 'Mega Boyama 144', emoji: '🚀', age: '7+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #144' },
  { id: 'mega-boyama-145', title: 'Mega Boyama 145', emoji: '🌿', age: '3+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #145' },
  { id: 'mega-boyama-146', title: 'Mega Boyama 146', emoji: '🎈', age: '4+', category: 'Masal', description: 'Telifsiz portal boyaması #146' },
  { id: 'mega-boyama-147', title: 'Mega Boyama 147', emoji: '🐻', age: '5+', category: 'Uzay', description: 'Telifsiz portal boyaması #147' },
  { id: 'mega-boyama-148', title: 'Mega Boyama 148', emoji: '🦋', age: '6+', category: 'Deniz', description: 'Telifsiz portal boyaması #148' },
  { id: 'mega-boyama-149', title: 'Mega Boyama 149', emoji: '🌈', age: '7+', category: 'Doğa', description: 'Telifsiz portal boyaması #149' },
  { id: 'mega-boyama-150', title: 'Mega Boyama 150', emoji: '🐢', age: '3+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #150' },
  { id: 'mega-boyama-151', title: 'Mega Boyama 151', emoji: '🦄', age: '4+', category: 'Bilim', description: 'Telifsiz portal boyaması #151' },
  { id: 'mega-boyama-152', title: 'Mega Boyama 152', emoji: '🐠', age: '5+', category: 'Mevsim', description: 'Telifsiz portal boyaması #152' },
  { id: 'mega-boyama-153', title: 'Mega Boyama 153', emoji: '🌻', age: '6+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #153' },
  { id: 'mega-boyama-154', title: 'Mega Boyama 154', emoji: '🏰', age: '7+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #154' },
  { id: 'mega-boyama-155', title: 'Mega Boyama 155', emoji: '🧠', age: '3+', category: 'Masal', description: 'Telifsiz portal boyaması #155' },
  { id: 'mega-boyama-156', title: 'Mega Boyama 156', emoji: '💛', age: '4+', category: 'Uzay', description: 'Telifsiz portal boyaması #156' },
  { id: 'mega-boyama-157', title: 'Mega Boyama 157', emoji: '🎵', age: '5+', category: 'Deniz', description: 'Telifsiz portal boyaması #157' },
  { id: 'mega-boyama-158', title: 'Mega Boyama 158', emoji: '🎨', age: '6+', category: 'Doğa', description: 'Telifsiz portal boyaması #158' },
  { id: 'mega-boyama-159', title: 'Mega Boyama 159', emoji: '🔬', age: '7+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #159' },
  { id: 'mega-boyama-160', title: 'Mega Boyama 160', emoji: '⭐', age: '3+', category: 'Bilim', description: 'Telifsiz portal boyaması #160' },
  { id: 'mega-boyama-161', title: 'Mega Boyama 161', emoji: '🦊', age: '4+', category: 'Mevsim', description: 'Telifsiz portal boyaması #161' },
  { id: 'mega-boyama-162', title: 'Mega Boyama 162', emoji: '🌙', age: '5+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #162' },
  { id: 'mega-boyama-163', title: 'Mega Boyama 163', emoji: '🌊', age: '6+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #163' },
  { id: 'mega-boyama-164', title: 'Mega Boyama 164', emoji: '🚀', age: '7+', category: 'Masal', description: 'Telifsiz portal boyaması #164' },
  { id: 'mega-boyama-165', title: 'Mega Boyama 165', emoji: '🌿', age: '3+', category: 'Uzay', description: 'Telifsiz portal boyaması #165' },
  { id: 'mega-boyama-166', title: 'Mega Boyama 166', emoji: '🎈', age: '4+', category: 'Deniz', description: 'Telifsiz portal boyaması #166' },
  { id: 'mega-boyama-167', title: 'Mega Boyama 167', emoji: '🐻', age: '5+', category: 'Doğa', description: 'Telifsiz portal boyaması #167' },
  { id: 'mega-boyama-168', title: 'Mega Boyama 168', emoji: '🦋', age: '6+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #168' },
  { id: 'mega-boyama-169', title: 'Mega Boyama 169', emoji: '🌈', age: '7+', category: 'Bilim', description: 'Telifsiz portal boyaması #169' },
  { id: 'mega-boyama-170', title: 'Mega Boyama 170', emoji: '🐢', age: '3+', category: 'Mevsim', description: 'Telifsiz portal boyaması #170' },
  { id: 'mega-boyama-171', title: 'Mega Boyama 171', emoji: '🦄', age: '4+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #171' },
  { id: 'mega-boyama-172', title: 'Mega Boyama 172', emoji: '🐠', age: '5+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #172' },
  { id: 'mega-boyama-173', title: 'Mega Boyama 173', emoji: '🌻', age: '6+', category: 'Masal', description: 'Telifsiz portal boyaması #173' },
  { id: 'mega-boyama-174', title: 'Mega Boyama 174', emoji: '🏰', age: '7+', category: 'Uzay', description: 'Telifsiz portal boyaması #174' },
  { id: 'mega-boyama-175', title: 'Mega Boyama 175', emoji: '🧠', age: '3+', category: 'Deniz', description: 'Telifsiz portal boyaması #175' },
  { id: 'mega-boyama-176', title: 'Mega Boyama 176', emoji: '💛', age: '4+', category: 'Doğa', description: 'Telifsiz portal boyaması #176' },
  { id: 'mega-boyama-177', title: 'Mega Boyama 177', emoji: '🎵', age: '5+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #177' },
  { id: 'mega-boyama-178', title: 'Mega Boyama 178', emoji: '🎨', age: '6+', category: 'Bilim', description: 'Telifsiz portal boyaması #178' },
  { id: 'mega-boyama-179', title: 'Mega Boyama 179', emoji: '🔬', age: '7+', category: 'Mevsim', description: 'Telifsiz portal boyaması #179' },
  { id: 'mega-boyama-180', title: 'Mega Boyama 180', emoji: '⭐', age: '3+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #180' },
  { id: 'mega-boyama-181', title: 'Mega Boyama 181', emoji: '🦊', age: '4+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #181' },
  { id: 'mega-boyama-182', title: 'Mega Boyama 182', emoji: '🌙', age: '5+', category: 'Masal', description: 'Telifsiz portal boyaması #182' },
  { id: 'mega-boyama-183', title: 'Mega Boyama 183', emoji: '🌊', age: '6+', category: 'Uzay', description: 'Telifsiz portal boyaması #183' },
  { id: 'mega-boyama-184', title: 'Mega Boyama 184', emoji: '🚀', age: '7+', category: 'Deniz', description: 'Telifsiz portal boyaması #184' },
  { id: 'mega-boyama-185', title: 'Mega Boyama 185', emoji: '🌿', age: '3+', category: 'Doğa', description: 'Telifsiz portal boyaması #185' },
  { id: 'mega-boyama-186', title: 'Mega Boyama 186', emoji: '🎈', age: '4+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #186' },
  { id: 'mega-boyama-187', title: 'Mega Boyama 187', emoji: '🐻', age: '5+', category: 'Bilim', description: 'Telifsiz portal boyaması #187' },
  { id: 'mega-boyama-188', title: 'Mega Boyama 188', emoji: '🦋', age: '6+', category: 'Mevsim', description: 'Telifsiz portal boyaması #188' },
  { id: 'mega-boyama-189', title: 'Mega Boyama 189', emoji: '🌈', age: '7+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #189' },
  { id: 'mega-boyama-190', title: 'Mega Boyama 190', emoji: '🐢', age: '3+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #190' },
  { id: 'mega-boyama-191', title: 'Mega Boyama 191', emoji: '🦄', age: '4+', category: 'Masal', description: 'Telifsiz portal boyaması #191' },
  { id: 'mega-boyama-192', title: 'Mega Boyama 192', emoji: '🐠', age: '5+', category: 'Uzay', description: 'Telifsiz portal boyaması #192' },
  { id: 'mega-boyama-193', title: 'Mega Boyama 193', emoji: '🌻', age: '6+', category: 'Deniz', description: 'Telifsiz portal boyaması #193' },
  { id: 'mega-boyama-194', title: 'Mega Boyama 194', emoji: '🏰', age: '7+', category: 'Doğa', description: 'Telifsiz portal boyaması #194' },
  { id: 'mega-boyama-195', title: 'Mega Boyama 195', emoji: '🧠', age: '3+', category: 'Taşıtlar', description: 'Telifsiz portal boyaması #195' },
  { id: 'mega-boyama-196', title: 'Mega Boyama 196', emoji: '💛', age: '4+', category: 'Bilim', description: 'Telifsiz portal boyaması #196' },
  { id: 'mega-boyama-197', title: 'Mega Boyama 197', emoji: '🎵', age: '5+', category: 'Mevsim', description: 'Telifsiz portal boyaması #197' },
  { id: 'mega-boyama-198', title: 'Mega Boyama 198', emoji: '🎨', age: '6+', category: 'Hayvanlar', description: 'Telifsiz portal boyaması #198' },
  { id: 'mega-boyama-199', title: 'Mega Boyama 199', emoji: '🔬', age: '7+', category: 'Kahramanlar', description: 'Telifsiz portal boyaması #199' },
  { id: 'mega-boyama-200', title: 'Mega Boyama 200', emoji: '⭐', age: '3+', category: 'Masal', description: 'Telifsiz portal boyaması #200' }
]

const S = `fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"`
const S2 = `fill="none" stroke="#1a1a1a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"`
const ambientFor = (label: string) => {
  const text = label.toLocaleLowerCase('tr-TR')
  if (/uzay|gezegen|astronot|roket|yıldız|ay yüzeyi|galaksi|satürn|ufo|kuyruk/.test(text)) {
    return `<g aria-label="Uzay ayrıntıları">
      <path d="M45 105 l6 14 15 1-11 9 4 15-14-8-14 8 4-15-11-9 15-1z M332 205 l5 12 13 1-10 8 3 13-11-7-11 7 3-13-10-8 13-1z" ${S2}/>
      <circle cx="83" cy="175" r="4" fill="#1a1a1a"/><circle cx="320" cy="90" r="4" fill="#1a1a1a"/><circle cx="65" cy="260" r="3" fill="#1a1a1a"/><circle cx="350" cy="285" r="3" fill="#1a1a1a"/>
      <circle cx="330" cy="65" r="21" ${S2}/><ellipse cx="330" cy="65" rx="34" ry="9" ${S2}/>
      <path d="M36 315 Q74 290 112 315 M288 330 Q325 304 364 330" ${S2}/>
    </g>`
  }
  if (/deniz|balık|balina|ahtapot|yengeç|merc|denizaltı|okyanus|sualtı/.test(text)) {
    return `<g aria-label="Deniz ayrıntıları">
      <circle cx="54" cy="105" r="12" ${S2}/><circle cx="77" cy="77" r="8" ${S2}/><circle cx="103" cy="55" r="5" ${S2}/><circle cx="340" cy="125" r="10" ${S2}/>
      <path d="M45 340 Q58 290 72 340 M72 340 Q88 280 104 340 M315 350 Q330 286 345 350" ${S2}/>
      <path d="M30 365 Q100 340 170 362 Q240 384 370 355" ${S2}/>
      <path d="M130 340 q12-25 24 0 M148 340 q12-34 24 0 M250 340 q12-28 24 0" ${S2}/>
    </g>`
  }
  if (/bilim|mikroskop|volkan|deney|teleskop|laboratuvar/.test(text)) {
    return `<g aria-label="Bilim ayrıntıları">
      <path d="M46 100 h36 M64 82 v36 M315 115 h40 M335 95 v40" ${S2}/>
      <circle cx="62" cy="265" r="18" ${S2}/><circle cx="335" cy="270" r="14" ${S2}/>
      <path d="M98 75 q10-16 20 0 q10 16 20 0 M275 90 q10-16 20 0 q10 16 20 0" ${S2}/>
      <path d="M42 350 Q95 315 148 350 M254 350 Q310 315 365 350" ${S2}/>
    </g>`
  }
  if (/taşıt|araba|tren|balon|bisiklet|helikopter|traktör|kano|yelken|scooter/.test(text)) {
    return `<g aria-label="Yol ve gökyüzü ayrıntıları">
      <path d="M42 92 Q75 58 108 92 M292 88 Q326 53 360 88" ${S2}/>
      <path d="M42 330 Q105 292 168 330 M235 330 Q300 292 365 330" ${S2}/>
      <path d="M55 360 h42 M303 360 h42" ${S2}/><circle cx="68" cy="150" r="7" ${S2}/><circle cx="338" cy="170" r="6" ${S2}/>
      <path d="M75 285 l15-20 15 20 M300 285 l15-20 15 20" ${S2}/>
    </g>`
  }
  if (/mevsim|kış|kar|yağmur|sonbahar|ilkbahar|çiçek|ayçiçeği|dondurma/.test(text)) {
    return `<g aria-label="Mevsim ayrıntıları">
      <circle cx="330" cy="70" r="25" ${S2}/><path d="M330 34 v-12 M330 106 v12 M294 70 h-12 M366 70 h12" ${S2}/>
      <path d="M42 315 Q82 282 122 315 M278 315 Q322 282 365 315" ${S2}/>
      <path d="M55 150 q12-26 24 0 q12 26 24 0 M310 165 q12-26 24 0 q12 26 24 0" ${S2}/>
      <circle cx="76" cy="250" r="9" ${S2}/><circle cx="326" cy="245" r="7" ${S2}/>
    </g>`
  }
  return `<g aria-label="Doğa ve masal ayrıntıları">
    <path d="M38 105 Q58 80 78 105 Q98 80 118 105" ${S2}/><path d="M278 120 Q298 94 318 120 Q338 94 358 120" ${S2}/>
    <circle cx="335" cy="62" r="24" ${S2}/><path d="M335 28 v-10 M335 96 v10 M301 62 h-10 M369 62 h10" ${S2}/>
    <path d="M38 342 Q86 305 134 342 M266 342 Q315 305 364 342" ${S2}/>
    <path d="M62 342 q12-30 24 0 M82 342 q12-40 24 0 M310 342 q12-34 24 0" ${S2}/>
    <circle cx="58" cy="205" r="8" ${S2}/><circle cx="350" cy="225" r="7" ${S2}/>
  </g>`
}
const vb = (inner: string, footer = 'Kitap Cenneti', ambientLabel = footer) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 420" width="400" height="420" role="img" aria-label="${footer}"><title>${footer}</title><rect x="15" y="15" width="370" height="365" rx="24" ${S2}/><path d="M34 365 Q200 347 366 365" ${S2}/><path d="M39 50 l5 10 11 1-8 7 3 11-11-6-10 6 3-11-8-7 11-1z M350 50 l5 10 11 1-8 7 3 11-11-6-10 6 3-11-8-7 11-1z" ${S2}/>${ambientFor(ambientLabel)}${inner}<text x="200" y="408" text-anchor="middle" font-family="Nunito,Arial,sans-serif" font-size="14" fill="#777">${footer}</text></svg>`

const hashId = (id: string) => Array.from(id).reduce((sum, char) => (sum * 31 + char.charCodeAt(0)) >>> 0, 7)

const genericScene = (id: string, page?: ColoringPage) => {
  const category = page?.category || 'Doğa'
  const variant = hashId(id) % 3
  const footer = page?.title || 'Kitap Cenneti'

  if (category === 'Hayvanlar') {
    const animal = variant === 0
      ? `<circle cx="200" cy="158" r="52" ${S}/><path d="M163 120 L145 72 L180 101 M237 120 L255 72 L220 101" ${S}/><ellipse cx="200" cy="260" rx="78" ry="72" ${S}/><ellipse cx="170" cy="150" rx="7" ry="10" ${S2}/><ellipse cx="230" cy="150" rx="7" ry="10" ${S2}/><path d="M190 178 Q200 188 210 178 M200 188 L200 202" ${S2}/><path d="M145 250 Q130 300 150 332 M255 250 Q270 300 250 332" ${S2}/>`
      : variant === 1
        ? `<ellipse cx="200" cy="220" rx="100" ry="72" ${S}/><circle cx="120" cy="195" r="38" ${S}/><circle cx="280" cy="195" r="38" ${S}/><circle cx="108" cy="190" r="6" fill="#1a1a1a"/><circle cx="292" cy="190" r="6" fill="#1a1a1a"/><path d="M100 222 Q120 240 140 222 M260 222 Q280 240 300 222" ${S2}/><path d="M138 250 Q120 300 145 325 M262 250 Q280 300 255 325" ${S2}/><path d="M150 180 Q200 135 250 180" ${S2}/>`
        : `<ellipse cx="200" cy="230" rx="72" ry="94" ${S}/><path d="M145 190 L120 130 L160 150 M255 190 L280 130 L240 150" ${S}/><circle cx="180" cy="205" r="7" fill="#1a1a1a"/><circle cx="220" cy="205" r="7" fill="#1a1a1a"/><path d="M190 228 Q200 240 210 228" ${S2}/><path d="M168 280 Q200 300 232 280" ${S2}/><path d="M135 120 Q105 92 80 115 M265 120 Q295 92 320 115" ${S2}/>`
    return vb(`${animal}
      <path d="M35 325 Q80 290 125 325 M275 325 Q320 290 365 325" ${S2}/>
      <path d="M62 325 l18-25 18 25 M310 325 l18-25 18 25" ${S2}/>
      <circle cx="55" cy="95" r="10" ${S2}/><circle cx="345" cy="125" r="8" ${S2}/>
      <path d="M48 280 q18-22 36 0 M316 280 q18-22 36 0" ${S2}/>
    `, footer, `${category} ${footer}`)
  }

  if (category === 'Kahramanlar') {
    return vb(`
      <path d="M200 72 L250 92 L246 190 Q240 260 200 300 Q160 260 154 190 L150 92 Z" ${S}/>
      <path d="M200 115 l12 27 30 3-23 19 7 30-26-16-26 16 7-30-23-19 30-3z" ${S2}/>
      <path d="M154 118 L105 160 L130 185 L160 165 M246 118 L295 160 L270 185 L240 165" ${S}/>
      <path d="M175 300 L160 350 M225 300 L240 350" ${S}/>
      <circle cx="55" cy="90" r="8" ${S2}/><circle cx="345" cy="80" r="10" ${S2}/>
      <path d="M42 300 Q80 270 115 300 M285 300 Q320 270 358 300" ${S2}/>
      <path d="M70 330 L100 270 L130 330 M270 330 L300 270 L330 330" ${S2}/>
    `, footer, `${category} ${footer}`)
  }

  if (category === 'Masal') {
    return vb(`
      <path d="M85 300 L85 180 L140 180 L140 135 L200 78 L260 135 L260 180 L315 180 L315 300 Z" ${S}/>
      <path d="M60 180 Q90 130 120 180 M280 180 Q310 130 340 180" ${S2}/>
      <path d="M165 300 L165 230 Q200 195 235 230 L235 300" ${S}/>
      <rect x="105" y="215" width="34" height="42" ${S2}/><rect x="261" y="215" width="34" height="42" ${S2}/>
      <path d="M200 78 L200 45 M187 50 L200 30 L213 50" ${S2}/>
      <path d="M34 340 Q76 306 116 340 M284 340 Q324 306 366 340" ${S2}/>
      <circle cx="55" cy="90" r="12" ${S2}/><circle cx="345" cy="105" r="9" ${S2}/>
      <path d="M45 275 q16-30 32 0 M323 275 q16-30 32 0" ${S2}/>
    `, footer, `${category} ${footer}`)
  }

  if (category === 'Uzay') {
    return vb(`
      <path d="M200 55 Q248 120 230 255 L200 320 L170 255 Q152 120 200 55 Z" ${S}/>
      <circle cx="200" cy="150" r="25" ${S}/><circle cx="200" cy="150" r="10" ${S2}/>
      <path d="M170 245 L138 310 L170 290 M230 245 L262 310 L230 290 M182 255 L200 350 L218 255" ${S}/>
      <circle cx="70" cy="95" r="26" ${S}/><path d="M45 95 Q70 80 95 95" ${S2}/>
      <ellipse cx="70" cy="95" rx="42" ry="12" ${S2}/>
      <path d="M320 55 l6 14 16 1-12 10 4 15-14-8-14 8 4-15-12-10 16-1z M305 280 l5 11 12 1-9 8 3 12-11-6-11 6 3-12-9-8 12-1z" ${S2}/>
      <circle cx="95" cy="280" r="5" fill="#1a1a1a"/><circle cx="335" cy="180" r="5" fill="#1a1a1a"/>
    `, footer, `${category} ${footer}`)
  }

  if (category === 'Deniz') {
    return vb(`
      <path d="M75 225 Q155 140 255 195 Q300 220 330 260 Q245 300 140 285 Q95 275 75 225 Z" ${S}/>
      <path d="M255 195 L325 150 L315 215 L355 245 L300 255" ${S}/>
      <circle cx="145" cy="220" r="13" ${S}/><circle cx="145" cy="220" r="4" fill="#1a1a1a"/><path d="M170 250 Q205 270 240 248" ${S2}/>
      <path d="M62 320 Q82 260 98 320 M98 320 Q120 255 138 320 M290 335 Q310 275 328 335" ${S2}/>
      <circle cx="65" cy="90" r="13" ${S2}/><circle cx="88" cy="58" r="8" ${S2}/><circle cx="320" cy="110" r="10" ${S2}/>
      <path d="M35 350 Q105 330 175 350 Q245 370 365 345" ${S2}/>
    `, footer, `${category} ${footer}`)
  }

  if (category === 'Taşıtlar') {
    return vb(`
      <path d="M55 255 L95 175 L150 155 L255 155 L315 190 L345 255 Z" ${S}/>
      <path d="M55 255 L345 255 L330 295 L70 295 Z" ${S}/>
      <circle cx="120" cy="295" r="28" ${S}/><circle cx="280" cy="295" r="28" ${S}/><circle cx="120" cy="295" r="10" ${S2}/><circle cx="280" cy="295" r="10" ${S2}/>
      <path d="M150 175 L200 175 L200 225 L135 225 Z M210 175 L260 175 L285 225 L210 225 Z" ${S2}/>
      <path d="M78 125 Q118 90 158 125 M260 120 Q300 85 340 120" ${S2}/>
      <path d="M35 340 L365 340 M75 325 l18 15 M310 325 l18 15" ${S2}/>
      <circle cx="200" cy="245" r="9" ${S2}/>
    `, footer, `${category} ${footer}`)
  }

  if (category === 'Bilim') {
    return vb(`
      <path d="M160 95 L160 165 L105 275 Q95 300 125 310 L275 310 Q305 300 295 275 L240 165 L240 95 Z" ${S}/>
      <path d="M145 215 Q200 190 255 215 M130 255 Q200 230 270 255" ${S2}/>
      <circle cx="172" cy="235" r="8" ${S2}/><circle cx="215" cy="260" r="12" ${S2}/><circle cx="245" cy="220" r="6" ${S2}/>
      <path d="M200 95 L200 55 M180 55 L220 55" ${S}/><circle cx="200" cy="40" r="12" ${S2}/>
      <path d="M55 135 l30 0 M70 120 l0 30 M315 155 l30 0 M330 140 l0 30" ${S2}/>
      <circle cx="75" cy="280" r="20" ${S2}/><circle cx="330" cy="285" r="16" ${S2}/>
    `, footer, `${category} ${footer}`)
  }

  if (category === 'Mevsim') {
    return vb(`
      <circle cx="310" cy="85" r="38" ${S}/><path d="M282 85 Q310 65 338 85" ${S2}/>
      <path d="M200 335 L200 170 M200 220 Q150 170 105 185 M200 245 Q250 190 300 210" ${S}/>
      <path d="M200 180 Q165 120 130 150 Q160 180 200 180 M200 180 Q235 120 270 150 Q240 180 200 180" ${S2}/>
      <path d="M45 330 Q90 300 135 330 M265 330 Q315 300 360 330" ${S2}/>
      <path d="M75 90 q18-20 36 0 M110 65 q18-20 36 0" ${S2}/><circle cx="60" cy="230" r="10" ${S2}/>
    `, footer, `${category} ${footer}`)
  }

  return vb(`
    <circle cx="200" cy="175" r="62" ${S}/><path d="M150 130 L132 80 L170 110 M250 130 L268 80 L230 110" ${S}/>
    <ellipse cx="200" cy="275" rx="85" ry="62" ${S}/><circle cx="180" cy="170" r="6" fill="#1a1a1a"/><circle cx="220" cy="170" r="6" fill="#1a1a1a"/>
    <path d="M182 195 Q200 210 218 195" ${S2}/><path d="M145 275 Q120 315 145 345 M255 275 Q280 315 255 345" ${S2}/>
    <path d="M35 330 Q80 295 125 330 M275 330 Q320 295 365 330" ${S2}/><circle cx="65" cy="90" r="10" ${S2}/><circle cx="340" cy="120" r="8" ${S2}/>
  `, footer, `${category} ${footer}`)
}

export function getColoringSvg(id: string): string {
  const map: Record<string, string> = {
    unicorn: vb(`
      <ellipse cx="190" cy="270" rx="95" ry="72" ${S}/>
      <circle cx="265" cy="155" r="58" ${S}/>
      <path d="M235 115 L255 45 L278 115" ${S}/>
      <path d="M300 140 Q350 95 365 155" ${S}/>
      <path d="M300 155 Q345 130 360 175" ${S2}/>
      <circle cx="280" cy="148" r="5" fill="#1a1a1a"/>
      <path d="M255 175 Q275 190 295 175" ${S2}/>
      <ellipse cx="120" cy="245" rx="28" ry="18" ${S}/>
      <path d="M115 300 L95 360" ${S}/><path d="M165 330 L155 375" ${S}/>
      <path d="M230 330 L245 375" ${S}/><path d="M275 295 L300 355" ${S}/>
      <path d="M145 210 Q170 170 200 210" ${S2}/>
      <circle cx="70" cy="80" r="10" ${S2}/><circle cx="330" cy="70" r="7" ${S2}/>
    `, 'Mutlu Unicorn'),
    cat: vb(`
      <ellipse cx="200" cy="240" rx="85" ry="70" ${S}/>
      <circle cx="200" cy="145" r="55" ${S}/>
      <path d="M155 105 L145 55 L180 95" ${S}/>
      <path d="M245 105 L255 55 L220 95" ${S}/>
      <circle cx="180" cy="140" r="5" fill="#1a1a1a"/>
      <circle cx="220" cy="140" r="5" fill="#1a1a1a"/>
      <path d="M190 160 L200 170 L210 160" ${S2}/>
      <path d="M200 170 L200 185" ${S2}/>
      <path d="M200 175 Q170 185 155 170" ${S2}/>
      <path d="M200 175 Q230 185 245 170" ${S2}/>
      <path d="M275 230 Q340 180 350 250" ${S}/>
      <ellipse cx="145" cy="300" rx="22" ry="14" ${S}/>
      <ellipse cx="255" cy="300" rx="22" ry="14" ${S}/>
      <circle cx="300" cy="300" r="28" ${S2}/>
    `, 'Oyuncu Kedi'),
    puppy: vb(`
      <ellipse cx="200" cy="250" rx="90" ry="70" ${S}/>
      <circle cx="200" cy="150" r="60" ${S}/>
      <ellipse cx="145" cy="165" rx="28" ry="40" ${S}/>
      <ellipse cx="255" cy="165" rx="28" ry="40" ${S}/>
      <circle cx="180" cy="145" r="5" fill="#1a1a1a"/>
      <circle cx="220" cy="145" r="5" fill="#1a1a1a"/>
      <ellipse cx="200" cy="175" rx="18" ry="12" ${S2}/>
      <path d="M185 195 Q200 210 215 195" ${S2}/>
      <path d="M280 230 Q330 200 340 260" ${S}/>
      <ellipse cx="150" cy="310" rx="24" ry="16" ${S}/>
      <ellipse cx="250" cy="310" rx="24" ry="16" ${S}/>
      <circle cx="320" cy="90" r="8" ${S2}/>
    `, 'Minik Köpek'),
    owl: vb(`
      <ellipse cx="200" cy="230" rx="80" ry="95" ${S}/>
      <circle cx="170" cy="180" r="32" ${S}/>
      <circle cx="230" cy="180" r="32" ${S}/>
      <circle cx="170" cy="180" r="10" fill="#1a1a1a"/>
      <circle cx="230" cy="180" r="10" fill="#1a1a1a"/>
      <path d="M190 210 L200 230 L210 210 Z" ${S}/>
      <path d="M140 130 L160 160" ${S}/><path d="M260 130 L240 160" ${S}/>
      <path d="M150 280 Q200 310 250 280" ${S2}/>
      <rect x="175" y="320" width="18" height="30" ${S}/><rect x="207" y="320" width="18" height="30" ${S}/>
      <path d="M80 200 Q120 180 140 210" ${S2}/><path d="M320 200 Q280 180 260 210" ${S2}/>
    `, 'Bilge Baykuş'),
    elephant: vb(`
      <ellipse cx="200" cy="230" rx="100" ry="75" ${S}/>
      <circle cx="270" cy="160" r="50" ${S}/>
      <path d="M255 185 Q240 260 250 320 Q260 350 275 330" ${S}/>
      <circle cx="285" cy="150" r="5" fill="#1a1a1a"/>
      <path d="M300 120 Q320 90 340 130" ${S}/>
      <ellipse cx="140" cy="280" rx="25" ry="35" ${S}/>
      <ellipse cx="200" cy="295" rx="25" ry="35" ${S}/>
      <ellipse cx="250" cy="280" rx="22" ry="30" ${S}/>
      <path d="M110 220 Q70 200 80 250" ${S}/>
      <circle cx="90" cy="90" r="14" ${S2}/>
    `, 'Fil Yavrusu'),
    turtle: vb(`
      <ellipse cx="200" cy="220" rx="115" ry="80" ${S}/>
      <ellipse cx="200" cy="220" rx="75" ry="50" ${S}/>
      <path d="M140 185 L200 145 L260 185" ${S2}/>
      <path d="M150 220 L250 220" ${S2}/><path d="M200 160 L200 270" ${S2}/>
      <circle cx="305" cy="175" r="38" ${S}/>
      <circle cx="320" cy="165" r="4" fill="#1a1a1a"/>
      <path d="M330 180 Q350 188 345 205" ${S2}/>
      <ellipse cx="105" cy="185" rx="26" ry="18" ${S}/>
      <ellipse cx="95" cy="250" rx="26" ry="18" ${S}/>
      <ellipse cx="295" cy="260" rx="26" ry="18" ${S}/>
    `, 'Tiko'),
    'star-hero': vb(`
      <circle cx="200" cy="130" r="42" ${S}/>
      <path d="M200 30 L218 90 L280 90 L230 125 L248 185 L200 150 L152 185 L170 125 L120 90 L182 90 Z" ${S}/>
      <path d="M155 175 L140 300 L180 270 L200 330 L220 270 L260 300 L245 175 Z" ${S}/>
      <circle cx="185" cy="125" r="4" fill="#1a1a1a"/>
      <circle cx="215" cy="125" r="4" fill="#1a1a1a"/>
      <path d="M185 145 Q200 158 215 145" ${S2}/>
      <circle cx="80" cy="80" r="8" ${S2}/><circle cx="330" cy="100" r="6" ${S2}/>
    `, 'Nova'),
    luna: vb(`
      <ellipse cx="200" cy="260" rx="55" ry="90" ${S}/>
      <circle cx="200" cy="140" r="40" ${S}/>
      <path d="M160 170 Q120 220 150 280" ${S}/>
      <path d="M240 170 Q280 220 250 280" ${S}/>
      <path d="M140 200 Q90 160 70 210 Q90 250 140 230" ${S}/>
      <path d="M260 200 Q310 160 330 210 Q310 250 260 230" ${S}/>
      <circle cx="185" cy="135" r="4" fill="#1a1a1a"/>
      <circle cx="215" cy="135" r="4" fill="#1a1a1a"/>
      <path d="M185 155 Q200 165 215 155" ${S2}/>
      <path d="M60 300 Q120 280 160 320" ${S2}/><path d="M240 320 Q300 280 350 310" ${S2}/>
    `, 'Luna Deniz'),
    rocket: vb(`
      <path d="M200 40 L245 175 L200 155 L155 175 Z" ${S}/>
      <rect x="170" y="155" width="60" height="110" rx="10" ${S}/>
      <circle cx="200" cy="200" r="16" ${S}/>
      <path d="M170 265 L145 330 L170 305 Z" ${S}/>
      <path d="M230 265 L255 330 L230 305 Z" ${S}/>
      <path d="M185 265 L200 355 L215 265" ${S}/>
      <circle cx="70" cy="80" r="4" fill="#1a1a1a"/><circle cx="320" cy="110" r="4" fill="#1a1a1a"/>
      <circle cx="90" cy="160" r="3" fill="#1a1a1a"/><circle cx="310" cy="200" r="3" fill="#1a1a1a"/>
      <circle cx="60" cy="250" r="3" fill="#1a1a1a"/>
    `, 'Uzay Roketi'),
    planet: vb(`
      <circle cx="200" cy="200" r="80" ${S}/>
      <ellipse cx="200" cy="200" rx="130" ry="35" ${S}/>
      <ellipse cx="200" cy="200" rx="130" ry="35" ${S2} transform="rotate(-20 200 200)"/>
      <circle cx="170" cy="170" r="12" ${S2}/><circle cx="230" cy="210" r="18" ${S2}/>
      <circle cx="80" cy="80" r="4" fill="#1a1a1a"/><circle cx="320" cy="90" r="4" fill="#1a1a1a"/>
      <circle cx="60" cy="300" r="3" fill="#1a1a1a"/><circle cx="340" cy="280" r="5" fill="#1a1a1a"/>
    `, 'Renkli Gezegen'),
    astronaut: vb(`
      <circle cx="200" cy="120" r="45" ${S}/>
      <circle cx="200" cy="120" r="30" ${S2}/>
      <rect x="155" y="165" width="90" height="110" rx="16" ${S}/>
      <rect x="120" y="185" width="35" height="16" ${S}/><rect x="245" y="185" width="35" height="16" ${S}/>
      <rect x="165" y="275" width="28" height="45" ${S}/><rect x="207" y="275" width="28" height="45" ${S}/>
      <circle cx="200" cy="210" r="14" ${S2}/>
      <circle cx="70" cy="70" r="4" fill="#1a1a1a"/><circle cx="330" cy="100" r="3" fill="#1a1a1a"/>
      <path d="M50 320 Q200 280 350 330" ${S2}/>
    `, 'Küçük Astronot'),
    castle: vb(`
      <rect x="80" y="170" width="240" height="150" ${S}/>
      <rect x="55" y="100" width="55" height="220" ${S}/>
      <rect x="290" y="100" width="55" height="220" ${S}/>
      <path d="M55 100 L70 60 L85 100 L100 60 L110 100" ${S}/>
      <path d="M290 100 L305 60 L320 100 L335 60 L345 100" ${S}/>
      <path d="M140 170 L200 90 L260 170" ${S}/>
      <rect x="175" y="210" width="50" height="110" ${S}/>
      <rect x="100" y="210" width="30" height="40" ${S}/><rect x="270" y="210" width="30" height="40" ${S}/>
      <circle cx="200" cy="140" r="18" ${S2}/>
    `, 'Sihirli Kale'),
    dragon: vb(`
      <ellipse cx="175" cy="230" rx="100" ry="60" ${S}/>
      <circle cx="285" cy="165" r="42" ${S}/>
      <path d="M310 150 Q350 120 365 160" ${S}/>
      <circle cx="300" cy="155" r="5" fill="#1a1a1a"/>
      <path d="M90 230 Q45 190 30 235 Q50 275 90 245" ${S}/>
      <path d="M130 180 L155 120 L175 180" ${S}/><path d="M180 175 L205 110 L225 175" ${S}/>
      <ellipse cx="210" cy="280" rx="18" ry="28" ${S}/>
      <path d="M300 185 Q350 210 340 255" ${S}/>
      <circle cx="350" cy="270" r="14" ${S2}/><circle cx="365" cy="285" r="9" ${S2}/>
    `, 'İyi Ejderha'),
    fairy: vb(`
      <circle cx="200" cy="140" r="35" ${S}/>
      <ellipse cx="200" cy="240" rx="40" ry="70" ${S}/>
      <path d="M160 180 Q100 140 90 200 Q110 240 160 220" ${S}/>
      <path d="M240 180 Q300 140 310 200 Q290 240 240 220" ${S}/>
      <path d="M160 180 Q110 100 150 90 Q180 120 170 170" ${S2}/>
      <path d="M240 180 Q290 100 250 90 Q220 120 230 170" ${S2}/>
      <circle cx="188" cy="135" r="3" fill="#1a1a1a"/><circle cx="212" cy="135" r="3" fill="#1a1a1a"/>
      <path d="M188 152 Q200 162 212 152" ${S2}/>
      <circle cx="80" cy="300" r="16" ${S2}/><circle cx="320" cy="280" r="12" ${S2}/>
    `, 'Çiçek Peri'),
    fish: vb(`
      <ellipse cx="185" cy="200" rx="105" ry="58" ${S}/>
      <path d="M290 200 L355 145 L340 200 L355 255 Z" ${S}/>
      <circle cx="125" cy="185" r="9" ${S}/><circle cx="123" cy="183" r="3" fill="#1a1a1a"/>
      <path d="M150 220 Q190 250 235 220" ${S2}/>
      <path d="M175 155 Q200 125 225 155" ${S2}/>
      <circle cx="70" cy="90" r="18" ${S2}/><circle cx="100" cy="310" r="12" ${S2}/>
      <path d="M300 80 Q320 105 300 125 Q280 105 300 80" ${S2}/>
    `, 'Mercan Balığı'),
    octopus: vb(`
      <circle cx="200" cy="160" r="70" ${S}/>
      <circle cx="175" cy="150" r="8" fill="#1a1a1a"/><circle cx="225" cy="150" r="8" fill="#1a1a1a"/>
      <path d="M175 180 Q200 200 225 180" ${S2}/>
      <path d="M150 210 Q120 280 90 340" ${S}/><path d="M170 220 Q155 300 140 350" ${S}/>
      <path d="M190 225 Q185 310 180 355" ${S}/><path d="M210 225 Q215 310 220 355" ${S}/>
      <path d="M230 220 Q245 300 260 350" ${S}/><path d="M250 210 Q280 280 310 340" ${S}/>
      <circle cx="95" cy="300" r="8" ${S2}/><circle cx="305" cy="300" r="8" ${S2}/>
    `, 'Gülen Ahtapot'),
    submarine: vb(`
      <ellipse cx="200" cy="220" rx="130" ry="60" ${S}/>
      <rect x="170" y="140" width="60" height="50" rx="8" ${S}/>
      <circle cx="150" cy="220" r="22" ${S}/><circle cx="210" cy="220" r="22" ${S}/>
      <circle cx="270" cy="220" r="22" ${S}/>
      <path d="M70 220 L40 200 L40 240 Z" ${S}/>
      <rect x="195" y="110" width="12" height="30" ${S}/>
      <circle cx="80" cy="100" r="10" ${S2}/><circle cx="320" cy="90" r="6" ${S2}/>
    `, 'Sarı Denizaltı'),
    treehouse: vb(`
      <rect x="185" y="230" width="30" height="110" ${S}/>
      <ellipse cx="200" cy="180" rx="125" ry="95" ${S}/>
      <rect x="135" y="145" width="130" height="85" ${S}/>
      <path d="M135 145 L200 90 L265 145" ${S}/>
      <rect x="180" y="175" width="40" height="45" ${S}/>
      <path d="M145 230 L180 195" ${S2}/>
      <circle cx="80" cy="70" r="20" ${S2}/>
    `, 'Ağaç Ev'),
    butterfly: vb(`
      <line x1="200" y1="110" x2="200" y2="290" ${S}/>
      <ellipse cx="135" cy="155" rx="58" ry="72" ${S}/>
      <ellipse cx="265" cy="155" rx="58" ry="72" ${S}/>
      <ellipse cx="145" cy="245" rx="42" ry="52" ${S}/>
      <ellipse cx="255" cy="245" rx="42" ry="52" ${S}/>
      <circle cx="200" cy="110" r="14" ${S}/>
      <path d="M190 100 Q175 75 160 90" ${S2}/><path d="M210 100 Q225 75 240 90" ${S2}/>
      <circle cx="120" cy="155" r="12" ${S2}/><circle cx="280" cy="155" r="12" ${S2}/>
      <circle cx="80" cy="320" r="16" ${S2}/>
    `, 'Kelebek Bahçesi'),
    rainbow: vb(`
      <path d="M40 290 Q200 40 360 290" ${S}/>
      <path d="M60 290 Q200 70 340 290" ${S}/>
      <path d="M80 290 Q200 100 320 290" ${S}/>
      <path d="M100 290 Q200 130 300 290" ${S}/>
      <path d="M120 290 Q200 160 280 290" ${S}/>
      <ellipse cx="65" cy="295" rx="42" ry="26" ${S}/>
      <ellipse cx="335" cy="295" rx="42" ry="26" ${S}/>
      <circle cx="200" cy="210" r="16" ${S2}/>
    `, 'Gökkuşağı'),
    flower: vb(`
      <ellipse cx="200" cy="280" rx="35" ry="18" ${S}/>
      <line x1="200" y1="280" x2="200" y2="160" ${S}/>
      <circle cx="200" cy="140" r="22" ${S}/>
      <ellipse cx="200" cy="95" rx="20" ry="28" ${S}/>
      <ellipse cx="245" cy="120" rx="28" ry="20" ${S}/>
      <ellipse cx="245" cy="165" rx="28" ry="20" ${S}/>
      <ellipse cx="200" cy="185" rx="20" ry="28" ${S}/>
      <ellipse cx="155" cy="165" rx="28" ry="20" ${S}/>
      <ellipse cx="155" cy="120" rx="28" ry="20" ${S}/>
      <path d="M200 220 Q160 240 150 280" ${S2}/><path d="M200 240 Q240 255 255 290" ${S2}/>
    `, 'Çiçek Buketi'),
    dino: vb(`
      <path d="M75 290 Q100 155 205 175 Q285 190 305 135 Q325 110 350 135" ${S}/>
      <ellipse cx="185" cy="265" rx="95" ry="55" ${S}/>
      <circle cx="340" cy="125" r="30" ${S}/>
      <circle cx="350" cy="118" r="4" fill="#1a1a1a"/>
      <path d="M115 305 L95 360" ${S}/><path d="M160 318 L150 365" ${S}/>
      <path d="M215 318 L230 365" ${S}/><path d="M260 305 L285 355" ${S}/>
      <path d="M140 200 L155 155" ${S}/><path d="M185 190 L200 145" ${S}/><path d="M225 195 L245 150" ${S}/>
    `, 'Sevimli Dinozor'),
    robot: vb(`
      <rect x="125" y="95" width="150" height="105" rx="14" ${S}/>
      <rect x="148" y="205" width="104" height="115" rx="10" ${S}/>
      <circle cx="170" cy="140" r="14" ${S}/><circle cx="230" cy="140" r="14" ${S}/>
      <rect x="170" y="170" width="60" height="14" rx="5" ${S}/>
      <line x1="200" y1="60" x2="200" y2="95" ${S}/><circle cx="200" cy="50" r="12" ${S}/>
      <rect x="85" y="220" width="45" height="18" ${S}/><rect x="270" y="220" width="45" height="18" ${S}/>
      <rect x="158" y="320" width="28" height="40" ${S}/><rect x="214" y="320" width="28" height="40" ${S}/>
    `, 'Dost Robot'),
    car: vb(`
      <path d="M60 240 L90 180 L160 160 L260 160 L320 190 L350 240 Z" ${S}/>
      <path d="M60 240 L350 240 L340 280 L70 280 Z" ${S}/>
      <circle cx="120" cy="280" r="28" ${S}/><circle cx="290" cy="280" r="28" ${S}/>
      <circle cx="120" cy="280" r="12" ${S2}/><circle cx="290" cy="280" r="12" ${S2}/>
      <rect x="150" y="175" width="50" height="40" ${S2}/><rect x="215" y="175" width="50" height="40" ${S2}/>
      <circle cx="200" cy="230" r="10" ${S2}/>
      <path d="M180 225 Q200 245 220 225" ${S2}/>
    `, 'Neşeli Araba'),
    train: vb(`
      <rect x="40" y="180" width="100" height="90" rx="8" ${S}/>
      <rect x="150" y="200" width="90" height="70" rx="6" ${S}/>
      <rect x="250" y="200" width="90" height="70" rx="6" ${S}/>
      <rect x="60" y="140" width="50" height="40" ${S}/>
      <circle cx="75" cy="280" r="22" ${S}/><circle cx="120" cy="285" r="16" ${S}/>
      <circle cx="195" cy="285" r="16" ${S}/><circle cx="295" cy="285" r="16" ${S}/>
      <circle cx="85" cy="160" r="10" ${S2}/>
      <path d="M140 220 L150 220" ${S}/><path d="M240 220 L250 220" ${S}/>
      <circle cx="330" cy="100" r="8" ${S2}/>
    `, 'Oyuncak Tren'),
    hotair: vb(`
      <ellipse cx="200" cy="150" rx="80" ry="100" ${S}/>
      <path d="M150 100 Q200 80 250 100" ${S2}/>
      <path d="M140 150 Q200 130 260 150" ${S2}/>
      <path d="M145 200 Q200 180 255 200" ${S2}/>
      <path d="M160 230 L175 280" ${S}/><path d="M240 230 L225 280" ${S}/>
      <rect x="165" y="280" width="70" height="45" rx="6" ${S}/>
      <circle cx="80" cy="80" r="6" ${S2}/><circle cx="320" cy="120" r="5" ${S2}/>
    `, 'Uçan Balon'),
    snowman: vb(`
      <circle cx="200" cy="280" r="70" ${S}/>
      <circle cx="200" cy="175" r="50" ${S}/>
      <circle cx="200" cy="95" r="35" ${S}/>
      <circle cx="188" cy="90" r="4" fill="#1a1a1a"/><circle cx="212" cy="90" r="4" fill="#1a1a1a"/>
      <path d="M200 100 L230 110" ${S2}/>
      <circle cx="200" cy="160" r="5" fill="#1a1a1a"/><circle cx="200" cy="180" r="5" fill="#1a1a1a"/>
      <path d="M150 175 L110 150" ${S}/><path d="M250 175 L290 150" ${S}/>
      <path d="M165 120 Q200 140 235 120" ${S2}/>
    `, 'Kardan Adam'),
    sunflower: vb(`
      <circle cx="200" cy="150" r="40" ${S}/>
      <ellipse cx="200" cy="95" rx="22" ry="30" ${S}/>
      <ellipse cx="250" cy="120" rx="30" ry="22" ${S}/>
      <ellipse cx="250" cy="180" rx="30" ry="22" ${S}/>
      <ellipse cx="200" cy="205" rx="22" ry="30" ${S}/>
      <ellipse cx="150" cy="180" rx="30" ry="22" ${S}/>
      <ellipse cx="150" cy="120" rx="30" ry="22" ${S}/>
      <line x1="200" y1="190" x2="200" y2="340" ${S}/>
      <path d="M200 260 Q160 280 150 330" ${S2}/>
      <circle cx="280" cy="100" r="12" ${S2}/>
    `, 'Ayçiçeği'),
    icecream: vb(`
      <path d="M140 200 L200 360 L260 200 Z" ${S}/>
      <path d="M155 240 L245 240" ${S2}/><path d="M170 280 L230 280" ${S2}/>
      <circle cx="200" cy="160" r="45" ${S}/>
      <circle cx="165" cy="120" r="35" ${S}/>
      <circle cx="235" cy="120" r="35" ${S}/>
      <circle cx="200" cy="85" r="30" ${S}/>
      <path d="M200 55 L200 35" ${S2}/><circle cx="200" cy="30" r="6" ${S2}/>
    `, 'Dondurma'),
    birthday: vb(`
      <ellipse cx="200" cy="280" rx="110" ry="35" ${S}/>
      <path d="M90 280 L100 200 L300 200 L310 280" ${S}/>
      <path d="M110 200 L120 150 L280 150 L290 200" ${S}/>
      <rect x="150" y="110" width="12" height="40" ${S}/><rect x="194" y="100" width="12" height="50" ${S}/>
      <rect x="238" y="110" width="12" height="40" ${S}/>
      <circle cx="156" cy="100" r="8" ${S2}/><circle cx="200" cy="90" r="8" ${S2}/><circle cx="244" cy="100" r="8" ${S2}/>
      <rect x="60" y="300" width="50" height="40" rx="6" ${S}/><rect x="290" y="300" width="50" height="40" rx="6" ${S}/>
    `, 'Doğum Günü'),
    lion: vb(`
      <circle cx="200" cy="160" r="65" ${S}/>
      <path d="M130 130 Q100 80 140 70 Q170 60 200 90 Q230 60 260 70 Q300 80 270 130" ${S}/>
      <circle cx="180" cy="150" r="5" fill="#1a1a1a"/><circle cx="220" cy="150" r="5" fill="#1a1a1a"/>
      <path d="M185 175 Q200 188 215 175" ${S2}/>
      <path d="M160 190 Q140 210 130 240" ${S2}/><path d="M240 190 Q260 210 270 240" ${S2}/>
      <ellipse cx="175" cy="280" rx="22" ry="30" ${S}/><ellipse cx="225" cy="280" rx="22" ry="30" ${S}/>
      <path d="M190 240 Q200 320 210 240" ${S2}/>
    `, 'Sevimli Aslan'),
    rabbit: vb(`
      <ellipse cx="200" cy="250" rx="70" ry="55" ${S}/>
      <circle cx="200" cy="170" r="45" ${S}/>
      <ellipse cx="170" cy="95" rx="18" ry="55" ${S}/><ellipse cx="230" cy="95" rx="18" ry="55" ${S}/>
      <circle cx="185" cy="165" r="5" fill="#1a1a1a"/><circle cx="215" cy="165" r="5" fill="#1a1a1a"/>
      <circle cx="200" cy="180" r="8" ${S2}/>
      <path d="M190 195 Q200 205 210 195" ${S2}/>
      <ellipse cx="160" cy="300" rx="18" ry="28" ${S}/><ellipse cx="240" cy="300" rx="18" ry="28" ${S}/>
      <ellipse cx="280" cy="260" rx="20" ry="12" ${S2}/>
    `, 'Zıplayan Tavşan'),
    fox: vb(`
      <ellipse cx="200" cy="240" rx="80" ry="60" ${S}/>
      <circle cx="200" cy="155" r="48" ${S}/>
      <path d="M160 120 L145 70 L175 110" ${S}/><path d="M240 120 L255 70 L225 110" ${S}/>
      <circle cx="185" cy="150" r="5" fill="#1a1a1a"/><circle cx="215" cy="150" r="5" fill="#1a1a1a"/>
      <path d="M195 165 L200 178 L205 165" ${S2}/>
      <path d="M280 230 Q330 200 340 260" ${S}/>
      <ellipse cx="165" cy="295" rx="20" ry="14" ${S}/><ellipse cx="235" cy="295" rx="20" ry="14" ${S}/>
    `, 'Orman Tilki'),
    penguin: vb(`
      <ellipse cx="200" cy="250" rx="55" ry="85" ${S}/>
      <ellipse cx="200" cy="250" rx="35" ry="65" ${S2}/>
      <circle cx="200" cy="140" r="42" ${S}/>
      <circle cx="188" cy="135" r="5" fill="#1a1a1a"/><circle cx="212" cy="135" r="5" fill="#1a1a1a"/>
      <path d="M190 155 L200 168 L210 155" ${S2}/>
      <ellipse cx="165" cy="320" rx="22" ry="14" ${S}/><ellipse cx="235" cy="320" rx="22" ry="14" ${S}/>
      <ellipse cx="200" cy="175" rx="28" ry="18" ${S2}/>
    `, 'Kutup Pengueni'),
    whale: vb(`
      <ellipse cx="190" cy="210" rx="130" ry="55" ${S}/>
      <path d="M320 210 L370 160 L355 210 L370 260 Z" ${S}/>
      <path d="M120 190 Q80 150 60 200 Q80 250 120 220" ${S}/>
      <circle cx="280" cy="195" r="8" ${S}/><circle cx="278" cy="193" r="3" fill="#1a1a1a"/>
      <path d="M200 160 Q210 120 230 140" ${S2}/>
      <path d="M140 240 Q200 280 260 240" ${S2}/>
    `, 'Mavi Balina'),
    crab: vb(`
      <ellipse cx="200" cy="230" rx="75" ry="45" ${S}/>
      <circle cx="175" cy="215" r="8" fill="#1a1a1a"/><circle cx="225" cy="215" r="8" fill="#1a1a1a"/>
      <path d="M185 240 Q200 255 215 240" ${S2}/>
      <path d="M125 210 L70 180 L80 230 Z" ${S}/><path d="M275 210 L330 180 L320 230 Z" ${S}/>
      <path d="M140 250 L100 290" ${S}/><path d="M160 260 L130 310" ${S}/>
      <path d="M260 250 L300 290" ${S}/><path d="M240 260 L270 310" ${S}/>
    `, 'Kırmızı Yengeç'),
    starfish: vb(`
      <path d="M200 80 L230 160 L315 160 L250 210 L275 295 L200 245 L125 295 L150 210 L85 160 L170 160 Z" ${S}/>
      <circle cx="200" cy="185" r="18" ${S2}/>
      <circle cx="200" cy="130" r="6" ${S2}/><circle cx="250" cy="175" r="6" ${S2}/>
      <circle cx="150" cy="175" r="6" ${S2}/><circle cx="230" cy="240" r="6" ${S2}/>
      <circle cx="170" cy="240" r="6" ${S2}/>
    `, 'Deniz Yıldızı'),
    spaceship: vb(`
      <ellipse cx="200" cy="200" rx="90" ry="40" ${S}/>
      <ellipse cx="200" cy="175" rx="50" ry="35" ${S}/>
      <circle cx="200" cy="175" r="20" ${S2}/>
      <path d="M110 200 L60 230 L110 220 Z" ${S}/><path d="M290 200 L340 230 L290 220 Z" ${S}/>
      <circle cx="80" cy="100" r="4" fill="#1a1a1a"/><circle cx="320" cy="80" r="4" fill="#1a1a1a"/>
      <circle cx="150" cy="60" r="3" fill="#1a1a1a"/><circle cx="250" cy="50" r="3" fill="#1a1a1a"/>
    `, 'Uzay Gemisi'),
    moon: vb(`
      <circle cx="200" cy="200" r="90" ${S}/>
      <circle cx="170" cy="170" r="18" ${S2}/><circle cx="230" cy="190" r="12" ${S2}/>
      <circle cx="190" cy="240" r="22" ${S2}/><circle cx="240" cy="150" r="8" ${S2}/>
      <circle cx="80" cy="80" r="4" fill="#1a1a1a"/><circle cx="320" cy="100" r="3" fill="#1a1a1a"/>
      <circle cx="60" cy="300" r="3" fill="#1a1a1a"/>
    `, 'Ay Yüzeyi'),
    bee: vb(`
      <ellipse cx="200" cy="210" rx="55" ry="40" ${S}/>
      <line x1="155" y1="195" x2="245" y2="195" ${S2}/><line x1="155" y1="210" x2="245" y2="210" ${S2}/>
      <line x1="155" y1="225" x2="245" y2="225" ${S2}/>
      <circle cx="200" cy="160" r="30" ${S}/>
      <circle cx="190" cy="155" r="4" fill="#1a1a1a"/><circle cx="210" cy="155" r="4" fill="#1a1a1a"/>
      <path d="M170 145 Q150 110 130 120" ${S2}/><path d="M230 145 Q250 110 270 120" ${S2}/>
      <path d="M160 240 Q120 260 100 240" ${S2}/><path d="M240 240 Q280 260 300 240" ${S2}/>
      <circle cx="320" cy="280" r="16" ${S2}/>
    `, 'Çalışkan Arı'),
    kite: vb(`
      <path d="M200 80 L260 200 L200 320 L140 200 Z" ${S}/>
      <line x1="200" y1="80" x2="200" y2="340" ${S2}/>
      <line x1="140" y1="200" x2="260" y2="200" ${S2}/>
      <path d="M200 320 Q220 360 240 380" ${S2}/>
      <path d="M240 380 Q260 390 280 385" ${S2}/>
      <circle cx="80" cy="120" r="6" ${S2}/>
    `, 'Uçan Uçurtma'),
    volcano: vb(`
      <path d="M70 320 L130 140 L170 180 L200 100 L230 180 L270 140 L330 320 Z" ${S}/>
      <ellipse cx="200" cy="110" rx="35" ry="18" ${S2}/>
      <path d="M185 95 Q200 60 215 95" ${S2}/>
      <circle cx="195" cy="70" r="8" ${S2}/><circle cx="210" cy="55" r="6" ${S2}/>
      <path d="M100 320 Q200 300 300 320" ${S2}/>
    `, 'Volkan'),
    bicycle: vb(`
      <circle cx="130" cy="260" r="55" ${S}/><circle cx="270" cy="260" r="55" ${S}/>
      <circle cx="130" cy="260" r="12" ${S2}/><circle cx="270" cy="260" r="12" ${S2}/>
      <path d="M130 260 L200 180 L270 260" ${S}/>
      <path d="M200 180 L200 140" ${S}/><path d="M170 140 L230 140" ${S}/>
      <path d="M200 180 L240 200" ${S2}/>
      <circle cx="200" cy="130" r="8" ${S2}/>
    `, 'Renkli Bisiklet'),
    mushroom: vb(`
      <path d="M100 220 Q200 80 300 220 Z" ${S}/>
      <rect x="175" y="220" width="50" height="80" rx="8" ${S}/>
      <circle cx="150" cy="170" r="14" ${S2}/><circle cx="230" cy="155" r="18" ${S2}/>
      <circle cx="190" cy="130" r="10" ${S2}/>
      <path d="M120 300 Q200 320 280 300" ${S2}/>
    `, 'Orman Mantarı'),
    picnic: vb(`
      <path d="M80 280 L320 280" ${S}/>
      <path d="M120 280 L120 200 L280 200 L280 280" ${S}/>
      <path d="M120 200 L200 140 L280 200" ${S}/>
      <ellipse cx="200" cy="250" rx="60" ry="20" ${S2}/>
      <circle cx="160" cy="240" r="14" ${S2}/><circle cx="240" cy="245" r="12" ${S2}/>
      <rect x="185" y="160" width="30" height="40" ${S2}/>
    `, 'Piknik Sepeti'),
  }

  const page = COLORING_PAGES.find((item) => item.id === id)
  return map[id] || genericScene(id, page)
}
