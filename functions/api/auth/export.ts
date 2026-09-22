import { authOptions, authResponse, getAccountFromRequest, type AuthContext } from '../../lib/auth'

function parseJson<T>(value: unknown, fallback: T): T {
  if (typeof value !== 'string') return fallback
  try { return JSON.parse(value) as T } catch { return fallback }
}

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestGet = async (context: AuthContext) => {
  try {
    const account = await getAccountFromRequest(context)
    if (!account) return authResponse({ error: 'Anmeldung erforderlich', code: 'unauthorized' }, 401, context)
    if (!context.env.DB) return authResponse({ error: 'Kontoservice ist noch nicht eingerichtet', code: 'configuration_missing' }, 503, context)

    const children = (await context.env.DB.prepare(
      'SELECT id, child_name as childName, avatar, age_group as ageGroup, interests_json as interestsJson, goal, created_at as createdAt, updated_at as updatedAt FROM child_profiles WHERE account_id = ? ORDER BY created_at ASC',
    ).bind(account.id).all?.<Record<string, unknown>>())?.results || []
    const progress = (await context.env.DB.prepare(
      'SELECT child_id as childId, stars, streak, badges_json as badgesJson, stickers_json as stickersJson, counts_json as countsJson, updated_at as updatedAt FROM child_progress WHERE account_id = ? ORDER BY updated_at ASC',
    ).bind(account.id).all?.<Record<string, unknown>>())?.results || []
    const memberships = (await context.env.DB.prepare(
      'SELECT subscription_id as subscriptionId, customer_id as customerId, status, price_id as priceId, currency, billing_interval as billingInterval, cancel_at_period_end as cancelAtPeriodEnd, current_period_end as currentPeriodEnd, trial_end as trialEnd, invoice_status as invoiceStatus, updated_at as updatedAt FROM memberships WHERE account_id = ? OR (account_id IS NULL AND lower(email) = lower(?)) ORDER BY updated_at ASC',
    ).bind(account.id, account.email).all?.<Record<string, unknown>>())?.results || []

    const payload = {
      exportedAt: new Date().toISOString(),
      schemaVersion: 1,
      account: { id: account.id, email: account.email, createdAt: account.createdAt, emailVerified: Boolean(account.emailVerifiedAt) },
      childProfiles: children.map((child) => ({
        id: child.id,
        childName: child.childName,
        avatar: child.avatar,
        ageGroup: child.ageGroup,
        interests: parseJson<string[]>(child.interestsJson, []),
        goal: child.goal,
        createdAt: child.createdAt,
        updatedAt: child.updatedAt,
      })),
      childProgress: progress.map((item) => ({
        childId: item.childId,
        stars: item.stars,
        streak: item.streak,
        badges: parseJson<string[]>(item.badgesJson, []),
        stickers: parseJson<string[]>(item.stickersJson, []),
        counts: parseJson<Record<string, number>>(item.countsJson, {}),
        updatedAt: item.updatedAt,
      })),
      memberships: memberships.map((membership) => ({
        subscriptionId: membership.subscriptionId,
        customerId: membership.customerId,
        status: membership.status,
        priceId: membership.priceId,
        currency: membership.currency,
        billingInterval: membership.billingInterval,
        cancelAtPeriodEnd: membership.cancelAtPeriodEnd === 1,
        currentPeriodEnd: membership.currentPeriodEnd,
        trialEnd: membership.trialEnd,
        invoiceStatus: membership.invoiceStatus,
        updatedAt: membership.updatedAt,
      })),
    }
    return authResponse(payload, 200, context, {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Disposition': 'attachment; filename="kitapcenneti-datenexport.json"',
      'Cache-Control': 'no-store, private',
    })
  } catch (error) {
    if (error instanceof Error && error.message === 'DB_NOT_CONFIGURED') return authResponse({ error: 'Kontoservice ist noch nicht eingerichtet', code: 'configuration_missing' }, 503, context)
    console.error('Account export error', error)
    return authResponse({ error: 'Datenexport konnte nicht erstellt werden' }, 500, context)
  }
}
