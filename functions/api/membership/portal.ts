import { authOptions, authResponse, getAccountFromRequest, hasTrustedRequestHeader, type AuthContext } from '../../lib/auth'
import { envString, siteUrl, stripeFetch } from '../../lib/stripe'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestPost = async (context: AuthContext) => {
  try {
    if (!hasTrustedRequestHeader(context)) return authResponse({ error: 'Geçersiz istek' }, 400, context)
    const account = await getAccountFromRequest(context)
    if (!account) return authResponse({ error: 'Giriş gerekli', code: 'unauthorized' }, 401, context)
    if (!context.env.DB || !envString(context.env.STRIPE_SECRET_KEY)) {
      return authResponse({ error: 'Üyelik yönetimi henüz yapılandırılmadı', code: 'configuration_missing' }, 503, context)
    }
    const membership = await context.env.DB.prepare(
      'SELECT customer_id as customerId FROM memberships WHERE lower(email) = lower(?) AND status IN (\'active\', \'trialing\', \'past_due\') ORDER BY updated_at DESC LIMIT 1',
    ).bind(account.email).first?.<{ customerId?: string }>()
    if (!membership?.customerId) return authResponse({ error: 'Aktif bir üyelik bulunamadı', code: 'membership_missing' }, 404, context)

    const params = new URLSearchParams()
    params.set('customer', membership.customerId)
    params.set('return_url', siteUrl(context.env) + '/#membership')
    const response = await stripeFetch(context.env, 'billing_portal/sessions', { method: 'POST', body: params.toString() })
    const payload = (await response.json()) as { url?: string; error?: { message?: string } }
    if (!response.ok || !payload.url) return authResponse({ error: payload.error?.message || 'Üyelik yönetim ekranı açılamadı' }, 502, context)
    return authResponse({ url: payload.url }, 200, context)
  } catch (error) {
    if (error instanceof Error && error.message === 'DB_NOT_CONFIGURED') return authResponse({ error: 'Üyelik yönetimi henüz yapılandırılmadı', code: 'configuration_missing' }, 503, context)
    console.error('Membership portal error', error)
    return authResponse({ error: 'Üyelik yönetim ekranı açılamadı' }, 500, context)
  }
}
