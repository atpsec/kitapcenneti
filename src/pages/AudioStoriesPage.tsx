import { useMemo, useState } from 'react'
import { AUDIO_STORIES } from '../data/audioStories'
import { announceActivityResult } from '../components/Toast'
import {
  completeActivity,
  getFavoriteAudioIds,
  toggleFavoriteAudio,
  useProgress,
} from '../hooks/useProgress'
import { printHtml } from '../utils/pdf'
import { escapeHtml } from '../utils/escapeHtml'
import { SocialShare } from '../components/SocialShare'
import { ContentPortalBar } from '../components/ContentPortalBar'
import { useContentItemId } from '../hooks/useContentItemId'
import { dayKey, factoryStory, hashSeed } from '../engines/contentFactory'
import { StoryPlayer } from '../components/StoryPlayer'
import { PremiumGate } from '../components/PremiumGate'
import type { PageId } from '../types/nav'

interface Props {
  onNavigate: (page: PageId) => void
}

export function AudioStoriesPage({ onNavigate }: Props) {
  const liveStories = useMemo(() => {
    const base = hashSeed(dayKey(), 'audio-live')
    return Array.from({ length: 48 }, (_, i) => factoryStory(hashSeed(base, i)))
  }, [])

  const library = useMemo(() => [...liveStories, ...AUDIO_STORIES], [liveStories])

  const [activeId, setActiveId] = useContentItemId('audio', AUDIO_STORIES[0]?.id || library[0].id)
  const [favorites, setFavorites] = useState(() => getFavoriteAudioIds())
  const [onlyFavs, setOnlyFavs] = useState(false)
  const [query, setQuery] = useState('')
  const [theme, setTheme] = useState('Alle')
  const { bedtime, toggleBedtime } = useProgress()
  const active = library.find((s) => s.id === activeId) || library[0]
  const isLiveStory = 'source' in active && active.source === 'live'

  const themes = useMemo(
    () => ['Alle', 'Live-Drops', ...Array.from(new Set(AUDIO_STORIES.map((s) => s.theme)))],
    [],
  )

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return library.filter((s) => {
      if (onlyFavs && !favorites.includes(s.id)) return false
      if (theme === 'Live-Drops') return s.id.startsWith('live-story-')
      if (theme !== 'Alle' && s.theme !== theme) return false
      if (!q) return true
      return `${s.title} ${s.summary} ${s.theme} ${s.age}`.toLowerCase().includes(q)
    })
  }, [favorites, onlyFavs, query, theme, library])

  return (
    <div className={`page ${bedtime ? 'page--bedtime' : ''}`}>
      <header className="page-header">
        <h1>🎧 Hörgeschichten-Portal</h1>
        <p>
          Kapitel-Player · Einschlaf-Timer · gemeinsam lesen · {library.length}+ Geschichten (statisch + live
          Drop).
        </p>
      </header>

      <ContentPortalBar
        count={list.length}
        label="Geschichte"
        query={query}
        onQuery={setQuery}
        placeholder="Geschichte, Thema oder Alter suchen …"
        filters={themes.map((t) => ({ id: t, label: t }))}
        activeFilter={theme}
        onFilter={setTheme}
      />

      <div className="audio-toolbar">
        <div className="btn-row">
          <button
            type="button"
            className={`bedtime-toggle ${bedtime ? 'is-on' : ''}`}
            onClick={toggleBedtime}
          >
            {bedtime ? '🌙 Vor dem Schlafengehen aktiv' : '🌙 Vor dem Schlafengehen'}
          </button>
          <button
            type="button"
            className={`btn btn--ghost ${onlyFavs ? 'is-active-filter' : ''}`}
            onClick={() => setOnlyFavs((v) => !v)}
          >
            ❤️ Favoriten {favorites.length ? `(${favorites.length})` : ''}
          </button>
        </div>
      </div>

      <div className="split">
        <div className="story-list">
          {list.length === 0 && <p className="section-hint">Keine Ergebnisse – Filter erweitern.</p>}
          {list.map((story) => (
            <button
              key={story.id}
              className={`story-list__item ${activeId === story.id ? 'is-active' : ''}`}
              onClick={() => setActiveId(story.id)}
            >
              <span className="story-list__emoji">{story.emoji}</span>
              <div>
                <strong>{story.title}</strong>
                <small>
                  {story.age} Jahre · {story.duration} · {story.theme}
                </small>
              </div>
              {'source' in story && <span title="Familien+-Inhalt" aria-label="Familien+-Inhalt">✦</span>}
              {favorites.includes(story.id) && <span aria-hidden="true">❤️</span>}
            </button>
          ))}
        </div>

        {isLiveStory ? (
          <PremiumGate onNavigate={onNavigate} label="Live-Drop-Geschichten werden mit Familien+ freigeschaltet">
            <div className="audio-player panel">
              <div className="audio-player__hero">
                <span>{active.emoji}</span>
                <div>
                  <h2>{active.title}</h2>
                  <p>{active.summary}</p>
                </div>
              </div>

              <StoryPlayer
                story={active}
                bedtime={bedtime}
                onListened={() => announceActivityResult(completeActivity('listen'))}
              />

              <div className="btn-row" style={{ marginTop: 12 }}>
                <button
                  className="btn btn--ghost"
                  onClick={() => setFavorites(toggleFavoriteAudio(active.id))}
                >
                  {favorites.includes(active.id) ? '❤️ In Favoriten' : '🤍 Zu Favoriten'}
                </button>
                <button
                  className="btn btn--ghost"
                  onClick={() => {
                    printHtml(
                      active.title,
                      `<p style="white-space:pre-wrap;line-height:1.8">${escapeHtml(active.text)}</p>`,
                    )
                    announceActivityResult(completeActivity('print'))
                  }}
                >
                  🖨️ Drucken
                </button>
              </div>
              <SocialShare
                payload={{
                  title: `${active.emoji} ${active.title}`,
                  text: active.summary,
                  page: 'audio',
                  itemId: active.id,
                  hashtags: ['KitapCenneti', 'Geschichte', active.theme.replace(/\s+/g, '')],
                }}
              />
            </div>
          </PremiumGate>
        ) : (
        <div className="audio-player panel">
          <div className="audio-player__hero">
            <span>{active.emoji}</span>
            <div>
              <h2>{active.title}</h2>
              <p>{active.summary}</p>
            </div>
          </div>

          <StoryPlayer
            story={active}
            bedtime={bedtime}
            onListened={() => announceActivityResult(completeActivity('listen'))}
          />

          <div className="btn-row" style={{ marginTop: 12 }}>
            <button
              className="btn btn--ghost"
              onClick={() => setFavorites(toggleFavoriteAudio(active.id))}
            >
              {favorites.includes(active.id) ? '❤️ In Favoriten' : '🤍 Zu Favoriten'}
            </button>
            <button
              className="btn btn--ghost"
              onClick={() => {
                printHtml(
                  active.title,
                  `<p style="white-space:pre-wrap;line-height:1.8">${escapeHtml(active.text)}</p>`,
                )
                announceActivityResult(completeActivity('print'))
              }}
            >
              🖨️ Drucken
            </button>
          </div>
          <SocialShare
            payload={{
              title: `${active.emoji} ${active.title}`,
              text: active.summary,
              page: 'audio',
              itemId: active.id,
              hashtags: ['KitapCenneti', 'Geschichte', active.theme.replace(/\s+/g, '')],
            }}
          />
        </div>
        )}
      </div>
    </div>
  )
}
