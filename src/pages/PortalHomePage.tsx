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
import { PremiumGate } from '../components/PremiumGate'

interface Props {
  onNavigate: (page: PageId) => void
}

const KIDS_LAUNCHERS: { id: PageId; emoji: string; label: string; note: string; tone: string }[] = [
  { id: 'audio', emoji: '🎧', label: 'Geschichte hören', note: '3–8 Minuten', tone: 'cyan' },
  { id: 'playground', emoji: '🕹️', label: 'In die Arena', note: 'Kurze Spiele', tone: 'violet' },
  { id: 'coloring', emoji: '🖍️', label: 'Etwas malen', note: 'Kreative Pause', tone: 'amber' },
  { id: 'create', emoji: '✨', label: 'Geschichte erfinden', note: 'Mit deiner Idee', tone: 'coral' },
]

const FAMILY_TOOLS: { id: PageId; emoji: string; label: string; note: string }[] = [
  { id: 'calendar', emoji: '📅', label: 'Wochenplan', note: '7 Tage im Blick' },
  { id: 'paths', emoji: '🛤️', label: 'Lernwege', note: 'Altersgerecht lernen' },
  { id: 'journal', emoji: '📔', label: 'Tagebuch', note: 'Entwicklung sehen' },
  { id: 'teachers', emoji: '👩‍🏫', label: 'Lehrkräfte', note: String(TEACHER_RESOURCES.length) + ' Materialien' },
  { id: 'shop', emoji: '🎁', label: 'Kostenlose Pakete', note: String(SHOP_PACKS.length) + ' Pakete' },
  { id: 'blog', emoji: '📝', label: 'Familienblog', note: 'Kurze Ratgeber' },
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

  const greeting = profile.childName ? 'Hallo, ' + profile.childName + '.' : 'Hallo, Entdecker.'

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
            <div className="portal-hero__eyebrow"><span className="eyebrow-dot" /> Familienbereich · heute</div>
            <h1>Den Tag gemeinsam <em>gestalten.</em></h1>
            <p>Planung, Entdeckungen und kleine Erfolge für {profile.childName || 'Ihr Kind'} auf einen Blick.</p>
            <div className="portal-hero__actions">
              <button type="button" className="btn btn--primary" onClick={() => onNavigate('calendar')}>Woche planen <span>→</span></button>
              <button type="button" className="btn btn--ghost" onClick={() => onNavigate('journal')}>Tagebuch öffnen</button>
              <button type="button" className="btn btn--quiet" onClick={() => onNavigate('coloring')}>Zum Malen</button>
            </div>
            <div className="portal-hero__metrics">
              <span><strong>{stars}</strong> Sterne</span>
              <span><strong>{streak}</strong> Tage Serie</span>
              <span><strong>{todayProgress}%</strong> heute</span>
            </div>
          </div>
          <div
            className="portal-hero__visual"
            role="img"
            aria-label="Fuchs liest unter den Sternen"
            style={{ backgroundImage: 'linear-gradient(90deg, rgba(10, 32, 56, .46), transparent 50%), url(' + import.meta.env.BASE_URL + 'hero-germany-library.png)' }}
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
                <div><span className="section-kicker">Familien-Kurzwege</span><h2 className="section__title">Was braucht ihr heute?</h2></div>
                <span className="section-heading-note">Mit einem Klick öffnen</span>
              </div>
              <div className="launch-grid launch-grid--family">
                {FAMILY_TOOLS.map((item) => <LaunchCard key={item.id} item={item} onNavigate={onNavigate} />)}
              </div>
            </section>
          </div>
          <aside className="portal-home__rail">
            <div className="rail-card rail-card--path">
              <div className="rail-card__top"><span className="rail-card__icon">{path.emoji}</span><span className="rail-card__label">Empfohlener Weg</span></div>
              <h2>{path.title}</h2>
              <p>{path.summary}</p>
              <div className="rail-card__meta"><span>{path.age} Jahre</span><span>{path.weeks} Wochen</span><span>{path.steps.length} Schritte</span></div>
              <button type="button" className="text-link" onClick={() => onNavigate('paths')}>Weg ansehen <span>↗</span></button>
            </div>
            <ProgressHub compact onNavigate={onNavigate} />
            <div className="rail-card rail-card--quiet"><span className="rail-card__icon">🗺️</span><h2>Die Welt öffnet</h2><p>In {WORLD_REGIONS.length} Themenregionen wartet eine neue Entdeckung.</p><button type="button" className="text-link" onClick={() => onNavigate('world')}>Zur Karte <span>↗</span></button></div>
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
          <div className="portal-hero__eyebrow"><span className="eyebrow-dot" /> Deine Entdeckung für heute ist bereit</div>
          <h1>{greeting} <em>Warte, eine neue Seite.</em></h1>
          <p>Eine Geschichte, ein kurzes Spiel oder dein eigenes Märchen. Du entscheidest, wo du beginnst.</p>
          <div className="portal-hero__actions">
            <button type="button" className="btn btn--primary" onClick={() => onNavigate('audio')}>Geschichte des Tages <span>→</span></button>
            <button type="button" className="btn btn--ghost" onClick={() => onNavigate('coloring')}>Malvorlage wählen</button>
            <button type="button" className="btn btn--quiet" onClick={() => onNavigate('quests')}>Aufgabe des Tages</button>
          </div>
          <div className="portal-hero__metrics">
            <span><strong>{stars}</strong> Sterne</span>
            <span><strong>{streak}</strong> Tage Serie</span>
            <span><strong>{stickers.length}</strong> Sticker</span>
          </div>
        </div>
        <div
          className="portal-hero__visual"
          role="img"
          aria-label="Fuchs liest unter den Sternen"
          style={{ backgroundImage: 'linear-gradient(90deg, rgba(10, 32, 56, .46), transparent 50%), url(' + import.meta.env.BASE_URL + 'hero-germany-library.png)' }}
        >
          <div className="hero-visual__label"><span>{story.emoji}</span><div><small>Geschichte des Tages</small><strong>{story.title}</strong></div></div>
        </div>
      </section>
      <ModeBanner mode={mode} onSwitch={switchMode} />
      <InstallPrompt />
      <div className="portal-home__layout">
        <div className="portal-home__main-column">
          <ContinueCard onNavigate={onNavigate} />
          <section className="today-focus">
            <div className="today-focus__header"><div><span className="section-kicker">Jetzt starten</span><h2>Unsere Auswahl für heute</h2></div><span className="today-focus__count">{quests.length} Aufgaben bereit</span></div>
            <div className="today-focus__story">
              <div className="today-focus__story-art"><span>{story.emoji}</span></div>
              <div className="today-focus__story-copy"><span className="story-tag">{story.theme} · {story.duration}</span><h3>{story.title}</h3><p>{story.summary}</p><button type="button" className="text-link" onClick={() => onNavigate('audio')}>Geschichte öffnen <span>→</span></button></div>
            </div>
            <div className="today-focus__quest"><span className="quest-icon">{quests[0]?.emoji || '⭐'}</span><div><small>Nächste Mini-Aufgabe</small><strong>{quests[0]?.title || 'Wähle deine Entdeckung'}</strong></div><button type="button" className="btn btn--small" onClick={() => onNavigate('quests')}>Zu den Aufgaben</button></div>
          </section>
          <LivePulse onNavigate={onNavigate} />
          <SmartPicks ageGroup={profile.ageGroup} interests={profile.interests} onNavigate={onNavigate} />
          <section className="section">
            <div className="section-heading-row"><div><span className="section-kicker">Ein Klick</span><h2 className="section__title">Dein Entdeckungstisch</h2></div><span className="section-heading-note">Wähle, was dir gefällt</span></div>
            <div className="launch-grid">{KIDS_LAUNCHERS.map((item) => <LaunchCard key={item.id} item={item} onNavigate={onNavigate} />)}</div>
          </section>
        </div>
        <aside className="portal-home__rail">
          <ProgressHub compact onNavigate={onNavigate} />
          <div className="rail-card rail-card--pet"><div className="rail-card__top"><span className="rail-card__icon">🦊</span><span className="rail-card__label">Dein Portal-Freund</span></div><h2>Zeit für etwas Pflege</h2><p>Kümmere dich um deinen Freund und starte danach ein neues Spiel.</p><button type="button" className="text-link" onClick={() => document.querySelector('.pet-care')?.scrollIntoView({ behavior: 'smooth' })}>Zu meinem Freund <span>↓</span></button></div>
          <PremiumGate onNavigate={onNavigate} label="Kuratierte Auswahlen mit Familien+ freischalten">
            <div className="rail-card rail-card--collection"><div className="rail-card__top"><span className="rail-card__icon">🧭</span><span className="rail-card__label">Kuratierte Auswahl</span></div><h2>{COLLECTIONS[0]?.title || 'Neugier-Ecke'}</h2><p>{COLLECTIONS[0]?.description || 'Eine kleine Entdeckung für heute.'}</p><button type="button" className="text-link" onClick={() => onNavigate('discover')}>Auswahl öffnen <span>↗</span></button></div>
          </PremiumGate>
        </aside>
      </div>
      <section className="section portal-home__pet-section"><div className="section-heading-row"><div><span className="section-kicker">Langsam werden</span><h2 className="section__title">Dein Portal-Freund</h2></div><span className="section-heading-note">Sich gut fühlen ist auch Fortschritt</span></div><PetCare /></section>
    </div>
  )
}
