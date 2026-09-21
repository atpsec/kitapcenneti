import { json, type MembershipEnv } from '../../lib/stripe'

function hex(bytes: ArrayBuffer): string {
  return Array.from(new Uint8Array(bytes)).map((value) => value.toString(16).padStart(2, '0')).join('')
}

async function verifySignature(payload: string, header: string, secret: string): Promise<boolean> {
  const timestamp = header.split(',').find((part) => part.startsWith('t='))?.slice(2) || ''
  const signature = header.split(',').find((part) => part.startsWith('v1='))?.slice(3) || ''
  if (!timestamp || !signature || Math.abs(Date.now() / 1000 - Number(timestamp)) > 300) return false
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  const digest = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(timestamp + '.' + payload))
  return hex(digest) === signature
}

async function persistEvent(env: MembershipEnv, event: { type?: string; data?: { object?: Record<string, unknown> } }) {
  if (!env.DB) return
  const object = event.data?.object || {}
  const customerId = typeof object.customer === 'string' ? object.customer : ''
  const subscriptionId = typeof object.id === 'string' ? object.id : typeof object.subscription === 'string' ? object.subscription : ''
  const status = typeof object.status === 'string' ? object.status : event.type === 'customer.subscription.deleted' ? 'canceled' : 'active'
  const email = typeof object.customer_email === 'string' ? object.customer_email : ''
  await env.DB.prepare(
    "INSERT INTO memberships (subscription_id, customer_id, email, status, updated_at) VALUES (?, ?, ?, ?, datetime('now')) ON CONFLICT(subscription_id) DO UPDATE SET customer_id=excluded.customer_id, email=excluded.email, status=excluded.status, updated_at=excluded.updated_at",
  ).bind(subscriptionId, customerId, email, status).run()
}

export const onRequestPost = async (context: { request: Request; env: MembershipEnv }) => {
  const body = await context.request.text()
  const secret = context.env.STRIPE_WEBHOOK_SECRET || ''
  const signature = context.request.headers.get('stripe-signature') || ''
  if (!secret || !(await verifySignature(body, signature, secret))) return json({ error: 'Invalid signature' }, 400)

  try {
    const event = JSON.parse(body) as { type?: string; data?: { object?: Record<string, unknown> } }
    await persistEvent(context.env, event)
    return json({ received: true })
  } catch (error) {
    console.error('Membership webhook error', error)
    return json({ error: 'Webhook işlenemedi' }, 500)
  }
}
