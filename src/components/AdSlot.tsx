import { useEffect, useRef, useState } from 'react'
import { ADS_ENABLED, ADSENSE_CLIENT, adsAllowedOnPage, hasAdConsent, type AdSlotId } from '../config/ads'
import { COOKIE_CONSENT_EVENT } from '../utils/cookieConsent'
import { parseContentHash } from '../utils/share'

interface AdSlotProps {
  slot?: AdSlotId
  format?: 'auto' | 'horizontal' | 'rectangle'
  className?: string
}

/**
 * Google AdSense — nur nach Einwilligung und auf Elternseiten (die App filtert die Seiten).
 */
export function AdSlot({ slot = 'in-article', format = 'auto', className = '' }: AdSlotProps) {
  const [consented, setConsented] = useState(() => hasAdConsent())
  const adRef = useRef<HTMLModElement>(null)
  const currentPage = typeof window === 'undefined' ? 'portal' : (parseContentHash(window.location.hash).page || 'portal')
  const pageAllowed = adsAllowedOnPage(currentPage)
  const adActive = pageAllowed && ADS_ENABLED && consented

  useEffect(() => {
    const sync = () => setConsented(hasAdConsent())
    window.addEventListener(COOKIE_CONSENT_EVENT, sync)
    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, sync)
    }
  }, [])

  useEffect(() => {
    const scriptId = 'kitapcenneti-adsense-script'
    if (!pageAllowed || !consented) {
      document.getElementById(scriptId)?.remove()
      return
    }
    if (!ADS_ENABLED || !ADSENSE_CLIENT) return
    if (document.getElementById(scriptId)) return
    const script = document.createElement('script')
    script.id = scriptId
    script.async = true
    script.crossOrigin = 'anonymous'
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(ADSENSE_CLIENT)}`
    document.head.appendChild(script)
  }, [consented, pageAllowed])

  useEffect(() => {
    if (!adActive || !adRef.current) return
    const ads = (window as typeof window & { adsbygoogle?: unknown[] }).adsbygoogle ||= []
    try {
      ads.push({})
    } catch {
      // The provider can retry after its script finishes loading.
    }
  }, [adActive])

  if (!adActive) {
    return (
      <aside className={`ad-slot ad-slot--placeholder ${className}`} aria-label="Werbefläche">
        <span>📢 Werbefläche</span>
        <small>
          {!pageAllowed
            ? 'Nur auf Eltern- und Redaktionsseiten'
            : !ADS_ENABLED
            ? `Nach der AdSense-Freigabe · ${slot}`
            : 'Nach Cookie-Einwilligung sichtbar (nur Elternseiten)'}
        </small>
      </aside>
    )
  }

  return (
    <aside className={`ad-slot ${className}`} aria-label="Werbung">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </aside>
  )
}
