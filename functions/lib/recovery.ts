import { authAppUrl, authEmailConfigured, sendAuthEmail, type AuthEmailEnv } from './email'
import { createOpaqueToken, digestHex, type AuthEnv } from './auth'

type RecoveryEnv = AuthEnv & AuthEmailEnv

function actionUrl(env: RecoveryEnv, parameter: string, token: string): string {
  const url = new URL(authAppUrl(env) + '/')
  url.searchParams.set(parameter, token)
  url.hash = 'profile'
  return url.toString()
}

export async function issueEmailVerification(env: RecoveryEnv, accountId: string, email: string): Promise<'sent' | 'not_configured'> {
  if (!authEmailConfigured(env)) return 'not_configured'
  if (!env.DB) throw new Error('DB_NOT_CONFIGURED')
  const { token, tokenHash } = await createOpaqueToken()
  const now = new Date().toISOString()
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
  await env.DB.prepare('DELETE FROM email_verification_tokens WHERE account_id = ?').bind(accountId).run()
  await env.DB.prepare(
    'INSERT INTO email_verification_tokens (token_hash, account_id, expires_at, created_at) VALUES (?, ?, ?, ?)',
  ).bind(tokenHash, accountId, expiresAt, now).run()
  try {
    await sendAuthEmail(
      env,
      email,
      'Kitap Cenneti E-Mail-Adresse bestätigen',
      'Bitte bestätigen Sie Ihre E-Mail-Adresse für Ihr Kitap-Cenneti-Elternkonto. Der Link ist 24 Stunden gültig.',
      'E-Mail-Adresse bestätigen',
      actionUrl(env, 'verify_email', token),
    )
  } catch (error) {
    await env.DB.prepare('DELETE FROM email_verification_tokens WHERE token_hash = ?').bind(tokenHash).run()
    throw error
  }
  return 'sent'
}

export async function issuePasswordReset(env: RecoveryEnv, accountId: string, email: string): Promise<'sent' | 'not_configured'> {
  if (!authEmailConfigured(env)) return 'not_configured'
  if (!env.DB) throw new Error('DB_NOT_CONFIGURED')
  const { token, tokenHash } = await createOpaqueToken()
  const now = new Date().toISOString()
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString()
  await env.DB.prepare('DELETE FROM password_reset_tokens WHERE account_id = ?').bind(accountId).run()
  await env.DB.prepare(
    'INSERT INTO password_reset_tokens (token_hash, account_id, expires_at, created_at) VALUES (?, ?, ?, ?)',
  ).bind(tokenHash, accountId, expiresAt, now).run()
  try {
    await sendAuthEmail(
      env,
      email,
      'Kitap Cenneti Passwort zurücksetzen',
      'Sie haben eine Passwortzurücksetzung angefordert. Der Link ist eine Stunde gültig.',
      'Passwort zurücksetzen',
      actionUrl(env, 'reset_password', token),
    )
  } catch (error) {
    await env.DB.prepare('DELETE FROM password_reset_tokens WHERE token_hash = ?').bind(tokenHash).run()
    throw error
  }
  return 'sent'
}

export async function tokenHash(value: string): Promise<string> {
  return digestHex(value)
}
