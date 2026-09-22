import {
  accountPayload,
  authOptions,
  authResponse,
  getAccountFromRequest,
  hasTrustedRequestHeader,
  PRIVACY_VERSION,
  TERMS_VERSION,
  type AuthContext,
} from '../../lib/auth'
import { legalConfigurationReady } from '../../lib/stripe'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestPost = async (context: AuthContext) => {
  try {
    if (!hasTrustedRequestHeader(context)) return authResponse({ error: 'Ungültige Anfrage' }, 400, context)
    const account = await getAccountFromRequest(context)
    if (!account) return authResponse({ error: 'Anmeldung erforderlich', code: 'unauthorized' }, 401, context)
    if (!context.env.DB) return authResponse({ error: 'Kontoservice ist noch nicht eingerichtet', code: 'configuration_missing' }, 503, context)
    if (!legalConfigurationReady(context.env)) {
      return authResponse({ error: 'Rechtliche Bestätigungen werden erst nach der vollständigen rechtlichen Konfiguration angenommen', code: 'legal_configuration_missing' }, 503, context)
    }

    const body = (await context.request.json()) as { adultConfirmed?: unknown; termsAccepted?: unknown; privacyAccepted?: unknown }
    if (body.adultConfirmed !== true || body.termsAccepted !== true || body.privacyAccepted !== true) {
      return authResponse({ error: 'Bitte bestätigen Sie alle erforderlichen Angaben', code: 'consent_required' }, 400, context)
    }

    const acceptedAt = new Date().toISOString()
    await context.env.DB.prepare(
      'UPDATE accounts SET terms_accepted_at = ?, privacy_accepted_at = ?, adult_confirmed_at = ?, terms_version = ?, privacy_version = ? WHERE id = ?',
    ).bind(acceptedAt, acceptedAt, acceptedAt, TERMS_VERSION, PRIVACY_VERSION, account.id).run()

    return authResponse({
      account: accountPayload({
        ...account,
        termsAcceptedAt: acceptedAt,
        privacyAcceptedAt: acceptedAt,
        adultConfirmedAt: acceptedAt,
        termsVersion: TERMS_VERSION,
        privacyVersion: PRIVACY_VERSION,
      }),
    }, 200, context)
  } catch (error) {
    if (error instanceof Error && error.message === 'DB_NOT_CONFIGURED') return authResponse({ error: 'Kontoservice ist noch nicht eingerichtet', code: 'configuration_missing' }, 503, context)
    console.error('Account consent error', error)
    return authResponse({ error: 'Rechtliche Bestätigungen konnten nicht gespeichert werden' }, 500, context)
  }
}
