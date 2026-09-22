export const COOKIE_CONSENT_KEY = 'kitapcenneti-cookie-consent'
export const COOKIE_CONSENT_EVENT = 'kitapcenneti-cookie-consent'
export const OPEN_COOKIE_SETTINGS_EVENT = 'kitapcenneti-open-cookie-settings'
export const COOKIE_CONSENT_VERSION = 2

export type CookieConsent = {
  version: typeof COOKIE_CONSENT_VERSION
  necessary: true
  analytics: boolean
  ads: boolean
  consentedAt: string
}

export function readCookieConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Partial<CookieConsent>
    if (parsed.version !== COOKIE_CONSENT_VERSION || parsed.necessary !== true) return null
    if (typeof parsed.consentedAt !== 'string' || !parsed.consentedAt) return null
    return {
      version: COOKIE_CONSENT_VERSION,
      necessary: true,
      analytics: parsed.analytics === true,
      ads: parsed.ads === true,
      consentedAt: parsed.consentedAt,
    }
  } catch {
    return null
  }
}

export function saveCookieConsent(next: Pick<CookieConsent, 'analytics' | 'ads'>): CookieConsent {
  const consent: CookieConsent = {
    version: COOKIE_CONSENT_VERSION,
    necessary: true,
    analytics: next.analytics === true,
    ads: next.ads === true,
    consentedAt: new Date().toISOString(),
  }
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent))
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT))
  return consent
}

export function hasCookieConsent(category: 'analytics' | 'ads'): boolean {
  return readCookieConsent()?.[category] === true
}
