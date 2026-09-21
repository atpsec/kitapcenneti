import {
  accountPayload,
  authOptions,
  authResponse,
  createSession,
  findAccountByEmail,
  sessionCookie,
  validEmail,
  validPassword,
  verifyPassword,
  type AuthContext,
} from '../../lib/auth'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestPost = async (context: AuthContext) => {
  try {
    const body = (await context.request.json()) as { email?: unknown; password?: unknown }
    const email = validEmail(body.email)
    const password = validPassword(body.password)
    if (!email || !password) return authResponse({ error: 'E-posta veya şifre hatalı' }, 401, context)
    const account = await findAccountByEmail(context.env, email)
    if (!account || !(await verifyPassword(password, account.passwordHash, account.salt))) {
      return authResponse({ error: 'E-posta veya şifre hatalı' }, 401, context)
    }
    const token = await createSession(context.env, account.id)
    return authResponse({ account: accountPayload(account) }, 200, context, { 'Set-Cookie': sessionCookie(token, context.env) })
  } catch (error) {
    if (error instanceof Error && error.message === 'DB_NOT_CONFIGURED') {
      return authResponse({ error: 'Hesap servisi henüz yapılandırılmadı', code: 'configuration_missing' }, 503, context)
    }
    console.error('Account login error', error)
    return authResponse({ error: 'Giriş yapılamadı' }, 500, context)
  }
}
