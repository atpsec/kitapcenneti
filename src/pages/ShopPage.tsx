import type { PageId } from '../types/nav'
import { SHOP_PACKS } from '../data/shop'
import { showToast } from '../components/Toast'
import { addJournalEntry } from '../hooks/usePortalProfile'
import { SocialShare } from '../components/SocialShare'
import { useContentItemId } from '../hooks/useContentItemId'
import { useMembership } from '../hooks/useMembership'

interface Props {
  onNavigate: (page: PageId) => void
}

export function ShopPage({ onNavigate }: Props) {
  const [activeId, setActiveId] = useContentItemId('shop', SHOP_PACKS[0].id)
  const activePack = SHOP_PACKS.find((p) => p.id === activeId) || SHOP_PACKS[0]
  const { isPlus } = useMembership()

  return (
    <div className="page">
      <header className="page-header">
        <h1>🎁 Kostenlose Familienpakete</h1>
        <p>
          {SHOP_PACKS.length} Pakete – alle kostenlos. „Öffnen“ führt direkt zum passenden Bereich.
        </p>
      </header>

      <article className="panel premium-pack">
        <span>✨</span>
        <div>
          <h2>Märchenmeister – Premium-Stimmpaket</h2>
          <p>
            Sanftes Tempo und ein harmonischer Erzähler für ruhige Vorlesemomente. Die Märchenmeister-Stimme gehört zum
            Familien+-Vollzugang.
          </p>
          {isPlus ? (
            <strong>✓ Familien+ ist aktiv – wählen Sie „Märchenmeister“ bei den Hörgeschichten.</strong>
          ) : (
            <div className="btn-row">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => onNavigate('membership')}
              >
                Familien+ ansehen
              </button>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => onNavigate('audio')}
              >
                Kostenlose Hörgeschichten
              </button>
            </div>
          )}
          <small>Die kostenlose Vorschau bleibt verfügbar; Premium-Zugriff wird serverseitig über Familien+ geprüft.</small>
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
                  hashtags: ['KitapCenneti', 'Kostenlos', ...pack.tags.slice(0, 2)],
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
            hashtags: ['KitapCenneti', 'Kostenlos', ...activePack.tags.slice(0, 2)],
          }}
        />
      </div>
    </div>
  )
}
