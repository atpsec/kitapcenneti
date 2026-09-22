import {
  accountPayload,
  authOptions,
  authResponse,
  checkRateLimit,
  createSession,
  findAccountByEmail,
  hasTrustedRequestHeader,
  sessionCookie,
  validEmail,
  validPassword,
  verifyPassword,
  emailVerificationRequired,
  type AuthContext,
} from '../../lib/auth'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestPost = async (context: AuthContext) => {
  try {
    if (!hasTrustedRequestHeader(context)) return authResponse({ error: 'Ungültige Anfrage' }, 400, context)
    const body = (await context.request.json()) as { email?: unknown; password?: unknown }
    const email = validEmail(body.email)
    const password = validPassword(body.password)
    if (!email || !password) return authResponse({ error: 'E-Mail oder Passwort ist falsch' }, 401, context)
    if (!await checkRateLimit(context, 'login', email, 10)) return authResponse({ error: 'Zu viele Versuche. Bitte in 15 Minuten erneut versuchen.', code: 'rate_limited' }, 429, context)
    const account = await findAccountByEmail(context.env, email)
    if (!account || !(await verifyPassword(password, account.passwordHash, account.salt))) {
      return authResponse({ error: 'E-Mail oder Passwort ist falsch' }, 401, context)
    }
    if (emailVerificationRequired(context.env) && !account.emailVerifiedAt) {
      return authResponse({ error: 'Bitte bestätigen Sie zuerst Ihre E-Mail-Adresse', code: 'email_unverified' }, 403, context)
    }
    const token = await createSession(context.env, account.id)
    return authResponse({ account: accountPayload(account) }, 200, context, { 'Set-Cookie': sessionCookie(token, context.env) })
  } catch (error) {
    if (error instanceof Error && error.message === 'DB_NOT_CONFIGURED') {
      return authResponse({ error: 'Kontoservice ist noch nicht eingerichtet', code: 'configuration_missing' }, 503, context)
    }
    console.error('Account login error', error)
    return authResponse({ error: 'Anmeldung fehlgeschlagen' }, 500, context)
  }
}
