import type { ArtStyle, ImageProvider, TextModel } from '../types'
import { ART_STYLES, TEXT_MODELS, IMAGE_PROVIDERS, AGE_GROUPS, PAGE_COUNTS } from '../data/prompts'

interface OptionsPanelProps {
  artStyle: ArtStyle
  textModel: TextModel
  imageProvider: ImageProvider
  ageGroup: '3-5' | '6-8' | '9-12'
  pageCount: number
  onArtStyleChange: (style: ArtStyle) => void
  onTextModelChange: (model: TextModel) => void
  onImageProviderChange: (provider: ImageProvider) => void
  onAgeGroupChange: (age: '3-5' | '6-8' | '9-12') => void
  onPageCountChange: (count: number) => void
}

export function OptionsPanel({
  artStyle,
  textModel,
  imageProvider,
  ageGroup,
  pageCount,
  onArtStyleChange,
  onTextModelChange,
  onImageProviderChange,
  onAgeGroupChange,
  onPageCountChange,
}: OptionsPanelProps) {
  return (
    <div className="options-panel">
      <h2 className="section__title">
        <span className="section__title-emoji">⚙️</span>
        Einstellungen
      </h2>

      <h3 style={{ fontSize: '1rem', marginBottom: 8, marginTop: 16 }}>🎨 Zeichenstil</h3>
      <div className="options-grid">
        {ART_STYLES.map((style) => (
          <button
            key={style.id}
            className={`option-chip ${artStyle === style.id ? 'option-chip--selected' : ''}`}
            onClick={() => onArtStyleChange(style.id)}
          >
            <span className="option-chip__emoji">{style.emoji}</span>
            <span className="option-chip__name">{style.name}</span>
          </button>
        ))}
      </div>

      <h3 style={{ fontSize: '1rem', marginBottom: 8, marginTop: 20 }}>🤖 Geschichtenmodell</h3>
      <div className="options-grid">
        {TEXT_MODELS.map((model) => (
          <button
            key={model.id}
            className={`option-chip ${textModel === model.id ? 'option-chip--selected' : ''}`}
            onClick={() => onTextModelChange(model.id)}
          >
            <span className="option-chip__emoji">{model.emoji}</span>
            <span className="option-chip__name">{model.name}</span>
            <span className="option-chip__desc">{model.description}</span>
          </button>
        ))}
      </div>

      <h3 style={{ fontSize: '1rem', marginBottom: 8, marginTop: 20 }}>🖼️ Visuelle API</h3>
      <div className="options-grid">
        {IMAGE_PROVIDERS.map((provider) => (
          <button
            key={provider.id}
            className={`option-chip ${imageProvider === provider.id ? 'option-chip--selected' : ''}`}
            onClick={() => onImageProviderChange(provider.id)}
          >
            <span className="option-chip__emoji">{provider.emoji}</span>
            <span className="option-chip__name">{provider.name}</span>
            <span className="option-chip__desc">{provider.description}</span>
          </button>
        ))}
      </div>

      <h3 style={{ fontSize: '1rem', marginBottom: 8, marginTop: 20 }}>👶 Altersgruppe</h3>
      <div className="options-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {AGE_GROUPS.map((age) => (
          <button
            key={age.id}
            className={`option-chip ${ageGroup === age.id ? 'option-chip--selected' : ''}`}
            onClick={() => onAgeGroupChange(age.id)}
          >
            <span className="option-chip__emoji">{age.emoji}</span>
            <span className="option-chip__name">{age.label}</span>
          </button>
        ))}
      </div>

      <h3 style={{ fontSize: '1rem', marginBottom: 8, marginTop: 20 }}>📄 Anzahl der Seiten</h3>
      <div className="options-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {PAGE_COUNTS.map((count) => (
          <button
            key={count}
            className={`option-chip ${pageCount === count ? 'option-chip--selected' : ''}`}
            onClick={() => onPageCountChange(count)}
          >
            <span className="option-chip__emoji">📖</span>
            <span className="option-chip__name">{count} Seiten</span>
          </button>
        ))}
      </div>
    </div>
  )
}
