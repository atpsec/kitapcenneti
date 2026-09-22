import type { StoryCategory } from '../types'
import { CATEGORIES, getCategoryInfo } from '../data/prompts'

interface CategoryGridProps {
  selected: StoryCategory | null
  onSelect: (category: StoryCategory) => void
  /** Compact: only selected category + change button */
  compact?: boolean
  onChangeRequest?: () => void
}

export function CategoryGrid({ selected, onSelect, compact = false, onChangeRequest }: CategoryGridProps) {
  const selectedInfo = selected ? getCategoryInfo(selected) : null

  if (compact && selectedInfo) {
    return (
      <section className="section category-compact" id="create-step-category">
        <div className="category-compact__bar" style={{ background: selectedInfo.gradient }}>
          <span className="category-compact__emoji" aria-hidden="true">{selectedInfo.emoji}</span>
          <div className="category-compact__text">
            <small>Ausgewählte Kategorie</small>
            <strong>{selectedInfo.title}</strong>
          </div>
          <button type="button" className="category-compact__change" onClick={onChangeRequest}>
            Veränderung
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="section" id="create-step-category">
      <h2 className="section__title">
        <span className="section__title-emoji">🎨</span>
        1. Kategorie auswählen
      </h2>
      <p className="section-hint">Tippen Sie auf eine Karte – Sie gelangen sofort zum nächsten Schritt.</p>

      <div className="category-grid">
        {CATEGORIES.map((cat) => {
          const isSelected = selected === cat.id
          return (
            <button
              key={cat.id}
              type="button"
              className={`category-card ${cat.featured ? 'category-card--featured' : ''} ${isSelected ? 'category-card--selected' : ''}`}
              style={{ background: cat.gradient }}
              onClick={() => onSelect(cat.id)}
              aria-pressed={isSelected}
            >
              {cat.featured && <span className="category-card__featured-badge">⭐ Privat</span>}
              {isSelected && <span className="category-card__check">✓</span>}
              <span className="category-card__bg-emoji" aria-hidden="true">{cat.emoji}</span>
              <span className="category-card__emoji">{cat.emoji}</span>
              <h3 className="category-card__title">{cat.title}</h3>
              <p className="category-card__desc">{cat.description}</p>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export function scrollToCreateTop() {
  requestAnimationFrame(() => {
    document.getElementById('create-wizard')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}
