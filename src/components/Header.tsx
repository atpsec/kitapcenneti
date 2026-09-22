import { motion } from 'framer-motion'

export function Header() {
  return (
    <header className="header">
      <motion.div
        className="header__logo"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="header__emoji">📚</span>
        <h1 className="header__title">Kitap Cenneti</h1>
        <span className="header__emoji">✨</span>
      </motion.div>
      <motion.p
        className="header__subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Erschaffe mit deiner Fantasie magische Geschichten!
      </motion.p>
    </header>
  )
}
