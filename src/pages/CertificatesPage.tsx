import { useState } from 'react'
import { announceActivityResult } from '../components/Toast'
import { completeActivity } from '../hooks/useProgress'
import { downloadCertificatePdf } from '../utils/pdf'
import { SocialShare } from '../components/SocialShare'

const ACHIEVEMENTS = [
  'Heute eine Hörgeschichte gehört',
  'Eine Malvorlage abgeschlossen',
  'Mit KI ein eigenes Geschichtenbuch erstellt',
  'Im Memory-Spiel alle Paare gefunden',
  'Einen Kinderreim auswendig gelernt',
  'Eine Woche lang jeden Tag gelesen',
  'Etwas Gutes für die Natur getan',
  'Eine Geschichte für Geschwister oder Freunde erzählt',
]

export function CertificatesPage() {
  const [name, setName] = useState('')
  const [achievement, setAchievement] = useState(ACHIEVEMENTS[0])
  const displayName = name.trim() || 'Kleiner Held'

  return (
    <div className="page">
      <header className="page-header">
        <h1>🏆 Leistungszertifikat</h1>
        <p>Belohnen Sie den Erfolg Ihres Kindes mit einem PDF-Zertifikat – zum Ausdrucken.</p>
      </header>

      <div className="panel certificate-form">
        <label>
          Name des Kindes
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="z. B. Emma"
            maxLength={40}
          />
        </label>
        <label>
          Erfolg
          <select value={achievement} onChange={(e) => setAchievement(e.target.value)}>
            {ACHIEVEMENTS.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </label>
        <label>
          Benutzerdefinierten Erfolg schreiben (optional)
          <input
            value={achievement}
            onChange={(e) => setAchievement(e.target.value)}
            maxLength={80}
          />
        </label>

        <div className="certificate-preview">
          <p className="certificate-preview__eyebrow">Vorschau</p>
          <h2>Leistungszertifikat</h2>
          <p className="certificate-preview__name">{displayName}</p>
          <p>{achievement}</p>
        </div>

        <button
          className="btn btn--primary"
          onClick={() => {
            downloadCertificatePdf(displayName, achievement)
            announceActivityResult(completeActivity('cert'))
          }}
        >
          ⬇️ Laden Sie das PDF-Zertifikat herunter
        </button>

        <SocialShare
          payload={{
            title: `🏆 ${displayName} — Erfolgsurkunde`,
            text: achievement,
            page: 'certificates',
            itemId: achievement.slice(0, 40).replace(/\s+/g, '-').toLowerCase(),
            hashtags: ['KitapCenneti', 'Erfolg', 'Zertifikat'],
          }}
        />
      </div>
    </div>
  )
}
