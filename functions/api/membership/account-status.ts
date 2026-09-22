import { authOptions, authResponse, getAccountFromRequest, type AuthContext } from '../../lib/auth'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestGet = async (context: AuthContext) => {
  try {
    const account = await getAccountFromRequest(context)
    if (!account) return authResponse({ error: 'Giriş gerekli', code: 'unauthorized' }, 401, context)
    if (!context.env.DB) return authResponse({ plan: 'free', status: 'inactive' }, 200, context)
    const membership = await context.env.DB.prepare(
      'SELECT status, updated_at as updatedAt, current_period_end as currentPeriodEnd, customer_id as customerId, subscription_id as subscriptionId FROM memberships WHERE account_id = ? OR (account_id IS NULL AND lower(email) = lower(?)) ORDER BY updated_at DESC LIMIT 1',
    ).bind(account.id, account.email).first?.<{ status?: string; updatedAt?: string; currentPeriodEnd?: string; customerId?: string; subscriptionId?: string }>()
    const active = membership?.status === 'active' || membership?.status === 'trialing'
    return authResponse({ plan: active ? 'family_plus' : 'free', status: membership?.status || 'inactive', updatedAt: membership?.updatedAt, currentPeriodEnd: membership?.currentPeriodEnd, customerId: membership?.customerId, subscriptionId: membership?.subscriptionId }, 200, context)
  } catch (error) {
    if (error instanceof Error && error.message === 'DB_NOT_CONFIGURED') return authResponse({ plan: 'free', status: 'inactive' }, 200, context)
    console.error('Account membership status error', error)
    return authResponse({ error: 'Üyelik durumu alınamadı' }, 500, context)
  }
}
