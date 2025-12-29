import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeader } from '../ui/SectionHeader'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { staggerContainer, staggerItem } from '../../lib/animations'

const problems = [
  {
    tag: 'SYS',
    title: 'Scattered Workspace',
    description: 'Files everywhere, no structure, context lost every session.',
  },
  {
    tag: 'CTX',
    title: 'Fragmented Context',
    description: 'AI forgets everything between sessions. You repeat yourself constantly.',
  },
  {
    tag: 'THK',
    title: 'No System Thinking',
    description: 'Jumping to solutions without understanding the real problem.',
  },
  {
    tag: 'SHP',
    title: "Can't Ship Fast",
    description: 'Stuck in loops, never finishing, prompts that go nowhere.',
  },
]

export function Problems() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="section-padding" id="problem">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="The Problem"
          title="You have powerful AI tools.<br/>But without a system, you're prompting into the void."
        />

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {problems.map((problem) => (
            <motion.div key={problem.title} variants={staggerItem}>
              <Card className="h-full group">
                <Badge variant="muted" className="mb-4">
                  [{problem.tag}]
                </Badge>
                <h3 className="text-lg font-semibold text-text-primary mb-2 font-serif">
                  {problem.title}
                </h3>
                <p className="text-small text-text-secondary">
                  {problem.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
