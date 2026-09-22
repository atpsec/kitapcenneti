import { useState } from 'react'
import type { PageId } from '../types/nav'
import { PRINTABLES } from '../data/printables'
import { FEELINGS } from '../data/feelings'
import { getDailyQuests } from '../data/quests'
import { AdSlot } from '../components/AdSlot'
import { announceActivityResult } from '../components/Toast'
import { completeActivity } from '../hooks/useProgress'
import { downloadFeelingsPackPdf, downloadQuestChecklistPdf } from '../utils/pdf'
import { PremiumGate } from '../components/PremiumGate'

interface PrintablesPageProps {
  onNavigate: (page: PageId) => void
}

export function PrintablesPage({ onNavigate }: PrintablesPageProps) {
  const [busy, setBusy] = useState<string | null>(null)

  const downloadPack = async (id: string) => {
    setBusy(id)
    try {
      if (id === 'gorev') {
        downloadQuestChecklistPdf(getDailyQuests())
        announceActivityResult(completeActivity('print'))
      } else if (id === 'duygu') {
        downloadFeelingsPackPdf(FEELINGS.map((f) => ({ emoji: f.emoji, label: f.label, tip: f.tip })))
        announceActivityResult(completeActivity('print'))
      } else {
        const item = PRINTABLES.find((p) => p.id === id)
        if (item) onNavigate(item.link)
      }
    } catch {
      alert('PDF oluşturulamadı.')
    } finally {
      setBusy(null)
    }
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>🖨️ Çıktılar & Çalışma Kağıtları</h1>
        <p>
          Bazı paketler doğrudan PDF indirir; diğerleri ilgili bölüme götürür.
          Günlük görev listesi ve duygu kartları burada hazır.
        </p>
      </header>

      <div className="printables-grid">
        {PRINTABLES.map((p) => {
          const instant = p.id === 'gorev' || p.id === 'duygu'
          const card = (
            <article key={p.id} className="panel printable-card printable-card--rich">
              <span>{p.emoji}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <small>{p.category} · {p.age}</small>
              <div className="btn-row" style={{ marginTop: 12 }}>
                {instant ? (
                  <button
                    type="button"
                    className="btn btn--primary"
                    disabled={busy === p.id}
                    onClick={() => downloadPack(p.id)}
                  >
                    {busy === p.id ? 'Hazırlanıyor...' : '⬇️ PDF İndir'}
                  </button>
                ) : (
                  <button type="button" className="btn btn--primary" onClick={() => onNavigate(p.link)}>
                    Bölüme git →
                  </button>
                )}
              </div>
            </article>
          )
          return p.premium ? <PremiumGate key={p.id} onNavigate={onNavigate} label="Bu paket Aile+ ile açılır">{card}</PremiumGate> : card
        })}
      </div>

      <AdSlot slot="bottom" />
    </div>
  )
}
