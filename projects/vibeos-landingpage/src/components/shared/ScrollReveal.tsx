import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Direction = 'up' | 'down' | 'left' | 'right'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: Direction
  duration?: number
  threshold?: number
  className?: string
}

const directionMap: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 30 },
  down: { y: -30 },
  left: { x: 30 },
  right: { x: -30 },
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  duration = 0.6,
  threshold = 0.2,
  className = ''
}: ScrollRevealProps) {
  const [ref, inView] = useInView({ 
    threshold, 
    triggerOnce: true 
  })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ 
        delay, 
        duration, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
    >
      {children}
    </motion.div>
  )
}
