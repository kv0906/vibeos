import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeader } from '../ui/SectionHeader'
import { Badge } from '../ui/Badge'

const steps = [
  { 
    number: 1, 
    label: 'PROBLEM', 
    description: 'Understand the why', 
    color: '#EF4444',
  },
  { 
    number: 2, 
    label: 'PRD', 
    description: 'Define the what', 
    color: '#3B82F6',
  },
  { 
    number: 3, 
    label: 'TECH_SPEC', 
    description: 'Plan the how', 
    color: '#10B981',
  },
  { 
    number: 4, 
    label: 'SHIP', 
    description: 'Execute & iterate', 
    color: '#8B5CF6',
    active: true,
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
          className="flex flex-col items-center gap-0"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              className="flex items-center gap-6 w-full max-w-md"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.4 }}
            >
              {/* Vertical line connector */}
              <div className="flex flex-col items-center">
                {/* Step number box */}
                <div 
                  className={`
                    w-12 h-12 border-2 flex items-center justify-center
                    font-mono font-bold text-lg transition-all duration-300
                    ${step.active ? 'bg-accent-violet border-accent-violet text-vibe-black' : 'bg-transparent'}
                  `}
                  style={{ 
                    borderColor: step.color,
                    color: step.active ? undefined : step.color
                  }}
                >
                  {step.number}
                </div>
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div 
                    className="w-px h-8 transition-all duration-300"
                    style={{ backgroundColor: step.color }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="py-4">
                <Badge 
                  className="mb-2"
                  style={{ borderColor: step.color, color: step.color } as React.CSSProperties}
                >
                  {step.label}
                </Badge>
                <p className="text-small text-text-muted">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
