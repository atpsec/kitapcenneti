import { CORS_HEADERS, envString, json, safeEmail, siteUrl, stripeFetch, type MembershipEnv } from '../../lib/stripe'

export const onRequestOptions = async () => new Response(null, { status: 204, headers: CORS_HEADERS })

export const onRequestPost = async (context: { request: Request; env: MembershipEnv }) => {
  try {
    const body = (await context.request.json()) as { plan?: unknown; email?: unknown }
    const plan = body.plan === 'annual' ? 'annual' : 'monthly'
    const email = safeEmail(body.email)
    const priceId = plan === 'annual' ? envString(context.env.STRIPE_PRICE_ANNUAL) : envString(context.env.STRIPE_PRICE_MONTHLY)

    if (!email) return json({ error: 'Geçerli bir e-posta gerekli' }, 400)
    if (!priceId || !envString(context.env.STRIPE_SECRET_KEY)) {
      return json({ error: 'Ödeme yapılandırması henüz tamamlanmadı', code: 'configuration_missing' }, 503)
    }

    const params = new URLSearchParams()
    params.set('mode', 'subscription')
    params.set('line_items[0][price]', priceId)
    params.set('line_items[0][quantity]', '1')
    params.set('customer_email', email)
    params.set('success_url', siteUrl(context.env) + '/?membership=success&session_id={CHECKOUT_SESSION_ID}#membership')
    params.set('cancel_url', siteUrl(context.env) + '/#membership')
    params.set('allow_promotion_codes', 'true')
    params.set('billing_address_collection', 'auto')
    params.set('metadata[product]', 'kitapcenneti-family-plus')
    params.set('metadata[plan]', plan)

    const response = await stripeFetch(context.env, 'checkout/sessions', {
      method: 'POST',
      body: params.toString(),
    })
    const payload = (await response.json()) as { url?: string; error?: { message?: string } }
    if (!response.ok || !payload.url) {
      return json({ error: payload.error?.message || 'Ödeme bağlantısı oluşturulamadı' }, 502)
    }
    return json({ url: payload.url })
  } catch (error) {
    console.error('Membership checkout error', error)
    return json({ error: 'Ödeme servisine bağlanılamadı' }, 500)
  }
}
