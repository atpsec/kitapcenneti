import { authOptions, authResponse, getAccountFromRequest, hasTrustedRequestHeader, type AuthContext } from '../../lib/auth'
import { safeId, siteUrl, stripeFetch } from '../../lib/stripe'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestPost = async (context: AuthContext) => {
  try {
    if (!hasTrustedRequestHeader(context)) return authResponse({ error: 'Ungültige Anfrage' }, 400, context)
    const account = await getAccountFromRequest(context)
    if (!account) return authResponse({ error: 'Anmeldung erforderlich', code: 'unauthorized' }, 401, context)
    if (!context.env.DB) return authResponse({ error: 'Mitgliedschaftsservice ist noch nicht eingerichtet', code: 'configuration_missing' }, 503, context)
    const body = (await context.request.json()) as { sessionId?: unknown }
    const sessionId = safeId(body.sessionId, 'cs_')
    if (!sessionId) return authResponse({ error: 'Ungültige Zahlungssitzung' }, 400, context)

    const response = await stripeFetch(context.env, 'checkout/sessions/' + encodeURIComponent(sessionId) + '?expand[]=subscription')
    const session = (await response.json()) as {
      payment_status?: string
      customer?: string
      customer_details?: { email?: string }
      customer_email?: string
      client_reference_id?: string
      metadata?: Record<string, string>
      subscription?: { id?: string; status?: string; current_period_end?: number }
      url?: string
    }

    if (!response.ok || !session.subscription?.id) return authResponse({ error: 'Mitgliedschaft konnte nicht bestätigt werden' }, 502, context)
    if (session.payment_status !== 'paid' && session.payment_status !== 'no_payment_required') {
      return authResponse({ error: 'Die Zahlung ist noch nicht bestätigt', code: 'payment_pending' }, 402, context)
    }
    const linkedAccountId = session.metadata?.account_id || session.client_reference_id || ''
    if (linkedAccountId !== account.id) return authResponse({ error: 'Zahlungs- und Anmeldekonto stimmen nicht überein' }, 403, context)
    const activeStatuses = new Set(['active', 'trialing'])
    if (!activeStatuses.has(session.subscription.status || '')) return authResponse({ error: 'Mitgliedschaft ist noch nicht aktiv' }, 402, context)

    const customerId = session.customer || ''
    const email = session.customer_details?.email || session.customer_email || account.email
    const now = new Date().toISOString()
    await context.env.DB.prepare(
      "INSERT INTO memberships (subscription_id, customer_id, email, status, updated_at, account_id, last_event_id, current_period_end) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(subscription_id) DO UPDATE SET customer_id=excluded.customer_id, email=excluded.email, status=excluded.status, updated_at=excluded.updated_at, account_id=excluded.account_id, current_period_end=excluded.current_period_end",
    ).bind(
      session.subscription.id,
      customerId,
      email,
      session.subscription.status || 'active',
      now,
      account.id,
      'checkout-confirmed',
      session.subscription.current_period_end ? new Date(session.subscription.current_period_end * 1000).toISOString() : null,
    ).run()

    return authResponse({
      plan: 'family_plus',
      status: session.subscription.status,
      email: session.customer_details?.email || session.customer_email || '',
      customerId: session.customer || '',
      subscriptionId: session.subscription.id,
      currentPeriodEnd: session.subscription.current_period_end
        ? new Date(session.subscription.current_period_end * 1000).toISOString()
        : undefined,
      siteUrl: siteUrl(context.env),
    }, 200, context)
  } catch (error) {
    console.error('Membership confirmation error', error)
    if (error instanceof Error && error.message === 'DB_NOT_CONFIGURED') return authResponse({ error: 'Mitgliedschaftsservice ist noch nicht eingerichtet', code: 'configuration_missing' }, 503, context)
    return authResponse({ error: 'Mitgliedschaft konnte nicht bestätigt werden' }, 500, context)
  }
}
