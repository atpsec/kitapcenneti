import { AdSlot } from '../components/AdSlot'
import { LEGAL_DETAILS, LEGAL_DETAILS_READY } from '../config/legal'

function LegalConfigNotice() {
  if (LEGAL_DETAILS_READY) return null
  return (
    <p className="notice notice--warning">
      Die Unternehmensangaben werden vor dem produktiven Betrieb über die Cloudflare-Pages-Umgebungsvariablen ergänzt.
    </p>
  )
}

export function AboutPage() {
  return (
    <div className="page legal-page">
      <header className="page-header">
        <h1>Über Kitap Cenneti</h1>
        <p>Ein ruhiger digitaler Ort für Geschichten, Spiel und gemeinsames Entdecken.</p>
      </header>
      <div className="panel prose">
        <p><strong>Kitap Cenneti</strong> ist eine Familienplattform für deutschsprachige Kinder und ihre Eltern. Wir verbinden Vorlesen, kreative Aufgaben und altersgerechte Lernimpulse in einer geschützten Umgebung.</p>
        <p>Inhalte aus Deutschland und der Welt werden kindgerecht erklärt: Märchen, Natur, Musik, Erfinderinnen und Erfinder sowie regionale Traditionen gehören genauso dazu wie freie Fantasiegeschichten. Kinderprofile werden von einer erwachsenen Person verwaltet.</p>
        <p>Der kostenlose Bereich bleibt zugänglich. Mit Familien+ können Familien zusätzliche Inhalte, mehrere Kinderprofile und Elternfunktionen nutzen. Die Preis- und Vertragsangaben werden vor dem kostenpflichtigen Abschluss im Checkout angezeigt.</p>
        <h2>Kontakt</h2>
        <p>Fragen, Hinweise oder Kooperationen können über die <a href="#contact">Kontaktseite</a> eingereicht werden.</p>
      </div>
      <AdSlot slot="bottom" />
    </div>
  )
}

export function ImpressumPage() {
  return (
    <div className="page legal-page">
      <header className="page-header">
        <h1>Impressum</h1>
        <p>Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</p>
      </header>
      <div className="panel prose">
        <p><strong>{LEGAL_DETAILS.company}</strong></p>
        <p>{LEGAL_DETAILS.address}</p>
        <p>Vertreten durch: {LEGAL_DETAILS.representative}</p>
        <h2>Registereintrag</h2>
        <p>{LEGAL_DETAILS.register}</p>
        <p>USt-IdNr.: {LEGAL_DETAILS.vatId}</p>
        <h2>Kontakt</h2>
        <p>E-Mail: <a href={LEGAL_DETAILS.email.startsWith('[') ? undefined : `mailto:${LEGAL_DETAILS.email}`}>{LEGAL_DETAILS.email}</a></p>
        {LEGAL_DETAILS.phone && <p>Telefon: {LEGAL_DETAILS.phone}</p>}
        <LegalConfigNotice />
      </div>
    </div>
  )
}

