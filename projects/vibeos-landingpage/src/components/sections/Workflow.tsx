import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeader } from '../ui/SectionHeader'

const steps = [
  { 
    number: 1, 
    label: 'PROBLEM', 
    description: 'Understand the why', 
    color: '#EF4444',
    active: false 
  },
  { 
    number: 2, 
    label: 'PRD', 
    description: 'Define the what', 
    color: '#3B82F6',
    active: false 
  },
  { 
    number: 3, 
    label: 'TECH_SPEC', 
    description: 'Plan the how', 
    color: '#10B981',
    active: false 
  },
  { 
    number: 4, 
    label: 'SHIP', 
    description: 'Execute & iterate', 
    color: '#8B5CF6',
    active: true 
  },
]

export function Workflow() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section className="section-padding" id="workflow">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Workflow"
          title="From idea to shipped product"
        />

        <motion.div
          ref={ref}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.4 }}
            >
              {/* Step */}
              <div className="flex flex-col items-center text-center w-28 md:w-32">
                {/* Icon */}
                <div 
                  className={`
                    relative w-14 h-14 rounded-xl flex items-center justify-center mb-3
                    font-mono font-bold text-lg transition-all duration-300
                    ${step.active 
                      ? 'bg-gradient-to-br from-accent-indigo to-accent-violet text-white shadow-lg shadow-accent-violet/30' 
                      : 'bg-vibe-elevated border-2'
                    }
                  `}
                  style={{ 
                    borderColor: step.active ? 'transparent' : step.color,
                    color: step.active ? 'white' : step.color
                  }}
                >
                  {step.active && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-indigo to-accent-violet opacity-20 blur-xl" />
                  )}
                  <span className="relative z-10">{step.number}</span>
                </div>

                {/* Label */}
                <h3 
                  className="font-mono text-small font-semibold mb-1"
                  style={{ color: step.color }}
                >
                  {step.label}
                </h3>
                <p className="text-tiny text-text-muted">
                  {step.description}
                </p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <motion.span 
                  className="hidden md:block text-2xl text-text-muted mx-2"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={inView ? { opacity: 0.5, scaleX: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.2, duration: 0.3 }}
                >
                  →
                </motion.span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
