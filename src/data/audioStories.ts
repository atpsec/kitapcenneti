export interface AudioStory {
  id: string
  title: string
  emoji: string
  age: string
  duration: string
  theme: string
  summary: string
  text: string
}

export const AUDIO_STORIES: AudioStory[] = [
  {
    id: 'yildiz-uyku',
    title: 'Der Schlafstern',
    emoji: '⭐',
    age: '3-6',
    duration: '3 Min.',
    theme: 'Schlaf',
    summary: 'Ein kleiner Stern findet ganz ruhig in den Schlaf.',
    text: `Es war einmal ein kleiner Stern am Himmel. Er hieß Schlummerstern.
Jede Nacht wollte er mit den anderen Sternen leuchten, doch seine Augen wurden schwer.
Tante Mond schenkte ihm ein weiches Wolkenkissen.
Der Wind sang ein Wiegenlied: „Schlaf nun ein, träum etwas Schönes.“
Der Schlummerstern lächelte, schloss die Augen und schlief friedlich mit der ganzen Welt ein.
Atme jetzt wie der kleine Stern tief ein … und gleite in schöne Träume.`,
  },
  {
    id: 'orman-dostlari',
    title: 'Freunde im Wald',
    emoji: '🐻',
    age: '4-8',
    duration: '4 Min.',
    theme: 'Freundschaft',
    summary: 'Hase, Bär und Vogel lösen gemeinsam ein Problem.',
    text: `Am Waldrand lebten drei gute Freunde: Hoppelhase, Honigbär und Zwitschi.
Eines Morgens regnete es, und ein Brett der Brücke brach.
Niemand kam auf die andere Seite.
Hoppel machte einen Plan, Honigbär trug mit seinen kräftigen Armen ein neues Brett, und Zwitschi zeigte den Weg von oben.
Gemeinsam bauten sie eine neue Brücke.
An diesem Tag lernten alle im Wald: Zusammen wird jede Schwierigkeit leichter.`,
  },
  {
    id: 'deniz-koruyucu',
    title: 'Luna, die Meeresschützerin',
    emoji: '🌊',
    age: '5-9',
    duration: '5 Min.',
    theme: 'Natur',
    summary: 'Luna schützt das Meer und hilft ihren Freunden.',
    text: `Luna war eine mutige Beschützerin, die unter dem Meer lebte.
Eines Tages verfing sich eine Plastiktüte zwischen den Korallen.
Die Fische bekamen Angst und die Krebse versteckten sich.
Gemeinsam mit ihrer Oktopusfreundin entfernte Luna die Tüte vorsichtig und brachte sie an den Strand.
Dann versprachen sie, das Meer sauber zu halten.
Luna sagte: „Wenn wir das Meer lieben, sorgt es auch für uns.“`,
  },
  {
    id: 'gokkusagi-sehir',
    title: 'Die Regenbogenstadt',
    emoji: '🌈',
    age: '4-8',
    duration: '4 Min.',
    theme: 'Mut',
    summary: 'Als die Farben verschwinden, bringt eine kleine Heldin sie zurück.',
    text: `Eines Morgens waren in der Regenbogenstadt alle Farben verblasst.
Die Autos waren grau, die Blumen grau und sogar das Eis war grau!
Die kleine Mira nahm ihren Pinsel und malte einen Apfel rot.
Dann schenkte sie dem Himmel Blau, dem Gras Grün und der Sonne Gelb.
Alle klatschten.
Mira lachte: „Farben wohnen in unseren Herzen und werden mehr, wenn wir sie teilen.“`,
  },
  {
    id: 'cesur-kaplumbaga',
    title: 'Tiko, die mutige Schildkröte',
    emoji: '🐢',
    age: '3-7',
    duration: '3 Min.',
    theme: 'Mut',
    summary: 'Tiko zeigt, wie Geduld und Ausdauer ein Ziel erreichen.',
    text: `Tiko ging sehr langsam, aber er gab niemals auf.
Eines Tages veranstalteten die Tiere im Wald ein Rennen: „Wer ist am geduldigsten?“
Der Hase rannte los und schlief bald ein.
Tiko ging Schritt für Schritt weiter, atmete ruhig und blieb in Bewegung.
Am Ende überquerte Tiko als Erster die Ziellinie.
Alle lernten: Nicht die Eile gewinnt, sondern das Dranbleiben.`,
  },
  {
    id: 'ay-bahcesi',
    title: 'Der Mondgarten',
    emoji: '🌙',
    age: '3-6',
    duration: '3 Min.',
    theme: 'Schlaf',
    summary: 'Im Mondgarten wachsen Blumen für schöne Träume.',
    text: `Hinter dem Mond lag ein geheimer Garten.
Dort blühten Traumblumen: Blau stand für Ruhe, Rosa für Liebe und Gelb für Freude.
Gärtnerin Nila goss die Blumen jeden Abend und schickte Kindern auf der Erde Träume.
Heute hat sie die schönste Traumblume für dich ausgesucht.
Schließe die Augen: Nila legt sie auf dein Kissen … Gute Nacht.`,
  },
  {
    id: 'kutup-isiklari',
    title: 'Das Nordlicht',
    emoji: '❄️',
    age: '5-10',
    duration: '5 Min.',
    theme: 'Entdecken',
    summary: 'Pinguin Pati sieht zum ersten Mal das Nordlicht.',
    text: `Pinguin Pati hatte immer im Süden gelebt.
Eines Nachts tanzte der Himmel in grünen und violetten Lichtern.
Pati bekam Angst, doch sein Freund Robbe reichte ihm die Flosse.
„Das ist das Nordlicht“, sagte er, „das Lied des Himmels.“
Pati tanzte und lachte. Er merkte, wie schön es ist, Neues zu lernen.`,
  },
  {
    id: 'kucuk-astronot',
    title: 'Die kleine Astronautin Ela',
    emoji: '🚀',
    age: '6-10',
    duration: '5 Min.',
    theme: 'Wissenschaft',
    summary: 'Auf ihrer ersten Reise ins All entdeckt Ela Freundschaft.',
    text: `Ela träumte davon, Astronautin zu werden.
Eines Nachts flog sie in ihrem Traum mit einer echten Rakete los.
Auf dem Mond glitzerte grauer Staub und die Sterne funkelten.
Dort fand sie ein einsames Alienkind namens Zuzu.
Zuzu sprach kein Deutsch, aber sein Lachen klang genauso fröhlich.
Ela schenkte ihm einen kleinen Teddybären von der Erde.
Zu Hause sagte sie: „Das All ist groß, aber Freundschaft ist größer.“`,
  },
  {
    id: 'kucuk-sef',
    title: 'Mert, der kleine Koch',
    emoji: '🍪',
    age: '4-8',
    duration: '4 Min.',
    theme: 'Teilen',
    summary: 'Selbst gebackene Kekse bringen den Nachbarn Freude.',
    text: `Mert backte sehr gern mit seiner Mutter.
Eines Tages blieb Teig übrig.
„Sollen wir den Nachbarn etwas bringen?“, fragte Mert.
Sie gingen von Tür zu Tür und alle lächelten.
Mert lernte: Teilen macht jeden Keks noch süßer.`,
  },
  {
    id: 'gece-kutuphanesi',
    title: 'Die Nachtbibliothek',
    emoji: '📚',
    age: '5-9',
    duration: '5 Min.',
    theme: 'Lesen',
    summary: 'Als Bücher um Mitternacht flüstern, beginnt ein Abenteuer.',
    text: `Eines Nachts wachte Leyla auf und hörte die Bücher im Regal flüstern.
Ein Buch schlug sich auf: „Lies uns vor, damit unsere Welt weiterlebt.“
Leyla las jeden Abend eine Seite.
Die Bücher waren glücklich und Leylas Fantasie wuchs.
Lies heute auch eine Seite – die Bibliothek wartet auf dich.`,
  },
  {
    id: 'ruzgarin-mektubu',
    title: 'Rüzgarın Mektubu',
    emoji: '🍃',
    age: '4-8',
    duration: '4 dk',
    theme: 'İletişim',
    summary: 'Küçük bir yaprak, rüzgarla taşınan nazik bir mesaj taşır.',
    text: `Dağın eteğinde Lale adında bir yaprak varmış.
Rüzgar ona fısıldamış: "Aşağıdaki çocuğa bir mesaj götür."
Lale uçmuş, savrulmuş, gülmüş.
Pencerede bekleyen Deniz'in avucuna konmuş.
Mektupta yazıyormuş: "Bugün birine gülümse."
Deniz komşusuna gülümsemiş; bütün sokak aydınlanmış.
Bazen en küçük mesaj, en büyük neşeyi getirirmiş.`,
  },
  {
    id: 'bulut-otobus',
    title: 'Bulut Otobüsü',
    emoji: '☁️',
    age: '3-6',
    duration: '3 dk',
    theme: 'Hayal',
    summary: 'Yumuşak bulut otobüsü çocukları hayal duraklarına götürür.',
    text: `Gökyüzünde puflu bir otobüs varmış.
Şoförü Beyaz Bulut, bileti gülümsemeymiş.
İlk durak: Renkli Şeker Parkı.
İkinci durak: Fısıltı Ormanı.
Üçüncü durak: Yumuşak Yastık İstasyonu.
Sen de biletini al — gözlerini kapat, otobüs geliyor.
Ding-dong! Hayal durağına hoş geldin.`,
  },
  {
    id: 'kayip-corap',
    title: 'Kayıp Çorap Macerası',
    emoji: '🧦',
    age: '4-7',
    duration: '4 dk',
    theme: 'Mizah',
    summary: 'Çamaşır makinesinde kaybolan çorap cesur bir yolculuğa çıkar.',
    text: `Sol Çorap bir sabah sağını bulamamış.
"Ben maceraya çıkıyorum!" demiş.
Sepetin ardında, yatağın altında, hatta oyuncak kutusunda aranmış.
Sonunda balkondaki çiçek saksısının yanında güneşlenirken bulunmuş.
Sağ Çorap gülmüş: "Kaybolmak da bazen keşfetmektir."
O günden sonra ikisi birlikte dolaba dönmüş — ama ara sıra maceraya izin varmış.`,
  },
  {
    id: 'seftali-agaci',
    title: 'Şeftali Ağacının Sırrı',
    emoji: '🍑',
    age: '5-9',
    duration: '5 dk',
    theme: 'Sabır',
    summary: 'Küçük bir tohum büyümeyi beklerken sabrı öğrenir.',
    text: `Minik tohum toprağa düşmüş ve acele etmiş: "Hemen ağaç olmak istiyorum!"
Yağmur demiş: "Biraz bekle."
Güneş demiş: "Biraz daha."
Kökler yavaş yavaş uzamış, filiz güneşe selam vermiş.
Yıllar sonra şeftali ağacı olmuş; gölgesinde çocuklar oynamış.
Tohum anlamış: Güzel şeyler acele etmeden büyürmüş.`,
  },
  {
    id: 'gece-otobus-duragi',
    title: 'Gece Otobüs Durağı',
    emoji: '🚌',
    age: '5-9',
    duration: '4 dk',
    theme: 'Cesaret',
    summary: 'İlk kez yalnız binen bir çocuk yardımlaşmayı keşfeder.',
    text: `Efe ilk kez nineye giden otobüse binecekmiş.
Karnında kelebekler uçuşuyormuş.
Durakta yaşlı bir teyze çantasını düşürmüş; Efe eğilip vermiş.
Teyze gülümsemiş: "Cesaret bazen küçük bir yardımdır."
Otobüs gelmiş, Efe binmiş, pencereye oturmuş.
Kelebekler hâlâ varmış ama artık dans ediyormuş — korkuyla değil, heyecanla.`,
  },
  {
    id: 'muzi-robot',
    title: 'Muzi ve Onaran Robot',
    emoji: '🤖',
    age: '6-10',
    duration: '5 dk',
    theme: 'Bilim',
    summary: 'Bozulan bir oyuncak robot, merak ve denemeyle yeniden çalışır.',
    text: `Muzi'nin robotu bir sabah "bip" demeyi bırakmış.
Muzi ağlamak yerine kapağı açmış (büyüklerle birlikte).
Bir vida gevşek, bir kablo yerinden çıkmış.
Adım adım denemiş, not almış, tekrar denemiş.
Robot yeniden bipleyince Muzi bağırmış: "Bilim buymuş!"
Bazen bozulmak, öğrenmenin başlangıcıymış.`,
  },
  {
    id: 'kardeas-yildizlar',
    title: 'Kardeş Yıldızlar',
    emoji: '✨',
    age: '3-7',
    duration: '3 dk',
    theme: 'Kardeşlik',
    summary: 'İki yıldız kavga edince Ay onlara paylaşmayı öğretir.',
    text: `İki küçük yıldız aynı bulutu istemiş.
"Benim!" "Hayır benim!" diye parlarmış.
Ay teyze araya girmiş: "Bulutu bölüşsenize."
Biri sağını, biri solunu aydınlatmış.
Bulut daha da parlak görünmüş.
Kardeşler öğrenmiş: Paylaşınca ışık çoğalırmış.`,
  },
  {
    id: 'pistachio-pisirir',
    title: 'Aşçı Sincap Fıstık',
    emoji: '🐿️',
    age: '4-8',
    duration: '4 dk',
    theme: 'Paylaşmak',
    summary: 'Sincap Fıstık ormana kış çorbası pişirir ve herkesi davet eder.',
    text: `Fıstık kış için çorba pişirmiş: havuç, elma, biraz tarçın.
Kokusu ormanı sarmış.
Tavşan, baykuş, hatta utangaç kirpi gelmiş.
Fıstık demiş: "Herkese yeter, yeter ki kase getiresiniz."
Birlikte kaşık kaşık içmişler.
En sıcak şey çorba değil, sofra sohbetiymiş.`,
  },
  {
    id: 'gizli-bahce-kapi',
    title: 'Gizli Bahçe Kapısı',
    emoji: '🚪',
    age: '5-9',
    duration: '5 dk',
    theme: 'Keşif',
    summary: 'Eski bir kapı, merak eden çocuğu renkli bir bahçeye götürür.',
    text: `Evin arkasında yosunlu bir kapı varmış.
Kimse açmazmış — ta ki Nisan merak edene kadar.
Kapı gıcırdamış, içeride uçan kelebekler ve fısıldayan çiçekler varmış.
Bir çiçek demiş: "Merak, en güzel anahtardır."
Nisan her hafta bir çiçeğe su vermiş.
Bahçe büyümüş, Nisan'ın cesareti de.`,
  },
  {
    id: 'yagmur-davulu',
    title: 'Yağmur Davulu',
    emoji: '🥁',
    age: '3-6',
    duration: '3 dk',
    theme: 'Müzik',
    summary: 'Damla damla yağmur, çocuklarla ritim tutar.',
    text: `Damla çatıya düşmüş: tak.
İkinci damla: tak tak.
Çocuklar tencerelerle cevap vermiş: dum tek tek!
Yağmur gülmüş, gökkuşağı perdesini indirmiş.
Ev bir konsere dönmüş.
Yağmurlu günler sıkıcı değilmiş — ritmeliymiş.`,
  },
  {
    id: 'kutuphane-kedisi',
    title: 'Kütüphane Kedisi Mırıl',
    emoji: '🐱',
    age: '4-8',
    duration: '4 dk',
    theme: 'Okuma',
    summary: 'Mırıl, okuyan çocukların yanına kıvrılıp hikâyeleri dinler.',
    text: `Kütüphanede Mırıl adında bir kedi yaşarmış.
En çok masal rafını severmiş.
Bir çocuk üzgün gelince Mırıl kucağına çıkmış.
Çocuk okudukça üzüntü sayfa sayfa incelmiş.
Mırıl mırlamış: "Kitaplar ilaçtır, ben de ısıtırım."
Sen de okurken bir yumuşak dost hayal edebilirsin.`,
  },
  {
    id: 'kayip-gulumseme',
    title: 'Kayıp Gülümseme',
    emoji: '😊',
    age: '3-6',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Gülümsemesini kaybeden bir çocuk onu paylaşarak bulur.',
    text: `Ela bir sabah gülümsemesini bulamamış.
Aynaya bakmış — yok.
Çantasına bakmış — yok.
Sonra arkadaşının düşen kalemini vermiş.
Arkadaşı gülümsemiş; Ela'nın yüzünde de bir kıvılcım belirmiş.
Gülümseme ceplerde değil, paylaşınca geri gelirmiş.`,
  },
  {
    id: 'uzay-postacisi',
    title: 'Uzay Postacısı Pati',
    emoji: '📮',
    age: '6-10',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Pati, gezegenler arası mektupları zamanında yetiştirmeye çalışır.',
    text: `Pati'nin roket postası "Zamanında Yetişir" yazarmış.
Bir gün fırtınalı bir göktaşı yağmuru çıkmış.
Pati korkmuş ama mektubu saklamış.
Dost gezegene vardığında küçük bir uzaylı ağlıyormuş.
Mektupta anneanneden gelen bir ninni varmış.
Pati öğrenmiş: Teslim edilen şey bazen kargo değil, teselliymiş.`,
  },
  {
    id: 'buyulu-kalemlik',
    title: 'Büyülü Kalemlik',
    emoji: '✏️',
    age: '5-9',
    duration: '4 dk',
    theme: 'Yaratıcılık',
    summary: 'Kalemler gece vakti çizimleri canlandırır — nazikçe.',
    text: `Kalemlikte kırmızı, mavi ve sarı kalem varmış.
Gece yarısı fısıldaşmışlar: "Bugün ne çizsek?"
Çocuğun defterindeki güneş bir an parlamış, sonra yine resim olmuş.
Kalemler bilirmiş: Büyü, bitmiş işte değil; denenen çizgidedir.
Sabah çocuk yeni bir sayfa açmış.
Kalemler sevinmiş: "Yine başlıyoruz!"`,
  },
  {
    id: 'koy-fieneri',
    title: 'Köy Feneri',
    emoji: '🏮',
    age: '5-9',
    duration: '4 dk',
    theme: 'Topluluk',
    summary: 'Fırtınada sönen feneri köylüler birlikte yeniden yakar.',
    text: `Köyün feneri fırtınada sönmüş.
Herkes kendi evine çekilmiş.
Küçük Mira kapı kapı dolaşmış: "Birer mum getirin."
Mumlar birleşince fener yeniden aydınlanmış.
Fırtına dinmiş, köy gülümsemiş.
Tek başına küçük ışık, birlikte büyük umutmuş.`,
  },
  {
    id: 'uykucu-ejderha',
    title: 'Uykucu Ejderha Pofuduk',
    emoji: '🐉',
    age: '3-6',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Küçük ejderha ateş yerine yumuşak horultular üfler.',
    text: `Pofuduk ateş püskürtemezmiş — sadece ılık buhar.
Diğer ejderhalar gülermiş.
Ama köy çocukları Pofuduk'u severmiş; çünkü buharı battaniyeleri ısıtırmış.
Gece olunca Pofuduk usulca horlamış.
Horultusu ninni gibiymiş.
Sen de Pofuduk gibi kıvrıl: ılık, güvenli, uykuya hazır.`,
  },
  {
    id: 'zaman-kum-saati',
    title: 'Zaman Kum Saati',
    emoji: '⏳',
    age: '7-11',
    duration: '5 dk',
    theme: 'Sorumluluk',
    summary: 'Kum saatini boşa harcayan çocuk, zamanı paylaşmayı öğrenir.',
    text: `Can'ın sihirli bir kum saati varmış.
Her taneciği bir dakikaymış.
Can hepsini oyuna harcamış; ödev ve yardım için kum kalmamış.
Saatin içinden küçük bir ses demiş: "Zamanı bölüştür."
Ertesi gün Can kumları üçe ayırmış: iş, oyun, sevgi.
Gün daha dolu, kalp daha hafifmiş.`,
  },
  {
    id: 'deniz-feneri-cocugu',
    title: 'Deniz Feneri Çocuğu',
    emoji: '🕯️',
    age: '6-10',
    duration: '5 dk',
    theme: 'Umut',
    summary: 'Fırtınalı gecede feneri yakan çocuk gemilere yol gösterir.',
    text: `Ada fenerinin bekçisi hastalanmış.
Kızı Ayla basamakları tırmanmış.
Fitili yakmış, camı silmiş, ışığı çevirmiş.
Uzakta bir gemi selam vermiş.
Ayla demiş: "Korksam da ışığı bırakmadım."
Umut bazen büyük bir kahramanlık değil, sönmeyen küçük bir ışıkmış.`,
  },
  {
    id: 'park-banki',
    title: 'Parktaki Mavi Bank',
    emoji: '🟦',
    age: '4-8',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Yalnız oturan iki çocuk aynı bankta arkadaş olur.',
    text: `Parkta mavi bir bank varmış.
Bir ucunda Ege, öbür ucunda Su otururmuş.
İkisi de yalnızmış ama birbirine bakmazmış.
Bir güvercin ekmek kırıntısını aralarına düşürmüş.
İkisi aynı anda uzanmış, gülmüş, konuşmaya başlamış.
Bazen arkadaşlık bir kırıntı kadar küçük bir anda başlarmış.`,
  },
  {
    id: 'kar-tanesi-secimi',
    title: 'Kar Tanesi Seçimi',
    emoji: '❄️',
    age: '3-7',
    duration: '3 dk',
    theme: 'Özgünlük',
    summary: 'Her kar tanesi farklıdır — tıpkı senin gibi.',
    text: `Gökyüzünde binlerce kar tanesi varmış.
Biri üzülmüş: "Ben diğerleri gibi değilim."
Rüzgar demiş: "İyi ki değilsin."
Yere düşünce çocuk onu avucunda incelemiş: "Bu çok güzel!"
Kar tanesi parlamış.
Sen de biriciksin — ve bu, dünyanın en güzel tarafı.`,
  },
  {
    id: 'mutfak-orkestrasi',
    title: 'Mutfak Orkestrası',
    emoji: '🍝',
    age: '4-8',
    duration: '4 dk',
    theme: 'Aile',
    summary: 'Akşam yemeği hazırlığı bir aile konserine dönüşür.',
    text: `Anne kaşığı çırpmış: çın çın.
Baba tencere kapağını tempo tutmuş.
Çocuk tahta spatulayla ritim çalmış.
Makarna suyu kaynarken şarkı büyümüş.
Sofra kurulunca alkışlanmış.
Yemek lezzetliymiş — çünkü birlikte pişmiş.`,
  },
  {
    id: 'yildiz-haritasi',
    title: 'Yıldız Haritası',
    emoji: '🗺️',
    age: '7-11',
    duration: '5 dk',
    theme: 'Keşif',
    summary: 'İki arkadaş balkonlarından aynı yıldızı bularak bağ kurar.',
    text: `Lara ve Kerem komşu binalarda otururmuş.
Bir gece aynı yıldızı işaret etmeye karar vermişler.
Harita çizmiş, açı ölçmüş, fenerle selamlaşmışlar.
Yıldız ikisinin de olmuş — paylaşılınca eksilmeden.
Lara defterine yazmış: "Gökyüzü ortak bahçemiz."
Keşif bazen uzaya gitmek değil, birlikte bakmakmış.`,
  },
  {
    id: 'masal-gen-uyku-1',
    title: 'Uyku Masalı: Elif\'in Yolculuğu',
    emoji: '🌙',
    age: '3-6',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Elif, uyku temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Elif adında meraklı bir çocuk varmış.
Elif, uyku hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Elif demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uyku ona güzel bir hatırlatma olmuş.
Sen de bugün uyku için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-dostluk-2',
    title: 'Dostluk Masalı: Deniz\'in Keşfi',
    emoji: '🤝',
    age: '4-8',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Deniz, dostluk temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Deniz adında meraklı bir çocuk varmış.
Deniz, dostluk hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Deniz demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra dostluk ona güzel bir hatırlatma olmuş.
Sen de bugün dostluk için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-doga-3',
    title: 'Doğa Masalı: Aras\'in Günü',
    emoji: '🌿',
    age: '4-9',
    duration: '4 dk',
    theme: 'Doğa',
    summary: 'Aras, doğa temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Aras adında meraklı bir çocuk varmış.
Aras, doğa hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Aras demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra doğa ona güzel bir hatırlatma olmuş.
Sen de bugün doğa için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uzay-4',
    title: 'Uzay Masalı: Mira\'in Hikâyesi',
    emoji: '🚀',
    age: '5-10',
    duration: '5 dk',
    theme: 'Uzay',
    summary: 'Mira, uzay temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Mira adında meraklı bir çocuk varmış.
Mira, uzay hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Mira demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uzay ona güzel bir hatırlatma olmuş.
Sen de bugün uzay için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-okul-5',
    title: 'Okul Masalı: Kuzey\'in Macerası',
    emoji: '🎒',
    age: '5-9',
    duration: '4 dk',
    theme: 'Okul',
    summary: 'Kuzey, okul temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Kuzey adında meraklı bir çocuk varmış.
Kuzey, okul hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Kuzey demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra okul ona güzel bir hatırlatma olmuş.
Sen de bugün okul için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-duygu-6',
    title: 'Duygu Masalı: Defne\'in Yolculuğu',
    emoji: '💛',
    age: '4-8',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Defne, duygu temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Defne adında meraklı bir çocuk varmış.
Defne, duygu hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Defne demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra duygu ona güzel bir hatırlatma olmuş.
Sen de bugün duygu için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-macera-7',
    title: 'Macera Masalı: Alp\'in Keşfi',
    emoji: '🗺️',
    age: '6-11',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Alp, macera temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Alp adında meraklı bir çocuk varmış.
Alp, macera hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Alp demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra macera ona güzel bir hatırlatma olmuş.
Sen de bugün macera için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-hayvan-8',
    title: 'Hayvan Masalı: Ece\'in Günü',
    emoji: '🐾',
    age: '3-7',
    duration: '3 dk',
    theme: 'Hayvan',
    summary: 'Ece, hayvan temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Ece adında meraklı bir çocuk varmış.
Ece, hayvan hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Ece demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra hayvan ona güzel bir hatırlatma olmuş.
Sen de bugün hayvan için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-deniz-9',
    title: 'Deniz Masalı: Barış\'in Hikâyesi',
    emoji: '🌊',
    age: '4-9',
    duration: '4 dk',
    theme: 'Deniz',
    summary: 'Barış, deniz temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Barış adında meraklı bir çocuk varmış.
Barış, deniz hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Barış demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra deniz ona güzel bir hatırlatma olmuş.
Sen de bugün deniz için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-mevsim-10',
    title: 'Mevsim Masalı: Selin\'in Macerası',
    emoji: '🍂',
    age: '4-8',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Selin, mevsim temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Selin adında meraklı bir çocuk varmış.
Selin, mevsim hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Selin demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra mevsim ona güzel bir hatırlatma olmuş.
Sen de bugün mevsim için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uyku-11',
    title: 'Uyku Masalı: Can\'in Yolculuğu',
    emoji: '🌙',
    age: '3-6',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Can, uyku temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Can adında meraklı bir çocuk varmış.
Can, uyku hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Can demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uyku ona güzel bir hatırlatma olmuş.
Sen de bugün uyku için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-dostluk-12',
    title: 'Dostluk Masalı: Naz\'in Keşfi',
    emoji: '🤝',
    age: '4-8',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Naz, dostluk temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Naz adında meraklı bir çocuk varmış.
Naz, dostluk hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Naz demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra dostluk ona güzel bir hatırlatma olmuş.
Sen de bugün dostluk için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-doga-13',
    title: 'Doğa Masalı: Emre\'in Günü',
    emoji: '🌿',
    age: '4-9',
    duration: '4 dk',
    theme: 'Doğa',
    summary: 'Emre, doğa temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Emre adında meraklı bir çocuk varmış.
Emre, doğa hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Emre demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra doğa ona güzel bir hatırlatma olmuş.
Sen de bugün doğa için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uzay-14',
    title: 'Uzay Masalı: Zeynep\'in Hikâyesi',
    emoji: '🚀',
    age: '5-10',
    duration: '5 dk',
    theme: 'Uzay',
    summary: 'Zeynep, uzay temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Zeynep adında meraklı bir çocuk varmış.
Zeynep, uzay hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Zeynep demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uzay ona güzel bir hatırlatma olmuş.
Sen de bugün uzay için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-okul-15',
    title: 'Okul Masalı: Kaan\'in Macerası',
    emoji: '🎒',
    age: '5-9',
    duration: '4 dk',
    theme: 'Okul',
    summary: 'Kaan, okul temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Kaan adında meraklı bir çocuk varmış.
Kaan, okul hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Kaan demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra okul ona güzel bir hatırlatma olmuş.
Sen de bugün okul için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-duygu-16',
    title: 'Duygu Masalı: Yasemin\'in Yolculuğu',
    emoji: '💛',
    age: '4-8',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Yasemin, duygu temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Yasemin adında meraklı bir çocuk varmış.
Yasemin, duygu hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Yasemin demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra duygu ona güzel bir hatırlatma olmuş.
Sen de bugün duygu için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-macera-17',
    title: 'Macera Masalı: Derin\'in Keşfi',
    emoji: '🗺️',
    age: '6-11',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Derin, macera temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Derin adında meraklı bir çocuk varmış.
Derin, macera hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Derin demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra macera ona güzel bir hatırlatma olmuş.
Sen de bugün macera için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-hayvan-18',
    title: 'Hayvan Masalı: Umut\'in Günü',
    emoji: '🐾',
    age: '3-7',
    duration: '3 dk',
    theme: 'Hayvan',
    summary: 'Umut, hayvan temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Umut adında meraklı bir çocuk varmış.
Umut, hayvan hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Umut demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra hayvan ona güzel bir hatırlatma olmuş.
Sen de bugün hayvan için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-deniz-19',
    title: 'Deniz Masalı: Lale\'in Hikâyesi',
    emoji: '🌊',
    age: '4-9',
    duration: '4 dk',
    theme: 'Deniz',
    summary: 'Lale, deniz temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Lale adında meraklı bir çocuk varmış.
Lale, deniz hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Lale demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra deniz ona güzel bir hatırlatma olmuş.
Sen de bugün deniz için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-mevsim-20',
    title: 'Mevsim Masalı: Poyraz\'in Macerası',
    emoji: '🍂',
    age: '4-8',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Poyraz, mevsim temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Poyraz adında meraklı bir çocuk varmış.
Poyraz, mevsim hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Poyraz demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra mevsim ona güzel bir hatırlatma olmuş.
Sen de bugün mevsim için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uyku-21',
    title: 'Uyku Masalı: Elif\'in Yolculuğu',
    emoji: '🌙',
    age: '3-6',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Elif, uyku temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Elif adında meraklı bir çocuk varmış.
Elif, uyku hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Elif demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uyku ona güzel bir hatırlatma olmuş.
Sen de bugün uyku için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-dostluk-22',
    title: 'Dostluk Masalı: Deniz\'in Keşfi',
    emoji: '🤝',
    age: '4-8',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Deniz, dostluk temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Deniz adında meraklı bir çocuk varmış.
Deniz, dostluk hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Deniz demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra dostluk ona güzel bir hatırlatma olmuş.
Sen de bugün dostluk için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-doga-23',
    title: 'Doğa Masalı: Aras\'in Günü',
    emoji: '🌿',
    age: '4-9',
    duration: '4 dk',
    theme: 'Doğa',
    summary: 'Aras, doğa temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Aras adında meraklı bir çocuk varmış.
Aras, doğa hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Aras demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra doğa ona güzel bir hatırlatma olmuş.
Sen de bugün doğa için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uzay-24',
    title: 'Uzay Masalı: Mira\'in Hikâyesi',
    emoji: '🚀',
    age: '5-10',
    duration: '5 dk',
    theme: 'Uzay',
    summary: 'Mira, uzay temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Mira adında meraklı bir çocuk varmış.
Mira, uzay hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Mira demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uzay ona güzel bir hatırlatma olmuş.
Sen de bugün uzay için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-okul-25',
    title: 'Okul Masalı: Kuzey\'in Macerası',
    emoji: '🎒',
    age: '5-9',
    duration: '4 dk',
    theme: 'Okul',
    summary: 'Kuzey, okul temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Kuzey adında meraklı bir çocuk varmış.
Kuzey, okul hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Kuzey demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra okul ona güzel bir hatırlatma olmuş.
Sen de bugün okul için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-duygu-26',
    title: 'Duygu Masalı: Defne\'in Yolculuğu',
    emoji: '💛',
    age: '4-8',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Defne, duygu temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Defne adında meraklı bir çocuk varmış.
Defne, duygu hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Defne demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra duygu ona güzel bir hatırlatma olmuş.
Sen de bugün duygu için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-macera-27',
    title: 'Macera Masalı: Alp\'in Keşfi',
    emoji: '🗺️',
    age: '6-11',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Alp, macera temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Alp adında meraklı bir çocuk varmış.
Alp, macera hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Alp demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra macera ona güzel bir hatırlatma olmuş.
Sen de bugün macera için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-hayvan-28',
    title: 'Hayvan Masalı: Ece\'in Günü',
    emoji: '🐾',
    age: '3-7',
    duration: '3 dk',
    theme: 'Hayvan',
    summary: 'Ece, hayvan temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Ece adında meraklı bir çocuk varmış.
Ece, hayvan hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Ece demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra hayvan ona güzel bir hatırlatma olmuş.
Sen de bugün hayvan için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-deniz-29',
    title: 'Deniz Masalı: Barış\'in Hikâyesi',
    emoji: '🌊',
    age: '4-9',
    duration: '4 dk',
    theme: 'Deniz',
    summary: 'Barış, deniz temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Barış adında meraklı bir çocuk varmış.
Barış, deniz hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Barış demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra deniz ona güzel bir hatırlatma olmuş.
Sen de bugün deniz için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-mevsim-30',
    title: 'Mevsim Masalı: Selin\'in Macerası',
    emoji: '🍂',
    age: '4-8',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Selin, mevsim temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Selin adında meraklı bir çocuk varmış.
Selin, mevsim hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Selin demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra mevsim ona güzel bir hatırlatma olmuş.
Sen de bugün mevsim için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uyku-31',
    title: 'Uyku Masalı: Can\'in Yolculuğu',
    emoji: '🌙',
    age: '3-6',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Can, uyku temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Can adında meraklı bir çocuk varmış.
Can, uyku hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Can demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uyku ona güzel bir hatırlatma olmuş.
Sen de bugün uyku için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-dostluk-32',
    title: 'Dostluk Masalı: Naz\'in Keşfi',
    emoji: '🤝',
    age: '4-8',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Naz, dostluk temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Naz adında meraklı bir çocuk varmış.
Naz, dostluk hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Naz demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra dostluk ona güzel bir hatırlatma olmuş.
Sen de bugün dostluk için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-doga-33',
    title: 'Doğa Masalı: Emre\'in Günü',
    emoji: '🌿',
    age: '4-9',
    duration: '4 dk',
    theme: 'Doğa',
    summary: 'Emre, doğa temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Emre adında meraklı bir çocuk varmış.
Emre, doğa hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Emre demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra doğa ona güzel bir hatırlatma olmuş.
Sen de bugün doğa için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uzay-34',
    title: 'Uzay Masalı: Zeynep\'in Hikâyesi',
    emoji: '🚀',
    age: '5-10',
    duration: '5 dk',
    theme: 'Uzay',
    summary: 'Zeynep, uzay temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Zeynep adında meraklı bir çocuk varmış.
Zeynep, uzay hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Zeynep demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uzay ona güzel bir hatırlatma olmuş.
Sen de bugün uzay için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-okul-35',
    title: 'Okul Masalı: Kaan\'in Macerası',
    emoji: '🎒',
    age: '5-9',
    duration: '4 dk',
    theme: 'Okul',
    summary: 'Kaan, okul temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Kaan adında meraklı bir çocuk varmış.
Kaan, okul hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Kaan demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra okul ona güzel bir hatırlatma olmuş.
Sen de bugün okul için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-duygu-36',
    title: 'Duygu Masalı: Yasemin\'in Yolculuğu',
    emoji: '💛',
    age: '4-8',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Yasemin, duygu temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Yasemin adında meraklı bir çocuk varmış.
Yasemin, duygu hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Yasemin demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra duygu ona güzel bir hatırlatma olmuş.
Sen de bugün duygu için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-macera-37',
    title: 'Macera Masalı: Derin\'in Keşfi',
    emoji: '🗺️',
    age: '6-11',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Derin, macera temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Derin adında meraklı bir çocuk varmış.
Derin, macera hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Derin demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra macera ona güzel bir hatırlatma olmuş.
Sen de bugün macera için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-hayvan-38',
    title: 'Hayvan Masalı: Umut\'in Günü',
    emoji: '🐾',
    age: '3-7',
    duration: '3 dk',
    theme: 'Hayvan',
    summary: 'Umut, hayvan temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Umut adında meraklı bir çocuk varmış.
Umut, hayvan hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Umut demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra hayvan ona güzel bir hatırlatma olmuş.
Sen de bugün hayvan için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-deniz-39',
    title: 'Deniz Masalı: Lale\'in Hikâyesi',
    emoji: '🌊',
    age: '4-9',
    duration: '4 dk',
    theme: 'Deniz',
    summary: 'Lale, deniz temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Lale adında meraklı bir çocuk varmış.
Lale, deniz hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Lale demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra deniz ona güzel bir hatırlatma olmuş.
Sen de bugün deniz için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-mevsim-40',
    title: 'Mevsim Masalı: Poyraz\'in Macerası',
    emoji: '🍂',
    age: '4-8',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Poyraz, mevsim temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Poyraz adında meraklı bir çocuk varmış.
Poyraz, mevsim hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Poyraz demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra mevsim ona güzel bir hatırlatma olmuş.
Sen de bugün mevsim için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uyku-41',
    title: 'Uyku Masalı: Elif\'in Yolculuğu',
    emoji: '🌙',
    age: '3-6',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Elif, uyku temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Elif adında meraklı bir çocuk varmış.
Elif, uyku hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Elif demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uyku ona güzel bir hatırlatma olmuş.
Sen de bugün uyku için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-dostluk-42',
    title: 'Dostluk Masalı: Deniz\'in Keşfi',
    emoji: '🤝',
    age: '4-8',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Deniz, dostluk temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Deniz adında meraklı bir çocuk varmış.
Deniz, dostluk hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Deniz demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra dostluk ona güzel bir hatırlatma olmuş.
Sen de bugün dostluk için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-doga-43',
    title: 'Doğa Masalı: Aras\'in Günü',
    emoji: '🌿',
    age: '4-9',
    duration: '4 dk',
    theme: 'Doğa',
    summary: 'Aras, doğa temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Aras adında meraklı bir çocuk varmış.
Aras, doğa hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Aras demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra doğa ona güzel bir hatırlatma olmuş.
Sen de bugün doğa için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uzay-44',
    title: 'Uzay Masalı: Mira\'in Hikâyesi',
    emoji: '🚀',
    age: '5-10',
    duration: '5 dk',
    theme: 'Uzay',
    summary: 'Mira, uzay temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Mira adında meraklı bir çocuk varmış.
Mira, uzay hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Mira demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uzay ona güzel bir hatırlatma olmuş.
Sen de bugün uzay için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-okul-45',
    title: 'Okul Masalı: Kuzey\'in Macerası',
    emoji: '🎒',
    age: '5-9',
    duration: '4 dk',
    theme: 'Okul',
    summary: 'Kuzey, okul temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Kuzey adında meraklı bir çocuk varmış.
Kuzey, okul hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Kuzey demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra okul ona güzel bir hatırlatma olmuş.
Sen de bugün okul için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-duygu-46',
    title: 'Duygu Masalı: Defne\'in Yolculuğu',
    emoji: '💛',
    age: '4-8',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Defne, duygu temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Defne adında meraklı bir çocuk varmış.
Defne, duygu hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Defne demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra duygu ona güzel bir hatırlatma olmuş.
Sen de bugün duygu için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-macera-47',
    title: 'Macera Masalı: Alp\'in Keşfi',
    emoji: '🗺️',
    age: '6-11',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Alp, macera temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Alp adında meraklı bir çocuk varmış.
Alp, macera hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Alp demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra macera ona güzel bir hatırlatma olmuş.
Sen de bugün macera için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-hayvan-48',
    title: 'Hayvan Masalı: Ece\'in Günü',
    emoji: '🐾',
    age: '3-7',
    duration: '3 dk',
    theme: 'Hayvan',
    summary: 'Ece, hayvan temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Ece adında meraklı bir çocuk varmış.
Ece, hayvan hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Ece demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra hayvan ona güzel bir hatırlatma olmuş.
Sen de bugün hayvan için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-deniz-49',
    title: 'Deniz Masalı: Barış\'in Hikâyesi',
    emoji: '🌊',
    age: '4-9',
    duration: '4 dk',
    theme: 'Deniz',
    summary: 'Barış, deniz temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Barış adında meraklı bir çocuk varmış.
Barış, deniz hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Barış demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra deniz ona güzel bir hatırlatma olmuş.
Sen de bugün deniz için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-mevsim-50',
    title: 'Mevsim Masalı: Selin\'in Macerası',
    emoji: '🍂',
    age: '4-8',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Selin, mevsim temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Selin adında meraklı bir çocuk varmış.
Selin, mevsim hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Selin demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra mevsim ona güzel bir hatırlatma olmuş.
Sen de bugün mevsim için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uyku-51',
    title: 'Uyku Masalı: Can\'in Yolculuğu',
    emoji: '🌙',
    age: '3-6',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Can, uyku temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Can adında meraklı bir çocuk varmış.
Can, uyku hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Can demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uyku ona güzel bir hatırlatma olmuş.
Sen de bugün uyku için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-dostluk-52',
    title: 'Dostluk Masalı: Naz\'in Keşfi',
    emoji: '🤝',
    age: '4-8',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Naz, dostluk temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Naz adında meraklı bir çocuk varmış.
Naz, dostluk hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Naz demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra dostluk ona güzel bir hatırlatma olmuş.
Sen de bugün dostluk için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-doga-53',
    title: 'Doğa Masalı: Emre\'in Günü',
    emoji: '🌿',
    age: '4-9',
    duration: '4 dk',
    theme: 'Doğa',
    summary: 'Emre, doğa temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Emre adında meraklı bir çocuk varmış.
Emre, doğa hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Emre demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra doğa ona güzel bir hatırlatma olmuş.
Sen de bugün doğa için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-uzay-54',
    title: 'Uzay Masalı: Zeynep\'in Hikâyesi',
    emoji: '🚀',
    age: '5-10',
    duration: '5 dk',
    theme: 'Uzay',
    summary: 'Zeynep, uzay temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Zeynep adında meraklı bir çocuk varmış.
Zeynep, uzay hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Zeynep demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra uzay ona güzel bir hatırlatma olmuş.
Sen de bugün uzay için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-okul-55',
    title: 'Okul Masalı: Kaan\'in Macerası',
    emoji: '🎒',
    age: '5-9',
    duration: '4 dk',
    theme: 'Okul',
    summary: 'Kaan, okul temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Kaan adında meraklı bir çocuk varmış.
Kaan, okul hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Kaan demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra okul ona güzel bir hatırlatma olmuş.
Sen de bugün okul için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-duygu-56',
    title: 'Duygu Masalı: Yasemin\'in Yolculuğu',
    emoji: '💛',
    age: '4-8',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Yasemin, duygu temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Yasemin adında meraklı bir çocuk varmış.
Yasemin, duygu hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Yasemin demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra duygu ona güzel bir hatırlatma olmuş.
Sen de bugün duygu için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-macera-57',
    title: 'Macera Masalı: Derin\'in Keşfi',
    emoji: '🗺️',
    age: '6-11',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Derin, macera temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Derin adında meraklı bir çocuk varmış.
Derin, macera hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Derin demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra macera ona güzel bir hatırlatma olmuş.
Sen de bugün macera için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-gen-hayvan-58',
    title: 'Hayvan Masalı: Umut\'in Günü',
    emoji: '🐾',
    age: '3-7',
    duration: '3 dk',
    theme: 'Hayvan',
    summary: 'Umut, hayvan temalı sıcak bir macerada yeni bir şey öğrenir.',
    text: `Bir varmış bir yokmuş, Umut adında meraklı bir çocuk varmış.
Umut, hayvan hakkında düşünürken küçük bir sürprizle karşılaşmış.
Önce korkmuş, sonra nefes alıp yardım istemiş.
Arkadaşları ve ailesi birlikte olunca işler kolaylaşmış.
Umut demiş ki: "Her gün küçük bir adım, büyük bir değişim getirir."
Ve o günden sonra hayvan ona güzel bir hatırlatma olmuş.
Sen de bugün hayvan için minik bir iyilik yapabilirsin.`,
  },
  {
    id: 'masal-portal-1',
    title: 'Dostluk Masalı 1',
    emoji: '🦊',
    age: '4-7',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-2',
    title: 'Doğa Masalı 2',
    emoji: '🌙',
    age: '5-8',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-3',
    title: 'Uzay Masalı 3',
    emoji: '🌊',
    age: '6-9',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-4',
    title: 'Okul Masalı 4',
    emoji: '🚀',
    age: '7-10',
    duration: '3 dk',
    theme: 'Okul',
    summary: 'Okul temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-5',
    title: 'Duygu Masalı 5',
    emoji: '🌿',
    age: '3-5',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-6',
    title: 'Macera Masalı 6',
    emoji: '🎈',
    age: '4-7',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Macera temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-7',
    title: 'Hayvan Masalı 7',
    emoji: '🐻',
    age: '5-8',
    duration: '6 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-8',
    title: 'Deniz Masalı 8',
    emoji: '🦋',
    age: '6-9',
    duration: '3 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-9',
    title: 'Mevsim Masalı 9',
    emoji: '🌈',
    age: '7-10',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-10',
    title: 'Cesaret Masalı 10',
    emoji: '🐢',
    age: '3-5',
    duration: '5 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-11',
    title: 'Paylaşım Masalı 11',
    emoji: '🦄',
    age: '4-7',
    duration: '6 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-12',
    title: 'Uyku Masalı 12',
    emoji: '🐠',
    age: '5-8',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-13',
    title: 'Dostluk Masalı 13',
    emoji: '🌻',
    age: '6-9',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-14',
    title: 'Doğa Masalı 14',
    emoji: '🏰',
    age: '7-10',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-15',
    title: 'Uzay Masalı 15',
    emoji: '🧠',
    age: '3-5',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-16',
    title: 'Okul Masalı 16',
    emoji: '💛',
    age: '4-7',
    duration: '3 dk',
    theme: 'Okul',
    summary: 'Okul temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-17',
    title: 'Duygu Masalı 17',
    emoji: '🎵',
    age: '5-8',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-18',
    title: 'Macera Masalı 18',
    emoji: '⭐',
    age: '6-9',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Macera temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-19',
    title: 'Hayvan Masalı 19',
    emoji: '🦊',
    age: '7-10',
    duration: '6 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-20',
    title: 'Deniz Masalı 20',
    emoji: '🌙',
    age: '3-5',
    duration: '3 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-21',
    title: 'Mevsim Masalı 21',
    emoji: '🌊',
    age: '4-7',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-22',
    title: 'Cesaret Masalı 22',
    emoji: '🚀',
    age: '5-8',
    duration: '5 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-23',
    title: 'Paylaşım Masalı 23',
    emoji: '🌿',
    age: '6-9',
    duration: '6 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-24',
    title: 'Uyku Masalı 24',
    emoji: '🎈',
    age: '7-10',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-25',
    title: 'Dostluk Masalı 25',
    emoji: '🐻',
    age: '3-5',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-26',
    title: 'Doğa Masalı 26',
    emoji: '🦋',
    age: '4-7',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-27',
    title: 'Uzay Masalı 27',
    emoji: '🌈',
    age: '5-8',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-28',
    title: 'Okul Masalı 28',
    emoji: '🐢',
    age: '6-9',
    duration: '3 dk',
    theme: 'Okul',
    summary: 'Okul temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-29',
    title: 'Duygu Masalı 29',
    emoji: '🦄',
    age: '7-10',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-30',
    title: 'Macera Masalı 30',
    emoji: '🐠',
    age: '3-5',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Macera temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-31',
    title: 'Hayvan Masalı 31',
    emoji: '🌻',
    age: '4-7',
    duration: '6 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-32',
    title: 'Deniz Masalı 32',
    emoji: '🏰',
    age: '5-8',
    duration: '3 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-33',
    title: 'Mevsim Masalı 33',
    emoji: '🧠',
    age: '6-9',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-34',
    title: 'Cesaret Masalı 34',
    emoji: '💛',
    age: '7-10',
    duration: '5 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-35',
    title: 'Paylaşım Masalı 35',
    emoji: '🎵',
    age: '3-5',
    duration: '6 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-36',
    title: 'Uyku Masalı 36',
    emoji: '⭐',
    age: '4-7',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-37',
    title: 'Dostluk Masalı 37',
    emoji: '🦊',
    age: '5-8',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-38',
    title: 'Doğa Masalı 38',
    emoji: '🌙',
    age: '6-9',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-39',
    title: 'Uzay Masalı 39',
    emoji: '🌊',
    age: '7-10',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-40',
    title: 'Okul Masalı 40',
    emoji: '🚀',
    age: '3-5',
    duration: '3 dk',
    theme: 'Okul',
    summary: 'Okul temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-41',
    title: 'Duygu Masalı 41',
    emoji: '🌿',
    age: '4-7',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-42',
    title: 'Macera Masalı 42',
    emoji: '🎈',
    age: '5-8',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Macera temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-43',
    title: 'Hayvan Masalı 43',
    emoji: '🐻',
    age: '6-9',
    duration: '6 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-44',
    title: 'Deniz Masalı 44',
    emoji: '🦋',
    age: '7-10',
    duration: '3 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-45',
    title: 'Mevsim Masalı 45',
    emoji: '🌈',
    age: '3-5',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-46',
    title: 'Cesaret Masalı 46',
    emoji: '🐢',
    age: '4-7',
    duration: '5 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-47',
    title: 'Paylaşım Masalı 47',
    emoji: '🦄',
    age: '5-8',
    duration: '6 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-48',
    title: 'Uyku Masalı 48',
    emoji: '🐠',
    age: '6-9',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-49',
    title: 'Dostluk Masalı 49',
    emoji: '🌻',
    age: '7-10',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-50',
    title: 'Doğa Masalı 50',
    emoji: '🏰',
    age: '3-5',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-51',
    title: 'Uzay Masalı 51',
    emoji: '🧠',
    age: '4-7',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-52',
    title: 'Okul Masalı 52',
    emoji: '💛',
    age: '5-8',
    duration: '3 dk',
    theme: 'Okul',
    summary: 'Okul temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-53',
    title: 'Duygu Masalı 53',
    emoji: '🎵',
    age: '6-9',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-54',
    title: 'Macera Masalı 54',
    emoji: '⭐',
    age: '7-10',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Macera temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-55',
    title: 'Hayvan Masalı 55',
    emoji: '🦊',
    age: '3-5',
    duration: '6 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-56',
    title: 'Deniz Masalı 56',
    emoji: '🌙',
    age: '4-7',
    duration: '3 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-57',
    title: 'Mevsim Masalı 57',
    emoji: '🌊',
    age: '5-8',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-58',
    title: 'Cesaret Masalı 58',
    emoji: '🚀',
    age: '6-9',
    duration: '5 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-59',
    title: 'Paylaşım Masalı 59',
    emoji: '🌿',
    age: '7-10',
    duration: '6 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-60',
    title: 'Uyku Masalı 60',
    emoji: '🎈',
    age: '3-5',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-61',
    title: 'Dostluk Masalı 61',
    emoji: '🐻',
    age: '4-7',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-62',
    title: 'Doğa Masalı 62',
    emoji: '🦋',
    age: '5-8',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-63',
    title: 'Uzay Masalı 63',
    emoji: '🌈',
    age: '6-9',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-64',
    title: 'Okul Masalı 64',
    emoji: '🐢',
    age: '7-10',
    duration: '3 dk',
    theme: 'Okul',
    summary: 'Okul temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-65',
    title: 'Duygu Masalı 65',
    emoji: '🦄',
    age: '3-5',
    duration: '4 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-66',
    title: 'Macera Masalı 66',
    emoji: '🐠',
    age: '4-7',
    duration: '5 dk',
    theme: 'Macera',
    summary: 'Macera temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-67',
    title: 'Hayvan Masalı 67',
    emoji: '🌻',
    age: '5-8',
    duration: '6 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-68',
    title: 'Deniz Masalı 68',
    emoji: '🏰',
    age: '6-9',
    duration: '3 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-69',
    title: 'Mevsim Masalı 69',
    emoji: '🧠',
    age: '7-10',
    duration: '4 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'masal-portal-70',
    title: 'Cesaret Masalı 70',
    emoji: '💛',
    age: '3-5',
    duration: '5 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı kısa bir masal — dinle, hisset, paylaş.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş ve gökyüzü biraz daha parlak görünmüş.
Sen de derin bir nefes al… bu masalın sıcaklığını yanında tut.`,
  },
  {
    id: 'mega-masal-1',
    title: 'Dostluk Yolculuğu 1',
    emoji: '🦊',
    age: '4-7',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #1.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-2',
    title: 'Doğa Yolculuğu 2',
    emoji: '🌙',
    age: '5-8',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #2.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-3',
    title: 'Uzay Yolculuğu 3',
    emoji: '🌊',
    age: '6-9',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #3.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-4',
    title: 'Okul Yolculuğu 4',
    emoji: '🚀',
    age: '7-10',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #4.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-5',
    title: 'Duygu Yolculuğu 5',
    emoji: '🌿',
    age: '8-12',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #5.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-6',
    title: 'Macera Yolculuğu 6',
    emoji: '🎈',
    age: '3-5',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #6.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-7',
    title: 'Hayvan Yolculuğu 7',
    emoji: '🐻',
    age: '4-7',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #7.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-8',
    title: 'Deniz Yolculuğu 8',
    emoji: '🦋',
    age: '5-8',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #8.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-9',
    title: 'Mevsim Yolculuğu 9',
    emoji: '🌈',
    age: '6-9',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #9.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-10',
    title: 'Cesaret Yolculuğu 10',
    emoji: '🐢',
    age: '7-10',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #10.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-11',
    title: 'Paylaşım Yolculuğu 11',
    emoji: '🦄',
    age: '8-12',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #11.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-12',
    title: 'Müzik Yolculuğu 12',
    emoji: '🐠',
    age: '3-5',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #12.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-13',
    title: 'Spor Yolculuğu 13',
    emoji: '🌻',
    age: '4-7',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #13.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-14',
    title: 'Sanat Yolculuğu 14',
    emoji: '🏰',
    age: '5-8',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #14.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-15',
    title: 'Uyku Yolculuğu 15',
    emoji: '🧠',
    age: '6-9',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #15.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-16',
    title: 'Dostluk Yolculuğu 16',
    emoji: '💛',
    age: '7-10',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #16.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-17',
    title: 'Doğa Yolculuğu 17',
    emoji: '🎵',
    age: '8-12',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #17.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-18',
    title: 'Uzay Yolculuğu 18',
    emoji: '🎨',
    age: '3-5',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #18.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-19',
    title: 'Okul Yolculuğu 19',
    emoji: '🔬',
    age: '4-7',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #19.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-20',
    title: 'Duygu Yolculuğu 20',
    emoji: '⭐',
    age: '5-8',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #20.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-21',
    title: 'Macera Yolculuğu 21',
    emoji: '🦊',
    age: '6-9',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #21.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-22',
    title: 'Hayvan Yolculuğu 22',
    emoji: '🌙',
    age: '7-10',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #22.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-23',
    title: 'Deniz Yolculuğu 23',
    emoji: '🌊',
    age: '8-12',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #23.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-24',
    title: 'Mevsim Yolculuğu 24',
    emoji: '🚀',
    age: '3-5',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #24.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-25',
    title: 'Cesaret Yolculuğu 25',
    emoji: '🌿',
    age: '4-7',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #25.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-26',
    title: 'Paylaşım Yolculuğu 26',
    emoji: '🎈',
    age: '5-8',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #26.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-27',
    title: 'Müzik Yolculuğu 27',
    emoji: '🐻',
    age: '6-9',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #27.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-28',
    title: 'Spor Yolculuğu 28',
    emoji: '🦋',
    age: '7-10',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #28.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-29',
    title: 'Sanat Yolculuğu 29',
    emoji: '🌈',
    age: '8-12',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #29.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-30',
    title: 'Uyku Yolculuğu 30',
    emoji: '🐢',
    age: '3-5',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #30.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-31',
    title: 'Dostluk Yolculuğu 31',
    emoji: '🦄',
    age: '4-7',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #31.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-32',
    title: 'Doğa Yolculuğu 32',
    emoji: '🐠',
    age: '5-8',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #32.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-33',
    title: 'Uzay Yolculuğu 33',
    emoji: '🌻',
    age: '6-9',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #33.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-34',
    title: 'Okul Yolculuğu 34',
    emoji: '🏰',
    age: '7-10',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #34.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-35',
    title: 'Duygu Yolculuğu 35',
    emoji: '🧠',
    age: '8-12',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #35.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-36',
    title: 'Macera Yolculuğu 36',
    emoji: '💛',
    age: '3-5',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #36.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-37',
    title: 'Hayvan Yolculuğu 37',
    emoji: '🎵',
    age: '4-7',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #37.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-38',
    title: 'Deniz Yolculuğu 38',
    emoji: '🎨',
    age: '5-8',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #38.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-39',
    title: 'Mevsim Yolculuğu 39',
    emoji: '🔬',
    age: '6-9',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #39.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-40',
    title: 'Cesaret Yolculuğu 40',
    emoji: '⭐',
    age: '7-10',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #40.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-41',
    title: 'Paylaşım Yolculuğu 41',
    emoji: '🦊',
    age: '8-12',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #41.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-42',
    title: 'Müzik Yolculuğu 42',
    emoji: '🌙',
    age: '3-5',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #42.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-43',
    title: 'Spor Yolculuğu 43',
    emoji: '🌊',
    age: '4-7',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #43.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-44',
    title: 'Sanat Yolculuğu 44',
    emoji: '🚀',
    age: '5-8',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #44.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-45',
    title: 'Uyku Yolculuğu 45',
    emoji: '🌿',
    age: '6-9',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #45.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-46',
    title: 'Dostluk Yolculuğu 46',
    emoji: '🎈',
    age: '7-10',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #46.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-47',
    title: 'Doğa Yolculuğu 47',
    emoji: '🐻',
    age: '8-12',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #47.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-48',
    title: 'Uzay Yolculuğu 48',
    emoji: '🦋',
    age: '3-5',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #48.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-49',
    title: 'Okul Yolculuğu 49',
    emoji: '🌈',
    age: '4-7',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #49.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-50',
    title: 'Duygu Yolculuğu 50',
    emoji: '🐢',
    age: '5-8',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #50.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-51',
    title: 'Macera Yolculuğu 51',
    emoji: '🦄',
    age: '6-9',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #51.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-52',
    title: 'Hayvan Yolculuğu 52',
    emoji: '🐠',
    age: '7-10',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #52.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-53',
    title: 'Deniz Yolculuğu 53',
    emoji: '🌻',
    age: '8-12',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #53.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-54',
    title: 'Mevsim Yolculuğu 54',
    emoji: '🏰',
    age: '3-5',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #54.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-55',
    title: 'Cesaret Yolculuğu 55',
    emoji: '🧠',
    age: '4-7',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #55.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-56',
    title: 'Paylaşım Yolculuğu 56',
    emoji: '💛',
    age: '5-8',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #56.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-57',
    title: 'Müzik Yolculuğu 57',
    emoji: '🎵',
    age: '6-9',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #57.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-58',
    title: 'Spor Yolculuğu 58',
    emoji: '🎨',
    age: '7-10',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #58.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-59',
    title: 'Sanat Yolculuğu 59',
    emoji: '🔬',
    age: '8-12',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #59.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-60',
    title: 'Uyku Yolculuğu 60',
    emoji: '⭐',
    age: '3-5',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #60.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-61',
    title: 'Dostluk Yolculuğu 61',
    emoji: '🦊',
    age: '4-7',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #61.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-62',
    title: 'Doğa Yolculuğu 62',
    emoji: '🌙',
    age: '5-8',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #62.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-63',
    title: 'Uzay Yolculuğu 63',
    emoji: '🌊',
    age: '6-9',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #63.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-64',
    title: 'Okul Yolculuğu 64',
    emoji: '🚀',
    age: '7-10',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #64.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-65',
    title: 'Duygu Yolculuğu 65',
    emoji: '🌿',
    age: '8-12',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #65.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-66',
    title: 'Macera Yolculuğu 66',
    emoji: '🎈',
    age: '3-5',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #66.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-67',
    title: 'Hayvan Yolculuğu 67',
    emoji: '🐻',
    age: '4-7',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #67.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-68',
    title: 'Deniz Yolculuğu 68',
    emoji: '🦋',
    age: '5-8',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #68.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-69',
    title: 'Mevsim Yolculuğu 69',
    emoji: '🌈',
    age: '6-9',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #69.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-70',
    title: 'Cesaret Yolculuğu 70',
    emoji: '🐢',
    age: '7-10',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #70.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-71',
    title: 'Paylaşım Yolculuğu 71',
    emoji: '🦄',
    age: '8-12',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #71.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-72',
    title: 'Müzik Yolculuğu 72',
    emoji: '🐠',
    age: '3-5',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #72.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-73',
    title: 'Spor Yolculuğu 73',
    emoji: '🌻',
    age: '4-7',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #73.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-74',
    title: 'Sanat Yolculuğu 74',
    emoji: '🏰',
    age: '5-8',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #74.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-75',
    title: 'Uyku Yolculuğu 75',
    emoji: '🧠',
    age: '6-9',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #75.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-76',
    title: 'Dostluk Yolculuğu 76',
    emoji: '💛',
    age: '7-10',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #76.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-77',
    title: 'Doğa Yolculuğu 77',
    emoji: '🎵',
    age: '8-12',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #77.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-78',
    title: 'Uzay Yolculuğu 78',
    emoji: '🎨',
    age: '3-5',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #78.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-79',
    title: 'Okul Yolculuğu 79',
    emoji: '🔬',
    age: '4-7',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #79.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-80',
    title: 'Duygu Yolculuğu 80',
    emoji: '⭐',
    age: '5-8',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #80.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-81',
    title: 'Macera Yolculuğu 81',
    emoji: '🦊',
    age: '6-9',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #81.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-82',
    title: 'Hayvan Yolculuğu 82',
    emoji: '🌙',
    age: '7-10',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #82.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-83',
    title: 'Deniz Yolculuğu 83',
    emoji: '🌊',
    age: '8-12',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #83.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-84',
    title: 'Mevsim Yolculuğu 84',
    emoji: '🚀',
    age: '3-5',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #84.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-85',
    title: 'Cesaret Yolculuğu 85',
    emoji: '🌿',
    age: '4-7',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #85.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-86',
    title: 'Paylaşım Yolculuğu 86',
    emoji: '🎈',
    age: '5-8',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #86.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-87',
    title: 'Müzik Yolculuğu 87',
    emoji: '🐻',
    age: '6-9',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #87.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-88',
    title: 'Spor Yolculuğu 88',
    emoji: '🦋',
    age: '7-10',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #88.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-89',
    title: 'Sanat Yolculuğu 89',
    emoji: '🌈',
    age: '8-12',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #89.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-90',
    title: 'Uyku Yolculuğu 90',
    emoji: '🐢',
    age: '3-5',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #90.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-91',
    title: 'Dostluk Yolculuğu 91',
    emoji: '🦄',
    age: '4-7',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #91.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-92',
    title: 'Doğa Yolculuğu 92',
    emoji: '🐠',
    age: '5-8',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #92.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-93',
    title: 'Uzay Yolculuğu 93',
    emoji: '🌻',
    age: '6-9',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #93.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-94',
    title: 'Okul Yolculuğu 94',
    emoji: '🏰',
    age: '7-10',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #94.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-95',
    title: 'Duygu Yolculuğu 95',
    emoji: '🧠',
    age: '8-12',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #95.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-96',
    title: 'Macera Yolculuğu 96',
    emoji: '💛',
    age: '3-5',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #96.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-97',
    title: 'Hayvan Yolculuğu 97',
    emoji: '🎵',
    age: '4-7',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #97.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-98',
    title: 'Deniz Yolculuğu 98',
    emoji: '🎨',
    age: '5-8',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #98.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-99',
    title: 'Mevsim Yolculuğu 99',
    emoji: '🔬',
    age: '6-9',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #99.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-100',
    title: 'Cesaret Yolculuğu 100',
    emoji: '⭐',
    age: '7-10',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #100.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-101',
    title: 'Paylaşım Yolculuğu 101',
    emoji: '🦊',
    age: '8-12',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #101.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-102',
    title: 'Müzik Yolculuğu 102',
    emoji: '🌙',
    age: '3-5',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #102.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-103',
    title: 'Spor Yolculuğu 103',
    emoji: '🌊',
    age: '4-7',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #103.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-104',
    title: 'Sanat Yolculuğu 104',
    emoji: '🚀',
    age: '5-8',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #104.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-105',
    title: 'Uyku Yolculuğu 105',
    emoji: '🌿',
    age: '6-9',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #105.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-106',
    title: 'Dostluk Yolculuğu 106',
    emoji: '🎈',
    age: '7-10',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #106.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-107',
    title: 'Doğa Yolculuğu 107',
    emoji: '🐻',
    age: '8-12',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #107.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-108',
    title: 'Uzay Yolculuğu 108',
    emoji: '🦋',
    age: '3-5',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #108.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-109',
    title: 'Okul Yolculuğu 109',
    emoji: '🌈',
    age: '4-7',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #109.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-110',
    title: 'Duygu Yolculuğu 110',
    emoji: '🐢',
    age: '5-8',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #110.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-111',
    title: 'Macera Yolculuğu 111',
    emoji: '🦄',
    age: '6-9',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #111.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-112',
    title: 'Hayvan Yolculuğu 112',
    emoji: '🐠',
    age: '7-10',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #112.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-113',
    title: 'Deniz Yolculuğu 113',
    emoji: '🌻',
    age: '8-12',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #113.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-114',
    title: 'Mevsim Yolculuğu 114',
    emoji: '🏰',
    age: '3-5',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #114.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-115',
    title: 'Cesaret Yolculuğu 115',
    emoji: '🧠',
    age: '4-7',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #115.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-116',
    title: 'Paylaşım Yolculuğu 116',
    emoji: '💛',
    age: '5-8',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #116.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-117',
    title: 'Müzik Yolculuğu 117',
    emoji: '🎵',
    age: '6-9',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #117.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-118',
    title: 'Spor Yolculuğu 118',
    emoji: '🎨',
    age: '7-10',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #118.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-119',
    title: 'Sanat Yolculuğu 119',
    emoji: '🔬',
    age: '8-12',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #119.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-120',
    title: 'Uyku Yolculuğu 120',
    emoji: '⭐',
    age: '3-5',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #120.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-121',
    title: 'Dostluk Yolculuğu 121',
    emoji: '🦊',
    age: '4-7',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #121.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-122',
    title: 'Doğa Yolculuğu 122',
    emoji: '🌙',
    age: '5-8',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #122.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-123',
    title: 'Uzay Yolculuğu 123',
    emoji: '🌊',
    age: '6-9',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #123.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-124',
    title: 'Okul Yolculuğu 124',
    emoji: '🚀',
    age: '7-10',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #124.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-125',
    title: 'Duygu Yolculuğu 125',
    emoji: '🌿',
    age: '8-12',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #125.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-126',
    title: 'Macera Yolculuğu 126',
    emoji: '🎈',
    age: '3-5',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #126.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-127',
    title: 'Hayvan Yolculuğu 127',
    emoji: '🐻',
    age: '4-7',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #127.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-128',
    title: 'Deniz Yolculuğu 128',
    emoji: '🦋',
    age: '5-8',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #128.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-129',
    title: 'Mevsim Yolculuğu 129',
    emoji: '🌈',
    age: '6-9',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #129.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-130',
    title: 'Cesaret Yolculuğu 130',
    emoji: '🐢',
    age: '7-10',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #130.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-131',
    title: 'Paylaşım Yolculuğu 131',
    emoji: '🦄',
    age: '8-12',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #131.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-132',
    title: 'Müzik Yolculuğu 132',
    emoji: '🐠',
    age: '3-5',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #132.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-133',
    title: 'Spor Yolculuğu 133',
    emoji: '🌻',
    age: '4-7',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #133.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-134',
    title: 'Sanat Yolculuğu 134',
    emoji: '🏰',
    age: '5-8',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #134.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-135',
    title: 'Uyku Yolculuğu 135',
    emoji: '🧠',
    age: '6-9',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #135.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-136',
    title: 'Dostluk Yolculuğu 136',
    emoji: '💛',
    age: '7-10',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #136.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-137',
    title: 'Doğa Yolculuğu 137',
    emoji: '🎵',
    age: '8-12',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #137.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-138',
    title: 'Uzay Yolculuğu 138',
    emoji: '🎨',
    age: '3-5',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #138.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-139',
    title: 'Okul Yolculuğu 139',
    emoji: '🔬',
    age: '4-7',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #139.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-140',
    title: 'Duygu Yolculuğu 140',
    emoji: '⭐',
    age: '5-8',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #140.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-141',
    title: 'Macera Yolculuğu 141',
    emoji: '🦊',
    age: '6-9',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #141.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-142',
    title: 'Hayvan Yolculuğu 142',
    emoji: '🌙',
    age: '7-10',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #142.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-143',
    title: 'Deniz Yolculuğu 143',
    emoji: '🌊',
    age: '8-12',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #143.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-144',
    title: 'Mevsim Yolculuğu 144',
    emoji: '🚀',
    age: '3-5',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #144.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-145',
    title: 'Cesaret Yolculuğu 145',
    emoji: '🌿',
    age: '4-7',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #145.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-146',
    title: 'Paylaşım Yolculuğu 146',
    emoji: '🎈',
    age: '5-8',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #146.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-147',
    title: 'Müzik Yolculuğu 147',
    emoji: '🐻',
    age: '6-9',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #147.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-148',
    title: 'Spor Yolculuğu 148',
    emoji: '🦋',
    age: '7-10',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #148.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-149',
    title: 'Sanat Yolculuğu 149',
    emoji: '🌈',
    age: '8-12',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #149.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-150',
    title: 'Uyku Yolculuğu 150',
    emoji: '🐢',
    age: '3-5',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #150.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-151',
    title: 'Dostluk Yolculuğu 151',
    emoji: '🦄',
    age: '4-7',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #151.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-152',
    title: 'Doğa Yolculuğu 152',
    emoji: '🐠',
    age: '5-8',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #152.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-153',
    title: 'Uzay Yolculuğu 153',
    emoji: '🌻',
    age: '6-9',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #153.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-154',
    title: 'Okul Yolculuğu 154',
    emoji: '🏰',
    age: '7-10',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #154.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-155',
    title: 'Duygu Yolculuğu 155',
    emoji: '🧠',
    age: '8-12',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #155.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-156',
    title: 'Macera Yolculuğu 156',
    emoji: '💛',
    age: '3-5',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #156.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-157',
    title: 'Hayvan Yolculuğu 157',
    emoji: '🎵',
    age: '4-7',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #157.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-158',
    title: 'Deniz Yolculuğu 158',
    emoji: '🎨',
    age: '5-8',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #158.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-159',
    title: 'Mevsim Yolculuğu 159',
    emoji: '🔬',
    age: '6-9',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #159.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-160',
    title: 'Cesaret Yolculuğu 160',
    emoji: '⭐',
    age: '7-10',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #160.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-161',
    title: 'Paylaşım Yolculuğu 161',
    emoji: '🦊',
    age: '8-12',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #161.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-162',
    title: 'Müzik Yolculuğu 162',
    emoji: '🌙',
    age: '3-5',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #162.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-163',
    title: 'Spor Yolculuğu 163',
    emoji: '🌊',
    age: '4-7',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #163.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-164',
    title: 'Sanat Yolculuğu 164',
    emoji: '🚀',
    age: '5-8',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #164.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-165',
    title: 'Uyku Yolculuğu 165',
    emoji: '🌿',
    age: '6-9',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #165.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-166',
    title: 'Dostluk Yolculuğu 166',
    emoji: '🎈',
    age: '7-10',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #166.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-167',
    title: 'Doğa Yolculuğu 167',
    emoji: '🐻',
    age: '8-12',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #167.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-168',
    title: 'Uzay Yolculuğu 168',
    emoji: '🦋',
    age: '3-5',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #168.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-169',
    title: 'Okul Yolculuğu 169',
    emoji: '🌈',
    age: '4-7',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #169.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-170',
    title: 'Duygu Yolculuğu 170',
    emoji: '🐢',
    age: '5-8',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #170.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-171',
    title: 'Macera Yolculuğu 171',
    emoji: '🦄',
    age: '6-9',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #171.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-172',
    title: 'Hayvan Yolculuğu 172',
    emoji: '🐠',
    age: '7-10',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #172.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-173',
    title: 'Deniz Yolculuğu 173',
    emoji: '🌻',
    age: '8-12',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #173.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-174',
    title: 'Mevsim Yolculuğu 174',
    emoji: '🏰',
    age: '3-5',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #174.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-175',
    title: 'Cesaret Yolculuğu 175',
    emoji: '🧠',
    age: '4-7',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #175.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-176',
    title: 'Paylaşım Yolculuğu 176',
    emoji: '💛',
    age: '5-8',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #176.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-177',
    title: 'Müzik Yolculuğu 177',
    emoji: '🎵',
    age: '6-9',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #177.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-178',
    title: 'Spor Yolculuğu 178',
    emoji: '🎨',
    age: '7-10',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #178.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-179',
    title: 'Sanat Yolculuğu 179',
    emoji: '🔬',
    age: '8-12',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #179.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-180',
    title: 'Uyku Yolculuğu 180',
    emoji: '⭐',
    age: '3-5',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #180.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-181',
    title: 'Dostluk Yolculuğu 181',
    emoji: '🦊',
    age: '4-7',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #181.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-182',
    title: 'Doğa Yolculuğu 182',
    emoji: '🌙',
    age: '5-8',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #182.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-183',
    title: 'Uzay Yolculuğu 183',
    emoji: '🌊',
    age: '6-9',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #183.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-184',
    title: 'Okul Yolculuğu 184',
    emoji: '🚀',
    age: '7-10',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #184.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-185',
    title: 'Duygu Yolculuğu 185',
    emoji: '🌿',
    age: '8-12',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #185.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-186',
    title: 'Macera Yolculuğu 186',
    emoji: '🎈',
    age: '3-5',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #186.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-187',
    title: 'Hayvan Yolculuğu 187',
    emoji: '🐻',
    age: '4-7',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #187.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-188',
    title: 'Deniz Yolculuğu 188',
    emoji: '🦋',
    age: '5-8',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #188.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-189',
    title: 'Mevsim Yolculuğu 189',
    emoji: '🌈',
    age: '6-9',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #189.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-190',
    title: 'Cesaret Yolculuğu 190',
    emoji: '🐢',
    age: '7-10',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #190.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-191',
    title: 'Paylaşım Yolculuğu 191',
    emoji: '🦄',
    age: '8-12',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #191.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-192',
    title: 'Müzik Yolculuğu 192',
    emoji: '🐠',
    age: '3-5',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #192.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-193',
    title: 'Spor Yolculuğu 193',
    emoji: '🌻',
    age: '4-7',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #193.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-194',
    title: 'Sanat Yolculuğu 194',
    emoji: '🏰',
    age: '5-8',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #194.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-195',
    title: 'Uyku Yolculuğu 195',
    emoji: '🧠',
    age: '6-9',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #195.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-196',
    title: 'Dostluk Yolculuğu 196',
    emoji: '💛',
    age: '7-10',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #196.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-197',
    title: 'Doğa Yolculuğu 197',
    emoji: '🎵',
    age: '8-12',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #197.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-198',
    title: 'Uzay Yolculuğu 198',
    emoji: '🎨',
    age: '3-5',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #198.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-199',
    title: 'Okul Yolculuğu 199',
    emoji: '🔬',
    age: '4-7',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #199.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-200',
    title: 'Duygu Yolculuğu 200',
    emoji: '⭐',
    age: '5-8',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #200.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-201',
    title: 'Macera Yolculuğu 201',
    emoji: '🦊',
    age: '6-9',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #201.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-202',
    title: 'Hayvan Yolculuğu 202',
    emoji: '🌙',
    age: '7-10',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #202.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-203',
    title: 'Deniz Yolculuğu 203',
    emoji: '🌊',
    age: '8-12',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #203.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-204',
    title: 'Mevsim Yolculuğu 204',
    emoji: '🚀',
    age: '3-5',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #204.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-205',
    title: 'Cesaret Yolculuğu 205',
    emoji: '🌿',
    age: '4-7',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #205.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-206',
    title: 'Paylaşım Yolculuğu 206',
    emoji: '🎈',
    age: '5-8',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #206.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-207',
    title: 'Müzik Yolculuğu 207',
    emoji: '🐻',
    age: '6-9',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #207.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-208',
    title: 'Spor Yolculuğu 208',
    emoji: '🦋',
    age: '7-10',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #208.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-209',
    title: 'Sanat Yolculuğu 209',
    emoji: '🌈',
    age: '8-12',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #209.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-210',
    title: 'Uyku Yolculuğu 210',
    emoji: '🐢',
    age: '3-5',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #210.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-211',
    title: 'Dostluk Yolculuğu 211',
    emoji: '🦄',
    age: '4-7',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #211.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-212',
    title: 'Doğa Yolculuğu 212',
    emoji: '🐠',
    age: '5-8',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #212.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-213',
    title: 'Uzay Yolculuğu 213',
    emoji: '🌻',
    age: '6-9',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #213.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-214',
    title: 'Okul Yolculuğu 214',
    emoji: '🏰',
    age: '7-10',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #214.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-215',
    title: 'Duygu Yolculuğu 215',
    emoji: '🧠',
    age: '8-12',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #215.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-216',
    title: 'Macera Yolculuğu 216',
    emoji: '💛',
    age: '3-5',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #216.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-217',
    title: 'Hayvan Yolculuğu 217',
    emoji: '🎵',
    age: '4-7',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #217.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-218',
    title: 'Deniz Yolculuğu 218',
    emoji: '🎨',
    age: '5-8',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #218.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-219',
    title: 'Mevsim Yolculuğu 219',
    emoji: '🔬',
    age: '6-9',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #219.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-220',
    title: 'Cesaret Yolculuğu 220',
    emoji: '⭐',
    age: '7-10',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #220.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-221',
    title: 'Paylaşım Yolculuğu 221',
    emoji: '🦊',
    age: '8-12',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #221.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-222',
    title: 'Müzik Yolculuğu 222',
    emoji: '🌙',
    age: '3-5',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #222.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-223',
    title: 'Spor Yolculuğu 223',
    emoji: '🌊',
    age: '4-7',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #223.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-224',
    title: 'Sanat Yolculuğu 224',
    emoji: '🚀',
    age: '5-8',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #224.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-225',
    title: 'Uyku Yolculuğu 225',
    emoji: '🌿',
    age: '6-9',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #225.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-226',
    title: 'Dostluk Yolculuğu 226',
    emoji: '🎈',
    age: '7-10',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #226.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-227',
    title: 'Doğa Yolculuğu 227',
    emoji: '🐻',
    age: '8-12',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #227.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-228',
    title: 'Uzay Yolculuğu 228',
    emoji: '🦋',
    age: '3-5',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #228.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-229',
    title: 'Okul Yolculuğu 229',
    emoji: '🌈',
    age: '4-7',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #229.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-230',
    title: 'Duygu Yolculuğu 230',
    emoji: '🐢',
    age: '5-8',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #230.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-231',
    title: 'Macera Yolculuğu 231',
    emoji: '🦄',
    age: '6-9',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #231.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-232',
    title: 'Hayvan Yolculuğu 232',
    emoji: '🐠',
    age: '7-10',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #232.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-233',
    title: 'Deniz Yolculuğu 233',
    emoji: '🌻',
    age: '8-12',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #233.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-234',
    title: 'Mevsim Yolculuğu 234',
    emoji: '🏰',
    age: '3-5',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #234.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-235',
    title: 'Cesaret Yolculuğu 235',
    emoji: '🧠',
    age: '4-7',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #235.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-236',
    title: 'Paylaşım Yolculuğu 236',
    emoji: '💛',
    age: '5-8',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #236.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-237',
    title: 'Müzik Yolculuğu 237',
    emoji: '🎵',
    age: '6-9',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #237.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-238',
    title: 'Spor Yolculuğu 238',
    emoji: '🎨',
    age: '7-10',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #238.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-239',
    title: 'Sanat Yolculuğu 239',
    emoji: '🔬',
    age: '8-12',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #239.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-240',
    title: 'Uyku Yolculuğu 240',
    emoji: '⭐',
    age: '3-5',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #240.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-241',
    title: 'Dostluk Yolculuğu 241',
    emoji: '🦊',
    age: '4-7',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #241.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-242',
    title: 'Doğa Yolculuğu 242',
    emoji: '🌙',
    age: '5-8',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #242.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-243',
    title: 'Uzay Yolculuğu 243',
    emoji: '🌊',
    age: '6-9',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #243.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-244',
    title: 'Okul Yolculuğu 244',
    emoji: '🚀',
    age: '7-10',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #244.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-245',
    title: 'Duygu Yolculuğu 245',
    emoji: '🌿',
    age: '8-12',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #245.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-246',
    title: 'Macera Yolculuğu 246',
    emoji: '🎈',
    age: '3-5',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #246.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-247',
    title: 'Hayvan Yolculuğu 247',
    emoji: '🐻',
    age: '4-7',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #247.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-248',
    title: 'Deniz Yolculuğu 248',
    emoji: '🦋',
    age: '5-8',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #248.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-249',
    title: 'Mevsim Yolculuğu 249',
    emoji: '🌈',
    age: '6-9',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #249.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-250',
    title: 'Cesaret Yolculuğu 250',
    emoji: '🐢',
    age: '7-10',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #250.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-251',
    title: 'Paylaşım Yolculuğu 251',
    emoji: '🦄',
    age: '8-12',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #251.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-252',
    title: 'Müzik Yolculuğu 252',
    emoji: '🐠',
    age: '3-5',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #252.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-253',
    title: 'Spor Yolculuğu 253',
    emoji: '🌻',
    age: '4-7',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #253.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-254',
    title: 'Sanat Yolculuğu 254',
    emoji: '🏰',
    age: '5-8',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #254.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-255',
    title: 'Uyku Yolculuğu 255',
    emoji: '🧠',
    age: '6-9',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #255.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-256',
    title: 'Dostluk Yolculuğu 256',
    emoji: '💛',
    age: '7-10',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #256.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-257',
    title: 'Doğa Yolculuğu 257',
    emoji: '🎵',
    age: '8-12',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #257.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-258',
    title: 'Uzay Yolculuğu 258',
    emoji: '🎨',
    age: '3-5',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #258.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-259',
    title: 'Okul Yolculuğu 259',
    emoji: '🔬',
    age: '4-7',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #259.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-260',
    title: 'Duygu Yolculuğu 260',
    emoji: '⭐',
    age: '5-8',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #260.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-261',
    title: 'Macera Yolculuğu 261',
    emoji: '🦊',
    age: '6-9',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #261.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-262',
    title: 'Hayvan Yolculuğu 262',
    emoji: '🌙',
    age: '7-10',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #262.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-263',
    title: 'Deniz Yolculuğu 263',
    emoji: '🌊',
    age: '8-12',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #263.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-264',
    title: 'Mevsim Yolculuğu 264',
    emoji: '🚀',
    age: '3-5',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #264.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-265',
    title: 'Cesaret Yolculuğu 265',
    emoji: '🌿',
    age: '4-7',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #265.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-266',
    title: 'Paylaşım Yolculuğu 266',
    emoji: '🎈',
    age: '5-8',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #266.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-267',
    title: 'Müzik Yolculuğu 267',
    emoji: '🐻',
    age: '6-9',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #267.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-268',
    title: 'Spor Yolculuğu 268',
    emoji: '🦋',
    age: '7-10',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #268.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-269',
    title: 'Sanat Yolculuğu 269',
    emoji: '🌈',
    age: '8-12',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #269.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-270',
    title: 'Uyku Yolculuğu 270',
    emoji: '🐢',
    age: '3-5',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #270.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-271',
    title: 'Dostluk Yolculuğu 271',
    emoji: '🦄',
    age: '4-7',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #271.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-272',
    title: 'Doğa Yolculuğu 272',
    emoji: '🐠',
    age: '5-8',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #272.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-273',
    title: 'Uzay Yolculuğu 273',
    emoji: '🌻',
    age: '6-9',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #273.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-274',
    title: 'Okul Yolculuğu 274',
    emoji: '🏰',
    age: '7-10',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #274.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-275',
    title: 'Duygu Yolculuğu 275',
    emoji: '🧠',
    age: '8-12',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #275.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-276',
    title: 'Macera Yolculuğu 276',
    emoji: '💛',
    age: '3-5',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #276.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-277',
    title: 'Hayvan Yolculuğu 277',
    emoji: '🎵',
    age: '4-7',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #277.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-278',
    title: 'Deniz Yolculuğu 278',
    emoji: '🎨',
    age: '5-8',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #278.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-279',
    title: 'Mevsim Yolculuğu 279',
    emoji: '🔬',
    age: '6-9',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #279.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-280',
    title: 'Cesaret Yolculuğu 280',
    emoji: '⭐',
    age: '7-10',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #280.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-281',
    title: 'Paylaşım Yolculuğu 281',
    emoji: '🦊',
    age: '8-12',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #281.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-282',
    title: 'Müzik Yolculuğu 282',
    emoji: '🌙',
    age: '3-5',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #282.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-283',
    title: 'Spor Yolculuğu 283',
    emoji: '🌊',
    age: '4-7',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #283.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-284',
    title: 'Sanat Yolculuğu 284',
    emoji: '🚀',
    age: '5-8',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #284.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-285',
    title: 'Uyku Yolculuğu 285',
    emoji: '🌿',
    age: '6-9',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #285.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-286',
    title: 'Dostluk Yolculuğu 286',
    emoji: '🎈',
    age: '7-10',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #286.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-287',
    title: 'Doğa Yolculuğu 287',
    emoji: '🐻',
    age: '8-12',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #287.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-288',
    title: 'Uzay Yolculuğu 288',
    emoji: '🦋',
    age: '3-5',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #288.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-289',
    title: 'Okul Yolculuğu 289',
    emoji: '🌈',
    age: '4-7',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #289.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-290',
    title: 'Duygu Yolculuğu 290',
    emoji: '🐢',
    age: '5-8',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #290.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-291',
    title: 'Macera Yolculuğu 291',
    emoji: '🦄',
    age: '6-9',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #291.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-292',
    title: 'Hayvan Yolculuğu 292',
    emoji: '🐠',
    age: '7-10',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #292.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-293',
    title: 'Deniz Yolculuğu 293',
    emoji: '🌻',
    age: '8-12',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #293.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-294',
    title: 'Mevsim Yolculuğu 294',
    emoji: '🏰',
    age: '3-5',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #294.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-295',
    title: 'Cesaret Yolculuğu 295',
    emoji: '🧠',
    age: '4-7',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #295.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-296',
    title: 'Paylaşım Yolculuğu 296',
    emoji: '💛',
    age: '5-8',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #296.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-297',
    title: 'Müzik Yolculuğu 297',
    emoji: '🎵',
    age: '6-9',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #297.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-298',
    title: 'Spor Yolculuğu 298',
    emoji: '🎨',
    age: '7-10',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #298.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-299',
    title: 'Sanat Yolculuğu 299',
    emoji: '🔬',
    age: '8-12',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #299.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-300',
    title: 'Uyku Yolculuğu 300',
    emoji: '⭐',
    age: '3-5',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #300.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-301',
    title: 'Dostluk Yolculuğu 301',
    emoji: '🦊',
    age: '4-7',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #301.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-302',
    title: 'Doğa Yolculuğu 302',
    emoji: '🌙',
    age: '5-8',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #302.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-303',
    title: 'Uzay Yolculuğu 303',
    emoji: '🌊',
    age: '6-9',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #303.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-304',
    title: 'Okul Yolculuğu 304',
    emoji: '🚀',
    age: '7-10',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #304.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-305',
    title: 'Duygu Yolculuğu 305',
    emoji: '🌿',
    age: '8-12',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #305.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-306',
    title: 'Macera Yolculuğu 306',
    emoji: '🎈',
    age: '3-5',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #306.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-307',
    title: 'Hayvan Yolculuğu 307',
    emoji: '🐻',
    age: '4-7',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #307.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-308',
    title: 'Deniz Yolculuğu 308',
    emoji: '🦋',
    age: '5-8',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #308.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-309',
    title: 'Mevsim Yolculuğu 309',
    emoji: '🌈',
    age: '6-9',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #309.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-310',
    title: 'Cesaret Yolculuğu 310',
    emoji: '🐢',
    age: '7-10',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #310.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-311',
    title: 'Paylaşım Yolculuğu 311',
    emoji: '🦄',
    age: '8-12',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #311.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-312',
    title: 'Müzik Yolculuğu 312',
    emoji: '🐠',
    age: '3-5',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #312.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-313',
    title: 'Spor Yolculuğu 313',
    emoji: '🌻',
    age: '4-7',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #313.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-314',
    title: 'Sanat Yolculuğu 314',
    emoji: '🏰',
    age: '5-8',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #314.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-315',
    title: 'Uyku Yolculuğu 315',
    emoji: '🧠',
    age: '6-9',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #315.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-316',
    title: 'Dostluk Yolculuğu 316',
    emoji: '💛',
    age: '7-10',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #316.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-317',
    title: 'Doğa Yolculuğu 317',
    emoji: '🎵',
    age: '8-12',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #317.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-318',
    title: 'Uzay Yolculuğu 318',
    emoji: '🎨',
    age: '3-5',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #318.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-319',
    title: 'Okul Yolculuğu 319',
    emoji: '🔬',
    age: '4-7',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #319.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-320',
    title: 'Duygu Yolculuğu 320',
    emoji: '⭐',
    age: '5-8',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #320.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-321',
    title: 'Macera Yolculuğu 321',
    emoji: '🦊',
    age: '6-9',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #321.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-322',
    title: 'Hayvan Yolculuğu 322',
    emoji: '🌙',
    age: '7-10',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #322.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-323',
    title: 'Deniz Yolculuğu 323',
    emoji: '🌊',
    age: '8-12',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #323.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-324',
    title: 'Mevsim Yolculuğu 324',
    emoji: '🚀',
    age: '3-5',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #324.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-325',
    title: 'Cesaret Yolculuğu 325',
    emoji: '🌿',
    age: '4-7',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #325.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-326',
    title: 'Paylaşım Yolculuğu 326',
    emoji: '🎈',
    age: '5-8',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #326.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-327',
    title: 'Müzik Yolculuğu 327',
    emoji: '🐻',
    age: '6-9',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #327.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-328',
    title: 'Spor Yolculuğu 328',
    emoji: '🦋',
    age: '7-10',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #328.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-329',
    title: 'Sanat Yolculuğu 329',
    emoji: '🌈',
    age: '8-12',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #329.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-330',
    title: 'Uyku Yolculuğu 330',
    emoji: '🐢',
    age: '3-5',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #330.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-331',
    title: 'Dostluk Yolculuğu 331',
    emoji: '🦄',
    age: '4-7',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #331.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-332',
    title: 'Doğa Yolculuğu 332',
    emoji: '🐠',
    age: '5-8',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #332.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-333',
    title: 'Uzay Yolculuğu 333',
    emoji: '🌻',
    age: '6-9',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #333.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-334',
    title: 'Okul Yolculuğu 334',
    emoji: '🏰',
    age: '7-10',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #334.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-335',
    title: 'Duygu Yolculuğu 335',
    emoji: '🧠',
    age: '8-12',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #335.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-336',
    title: 'Macera Yolculuğu 336',
    emoji: '💛',
    age: '3-5',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #336.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-337',
    title: 'Hayvan Yolculuğu 337',
    emoji: '🎵',
    age: '4-7',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #337.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-338',
    title: 'Deniz Yolculuğu 338',
    emoji: '🎨',
    age: '5-8',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #338.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-339',
    title: 'Mevsim Yolculuğu 339',
    emoji: '🔬',
    age: '6-9',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #339.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-340',
    title: 'Cesaret Yolculuğu 340',
    emoji: '⭐',
    age: '7-10',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #340.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-341',
    title: 'Paylaşım Yolculuğu 341',
    emoji: '🦊',
    age: '8-12',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #341.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-342',
    title: 'Müzik Yolculuğu 342',
    emoji: '🌙',
    age: '3-5',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #342.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-343',
    title: 'Spor Yolculuğu 343',
    emoji: '🌊',
    age: '4-7',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #343.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-344',
    title: 'Sanat Yolculuğu 344',
    emoji: '🚀',
    age: '5-8',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #344.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-345',
    title: 'Uyku Yolculuğu 345',
    emoji: '🌿',
    age: '6-9',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #345.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-346',
    title: 'Dostluk Yolculuğu 346',
    emoji: '🎈',
    age: '7-10',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #346.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-347',
    title: 'Doğa Yolculuğu 347',
    emoji: '🐻',
    age: '8-12',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #347.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-348',
    title: 'Uzay Yolculuğu 348',
    emoji: '🦋',
    age: '3-5',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #348.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-349',
    title: 'Okul Yolculuğu 349',
    emoji: '🌈',
    age: '4-7',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #349.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-350',
    title: 'Duygu Yolculuğu 350',
    emoji: '🐢',
    age: '5-8',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #350.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-351',
    title: 'Macera Yolculuğu 351',
    emoji: '🦄',
    age: '6-9',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #351.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-352',
    title: 'Hayvan Yolculuğu 352',
    emoji: '🐠',
    age: '7-10',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #352.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-353',
    title: 'Deniz Yolculuğu 353',
    emoji: '🌻',
    age: '8-12',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #353.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-354',
    title: 'Mevsim Yolculuğu 354',
    emoji: '🏰',
    age: '3-5',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #354.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-355',
    title: 'Cesaret Yolculuğu 355',
    emoji: '🧠',
    age: '4-7',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #355.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-356',
    title: 'Paylaşım Yolculuğu 356',
    emoji: '💛',
    age: '5-8',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #356.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-357',
    title: 'Müzik Yolculuğu 357',
    emoji: '🎵',
    age: '6-9',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #357.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-358',
    title: 'Spor Yolculuğu 358',
    emoji: '🎨',
    age: '7-10',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #358.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-359',
    title: 'Sanat Yolculuğu 359',
    emoji: '🔬',
    age: '8-12',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #359.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-360',
    title: 'Uyku Yolculuğu 360',
    emoji: '⭐',
    age: '3-5',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #360.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-361',
    title: 'Dostluk Yolculuğu 361',
    emoji: '🦊',
    age: '4-7',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #361.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-362',
    title: 'Doğa Yolculuğu 362',
    emoji: '🌙',
    age: '5-8',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #362.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-363',
    title: 'Uzay Yolculuğu 363',
    emoji: '🌊',
    age: '6-9',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #363.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-364',
    title: 'Okul Yolculuğu 364',
    emoji: '🚀',
    age: '7-10',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #364.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-365',
    title: 'Duygu Yolculuğu 365',
    emoji: '🌿',
    age: '8-12',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #365.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-366',
    title: 'Macera Yolculuğu 366',
    emoji: '🎈',
    age: '3-5',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #366.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-367',
    title: 'Hayvan Yolculuğu 367',
    emoji: '🐻',
    age: '4-7',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #367.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-368',
    title: 'Deniz Yolculuğu 368',
    emoji: '🦋',
    age: '5-8',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #368.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-369',
    title: 'Mevsim Yolculuğu 369',
    emoji: '🌈',
    age: '6-9',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #369.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-370',
    title: 'Cesaret Yolculuğu 370',
    emoji: '🐢',
    age: '7-10',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #370.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-371',
    title: 'Paylaşım Yolculuğu 371',
    emoji: '🦄',
    age: '8-12',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #371.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-372',
    title: 'Müzik Yolculuğu 372',
    emoji: '🐠',
    age: '3-5',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #372.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-373',
    title: 'Spor Yolculuğu 373',
    emoji: '🌻',
    age: '4-7',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #373.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-374',
    title: 'Sanat Yolculuğu 374',
    emoji: '🏰',
    age: '5-8',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #374.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-375',
    title: 'Uyku Yolculuğu 375',
    emoji: '🧠',
    age: '6-9',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #375.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-376',
    title: 'Dostluk Yolculuğu 376',
    emoji: '💛',
    age: '7-10',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #376.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-377',
    title: 'Doğa Yolculuğu 377',
    emoji: '🎵',
    age: '8-12',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #377.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-378',
    title: 'Uzay Yolculuğu 378',
    emoji: '🎨',
    age: '3-5',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #378.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-379',
    title: 'Okul Yolculuğu 379',
    emoji: '🔬',
    age: '4-7',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #379.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-380',
    title: 'Duygu Yolculuğu 380',
    emoji: '⭐',
    age: '5-8',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #380.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-381',
    title: 'Macera Yolculuğu 381',
    emoji: '🦊',
    age: '6-9',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #381.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-382',
    title: 'Hayvan Yolculuğu 382',
    emoji: '🌙',
    age: '7-10',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #382.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-383',
    title: 'Deniz Yolculuğu 383',
    emoji: '🌊',
    age: '8-12',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #383.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-384',
    title: 'Mevsim Yolculuğu 384',
    emoji: '🚀',
    age: '3-5',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #384.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-385',
    title: 'Cesaret Yolculuğu 385',
    emoji: '🌿',
    age: '4-7',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #385.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-386',
    title: 'Paylaşım Yolculuğu 386',
    emoji: '🎈',
    age: '5-8',
    duration: '4 dk',
    theme: 'Paylaşım',
    summary: 'Paylaşım temalı mega portal masalı #386.',
    text: `Bir varmış bir yokmuş, paylaşım dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-387',
    title: 'Müzik Yolculuğu 387',
    emoji: '🐻',
    age: '6-9',
    duration: '5 dk',
    theme: 'Müzik',
    summary: 'Müzik temalı mega portal masalı #387.',
    text: `Bir varmış bir yokmuş, müzik dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-388',
    title: 'Spor Yolculuğu 388',
    emoji: '🦋',
    age: '7-10',
    duration: '6 dk',
    theme: 'Spor',
    summary: 'Spor temalı mega portal masalı #388.',
    text: `Bir varmış bir yokmuş, spor dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-389',
    title: 'Sanat Yolculuğu 389',
    emoji: '🌈',
    age: '8-12',
    duration: '7 dk',
    theme: 'Sanat',
    summary: 'Sanat temalı mega portal masalı #389.',
    text: `Bir varmış bir yokmuş, sanat dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-390',
    title: 'Uyku Yolculuğu 390',
    emoji: '🐢',
    age: '3-5',
    duration: '3 dk',
    theme: 'Uyku',
    summary: 'Uyku temalı mega portal masalı #390.',
    text: `Bir varmış bir yokmuş, uyku dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-391',
    title: 'Dostluk Yolculuğu 391',
    emoji: '🦄',
    age: '4-7',
    duration: '4 dk',
    theme: 'Dostluk',
    summary: 'Dostluk temalı mega portal masalı #391.',
    text: `Bir varmış bir yokmuş, dostluk dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-392',
    title: 'Doğa Yolculuğu 392',
    emoji: '🐠',
    age: '5-8',
    duration: '5 dk',
    theme: 'Doğa',
    summary: 'Doğa temalı mega portal masalı #392.',
    text: `Bir varmış bir yokmuş, doğa dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-393',
    title: 'Uzay Yolculuğu 393',
    emoji: '🌻',
    age: '6-9',
    duration: '6 dk',
    theme: 'Uzay',
    summary: 'Uzay temalı mega portal masalı #393.',
    text: `Bir varmış bir yokmuş, uzay dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-394',
    title: 'Okul Yolculuğu 394',
    emoji: '🏰',
    age: '7-10',
    duration: '7 dk',
    theme: 'Okul',
    summary: 'Okul temalı mega portal masalı #394.',
    text: `Bir varmış bir yokmuş, okul dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-395',
    title: 'Duygu Yolculuğu 395',
    emoji: '🧠',
    age: '8-12',
    duration: '3 dk',
    theme: 'Duygu',
    summary: 'Duygu temalı mega portal masalı #395.',
    text: `Bir varmış bir yokmuş, duygu dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-396',
    title: 'Macera Yolculuğu 396',
    emoji: '💛',
    age: '3-5',
    duration: '4 dk',
    theme: 'Macera',
    summary: 'Macera temalı mega portal masalı #396.',
    text: `Bir varmış bir yokmuş, macera dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-397',
    title: 'Hayvan Yolculuğu 397',
    emoji: '🎵',
    age: '4-7',
    duration: '5 dk',
    theme: 'Hayvan',
    summary: 'Hayvan temalı mega portal masalı #397.',
    text: `Bir varmış bir yokmuş, hayvan dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-398',
    title: 'Deniz Yolculuğu 398',
    emoji: '🎨',
    age: '5-8',
    duration: '6 dk',
    theme: 'Deniz',
    summary: 'Deniz temalı mega portal masalı #398.',
    text: `Bir varmış bir yokmuş, deniz dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-399',
    title: 'Mevsim Yolculuğu 399',
    emoji: '🔬',
    age: '6-9',
    duration: '7 dk',
    theme: 'Mevsim',
    summary: 'Mevsim temalı mega portal masalı #399.',
    text: `Bir varmış bir yokmuş, mevsim dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  },
  {
    id: 'mega-masal-400',
    title: 'Cesaret Yolculuğu 400',
    emoji: '⭐',
    age: '7-10',
    duration: '3 dk',
    theme: 'Cesaret',
    summary: 'Cesaret temalı mega portal masalı #400.',
    text: `Bir varmış bir yokmuş, cesaret dolu bir günde minik bir kahraman yola çıkmış.
Yolda bir dost bulmuş, birlikte küçük bir sorunu çözmüşler.
Sonunda herkes gülümsemiş. Sen de derin bir nefes al…`,
  }
]
