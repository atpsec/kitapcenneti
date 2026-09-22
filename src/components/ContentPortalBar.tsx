interface ContentPortalBarProps {
  count: number
  label: string
  query: string
  onQuery: (q: string) => void
  placeholder?: string
  filters?: { id: string; label: string }[]
  activeFilter?: string
  onFilter?: (id: string) => void
}

export function ContentPortalBar({
  count,
  label,
  query,
  onQuery,
  placeholder = 'Hier im Portal suchen …',
  filters,
  activeFilter,
  onFilter,
}: ContentPortalBarProps) {
  return (
    <div className="content-portal-bar panel">
      <div className="content-portal-bar__top">
        <strong>
          {label} Portal · {count} Inhalte
        </strong>
        <input
          className="library-search"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder={placeholder}
          aria-label={`${label} durchsuchen`}
        />
      </div>
      {filters && filters.length > 0 && onFilter && (
        <div className="library-filters">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`stem-chip ${activeFilter === f.id ? 'is-active' : ''}`}
              onClick={() => onFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
