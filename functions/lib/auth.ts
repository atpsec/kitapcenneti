import { CORS_HEADERS, envString, json, siteUrl, type MembershipEnv } from './stripe'

export interface AuthEnv extends MembershipEnv {
  AUTH_SESSION_TTL_DAYS?: string
}

export interface AccountRecord {
  id: string
  email: string
  createdAt: string
}

export interface AuthContext {
  request: Request
  env: AuthEnv
}

const SESSION_COOKIE = 'kitap_session'
const DEFAULT_SESSION_TTL_SECONDS = 60 * 60 * 24 * 30
const PBKDF2_ITERATIONS = 120_000

function base64url(bytes: Uint8Array): string {
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '')
}

function fromBase64url(value: string): Uint8Array {
  const normalized = value.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - (value.length % 4)) % 4)
  const binary = atob(normalized)
  return Uint8Array.from(binary, (char) => char.charCodeAt(0))
}

async function randomBytes(length: number): Promise<Uint8Array> {
  const bytes = new Uint8Array(length)
  crypto.getRandomValues(bytes)
  return bytes
}

async function digestHex(value: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value))
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, '0')).join('')
}

async function hashPassword(password: string, salt: Uint8Array): Promise<string> {
  const material = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits'])
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    material,
    256,
  )
  return base64url(new Uint8Array(bits))
}

function constantTimeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false
  let difference = 0
  for (let index = 0; index < a.length; index += 1) difference |= a[index] ^ b[index]
  return difference === 0
}

function parseCookies(request: Request): Record<string, string> {
  const header = request.headers.get('Cookie') || ''
  return Object.fromEntries(header.split(';').map((part) => part.trim().split('=' as string, 2)).filter(([key, value]) => key && value))
}

function sessionTtlSeconds(env: AuthEnv): number {
  const configured = Number(env.AUTH_SESSION_TTL_DAYS)
  const days = Number.isFinite(configured) && configured >= 1 && configured <= 180 ? configured : 30
  return Math.round(days * 24 * 60 * 60) || DEFAULT_SESSION_TTL_SECONDS
}

export function authResponse(body: unknown, status: number, context: AuthContext, extraHeaders: Record<string, string> = {}) {
  const configuredOrigin = envString(context.env.AUTH_ALLOWED_ORIGIN)
  const siteOrigin = new URL(siteUrl(context.env)).origin
  const allowedOrigin = configuredOrigin || siteOrigin
  return json(body, status, {
    ...extraHeaders,
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    Vary: 'Origin',
  })
}

export function authOptions(context: AuthContext) {
  const configuredOrigin = envString(context.env.AUTH_ALLOWED_ORIGIN)
  return new Response(null, {
    status: 204,
    headers: {
      ...CORS_HEADERS,
      'Access-Control-Allow-Origin': configuredOrigin || new URL(siteUrl(context.env)).origin,
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      Vary: 'Origin',
    },
  })
}

export function validEmail(value: unknown): string {
  const email = envString(value).toLowerCase()
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email.slice(0, 160) : ''
}

export function validPassword(value: unknown): string {
  const password = typeof value === 'string' ? value : ''
  return password.length >= 8 && password.length <= 200 ? password : ''
}

export async function createAccount(env: AuthEnv, email: string, password: string): Promise<AccountRecord> {
  if (!env.DB) throw new Error('DB_NOT_CONFIGURED')
  const existing = await env.DB.prepare('SELECT id FROM accounts WHERE email = ? LIMIT 1').bind(email).first?.()
  if (existing) throw new Error('ACCOUNT_EXISTS')
  const id = crypto.randomUUID()
  const salt = await randomBytes(16)
  const passwordHash = await hashPassword(password, salt)
  const createdAt = new Date().toISOString()
  await env.DB.prepare(
    'INSERT INTO accounts (id, email, password_hash, password_salt, created_at) VALUES (?, ?, ?, ?, ?)',
  ).bind(id, email, passwordHash, base64url(salt), createdAt).run()
  return { id, email, createdAt }
}

export async function findAccountByEmail(env: AuthEnv, email: string): Promise<(AccountRecord & { passwordHash: string; salt: string }) | null> {
  if (!env.DB) throw new Error('DB_NOT_CONFIGURED')
  const row = await env.DB.prepare(
    'SELECT id, email, created_at as createdAt, password_hash as passwordHash, password_salt as salt FROM accounts WHERE email = ? LIMIT 1',
  ).bind(email).first?.<AccountRecord & { passwordHash: string; salt: string }>()
  return row || null
}

export async function verifyPassword(password: string, passwordHash: string, encodedSalt: string): Promise<boolean> {
  try {
    const candidate = fromBase64url(await hashPassword(password, fromBase64url(encodedSalt)))
    const expected = fromBase64url(passwordHash)
    return constantTimeEqual(candidate, expected)
  } catch {
    return false
  }
}

export async function createSession(env: AuthEnv, accountId: string): Promise<string> {
  if (!env.DB) throw new Error('DB_NOT_CONFIGURED')
  const token = base64url(await randomBytes(32))
  const tokenHash = await digestHex(token)
  const expiresAt = new Date(Date.now() + sessionTtlSeconds(env) * 1000).toISOString()
  await env.DB.prepare(
    'INSERT INTO sessions (token_hash, account_id, expires_at, created_at) VALUES (?, ?, ?, ?)',
  ).bind(tokenHash, accountId, expiresAt, new Date().toISOString()).run()
  return token
}

export async function getAccountFromRequest(context: AuthContext): Promise<AccountRecord | null> {
  if (!context.env.DB) throw new Error('DB_NOT_CONFIGURED')
  const token = parseCookies(context.request)[SESSION_COOKIE]
  if (!token) return null
  const tokenHash = await digestHex(token)
  const row = await context.env.DB.prepare(
    "SELECT a.id, a.email, a.created_at as createdAt FROM sessions s JOIN accounts a ON a.id = s.account_id WHERE s.token_hash = ? AND s.expires_at > datetime('now') LIMIT 1",
  ).bind(tokenHash).first?.<AccountRecord>()
  return row || null
}

export async function destroySession(context: AuthContext): Promise<void> {
  if (!context.env.DB) return
  const token = parseCookies(context.request)[SESSION_COOKIE]
  if (!token) return
  await context.env.DB.prepare('DELETE FROM sessions WHERE token_hash = ?').bind(await digestHex(token)).run()
}

export function sessionCookie(token: string, env: AuthEnv): string {
  return `${SESSION_COOKIE}=${token}; Max-Age=${sessionTtlSeconds(env)}; Path=/; HttpOnly; Secure; SameSite=None`
}

export function expiredSessionCookie(): string {
  return `${SESSION_COOKIE}=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=None`
}

export function accountPayload(account: AccountRecord) {
  return { id: account.id, email: account.email, createdAt: account.createdAt }
}
