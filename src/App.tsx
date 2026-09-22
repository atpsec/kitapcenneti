import { lazy, Suspense, useEffect, useState } from 'react'
import { BackgroundDecorations } from './components/BackgroundDecorations'
import { PortalShell } from './components/PortalShell'
import { Footer } from './components/Footer'
import { CookieBanner } from './components/CookieBanner'
import { MascotBuddy } from './components/MascotBuddy'
import { AdSlot } from './components/AdSlot'
import { ToastHost } from './components/Toast'
import { ErrorBoundary } from './components/ErrorBoundary'
import { ALL_PAGES, type PageId } from './types/nav'
import { parseContentHash } from './utils/share'
import { adsAllowedOnPage } from './config/ads'
import { recordLastVisit } from './utils/lastVisit'
import { scheduleTick } from './components/ReminderPanel'
import { AccountSync } from './components/AccountSync'

const PortalHomePage = lazy(() =>
  import('./pages/PortalHomePage').then((m) => ({ default: m.PortalHomePage })),
)
const CreateStoryPage = lazy(() =>
  import('./pages/CreateStoryPage').then((m) => ({ default: m.CreateStoryPage })),
)
const AudioStoriesPage = lazy(() =>
  import('./pages/AudioStoriesPage').then((m) => ({ default: m.AudioStoriesPage })),
)
const ColoringPagesPage = lazy(() =>
  import('./pages/ColoringPagesPage').then((m) => ({ default: m.ColoringPagesPage })),
)
const HeroesPage = lazy(() => import('./pages/HeroesPage').then((m) => ({ default: m.HeroesPage })))
const ActivitiesPage = lazy(() =>
  import('./pages/ActivitiesPage').then((m) => ({ default: m.ActivitiesPage })),
)
const FunPage = lazy(() => import('./pages/FunPage').then((m) => ({ default: m.FunPage })))
const RhymesPage = lazy(() => import('./pages/RhymesPage').then((m) => ({ default: m.RhymesPage })))
const ParentsPage = lazy(() => import('./pages/ParentsPage').then((m) => ({ default: m.ParentsPage })))
const CertificatesPage = lazy(() =>
  import('./pages/CertificatesPage').then((m) => ({ default: m.CertificatesPage })),
)
const QuestsPage = lazy(() => import('./pages/QuestsPage').then((m) => ({ default: m.QuestsPage })))
const BlogPage = lazy(() => import('./pages/BlogPage').then((m) => ({ default: m.BlogPage })))
const StemPage = lazy(() => import('./pages/StemPage').then((m) => ({ default: m.StemPage })))
const FeelingsPage = lazy(() =>
  import('./pages/FeelingsPage').then((m) => ({ default: m.FeelingsPage })),
)
const PrintablesPage = lazy(() =>
  import('./pages/PrintablesPage').then((m) => ({ default: m.PrintablesPage })),
)
const LibraryPage = lazy(() => import('./pages/LibraryPage').then((m) => ({ default: m.LibraryPage })))
const PathsPage = lazy(() => import('./pages/PathsPage').then((m) => ({ default: m.PathsPage })))
const JournalPage = lazy(() => import('./pages/JournalPage').then((m) => ({ default: m.JournalPage })))
const CalendarPage = lazy(() =>
  import('./pages/CalendarPage').then((m) => ({ default: m.CalendarPage })),
)
const TeachersPage = lazy(() =>
  import('./pages/TeachersPage').then((m) => ({ default: m.TeachersPage })),
)
const ProfilePage = lazy(() => import('./pages/ProfilePage').then((m) => ({ default: m.ProfilePage })))
const DiscoverPage = lazy(() =>
  import('./pages/DiscoverPage').then((m) => ({ default: m.DiscoverPage })),
)
const WorldPage = lazy(() => import('./pages/WorldPage').then((m) => ({ default: m.WorldPage })))
const ShopPage = lazy(() => import('./pages/ShopPage').then((m) => ({ default: m.ShopPage })))
const SearchPage = lazy(() => import('./pages/SearchPage').then((m) => ({ default: m.SearchPage })))
const LivePage = lazy(() => import('./pages/LivePage').then((m) => ({ default: m.LivePage })))
const ClassroomPage = lazy(() =>
  import('./pages/ClassroomPage').then((m) => ({ default: m.ClassroomPage })),
)
const ChallengePage = lazy(() =>
  import('./pages/ChallengePage').then((m) => ({ default: m.ChallengePage })),
)
const PlaygroundPage = lazy(() =>
  import('./pages/PlaygroundPage').then((m) => ({ default: m.PlaygroundPage })),
)
const AboutPage = lazy(() => import('./pages/LegalPages').then((m) => ({ default: m.AboutPage })))
const ImpressumPage = lazy(() => import('./pages/LegalPages').then((m) => ({ default: m.ImpressumPage })))
const ContactPage = lazy(() => import('./pages/LegalPages').then((m) => ({ default: m.ContactPage })))
const MembershipPage = lazy(() => import('./pages/MembershipPage').then((m) => ({ default: m.MembershipPage })))
const PrivacyPage = lazy(() => import('./pages/LegalPages').then((m) => ({ default: m.PrivacyPage })))
const TermsPage = lazy(() => import('./pages/LegalPages').then((m) => ({ default: m.TermsPage })))

