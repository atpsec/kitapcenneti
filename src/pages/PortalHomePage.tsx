import { useState } from 'react'
import type { PageId } from '../types/nav'
import { ModeBanner } from '../components/PortalShell'
import { ProgressHub } from '../components/ProgressHub'
import { usePortalProfile } from '../hooks/usePortalProfile'
import { useProgress } from '../hooks/useProgress'
import { LEARNING_PATHS } from '../data/paths'
import { COLLECTIONS } from '../data/collections'
import { WORLD_REGIONS } from '../data/world'
import { SHOP_PACKS } from '../data/shop'
import { TEACHER_RESOURCES } from '../data/teachers'
import { getDailyQuests } from '../data/quests'
import { factoryStory, hashSeed, dayKey } from '../engines/contentFactory'
import { LivePulse } from '../components/LivePulse'
import { ContinueCard } from '../components/ContinueCard'
import { SmartPicks } from '../components/SmartPicks'
import { WeeklySummary } from '../components/WeeklySummary'
import { InstallPrompt } from '../components/InstallPrompt'
import { ReminderPanel } from '../components/ReminderPanel'
import { FamilyLockModal } from '../components/FamilyLockModal'
import { PetCare } from '../components/PetCare'

interface Props {
  onNavigate: (page: PageId) => void
}

const KIDS_LAUNCHERS: { id: PageId; emoji: string; label: string; note: string; tone: string }[] = [
  { id: 'audio', emoji: '🎧', label: 'Masal dinle', note: '3–8 dakika', tone: 'cyan' },
  { id: 'playground', emoji: '🕹️', label: 'Arenaya gir', note: 'Hızlı oyunlar', tone: 'violet' },
  { id: 'coloring', emoji: '🖍️', label: 'Bir şey boya', note: 'Yaratıcı mola', tone: 'amber' },
  { id: 'create', emoji: '✨', label: 'Hikaye kur', note: 'Senin fikrinle', tone: 'coral' },
]

const FAMILY_TOOLS: { id: PageId; emoji: string; label: string; note: string }[] = [
  { id: 'calendar', emoji: '📅', label: 'Haftalık plan', note: '7 güne bak' },
  { id: 'paths', emoji: '🛤️', label: 'Öğrenme yolları', note: 'Yaşa göre ilerle' },
  { id: 'journal', emoji: '📔', label: 'Günlük', note: 'Gelişimi gör' },
  { id: 'teachers', emoji: '👩‍🏫', label: 'Öğretmen', note: String(TEACHER_RESOURCES.length) + ' kaynak' },
  { id: 'shop', emoji: '🎁', label: 'Ücretsiz paketler', note: String(SHOP_PACKS.length) + ' paket' },
  { id: 'blog', emoji: '📝', label: 'Aile blogu', note: 'Kısa rehberler' },
]

function LaunchCard({
  item,
  onNavigate,
}: {
  item: { id: PageId; emoji: string; label: string; note: string; tone?: string }
  onNavigate: (page: PageId) => void
}) {
  return (
    <button
      type="button"
      className={'launch-card ' + (item.tone ? 'launch-card--' + item.tone : '')}
      onClick={() => onNavigate(item.id)}
    >
      <span className="launch-card__emoji" aria-hidden="true">{item.emoji}</span>
      <span className="launch-card__copy">
        <strong>{item.label}</strong>
        <small>{item.note}</small>
      </span>
      <span className="launch-card__arrow" aria-hidden="true">↗</span>
    </button>
  )
}

