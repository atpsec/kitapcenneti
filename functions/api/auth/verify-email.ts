import { authOptions, authResponse, type AuthContext } from '../../lib/auth'
import { tokenHash } from '../../lib/recovery'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestPost = async (context: AuthContext) => {
  try {
    if (context.request.headers.get('X-Kitap-Request') !== '1') return authResponse({ error: 'Ungültige Anfrage' }, 400, context)
    if (!context.env.DB) return authResponse({ error: 'Kontoservice ist noch nicht eingerichtet', code: 'configuration_missing' }, 503, context)
    const body = (await context.request.json()) as { token?: unknown }
    const token = typeof body.token === 'string' ? body.token.trim() : ''
    if (!token || token.length > 256) return authResponse({ error: 'Ungültiger oder abgelaufener Bestätigungslink', code: 'invalid_token' }, 400, context)
    const hash = await tokenHash(token)
    const record = await context.env.DB.prepare(
      "SELECT account_id as accountId FROM email_verification_tokens WHERE token_hash = ? AND used_at IS NULL AND expires_at > datetime('now') LIMIT 1",
    ).bind(hash).first?.<{ accountId?: string }>()
    if (!record?.accountId) return authResponse({ error: 'Ungültiger oder abgelaufener Bestätigungslink', code: 'invalid_token' }, 400, context)
    const usedAt = new Date().toISOString()
    const result = await context.env.DB.prepare(
      'UPDATE email_verification_tokens SET used_at = ? WHERE token_hash = ? AND used_at IS NULL',
    ).bind(usedAt, hash).run() as { meta?: { changes?: number } }
    if (result.meta?.changes !== 1) return authResponse({ error: 'Ungültiger oder bereits verwendeter Bestätigungslink', code: 'invalid_token' }, 400, context)
    await context.env.DB.prepare('UPDATE accounts SET email_verified_at = ? WHERE id = ?').bind(usedAt, record.accountId).run()
    return authResponse({ status: 'verified' }, 200, context)
  } catch (error) {
    console.error('Email verification error', error)
    return authResponse({ error: 'E-Mail-Adresse konnte nicht bestätigt werden' }, 500, context)
  }
}
