import { authOptions, authResponse, getAccountFromRequest, type AuthContext } from '../../lib/auth'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestGet = async (context: AuthContext) => {
  try {
    const account = await getAccountFromRequest(context)
    if (!account) return authResponse({ error: 'Giriş gerekli', code: 'unauthorized' }, 401, context)
    if (!context.env.DB) return authResponse({ plan: 'free', status: 'inactive' }, 200, context)
    const membership = await context.env.DB.prepare(
      'SELECT status, updated_at as updatedAt FROM memberships WHERE lower(email) = lower(?) ORDER BY updated_at DESC LIMIT 1',
    ).bind(account.email).first?.<{ status?: string; updatedAt?: string }>()
    const active = membership?.status === 'active' || membership?.status === 'trialing'
    return authResponse({ plan: active ? 'family_plus' : 'free', status: membership?.status || 'inactive', updatedAt: membership?.updatedAt }, 200, context)
  } catch (error) {
    if (error instanceof Error && error.message === 'DB_NOT_CONFIGURED') return authResponse({ plan: 'free', status: 'inactive' }, 200, context)
    console.error('Account membership status error', error)
    return authResponse({ error: 'Üyelik durumu alınamadı' }, 500, context)
  }
}
