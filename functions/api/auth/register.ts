import {
  accountPayload,
  authOptions,
  authResponse,
  checkRateLimit,
  createAccount,
  createSession,
  hasTrustedRequestHeader,
  sessionCookie,
  validEmail,
  validPassword,
  type AuthContext,
} from '../../lib/auth'

export const onRequestOptions = (context: AuthContext) => authOptions(context)

export const onRequestPost = async (context: AuthContext) => {
  try {
    if (!hasTrustedRequestHeader(context)) return authResponse({ error: 'Geçersiz istek' }, 400, context)
    const body = (await context.request.json()) as { email?: unknown; password?: unknown }
    const email = validEmail(body.email)
    const password = validPassword(body.password)
    if (!email) return authResponse({ error: 'Geçerli bir e-posta gerekli', code: 'invalid_email' }, 400, context)
    if (!password) return authResponse({ error: 'Şifre en az 8 karakter olmalı', code: 'invalid_password' }, 400, context)
    if (!await checkRateLimit(context, 'register', email, 5)) return authResponse({ error: 'Çok fazla hesap denemesi yapıldı. Lütfen 15 dakika sonra tekrar deneyin.', code: 'rate_limited' }, 429, context)
    const account = await createAccount(context.env, email, password)
    const token = await createSession(context.env, account.id)
    return authResponse({ account: accountPayload(account) }, 201, context, { 'Set-Cookie': sessionCookie(token, context.env) })
  } catch (error) {
    if (error instanceof Error && error.message === 'ACCOUNT_EXISTS') {
      return authResponse({ error: 'Bu e-posta ile bir hesap zaten var', code: 'account_exists' }, 409, context)
    }
    if (error instanceof Error && error.message === 'DB_NOT_CONFIGURED') {
      return authResponse({ error: 'Hesap servisi henüz yapılandırılmadı', code: 'configuration_missing' }, 503, context)
    }
    console.error('Account registration error', error)
    return authResponse({ error: 'Hesap oluşturulamadı' }, 500, context)
  }
}
