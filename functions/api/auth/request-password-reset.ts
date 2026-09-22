import { authOptions, authResponse, checkRateLimit, findAccountByEmail, hasTrustedRequestHeader, validEmail, type AuthContext } from '../../lib/auth'
import { authEmailConfigured } from '../../lib/email'
import { issuePasswordReset } from '../../lib/recovery'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestPost = async (context: AuthContext) => {
  try {
    if (!hasTrustedRequestHeader(context)) return authResponse({ error: 'Ungültige Anfrage' }, 400, context)
    if (!authEmailConfigured(context.env)) {
      return authResponse({ error: 'E-Mail-Dienst ist noch nicht eingerichtet', code: 'email_service_not_configured' }, 503, context)
    }
    const body = (await context.request.json()) as { email?: unknown }
    const email = validEmail(body.email)
    if (!email) return authResponse({ error: 'Eine gültige E-Mail-Adresse ist erforderlich', code: 'invalid_email' }, 400, context)
    if (!await checkRateLimit(context, 'password-reset', email, 3, 900)) {
      return authResponse({ error: 'Zu viele Anfragen. Bitte später erneut versuchen.', code: 'rate_limited' }, 429, context)
    }
    const account = await findAccountByEmail(context.env, email)
    // Keep the same response for unknown addresses to prevent account enumeration.
    if (!account) return authResponse({ status: 'accepted' }, 202, context)
    try {
      await issuePasswordReset(context.env, account.id, account.email)
    } catch (error) {
      console.error('Password reset email could not be sent', error)
      // Keep the same response to avoid revealing whether the address exists.
      return authResponse({ status: 'accepted' }, 202, context)
    }
    return authResponse({ status: 'accepted' }, 202, context)
  } catch (error) {
    if (error instanceof Error && error.message === 'DB_NOT_CONFIGURED') return authResponse({ error: 'Kontoservice ist noch nicht eingerichtet', code: 'configuration_missing' }, 503, context)
    console.error('Password reset request error', error)
    return authResponse({ error: 'Passwortzurücksetzung konnte nicht gestartet werden' }, 500, context)
  }
}
