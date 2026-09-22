import { useEffect, useState } from 'react'
import { ADS_ENABLED, ADSENSE_CLIENT, hasAdConsent, type AdSlotId } from '../config/ads'

interface AdSlotProps {
  slot?: AdSlotId
  format?: 'auto' | 'horizontal' | 'rectangle'
  className?: string
}

/**
 * Google AdSense — yalnızca onay + aile sayfalarında (App katmanı sayfa filtresi uygular).
 */
export function AdSlot({ slot = 'in-article', format = 'auto', className = '' }: AdSlotProps) {
  const [consented, setConsented] = useState(() => hasAdConsent())

  useEffect(() => {
    const sync = () => setConsented(hasAdConsent())
    window.addEventListener('kitapcenneti-cookie-consent', sync)
    return () => {
      window.removeEventListener('kitapcenneti-cookie-consent', sync)
    }
  }, [])

  if (!ADS_ENABLED || !consented) {
    return (
      <aside className={`ad-slot ad-slot--placeholder ${className}`} aria-label="Reklam alanı">
        <span>📢 Reklam alanı</span>
        <small>
          {!ADS_ENABLED
            ? `AdSense onayından sonra · ${slot}`
            : 'Çerez onayı sonrası gösterilir (yalnızca aile sayfaları)'}
        </small>
      </aside>
    )
  }

  return (
    <aside className={`ad-slot ${className}`} aria-label="Reklam">
      <ins
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
