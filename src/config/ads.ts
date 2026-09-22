/** AdSense yayıncı kimliği — onaydan sonra .env veya index.html'e eklenir */
export const ADSENSE_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT as string | undefined
export const ADS_ENABLED = Boolean(ADSENSE_CLIENT && ADSENSE_CLIENT.startsWith('ca-pub-'))

export type AdSlotId = 'top' | 'in-article' | 'sidebar' | 'bottom'

/** Reklam yalnızca aile / editöryel sayfalarda — çocuk oyun alanlarında yok */
export const PARENT_AD_PAGES = [
  'blog',
  'parents',
  'about',
  'teachers',
  'paths',
  'calendar',
  'journal',
  'classroom',
  'shop',
] as const

export function adsAllowedOnPage(page: string): boolean {
  return (PARENT_AD_PAGES as readonly string[]).includes(page)
}

export function hasAdConsent(): boolean {
  try {
    const raw = localStorage.getItem('kitapcenneti-cookie-consent')
    if (!raw) return false
    const consent = JSON.parse(raw) as { version?: number; ads?: boolean }
    return consent.version === 1 && consent.ads === true
  } catch {
    return false
  }
}
