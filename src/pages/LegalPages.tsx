import { AdSlot } from '../components/AdSlot'
import { LEGAL_DETAILS, LEGAL_DETAILS_READY } from '../config/legal'

export function AboutPage() {
  return (
    <div className="page legal-page">
      <header className="page-header">
        <h1>ℹ️ Hakkımızda</h1>
      </header>
      <div className="panel prose">
        <p>
          <strong>Kitap Cenneti</strong>, çocuklar ve aileler için ücretsiz bir içerik platformudur.
          Sesli masallar, boyama PDF’leri, özgün kahramanlar, STEM kartları, duygu köşesi,
          günlük görevler ve ebeveyn blog yazıları sunar.
        </p>
        <p>
          Amacımız: güvenli, telifsiz ve eğlenceli içerikle her gün kısa ama anlamlı vakit geçirmek.
          Abonelik zorunlu değildir; temel özellikler herkese açıktır.
        </p>
        <p>
          Platform, sürdürülebilirlik için Google AdSense gibi reklam modelleriyle desteklenebilir.
          Reklamlar özellikle ebeveyn içeriklerinde gösterilir; çocuk güvenliği politikalarına uygun
          yerleştirme hedeflenir.
        </p>
        <h3>İletişim</h3>
        <p>Öneri ve işbirliği için <a href="#contact">İletişim</a> sayfasını kullanın.</p>
      </div>
      <AdSlot slot="bottom" />
    </div>
  )
}

export function ImpressumPage() {
  return (
    <div className="page legal-page">
      <header className="page-header">
        <h1>Impressum</h1>
        <p>Angaben nach § 5 DDG</p>
      </header>
      <div className="panel prose">
        <p><strong>{LEGAL_DETAILS.company}</strong></p>
        <p>{LEGAL_DETAILS.address}</p>
        <p>Vertreten durch: {LEGAL_DETAILS.representative}</p>
        <p>Register: {LEGAL_DETAILS.register}</p>
        <p>USt-IdNr.: {LEGAL_DETAILS.vatId}</p>
        <p>E-Mail: <a href={LEGAL_DETAILS.email.startsWith('[') ? undefined : `mailto:${LEGAL_DETAILS.email}`}>{LEGAL_DETAILS.email}</a></p>
        {!LEGAL_DETAILS_READY && <p className="notice notice--warning">Şirket bilgileri yayınlanmadan önce Cloudflare Pages production değişkenleriyle doldurulmalıdır.</p>}
      </div>
    </div>
  )
}

export function PrivacyPage() {
  return (
    <div className="page legal-page">
      <header className="page-header">
        <h1>🔒 Gizlilik Politikası</h1>
        <p>Son güncelleme: 22 Eylül 2026</p>
      </header>
      <div className="panel prose">
        <h3>1. Toplanan veriler</h3>
        <p>
          Çoğu özellik tarayıcınızda çalışır. Hesap oluşturmadan kullanılan günlük görevler, yıldızlar
          ve kayıtlı hikayeler <strong>localStorage</strong> ile cihazınızda saklanır. Ebeveyn hesabına
          giriş yaptığınızda hesap e-postası, çocuk profilleri ve seçtiğiniz ilerleme özeti cihazlarınız
          arasında senkronlanmak üzere güvenli sunucuya aktarılır.
        </p>
        <h3>2. Yapay zeka hikaye</h3>
        <p>
          AI hikaye oluştururken girdiğiniz isim/prompt, hikaye üretimi için ilgili API uçlarına
          iletilebilir. Gereksiz kişisel veri girmemenizi öneririz.
        </p>
        <h3>3. Çerezler ve reklamlar</h3>
        <p>
          Site, deneyimi iyileştirmek ve (onay sonrası) Google AdSense reklamları göstermek için
          çerez kullanabilir. AdSense kendi gizlilik politikasına tabidir:
          {' '}<a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">Google Ads</a>.
        </p>
        <h3>4. Üyelik ve ödeme</h3>
        <p>
          Aile+ satın alımında ödeme bilgileri Kitap Cenneti sunucularında tutulmaz; Stripe tarafından
          işlenir. Üyelik durumu, plan ve dönem bilgisi premium özellikleri açmak için saklanır.
          Hesabınızı veya üyeliğinizi kaldırma talebinizi iletişim sayfasından iletebilirsiniz.
        </p>
        <h3>5. Veri işleyenler ve aktarım</h3>
        <p>
          Hesap ve abonelik işlemlerinde Cloudflare D1/Pages, Stripe ve yapılandırılmış e-posta veya AI
          sağlayıcıları kullanılabilir. Güncel sağlayıcı listesi, işleme amaçları, saklama süreleri ve
          üçüncü ülke aktarım güvenceleri production gizlilik metninde açıkça belirtilmelidir.
        </p>
        <h3>6. Çocuklar</h3>
        <p>
          Platform aile kullanımı içindir. 13 yaş altı çocukların ebeveyn gözetiminde kullanması önerilir.
          Çocuklardan bilinçli olarak kişisel bilgi toplanmaz.
        </p>
        <h3>7. İletişim</h3>
        <p>Gizlilik talepleri için <a href="#contact">İletişim</a> sayfasındaki e-posta adresini kullanın.</p>
      </div>
    </div>
  )
}

