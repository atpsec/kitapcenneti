import { motion } from 'framer-motion'
import type { Story } from '../types'

interface SavedStoriesProps {
  stories: Story[]
  onLoad: (story: Story) => void
  onDelete: (title: string) => void
}

export function SavedStories({ stories, onLoad, onDelete }: SavedStoriesProps) {
  if (stories.length === 0) return null

  return (
    <section className="section saved-stories">
      <h2 className="section__title">
        <span className="section__title-emoji">💾</span>
        Meine gespeicherten Geschichten
      </h2>
      <div className="saved-stories__grid">
        {stories.map((story, i) => (
          <motion.div
            key={story.title + i}
            className="saved-story-card"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="saved-story-card__thumb">
              {story.pages[0]?.imageUrl ? (
                <img src={story.pages[0].imageUrl} alt={story.title} />
              ) : (
                <span>📖</span>
              )}
            </div>
            <div className="saved-story-card__info">
              <h4>{story.title}</h4>
              <p>{story.pages.length} sayfa</p>
            </div>
            <div className="saved-story-card__actions">
              <button className="saved-story-card__btn" onClick={() => onLoad(story)}>
                Lesen
              </button>
              <button
                className="saved-story-card__btn saved-story-card__btn--delete"
                onClick={() => onDelete(story.title)}
              >
                Löschen
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
