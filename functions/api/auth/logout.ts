import { authOptions, authResponse, destroySession, expiredSessionCookie, hasTrustedRequestHeader, type AuthContext } from '../../lib/auth'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestPost = async (context: AuthContext) => {
  if (!hasTrustedRequestHeader(context)) return authResponse({ error: 'Geçersiz istek' }, 400, context)
  await destroySession(context)
  return authResponse({ ok: true }, 200, context, { 'Set-Cookie': expiredSessionCookie() })
}
