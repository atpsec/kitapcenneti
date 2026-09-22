interface LoadingAnimationProps {
  progress: number
  status: string
}

export function LoadingAnimation({ progress, status }: LoadingAnimationProps) {
  return (
    <div className="loading-overlay">
      <div className="loading-book">📖</div>
      <p className="loading-text">Ihre Zaubergeschichte wird vorbereitet...</p>
      <div className="loading-progress">
        <div className="loading-progress__bar" style={{ width: `${progress}%` }} />
      </div>
      <p className="loading-status">{status}</p>
    </div>
  )
}
