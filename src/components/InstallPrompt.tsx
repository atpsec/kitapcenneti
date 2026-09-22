import { useEffect, useState } from 'react'
import { showToast } from './Toast'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export function InstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null)
  const [standalone, setStandalone] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(display-mode: standalone)')
    setStandalone(mq.matches || (navigator as Navigator & { standalone?: boolean }).standalone === true)
    const onBip = (e: Event) => {
      e.preventDefault()
      setDeferred(e as BeforeInstallPromptEvent)
    }
    window.addEventListener('beforeinstallprompt', onBip)
    return () => window.removeEventListener('beforeinstallprompt', onBip)
  }, [])

  if (standalone) {
    return (
      <div className="install-prompt panel install-prompt--done">
        <span>📱</span>
        <p>Im Anwendungsmodus ist der Offline-Cache aktiv.</p>
      </div>
    )
  }

  return (
    <div className="install-prompt panel">
      <span>📲</span>
      <div>
        <strong>Zum Startbildschirm hinzufügen (PWA)</strong>
        <p>Schnellstart + grundlegende Offline-Unterstützung für Märchen und Malen.</p>
      </div>
      <button
        type="button"
        className="btn btn--small btn--primary"
        onClick={async () => {
          if (deferred) {
            await deferred.prompt()
            const choice = await deferred.userChoice
            if (choice.outcome === 'accepted') showToast('Installation gestartet')
            setDeferred(null)
          } else {
            showToast('Wähle im Browsermenü „Zum Startbildschirm hinzufügen“')
          }
        }}
      >
        Hochladen
      </button>
    </div>
  )
}
