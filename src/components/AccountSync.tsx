import { useEffect, useRef, useState } from 'react'
import { useAccount, type ProgressSnapshot } from '../hooks/useAccount'
import { usePortalProfile } from '../hooks/usePortalProfile'
import { useProgress } from '../hooks/useProgress'

/** Keeps the local-first portal usable offline while syncing a signed-in family's data. */
export function AccountSync() {
  const { account, children, loadProgress, syncChildren, syncProgress } = useAccount()
  const { profile, profiles, mergeProfiles } = usePortalProfile()
  const { stars, streak, badges, stickers, counts, refresh } = useProgress()
  const [hydrated, setHydrated] = useState(false)
  const mergedRef = useRef('')
  const childKey = children.map((item) => item.id).join('|')

  useEffect(() => {
    if (!account || !children.length) return
    const key = account.id + ':' + childKey
    if (mergedRef.current === key) return
    mergedRef.current = key
    mergeProfiles(children)
  }, [account, childKey, children, mergeProfiles])

  useEffect(() => {
    if (!account || !profiles.length) return
    void syncChildren(profiles)
  }, [account?.id, profiles, syncChildren])

  useEffect(() => {
    if (!account || !profile.id) {
      setHydrated(false)
      return
    }
    let cancelled = false
    setHydrated(false)
    void loadProgress(profile.id).then((remote) => {
      if (cancelled) return
      if (remote) {
        const prefix = '::' + profile.id
        if (typeof remote.stars === 'number') localStorage.setItem('kitapcenneti-stars' + prefix, String(remote.stars))
        if (typeof remote.streak === 'number') localStorage.setItem('kitapcenneti-streak' + prefix, String(remote.streak))
        if (Array.isArray(remote.badges)) localStorage.setItem('kitapcenneti-badges' + prefix, JSON.stringify(remote.badges))
        if (Array.isArray(remote.stickers)) localStorage.setItem('kitapcenneti-stickers' + prefix, JSON.stringify(remote.stickers))
        if (remote.counts && typeof remote.counts === 'object') localStorage.setItem('kitapcenneti-activity-counts' + prefix, JSON.stringify(remote.counts))
        refresh()
      }
      setHydrated(true)
    })
    return () => { cancelled = true }
  }, [account?.id, loadProgress, profile.id, refresh])

  useEffect(() => {
    if (!account || !hydrated || !profile.id) return
    const snapshot: ProgressSnapshot = {
      stars,
      streak,
      badges: badges.map((item) => item.id),
      stickers,
      counts: counts as Record<string, number>,
    }
    void syncProgress(profile.id, snapshot)
  }, [account?.id, badges, counts, hydrated, profile.id, stars, stickers, streak, syncProgress])

  return null
}
