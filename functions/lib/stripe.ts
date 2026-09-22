export interface MembershipEnv {
  STRIPE_SECRET_KEY?: string
  STRIPE_PRICE_MONTHLY?: string
  STRIPE_PRICE_ANNUAL?: string
  STRIPE_WEBHOOK_SECRET?: string
  SITE_URL?: string
  AUTH_ALLOWED_ORIGIN?: string
  STRIPE_CHECKOUT_LOCALE?: string
  STRIPE_REQUIRE_TERMS?: string
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
