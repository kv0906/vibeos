import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  borderColor?: string
}

export function Card({ 
  children, 
  className = '', 
  hover = true,
  borderColor
}: CardProps) {
  return (
    <motion.div 
      className={`
        brut-card
        ${hover ? 'brut-card--hover' : ''}
        ${className}
      `}
      style={borderColor ? { borderColor } : undefined}
      whileHover={hover ? { borderColor: borderColor || '#8B5CF6' } : undefined}
    >
      {children}
    </motion.div>
  )
}
