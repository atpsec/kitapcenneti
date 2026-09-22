import type { PageId } from '../types/nav'
import { FEATURE_CARDS } from '../data/nav'
import { AUDIO_STORIES } from '../data/audioStories'
import { HEROES } from '../data/heroes'
import { COLORING_PAGES } from '../data/coloringPages'
import { STICKERS, WHAT_NEXT } from '../data/stickers'
import { motion } from 'framer-motion'
import { ProgressHub } from '../components/ProgressHub'
import { useProgress } from '../hooks/useProgress'
import { useState } from 'react'

interface HomePageProps {
  onNavigate: (page: PageId) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  const dayIndex = new Date().getDay()
  const featuredStory = AUDIO_STORIES[dayIndex % AUDIO_STORIES.length]
  const featuredHero = HEROES[dayIndex % HEROES.length]
  const { bedtime, toggleBedtime, stickers, spinAvailable } = useProgress()
  const [idea, setIdea] = useState(() => Math.floor(Math.random() * WHAT_NEXT.length))
  const tip = WHAT_NEXT[idea % WHAT_NEXT.length]

  return (
    <div className="home">
      <section className="home-hero home-hero--playground">
        <div className="home-hero__glow" aria-hidden="true" />
        <motion.div
          className="home-hero__copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="home-hero__eyebrow">Auch Sie erleben heute ein Abenteuer</p>
          <h1 className="home-hero__title">Kitap Cenneti</h1>
          <p className="home-hero__desc">
            Märchen, Spiele und kreative Aktivitäten – eine übersichtliche und einladende Welt zum Erkunden mit der Familie.
          </p>
          <div className="home-hero__actions">
            <button className="btn btn--primary btn--pop" onClick={() => onNavigate('fun')}>
              🎡 Lustiger Garten
            </button>
            <button className="btn btn--sun" onClick={() => onNavigate('activities')}>
              🎮 Arcade
            </button>
            <button className="btn btn--ghost" onClick={() => onNavigate('create')}>
              ✨ Erstelle eine Geschichte
            </button>
          </div>
          <div className="home-hero__meta">
            <span>{stickers.length}/{STICKERS.length} sticker</span>
            <span>{spinAvailable ? 'Rad bereit 🎯' : 'Rad morgen 🌅'}</span>
            <button type="button" className={`bedtime-toggle ${bedtime ? 'is-on' : ''}`} onClick={toggleBedtime}>
              {bedtime ? '🌙 Gece' : '🌙 Gece modu'}
            </button>
          </div>
        </motion.div>

        <motion.div
          className="home-hero__stage"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.55 }}
        >
          <div className="playground-stage">
            <button type="button" className="stage-bubble stage-bubble--a" onClick={() => onNavigate('audio')}>
              <span aria-hidden="true">🎧</span>
              <small>Märchen</small>
            </button>
            <button type="button" className="stage-bubble stage-bubble--b" onClick={() => onNavigate('coloring')}>
              <span aria-hidden="true">🖍️</span>
              <small>Malerei</small>
            </button>
            <button type="button" className="stage-bubble stage-bubble--c" onClick={() => onNavigate('fun')}>
              <span aria-hidden="true">🎡</span>
              <small>Unterhaltung</small>
            </button>
            <button type="button" className="stage-bubble stage-bubble--d" onClick={() => onNavigate('heroes')}>
              <span aria-hidden="true">🦸</span>
              <small>Kahraman</small>
            </button>
            <div className="stage-mascot" aria-hidden="true">🦊</div>
            <p className="stage-caption">Irgendwo antippen – erkunden</p>
          </div>
        </motion.div>
      </section>

      <section className="section surprise-strip">
        <div className="surprise-card">
          <span>{tip.emoji}</span>
          <div>
            <h2>Was sollen wir jetzt tun?</h2>
            <p>{tip.title} — {tip.blurb}</p>
          </div>
          <div className="btn-row">
            <button className="btn btn--primary" onClick={() => onNavigate(tip.page as PageId)}>
              beginnen
            </button>
            <button className="btn btn--ghost" onClick={() => setIdea((i) => i + 1)}>
              Veränderung
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">
          <span className="section__title-emoji">🌈</span>
          Deine Welt
        </h2>
        <ProgressHub onNavigate={onNavigate} />
      </section>

      <section className="section">
        <h2 className="section__title"><span className="section__title-emoji">🗺️</span> Entdecken</h2>
        <div className="feature-grid feature-grid--lively">
          {FEATURE_CARDS.map((card, i) => (
            <motion.button
              key={card.id}
              className="feature-card"
              style={{ background: card.gradient }}
              onClick={() => onNavigate(card.id)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="feature-card__emoji">{card.emoji}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="section home-highlights">
        <div className="highlight-card" onClick={() => onNavigate('audio')}>
          <span>{featuredStory.emoji}</span>
          <div>
            <h3>Geschichte des Tages</h3>
            <p>{featuredStory.title} · {featuredStory.duration}</p>
          </div>
        </div>
        <div className="highlight-card" onClick={() => onNavigate('heroes')}>
          <span>{featuredHero.emoji}</span>
          <div>
            <h3>Held des Tages</h3>
            <p>{featuredHero.name}</p>
          </div>
        </div>
        <div className="highlight-card" onClick={() => onNavigate('coloring')}>
          <span>🖍️</span>
          <div>
            <h3>Gemäldearchiv</h3>
            <p>{COLORING_PAGES.length} telifsiz PDF sayfa</p>
          </div>
        </div>
        <div className="highlight-card" onClick={() => onNavigate('fun')}>
          <span>🏷️</span>
          <div>
            <h3>Stickeralbum</h3>
            <p>{stickers.length} / {STICKERS.length} gesammelt</p>
          </div>
        </div>
      </section>

      <section className="section trust-strip trust-strip--bright">
        <div>🎡 Rad der Überraschung</div>
        <div>🎮 4 Minispiele</div>
        <div>🏷️ Sticker koleksiyonu</div>
        <div>📕 Visuelles Story-PDF</div>
      </section>
    </div>
  )
}
