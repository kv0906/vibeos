import { motion, HTMLMotionProps } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

type ButtonVariant = 'primary' | 'outline' | 'ghost'
type ButtonSize = 'default' | 'large'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  href?: string
  showArrow?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary: 'btn-outline',
  outline: 'btn-outline',
  ghost: 'btn-ghost-brut',
}

const sizes: Record<ButtonSize, string> = {
  default: 'px-5 py-2.5 text-small',
  large: 'px-7 py-3.5 text-base',
}

export function Button({ 
  variant = 'primary', 
  size = 'default',
  children,
  href,
  showArrow = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseClassName = `
    ${variants[variant]}
    ${sizes[size]}
    focus:outline-none focus:ring-2 focus:ring-accent-violet focus:ring-offset-2 focus:ring-offset-vibe-black
    ${className}
  `

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={`group ${baseClassName}`}
        whileTap={{ scale: 0.98 }}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={`group ${baseClassName}`}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}
