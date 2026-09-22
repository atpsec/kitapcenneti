import { useCallback, useEffect, useMemo, useState } from 'react'
import { showToast } from '../components/Toast'
import { LEGAL_DETAILS_READY } from '../config/legal'

export interface Account {
  id: string
  email: string
  createdAt: string
  emailVerified?: boolean
  adultConfirmed?: boolean
  termsAccepted?: boolean
  privacyAccepted?: boolean
}

export interface RegistrationConsent {
  adultConfirmed: boolean
  termsAccepted: boolean
  privacyAccepted: boolean
}

export interface RemoteChild {
  id: string
  childName: string
  avatar: string
  ageGroup: '3-5' | '6-8' | '9-12'
  interests: string[]
  goal: string
  createdAt?: string
  updatedAt?: string
}

export interface ProgressSnapshot {
  stars: number
  streak: number
  badges: string[]
  stickers: string[]
  counts: Record<string, number>
}

interface ApiPayload {
  account?: Account
  authenticated?: boolean
  children?: RemoteChild[]
  plan?: 'free' | 'family_plus'
  maxChildren?: number
  error?: string
  code?: string
  progress?: Partial<ProgressSnapshot> | null
  emailVerification?: 'sent' | 'not_configured' | 'delivery_failed' | 'already_verified'
  status?: string
}

const ACCOUNT_EVENT = 'kitapcenneti-account'

function accountApiBase() {
  const configured = import.meta.env.VITE_MEMBERSHIP_API_BASE
  return typeof configured === 'string' && configured.trim() ? configured.replace(/\/$/, '') : '/api'
}