export function PortalHomePage({ onNavigate }: Props) {
  const { mode, setMode, profile, pinEnabled, checkFamilyPin } = usePortalProfile()
  const { stars, streak, stickers, todayProgress } = useProgress()
  const [lockOpen, setLockOpen] = useState(false)
  const quests = getDailyQuests()
  const path = LEARNING_PATHS.find((p) => p.age === profile.ageGroup) || LEARNING_PATHS[0]
  const story = factoryStory(hashSeed(dayKey(), 'home-feature'))

  const switchMode = (nextMode: typeof mode) => {
    if (nextMode === 'parent' && mode !== 'parent' && pinEnabled) {
      setLockOpen(true)
      return
    }
    setMode(nextMode)
  }

  const greeting = profile.childName ? 'Merhaba, ' + profile.childName + '.' : 'Merhaba, kaşif.'

  if (mode === 'parent') {
    return (
      <div className="page portal-home portal-home--parent">
        <FamilyLockModal
          open={lockOpen}
          onClose={() => setLockOpen(false)}
          checkPin={checkFamilyPin}
          onUnlock={() => {
            setLockOpen(false)
            setMode('parent')
          }}
        />
        <section className="portal-hero portal-hero--parent">
          <div className="portal-hero__copy">
            <div className="portal-hero__eyebrow"><span className="eyebrow-dot" /> Aile paneli · bugün</div>
            <h1>Günü birlikte<br /><em>büyütün.</em></h1>
            <p>{profile.childName || 'Çocuğunuz'} için plan, keşif ve küçük kazanımlar tek bakışta.</p>
            <div className="portal-hero__actions">
              <button type="button" className="btn btn--primary" onClick={() => onNavigate('calendar')}>Haftayı planla <span>→</span></button>
              <button type="button" className="btn btn--ghost" onClick={() => onNavigate('journal')}>Günlüğü aç</button>
            </div>
            <div className="portal-hero__metrics">
              <span><strong>{stars}</strong> yıldız</span>
              <span><strong>{streak}</strong> günlük seri</span>
              <span><strong>{todayProgress}%</strong> bugün</span>
            </div>
          </div>
          <div
            className="portal-hero__visual"
            role="img"
            aria-label="Yıldızların altında kitap okuyan tilki"
            style={{ backgroundImage: 'linear-gradient(90deg, rgba(10, 32, 56, .46), transparent 50%), url(' + import.meta.env.BASE_URL + 'hero-observatory.png)' }}
          />
        </section>
        <ModeBanner mode={mode} onSwitch={switchMode} />
        <InstallPrompt />
        <div className="portal-home__layout">
          <div className="portal-home__main-column">
            <WeeklySummary />
            <ReminderPanel />
            <LivePulse onNavigate={onNavigate} />
            <section className="section">
              <div className="section-heading-row">
                <div><span className="section-kicker">Ailenin kısayolları</span><h2 className="section__title">Bugün neye ihtiyacınız var?</h2></div>
                <span className="section-heading-note">Tek dokunuşla aç</span>
              </div>
              <div className="launch-grid launch-grid--family">
                {FAMILY_TOOLS.map((item) => <LaunchCard key={item.id} item={item} onNavigate={onNavigate} />)}
              </div>
            </section>
          </div>
          <aside className="portal-home__rail">
            <div className="rail-card rail-card--path">
              <div className="rail-card__top"><span className="rail-card__icon">{path.emoji}</span><span className="rail-card__label">Önerilen yol</span></div>
              <h2>{path.title}</h2>
              <p>{path.summary}</p>
              <div className="rail-card__meta"><span>{path.age} yaş</span><span>{path.weeks} hafta</span><span>{path.steps.length} adım</span></div>
              <button type="button" className="text-link" onClick={() => onNavigate('paths')}>Yolu incele <span>↗</span></button>
            </div>
            <ProgressHub compact onNavigate={onNavigate} />
            <div className="rail-card rail-card--quiet"><span className="rail-card__icon">🗺️</span><h2>Dünyayı açın</h2><p>{WORLD_REGIONS.length} temalı bölgede yeni bir merak noktası var.</p><button type="button" className="text-link" onClick={() => onNavigate('world')}>Haritaya git <span>↗</span></button></div>
          </aside>
        </div>
      </div>
    )
  }

  return (
    <div className="page portal-home portal-home--kids">
      <FamilyLockModal
        open={lockOpen}
        onClose={() => setLockOpen(false)}
        checkPin={checkFamilyPin}
        onUnlock={() => {
          setLockOpen(false)
          setMode('parent')
        }}
      />
      <section className="portal-hero">
        <div className="portal-hero__copy">
          <div className="portal-hero__eyebrow"><span className="eyebrow-dot" /> Bugünün keşfi hazır</div>
          <h1>{greeting}<br /><em>yeni bir sayfa aç.</em></h1>
          <p>Bir masal, küçük bir oyun ya da kendi hikayen. Nereden başlayacağını sen seç.</p>
          <div className="portal-hero__actions">
            <button type="button" className="btn btn--primary" onClick={() => onNavigate('audio')}>Günün masalını aç <span>→</span></button>
            <button type="button" className="btn btn--ghost" onClick={() => onNavigate('playground')}>Arenaya git</button>
          </div>
          <div className="portal-hero__metrics">
            <span><strong>{stars}</strong> yıldız</span>
            <span><strong>{streak}</strong> günlük seri</span>
            <span><strong>{stickers.length}</strong> sticker</span>
          </div>
        </div>
        <div
          className="portal-hero__visual"
          role="img"
          aria-label="Yıldızların altında kitap okuyan tilki"
          style={{ backgroundImage: 'linear-gradient(90deg, rgba(10, 32, 56, .46), transparent 50%), url(' + import.meta.env.BASE_URL + 'hero-observatory.png)' }}
        >
          <div className="hero-visual__label"><span>{story.emoji}</span><div><small>Günün masalı</small><strong>{story.title}</strong></div></div>
        </div>
      </section>
      <ModeBanner mode={mode} onSwitch={switchMode} />
      <InstallPrompt />
      <div className="portal-home__layout">
        <div className="portal-home__main-column">
          <ContinueCard onNavigate={onNavigate} />
          <section className="today-focus">
            <div className="today-focus__header"><div><span className="section-kicker">Şimdi başla</span><h2>Bugün için seçtiklerimiz</h2></div><span className="today-focus__count">{quests.length} görev hazır</span></div>
            <div className="today-focus__story">
              <div className="today-focus__story-art"><span>{story.emoji}</span></div>
              <div className="today-focus__story-copy"><span className="story-tag">{story.theme} · {story.duration}</span><h3>{story.title}</h3><p>{story.summary}</p><button type="button" className="text-link" onClick={() => onNavigate('audio')}>Masalı aç <span>→</span></button></div>
            </div>
            <div className="today-focus__quest"><span className="quest-icon">{quests[0]?.emoji || '⭐'}</span><div><small>Sıradaki mini görev</small><strong>{quests[0]?.title || 'Kendi keşfini seç'}</strong></div><button type="button" className="btn btn--small" onClick={() => onNavigate('quests')}>Görevlere git</button></div>
          </section>
          <LivePulse onNavigate={onNavigate} />
          <SmartPicks ageGroup={profile.ageGroup} interests={profile.interests} onNavigate={onNavigate} />
          <section className="section">
            <div className="section-heading-row"><div><span className="section-kicker">Tek dokunuş</span><h2 className="section__title">Keşif masan</h2></div><span className="section-heading-note">İstediğini seç</span></div>
            <div className="launch-grid">{KIDS_LAUNCHERS.map((item) => <LaunchCard key={item.id} item={item} onNavigate={onNavigate} />)}</div>
          </section>
        </div>
        <aside className="portal-home__rail">
          <ProgressHub compact onNavigate={onNavigate} />
          <div className="rail-card rail-card--pet"><div className="rail-card__top"><span className="rail-card__icon">🦊</span><span className="rail-card__label">Portal dostun</span></div><h2>Biraz bakım zamanı</h2><p>Dostunla ilgilen, sonra yeni bir oyuna geç.</p><button type="button" className="text-link" onClick={() => document.querySelector('.pet-care')?.scrollIntoView({ behavior: 'smooth' })}>Dostuma git <span>↓</span></button></div>
          <div className="rail-card rail-card--collection"><div className="rail-card__top"><span className="rail-card__icon">🧭</span><span className="rail-card__label">Küratör seçkisi</span></div><h2>{COLLECTIONS[0]?.title || 'Merak köşesi'}</h2><p>{COLLECTIONS[0]?.description || 'Bugün için küçük bir keşif.'}</p><button type="button" className="text-link" onClick={() => onNavigate('discover')}>Seçkiyi aç <span>↗</span></button></div>
        </aside>
      </div>
      <section className="section portal-home__pet-section"><div className="section-heading-row"><div><span className="section-kicker">Yavaşla</span><h2 className="section__title">Portal dostun</h2></div><span className="section-heading-note">İyi hissetmek de ilerlemedir</span></div><PetCare /></section>
    </div>
  )
}
