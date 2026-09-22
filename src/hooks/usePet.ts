import { useCallback, useEffect, useState } from 'react'
import { getActiveProfileId } from './usePortalProfile'
import { completeActivity } from './useProgress'

const BASE = 'kitapcenneti-pet'

export type PetMood = 'happy' | 'ok' | 'sleepy' | 'hungry'

export interface PetState {
  name: string
  species: 'fox' | 'dragon' | 'owl' | 'bunny'
  hunger: number // 0-100
  joy: number
  energy: number
  xp: number
  level: number
  lastCare: number
}

const SPECIES: Record<PetState['species'], { emoji: string; label: string }> = {
  fox: { emoji: '🦊', label: 'Fuchs' },
  dragon: { emoji: '🐉', label: 'Drache' },
  owl: { emoji: '🦉', label: 'Eule' },
  bunny: { emoji: '🐰', label: 'Hase' },
}

function key() {
  return `${BASE}::${getActiveProfileId()}`
}

function clamp(n: number) {
  return Math.max(0, Math.min(100, n))
}

function defaultPet(): PetState {
  return {
    name: 'Mimi',
    species: 'fox',
    hunger: 65,
    joy: 70,
    energy: 80,
    xp: 0,
    level: 1,
    lastCare: Date.now(),
  }
}

function decay(pet: PetState): PetState {
  const hours = Math.max(0, (Date.now() - pet.lastCare) / 3600000)
  if (hours < 0.25) return pet
  const steps = Math.min(12, Math.floor(hours * 2))
  return {
    ...pet,
    hunger: clamp(pet.hunger - steps * 4),
    joy: clamp(pet.joy - steps * 3),
    energy: clamp(pet.energy - steps * 2),
  }
}

function levelFromXp(xp: number) {
  return 1 + Math.floor(xp / 40)
}

export function petEmoji(species: PetState['species']) {
  return SPECIES[species].emoji
}

export function petLabel(species: PetState['species']) {
  return SPECIES[species].label
}

export function moodOf(pet: PetState): PetMood {
  if (pet.hunger < 35) return 'hungry'
  if (pet.energy < 30) return 'sleepy'
  if (pet.joy > 70 && pet.hunger > 50) return 'happy'
  return 'ok'
}

export function usePet() {
  const [pet, setPet] = useState<PetState>(defaultPet)

  const refresh = useCallback(() => {
    try {
      const raw = localStorage.getItem(key())
      const base = raw ? ({ ...defaultPet(), ...JSON.parse(raw) } as PetState) : defaultPet()
      setPet(decay(base))
    } catch {
      setPet(defaultPet())
    }
  }, [])

  useEffect(() => {
    refresh()
    const on = () => refresh()
    window.addEventListener('kitapcenneti-portal', on)
    window.addEventListener('storage', on)
    const t = window.setInterval(refresh, 60_000)
    return () => {
      window.removeEventListener('kitapcenneti-portal', on)
      window.removeEventListener('storage', on)
      clearInterval(t)
    }
  }, [refresh])

  const save = (next: PetState) => {
    const leveled = { ...next, level: levelFromXp(next.xp), lastCare: Date.now() }
    localStorage.setItem(key(), JSON.stringify(leveled))
    setPet(leveled)
    window.dispatchEvent(new CustomEvent('kitapcenneti-portal'))
  }

  const feed = () => {
    save({
      ...pet,
      hunger: clamp(pet.hunger + 28),
      joy: clamp(pet.joy + 6),
      xp: pet.xp + 8,
    })
    completeActivity('pet')
  }

  const play = () => {
    save({
      ...pet,
      joy: clamp(pet.joy + 24),
      energy: clamp(pet.energy - 12),
      hunger: clamp(pet.hunger - 8),
      xp: pet.xp + 12,
    })
    completeActivity('pet')
  }

  const rest = () => {
    save({
      ...pet,
      energy: clamp(pet.energy + 30),
      joy: clamp(pet.joy + 4),
      xp: pet.xp + 6,
    })
    completeActivity('pet')
  }

  const rename = (name: string) => save({ ...pet, name: name.slice(0, 16) || pet.name })
  const setSpecies = (species: PetState['species']) => save({ ...pet, species })

  return { pet, mood: moodOf(pet), feed, play, rest, rename, setSpecies, SPECIES, refresh }
}