async function request(path: string, init: RequestInit = {}): Promise<{ response: Response; payload: ApiPayload }> {
  const headers = new Headers(init.headers)
  if (init.body && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json')
  const method = (init.method || 'GET').toUpperCase()
  if (!['GET', 'HEAD', 'OPTIONS'].includes(method) && !headers.has('X-Kitap-Request')) headers.set('X-Kitap-Request', '1')
  const response = await fetch(accountApiBase() + path, { ...init, headers, credentials: 'include' })
  const text = await response.text()
  let payload: ApiPayload = {}
  try {
    payload = text ? (JSON.parse(text) as ApiPayload) : {}
  } catch {
    payload = {}
  }
  return { response, payload }
}

function broadcast() {
  window.dispatchEvent(new CustomEvent(ACCOUNT_EVENT))
}

function clearLocalAccountData() {
  try {
    for (const key of Object.keys(localStorage)) {
      if (key.startsWith('kitapcenneti-')) localStorage.removeItem(key)
    }
    for (const key of Object.keys(sessionStorage)) {
      if (key.startsWith('kitapcenneti-')) sessionStorage.removeItem(key)
    }
  } catch {
    // Storage may be disabled; server-side deletion still succeeds.
  }
}

export function useAccount() {
  const [account, setAccount] = useState<Account | null>(null)
  const [children, setChildren] = useState<RemoteChild[]>([])
  const [plan, setPlan] = useState<'free' | 'family_plus'>('free')
  const [maxChildren, setMaxChildren] = useState(1)
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState(false)
  const configured = Boolean(import.meta.env.VITE_MEMBERSHIP_API_BASE) || (typeof window !== 'undefined' && !window.location.hostname.endsWith('github.io'))

  const loadChildren = useCallback(async () => {
    const result = await request('/family/children')
    if (!result.response.ok) return false
    setChildren(result.payload.children || [])
    setPlan(result.payload.plan === 'family_plus' ? 'family_plus' : 'free')
    setMaxChildren(result.payload.maxChildren === 5 ? 5 : 1)
    return true
  }, [])

  const refresh = useCallback(async () => {
    setLoading(true)
    try {
      const result = await request('/auth/me')
      if (!result.response.ok || !result.payload.authenticated || !result.payload.account) {
        setAccount(null)
        setChildren([])
        setPlan('free')
        setMaxChildren(1)
        return false
      }
      setAccount(result.payload.account)
      await loadChildren()
      return true
    } catch {
      setAccount(null)
      setChildren([])
      return false
    } finally {
      setLoading(false)
    }
  }, [loadChildren])

  useEffect(() => {
    void refresh()
    const sync = () => void refresh()
    window.addEventListener(ACCOUNT_EVENT, sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener(ACCOUNT_EVENT, sync)
      window.removeEventListener('storage', sync)
    }
  }, [refresh])

  const authenticate = useCallback(async (mode: 'login' | 'register', email: string, password: string, consent?: RegistrationConsent) => {
    if (mode === 'register' && !LEGAL_DETAILS_READY) {
      showToast('Das Elternkonto wird nach der vollständigen rechtlichen Konfiguration freigeschaltet')
      return false
    }
    setBusy(true)
    try {
      const result = await request('/auth/' + mode, {
        method: 'POST',
        body: JSON.stringify({ email: email.trim().toLowerCase(), password, ...(mode === 'register' ? consent : {}) }),
      })
      if (!result.response.ok || !result.payload.account) {
        showToast(result.payload.error || 'Die Kontoaktion konnte nicht abgeschlossen werden')
        return false
      }
      setAccount(result.payload.account)
      await loadChildren()
      broadcast()
      showToast(mode === 'register' ? 'Elternkonto erstellt' : 'Anmeldung erfolgreich')
      if (mode === 'register' && result.payload.emailVerification === 'not_configured') {
        showToast('E-Mail-Bestätigung ist noch nicht eingerichtet')
      } else if (mode === 'register' && result.payload.emailVerification === 'sent') {
        showToast('Bitte bestätigen Sie Ihre E-Mail-Adresse')
      } else if (mode === 'register' && result.payload.emailVerification === 'delivery_failed') {
        showToast('Bestätigungs-E-Mail konnte nicht versendet werden')
      }
      return true
    } catch {
      showToast('Kontoservice nicht erreichbar')
      return false
    } finally {
      setBusy(false)
    }
  }, [loadChildren])

  const logout = useCallback(async () => {
    setBusy(true)
    try {
      await request('/auth/logout', { method: 'POST', headers: { 'X-Kitap-Request': '1' } })
    } finally {
      setAccount(null)
      setChildren([])
      setPlan('free')
      setMaxChildren(1)
      setBusy(false)
      broadcast()
      showToast('Abgemeldet')
    }
  }, [])

  const syncChildren = useCallback(async (profiles: RemoteChild[]) => {
    if (!account) return false
    try {
      for (const profile of profiles) {
        const result = await request('/family/children', { method: 'PUT', body: JSON.stringify(profile) })
        if (!result.response.ok) return false
      }
      await loadChildren()
      return true
    } catch {
      return false
    }
  }, [account, loadChildren])

  const requestVerification = useCallback(async () => {
    try {
      const result = await request('/auth/request-verification', { method: 'POST' })
      if (result.response.ok) {
        showToast(result.payload.status === 'already_verified' ? 'E-Mail-Adresse bereits bestätigt' : 'Bestätigungs-E-Mail versendet')
        return true
      }
      showToast(result.payload.error || 'Bestätigungs-E-Mail konnte nicht versendet werden')
      return false
    } catch {
      showToast('Kontoservice nicht erreichbar')
      return false
    }
  }, [])

  const verifyEmailToken = useCallback(async (token: string) => {
    try {
      const result = await request('/auth/verify-email', { method: 'POST', body: JSON.stringify({ token }) })
      if (!result.response.ok) {
        showToast(result.payload.error || 'E-Mail-Adresse konnte nicht bestätigt werden')
        return false
      }
      setAccount((current) => current ? { ...current, emailVerified: true } : current)
      showToast('E-Mail-Adresse bestätigt')
      return true
    } catch {
      showToast('Kontoservice nicht erreichbar')
      return false
    }
  }, [])

  const acceptConsents = useCallback(async (consent: RegistrationConsent) => {
    setBusy(true)
    try {
      const result = await request('/auth/consent', {
        method: 'POST',
        body: JSON.stringify(consent),
      })
      if (!result.response.ok || !result.payload.account) {
        showToast(result.payload.error || 'Rechtliche Bestätigungen konnten nicht gespeichert werden')
        return false
      }
      setAccount(result.payload.account)
      broadcast()
      showToast('Rechtliche Bestätigungen gespeichert')
      return true
    } catch {
      showToast('Kontoservice nicht erreichbar')
      return false
    } finally {
      setBusy(false)
    }
  }, [])

  const requestPasswordReset = useCallback(async (email: string) => {
    try {
      const result = await request('/auth/request-password-reset', {
        method: 'POST',
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      })
      if (result.response.ok) {
        showToast('Wenn ein Konto vorhanden ist, wurde eine E-Mail versendet')
        return true
      }
      showToast(result.payload.error || 'Passwortzurücksetzung konnte nicht gestartet werden')
      return false
    } catch {
      showToast('Kontoservice nicht erreichbar')
      return false
    }
  }, [])

  const resetPassword = useCallback(async (token: string, password: string) => {
    try {
      const result = await request('/auth/reset-password', {
        method: 'POST',
        body: JSON.stringify({ token, password }),
      })
      if (!result.response.ok) {
        showToast(result.payload.error || 'Passwort konnte nicht zurückgesetzt werden')
        return false
      }
      showToast('Passwort geändert. Bitte melden Sie sich erneut an.')
      return true
    } catch {
      showToast('Kontoservice nicht erreichbar')
      return false
    }
  }, [])

  const exportData = useCallback(async () => {
    try {
      const response = await fetch(accountApiBase() + '/auth/export', { credentials: 'include' })
      if (!response.ok) {
        const payload = (await response.json().catch(() => ({}))) as ApiPayload
        showToast(payload.error || 'Datenexport konnte nicht erstellt werden')
        return false
      }
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const anchor = document.createElement('a')
      anchor.href = url
      anchor.download = 'kitapcenneti-datenexport.json'
      document.body.appendChild(anchor)
      anchor.click()
      anchor.remove()
      URL.revokeObjectURL(url)
      showToast('Datenexport heruntergeladen')
      return true
    } catch {
      showToast('Datenexport konnte nicht erstellt werden')
      return false
    }
  }, [])

  const deleteAccount = useCallback(async (password: string) => {
    setBusy(true)
    try {
      const result = await request('/auth/delete', {
        method: 'DELETE',
        body: JSON.stringify({ password, confirmation: 'DELETE' }),
      })
      if (!result.response.ok) {
        showToast(result.payload.error || 'Konto konnte nicht gelöscht werden')
        return false
      }
      clearLocalAccountData()
      setAccount(null)
      setChildren([])
      setPlan('free')
      setMaxChildren(1)
      broadcast()
      showToast('Konto und persönliche Daten wurden gelöscht')
      return true
    } catch {
      showToast('Kontoservice nicht erreichbar')
      return false
    } finally {
      setBusy(false)
    }
  }, [])

  const syncProgress = useCallback(async (childId: string, progress: ProgressSnapshot) => {
    if (!account) return false
    try {
      const result = await request('/family/progress', { method: 'POST', body: JSON.stringify({ childId, ...progress }) })
      return result.response.ok
    } catch {
      return false
    }
  }, [account])

  const loadProgress = useCallback(async (childId: string): Promise<Partial<ProgressSnapshot> | null> => {
    if (!account) return null
    try {
      const result = await request('/family/progress?childId=' + encodeURIComponent(childId))
      return result.response.ok ? result.payload.progress || null : null
    } catch {
      return null
    }
  }, [account])

  return useMemo(() => ({
    account,
    children,
    plan,
    maxChildren,
    loading,
    busy,
    configured,
    refresh,
    login: (email: string, password: string) => authenticate('login', email, password),
    register: (email: string, password: string, consent: RegistrationConsent) => authenticate('register', email, password, consent),
    logout,
    requestVerification,
    verifyEmailToken,
    acceptConsents,
    requestPasswordReset,
    resetPassword,
    exportData,
    deleteAccount,
    syncChildren,
    syncProgress,
    loadProgress,
  }), [account, acceptConsents, busy, children, configured, deleteAccount, exportData, loadProgress, loading, logout, maxChildren, plan, refresh, requestPasswordReset, requestVerification, resetPassword, syncChildren, syncProgress, verifyEmailToken])
}
