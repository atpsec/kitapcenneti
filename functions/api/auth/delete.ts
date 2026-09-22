import { authOptions, authResponse, checkRateLimit, destroySession, expiredSessionCookie, findAccountById, getAccountFromRequest, hasTrustedRequestHeader, verifyPassword, type AuthContext } from '../../lib/auth'

const CONFIRMATION = 'DELETE'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestDelete = async (context: AuthContext) => {
  try {
    if (!hasTrustedRequestHeader(context)) return authResponse({ error: 'Ungültige Anfrage' }, 400, context)
    const account = await getAccountFromRequest(context)
    if (!account) return authResponse({ error: 'Anmeldung erforderlich', code: 'unauthorized' }, 401, context)
    if (!context.env.DB) return authResponse({ error: 'Kontoservice ist noch nicht eingerichtet', code: 'configuration_missing' }, 503, context)
    if (!await checkRateLimit(context, 'account-delete', account.id, 3, 900)) {
      return authResponse({ error: 'Zu viele Löschversuche. Bitte später erneut versuchen.', code: 'rate_limited' }, 429, context)
    }
    const body = (await context.request.json()) as { password?: unknown; confirmation?: unknown }
    if (body.confirmation !== CONFIRMATION) return authResponse({ error: 'Bitte bestätigen Sie die Kontolöschung ausdrücklich', code: 'confirmation_required' }, 400, context)
    const accountWithPassword = await findAccountById(context.env, account.id)
    if (!accountWithPassword || !(await verifyPassword(typeof body.password === 'string' ? body.password : '', accountWithPassword.passwordHash, accountWithPassword.salt))) {
      return authResponse({ error: 'Das Passwort ist falsch', code: 'invalid_password' }, 401, context)
    }
    const active = await context.env.DB.prepare(
      "SELECT subscription_id as subscriptionId FROM memberships WHERE (account_id = ? OR (account_id IS NULL AND lower(email) = lower(?))) AND status IN ('active', 'trialing', 'past_due') LIMIT 1",
    ).bind(account.id, account.email).first?.<{ subscriptionId?: string }>()
    if (active?.subscriptionId) return authResponse({ error: 'Bitte kündigen Sie Ihre aktive Mitgliedschaft zuerst. Die Kontolöschung löscht keine laufende Abrechnung.', code: 'active_membership' }, 409, context)

    // Retain only the minimum billing record needed for statutory accounting;
    // detach it from the deleted account and remove the account email.
    await context.env.DB.prepare("UPDATE memberships SET account_id = NULL, email = '' WHERE account_id = ? OR (account_id IS NULL AND lower(email) = lower(?))").bind(account.id, account.email).run()
    await context.env.DB.prepare('DELETE FROM accounts WHERE id = ?').bind(account.id).run()
    await destroySession(context)
    return authResponse({ status: 'deleted' }, 200, context, { 'Set-Cookie': expiredSessionCookie(context.env) })
  } catch (error) {
    console.error('Account deletion error', error)
    if (error instanceof Error && error.message === 'DB_NOT_CONFIGURED') return authResponse({ error: 'Kontoservice ist noch nicht eingerichtet', code: 'configuration_missing' }, 503, context)
    return authResponse({ error: 'Konto konnte nicht gelöscht werden' }, 500, context)
  }
}
