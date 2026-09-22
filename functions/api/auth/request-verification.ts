import { authOptions, authResponse, checkRateLimit, getAccountFromRequest, hasTrustedRequestHeader, type AuthContext } from '../../lib/auth'
import { authEmailConfigured } from '../../lib/email'
import { issueEmailVerification } from '../../lib/recovery'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestPost = async (context: AuthContext) => {
  try {
    if (!hasTrustedRequestHeader(context)) return authResponse({ error: 'Ungültige Anfrage' }, 400, context)
    const account = await getAccountFromRequest(context)
    if (!account) return authResponse({ error: 'Anmeldung erforderlich', code: 'unauthorized' }, 401, context)
    if (!await checkRateLimit(context, 'email-verification', account.id, 3, 900)) {
      return authResponse({ error: 'Zu viele Anfragen. Bitte später erneut versuchen.', code: 'rate_limited' }, 429, context)
    }
    if (account.emailVerifiedAt) return authResponse({ status: 'already_verified' }, 200, context)
    if (!authEmailConfigured(context.env)) {
      return authResponse({ error: 'E-Mail-Dienst ist noch nicht eingerichtet', code: 'email_service_not_configured' }, 503, context)
    }
    await issueEmailVerification(context.env, account.id, account.email)
    return authResponse({ status: 'sent' }, 202, context)
  } catch (error) {
    if (error instanceof Error && error.message === 'DB_NOT_CONFIGURED') return authResponse({ error: 'Kontoservice ist noch nicht eingerichtet', code: 'configuration_missing' }, 503, context)
    if (error instanceof Error && error.message === 'EMAIL_NOT_CONFIGURED') return authResponse({ error: 'E-Mail-Dienst ist noch nicht eingerichtet', code: 'email_service_not_configured' }, 503, context)
    console.error('Verification email request error', error)
    return authResponse({ error: 'Bestätigungs-E-Mail konnte nicht versendet werden' }, 502, context)
  }
}
