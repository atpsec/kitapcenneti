import { authOptions, authResponse, getAccountFromRequest, hasTrustedRequestHeader, type AuthContext } from '../../lib/auth'
import { envString, siteUrl, stripeFetch } from '../../lib/stripe'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestPost = async (context: AuthContext) => {
  try {
    if (!hasTrustedRequestHeader(context)) return authResponse({ error: 'Ungültige Anfrage' }, 400, context)
    const account = await getAccountFromRequest(context)
    if (!account) return authResponse({ error: 'Anmeldung erforderlich', code: 'unauthorized' }, 401, context)
    if (!context.env.DB || !envString(context.env.STRIPE_SECRET_KEY)) {
      return authResponse({ error: 'Mitgliedschaftsverwaltung ist noch nicht eingerichtet', code: 'configuration_missing' }, 503, context)
    }
    const membership = await context.env.DB.prepare(
      "SELECT customer_id as customerId FROM memberships WHERE (account_id = ? OR (account_id IS NULL AND lower(email) = lower(?))) AND status IN ('active', 'trialing', 'past_due') ORDER BY updated_at DESC LIMIT 1",
    ).bind(account.id, account.email).first?.<{ customerId?: string }>()
    if (!membership?.customerId) return authResponse({ error: 'Keine aktive Mitgliedschaft gefunden', code: 'membership_missing' }, 404, context)

    const params = new URLSearchParams()
    params.set('customer', membership.customerId)
    params.set('return_url', siteUrl(context.env) + '/#membership')
    const response = await stripeFetch(context.env, 'billing_portal/sessions', { method: 'POST', body: params.toString() })
    const payload = (await response.json()) as { url?: string; error?: { message?: string } }
    if (!response.ok || !payload.url) return authResponse({ error: payload.error?.message || 'Mitgliedschaftsverwaltung konnte nicht geöffnet werden' }, 502, context)
    return authResponse({ url: payload.url }, 200, context)
  } catch (error) {
    if (error instanceof Error && error.message === 'DB_NOT_CONFIGURED') return authResponse({ error: 'Mitgliedschaftsverwaltung ist noch nicht eingerichtet', code: 'configuration_missing' }, 503, context)
    console.error('Membership portal error', error)
    return authResponse({ error: 'Mitgliedschaftsverwaltung konnte nicht geöffnet werden' }, 500, context)
  }
}
