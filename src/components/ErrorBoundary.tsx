import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="page" style={{ padding: 24, maxWidth: 560, margin: '40px auto' }}>
          <h1>Etwas steckt fest</h1>
          <p>Beim Laden der Seite ist ein Fehler aufgetreten. Eine Auffrischung löst in der Regel das Problem.</p>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: 12, opacity: 0.7 }}>
            {this.state.error.message}
          </pre>
          <div className="btn-row" style={{ marginTop: 16 }}>
            <button type="button" className="btn btn--primary" onClick={() => window.location.reload()}>
              Neu laden
            </button>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => {
                window.location.hash = 'portal'
                window.location.reload()
              }}
            >
              Zurück zum Portal
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
