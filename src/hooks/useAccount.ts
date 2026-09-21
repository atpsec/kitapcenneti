import { useCallback, useEffect, useMemo, useState } from 'react'
import { showToast } from '../components/Toast'

export interface Account {
  id: string
  email: string
  createdAt: string
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
}

const ACCOUNT_EVENT = 'kitapcenneti-account'

function accountApiBase() {
  const configured = import.meta.env.VITE_MEMBERSHIP_API_BASE
  return typeof configured === 'string' && configured.trim() ? configured.replace(/\/$/, '') : '/api'
}

async function request(path: string, init: RequestInit = {}): Promise<{ response: Response; payload: ApiPayload }> {
  const headers = new Headers(init.headers)
  if (init.body && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json')
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

  const authenticate = useCallback(async (mode: 'login' | 'register', email: string, password: string) => {
    setBusy(true)
    try {
      const result = await request('/auth/' + mode, {
        method: 'POST',
        body: JSON.stringify({ email: email.trim().toLowerCase(), password }),
      })
      if (!result.response.ok || !result.payload.account) {
        showToast(result.payload.error || 'Hesap işlemi tamamlanamadı')
        return false
      }
      setAccount(result.payload.account)
      await loadChildren()
      broadcast()
      showToast(mode === 'register' ? 'Ebeveyn hesabınız oluşturuldu' : 'Hesabınıza giriş yapıldı')
      return true
    } catch {
      showToast('Hesap servisine ulaşılamadı')
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
      showToast('Hesaptan çıkış yapıldı')
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
    register: (email: string, password: string) => authenticate('register', email, password),
    logout,
    syncChildren,
    syncProgress,
    loadProgress,
  }), [account, busy, children, configured, loadProgress, loading, logout, maxChildren, plan, refresh, syncChildren, syncProgress])
}
