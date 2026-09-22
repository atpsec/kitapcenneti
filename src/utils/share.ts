import type { PageId } from '../types/nav'

const BASE =
  typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname.replace(/\/$/, '') || ''}`
    : 'https://atpsec.github.io/kitapcenneti'

export interface SharePayload {
  title: string
  text: string
  page: PageId
  itemId?: string
  hashtags?: string[]
}

export function contentDeepLink(page: PageId, itemId?: string): string {
  const hash = itemId ? `${page}/${encodeURIComponent(itemId)}` : page
  return `${BASE}/#${hash}`
}

export function buildShareText(payload: SharePayload): string {
  const url = contentDeepLink(payload.page, payload.itemId)
  const tags = (payload.hashtags || ['KitapCenneti', 'Kinder', 'Familie'])
    .map((t) => `#${t.replace(/\s+/g, '')}`)
    .join(' ')
  return `${payload.title}\n\n${payload.text}\n\n${url}\n${tags}`
}

export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    try {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.setAttribute('readonly', '')
      ta.style.position = 'fixed'
      ta.style.left = '-9999px'
      document.body.appendChild(ta)
      ta.select()
      const ok = document.execCommand('copy')
      document.body.removeChild(ta)
      return ok
    } catch {
      return false
    }
  }
}

export async function nativeShare(payload: SharePayload): Promise<'shared' | 'cancelled' | 'unsupported'> {
  if (!navigator.share) return 'unsupported'
  try {
    await navigator.share({
      title: payload.title,
      text: payload.text,
      url: contentDeepLink(payload.page, payload.itemId),
    })
    return 'shared'
  } catch (err) {
    if (err instanceof DOMException && err.name === 'AbortError') return 'cancelled'
    return 'cancelled'
  }
}

export function openShareWindow(url: string) {
  const w = 640
  const h = 720
  const left = Math.max(0, (window.screen.width - w) / 2)
  const top = Math.max(0, (window.screen.height - h) / 2)
  window.open(
    url,
    '_blank',
    `noopener,noreferrer,width=${w},height=${h},left=${left},top=${top}`,
  )
}

/** Parse `#page` or `#page/itemId` from location hash */
export function parseContentHash(hash: string): { page: string; itemId?: string } {
  const raw = hash.replace(/^#/, '').trim()
  if (!raw) return { page: 'portal' }
  const slash = raw.indexOf('/')
  if (slash === -1) return { page: raw }
  return {
    page: raw.slice(0, slash),
    itemId: decodeURIComponent(raw.slice(slash + 1)),
  }
}
