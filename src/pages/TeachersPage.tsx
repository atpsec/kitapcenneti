import { useMemo, useState } from 'react'
import { TEACHER_RESOURCES } from '../data/teachers'
import { addJournalEntry } from '../hooks/usePortalProfile'
import { showToast } from '../components/Toast'
import { printHtml } from '../utils/pdf'
import { escapeHtml } from '../utils/escapeHtml'
import { SocialShare } from '../components/SocialShare'
import { ContentPortalBar } from '../components/ContentPortalBar'
import { useContentItemId } from '../hooks/useContentItemId'

export function TeachersPage() {
  const [activeId, setActiveId] = useContentItemId('teachers', TEACHER_RESOURCES[0].id)
  const [subject, setSubject] = useState('Alle')
  const [query, setQuery] = useState('')
  const subjects = ['Alle', ...Array.from(new Set(TEACHER_RESOURCES.map((t) => t.subject)))]

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return TEACHER_RESOURCES.filter((t) => {
      if (subject !== 'Alle' && t.subject !== subject) return false
      if (!q) return true
      return `${t.title} ${t.summary} ${t.subject} ${t.age} ${t.materials.join(' ')}`.toLowerCase().includes(q)
    })
  }, [query, subject])

  const res = list.find((t) => t.id === activeId) || list[0] || TEACHER_RESOURCES[0]

  return (
    <div className="page">
      <header className="page-header">
        <h1>👩‍🏫 Lehrkräfte- & Klassen-Ecke</h1>
        <p>
          {TEACHER_RESOURCES.length} fertige Aktivitäten – vom Morgenkreis bis MINT. Ausdrucken, umsetzen und ins Tagebuch übernehmen.
        </p>
      </header>

      <ContentPortalBar
        count={list.length}
        label="Aktivität"
        query={query}
        onQuery={setQuery}
        placeholder="Aktivität, Thema oder Material suchen …"
        filters={subjects.map((s) => ({ id: s, label: s }))}
        activeFilter={subject}
        onFilter={(s) => {
          setSubject(s)
          const first = s === 'Alle' ? TEACHER_RESOURCES[0] : TEACHER_RESOURCES.find((t) => t.subject === s)
          if (first) setActiveId(first.id)
        }}
      />

      <div className="split">
        <div className="story-list">
          {list.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`story-list__item ${activeId === t.id ? 'is-active' : ''}`}
              onClick={() => setActiveId(t.id)}
            >
              <span className="story-list__emoji">{t.emoji}</span>
              <div>
                <strong>{t.title}</strong>
                <small>
                  {t.subject} · {t.age} · {t.duration}
                </small>
              </div>
            </button>
          ))}
        </div>

        <article className="panel">
          <h2>
            {res.emoji} {res.title}
          </h2>
          <p>{res.summary}</p>
          <p>
            <strong>Alter:</strong> {res.age} · <strong>Dauer:</strong> {res.duration}
          </p>
          <h3>Materialien</h3>
          <ul className="tip-list">
            {res.materials.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <h3>Schritte</h3>
          <ol className="tip-list">
            {res.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <div className="btn-row">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => {
                printHtml(
                  res.title,
                  `<p>${escapeHtml(res.summary)}</p><h3>Materialien</h3><ul>${res.materials.map((m) => `<li>${escapeHtml(m)}</li>`).join('')}</ul><h3>Schritte</h3><ol>${res.steps.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}</ol>`,
                )
              }}
            >
              🖨️ Drucken
            </button>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => {
                addJournalEntry({
                  kind: 'ödev',
                  title: res.title,
                  note: res.summary,
                  stars: 2,
                })
                showToast('Aktivität ins Tagebuch übernommen')
              }}
            >
              Ins Tagebuch übernehmen
            </button>
          </div>
          <SocialShare
            payload={{
              title: `${res.emoji} ${res.title}`,
              text: `${res.summary} (${res.subject}, ${res.age})`,
              page: 'teachers',
              itemId: res.id,
              hashtags: ['KitapCenneti', 'Ogretmen', res.subject.replace(/\s+/g, '')],
            }}
          />
        </article>
      </div>
    </div>
  )
}
