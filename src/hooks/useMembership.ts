import { useCallback, useEffect, useMemo, useState } from 'react'
import { showToast } from '../components/Toast'

export type MembershipPlan = 'free' | 'family_plus'
export type MembershipStatus = 'inactive' | 'active' | 'trialing' | 'past_due' | 'canceled'
export type MembershipSource = 'server' | 'pending' | 'local'

export interface MembershipState {
  plan: MembershipPlan
  status: MembershipStatus
  email: string
  customerId?: string
  subscriptionId?: string
  currentPeriodEnd?: string
  cancelAtPeriodEnd?: boolean
  updatedAt?: string
  source?: MembershipSource
}

const STORAGE_KEY = 'kitapcenneti-membership-v1'
const MEMBERSHIP_EVENT = 'kitapcenneti-membership'

const EMPTY_STATE: MembershipState = {
  plan: 'free',
  status: 'inactive',
  email: '',
  source: 'local',
}

function readState(): MembershipState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return EMPTY_STATE
    const parsed = JSON.parse(raw) as Partial<MembershipState>
    const source: MembershipSource = parsed.source === 'server' || parsed.source === 'pending' ? parsed.source : 'local'
    return {
      ...EMPTY_STATE,
      ...parsed,
      plan: source === 'server' && parsed.plan === 'family_plus' ? 'family_plus' : 'free',
      status: parsed.status || 'inactive',
      source,
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

export function useMembership() {
  const [membership, setMembership] = useState<MembershipState>(() => readState())
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    const sync = () => setMembership(readState())
    const accountSync = () => {
      const next = readState()
      setMembership(next.source === 'server' ? { ...next, plan: 'free', status: 'inactive', source: 'local' } : next)
    }
    window.addEventListener('storage', sync)
    window.addEventListener(MEMBERSHIP_EVENT, sync)
    window.addEventListener('kitapcenneti-account', accountSync)
    return () => {
      window.removeEventListener('storage', sync)
      window.removeEventListener(MEMBERSHIP_EVENT, sync)
      window.removeEventListener('kitapcenneti-account', accountSync)
    }
  }, [])

  // A browser cache is only a display hint. Premium access must come from account-status.
  const isPlus = membership.source === 'server' && membership.plan === 'family_plus' && ['active', 'trialing'].includes(membership.status)

  const update = useCallback((next: Partial<MembershipState>) => {
    const merged = { ...readState(), ...next, updatedAt: new Date().toISOString() }
    writeState(merged)
    setMembership(merged)
  }, [])

  const refresh = useCallback(async () => {
    const base = apiBase()
    if (!base) return false
    try {
      const response = await fetch(base + '/membership/account-status', { credentials: 'include' })
      const payload = (await response.json()) as Partial<MembershipState>
      if (response.status === 401) {
        update({ plan: 'free', status: 'inactive', source: 'local', customerId: undefined, subscriptionId: undefined })
        return false
      }
      if (!response.ok) return false
      update({
        plan: payload.plan === 'family_plus' ? 'family_plus' : 'free',
        status: payload.status || 'inactive',
        currentPeriodEnd: payload.currentPeriodEnd,
        cancelAtPeriodEnd: payload.cancelAtPeriodEnd === true,
        customerId: payload.customerId,
        subscriptionId: payload.subscriptionId,
        source: 'server',
      })
      return true
    } catch {
      return false
    }
  }, [update])

  useEffect(() => {
    void refresh()
  }, [refresh])

  const checkout = useCallback(async (plan: 'monthly' | 'annual', email: string, digitalStartConsent: boolean) => {
    const normalizedEmail = email.trim().toLowerCase()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      showToast('Gib eine gültige E-Mail-Adresse ein, um fortzufahren')
      return
    }

    const base = apiBase()
    if (!base) {
      showToast('Der Mitgliedschaftsservice ist noch nicht verbunden; zuerst muss die Cloudflare-API eingerichtet werden')
      return
    }

    setBusy(true)
    update({ email: normalizedEmail, source: 'pending' })
    try {
      const response = await fetch(base + '/membership/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Kitap-Request': '1' },
        credentials: 'include',
        body: JSON.stringify({ plan, digitalStartConsent }),
      })
      const payload = (await response.json()) as { url?: string; error?: string }
      if (response.ok && payload.url) {
        window.location.href = payload.url
        return
      }
      showToast(payload.error || 'Zahlungslink konnte nicht erstellt werden')
    } catch {
      showToast('Zahlungsservice nicht erreichbar')
    } finally {
      setBusy(false)
    }
  }, [update])

  const confirmCheckout = useCallback(async (sessionId: string) => {
    const base = apiBase()
    if (!base || !sessionId) return false
    try {
      const response = await fetch(base + '/membership/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Kitap-Request': '1' },
        credentials: 'include',
        body: JSON.stringify({ sessionId }),
      })
      const payload = (await response.json()) as Partial<MembershipState> & { error?: string }
      if (!response.ok || payload.plan !== 'family_plus') return false
      update({
        plan: 'free',
        status: 'inactive',
        source: 'pending',
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

  const openPortal = useCallback(async () => {
    const base = apiBase()
    if (!base) {
      showToast('Mitgliedschaftsverwaltung ist noch nicht verbunden')
      return false
    }
    setBusy(true)
    try {
      const response = await fetch(base + '/membership/portal', { method: 'POST', credentials: 'include', headers: { 'X-Kitap-Request': '1' } })
      const payload = (await response.json()) as { url?: string; error?: string }
      if (!response.ok || !payload.url) {
        showToast(payload.error || 'Mitgliedschaftsverwaltung konnte nicht geöffnet werden')
        return false
      }
      window.location.href = payload.url
      return true
    } catch {
      showToast('Mitgliedschaftsverwaltung nicht erreichbar')
      return false
    } finally {
      setBusy(false)
    }
  }, [])

  const cancel = useCallback(async () => {
    const base = apiBase()
    if (!base) {
      showToast('Mitgliedschaftsverwaltung ist noch nicht verbunden')
      return false
    }
    setBusy(true)
    try {
      const response = await fetch(base + '/membership/cancel', {
        method: 'POST',
        credentials: 'include',
        headers: { 'X-Kitap-Request': '1' },
      })
      const payload = (await response.json()) as { canceled?: boolean; currentPeriodEnd?: string; error?: string }
      if (!response.ok || payload.canceled !== true) {
        showToast(payload.error || 'Mitgliedschaft konnte nicht gekündigt werden')
        return false
      }
      update({ cancelAtPeriodEnd: true, currentPeriodEnd: payload.currentPeriodEnd })
      showToast('Deine Mitgliedschaft wird zum Ende des Abrechnungszeitraums gekündigt')
      return true
    } catch {
      showToast('Kündigungsservice nicht erreichbar')
      return false
    } finally {
      setBusy(false)
    }
  }, [update])

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    const sessionId = query.get('session_id')
    if (query.get('membership') === 'success' && sessionId) {
      void confirmCheckout(sessionId).then(async (confirmed) => {
        const verified = confirmed && await refresh()
        showToast(verified ? 'Deine Familien+-Mitgliedschaft ist aktiv' : confirmed ? 'Zahlung erhalten; Mitgliedschaft wird noch bestätigt' : 'Mitgliedschaft konnte nicht bestätigt werden')
      })
      window.history.replaceState({}, '', window.location.pathname + window.location.hash)
    }
  }, [confirmCheckout, refresh])

  return useMemo(() => ({
    membership,
    isPlus,
    busy,
    checkout,
    cancel,
    openPortal,
    refresh,
    update,
  }), [busy, cancel, checkout, isPlus, membership, openPortal, refresh, update])
}
