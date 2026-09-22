import {
  accountPayload,
  authOptions,
  authResponse,
  checkRateLimit,
  createAccount,
  createSession,
  hasTrustedRequestHeader,
  sessionCookie,
  validEmail,
  validPassword,
  emailVerificationRequired,
  type AccountConsent,
  type AuthContext,
} from '../../lib/auth'
import { authEmailConfigured } from '../../lib/email'
import { issueEmailVerification } from '../../lib/recovery'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestPost = async (context: AuthContext) => {
  try {
    if (!hasTrustedRequestHeader(context)) return authResponse({ error: 'Ungültige Anfrage' }, 400, context)
    const body = (await context.request.json()) as { email?: unknown; password?: unknown; adultConfirmed?: unknown; termsAccepted?: unknown; privacyAccepted?: unknown }
    const email = validEmail(body.email)
    const password = validPassword(body.password)
    if (!email) return authResponse({ error: 'Eine gültige E-Mail-Adresse ist erforderlich', code: 'invalid_email' }, 400, context)
    if (!password) return authResponse({ error: 'Das Passwort muss mindestens 8 Zeichen lang sein', code: 'invalid_password' }, 400, context)
    const consent: AccountConsent = {
      adultConfirmed: body.adultConfirmed === true,
      termsAccepted: body.termsAccepted === true,
      privacyAccepted: body.privacyAccepted === true,
    }
    if (!consent.adultConfirmed || !consent.termsAccepted || !consent.privacyAccepted) {
      return authResponse({ error: 'Bitte bestätigen Sie, dass Sie volljährig sind und Nutzungsbedingungen sowie Datenschutzerklärung akzeptieren', code: 'consent_required' }, 400, context)
    }
    if (emailVerificationRequired(context.env) && !authEmailConfigured(context.env)) {
      return authResponse({ error: 'E-Mail-Bestätigung ist aktiviert, aber der E-Mail-Dienst ist noch nicht eingerichtet', code: 'email_service_not_configured' }, 503, context)
    }
    if (!await checkRateLimit(context, 'register', email, 5)) return authResponse({ error: 'Zu viele Kontoanfragen. Bitte in 15 Minuten erneut versuchen.', code: 'rate_limited' }, 429, context)
    const account = await createAccount(context.env, email, password, consent)
    const token = await createSession(context.env, account.id)
    let emailVerification: 'sent' | 'not_configured' | 'delivery_failed' = 'not_configured'
    if (authEmailConfigured(context.env)) {
      try {
        emailVerification = await issueEmailVerification(context.env, account.id, account.email)
      } catch (verificationError) {
        console.error('Verification email could not be sent', verificationError)
        emailVerification = 'delivery_failed'
      }
    }
    return authResponse({ account: accountPayload(account), emailVerification }, 201, context, { 'Set-Cookie': sessionCookie(token, context.env) })
  } catch (error) {
    if (error instanceof Error && error.message === 'ACCOUNT_EXISTS') {
      return authResponse({ error: 'Für diese E-Mail-Adresse gibt es bereits ein Konto', code: 'account_exists' }, 409, context)
    }
    if (error instanceof Error && error.message === 'CONSENT_REQUIRED') {
      return authResponse({ error: 'Erforderliche Einwilligungen fehlen', code: 'consent_required' }, 400, context)
    }
    if (error instanceof Error && error.message === 'DB_NOT_CONFIGURED') {
      return authResponse({ error: 'Kontoservice ist noch nicht eingerichtet', code: 'configuration_missing' }, 503, context)
    }
    console.error('Account registration error', error)
    return authResponse({ error: 'Konto konnte nicht erstellt werden' }, 500, context)
  }
}
