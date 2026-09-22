import { useState } from 'react'
import { petEmoji, petLabel, usePet, type PetState } from '../hooks/usePet'
import { showToast } from './Toast'

const MOOD_LINE = {
  happy: 'sehr glücklich und möchte spielen!',
  ok: 'keyfi yerinde.',
  sleepy: 'biraz uykusu var…',
  hungry: 'hat Hunger!',
} as const

export function PetCare() {
  const { pet, mood, feed, play, rest, rename, setSpecies, SPECIES } = usePet()
  const [nameDraft, setNameDraft] = useState(pet.name)

  return (
    <div className="pet-care panel">
      <div className="pet-care__hero">
        <span className={`pet-care__avatar is-${mood}`} aria-hidden="true">
          {petEmoji(pet.species)}
        </span>
        <div>
          <h2>
            {pet.name} · Lv.{pet.level}
          </h2>
          <p>
            {petLabel(pet.species)} {MOOD_LINE[mood]}
          </p>
        </div>
      </div>

      <div className="pet-bars">
        <label>
          Tokluk
          <meter min={0} max={100} value={pet.hunger} />
        </label>
        <label>
          Freude
          <meter min={0} max={100} value={pet.joy} />
        </label>
        <label>
          Enerji
          <meter min={0} max={100} value={pet.energy} />
        </label>
        <label>
          XP {pet.xp % 40}/40
          <meter min={0} max={40} value={pet.xp % 40} />
        </label>
      </div>

      <div className="btn-row">
        <button
          type="button"
          className="btn btn--primary"
          onClick={() => {
            feed()
            showToast(`${pet.name} afiyetle yedi! +XP`)
          }}
        >
          🍎 Besle
        </button>
        <button
          type="button"
          className="btn btn--sun"
          onClick={() => {
            play()
            showToast('Spielzeit! 🎾')
          }}
        >
          🎾 Oynat
        </button>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => {
            rest()
            showToast('Nickerchen … 💤')
          }}
        >
          💤 Dinlendir
        </button>
      </div>

      <div className="pet-care__edit">
        <label>
          Namen
          <input
            value={nameDraft}
            maxLength={16}
            onChange={(e) => setNameDraft(e.target.value)}
            onBlur={() => rename(nameDraft)}
          />
        </label>
        <div className="library-filters">
          {(Object.keys(SPECIES) as PetState['species'][]).map((s) => (
            <button
              key={s}
              type="button"
              className={`stem-chip ${pet.species === s ? 'is-active' : ''}`}
              onClick={() => setSpecies(s)}
            >
              {SPECIES[s].emoji} {SPECIES[s].label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
