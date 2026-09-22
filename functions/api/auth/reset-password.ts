import { authOptions, authResponse, createPasswordCredentials, type AuthContext, validPassword } from '../../lib/auth'
import { tokenHash } from '../../lib/recovery'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestPost = async (context: AuthContext) => {
  try {
    if (context.request.headers.get('X-Kitap-Request') !== '1') return authResponse({ error: 'Ungültige Anfrage' }, 400, context)
    if (!context.env.DB) return authResponse({ error: 'Kontoservice ist noch nicht eingerichtet', code: 'configuration_missing' }, 503, context)
    const body = (await context.request.json()) as { token?: unknown; password?: unknown }
    const token = typeof body.token === 'string' ? body.token.trim() : ''
    const password = validPassword(body.password)
    if (!token || token.length > 256) return authResponse({ error: 'Ungültiger oder abgelaufener Link', code: 'invalid_token' }, 400, context)
    if (!password) return authResponse({ error: 'Das Passwort muss mindestens 8 Zeichen lang sein', code: 'invalid_password' }, 400, context)
    const hash = await tokenHash(token)
    const record = await context.env.DB.prepare(
      "SELECT account_id as accountId FROM password_reset_tokens WHERE token_hash = ? AND used_at IS NULL AND expires_at > datetime('now') LIMIT 1",
    ).bind(hash).first?.<{ accountId?: string }>()
    if (!record?.accountId) return authResponse({ error: 'Ungültiger oder abgelaufener Link', code: 'invalid_token' }, 400, context)
    const usedAt = new Date().toISOString()
    const result = await context.env.DB.prepare(
      'UPDATE password_reset_tokens SET used_at = ? WHERE token_hash = ? AND used_at IS NULL',
    ).bind(usedAt, hash).run() as { meta?: { changes?: number } }
    if (result.meta?.changes !== 1) return authResponse({ error: 'Ungültiger oder bereits verwendeter Link', code: 'invalid_token' }, 400, context)
    const credentials = await createPasswordCredentials(password)
    // Revoke every existing session before installing the new password.
    await context.env.DB.prepare('DELETE FROM sessions WHERE account_id = ?').bind(record.accountId).run()
    await context.env.DB.prepare(
      'UPDATE accounts SET password_hash = ?, password_salt = ? WHERE id = ?',
    ).bind(credentials.passwordHash, credentials.passwordSalt, record.accountId).run()
    return authResponse({ status: 'password_reset' }, 200, context)
  } catch (error) {
    console.error('Password reset error', error)
    return authResponse({ error: 'Passwort konnte nicht zurückgesetzt werden' }, 500, context)
  }
}
