import type { ReactNode } from 'react'
import type { PageId } from '../types/nav'
import { LockKeyhole, Sparkles } from 'lucide-react'
import { useMembership } from '../hooks/useMembership'

interface Props {
  children: ReactNode
  onNavigate: (page: PageId) => void
  label?: string
}

export function PremiumGate({ children, onNavigate, label = 'Aile+ ile açılır' }: Props) {
  const { isPlus } = useMembership()

  if (isPlus) return <>{children}</>

  return (
    <div className="premium-gate">
      <div className="premium-gate__content">
        <span className="premium-gate__icon"><LockKeyhole size={19} /></span>
        <div><strong>{label}</strong><p>Tüm aile araçlarına ve premium içeriklere erişin.</p></div>
        <button type="button" className="btn btn--small btn--primary" onClick={() => onNavigate('membership')}><Sparkles size={15} /> Aile+’ı gör</button>
      </div>
      <div className="premium-gate__preview" aria-hidden="true">{children}</div>
    </div>
  )
}