export function TermsPage() {
  return (
    <div className="page legal-page">
      <header className="page-header">
        <h1>📜 Kullanım Koşulları</h1>
      </header>
      <div className="panel prose">
        <p>Kitap Cenneti’ni kullanarak bu koşulları kabul etmiş sayılırsınız.</p>
        <ul className="tip-list">
          <li>İçerikler eğitim ve eğlence amaçlıdır; tıbbi/psikolojik tavsiye değildir.</li>
          <li>Özgün kahramanlar ve üretilen çıktılar kişisel/eğitimde serbestçe kullanılabilir.</li>
          <li>Ticari yeniden satış veya marka taklidi yapılamaz.</li>
          <li>Site “olduğu gibi” sunulur; kesintisiz hizmet garantisi verilmez.</li>
          <li>Kötüye kullanım, yasalara aykırı içerik üretimi yasaktır.</li>
        </ul>
        <h3>Aile+ aboneliği</h3>
        <p>
          Aile+ aboneliği seçilen dönemde otomatik yenilenir. Güncel fiyat, vergi bilgisi, dönem,
          ödeme yöntemi, cayma hakkı ve iptal koşulları ödeme öncesinde açıkça gösterilir. Kullanıcı
          aboneliğini hesap alanındaki iptal düğmesinden yönetebilir.
        </p>
        <h3>Widerruf ve dijital içerik</h3>
        <p>
          Tüketici hakları ve dijital içeriğin hemen başlatılması için gereken açık onay ayrı bir
          Widerrufsbelehrung ve onay akışıyla sunulur. Bu metinler Almanya hukuk danışmanı tarafından
          yayına alınmadan önce gözden geçirilmelidir.
        </p>
        <p>Koşullar güncellenebilir; önemli değişiklikler bu sayfada yayınlanır.</p>
      </div>
    </div>
  )
}

export function ContactPage() {
  return (
    <div className="page legal-page">
      <header className="page-header">
        <h1>✉️ İletişim</h1>
        <p>Öneri, hata bildirimi veya işbirliği için yazın.</p>
      </header>
      <div className="panel prose">
        <p>
          E-posta:{' '}
          <a href={LEGAL_DETAILS.email.startsWith('[') ? undefined : `mailto:${LEGAL_DETAILS.email}`}>{LEGAL_DETAILS.email}</a>
        </p>
        <p>
          GitHub:{' '}
          <a href="https://github.com/atpsec/kitapcenneti" target="_blank" rel="noreferrer">
            atpsec/kitapcenneti
          </a>
        </p>
        <p>Reklam / AdSense işbirliği notlarınızı e-posta konu satırına “AdSense” yazarak gönderin.</p>
      </div>
      <AdSlot slot="bottom" />
    </div>
  )
}
