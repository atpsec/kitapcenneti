import type { StoryCategory } from '../types'
import { getCategoryInfo } from '../data/prompts'

interface PromptLibraryProps {
  category: StoryCategory
  selectedPrompt: string
  onSelectPrompt: (prompt: string) => void
}

export function PromptLibrary({ category, selectedPrompt, onSelectPrompt }: PromptLibraryProps) {
  const categoryInfo = getCategoryInfo(category)
  if (!categoryInfo) return null

  return (
    <section className="section">
      <h2 className="section__title">
        <span className="section__title-emoji">💡</span>
        Fertige Geschichtenideen
      </h2>
      <p style={{ color: 'var(--text-light)', fontWeight: 600, marginBottom: 4 }}>
        Wählen Sie unten eine Idee aus oder schreiben Sie Ihre eigene Geschichte!
      </p>
      <div className="prompt-library">
        {categoryInfo.samplePrompts.map((prompt) => (
          <button
            key={prompt}
            className={`prompt-chip ${selectedPrompt === prompt ? 'prompt-chip--active' : ''}`}
            onClick={() => onSelectPrompt(prompt)}
          >
            {prompt}
          </button>
        ))}
      </div>
    </section>
  )
}
