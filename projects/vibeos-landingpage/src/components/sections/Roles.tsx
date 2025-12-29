import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeader } from '../ui/SectionHeader'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { staggerContainer, staggerItem } from '../../lib/animations'

const roles = [
  {
    tag: 'ENG',
    title: 'Engineer',
    description: 'Build, code, architect, debug, implement',
    color: '#10B981',
  },
  {
    tag: 'PRD',
    title: 'Product Owner',
    description: 'PRD, features, requirements, user stories',
    color: '#3B82F6',
  },
  {
    tag: 'DSN',
    title: 'Designer',
    description: 'UI, UX, mockups, wireframes, prototypes',
    color: '#EC4899',
  },
  {
    tag: 'ANL',
    title: 'Analyst',
    description: 'Data, research, metrics, analysis',
    color: '#F59E0B',
  },
]

export function Roles() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="section-padding bg-vibe-dark" id="roles">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Roles"
          title="AI adapts to your mode"
        />

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {roles.map((role) => (
            <motion.div key={role.title} variants={staggerItem}>
              <Card 
                className="h-full text-center bg-vibe-elevated group"
                borderColor={role.color}
              >
                <Badge 
                  className="mb-4"
                  style={{ borderColor: role.color, color: role.color } as React.CSSProperties}
                >
                  [{role.tag}]
                </Badge>
                <h3 
                  className="text-lg font-semibold mb-2 transition-colors duration-300 font-serif"
                  style={{ color: role.color }}
                >
                  {role.title}
                </h3>
                <p className="text-small text-text-secondary">
                  {role.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
