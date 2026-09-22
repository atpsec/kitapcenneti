import type { PageId } from '../types/nav'
import { AdSlot } from '../components/AdSlot'
import { ProgressHub } from '../components/ProgressHub'
import { useDailyQuests } from '../hooks/useDailyQuests'
import { downloadQuestChecklistPdf } from '../utils/pdf'
import { announceActivityResult } from '../components/Toast'
import { completeActivity } from '../hooks/useProgress'
import { SocialShare } from '../components/SocialShare'

interface QuestsPageProps {
  onNavigate: (page: PageId) => void
}

export function QuestsPage({ onNavigate }: QuestsPageProps) {
  const { quests, done, stars, streak, progress, toggle, isDone } = useDailyQuests()
  const todayKey = new Date().toISOString().slice(0, 10)
  const questSummary = quests.map((q) => `${q.emoji} ${q.title}`).join(' · ')

  return (
    <div className="page">
      <header className="page-header">
        <h1>⭐ Tägliche Aufgaben</h1>
        <p>
          Hier können Sie Aufgaben markieren – aber auch eine Geschichte anhören, ein Spiel beenden oder eine Malvorlage herunterladen
          Außerdem wird die Aufgabe automatisch erledigt.
        </p>
      </header>

      <ProgressHub compact />

      <div className="quest-stats">
        <div className="quest-stat"><strong>{stars}</strong><span>Gesamtzahl der Sterne</span></div>
        <div className="quest-stat"><strong>{streak}🔥</strong><span>Tage in Folge</span></div>
        <div className="quest-stat"><strong>{done.length}/{quests.length}</strong><span>heute</span></div>
      </div>

      <div className="loading-progress" style={{ maxWidth: '100%', marginBottom: 20 }}>
        <div className="loading-progress__bar" style={{ width: `${progress}%` }} />
      </div>

      <div className="btn-row" style={{ marginBottom: 16 }}>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => {
            downloadQuestChecklistPdf(quests)
            announceActivityResult(completeActivity('print'))
          }}
        >
          🖨️ Laden Sie die heutige Liste als PDF herunter
        </button>
      </div>

      <SocialShare
        payload={{
          title: '⭐ Aufgaben für heute',
          text: `${done.length}/${quests.length} erledigt · ${questSummary}`,
          page: 'quests',
          itemId: todayKey,
          hashtags: ['KitapCenneti', 'Aufgabe', 'Kinder'],
        }}
      />

      <div className="quest-list">
        {quests.map((q) => (
          <article key={q.id} className={`quest-card ${isDone(q.id) ? 'is-done' : ''}`}>
            <span className="quest-card__emoji">{q.emoji}</span>
            <div className="quest-card__body">
              <h3>{q.title}</h3>
              <p>{q.hint}</p>
              <small>{q.area} · ~{q.minutes} Min. · {q.stars}⭐</small>
            </div>
            <div className="quest-card__actions">
              <button className="btn btn--ghost" onClick={() => onNavigate(q.link)}>Öffnen</button>
              <button className="btn btn--primary" onClick={() => toggle(q)}>
                {isDone(q.id) ? '↩️ Rückgängig' : '✓ Erledigt'}
              </button>
            </div>
          </article>
        ))}
      </div>

      {progress === 100 && (
        <div className="win-banner">
          🎉 Alle Aufgaben für heute sind erledigt! Wie wäre es mit dem Herunterladen eines Zertifikats?
          <div className="btn-row" style={{ justifyContent: 'center' }}>
            <button className="btn btn--primary" onClick={() => onNavigate('certificates')}>
              🏆 Lassen Sie sich zertifizieren
            </button>
          </div>
        </div>
      )}

      <AdSlot slot="bottom" />
    </div>
  )
}
