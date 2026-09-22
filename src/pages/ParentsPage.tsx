import { PARENT_TIPS, DAILY_CHALLENGES } from '../data/parentTips'
import { AdSlot } from '../components/AdSlot'
import { SocialShare } from '../components/SocialShare'
import { useContentItemId } from '../hooks/useContentItemId'

export function ParentsPage() {
  const [activeId, setActiveId] = useContentItemId('parents', PARENT_TIPS[0].id)
  const activeTip = PARENT_TIPS.find((t) => t.id === activeId) || PARENT_TIPS[0]

  return (
    <div className="page">
      <header className="page-header">
        <h1>👨‍👩‍👧 Familien-Ecke</h1>
        <p>
          {PARENT_TIPS.length} Tipps für Eltern – Altersstufen, Bildschirmzeit, Schlafroutinen und sichere Inhalte. Weitere Beiträge findet ihr im Familienblog.
        </p>
      </header>

      <AdSlot slot="top" format="horizontal" />

      <div className="panel" style={{ marginBottom: 20 }}>
        <h2>📅 Inspiration für diese Woche</h2>
        <ul className="tip-list">
          {DAILY_CHALLENGES.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <div className="btn-row">
          <a className="btn btn--primary" href="#blog">📝 Familienblog lesen</a>
          <a className="btn btn--ghost" href="#quests">⭐ Kinder-Aufgaben</a>
        </div>
      </div>

      <div className="tips-grid">
        {PARENT_TIPS.map((tip) => (
          <article
            key={tip.id}
            className={`panel tip-card ${activeId === tip.id ? 'is-active' : ''}`}
            role="button"
            tabIndex={0}
            onClick={() => setActiveId(tip.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setActiveId(tip.id)
              }
            }}
          >
            <div className="tip-card__top">
              <span>{tip.emoji}</span>
              <small>{tip.category}</small>
            </div>
            <h3>{tip.title}</h3>
            <p>{tip.body}</p>
          </article>
        ))}
      </div>

      <div className="panel" style={{ marginTop: 20 }}>
        <h2>{activeTip.emoji} {activeTip.title}</h2>
        <p>{activeTip.body}</p>
        <SocialShare
          payload={{
            title: `${activeTip.emoji} ${activeTip.title}`,
            text: activeTip.body.slice(0, 160) + (activeTip.body.length > 160 ? '…' : ''),
            page: 'parents',
            itemId: activeTip.id,
            hashtags: ['KitapCenneti', 'Familie', activeTip.category.replace(/\s+/g, '')],
          }}
        />
      </div>

      <AdSlot slot="in-article" />

      <div className="panel safety-box">
        <h2>🛡️ Sicherheitshinweis</h2>
        <p>
          Kleine Kinder sollten die Anwendung gemeinsam mit einer erwachsenen Person nutzen. Werbung (AdSense)
          wird erst nach Einwilligung und nur auf Elterninhalten angezeigt. Weitere Informationen stehen in der Datenschutzerklärung.
        </p>
      </div>
    </div>
  )
}
