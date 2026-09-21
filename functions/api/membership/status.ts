import { CORS_HEADERS, json, safeId, stripeFetch, type MembershipEnv } from '../../lib/stripe'

export const onRequestOptions = async () => new Response(null, { status: 204, headers: CORS_HEADERS })

export const onRequestGet = async (context: { request: Request; env: MembershipEnv }) => {
  try {
    const url = new URL(context.request.url)
    const customerId = safeId(url.searchParams.get('customerId'), 'cus_')
    const subscriptionId = safeId(url.searchParams.get('subscriptionId'), 'sub_')
    if (!customerId || !subscriptionId) return json({ error: 'Üyelik kimliği eksik' }, 400)

    const response = await stripeFetch(context.env, 'subscriptions/' + encodeURIComponent(subscriptionId))
    const subscription = (await response.json()) as {
      customer?: string
      status?: string
      current_period_end?: number
    }

    if (!response.ok || subscription.customer !== customerId) return json({ error: 'Üyelik bulunamadı' }, 404)

    return json({
      plan: subscription.status === 'active' || subscription.status === 'trialing' ? 'family_plus' : 'free',
      status: subscription.status || 'canceled',
      currentPeriodEnd: subscription.current_period_end
        ? new Date(subscription.current_period_end * 1000).toISOString()
        : undefined,
    })
  } catch (error) {
    console.error('Membership status error', error)
    return json({ error: 'Üyelik durumu alınamadı' }, 500)
  }
}
