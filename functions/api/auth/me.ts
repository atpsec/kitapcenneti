import { accountPayload, authOptions, authResponse, getAccountFromRequest, type AuthContext } from '../../lib/auth'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestGet = async (context: AuthContext) => {
  try {
    const account = await getAccountFromRequest(context)
    if (!account) return authResponse({ authenticated: false }, 200, context)
    return authResponse({ authenticated: true, account: accountPayload(account) }, 200, context)
  } catch (error) {
    if (error instanceof Error && error.message === 'DB_NOT_CONFIGURED') {
      return authResponse({ authenticated: false, code: 'configuration_missing' }, 200, context)
    }
    console.error('Account session error', error)
    return authResponse({ error: 'Kontostatus konnte nicht geladen werden' }, 500, context)
  }
}
