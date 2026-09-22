import { useRef } from 'react'

interface PersonalizeHeroProps {
  heroName: string
  heroImage: string | null
  onNameChange: (name: string) => void
  onImageChange: (image: string | null) => void
}

export function PersonalizeHero({ heroName, heroImage, onNameChange, onImageChange }: PersonalizeHeroProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      alert('Das Foto darf höchstens 5 MB groß sein.')
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      onImageChange(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="personalize-hero">
      <h3 className="personalize-hero__title">
        <span>🦸</span> Du bist der Held!
      </h3>
      <p style={{ marginBottom: 16, fontWeight: 600, color: 'var(--text-light)' }}>
        Schreiben Sie Ihren Namen oder laden Sie Ihr Foto hoch – Sie werden der Protagonist der Geschichte sein!
      </p>
      <div className="personalize-row">
        <div className="personalize-input">
          <label htmlFor="hero-name">🌟 Heldenname</label>
          <input
            id="hero-name"
            type="text"
            value={heroName}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="Namen eingeben …"
            maxLength={30}
          />
        </div>

        <div className="photo-upload">
          <label className="photo-upload__label">📸 Dein Foto (optional)</label>
          <div
            className="photo-upload__area"
            onClick={() => fileInputRef.current?.click()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && fileInputRef.current?.click()}
          >
            {heroImage ? (
              <img src={heroImage} alt="Held*innenfoto" />
            ) : (
              <div className="photo-upload__placeholder">
                <span>📷</span>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          {heroImage && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                onImageChange(null)
              }}
              style={{
                fontSize: '0.8rem',
                color: 'var(--pink)',
                background: 'none',
                fontWeight: 700,
              }}
            >
              Entfernen
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
