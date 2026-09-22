import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Download, RotateCcw, Maximize2, Minimize2, Bookmark, FileDown } from 'lucide-react'
import type { Story } from '../types'
import { downloadStoryPdf } from '../utils/pdf'
import { completeActivity } from '../hooks/useProgress'
import { announceActivityResult } from './Toast'
import { SocialShare } from './SocialShare'

interface StoryViewerProps {
  story: Story
  onReset: () => void
  onSave?: (story: Story) => void
}

export function StoryViewer({ story, onReset, onSave }: StoryViewerProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [saved, setSaved] = useState(false)
  const [pdfBusy, setPdfBusy] = useState(false)
  const page = story.pages[currentPage]

  useEffect(() => {
    const result = completeActivity('story')
    announceActivityResult(result)
  }, [story.title])

  const goNext = useCallback(() => {
    setCurrentPage((p) => Math.min(p + 1, story.pages.length - 1))
  }, [story.pages.length])

  const goPrev = useCallback(() => {
    setCurrentPage((p) => Math.max(p - 1, 0))
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev, isFullscreen])

  const handleDownloadTxt = () => {
    const content = story.pages
      .map((p) => `--- Seite ${p.pageNumber} ---\n${p.text}\n`)
      .join('\n')
    const blob = new Blob([`${story.title}\n\n${content}`], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${story.title.replace(/\s+/g, '_')}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleDownloadPdf = async () => {
    setPdfBusy(true)
    try {
      await downloadStoryPdf(story)
      announceActivityResult(completeActivity('print'))
    } catch {
      alert('PDF konnte nicht erstellt werden. Warte, bis die Bilder geladen sind, und versuche es erneut.')
    } finally {
      setPdfBusy(false)
    }
  }

  const handleSave = () => {
    onSave?.(story)
    setSaved(true)
  }

  const shareText = story.pages.map((p) => p.text).join('\n\n')
  const sharePreview = shareText.slice(0, 200) + (shareText.length > 200 ? '…' : '')

  return (
    <div className={`story-viewer ${isFullscreen ? 'story-viewer--fullscreen' : ''}`}>
      <div className="story-viewer__header">
        <h2 className="story-viewer__title">{story.title}</h2>
        {story.heroName && (
          <div className="story-viewer__hero">
            {story.heroImage && (
              <img src={story.heroImage} alt={story.heroName} className="story-viewer__hero-avatar" />
            )}
            <p>🦸 Held: <strong>{story.heroName}</strong></p>
          </div>
        )}
      </div>

      <div className="story-viewer__actions">
        <button className="action-btn action-btn--secondary" onClick={onReset}>
          <RotateCcw size={18} />
          Neue Geschichte
        </button>
        <button className="action-btn action-btn--primary" onClick={handleDownloadPdf} disabled={pdfBusy}>
          <FileDown size={18} />
          {pdfBusy ? 'PDF wird vorbereitet …' : 'Buch-PDF'}
        </button>
        <button className="action-btn action-btn--secondary" onClick={handleDownloadTxt}>
          <Download size={18} />
          Metin
        </button>
        {onSave && (
          <button
            className="action-btn action-btn--secondary"
            onClick={handleSave}
            disabled={saved}
          >
            <Bookmark size={18} />
            {saved ? 'Gespeichert!' : 'Speichern'}
          </button>
        )}
        <button
          className="action-btn action-btn--secondary"
          onClick={() => setIsFullscreen(!isFullscreen)}
        >
          {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          {isFullscreen ? 'Verkleinern' : 'Vollbild'}
        </button>
      </div>

      <SocialShare
        compact
        className="story-viewer__share"
        payload={{
          title: story.title,
          text: sharePreview,
          page: 'create',
          itemId: story.title.slice(0, 48).replace(/\s+/g, '-').toLowerCase(),
          hashtags: ['KitapCenneti', 'Geschichte', 'KI'],
        }}
      />

      <div className="storybook">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="storybook__page"
            initial={{ opacity: 0, rotateY: 15 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -15 }}
            transition={{ duration: 0.4 }}
          >
            <div className="storybook__image-wrap">
              {page.imageUrl ? (
                <img
                  className="storybook__image"
                  src={page.imageUrl}
                  alt={`Illustration auf Seite ${page.pageNumber}`}
                  loading="eager"
                  onError={async (e) => {
                    const img = e.currentTarget
                    if (img.dataset.retried) return
                    img.dataset.retried = '1'
                    const seed = page.pageNumber * 99 + (Date.now() % 1000)
                    let prompt = page.imagePrompt.slice(0, 160)
                    try {
                      const { buildShortImagePrompt } = await import('../utils/imagePrompt')
                      const { callApi, buildDirectPollinationsUrl, fetchPollinationsImage } =
                        await import('../utils/api')
                      prompt = buildShortImagePrompt(
                        page.imagePrompt,
                        story.heroName,
                        story.artStyle,
                        story.category,
                      )
                      const data = await callApi<{ imageUrl?: string }>('generate-image', {
                        prompt,
                        seed,
                      })
                      if (data?.imageUrl?.startsWith('data:image/')) {
                        img.src = data.imageUrl
                        return
                      }
                      const fetched = await fetchPollinationsImage(prompt, seed, 2)
                      if (fetched) {
                        img.src = fetched
                        return
                      }
                      img.src = buildDirectPollinationsUrl(prompt, seed)
                    } catch {
                      img.src =
                        `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}` +
                        `?width=1024&height=768&nologo=true&safe=true&seed=${seed}&model=flux`
                    }
                  }}
                />
              ) : (
                <div className="storybook__image-placeholder">
                  <span>🎨</span>
                  <p>Bild wird geladen...</p>
                </div>
              )}
            </div>
            <div className="storybook__content">
              <p className="storybook__page-number">
                Seite {page.pageNumber} / {story.pages.length}
              </p>
              <p className="storybook__text">{page.text}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="storybook__nav">
        <button className="nav-btn" onClick={goPrev} disabled={currentPage === 0} aria-label="Vorherige Seite">
          <ChevronLeft size={24} />
        </button>

        <div className="page-dots">
          {story.pages.map((_, i) => (
            <button
              key={i}
              className={`page-dot ${i === currentPage ? 'page-dot--active' : ''}`}
              onClick={() => setCurrentPage(i)}
          aria-label={`Seite ${i + 1}`}
            />
          ))}
        </div>

        <button
          className="nav-btn"
          onClick={goNext}
          disabled={currentPage === story.pages.length - 1}
          aria-label="Nächste Seite"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="thumbnails">
        {story.pages.map((p, i) => (
          <button
            key={i}
            className={`thumbnail ${i === currentPage ? 'thumbnail--active' : ''}`}
            onClick={() => setCurrentPage(i)}
          >
            {p.imageUrl ? (
              <img src={p.imageUrl} alt={`Seite ${i + 1}`} />
            ) : (
              <span>📄</span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
