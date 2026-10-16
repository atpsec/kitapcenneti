/**
 * Resolve a membership state only from subscription lifecycle events.
 * Checkout sessions and invoices have their own `status` values, which must
 * never be copied into the membership status column.
 */
export function resolveMembershipStatus(eventType: string, objectStatus: string, existingStatus?: string): string {
  if (eventType === 'customer.subscription.deleted') return 'canceled'
  if (eventType === 'invoice.payment_failed') return 'past_due'

  if (eventType === 'checkout.session.completed' || eventType === 'invoice.payment_succeeded') {
    return existingStatus || 'payment_pending'
  }

  return objectStatus || existingStatus || 'active'
}
