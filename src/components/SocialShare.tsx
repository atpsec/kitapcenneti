import { useMemo, useState } from 'react'
import { SOCIAL_CATEGORIES, SOCIAL_PLATFORMS } from '../data/socialPlatforms'
import {
  buildShareText,
  copyText,
  nativeShare,
  openShareWindow,
  type SharePayload,
} from '../utils/share'
import { SocialMarkIcon } from './SocialIcons'
import { showToast } from './Toast'

interface SocialShareProps {
  payload: SharePayload
  compact?: boolean
  className?: string
}

export function SocialShare({ payload, compact = false, className = '' }: SocialShareProps) {
  const [open, setOpen] = useState(false)
  const [filter, setFilter] = useState<(typeof SOCIAL_CATEGORIES)[number]['id'] | 'all'>('all')

  const platforms = useMemo(() => {
    if (filter === 'all') return SOCIAL_PLATFORMS
    return SOCIAL_PLATFORMS.filter((p) => p.category === filter)
  }, [filter])

  const run = async (id: string) => {
    const platform = SOCIAL_PLATFORMS.find((p) => p.id === id)
    if (!platform) return

    if (platform.action === 'native') {
      const result = await nativeShare(payload)
      if (result === 'unsupported') {
        const ok = await copyText(buildShareText(payload))
        showToast(ok ? 'Link in die Zwischenablage kopiert' : 'Teilen wird nicht unterstützt')
      } else if (result === 'shared') {
        showToast('Geteilt')
      }
      return
    }

    if (platform.action === 'copy') {
      const ok = await copyText(buildShareText(payload))
      showToast(ok ? 'Text und Link kopiert' : 'Kopieren nicht möglich')
      return
    }

    const url = platform.buildUrl?.(payload)
    if (url) {
      if (url.startsWith('mailto:') || url.startsWith('sms:') || url.startsWith('viber:')) {
        window.location.href = url
      } else {
        openShareWindow(url)
      }
      showToast(`${platform.label} geöffnet`)
    }
  }

  const quick = SOCIAL_PLATFORMS.filter((p) =>
    ['native', 'copy', 'whatsapp', 'telegram', 'facebook', 'x', 'email'].includes(p.id),
  )

  return (
    <div className={`social-share ${compact ? 'social-share--compact' : ''} ${className}`}>
      <div className="social-share__quick" role="group" aria-label="Soziales Teilen">
        {quick.map((p) => (
          <button
            key={p.id}
            type="button"
            className="social-share__btn"
            title={p.label}
            aria-label={`${p.label} teilen`}
            onClick={() => void run(p.id)}
          >
            <SocialMarkIcon color={p.color} mark={p.mark} size={compact ? 36 : 42} />
            {!compact && <span>{p.label}</span>}
          </button>
        ))}
        <button
          type="button"
          className="social-share__more"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? 'Weniger' : `Alle Plattformen (${SOCIAL_PLATFORMS.length})`}
        </button>
      </div>

      {open && (
        <div className="social-share__panel panel">
          <div className="social-share__filters">
            <button
              type="button"
              className={`stem-chip ${filter === 'all' ? 'is-active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Alle
            </button>
            {SOCIAL_CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`stem-chip ${filter === c.id ? 'is-active' : ''}`}
                onClick={() => setFilter(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="social-share__grid">
            {platforms.map((p) => (
              <button
                key={p.id}
                type="button"
                className="social-share__card"
                onClick={() => void run(p.id)}
              >
                <SocialMarkIcon color={p.color} mark={p.mark} size={44} />
                <strong>{p.label}</strong>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
