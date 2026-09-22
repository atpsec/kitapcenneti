import { authOptions, authResponse, getAccountFromRequest, hasTrustedRequestHeader, type AuthContext } from '../../lib/auth'
import { envString, legalConfigurationReady, productionSiteReady, siteUrl, stripeFetch } from '../../lib/stripe'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestPost = async (context: AuthContext) => {
  try {
    if (!hasTrustedRequestHeader(context)) return authResponse({ error: 'Ungültige Anfrage' }, 400, context)
    const account = await getAccountFromRequest(context)
    if (!account) return authResponse({ error: 'Melden Sie sich für die Zahlung mit einem Elternkonto an', code: 'unauthorized' }, 401, context)
    if (!account.emailVerifiedAt) {
      return authResponse({ error: 'Bestätigen Sie Ihre E-Mail-Adresse, bevor Sie ein kostenpflichtiges Abonnement starten', code: 'email_unverified' }, 403, context)
    }
    if (!legalConfigurationReady(context.env) || !productionSiteReady(context.env)) {
      return authResponse({ error: 'Der kostenpflichtige Abschluss ist noch nicht für den Produktionsbetrieb konfiguriert', code: 'configuration_missing' }, 503, context)
    }
    const body = (await context.request.json()) as { plan?: unknown }
    if (body.plan !== 'annual' && body.plan !== 'monthly') {
      return authResponse({ error: 'Ungültiger Abonnementplan' }, 400, context)
    }
    const plan = body.plan
    const priceId = plan === 'annual' ? envString(context.env.STRIPE_PRICE_ANNUAL) : envString(context.env.STRIPE_PRICE_MONTHLY)

    if (!priceId || !envString(context.env.STRIPE_SECRET_KEY)) {
      return authResponse({ error: 'Zahlung ist noch nicht eingerichtet', code: 'configuration_missing' }, 503, context)
    }

    // Do not create a second subscription for the same family account.
    const existingMembership = await context.env.DB?.prepare(
      "SELECT subscription_id as subscriptionId FROM memberships WHERE (account_id = ? OR (account_id IS NULL AND lower(email) = lower(?))) AND status IN ('active', 'trialing', 'past_due') ORDER BY updated_at DESC LIMIT 1",
    ).bind(account.id, account.email).first?.<{ subscriptionId?: string }>()
    if (existingMembership?.subscriptionId) {
      return authResponse({ error: 'Dieses Konto hat bereits ein Familien+-Abonnement', code: 'membership_exists' }, 409, context)
    }

    const requireTerms = envString(context.env.STRIPE_REQUIRE_TERMS).toLowerCase() !== 'false'
    if (requireTerms) {
      const termsUrl = envString(context.env.STRIPE_TERMS_URL)
      try {
        const parsedTermsUrl = new URL(termsUrl)
        if (parsedTermsUrl.protocol !== 'https:') throw new Error('invalid_terms_url')
      } catch {
        return authResponse({ error: 'Nutzungsbedingungen sind noch nicht für den Checkout hinterlegt', code: 'configuration_missing' }, 503, context)
      }
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
    params.set('locale', envString(context.env.STRIPE_CHECKOUT_LOCALE) || 'de')
    params.set('tax_id_collection[enabled]', 'true')
    if (requireTerms) {
      // Configure the current Terms of Service URL in Stripe Dashboard first.
      params.set('consent_collection[terms_of_service]', 'required')
    }
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
      return authResponse({ error: payload.error?.message || 'Zahlungslink konnte nicht erstellt werden' }, 502, context)
    }
    return authResponse({ url: payload.url }, 200, context)
  } catch (error) {
    console.error('Membership checkout error', error)
    if (error instanceof Error && error.message === 'DB_NOT_CONFIGURED') return authResponse({ error: 'Kontoservice ist noch nicht eingerichtet', code: 'configuration_missing' }, 503, context)
    return authResponse({ error: 'Zahlungsdienst konnte nicht erreicht werden' }, 500, context)
  }
}
