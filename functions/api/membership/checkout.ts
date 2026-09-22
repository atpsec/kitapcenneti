import { authOptions, authResponse, getAccountFromRequest, hasTrustedRequestHeader, type AuthContext } from '../../lib/auth'
import { envString, siteUrl, stripeFetch } from '../../lib/stripe'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestPost = async (context: AuthContext) => {
  try {
    if (!hasTrustedRequestHeader(context)) return authResponse({ error: 'Geçersiz istek' }, 400, context)
    const account = await getAccountFromRequest(context)
    if (!account) return authResponse({ error: 'Ödeme için ebeveyn hesabıyla giriş yapın', code: 'unauthorized' }, 401, context)
    const body = (await context.request.json()) as { plan?: unknown }
    const plan = body.plan === 'annual' ? 'annual' : 'monthly'
    const priceId = plan === 'annual' ? envString(context.env.STRIPE_PRICE_ANNUAL) : envString(context.env.STRIPE_PRICE_MONTHLY)

    if (!priceId || !envString(context.env.STRIPE_SECRET_KEY)) {
      return authResponse({ error: 'Ödeme yapılandırması henüz tamamlanmadı', code: 'configuration_missing' }, 503, context)
    }

    const params = new URLSearchParams()
    params.set('mode', 'subscription')
    params.set('line_items[0][price]', priceId)
    params.set('line_items[0][quantity]', '1')
    params.set('customer_email', account.email)
    params.set('client_reference_id', account.id)
    params.set('success_url', siteUrl(context.env) + '/?membership=success&session_id={CHECKOUT_SESSION_ID}#membership')
    params.set('cancel_url', siteUrl(context.env) + '/#membership')
    params.set('allow_promotion_codes', 'true')
    params.set('billing_address_collection', 'auto')
    params.set('metadata[product]', 'kitapcenneti-family-plus')
    params.set('metadata[plan]', plan)
    params.set('metadata[account_id]', account.id)
    params.set('subscription_data[metadata][account_id]', account.id)
    params.set('subscription_data[metadata][plan]', plan)

    const response = await stripeFetch(context.env, 'checkout/sessions', {
      method: 'POST',
      body: params.toString(),
    })
    const payload = (await response.json()) as { url?: string; error?: { message?: string } }
    if (!response.ok || !payload.url) {
      return authResponse({ error: payload.error?.message || 'Ödeme bağlantısı oluşturulamadı' }, 502, context)
    }
    return authResponse({ url: payload.url }, 200, context)
  } catch (error) {
    console.error('Membership checkout error', error)
    if (error instanceof Error && error.message === 'DB_NOT_CONFIGURED') return authResponse({ error: 'Hesap servisi henüz yapılandırılmadı', code: 'configuration_missing' }, 503, context)
    return authResponse({ error: 'Ödeme servisine bağlanılamadı' }, 500, context)
  }
}
