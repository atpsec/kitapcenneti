import { useEffect, useState } from 'react'
import { CalendarDays, Check, Download, LockKeyhole, ShieldCheck, Sparkles, Users } from 'lucide-react'
import type { PageId } from '../types/nav'
import { useMembership } from '../hooks/useMembership'
import { usePortalProfile } from '../hooks/usePortalProfile'

interface Props {
  onNavigate: (page: PageId) => void
}

const FREE_FEATURES = [
  'Her gün seçili masal, oyun ve görevler',
  'Bir çocuk profili',
  'Temel yıldız ve rozet takibi',
  'Seçili boyama ve STEM içerikleri',
]

const PLUS_FEATURES = [
  'Tüm masal, oyun ve etkinlik arşivi',
  '5 çocuk profiline kadar aile alanı',
  'Kişiye özel öğrenme yolları',
  'Aylık yazdırılabilir etkinlik paketleri',
  'Haftalık gelişim özeti ve aile planı',
  'Çevrimdışı sesli masal desteği',
]

export function MembershipPage({ onNavigate }: Props) {
  const { profile } = usePortalProfile()
  const { membership, isPlus, busy, checkout, refresh } = useMembership()
  const [billing, setBilling] = useState<'monthly' | 'annual'>('annual')
  const [email, setEmail] = useState(membership.email)

  useEffect(() => {
    if (membership.email && !email) setEmail(membership.email)
  }, [email, membership.email])

  useEffect(() => {
    void refresh()
  }, [refresh])

  return (
    <div className="page membership-page">
      <header className="membership-hero">
        <div>
          <span className="membership-eyebrow"><Sparkles size={15} /> Aile+ üyelik</span>
          <h1>Ailenin keşif alanını<br /><em>büyütün.</em></h1>
          <p>Kitap Cenneti’ni reklamsız, daha kişisel ve her hafta yeni içeriklerle kullanın.</p>
          <div className="membership-trust">
            <span><ShieldCheck size={16} /> Ebeveyn kontrolü</span>
            <span><LockKeyhole size={16} /> Güvenli ödeme</span>
            <span><Users size={16} /> 5 çocuk profili</span>
          </div>
        </div>
        <div className="membership-hero__orb" aria-hidden="true"><span>✦</span></div>
      </header>

      {isPlus && (
        <section className="membership-active">
          <div className="membership-active__icon"><Check size={22} /></div>
          <div>
            <span className="membership-eyebrow">Üyeliğiniz aktif</span>
            <h2>Aile+ ile keşif devam ediyor.</h2>
            <p>{membership.email || profile.childName || 'Aileniz'} için premium içerikler açık.</p>
          </div>
          <button type="button" className="btn btn--ghost" onClick={() => onNavigate('profile')}>Hesap ayarları</button>
        </section>
      )}

      <div className="membership-plans">
        <article className="membership-plan membership-plan--free">
          <div className="membership-plan__top"><span className="plan-symbol">○</span><div><span className="membership-eyebrow">Başlangıç</span><h2>Ücretsiz</h2></div></div>
          <p className="membership-plan__lead">Kitap Cenneti’ni deneyin, her gün küçük bir keşif yapın.</p>
          <ul className="membership-feature-list">
            {FREE_FEATURES.map((feature) => <li key={feature}><Check size={16} /> {feature}</li>)}
          </ul>
          <button type="button" className="btn btn--ghost membership-plan__button" onClick={() => onNavigate('portal')}>Keşfe devam et</button>
        </article>

        <article className="membership-plan membership-plan--plus">
          <div className="membership-plan__ribbon">Aileler için önerilen</div>
          <div className="membership-plan__top"><span className="plan-symbol plan-symbol--plus">✦</span><div><span className="membership-eyebrow">Tam erişim</span><h2>Aile+</h2></div></div>
          <p className="membership-plan__lead">Çocuğunuzun merakını destekleyen tüm araçlar tek aile alanında.</p>
          <div className="billing-toggle" role="group" aria-label="Ödeme periyodu">
            <button type="button" className={billing === 'monthly' ? 'is-active' : ''} onClick={() => setBilling('monthly')}>Aylık</button>
            <button type="button" className={billing === 'annual' ? 'is-active' : ''} onClick={() => setBilling('annual')}>Yıllık <span>avantajlı</span></button>
          </div>
          <ul className="membership-feature-list">
            {PLUS_FEATURES.map((feature) => <li key={feature}><Check size={16} /> {feature}</li>)}
          </ul>
          {!isPlus && (
            <div className="membership-checkout">
              <label htmlFor="membership-email">Ebeveyn e-postası</label>
              <input
                id="membership-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="siz@ornek.com"
              />
              <button type="button" className="btn btn--primary membership-plan__button" disabled={busy} onClick={() => void checkout(billing, email)}>
                {busy ? 'Bağlanıyor…' : 'Aile+ planını başlat'} <span>→</span>
              </button>
              <small>Çocuk profilleri ebeveyn alanından yönetilir. İptal işlemi dilediğiniz zaman yapılabilir.</small>
            </div>
          )}
          {isPlus && <button type="button" className="btn btn--primary membership-plan__button" onClick={() => onNavigate('profile')}>Aile alanını aç <span>→</span></button>}
        </article>
      </div>

      <section className="membership-value">
        <div className="section-heading-row"><div><span className="section-kicker">Aile+ ile neler değişir?</span><h2 className="section__title">Ekran süresi değil, iyi anlar birikir.</h2></div></div>
        <div className="membership-value__grid">
          <article><span><CalendarDays size={19} /></span><h3>Ritmi siz belirleyin</h3><p>Haftalık planı çocuğunuzun yaşına ve meraklarına göre şekillendirin.</p></article>
          <article><span><Download size={19} /></span><h3>Evde devam edin</h3><p>Yazdırılabilir paketleri indirin; masal ve etkinlikleri bağlantısız da açın.</p></article>
          <article><span><ShieldCheck size={19} /></span><h3>Güven sizde kalsın</h3><p>Yetişkin alanı PIN ile korunur, çocuk deneyimi sakin ve reklamsız kalır.</p></article>
        </div>
      </section>

      <section className="membership-faq">
        <div><span className="section-kicker">Kısa cevaplar</span><h2 className="section__title">Ailelerin merak ettikleri</h2></div>
        <details><summary>Ücretsiz kullanım devam edecek mi?</summary><p>Evet. Ücretsiz plan, her gün seçili içeriklerle kullanılmaya devam eder.</p></details>
        <details><summary>Birden fazla çocuk ekleyebilir miyim?</summary><p>Aile+ planında beş ayrı çocuk profili oluşturabilir, her birinin ilerlemesini ayrı takip edebilirsiniz.</p></details>
        <details><summary>Çocuklar ödeme bilgilerini görür mü?</summary><p>Hayır. Üyelik ve ödeme işlemleri yalnızca ebeveyn alanında görünür.</p></details>
      </section>
    </div>
  )
}
