import { useEffect, useState } from 'react'
import { CalendarDays, Check, Download, LockKeyhole, ShieldCheck, Sparkles, Users } from 'lucide-react'
import type { PageId } from '../types/nav'
import { useMembership } from '../hooks/useMembership'
import { usePortalProfile } from '../hooks/usePortalProfile'
import { useAccount } from '../hooks/useAccount'
import { LEGAL_DETAILS_READY } from '../config/legal'

interface Props {
  onNavigate: (page: PageId) => void
}

const FREE_FEATURES = [
  'Ausgewählte Geschichten, Spiele und Aufgaben jeden Tag',
  'Ein Kinderprofil',
  'Grundlegendes Sterne- und Abzeichen-Tracking',
  'Ausgewählte Mal- und MINT-Inhalte',
]

const PLUS_FEATURES = [
  'Das vollständige Archiv mit Geschichten, Spielen und Aktivitäten',
  'Familienbereich mit bis zu 5 Kinderprofilen',
  'Personalisierte Lernwege',
  'Monatliche druckbare Aktivitätspakete',
  'Wöchentliche Entwicklungsübersicht und Familienplanung',
  'Offline-Unterstützung für Hörgeschichten',
]

export function MembershipPage({ onNavigate }: Props) {
  const { profile } = usePortalProfile()
  const { membership, isPlus, busy, checkout, cancel, openPortal, refresh } = useMembership()
  const { account } = useAccount()
  const [billing, setBilling] = useState<'monthly' | 'annual'>('annual')
  const [email, setEmail] = useState(membership.email)

  useEffect(() => {
    if (membership.email && !email) setEmail(membership.email)
  }, [email, membership.email])

  useEffect(() => {
    if (account?.email) setEmail(account.email)
  }, [account?.email])

  useEffect(() => {
    void refresh()
  }, [refresh])

  return (
    <div className="page membership-page">
      <header className="membership-hero">
        <div>
          <span className="membership-eyebrow"><Sparkles size={15} /> Familienmitgliedschaft+</span>
          <h1>Vergrößert euren<br /><em>Entdeckungsraum.</em></h1>
          <p>Nutzt Kitap Cenneti werbefrei, persönlicher und jede Woche mit neuen Inhalten.</p>
          <div className="membership-trust">
            <span><ShieldCheck size={16} /> Elternkontrolle</span>
            <span><LockKeyhole size={16} /> Sichere Zahlung</span>
            <span><Users size={16} /> 5 Kinderprofile</span>
          </div>
        </div>
        <div className="membership-hero__orb" aria-hidden="true"><span>✦</span></div>
      </header>

      {isPlus && (
        <section className="membership-active">
          <div className="membership-active__icon"><Check size={22} /></div>
          <div>
            <span className="membership-eyebrow">Eure Mitgliedschaft ist aktiv</span>
            <h2>Mit Familien+ geht die Entdeckung weiter.</h2>
            <p>Premium-Inhalte sind für {membership.email || profile.childName || 'eure Familie'} freigeschaltet.</p>
          </div>
          <div className="membership-active__actions">
            <button type="button" className="btn btn--ghost" onClick={() => onNavigate('profile')}>Kontoeinstellungen</button>
            <button type="button" className="btn btn--primary" disabled={busy} onClick={() => void openPortal()}>{busy ? 'Wird geöffnet …' : 'Mitgliedschaft verwalten'}</button>
            {!membership.cancelAtPeriodEnd && (
              <button
                type="button"
                className="btn btn--ghost"
                disabled={busy}
                onClick={() => {
                  if (window.confirm('Möchten Sie das Abonnement zum Ende des bezahlten Zeitraums kündigen?')) void cancel()
                }}
              >
                Vertrag hier kündigen
              </button>
            )}
          </div>
          {membership.cancelAtPeriodEnd && <p className="notice notice--warning">Ihr Familien+-Abonnement endet am Ende des bereits bezahlten Zeitraums.</p>}
        </section>
      )}

      <div className="membership-plans">
        <article className="membership-plan membership-plan--free">
          <div className="membership-plan__top"><span className="plan-symbol">○</span><div><span className="membership-eyebrow">Zum Start</span><h2>Kostenlos</h2></div></div>
          <p className="membership-plan__lead">Probiert Kitap Cenneti aus und entdeckt jeden Tag etwas Kleines.</p>
          <ul className="membership-feature-list">
            {FREE_FEATURES.map((feature) => <li key={feature}><Check size={16} /> {feature}</li>)}
          </ul>
          <button type="button" className="btn btn--ghost membership-plan__button" onClick={() => onNavigate('portal')}>Weiter entdecken</button>
        </article>

        <article className="membership-plan membership-plan--plus">
          <div className="membership-plan__ribbon">Für Familien empfohlen</div>
          <div className="membership-plan__top"><span className="plan-symbol plan-symbol--plus">✦</span><div><span className="membership-eyebrow">Vollzugang</span><h2>Familien+</h2></div></div>
          <p className="membership-plan__lead">Alle Werkzeuge, die die Neugier eures Kindes unterstützen, in einem Familienbereich.</p>
          <div className="billing-toggle" role="group" aria-label="Abrechnungszeitraum">
            <button type="button" className={billing === 'monthly' ? 'is-active' : ''} onClick={() => setBilling('monthly')}>Monatlich</button>
              <button type="button" className={billing === 'annual' ? 'is-active' : ''} onClick={() => setBilling('annual')}>Jährlich <span>Tagesvorteil</span></button>
          </div>
          <ul className="membership-feature-list">
            {PLUS_FEATURES.map((feature) => <li key={feature}><Check size={16} /> {feature}</li>)}
          </ul>
          {!isPlus && (
            <div className="membership-checkout">
              <label htmlFor="membership-email">E-Mail der erwachsenen Person</label>
              <input
                id="membership-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="name@beispiel.de"
              />
              {!account && <p className="membership-checkout__notice">Meldet euch für ein Abonnement zuerst mit einem Elternkonto an.</p>}
              {!LEGAL_DETAILS_READY && <p className="membership-checkout__notice">Der kostenpflichtige Abschluss bleibt gesperrt, bis Impressum und Unternehmensangaben für diese Produktionsumgebung hinterlegt sind.</p>}
              <button type="button" className="btn btn--primary membership-plan__button" disabled={busy || !LEGAL_DETAILS_READY} onClick={() => account ? void checkout(billing, account.email) : onNavigate('profile')}>
                {busy ? 'Wird verbunden …' : !LEGAL_DETAILS_READY ? 'Nach rechtlicher Konfiguration verfügbar' : account ? 'Kostenpflichtig abonnieren' : 'Mit Elternkonto fortfahren'} <span>→</span>
              </button>
              <small>Kinderprofile werden im Elternbereich verwaltet. Die Zahlung wird über Stripe Checkout abgeschlossen; Kündigungen erfolgen im Kontobereich. <a href="#terms">Nutzungsbedingungen und Widerruf</a></small>
            </div>
          )}
          {isPlus && <button type="button" className="btn btn--primary membership-plan__button" onClick={() => void openPortal()}>Abrechnungs- und Stornierungseinstellungen <span>→</span></button>}
        </article>
      </div>

      <section className="membership-value">
        <div className="section-heading-row"><div><span className="section-kicker">Was verändert sich mit Familien+?</span><h2 className="section__title">Nicht mehr Bildschirmzeit, sondern mehr gute Momente.</h2></div></div>
        <div className="membership-value__grid">
          <article><span><CalendarDays size={19} /></span><h3>Ihr bestimmt den Rhythmus</h3><p>Gestaltet den Wochenplan nach Alter und Interessen eures Kindes.</p></article>
          <article><span><Download size={19} /></span><h3>Zu Hause weitermachen</h3><p>Ladet das Paket herunter und öffnet Geschichten und Aktivitäten auch offline.</p></article>
          <article><span><ShieldCheck size={19} /></span><h3>Sicherheit bleibt bei euch</h3><p>Der Erwachsenenbereich ist per PIN geschützt; das Kindererlebnis bleibt ruhig und werbefrei.</p></article>
        </div>
      </section>

      <section className="membership-faq">
        <div><span className="section-kicker">Kurze Antworten</span><h2 className="section__title">Was Familien wissen möchten</h2></div>
        <details><summary>Bleibt die kostenlose Nutzung bestehen?</summary><p>Ja. Der kostenlose Plan bietet weiterhin jeden Tag ausgewählte Inhalte.</p></details>
        <details><summary>Kann ich mehrere Kinder hinzufügen?</summary><p>Mit Familien+ könnt ihr fünf eigene Kinderprofile anlegen und den Fortschritt jedes Kindes getrennt verfolgen.</p></details>
        <details><summary>Sehen Kinder Zahlungsdaten?</summary><p>Nein. Mitgliedschaft und Zahlungen sind ausschließlich im Elternbereich sichtbar.</p></details>
      </section>
    </div>
  )
}
