import { useMemo, useState } from 'react'
import type { PageId } from '../types/nav'
import { TEACHER_RESOURCES } from '../data/teachers'
import { getDailyQuests } from '../data/quests'
import { printHtml } from '../utils/pdf'
import { escapeHtml } from '../utils/escapeHtml'
import { showToast } from '../components/Toast'
import { addJournalEntry } from '../hooks/usePortalProfile'

interface Props {
  onNavigate: (page: PageId) => void
}

const CLASS_KEY = 'kitapcenneti-classroom'

interface ClassroomState {
  code: string
  name: string
  assigned: string[]
}

function loadClass(): ClassroomState {
  try {
    return {
      code: '',
      name: 'Meine Klasse',
      assigned: [],
      ...JSON.parse(localStorage.getItem(CLASS_KEY) || '{}'),
    }
  } catch {
    return { code: '', name: 'Meine Klasse', assigned: [] }
  }
}

function makeClassCode() {
  return `SINIF-${Math.random().toString(36).slice(2, 6).toUpperCase()}`
}

export function ClassroomPage({ onNavigate }: Props) {
  const [room, setRoom] = useState<ClassroomState>(() => loadClass())
  const quests = getDailyQuests()
  const weekPlan = useMemo(() => {
    const days = ['Mo', 'Di', 'Mi', 'Do', 'Fr']
    return days.map((d, i) => {
      const res = TEACHER_RESOURCES[(i * 7) % TEACHER_RESOURCES.length]
      return { day: d, title: res.title, subject: res.subject, id: res.id }
    })
  }, [])

  const persist = (next: ClassroomState) => {
    setRoom(next)
    localStorage.setItem(CLASS_KEY, JSON.stringify(next))
  }

  const printWeek = () => {
    const body = `
      <h2>${escapeHtml(room.name)} — Wöchentlicher Klassenplan</h2>
      <p>Klassencode: <strong>${escapeHtml(room.code || '—')}</strong></p>
      <ol>
        ${weekPlan
          .map(
            (w) =>
              `<li><strong>${w.day}</strong> — ${escapeHtml(w.title)} <em>(${escapeHtml(w.subject)})</em></li>`,
          )
          .join('')}
      </ol>
      <h3>Aufgaben für die Klasse</h3>
      <ul>
        ${quests.map((q) => `<li>${escapeHtml(q.title)} (+${q.stars}⭐)</li>`).join('')}
      </ul>
    `
    printHtml('Wöchentlicher Klassenplan', body)
    showToast('Druck/PDF ist bereit')
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>🏫 Klassenzentrum</h1>
        <p>Klassencode, Gruppenaufgaben und Wochenplan – drucken und teilen Sie an einem Ort.</p>
      </header>

      <div className="panel journal-form">
        <label>
          Klassenname
          <input
            value={room.name}
            onChange={(e) => persist({ ...room, name: e.target.value })}
            maxLength={40}
          />
        </label>
        <div className="btn-row">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              const code = makeClassCode()
              persist({ ...room, code })
              void navigator.clipboard?.writeText(code)
              showToast(`Klassencode: ${code}`)
            }}
          >
            Klassencode generieren
          </button>
          {room.code && <strong className="class-code">{room.code}</strong>}
        </div>
      </div>

      <section className="section">
        <h2 className="section__title">Aufgaben für die Klasse (heute)</h2>
        <div className="live-slot-grid">
          {quests.map((q) => {
            const on = room.assigned.includes(q.id)
            return (
              <article key={q.id} className={`panel live-slot ${on ? 'is-done' : ''}`}>
                <strong>{q.title}</strong>
                <p>+{q.stars}⭐</p>
                <button
                  type="button"
                  className="btn btn--small btn--primary"
                  onClick={() => {
                    const assigned = on
                      ? room.assigned.filter((id) => id !== q.id)
                      : [...room.assigned, q.id]
                    persist({ ...room, assigned })
                    if (!on) {
                      addJournalEntry({
                        kind: 'ödev',
                        title: `Klassenaufgabe: ${q.title}`,
                        note: room.code || room.name,
                        stars: 0,
                      })
                    }
                    showToast(on ? 'Aufgabe entfernt' : 'Der Klasse zugewiesen')
                  }}
                >
                  {on ? 'Zugewiesen ✓' : 'Der Klasse zuweisen'}
                </button>
                <button
                  type="button"
                  className="btn btn--small btn--ghost"
                  onClick={() => onNavigate(q.link as PageId)}
                >
                  offen
                </button>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Wöchentlicher Unterrichtsplan</h2>
        <div className="week-grid">
          {weekPlan.map((w) => (
            <button
              key={w.day}
              type="button"
              className="portal-dash-card"
              onClick={() => onNavigate('teachers')}
            >
              <span>📅</span>
              <h2>{w.day}</h2>
              <p>{w.title}</p>
              <small>{w.subject}</small>
            </button>
          ))}
        </div>
        <div className="btn-row" style={{ marginTop: 16 }}>
          <button type="button" className="btn btn--primary" onClick={printWeek}>
            Wochenplan drucken
          </button>
          <button type="button" className="btn btn--ghost" onClick={() => onNavigate('teachers')}>
            Aktivitätsbibliothek
          </button>
        </div>
      </section>
    </div>
  )
}
