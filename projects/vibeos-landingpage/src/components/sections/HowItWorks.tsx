import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeader } from '../ui/SectionHeader'
import { FlowSpine } from './HowItWorks/FlowSpine'
import { BootSequenceCard } from './HowItWorks/BootSequenceCard'
import { OsFolderGrid } from './HowItWorks/OsFolderGrid'
import { ProjectTypesRow } from './HowItWorks/ProjectTypesRow'
import { RolesLegend } from './HowItWorks/RolesLegend'
import { staggerContainer, staggerItem } from '../../lib/animations'

export function HowItWorks() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section-padding bg-vibe-black" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="How It Works"
          title="vibeOS loads context, detects intent, adapts to your mode"
          subtitle="A cognitive operating system that makes AI work as an extension of you."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Roles Legend */}
          <motion.div variants={staggerItem} className="mb-12">
            <RolesLegend />
          </motion.div>

          {/* Main diagram: Flow + Brain */}
          <motion.div 
            variants={staggerItem}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12"
          >
            {/* Left: Flow Spine */}
            <div className="lg:col-span-5">
              <FlowSpine inView={inView} />
            </div>

            {/* Right: Boot + OS Folder */}
            <div className="lg:col-span-7 space-y-6">
              <BootSequenceCard inView={inView} />
              <OsFolderGrid inView={inView} />
            </div>
          </motion.div>

          {/* Bottom: Project Types */}
          <motion.div variants={staggerItem}>
            <ProjectTypesRow inView={inView} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
