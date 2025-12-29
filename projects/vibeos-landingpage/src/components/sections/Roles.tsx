import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeader } from '../ui/SectionHeader'
import { Card } from '../ui/Card'
import { staggerContainer, staggerItem } from '../../lib/animations'

const roles = [
  {
    icon: '🛠️',
    title: 'Engineer',
    description: 'Build, code, architect, debug, implement',
    color: '#10B981',
  },
  {
    icon: '📋',
    title: 'Product Owner',
    description: 'PRD, features, requirements, user stories',
    color: '#3B82F6',
  },
  {
    icon: '🎨',
    title: 'Designer',
    description: 'UI, UX, mockups, wireframes, prototypes',
    color: '#EC4899',
  },
  {
    icon: '📊',
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
                glowColor={role.color}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {role.icon}
                </div>
                <h3 
                  className="text-lg font-semibold mb-2 transition-colors duration-300"
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
