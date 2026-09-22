import { useState } from 'react'
import { addJournalEntry, usePortalProfile } from '../hooks/usePortalProfile'
import { showToast } from '../components/Toast'

const KINDS = ['masal', 'oyun', 'boyama', 'stem', 'duygu', 'ödev', 'diğer']

export function JournalPage() {
  const { journal, profile } = usePortalProfile()
  const [kind, setKind] = useState('masal')
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')

  const save = () => {
    if (!title.trim()) {
      alert('Schreibe einen kurzen Titel')
      return
    }
    addJournalEntry({ kind, title: title.trim(), note: note.trim(), stars: 1 })
    setTitle('')
    setNote('')
    showToast('Ins Tagebuch aufgenommen 📔')
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>📔 Fortschrittstagebuch</h1>
        <p>
          {profile.childName || 'Euer Kind'} – was gehört, gespielt oder gelernt wurde, gemeinsam festhalten.
          Wird auf dem Gerät gespeichert, keine Mitgliedschaft erforderlich.
        </p>
      </header>

      <div className="panel journal-form">
        <h2>neuer Rekord</h2>
        <div className="library-filters">
          {KINDS.map((k) => (
            <button
              key={k}
              type="button"
              className={`stem-chip ${kind === k ? 'is-active' : ''}`}
              onClick={() => setKind(k)}
            >
              {k}
            </button>
          ))}
        </div>
        <label>
          Titel
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="z. B. Wir haben eine Weltraumgeschichte gehört" maxLength={80} />
        </label>
        <label>
          Not
          <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Was war schön? Was war schwierig?" rows={3} maxLength={300} />
        </label>
        <button type="button" className="btn btn--primary" onClick={save}>
          Speichern
        </button>
      </div>

      <section className="section">
        <h2 className="section__title">Einträge ({journal.length})</h2>
        {journal.length === 0 && <p className="section-hint">Noch keine Datensätze – fügen Sie den ersten hinzu.</p>}
        <div className="journal-list">
          {journal.map((j) => (
            <article key={j.id} className="panel journal-item">
              <div>
                <strong>{j.title}</strong>
                <p>{j.note || '—'}</p>
                <small>
                  {j.kind} · {new Date(j.date).toLocaleString('tr-TR')} · +{j.stars}⭐
                </small>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
