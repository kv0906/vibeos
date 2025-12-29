import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeader } from '../ui/SectionHeader'
import { Card } from '../ui/Card'
import { staggerContainer, staggerItem } from '../../lib/animations'

const features = [
  {
    number: '01',
    title: 'Problem-First',
    description: 'Never start with solutions. Understand the problem so deeply that the solution becomes obvious.',
  },
  {
    number: '02',
    title: 'Context That Compounds',
    description: 'IDENTITY.md, NOTES.md, handoff logs — your context persists and grows across sessions.',
  },
  {
    number: '03',
    title: 'Systems Over Goals',
    description: 'Build repeatable processes that compound. Every manual task is a system waiting to be born.',
  },
  {
    number: '04',
    title: 'Ship and Iterate',
    description: '80% shipped beats 100% planned. Learn in production, not in theory.',
  },
]

export function Features() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="section-padding bg-vibe-dark" id="features">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="The Solution"
          title="vibeOS makes AI work as an extension of YOU"
        />

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {features.map((feature) => (
            <motion.div key={feature.number} variants={staggerItem}>
              <Card 
                className="h-full bg-vibe-elevated hover:border-accent-violet transition-colors duration-300"
              >
                <span className="font-mono text-small font-semibold text-accent-violet mb-4 block">
                  {feature.number}
                </span>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
