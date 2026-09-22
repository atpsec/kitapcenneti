export interface MembershipEnv {
  STRIPE_SECRET_KEY?: string
  STRIPE_PRICE_MONTHLY?: string
  STRIPE_PRICE_ANNUAL?: string
  STRIPE_WEBHOOK_SECRET?: string
  SITE_URL?: string
  AUTH_ALLOWED_ORIGIN?: string
  STRIPE_CHECKOUT_LOCALE?: string
  STRIPE_REQUIRE_TERMS?: string
  STRIPE_TERMS_URL?: string
  LEGAL_COMPANY?: string
  LEGAL_ADDRESS?: string
  LEGAL_REPRESENTATIVE?: string
  LEGAL_REGISTER?: string
  LEGAL_VAT_ID?: string
  SUPPORT_EMAIL?: string
  DB?: {
    prepare: (query: string) => {
      bind: (...values: unknown[]) => {
        run: () => Promise<unknown>
        first?: <T = unknown>() => Promise<T | null>
        all?: <T = unknown>() => Promise<{ results: T[] }>
      }
    }
  }
}

export const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store',
  'X-Content-Type-Options': 'nosniff',
}

export function json(body: unknown, status = 200, extraHeaders: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, ...extraHeaders },
  })
}

export function envString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

export async function stripeFetch(
  env: MembershipEnv,
  path: string,
  init: RequestInit = {},
): Promise<Response> {
  const key = envString(env.STRIPE_SECRET_KEY)
  if (!key) throw new Error('STRIPE_SECRET_KEY is not configured')
  const headers = new Headers(init.headers)
  headers.set('Authorization', 'Bearer ' + key)
  if (init.body && !headers.has('Content-Type')) headers.set('Content-Type', 'application/x-www-form-urlencoded')
  return fetch('https://api.stripe.com/v1/' + path, { ...init, headers })
}

export function safeEmail(value: unknown): string {
  const email = envString(value).toLowerCase()
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email.slice(0, 160) : ''
}

export function safeId(value: unknown, prefix: string): string {
  const id = envString(value)
  return id.startsWith(prefix) && /^[A-Za-z0-9_]+$/.test(id) ? id : ''
}

export function siteUrl(env: MembershipEnv): string {
  return envString(env.SITE_URL).replace(/\/$/, '') || 'https://atpsec.github.io/kitapcenneti'
}

/**
 * Paid checkout is a production contract. Keep it disabled until the
 * operator has supplied the legal identity and a canonical HTTPS origin.
 * The client-side build gate is only a convenience; this server-side check
 * prevents a direct API call from bypassing it.
 */
export function legalConfigurationReady(env: MembershipEnv): boolean {
  const required = [
    env.LEGAL_COMPANY,
    env.LEGAL_ADDRESS,
    env.LEGAL_REPRESENTATIVE,
    env.LEGAL_REGISTER,
    env.LEGAL_VAT_ID,
    env.SUPPORT_EMAIL,
  ]
  const valuesReady = required.every((value) => {
    const trimmed = envString(value)
    return Boolean(trimmed) && !trimmed.startsWith('[')
  })
  const supportEmail = envString(env.SUPPORT_EMAIL)
  return valuesReady && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(supportEmail)
}

export function productionSiteReady(env: MembershipEnv): boolean {
  const configured = envString(env.SITE_URL)
  try {
    return new URL(configured).protocol === 'https:'
  } catch {
    return false
  }
}
