import { useEffect, useState } from 'react'
import { showToast } from './Toast'

const KEY = 'kitapcenneti-reminders'

interface ReminderPrefs {
  enabled: boolean
  hour: number
  mystery: boolean
}

const DEFAULT: ReminderPrefs = { enabled: false, hour: 18, mystery: true }

function readPrefs(): ReminderPrefs {
  try {
    return { ...DEFAULT, ...JSON.parse(localStorage.getItem(KEY) || '{}') }
  } catch {
    return DEFAULT
  }
}

export function ReminderPanel() {
  const [prefs, setPrefs] = useState<ReminderPrefs>(DEFAULT)
  const [perm, setPerm] = useState<NotificationPermission>('default')

  useEffect(() => {
    setPrefs(readPrefs())
    if ('Notification' in window) setPerm(Notification.permission)
  }, [])

  const save = (next: ReminderPrefs) => {
    setPrefs(next)
    localStorage.setItem(KEY, JSON.stringify(next))
  }

  const enable = async () => {
    if (!('Notification' in window)) {
      showToast('Dieser Browser unterstützt keine Benachrichtigungen')
      return
    }
    const p = await Notification.requestPermission()
    setPerm(p)
    if (p !== 'granted') {
      showToast('Bildirim izni verilmedi')
      return
    }
    save({ ...prefs, enabled: true })
    scheduleTick()
    showToast('Erinnerungen aktiviert')
    new Notification('Kitap Cenneti', {
      body: 'Wir erinnern dich an die Stundenaufgabe und die geheimnisvolle Box.',
      icon: `${import.meta.env.BASE_URL}pwa-icon.svg`,
    })
  }

  return (
    <div className="panel reminder-panel">
      <h3>🔔 Rückkehr-Erinnerung</h3>
      <p>Lokale Benachrichtigung – keine Server. Wenn Sie es zulassen, werden wir Sie vor der Tagesuhr und der geheimnisvollen Kiste warnen.</p>
      <label>
        Saat
        <input
          type="number"
          min={8}
          max={21}
          value={prefs.hour}
          onChange={(e) => save({ ...prefs, hour: Number(e.target.value) || 18 })}
        />
      </label>
      <label className="reminder-panel__check">
        <input
          type="checkbox"
          checked={prefs.mystery}
          onChange={(e) => save({ ...prefs, mystery: e.target.checked })}
        />
        Mystery Box erinnert daran
      </label>
      <div className="btn-row">
        {!prefs.enabled || perm !== 'granted' ? (
          <button type="button" className="btn btn--primary" onClick={() => void enable()}>
            Aktivieren Sie Benachrichtigungen
          </button>
        ) : (
          <button type="button" className="btn btn--ghost" onClick={() => save({ ...prefs, enabled: false })}>
            Schließen
          </button>
        )}
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => {
            if (perm === 'granted') {
              new Notification('Kitap Cenneti', { body: 'Test: Die Live-Arena wartet auf dich! ⚡' })
            } else showToast('Erteile zuerst die Benachrichtigungserlaubnis')
          }}
        >
          Test bildirimi
        </button>
      </div>
      <small>Durum: {perm} · {prefs.enabled ? 'aktiv' : 'inaktiv'}</small>
    </div>
  )
}

/** Call once from App — checks hourly if a local notification should fire */
export function scheduleTick() {
  const tick = () => {
    const prefs = readPrefs()
    if (!prefs.enabled || !('Notification' in window) || Notification.permission !== 'granted') return
    const now = new Date()
    const stampKey = `kitapcenneti-reminded-${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${now.getHours()}`
    if (sessionStorage.getItem(stampKey)) return
    if (now.getHours() === prefs.hour && now.getMinutes() < 15) {
      new Notification('Kitap Cenneti', {
        body: 'Zeit für eine tägliche Pause – nimm dir 10 Minuten für eine Geschichte oder Aufgabe 📚',
        tag: 'daily',
      })
      sessionStorage.setItem(stampKey, '1')
    }
    if (prefs.mystery) {
      try {
        const mystery = JSON.parse(localStorage.getItem('kitapcenneti-mystery') || '{"last":0}') as {
          last: number
        }
        if (Date.now() - mystery.last >= 3 * 60 * 60 * 1000) {
          const mKey = `kitapcenneti-mystery-ping-${Math.floor(Date.now() / 10800000)}`
          if (!sessionStorage.getItem(mKey)) {
            new Notification('Kitap Cenneti', {
              body: 'Die geheimnisvolle Box ist bereit! 🎁 Besuche die Live-Arena.',
              tag: 'mystery',
            })
            sessionStorage.setItem(mKey, '1')
          }
        }
      } catch {
        /* ignore */
      }
    }
  }
  tick()
  window.setInterval(tick, 60_000)
}
