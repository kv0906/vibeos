interface WindowCardProps {
  children: React.ReactNode
  title?: string
  showLive?: boolean
  className?: string
}

export function WindowCard({ 
  children, 
  title = 'terminal',
  showLive = false,
  className = '' 
}: WindowCardProps) {
  return (
    <div className={`window-chrome ${className}`}>
      <div className="window-chrome__header">
        <div className="window-chrome__dots">
          <span className="window-chrome__dot window-chrome__dot--red" />
          <span className="window-chrome__dot window-chrome__dot--yellow" />
          <span className="window-chrome__dot window-chrome__dot--green" />
        </div>
        <span className="window-chrome__title">{title}</span>
        {showLive && (
          <div className="live-badge live-badge--active ml-auto">
            <span className="live-badge__dot" />
            live
          </div>
        )}
      </div>
      <div className="window-chrome__body">
        {children}
      </div>
    </div>
  )
}
