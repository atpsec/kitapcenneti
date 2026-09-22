import { useMemo } from 'react'
import type { PageId } from '../types/nav'
import { usePortalProfile } from '../hooks/usePortalProfile'
import { LEARNING_PATHS } from '../data/paths'
import { getDailyQuests } from '../data/quests'
import { showToast } from '../components/Toast'

const DAYS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']

const DEFAULT_SLOTS = [
  ['audio', 'feelings'],
  ['coloring', 'rhymes'],
  ['stem', 'activities'],
  ['create', 'quests'],
  ['heroes', 'fun'],
  ['printables', 'audio'],
  ['feelings', 'blog'],
]

interface Props {
  onNavigate: (page: PageId) => void
}

export function CalendarPage({ onNavigate }: Props) {
  const { profile, weekPlan, saveWeekPlan } = usePortalProfile()
  const path = LEARNING_PATHS.find((p) => p.age === profile.ageGroup) || LEARNING_PATHS[0]
  const quests = getDailyQuests()

  const plan = useMemo(() => {
    if (Object.keys(weekPlan).length) return weekPlan
    const generated: Record<string, string[]> = {}
    DAYS.forEach((d, i) => {
      generated[d] = DEFAULT_SLOTS[i]
    })
    return generated
  }, [weekPlan])

  const persistDefault = () => {
    saveWeekPlan(plan)
    showToast('Wochenplan gespeichert')
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>📅 Wöchentlicher Familienplan</h1>
        <p>
          Empfehlungen verteilt auf 7 Tage + heutige Aufgaben. Speichern Sie den Plan, wenn Sie möchten; Behalten Sie es auf Ihrem Gerät.
        </p>
      </header>

      <div className="btn-row" style={{ marginBottom: 16 }}>
        <button type="button" className="btn btn--primary" onClick={persistDefault}>
          Plan speichern
        </button>
        <button type="button" className="btn btn--ghost" onClick={() => onNavigate('paths')}>
          Yol: {path.emoji} {path.title}
        </button>
      </div>

      <div className="week-grid">
        {DAYS.map((day) => (
          <article key={day} className="panel week-day">
            <h3>{day}</h3>
            <ul>
              {(plan[day] || []).map((slot) => (
                <li key={`${day}-${slot}`}>
                  <button type="button" className="week-link" onClick={() => onNavigate(slot as PageId)}>
                    {slot}
                  </button>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="section">
        <h2 className="section__title">Die heutigen Aufgaben</h2>
        <div className="library-grid">
          {quests.map((q) => (
            <button key={q.id} type="button" className="library-card" onClick={() => onNavigate(q.link)}>
              <span className="library-card__emoji">{q.emoji}</span>
              <div>
                <strong>{q.title}</strong>
                <p>{q.hint}</p>
                <small>{q.stars}⭐ · ~{q.minutes} dk</small>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
