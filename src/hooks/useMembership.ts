import { useCallback, useEffect, useMemo, useState } from 'react'
import { showToast } from '../components/Toast'

export type MembershipPlan = 'free' | 'family_plus'
export type MembershipStatus = 'inactive' | 'active' | 'trialing' | 'past_due' | 'canceled'

export interface MembershipState {
  plan: MembershipPlan
  status: MembershipStatus
  email: string
  customerId?: string
  subscriptionId?: string
  currentPeriodEnd?: string
  updatedAt?: string
}

const STORAGE_KEY = 'kitapcenneti-membership-v1'
const MEMBERSHIP_EVENT = 'kitapcenneti-membership'

const EMPTY_STATE: MembershipState = {
  plan: 'free',
  status: 'inactive',
  email: '',
}

function readState(): MembershipState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return EMPTY_STATE
    const parsed = JSON.parse(raw) as Partial<MembershipState>
    return {
      ...EMPTY_STATE,
      ...parsed,
      plan: parsed.plan === 'family_plus' ? 'family_plus' : 'free',
      status: parsed.status || 'inactive',
    }
  } catch {
    return EMPTY_STATE
  }
}

function writeState(next: MembershipState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  window.dispatchEvent(new CustomEvent(MEMBERSHIP_EVENT))
}

function apiBase() {
  const configured = import.meta.env.VITE_MEMBERSHIP_API_BASE
  if (typeof configured === 'string' && configured.trim()) return configured.replace(/\/$/, '')
  if (typeof window !== 'undefined' && !window.location.hostname.endsWith('github.io')) return '/api'
  return ''
}

function paymentLink(plan: 'monthly' | 'annual') {
  const value =
    plan === 'annual'
      ? import.meta.env.VITE_STRIPE_PAYMENT_LINK_ANNUAL
      : import.meta.env.VITE_STRIPE_PAYMENT_LINK_MONTHLY
  return typeof value === 'string' && value.trim() ? value.trim() : ''
}

export function useMembership() {
  const [membership, setMembership] = useState<MembershipState>(() => readState())
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    const sync = () => setMembership(readState())
    window.addEventListener('storage', sync)
    window.addEventListener(MEMBERSHIP_EVENT, sync)
    return () => {
      window.removeEventListener('storage', sync)
      window.removeEventListener(MEMBERSHIP_EVENT, sync)
    }
  }, [])

  const isPlus = membership.plan === 'family_plus' && ['active', 'trialing'].includes(membership.status)

  const update = useCallback((next: Partial<MembershipState>) => {
    const merged = { ...readState(), ...next, updatedAt: new Date().toISOString() }
    writeState(merged)
    setMembership(merged)
  }, [])

  const checkout = useCallback(async (plan: 'monthly' | 'annual', email: string) => {
    const normalizedEmail = email.trim().toLowerCase()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      showToast('Devam etmek için geçerli bir e-posta yazın')
      return
    }

    setBusy(true)
    update({ email: normalizedEmail })

    const base = apiBase()
    if (base) {
      try {
        const response = await fetch(base + '/membership/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ plan, email: normalizedEmail }),
        })
        const payload = (await response.json()) as { url?: string; error?: string }
        if (response.ok && payload.url) {
          window.location.href = payload.url
          return
        }
        showToast(payload.error || 'Ödeme bağlantısı oluşturulamadı')
      } catch {
        showToast('Ödeme servisine ulaşılamadı')
      } finally {
        setBusy(false)
      }
      return
    }

    const link = paymentLink(plan)
    if (link) {
      window.location.href = link
      return
    }

    showToast('Ödeme hesabı henüz bağlanmadı; plan ekranı hazır.')
    setBusy(false)
  }, [update])

  const confirmCheckout = useCallback(async (sessionId: string) => {
    const base = apiBase()
    if (!base || !sessionId) return false
    try {
      const response = await fetch(base + '/membership/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ sessionId }),
      })
      const payload = (await response.json()) as Partial<MembershipState> & { error?: string }
      if (!response.ok || payload.plan !== 'family_plus') return false
      update({
        plan: 'family_plus',
        status: payload.status === 'trialing' ? 'trialing' : 'active',
        email: payload.email || membership.email,
        customerId: payload.customerId,
        subscriptionId: payload.subscriptionId,
        currentPeriodEnd: payload.currentPeriodEnd,
      })
      return true
    } catch {
      return false
    }
  }, [membership.email, update])

  const refresh = useCallback(async () => {
    const base = apiBase()
    if (!base) return
    try {
      if (!membership.customerId || !membership.subscriptionId) {
        const accountResponse = await fetch(base + '/membership/account-status', { credentials: 'include' })
        const accountPayload = (await accountResponse.json()) as Partial<MembershipState>
        if (accountResponse.ok && accountPayload.status) {
          update({ plan: accountPayload.plan === 'family_plus' ? 'family_plus' : 'free', status: accountPayload.status })
        }
        return
      }
      const response = await fetch(base + '/membership/status?customerId=' + encodeURIComponent(membership.customerId) + '&subscriptionId=' + encodeURIComponent(membership.subscriptionId), { credentials: 'include' })
      const payload = (await response.json()) as Partial<MembershipState>
      if (response.ok && payload.status) {
        update({
          plan: payload.status === 'active' || payload.status === 'trialing' ? 'family_plus' : 'free',
          status: payload.status,
          currentPeriodEnd: payload.currentPeriodEnd,
        })
      }
    } catch {
      // Keep the last known entitlement when offline.
    }
  }, [membership.customerId, membership.subscriptionId, update])

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    const sessionId = query.get('session_id')
    if (query.get('membership') === 'success' && sessionId) {
      void confirmCheckout(sessionId).then((confirmed) => {
        showToast(confirmed ? 'Aile+ üyeliğiniz aktif edildi' : 'Ödeme alındı; üyelik doğrulaması sürüyor')
      })
      window.history.replaceState({}, '', window.location.pathname + window.location.hash)
    }
  }, [confirmCheckout])

  return useMemo(() => ({
    membership,
    isPlus,
    busy,
    checkout,
    refresh,
    update,
  }), [busy, checkout, isPlus, membership, refresh, update])
}
