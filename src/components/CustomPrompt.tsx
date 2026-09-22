interface CustomPromptProps {
  value: string
  onChange: (value: string) => void
}

export function CustomPrompt({ value, onChange }: CustomPromptProps) {
  return (
    <section className="section custom-prompt">
      <h2 className="section__title">
        <span className="section__title-emoji">✏️</span>
        Erzählen Sie Ihre eigene Geschichte
      </h2>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Zum Beispiel: Ein Kind sucht in einer magischen Bibliothek nach verlorenen Büchern …"
        maxLength={500}
      />
      <p style={{ textAlign: 'right', fontSize: '0.8rem', color: 'var(--text-light)', marginTop: 4 }}>
        {value.length}/500
      </p>
    </section>
  )
}
