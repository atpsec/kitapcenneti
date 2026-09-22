import { authOptions, authResponse, getAccountFromRequest, hasTrustedRequestHeader, type AuthContext } from '../../lib/auth'
import { envString, stripeFetch } from '../../lib/stripe'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

/** Schedule cancellation at the end of the paid period. */
export const onRequestPost = async (context: AuthContext) => {
  try {
    if (!hasTrustedRequestHeader(context)) return authResponse({ error: 'Ungültige Anfrage' }, 400, context)
    const account = await getAccountFromRequest(context)
    if (!account) return authResponse({ error: 'Anmeldung erforderlich', code: 'unauthorized' }, 401, context)
    if (!context.env.DB || !envString(context.env.STRIPE_SECRET_KEY)) {
      return authResponse({ error: 'Mitgliedschaftsverwaltung ist noch nicht eingerichtet', code: 'configuration_missing' }, 503, context)
    }

    const membership = await context.env.DB.prepare(
      "SELECT subscription_id as subscriptionId, current_period_end as currentPeriodEnd FROM memberships WHERE (account_id = ? OR (account_id IS NULL AND lower(email) = lower(?))) AND status IN ('active', 'trialing', 'past_due') ORDER BY updated_at DESC LIMIT 1",
    ).bind(account.id, account.email).first?.<{ subscriptionId?: string; currentPeriodEnd?: string }>()
    if (!membership?.subscriptionId) {
      return authResponse({ error: 'Keine aktive Mitgliedschaft gefunden', code: 'membership_missing' }, 404, context)
    }

    const params = new URLSearchParams()
    params.set('cancel_at_period_end', 'true')
    const response = await stripeFetch(
      context.env,
      'subscriptions/' + encodeURIComponent(membership.subscriptionId),
      { method: 'POST', body: params.toString() },
    )
    const payload = (await response.json()) as {
      id?: string
      status?: string
      cancel_at_period_end?: boolean
      current_period_end?: number
      error?: { message?: string }
    }
    if (!response.ok || payload.id !== membership.subscriptionId) {
      return authResponse({ error: payload.error?.message || 'Mitgliedschaft konnte nicht gekündigt werden' }, 502, context)
    }

    const currentPeriodEnd = typeof payload.current_period_end === 'number'
      ? new Date(payload.current_period_end * 1000).toISOString()
      : membership.currentPeriodEnd || null
    await context.env.DB.prepare(
      'UPDATE memberships SET cancel_at_period_end = 1, current_period_end = COALESCE(?, current_period_end), updated_at = ? WHERE subscription_id = ?',
    ).bind(currentPeriodEnd, new Date().toISOString(), membership.subscriptionId).run()

    return authResponse({
      canceled: payload.cancel_at_period_end === true,
      status: payload.status || 'active',
      currentPeriodEnd,
    }, 200, context)
  } catch (error) {
    console.error('Membership cancellation error', error)
    if (error instanceof Error && error.message === 'DB_NOT_CONFIGURED') {
      return authResponse({ error: 'Mitgliedschaftsservice ist noch nicht eingerichtet', code: 'configuration_missing' }, 503, context)
    }
    return authResponse({ error: 'Mitgliedschaft konnte nicht gekündigt werden' }, 500, context)
  }
}
