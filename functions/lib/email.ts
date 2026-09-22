import { envString, siteUrl, type MembershipEnv } from './stripe'

export interface AuthEmailEnv extends MembershipEnv {
  AUTH_EMAIL_PROVIDER?: string
  AUTH_EMAIL_API_KEY?: string
  AUTH_EMAIL_FROM?: string
  AUTH_EMAIL_APP_URL?: string
}

export function authEmailConfigured(env: AuthEmailEnv): boolean {
  return envString(env.AUTH_EMAIL_PROVIDER).toLowerCase() === 'resend'
    && Boolean(envString(env.AUTH_EMAIL_API_KEY))
    && Boolean(envString(env.AUTH_EMAIL_FROM))
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character] || character)
}

export function authAppUrl(env: AuthEmailEnv): string {
  return (envString(env.AUTH_EMAIL_APP_URL) || siteUrl(env)).replace(/\/$/, '')
}

export async function sendAuthEmail(
  env: AuthEmailEnv,
  to: string,
  subject: string,
  text: string,
  actionLabel: string,
  actionUrl: string,
): Promise<void> {
  if (!authEmailConfigured(env)) throw new Error('EMAIL_NOT_CONFIGURED')
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${envString(env.AUTH_EMAIL_API_KEY)}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: envString(env.AUTH_EMAIL_FROM),
      to: [to],
      subject,
      text,
      html: `<p>${escapeHtml(text).replace(/\n/g, '<br>')}</p><p><a href="${escapeHtml(actionUrl)}">${escapeHtml(actionLabel)}</a></p>`,
    }),
  })
  if (!response.ok) throw new Error('EMAIL_DELIVERY_FAILED')
}
