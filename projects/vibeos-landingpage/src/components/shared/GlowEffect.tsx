interface GlowEffectProps {
  className?: string
  color?: 'violet' | 'indigo' | 'mixed'
  size?: 'sm' | 'md' | 'lg'
  animate?: boolean
}

const sizeMap = {
  sm: 'w-[300px] h-[300px]',
  md: 'w-[500px] h-[500px]',
  lg: 'w-[600px] h-[600px]',
}

export function GlowEffect({ 
  className = '', 
  color = 'mixed',
  size = 'lg',
  animate = true 
}: GlowEffectProps) {
  const colorClass = color === 'violet' 
    ? 'bg-accent-violet' 
    : color === 'indigo' 
    ? 'bg-accent-indigo' 
    : 'bg-gradient-to-br from-accent-indigo to-accent-violet'

  return (
    <div 
      className={`
        absolute rounded-full pointer-events-none
        ${sizeMap[size]}
        ${colorClass}
        ${animate ? 'animate-glow-pulse' : 'opacity-[0.06]'}
        blur-[120px]
        ${className}
      `}
    />
  )
}
