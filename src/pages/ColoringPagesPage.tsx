import { useMemo, useState } from 'react'
import { COLORING_CATEGORIES, COLORING_PAGES, getColoringSvg } from '../data/coloringPages'
import { announceActivityResult } from '../components/Toast'
import { completeActivity } from '../hooks/useProgress'
import { downloadSvgAsPdf } from '../utils/pdf'
import { escapeHtml } from '../utils/escapeHtml'
import { SocialShare } from '../components/SocialShare'
import { ContentPortalBar } from '../components/ContentPortalBar'
import { useContentItemId } from '../hooks/useContentItemId'

export function ColoringPagesPage() {
  const [category, setCategory] = useState<(typeof COLORING_CATEGORIES)[number]>('Tümü')
  const [selected, setSelected] = useContentItemId('coloring', COLORING_PAGES[0].id)
  const [query, setQuery] = useState('')
  const [busy, setBusy] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return COLORING_PAGES.filter((p) => {
      if (category !== 'Tümü' && p.category !== category) return false
      if (!q) return true
      return `${p.title} ${p.description} ${p.category} ${p.age}`.toLowerCase().includes(q)
    })
  }, [category, query])

  const page = COLORING_PAGES.find((p) => p.id === selected) || filtered[0] || COLORING_PAGES[0]
  const svg = getColoringSvg(page.id)

  const handleDownload = async () => {
    setBusy(true)
    try {
      await downloadSvgAsPdf(svg, `boyama-${page.id}`, page.title)
      announceActivityResult(completeActivity('color'))
    } catch {
      alert('PDF konnte nicht erstellt werden. Bitte erneut versuchen.')
    } finally {
      setBusy(false)
    }
  }

  const handlePrint = () => {
    const win = window.open('', '_blank', 'noopener,noreferrer')
    if (!win) return
    const safeTitle = escapeHtml(page.title)
    win.document.open()
    win.document.write(`<!doctype html><html><head><meta charset="utf-8"/><title>${safeTitle}</title>
      <style>body{margin:0;display:flex;flex-direction:column;align-items:center;font-family:Nunito,sans-serif}
      h1{margin:16px} svg{width:90vw;max-width:640px}</style></head>
      <body><h1>${safeTitle}</h1>${svg}</body></html>`)
    win.document.close()
    setTimeout(() => {
      try {
        win.focus()
        win.print()
      } catch {
        /* ignore */
      }
    }, 250)
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>🖍️ Malvorlagen</h1>
        <p>{COLORING_PAGES.length} lizenzfreie Seiten · nach Kategorie filtern, PDF herunterladen oder drucken.</p>
      </header>

      <ContentPortalBar
        count={filtered.length}
        label="Malen"
        query={query}
        onQuery={setQuery}
        placeholder="Seite, Kategorie oder Alter suchen …"
        filters={COLORING_CATEGORIES.map((cat) => ({ id: cat, label: cat }))}
        activeFilter={category}
        onFilter={(cat) => {
          setCategory(cat as (typeof COLORING_CATEGORIES)[number])
          const first = cat === 'Alle' ? COLORING_PAGES[0] : COLORING_PAGES.find((p) => p.category === cat)
          if (first) setSelected(first.id)
        }}
      />

      <div className="coloring-layout">
        <div className="coloring-grid">
          {filtered.map((item) => (
            <button
              key={item.id}
              className={`coloring-card ${selected === item.id ? 'is-active' : ''}`}
              onClick={() => setSelected(item.id)}
            >
              <span>{item.emoji}</span>
              <strong>{item.title}</strong>
              <small>{item.category} · {item.age}</small>
            </button>
          ))}
        </div>

        <div className="panel coloring-preview">
          <h2>{page.title}</h2>
          <p>{page.description}</p>
          <div className="coloring-preview__svg" dangerouslySetInnerHTML={{ __html: svg }} />
          <div className="btn-row">
            <button className="btn btn--primary" onClick={handleDownload} disabled={busy}>
              {busy ? 'Wird vorbereitet …' : '⬇️ PDF herunterladen'}
            </button>
            <button className="btn btn--ghost" onClick={handlePrint}>🖨️ Drucken</button>
          </div>
          <SocialShare
            payload={{
              title: `${page.emoji || '🖍️'} ${page.title}`,
              text: page.description,
              page: 'coloring',
              itemId: page.id,
              hashtags: ['KitapCenneti', 'Malen', page.category.replace(/\s+/g, '')],
            }}
          />
        </div>
      </div>
    </div>
  )
}
