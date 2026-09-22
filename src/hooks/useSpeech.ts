import { useState, useCallback, useEffect } from 'react'

export type VoiceProfile = 'female' | 'child' | 'male' | 'auto' | 'storyteller'

export const VOICE_OPTIONS: { id: VoiceProfile; label: string; emoji: string; desc: string; premium?: boolean }[] = [
  { id: 'female', label: 'Frauenstimme', emoji: '👩', desc: 'Warme Erzählerstimme' },
  { id: 'child', label: 'Kinderstimme', emoji: '🧒', desc: 'Fröhlich und hell' },
  { id: 'male', label: 'Männerstimme', emoji: '👨', desc: 'Tiefe Erzählerstimme' },
  { id: 'auto', label: 'Automatisch', emoji: '🎙️', desc: 'Browserstandard' },
  { id: 'storyteller', label: 'Märchenstimme', emoji: '✨', desc: 'Premium, ruhiges Tempo', premium: true },
]

const STORAGE_KEY = 'kitapcenneti-voice-profile'

function scoreVoice(voice: SpeechSynthesisVoice, profile: VoiceProfile): number {
  const name = `${voice.name} ${voice.lang}`.toLowerCase()
  let score = 0
  if (voice.lang.toLowerCase().startsWith('de')) score += 50
  else if (voice.lang.toLowerCase().startsWith('en')) score += 5

  if (profile === 'female') {
    if (/female|woman|kız|kadin|kadın|ayda|yelda|filiz|zira|google.*türkçe|microsoft.*dilara|emel/i.test(name)) score += 40
    if (/male|adam|man|boy|erkek/i.test(name)) score -= 20
  }
  if (profile === 'male') {
    if (/male|man|adam|erkek|ahmet|tolga|google.*turkish male/i.test(name)) score += 40
    if (/female|woman|kız|kadın/i.test(name)) score -= 20
  }
  if (profile === 'child' || profile === 'storyteller') {
    if (/child|kid|çocuk|junior|young/i.test(name)) score += 45
    if (/female|kız|kadın/i.test(name)) score += 15
    if (/male|adam|man/i.test(name) && !/female/.test(name)) score -= 5
  }
  return score
}

function pickVoice(profile: VoiceProfile): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis?.getVoices() || []
  if (!voices.length) return null
  if (profile === 'auto') {
    return voices.find((v) => v.lang.toLowerCase().startsWith('de')) || voices[0]
  }
  const ranked = [...voices].sort((a, b) => scoreVoice(b, profile) - scoreVoice(a, profile))
  return ranked[0] || null
}

function profileSettings(profile: VoiceProfile): { rate: number; pitch: number } {
  switch (profile) {
    case 'child':
      return { rate: 0.95, pitch: 1.45 }
    case 'storyteller':
      return { rate: 0.82, pitch: 1.08 }
    case 'female':
      return { rate: 0.92, pitch: 1.15 }
    case 'male':
      return { rate: 0.88, pitch: 0.85 }
    default:
      return { rate: 0.9, pitch: 1.05 }
  }
}

export function useSpeech() {
  const [speaking, setSpeaking] = useState(false)
  const [paused, setPaused] = useState(false)
  const [profile, setProfileState] = useState<VoiceProfile>(() => {
    try {
      return (localStorage.getItem(STORAGE_KEY) as VoiceProfile) || 'female'
    } catch {
      return 'female'
    }
  })
  const [voicesReady, setVoicesReady] = useState(false)

  useEffect(() => {
    const load = () => setVoicesReady(true)
    load()
    window.speechSynthesis?.addEventListener('voiceschanged', load)
    return () => {
      window.speechSynthesis?.removeEventListener('voiceschanged', load)
      window.speechSynthesis?.cancel()
    }
  }, [])

  const setProfile = useCallback((p: VoiceProfile) => {
    setProfileState(p)
    localStorage.setItem(STORAGE_KEY, p)
  }, [])

  const speak = useCallback((text: string, rateOverride?: number) => {
    if (!window.speechSynthesis) {
      alert('Dein Browser unterstützt kein Vorlesen. Probiere Chrome oder Edge.')
      return
    }
    window.speechSynthesis.cancel()
    const settings = profileSettings(profile)
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'de-DE'
    u.rate = rateOverride ?? settings.rate
    u.pitch = settings.pitch
    const voice = pickVoice(profile)
    if (voice) u.voice = voice
    u.onend = () => {
      setSpeaking(false)
      setPaused(false)
    }
    u.onerror = () => {
      setSpeaking(false)
      setPaused(false)
    }
    setSpeaking(true)
    setPaused(false)
    // Chrome lädt Stimmen manchmal verspätet
    window.setTimeout(() => window.speechSynthesis.speak(u), 50)
  }, [profile])

  const stop = useCallback(() => {
    window.speechSynthesis?.cancel()
    setSpeaking(false)
    setPaused(false)
  }, [])

  const togglePause = useCallback(() => {
    if (!window.speechSynthesis) return
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume()
      setPaused(false)
    } else if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause()
      setPaused(true)
    }
  }, [])

  return { speaking, paused, speak, stop, togglePause, profile, setProfile, voicesReady }
}