function readHash(): PageId {
  const { page } = parseContentHash(window.location.hash)
  if (!page || page === 'home') return 'portal'
  return ALL_PAGES.includes(page as PageId) ? (page as PageId) : 'portal'
}

function PageFallback() {
  return (
    <div className="page-loading" role="status" aria-live="polite">
      <div className="page-loading-orb" aria-hidden="true" />
      <p>Sayfa yükleniyor…</p>
    </div>
  )
}

function RoutedPage({
  page,
  navigate,
}: {
  page: PageId
  navigate: (next: PageId, itemId?: string) => void
}) {
  switch (page) {
    case 'portal':
    case 'home':
      return <PortalHomePage onNavigate={navigate} />
    case 'quests':
      return <QuestsPage onNavigate={navigate} />
    case 'create':
      return <CreateStoryPage />
    case 'audio':
      return <AudioStoriesPage onNavigate={navigate} />
    case 'coloring':
      return <ColoringPagesPage />
    case 'heroes':
      return <HeroesPage onNavigate={navigate} />
    case 'activities':
      return <ActivitiesPage />
    case 'fun':
      return <FunPage onNavigate={navigate} />
    case 'rhymes':
      return <RhymesPage />
    case 'stem':
      return <StemPage />
    case 'feelings':
      return <FeelingsPage />
    case 'blog':
      return <BlogPage />
    case 'printables':
      return <PrintablesPage onNavigate={navigate} />
    case 'certificates':
      return <CertificatesPage />
    case 'parents':
      return <ParentsPage />
    case 'library':
      return <LibraryPage onNavigate={navigate} />
    case 'paths':
      return <PathsPage onNavigate={navigate} />
    case 'journal':
      return <JournalPage />
    case 'calendar':
      return <CalendarPage onNavigate={navigate} />
    case 'teachers':
      return <TeachersPage />
    case 'classroom':
      return <ClassroomPage onNavigate={navigate} />
    case 'challenge':
      return <ChallengePage onNavigate={navigate} />
    case 'playground':
      return <PlaygroundPage onNavigate={navigate} />
    case 'profile':
      return <ProfilePage onNavigate={navigate} />
    case 'discover':
      return <DiscoverPage onNavigate={navigate} />
    case 'world':
      return <WorldPage onNavigate={navigate} />
    case 'shop':
      return <ShopPage onNavigate={navigate} />
    case 'search':
      return <SearchPage onNavigate={navigate} />
    case 'live':
      return <LivePage onNavigate={navigate} />
    case 'about':
      return <AboutPage />
    case 'impressum':
      return <ImpressumPage />
    case 'privacy':
      return <PrivacyPage />
    case 'terms':
      return <TermsPage />
    case 'contact':
      return <ContactPage />
    case 'membership':
      return <MembershipPage onNavigate={navigate} />
    default:
      return <PortalHomePage onNavigate={navigate} />
  }
}

export default function App() {
  const [page, setPage] = useState<PageId>(readHash)

  useEffect(() => {
    const onHash = () => setPage(readHash())
    window.addEventListener('hashchange', onHash)
    scheduleTick()
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    const { itemId } = parseContentHash(window.location.hash)
    recordLastVisit(page, itemId)
  }, [page])

  const navigate = (next: PageId, itemId?: string) => {
    const target = next === 'home' ? 'portal' : next
    window.location.hash = itemId
      ? `${target}/${encodeURIComponent(itemId)}`
      : target === 'portal'
        ? 'portal'
        : target
    setPage(target)
    recordLastVisit(target, itemId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const showAdRail = adsAllowedOnPage(page)

  return (
    <ErrorBoundary>
      <div className="app app--portal">
        <BackgroundDecorations />
        <PortalShell current={page} onNavigate={navigate}>
          <main className="main main--portal">
            <Suspense fallback={<PageFallback />}>
              <RoutedPage page={page} navigate={navigate} />
            </Suspense>
            {showAdRail && <AdSlot slot="bottom" className="ad-slot--footer-rail" />}
          </main>
        </PortalShell>
        <AccountSync />
        <Footer onNavigate={navigate} />
        <CookieBanner />
        <ToastHost />
        <MascotBuddy onNavigate={navigate} />
      </div>
    </ErrorBoundary>
  )
}
