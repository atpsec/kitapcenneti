import type { ReactNode } from 'react'
import type { PageId } from '../types/nav'
import { LockKeyhole, Sparkles } from 'lucide-react'
import { useMembership } from '../hooks/useMembership'

interface Props {
  children: ReactNode
  onNavigate: (page: PageId) => void
  label?: string
}

export function PremiumGate({ children, onNavigate, label = 'Mit Familien+ freischalten' }: Props) {
  const { isPlus } = useMembership()

  if (isPlus) return <>{children}</>

  return (
    <div className="premium-gate">
      <div className="premium-gate__content">
        <span className="premium-gate__icon"><LockKeyhole size={19} /></span>
        <div><strong>{label}</strong><p>Greifen Sie auf alle Familientools und Premium-Inhalte zu.</p></div>
        <button type="button" className="btn btn--small btn--primary" onClick={() => onNavigate('membership')}><Sparkles size={15} /> Siehe Familien+</button>
      </div>
      <div className="premium-gate__preview" aria-hidden="true">{children}</div>
    </div>
  )
}