export function PrivacyPage() {
  return (
    <div className="page legal-page">
      <header className="page-header">
        <h1>Datenschutzerklärung</h1>
        <p>Stand: 22. September 2026</p>
      </header>
      <div className="panel prose">
        <h2>1. Verantwortlicher</h2>
        <p>Verantwortlicher für die Verarbeitung personenbezogener Daten ist <strong>{LEGAL_DETAILS.company}</strong>, {LEGAL_DETAILS.address}. Für Datenschutzanfragen erreichen Sie uns unter <a href={LEGAL_DETAILS.email.startsWith('[') ? undefined : `mailto:${LEGAL_DETAILS.email}`}>{LEGAL_DETAILS.email}</a>.{LEGAL_DETAILS.dpoEmail && <> Unser Datenschutzkontakt ist unter <a href={`mailto:${LEGAL_DETAILS.dpoEmail}`}>{LEGAL_DETAILS.dpoEmail}</a> erreichbar.</>}</p>

        <h2>2. Welche Daten wir verarbeiten</h2>
        <p>Ohne Konto können lokale Einstellungen, Fortschritte und gespeicherte Inhalte im Browser gespeichert werden. Bei einem Elternkonto verarbeiten wir E-Mail-Adresse, Konto- und Sitzungsdaten sowie die von der erwachsenen Person angelegten Kinderprofile, Interessen und Lernfortschritte. Bitte tragen Sie im Kinderprofil keine vollständigen Namen, Fotos oder andere nicht erforderliche Angaben ein.</p>
        <p>Bei der Erstellung einer Geschichte können eingegebene Themen und Anweisungen an den dafür aktivierten KI-Dienst übermittelt werden. Bitte geben Sie dort keine sensiblen oder fremden personenbezogenen Daten ein.</p>

        <h2>3. Zwecke und Rechtsgrundlagen</h2>
        <ul className="tip-list">
          <li>Bereitstellung des Kontos, der Profile und der gebuchten Funktionen: Art. 6 Abs. 1 lit. b DSGVO.</li>
          <li>Abrechnung, Betrugsprävention und Nachweis von Vertragsvorgängen: Art. 6 Abs. 1 lit. b und c DSGVO.</li>
          <li>Optionale Analyse- und Werbedienste erst nach Einwilligung: Art. 6 Abs. 1 lit. a DSGVO.</li>
          <li>Technischer Betrieb und Schutz des Dienstes im erforderlichen Umfang: Art. 6 Abs. 1 lit. f DSGVO.</li>
        </ul>
        <p>Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft über „Cookie-Einstellungen“ widerrufen.</p>

        <h2>4. Cookies und lokale Speicherung</h2>
        <p>Erforderliche Sitzungs- und Sicherheitsmechanismen dienen ausschließlich dem Betrieb des Dienstes. Analyse und Werbung bleiben deaktiviert, bis Sie dafür separat einwilligen. Die Auswahl wird mit Versionsnummer und Zeitstempel gespeichert, damit sie später geändert oder widerrufen werden kann.</p>

        <h2>5. Zahlungsdienst und Auftragsverarbeiter</h2>
        <p>Zahlungen für Familien+ werden über Stripe abgewickelt. Vollständige Kartendaten werden von uns nicht gespeichert. Für Hosting, Datenbank und Sicherheitsfunktionen können Cloudflare-Dienste, für E-Mails und KI-Funktionen die jeweils aktivierten Anbieter eingesetzt werden. Die Anbieter verarbeiten Daten nur für die genannten Zwecke und werden in den erforderlichen Auftragsverarbeitungsvereinbarungen dokumentiert. Soweit Daten in Drittländer übermittelt werden, erfolgt dies nur mit einer geeigneten Rechtsgrundlage und den erforderlichen Garantien.</p>
        <p>Google-Werbung wird nur auf dafür vorgesehenen Elternseiten und nach Einwilligung geladen. Weitere Informationen finden Sie in den <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">Google-Werberichtlinien</a>.</p>

        <h2>6. Speicherdauer und Ihre Rechte</h2>
        <p>Kontodaten werden so lange gespeichert, wie das Konto oder gesetzliche Aufbewahrungspflichten bestehen. Abrechnungs- und Geschäftsunterlagen können aufgrund gesetzlicher Pflichten länger aufbewahrt werden. Sie haben nach Maßgabe der DSGVO insbesondere Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Sie können sich außerdem bei einer Datenschutzaufsichtsbehörde beschweren.</p>
        {LEGAL_DETAILS.supervisoryAuthority && <p>Zuständige Aufsichtsbehörde: {LEGAL_DETAILS.supervisoryAuthority}</p>}

        <h2>7. Kinder und Elternkonto</h2>
        <p>Ein Konto darf nur von einer erwachsenen Person angelegt werden. Kinder nutzen ausschließlich das vom Elternkonto eingerichtete Profil. Wir richten keine direkt von Kindern erstellten Konten und verwenden Kinderprofile nicht für personalisierte Werbung.</p>
        <LegalConfigNotice />
      </div>
    </div>
  )
}

