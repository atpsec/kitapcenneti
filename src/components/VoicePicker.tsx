import { VOICE_OPTIONS, type VoiceProfile } from '../hooks/useSpeech'
import { useMembership } from '../hooks/useMembership'
import { showToast } from './Toast'

interface VoicePickerProps {
  profile: VoiceProfile
  onChange: (profile: VoiceProfile) => void
}

export function VoicePicker({ profile, onChange }: VoicePickerProps) {
  const { isPlus } = useMembership()

  return (
    <div className="voice-picker" role="group" aria-label="Erzählstimme">
      <p className="voice-picker__label">🎙️ Erzählerstimme</p>
      <div className="voice-picker__options">
        {VOICE_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            type="button"
            className={`voice-chip ${profile === opt.id ? 'is-active' : ''}`}
            onClick={() => {
              if (opt.premium && !isPlus) {
                showToast('Öffne Familien+, um die Märchenmeister-Stimme freizuschalten')
                return
              }
              onChange(opt.id)
            }}
            title={opt.desc}
          >
            <span>{opt.emoji}</span>
            <strong>
              {opt.label}
              {opt.premium ? (isPlus ? ' ✓' : ' 🔒') : ''}
            </strong>
          </button>
        ))}
      </div>
      <p className="voice-picker__hint">
        Die Stimme des Kindes wird mit einer dünnen Tonlage erzeugt. Premium „Märchenmeister“ liest sich langsamer und sanfter.
      </p>
    </div>
  )
}
