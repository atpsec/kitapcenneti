import { motion } from 'framer-motion'

export function HeroBanner() {
  return (
    <motion.div
      className="hero-banner"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-banner__content">
        <div className="hero-banner__text">
          <h2 className="hero-banner__title">
            Stellen Sie sich vor, schreiben Sie, lesen Sie! 🌈
          </h2>
          <p className="hero-banner__desc">
            Erstellen Sie personalisierte, farbenfrohe illustrierte Geschichtenbücher mit künstlicher Intelligenz.
            Schreiben Sie Ihren Namen, seien Sie der Held der Geschichte!
          </p>
          <div className="hero-banner__stats">
            <span className="hero-stat">📚 9 Kategori</span>
            <span className="hero-stat">🎨 7 Stil</span>
            <span className="hero-stat">🆓 Kostenlos</span>
          </div>
        </div>
        <div className="hero-banner__visual" aria-hidden="true">
          <div className="hero-book">
            <div className="hero-book__page hero-book__page--1">🦄</div>
            <div className="hero-book__page hero-book__page--2">🚀</div>
            <div className="hero-book__page hero-book__page--3">🧚</div>
            <div className="hero-book__cover">📖</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
