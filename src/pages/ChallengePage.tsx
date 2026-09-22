import { useEffect, useState } from 'react'
import type { PageId } from '../types/nav'
import {
  encodeChallengeLink,
  findChallenge,
  importChallengeFromSession,
  makeChallengeCode,
  saveChallenge,
  type ChallengePayload,
} from '../utils/challengeCode'
import { usePortalProfile } from '../hooks/usePortalProfile'
import { showToast } from '../components/Toast'
import { SocialShare } from '../components/SocialShare'
import { useContentItemId } from '../hooks/useContentItemId'

interface Props {
  onNavigate: (page: PageId, itemId?: string) => void
}

const PRESETS: { title: string; page: PageId; stars: number; emoji: string }[] = [
  { title: 'Eine Geschichte hören', page: 'audio', stars: 2, emoji: '🎧' },
  { title: '1 Seite ausmalen', page: 'coloring', stars: 2, emoji: '🖍️' },
  { title: 'Live-Arena-Aufgabe', page: 'live', stars: 3, emoji: '⚡' },
  { title: 'Mini-Quiz lösen', page: 'activities', stars: 2, emoji: '❓' },
  { title: 'MINT-Karte öffnen', page: 'stem', stars: 2, emoji: '🔬' },
]

export function ChallengePage({ onNavigate }: Props) {
  const { profile } = usePortalProfile()
  const [codeParam] = useContentItemId('challenge', '')
  const [joinCode, setJoinCode] = useState('')
  const [created, setCreated] = useState<ChallengePayload | null>(null)
  const [joined, setJoined] = useState<ChallengePayload | null>(null)

  useEffect(() => {
    if (!codeParam) return
    const fromSession = importChallengeFromSession(codeParam)
    const found = fromSession || findChallenge(codeParam)
    if (found) setJoined(found)
    setJoinCode(codeParam)
  }, [codeParam])

  const create = (preset: (typeof PRESETS)[number]) => {
    const c: ChallengePayload = {
      code: makeChallengeCode(),
      title: `${preset.emoji} ${preset.title}`,
      page: preset.page,
      stars: preset.stars,
      createdAt: Date.now(),
      fromName: profile.childName || 'Ein Freund',
    }
    saveChallenge(c)
    setCreated(c)
    const link = encodeChallengeLink(c)
    void navigator.clipboard?.writeText(link)
    showToast('Challenge-Code kopiert')
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>🤝 Sichere Herausforderung</h1>
        <p>
          Ohne Konto, mit Familien- oder Freundescode – niemand sieht Ihr öffentliches Profil. Teilen Sie den Code gemeinsam
          abgeschlossen.
        </p>
      </header>

      <section className="section">
        <h2 className="section__title">Erstellen Sie eine Herausforderung</h2>
        <div className="portal-dash-grid">
          {PRESETS.map((p) => (
            <button key={p.title} type="button" className="portal-dash-card" onClick={() => create(p)}>
              <span>{p.emoji}</span>
              <h2>{p.title}</h2>
              <p>+{p.stars}⭐ Belohnungsziel</p>
            </button>
          ))}
        </div>
        {created && (
          <article className="panel" style={{ marginTop: 16 }}>
            <h3>Kod: {created.code}</h3>
            <p>
              {created.fromName} → {created.title}
            </p>
            <SocialShare
              payload={{
                title: `Challenge: ${created.title}`,
                text: `${created.fromName} seni Kitap Cenneti’nde meydan okuyor! Kod: ${created.code}`,
                page: 'challenge',
                itemId: created.code,
                hashtags: ['KitapCenneti', 'MeydanOkuma'],
              }}
            />
          </article>
        )}
      </section>

      <section className="section">
        <h2 className="section__title">Treten Sie dem Code bei</h2>
        <div className="panel journal-form">
          <label>
            6 haneli kod
            <input
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
              maxLength={6}
              placeholder="z. B. AB12CD"
            />
          </label>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              const c = findChallenge(joinCode) || importChallengeFromSession(joinCode)
              if (!c) {
                showToast('Code nicht gefunden – bitte den Link vom gleichen Gerät oder aus einer Freigabe verwenden')
                return
              }
              setJoined(c)
              showToast('Challenge gefunden!')
            }}
          >
            Machen Sie mit
          </button>
        </div>
        {joined && (
          <article className="panel" style={{ marginTop: 12 }}>
            <h3>{joined.title}</h3>
            <p>
              Von: {joined.fromName} · Hedef +{joined.stars}⭐
            </p>
            <button type="button" className="btn btn--primary" onClick={() => onNavigate(joined.page)}>
              Gehen Sie zur Aufgabe →
            </button>
          </article>
        )}
      </section>
    </div>
  )
}
