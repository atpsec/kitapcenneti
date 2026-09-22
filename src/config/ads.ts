/** AdSense-Publisher-ID – nach der Freigabe über .env oder index.html setzen. */
import { hasCookieConsent } from '../utils/cookieConsent'

export const ADSENSE_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT as string | undefined
export const ADS_ENABLED = Boolean(ADSENSE_CLIENT && ADSENSE_CLIENT.startsWith('ca-pub-'))

export type AdSlotId = 'top' | 'in-article' | 'sidebar' | 'bottom'

/** Werbung nur auf Eltern- und redaktionellen Seiten, nie im Kinderbereich. */
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
  return hasCookieConsent('ads')
}
