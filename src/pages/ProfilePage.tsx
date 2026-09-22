import { useEffect, useState } from 'react'
import type { PageId } from '../types/nav'
import {
  setFamilyPin,
  usePortalProfile,
  type PortalProfile,
} from '../hooks/usePortalProfile'
import { showToast } from '../components/Toast'
import { useProgress } from '../hooks/useProgress'
import { STICKERS } from '../data/stickers'
import { SocialShare } from '../components/SocialShare'
import { useMembership } from '../hooks/useMembership'
import { useAccount } from '../hooks/useAccount'

const AVATARS = ['🦊', '🐻', '🦄', '🐱', '🐼', '🦁', '🐸', '🦉', '🐯', '🐨']
const INTERESTS = ['masal', 'oyun', 'boyama', 'uzay', 'hayvan', 'stem', 'müzik', 'duygu']

interface Props {
  onNavigate: (page: PageId) => void
}

export function ProfilePage({ onNavigate }: Props) {
  const {
    profile,
    profiles,
    saveProfile,
    switchProfile,
    addProfile,
    removeProfile,
    pinEnabled,
  } = usePortalProfile()
  const { stars, streak, badges, stickers } = useProgress()
  const { membership, isPlus } = useMembership()
  const {
    account,
    busy: accountBusy,
    configured: accountConfigured,
    login,
    register,
    logout,
    requestVerification,
    verifyEmailToken,
    requestPasswordReset,
    resetPassword,
    exportData,
    deleteAccount,
  } = useAccount()
  const [draft, setDraft] = useState<PortalProfile>(profile)
  const [pin, setPin] = useState('')
  const [pin2, setPin2] = useState('')
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')
  const [authEmail, setAuthEmail] = useState(membership.email)
  const [authPassword, setAuthPassword] = useState('')
  const [showRecovery, setShowRecovery] = useState(false)
  const [recoveryEmail, setRecoveryEmail] = useState(membership.email)
  const [resetToken, setResetToken] = useState('')
  const [resetPasswordValue, setResetPasswordValue] = useState('')
  const [deletePassword, setDeletePassword] = useState('')

  useEffect(() => {
    setDraft(profile)
  }, [profile])

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    const verificationToken = query.get('verify_email')
    const passwordToken = query.get('reset_password')
    if (verificationToken) void verifyEmailToken(verificationToken)
    if (passwordToken) setResetToken(passwordToken)
    if (verificationToken || passwordToken) {
      window.history.replaceState({}, '', window.location.pathname + window.location.hash)
    }
  }, [verifyEmailToken])

  const toggleInterest = (tag: string) => {
    setDraft((d) => ({
      ...d,
      interests: d.interests.includes(tag)
        ? d.interests.filter((t) => t !== tag)
        : [...d.interests, tag].slice(0, 6),
    }))
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>🧒 Portalprofil</h1>
        <p>Geschwisterprofile, Altersgruppe, Familien-PIN-Sperre – jedes Kind ist in seiner eigenen Welt.</p>
      </header>

      <section className="account-strip">
        <div className="account-strip__icon">✦</div>
        <div>
          <span className="membership-eyebrow">Familienkonto</span>
          <strong>{isPlus ? 'Familien+ aktiv' : 'Kostenloser Plan'}</strong>
          <small>{membership.email || 'E-Mail der erwachsenen Person noch nicht hinterlegt'}</small>
        </div>
        <button type="button" className="btn btn--small btn--primary" onClick={() => onNavigate('membership')}>
          {isPlus ? 'Mitgliedschaft verwalten' : 'Familien+ ansehen'} <span>→</span>
        </button>
      </section>

      <section className="section">
        <div className="section-heading-row">
          <div>
            <span className="section-kicker">Elternkonto</span>
            <h2 className="section__title">Schützen Sie die Entdeckungen Ihrer Familie</h2>
          </div>
        </div>
        <div className="panel account-access">
          {account ? (
            <div className="account-access__signed-in">
              <div>
                <strong>{account.email}</strong>
                <p>Kinderprofile und Entwicklungszusammenfassungen werden sicher mit Ihrem Konto synchronisiert.</p>
                {!account.emailVerified && <p className="notice notice--warning">Ihre E-Mail-Adresse ist noch nicht bestätigt.</p>}
              </div>
              <div className="btn-row">
                {!account.emailVerified && <button type="button" className="btn btn--ghost" disabled={accountBusy} onClick={() => void requestVerification()}>Bestätigungs-E-Mail senden</button>}
                <button type="button" className="btn btn--ghost" disabled={accountBusy} onClick={() => void exportData()}>Meine Daten herunterladen</button>
                <button type="button" className="btn btn--ghost" disabled={accountBusy} onClick={() => void logout()}>Abmelden</button>
              </div>
              <label>
                Passwort zur Kontolöschung
                <input type="password" autoComplete="current-password" value={deletePassword} onChange={(event) => setDeletePassword(event.target.value)} placeholder="Passwort eingeben" />
              </label>
              <button
                type="button"
                className="btn btn--ghost"
                disabled={accountBusy || !deletePassword}
                onClick={() => {
                  if (window.confirm('Konto und persönliche Daten endgültig löschen? Eine aktive Mitgliedschaft muss zuerst gekündigt werden.')) void deleteAccount(deletePassword)
                }}
              >
                Konto endgültig löschen
              </button>
            </div>
          ) : (
            <form onSubmit={(event) => {
              event.preventDefault()
              const action = authMode === 'login' ? login : register
              void action(authEmail, authPassword).then((ok) => { if (ok) setAuthPassword('') })
            }}>
              <p>Mit Ihrem kostenlosen Konto können Sie Profile verwalten und Fortschritte auf verschiedenen Geräten erzielen.</p>
              <div className="account-access__fields">
                <label>
                  E-Mail der Eltern
                  <input type="email" autoComplete="email" value={authEmail} onChange={(event) => setAuthEmail(event.target.value)} placeholder="siz@ornek.com" required />
                </label>
                <label>
                  Passwort
                  <input type="password" autoComplete={authMode === 'login' ? 'current-password' : 'new-password'} minLength={8} value={authPassword} onChange={(event) => setAuthPassword(event.target.value)} placeholder="Mindestens 8 Zeichen" required />
                </label>
              </div>
              <div className="btn-row">
                <button type="submit" className="btn btn--primary" disabled={accountBusy || !accountConfigured}>{accountBusy ? 'Wird verbunden …' : authMode === 'login' ? 'Anmelden' : 'Konto erstellen'}</button>
                <button type="button" className="btn btn--ghost" onClick={() => setAuthMode((mode) => mode === 'login' ? 'register' : 'login')}>
                  {authMode === 'login' ? 'Neues Konto erstellen' : 'Ich habe bereits ein Konto'}
                </button>
              </div>
              {authMode === 'login' && <button type="button" className="btn btn--ghost" onClick={() => setShowRecovery((value) => !value)}>Passwort vergessen?</button>}
              {showRecovery && authMode === 'login' && (
                <div className="panel">
                  <label>
                    E-Mail für die Passwortzurücksetzung
                    <input type="email" autoComplete="email" value={recoveryEmail} onChange={(event) => setRecoveryEmail(event.target.value)} />
                  </label>
                  <button type="button" className="btn btn--ghost" disabled={accountBusy} onClick={() => void requestPasswordReset(recoveryEmail)}>Link anfordern</button>
                </div>
              )}
              {resetToken && (
                <div className="panel">
                  <label>
                    Neues Passwort
                    <input type="password" autoComplete="new-password" minLength={8} value={resetPasswordValue} onChange={(event) => setResetPasswordValue(event.target.value)} />
                  </label>
                  <button type="button" className="btn btn--primary" disabled={accountBusy || resetPasswordValue.length < 8} onClick={() => void resetPassword(resetToken, resetPasswordValue).then((ok) => { if (ok) { setResetToken(''); setResetPasswordValue('') } })}>Passwort speichern</button>
                </div>
              )}
              {!accountConfigured && <small>Die Kontosynchronisierung ist aktiviert, wenn die Cloudflare Pages-API-Adresse verbunden ist.</small>}
            </form>
          )}
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Profile ({profiles.length}/{isPlus ? 5 : 1})</h2>
        <div className="profile-switcher">
          {profiles.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`profile-chip ${p.id === profile.id ? 'is-active' : ''}`}
              onClick={() => switchProfile(p.id)}
            >
              <span>{p.avatar}</span>
              <strong>{p.childName || 'Ohne Namen'}</strong>
              <small>{p.ageGroup}</small>
            </button>
          ))}
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => {
              if (!isPlus) {
                onNavigate('membership')
                return
              }
              const n = addProfile(5)
              if (n) showToast('Neues Geschwisterprofil hinzugefügt')
              else showToast('Maximal 5 Profile')
            }}
          >
            + {isPlus ? 'Geschwister hinzufügen' : 'Mit Familien+ Geschwister hinzufügen'}
          </button>
          {profiles.length > 1 && (
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => {
                removeProfile(profile.id)
                showToast('Profil gelöscht')
              }}
            >
              Dieses Profil löschen
            </button>
          )}
        </div>
      </section>

      <div className="portal-dash-grid" style={{ marginBottom: 20 }}>
        <div className="portal-dash-card">
          <span>⭐</span>
          <h2>{stars}</h2>
          <p>Stern</p>
        </div>
        <div className="portal-dash-card">
          <span>🔥</span>
          <h2>{streak}</h2>
          <p>Tage in Folge</p>
        </div>
        <div className="portal-dash-card">
          <span>🏅</span>
          <h2>{badges.length}</h2>
          <p>Abzeichen</p>
        </div>
        <div className="portal-dash-card">
          <span>🏷️</span>
          <h2>
            {stickers.length}/{STICKERS.length}
          </h2>
          <p>Sticker</p>
        </div>
      </div>

      <div className="panel journal-form">
        <label>
          Name des Kindes
          <input
            value={draft.childName}
            onChange={(e) => setDraft({ ...draft, childName: e.target.value })}
            maxLength={30}
            placeholder="z. B. Emma"
          />
        </label>

        <p>
          <strong>Avatar</strong>
        </p>
        <div className="library-filters">
          {AVATARS.map((a) => (
            <button
              key={a}
              type="button"
              className={`stem-chip ${draft.avatar === a ? 'is-active' : ''}`}
              onClick={() => setDraft({ ...draft, avatar: a })}
            >
              {a}
            </button>
          ))}
        </div>

        <label>
          Altersgruppe
          <select
            value={draft.ageGroup}
            onChange={(e) =>
              setDraft({ ...draft, ageGroup: e.target.value as PortalProfile['ageGroup'] })
            }
          >
            <option value="3-5">3–5 Jahre alt</option>
            <option value="6-8">6–8 Jahre alt</option>
            <option value="9-12">9–12 Jahre alt</option>
          </select>
        </label>

        <p>
          <strong>Interessen</strong>
        </p>
        <div className="library-filters">
          {INTERESTS.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`stem-chip ${draft.interests.includes(tag) ? 'is-active' : ''}`}
              onClick={() => toggleInterest(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <label>
          Wöchentliches Ziel
          <input
            value={draft.goal}
            onChange={(e) => setDraft({ ...draft, goal: e.target.value })}
            maxLength={80}
            placeholder="z. B. Jeden Tag eine Geschichte"
          />
        </label>

        <div className="btn-row">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              saveProfile(draft)
              showToast('Profil gespeichert')
            }}
          >
            Speichern
          </button>
          <button type="button" className="btn btn--ghost" onClick={() => onNavigate('paths')}>
            Für mein Alter durchaus geeignet
          </button>
          <button type="button" className="btn btn--ghost" onClick={() => onNavigate('certificates')}>
            Sertifikalar
          </button>
        </div>
      </div>

      <section className="section">
        <h2 className="section__title">🔐 Familien-PIN-Sperre</h2>
        <div className="panel journal-form">
          <p>Beim Wechsel in den Familienmodus ist eine 4-stellige PIN erforderlich. So bleibt der Elternbereich geschützt.</p>
          <label>
            Neue PIN
            <input
              type="password"
              inputMode="numeric"
              maxLength={4}
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
              placeholder="••••"
            />
          </label>
          <label>
            Noch einmal
            <input
              type="password"
              inputMode="numeric"
              maxLength={4}
              value={pin2}
              onChange={(e) => setPin2(e.target.value.replace(/\D/g, '').slice(0, 4))}
              placeholder="••••"
            />
          </label>
          <div className="btn-row">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => {
                if (pin.length !== 4 || pin !== pin2) {
                  showToast('Die PIN muss vier Ziffern haben und übereinstimmen')
                  return
                }
                setFamilyPin(pin)
                setPin('')
                setPin2('')
                showToast('Familien-Sperre eingerichtet')
              }}
            >
              PIN speichern
            </button>
            {pinEnabled && (
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => {
                  setFamilyPin(null)
                showToast('Familien-Sperre entfernt')
                }}
              >
                Schloss entfernen
              </button>
            )}
          </div>
          <small>Status: {pinEnabled ? 'aktiv 🔐' : 'inaktiv'}</small>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Familie teilen</h2>
        <SocialShare
          payload={{
            title: `${profile.avatar} ${profile.childName || 'Mein Kind'} — Kitap Cenneti`,
            text: `⭐ ${stars} Sterne · 🔥 ${streak} Tage · 🏷️ ${stickers.length} sticker. Wir lesen gemeinsam!`,
            page: 'profile',
            hashtags: ['KitapCenneti', 'Familie', 'Lesen'],
          }}
        />
      </section>
    </div>
  )
}
