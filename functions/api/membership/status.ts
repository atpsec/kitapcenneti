import { authOptions, authResponse, getAccountFromRequest, type AuthContext } from '../../lib/auth'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestGet = async (context: AuthContext) => {
  try {
    const account = await getAccountFromRequest(context)
    if (!account) return authResponse({ error: 'Anmeldung erforderlich', code: 'unauthorized' }, 401, context)
    if (!context.env.DB) return authResponse({ plan: 'free', status: 'inactive' }, 200, context)
    const membership = await context.env.DB.prepare(
      "SELECT status, current_period_end as currentPeriodEnd, customer_id as customerId, subscription_id as subscriptionId, cancel_at_period_end as cancelAtPeriodEnd FROM memberships WHERE account_id = ? OR (account_id IS NULL AND lower(email) = lower(?)) ORDER BY updated_at DESC LIMIT 1",
    ).bind(account.id, account.email).first?.<{ status?: string; currentPeriodEnd?: string; customerId?: string; subscriptionId?: string; cancelAtPeriodEnd?: number }>()
    const status = membership?.status || 'inactive'
    return authResponse({
      plan: status === 'active' || status === 'trialing' ? 'family_plus' : 'free',
      status,
      currentPeriodEnd: membership?.currentPeriodEnd,
      customerId: membership?.customerId,
      subscriptionId: membership?.subscriptionId,
      cancelAtPeriodEnd: membership?.cancelAtPeriodEnd === 1,
    }, 200, context)
  } catch (error) {
    console.error('Membership status error', error)
    return authResponse({ error: 'Mitgliedschaftsstatus konnte nicht geladen werden' }, 500, context)
  }
}
