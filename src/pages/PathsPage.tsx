import type { PageId } from '../types/nav'
import { LEARNING_PATHS } from '../data/paths'
import { usePortalProfile } from '../hooks/usePortalProfile'
import { addJournalEntry } from '../hooks/usePortalProfile'
import { showToast } from '../components/Toast'
import { SocialShare } from '../components/SocialShare'
import { useContentItemId } from '../hooks/useContentItemId'

interface Props {
  onNavigate: (page: PageId) => void
}

export function PathsPage({ onNavigate }: Props) {
  const { profile } = usePortalProfile()
  const defaultPathId =
    LEARNING_PATHS.find((p) => p.age === profile.ageGroup)?.id || LEARNING_PATHS[0].id
  const [activeId, setActiveId] = useContentItemId('paths', defaultPathId)
  const path = LEARNING_PATHS.find((p) => p.id === activeId) || LEARNING_PATHS[0]

  return (
    <div className="page">
      <header className="page-header">
        <h1>🛤️ Möglichkeiten zum Lernen</h1>
        <p>
          {LEARNING_PATHS.length} altersgerechte Programme. Gehe Schritt für Schritt – jeder Schritt führt zu einem
          Portalbereich.
        </p>
      </header>

      <div className="path-list">
        {LEARNING_PATHS.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`path-pill ${activeId === p.id ? 'is-active' : ''}`}
            onClick={() => setActiveId(p.id)}
          >
            {p.emoji} {p.title}
            <small>{p.age}</small>
          </button>
        ))}
      </div>

      <article className="panel path-detail">
        <h2>
          {path.emoji} {path.title}
        </h2>
        <p>{path.summary}</p>
        <small>
          {path.weeks} Wochen · {path.steps.length} Schritte · {path.tags.join(' · ')}
        </small>
        <ol className="path-steps">
          {path.steps.map((step, i) => (
            <li key={`${step.title}-${i}`}>
              <div>
                <strong>
                  {i + 1}. {step.title}
                </strong>
                <p>{step.tip}</p>
                <small>~{step.minutes} Min.</small>
              </div>
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => {
                  addJournalEntry({
                    kind: 'path',
                    title: `${path.title}: ${step.title}`,
                    note: step.tip,
                    stars: 1,
                  })
                  showToast('Schritt ins Tagebuch übernommen')
                  onNavigate(step.page as PageId)
                }}
              >
                Starten →
              </button>
            </li>
          ))}
        </ol>
        <SocialShare
          payload={{
            title: `${path.emoji} ${path.title}`,
            text: `${path.summary} (${path.weeks} Wochen, ${path.steps.length} Schritte)`,
            page: 'paths',
            itemId: path.id,
            hashtags: ['KitapCenneti', 'Lernen', path.age.replace(/\s+/g, '')],
          }}
        />
      </article>
    </div>
  )
}
