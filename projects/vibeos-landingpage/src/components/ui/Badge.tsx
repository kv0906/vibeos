interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'active' | 'muted'
  className?: string
  style?: React.CSSProperties
}

const variants = {
  default: 'border-vibe-border text-text-secondary',
  active: 'border-accent-violet text-accent-violet',
  muted: 'border-vibe-border text-text-muted',
}

export function Badge({ 
  children, 
  variant = 'default',
  className = '',
  style
}: BadgeProps) {
  return (
    <span 
      className={`
        inline-block px-2 py-0.5 border text-tiny font-mono uppercase tracking-wider
        ${variants[variant]}
        ${className}
      `}
      style={style}
    >
      {children}
    </span>
  )
}
