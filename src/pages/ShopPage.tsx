import { useState } from 'react'
import type { PageId } from '../types/nav'
import { SHOP_PACKS } from '../data/shop'
import { showToast } from '../components/Toast'
import { addJournalEntry } from '../hooks/usePortalProfile'
import { SocialShare } from '../components/SocialShare'
import { useContentItemId } from '../hooks/useContentItemId'
import { hasPremiumVoice, PREMIUM_UNLOCK_CODE, unlockPremiumVoice } from '../utils/premium'

interface Props {
  onNavigate: (page: PageId) => void
}

export function ShopPage({ onNavigate }: Props) {
  const [activeId, setActiveId] = useContentItemId('shop', SHOP_PACKS[0].id)
  const activePack = SHOP_PACKS.find((p) => p.id === activeId) || SHOP_PACKS[0]
  const [code, setCode] = useState('')
  const [premium, setPremium] = useState(() => hasPremiumVoice())

  return (
    <div className="page">
      <header className="page-header">
        <h1>🎁 Kostenloser Content-Markt</h1>
        <p>
          {SHOP_PACKS.length} Pakete – alle kostenlos. „Öffnen“ führt direkt zum passenden Bereich.
        </p>
      </header>

      <article className="panel premium-pack">
        <span>✨</span>
        <div>
          <h2>Tale Master – Premium-Soundpaket</h2>
          <p>
            Sanftes Tempo, mitlesender, harmonischer Erzähler. Keine Zahlungen – Familiengeschenkcode oder ein Klick
            erscheint (lokal).
          </p>
          {premium ? (
            <strong>Ein ✓ – Wählen Sie „Märchenmeister“ in Audio Tales</strong>
          ) : (
            <div className="btn-row">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => {
                  unlockPremiumVoice()
                  setPremium(true)
                  showToast('Premium-Stimme aktiviert')
                  onNavigate('audio')
                }}
              >
                Kostenlos geöffnet
              </button>
              <input
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="Hediye kodu"
                maxLength={16}
                style={{ maxWidth: 160 }}
              />
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => {
                  if (code.trim() === PREMIUM_UNLOCK_CODE) {
                    unlockPremiumVoice()
                    setPremium(true)
                    showToast('Code akzeptiert – Premium-Stimme aktiv')
                  } else showToast('Ungültiger Code')
                }}
              >
                Mit Code öffnen
              </button>
            </div>
          )}
          <small>Beispielcode: {PREMIUM_UNLOCK_CODE}</small>
        </div>
      </article>
      <div className="shop-grid">
        {SHOP_PACKS.map((pack) => (
          <article
            key={pack.id}
            className={`panel shop-card ${activeId === pack.id ? 'is-active' : ''}`}
            onClick={() => setActiveId(pack.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setActiveId(pack.id)
              }
            }}
          >
            <span className="shop-card__emoji">{pack.emoji}</span>
            <h2>{pack.title}</h2>
            <p>{pack.description}</p>
            <small>
              {pack.age} · {pack.tags.join(' · ')}
            </small>
            <ul>
              {pack.includes.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <button
              type="button"
              className="btn btn--primary"
              onClick={(e) => {
                e.stopPropagation()
                addJournalEntry({
                  kind: 'ödev',
                  title: `Paket: ${pack.title}`,
                  note: pack.description,
                  stars: 1,
                })
                showToast('Paket geöffnet – du wirst zum Bereich weitergeleitet')
                onNavigate(pack.page as PageId)
              }}
            >
              Kostenlos geöffnet →
            </button>
            {activeId === pack.id && (
              <SocialShare
                compact
                payload={{
                  title: `${pack.emoji} ${pack.title}`,
                  text: pack.description,
                  page: 'shop',
                  itemId: pack.id,
                  hashtags: ['KitapCenneti', 'Ucretsiz', ...pack.tags.slice(0, 2)],
                }}
              />
            )}
          </article>
        ))}
      </div>

      <div className="panel" style={{ marginTop: 20 }}>
        <h2>{activePack.emoji} {activePack.title}</h2>
        <p>{activePack.description}</p>
        <SocialShare
          payload={{
            title: `${activePack.emoji} ${activePack.title}`,
            text: `${activePack.description} — ${activePack.includes.slice(0, 2).join(', ')}`,
            page: 'shop',
            itemId: activePack.id,
            hashtags: ['KitapCenneti', 'Ucretsiz', ...activePack.tags.slice(0, 2)],
          }}
        />
      </div>
    </div>
  )
}
