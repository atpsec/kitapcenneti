import { json, type MembershipEnv } from '../../lib/stripe'

const HANDLED_EVENTS = new Set([
  'checkout.session.completed',
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted',
  'invoice.payment_succeeded',
  'invoice.payment_failed',
])

type StripeEvent = {
  id?: string
  type?: string
  data?: { object?: Record<string, unknown> }
}

function stringValue(value: unknown): string {
  return typeof value === 'string' ? value : ''
}

function recordValue(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' ? value as Record<string, unknown> : {}
}

function constantTimeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false
  let difference = 0
  for (let index = 0; index < a.length; index += 1) difference |= a[index] ^ b[index]
  return difference === 0
}

function fromHex(value: string): Uint8Array | null {
  if (!/^[a-f0-9]{64}$/i.test(value)) return null
  const bytes = new Uint8Array(32)
  for (let index = 0; index < bytes.length; index += 1) bytes[index] = Number.parseInt(value.slice(index * 2, index * 2 + 2), 16)
  return bytes
}

async function verifySignature(payload: string, header: string, secret: string): Promise<boolean> {
  const parts = header.split(',')
  const timestamp = parts.find((part) => part.startsWith('t='))?.slice(2) || ''
  const signatures = parts.filter((part) => part.startsWith('v1=')).map((part) => part.slice(3))
  const timestampNumber = Number(timestamp)
  if (!timestamp || !Number.isFinite(timestampNumber) || Math.abs(Date.now() / 1000 - timestampNumber) > 300 || !signatures.length) return false
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  const digest = new Uint8Array(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(timestamp + '.' + payload)))
  return signatures.some((value) => {
    const candidate = fromHex(value)
    return candidate ? constantTimeEqual(digest, candidate) : false
  })
}

function isoFromUnix(value: unknown): string | null {
  const number = typeof value === 'number' && Number.isFinite(value) ? value : 0
  return number > 0 ? new Date(number * 1000).toISOString() : null
}

async function persistEvent(env: MembershipEnv, event: StripeEvent) {
  if (!env.DB || !event.id || !event.type || !HANDLED_EVENTS.has(event.type)) return

  const alreadyProcessed = await env.DB.prepare('SELECT event_id FROM stripe_events WHERE event_id = ? LIMIT 1').bind(event.id).first?.()
  if (alreadyProcessed) return

  const object = event.data?.object || {}
  const metadata = recordValue(object.metadata)
  const subscriptionId = stringValue(object.subscription) || (event.type.startsWith('customer.subscription') ? stringValue(object.id) : '')
  if (!subscriptionId) return

  const customerId = stringValue(object.customer)
  const existing = await env.DB.prepare('SELECT account_id as accountId, email, status FROM memberships WHERE subscription_id = ? OR (customer_id = ? AND customer_id <> ?) ORDER BY updated_at DESC LIMIT 1').bind(subscriptionId, customerId, '').first?.<{ accountId?: string; email?: string; status?: string }>()
  let accountId = stringValue(metadata.account_id) || stringValue(object.client_reference_id) || existing?.accountId || ''
  let email = stringValue(object.customer_email) || stringValue(recordValue(object.customer_details).email) || existing?.email || ''
  if (!accountId && email) {
    const account = await env.DB.prepare('SELECT id FROM accounts WHERE lower(email) = lower(?) LIMIT 1').bind(email).first?.<{ id?: string }>()
    accountId = account?.id || ''
  }
  if (!accountId && customerId) {
    const account = await env.DB.prepare('SELECT account_id as accountId FROM memberships WHERE customer_id = ? AND account_id IS NOT NULL ORDER BY updated_at DESC LIMIT 1').bind(customerId).first?.<{ accountId?: string }>()
    accountId = account?.accountId || ''
  }

  const status = event.type === 'customer.subscription.deleted'
    ? 'canceled'
    : event.type === 'invoice.payment_failed'
      ? 'past_due'
      : stringValue(object.status) || (event.type === 'checkout.session.completed' ? 'active' : existing?.status || 'active')
  const items = recordValue(object.items)
  const data = Array.isArray(items.data) ? items.data : []
  const firstItem = recordValue(data[0])
  const price = recordValue(firstItem.price)
  const priceId = stringValue(price.id)
  const currency = stringValue(price.currency)
  const billingInterval = stringValue(recordValue(price.recurring).interval)
  const cancelAtPeriodEnd = object.cancel_at_period_end === true ? 1 : 0
  const currentPeriodEnd = isoFromUnix(object.current_period_end)
  const trialEnd = isoFromUnix(object.trial_end)
  const invoiceStatus = event.type.startsWith('invoice.') ? (event.type === 'invoice.payment_failed' ? 'failed' : 'paid') : ''

  await env.DB.prepare(
    "INSERT INTO memberships (subscription_id, customer_id, email, status, updated_at, account_id, price_id, currency, billing_interval, cancel_at_period_end, current_period_end, trial_end, invoice_status, last_event_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(subscription_id) DO UPDATE SET customer_id=excluded.customer_id, email=CASE WHEN excluded.email <> '' THEN excluded.email ELSE memberships.email END, status=excluded.status, updated_at=excluded.updated_at, account_id=CASE WHEN excluded.account_id <> '' THEN excluded.account_id ELSE memberships.account_id END, price_id=CASE WHEN excluded.price_id <> '' THEN excluded.price_id ELSE memberships.price_id END, currency=CASE WHEN excluded.currency <> '' THEN excluded.currency ELSE memberships.currency END, billing_interval=CASE WHEN excluded.billing_interval <> '' THEN excluded.billing_interval ELSE memberships.billing_interval END, cancel_at_period_end=excluded.cancel_at_period_end, current_period_end=COALESCE(excluded.current_period_end, memberships.current_period_end), trial_end=COALESCE(excluded.trial_end, memberships.trial_end), invoice_status=CASE WHEN excluded.invoice_status <> '' THEN excluded.invoice_status ELSE memberships.invoice_status END, last_event_id=excluded.last_event_id",
  ).bind(subscriptionId, customerId, email, status, new Date().toISOString(), accountId, priceId, currency, billingInterval, cancelAtPeriodEnd, currentPeriodEnd, trialEnd, invoiceStatus, event.id).run()
  await env.DB.prepare('INSERT OR IGNORE INTO stripe_events (event_id, event_type, received_at) VALUES (?, ?, ?)').bind(event.id, event.type, new Date().toISOString()).run()
}

export const onRequestPost = async (context: { request: Request; env: MembershipEnv }) => {
  const body = await context.request.text()
  const secret = context.env.STRIPE_WEBHOOK_SECRET || ''
  const signature = context.request.headers.get('stripe-signature') || ''
  if (!secret || !(await verifySignature(body, signature, secret))) return json({ error: 'Invalid signature' }, 400)

  try {
    const event = JSON.parse(body) as StripeEvent
    if (!event.id || !event.type) return json({ error: 'Invalid event' }, 400)
    await persistEvent(context.env, event)
    return json({ received: true })
  } catch (error) {
    console.error('Membership webhook error', error)
    return json({ error: 'Webhook işlenemedi' }, 500)
  }
}
