import { authOptions, authResponse, destroySession, expiredSessionCookie, type AuthContext } from '../../lib/auth'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestPost = async (context: AuthContext) => {
  await destroySession(context)
  return authResponse({ ok: true }, 200, context, { 'Set-Cookie': expiredSessionCookie() })
}
