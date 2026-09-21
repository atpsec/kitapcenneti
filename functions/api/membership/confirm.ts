import { CORS_HEADERS, json, safeId, siteUrl, stripeFetch, type MembershipEnv } from '../../lib/stripe'

export const onRequestOptions = async () => new Response(null, { status: 204, headers: CORS_HEADERS })

export const onRequestPost = async (context: { request: Request; env: MembershipEnv }) => {
  try {
    const body = (await context.request.json()) as { sessionId?: unknown }
    const sessionId = safeId(body.sessionId, 'cs_')
    if (!sessionId) return json({ error: 'Geçersiz ödeme oturumu' }, 400)

    const response = await stripeFetch(context.env, 'checkout/sessions/' + encodeURIComponent(sessionId) + '?expand[]=subscription')
    const session = (await response.json()) as {
      payment_status?: string
      customer?: string
      customer_details?: { email?: string }
      customer_email?: string
      subscription?: { id?: string; status?: string; current_period_end?: number }
      url?: string
    }

    if (!response.ok || !session.subscription?.id) return json({ error: 'Üyelik doğrulanamadı' }, 502)
    const activeStatuses = new Set(['active', 'trialing'])
    if (!activeStatuses.has(session.subscription.status || '')) return json({ error: 'Üyelik henüz aktif değil' }, 402)

    return json({
      plan: 'family_plus',
      status: session.subscription.status,
      email: session.customer_details?.email || session.customer_email || '',
      customerId: session.customer || '',
      subscriptionId: session.subscription.id,
      currentPeriodEnd: session.subscription.current_period_end
        ? new Date(session.subscription.current_period_end * 1000).toISOString()
        : undefined,
      siteUrl: siteUrl(context.env),
    })
  } catch (error) {
    console.error('Membership confirmation error', error)
    return json({ error: 'Üyelik doğrulanamadı' }, 500)
  }
}