export function TermsPage() {
  return (
    <div className="page legal-page">
      <header className="page-header">
        <h1>Allgemeine Nutzungs- und Abonnementbedingungen</h1>
        <p>Stand: 22. September 2026</p>
      </header>
      <div className="panel prose">
        <h2>1. Geltungsbereich</h2>
        <p>Diese Bedingungen gelten für die Nutzung von Kitap Cenneti durch Familien. Der Dienst stellt Geschichten, Spiele, Lernmaterialien und Elternfunktionen bereit. Die Nutzung setzt voraus, dass die erwachsene Person die Verantwortung für ihr Konto und die Kinderprofile übernimmt.</p>
        <h2>2. Kostenloser Bereich und Familien+</h2>
        <p>Der kostenlose Bereich kann mit eingeschränktem Funktionsumfang genutzt werden. Familien+ ist ein kostenpflichtiges, sich automatisch verlängerndes Abonnement. Der konkrete Preis einschließlich Steuern, Abrechnungszeitraum, Leistungsumfang und Zahlungsmethode wird vor dem Abschluss im Stripe Checkout angezeigt und dort bestätigt.</p>
        <p>Familien+ kann jederzeit über die Kontoverwaltung gekündigt werden. Die Kündigung wird zum Ende des bereits bezahlten Abrechnungszeitraums wirksam; bis dahin bleiben die bezahlten Funktionen verfügbar. Eine Kündigungsbestätigung wird elektronisch bereitgestellt.</p>
        <h2>3. Widerrufsrecht und digitale Inhalte</h2>
        <p>Verbraucher haben grundsätzlich ein gesetzliches Widerrufsrecht. Die Widerrufsbelehrung und das Muster-Widerrufsformular werden vor dem Abschluss gesondert bereitgestellt. Wenn digitale Inhalte vor Ablauf der Widerrufsfrist beginnen sollen, ist hierfür eine ausdrückliche Zustimmung und die gesetzlich erforderliche Bestätigung des Verlusts des Widerrufsrechts erforderlich.</p>
        <h2>4. Zulässige Nutzung und Inhalte</h2>
        <ul className="tip-list">
          <li>Der Dienst darf nur rechtmäßig und unter Beachtung der Rechte Dritter genutzt werden.</li>
          <li>Keine Eingabe sensibler Daten oder vollständiger personenbezogener Daten von Kindern in KI-Eingaben.</li>
          <li>Keine missbräuchlichen, rechtswidrigen, diskriminierenden oder schädlichen Inhalte.</li>
          <li>Inhalte dürfen nicht als medizinische, psychologische oder pädagogische Einzelfallberatung verstanden werden.</li>
        </ul>
        <h2>5. Verfügbarkeit und Änderungen</h2>
        <p>Wir entwickeln den Dienst weiter und können Inhalte aus technischen, rechtlichen oder sicherheitsbezogenen Gründen anpassen. Gesetzliche Gewährleistungs- und Verbraucherrechte bleiben unberührt.</p>
        <LegalConfigNotice />
      </div>
    </div>
  )
}

export function ContactPage() {
  return (
    <div className="page legal-page">
      <header className="page-header">
        <h1>Kontakt</h1>
        <p>Fragen, Datenschutzanfragen, Widerruf und Support</p>
      </header>
      <div className="panel prose">
        <p>E-Mail: <a href={LEGAL_DETAILS.email.startsWith('[') ? undefined : `mailto:${LEGAL_DETAILS.email}`}>{LEGAL_DETAILS.email}</a></p>
        <p>Für eine Kündigung nutzen Sie bitte die Kontoverwaltung und den dort sichtbaren Button „Verträge hier kündigen“. Für Datenschutz- oder Widerrufsanfragen können Sie die oben genannte E-Mail-Adresse verwenden.</p>
        <p>Quellcode: <a href="https://github.com/atpsec/kitapcenneti" target="_blank" rel="noreferrer">atpsec/kitapcenneti</a></p>
        <LegalConfigNotice />
      </div>
      <AdSlot slot="bottom" />
    </div>
  )
}
