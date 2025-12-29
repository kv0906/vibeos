import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeader } from '../ui/SectionHeader'
import { WindowCard } from '../ui/WindowCard'
import { Badge } from '../ui/Badge'

const flowSteps = [
  { label: 'PROMPT', description: 'Your intent' },
  { label: 'CLARIFY', description: 'AI asks why' },
  { label: 'UNDERSTAND', description: 'Context loads' },
  { label: 'CREATE', description: 'Plan emerges' },
  { label: 'BUILD', description: 'Code ships' },
  { label: 'ITERATE', description: 'Feedback loops' },
]

const bootSequence = [
  { step: 1, file: 'SYSTEM.md', description: 'Core beliefs load' },
  { step: 2, file: 'IDENTITY.md', description: 'Your flavor applies' },
  { step: 3, file: 'MODE', description: 'Context detected' },
  { step: 4, file: 'ROLE', description: 'Engineer/Product/Designer' },
]

const osFiles = [
  { name: 'SYSTEM.md', description: 'Core principles' },
  { name: 'MANIFESTO.md', description: 'How to operate' },
  { name: 'WORKFLOW.md', description: 'Project lifecycle' },
  { name: 'IDENTITY.md', description: 'Your personal flavor' },
  { name: 'TOOLBOX.md', description: 'Curated tools' },
]

const projectTypes = [
  { 
    type: 'BUILD', 
    color: '#10B981',
    files: ['PRD.md', 'TECH_SPEC.md', 'CHANGELOG.md'],
    description: 'Ship products'
  },
  { 
    type: 'RESEARCH', 
    color: '#3B82F6',
    files: ['NOTES.md', 'SOURCES.md', 'FINDINGS.md'],
    description: 'Explore ideas'
  },
  { 
    type: 'CREATE', 
    color: '#EC4899',
    files: ['NOTES.md', 'DRAFTS.md', 'ASSETS.md'],
    description: 'Make content'
  },
]

const roles = [
  { name: 'Engineer', color: '#10B981', tag: 'ENG' },
  { name: 'Product', color: '#3B82F6', tag: 'PRD' },
  { name: 'Designer', color: '#EC4899', tag: 'DSN' },
  { name: 'Analyst', color: '#F59E0B', tag: 'ANL' },
]

export function HowItWorks() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section-padding bg-vibe-dark" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-16">
          <SectionHeader
            label="System"
            title="How vibeOS Works"
            className="text-left mb-0 lg:mb-0"
          />
          
          {/* Roles Legend */}
          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <Badge 
                key={role.tag}
                style={{ borderColor: role.color, color: role.color }}
              >
                [{role.tag}] {role.name}
              </Badge>
            ))}
          </div>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left Column: Flow Spine */}
          <div className="space-y-0">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.label}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                {/* Connector */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 border border-accent-violet flex items-center justify-center font-mono text-accent-violet text-small">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  {index < flowSteps.length - 1 && (
                    <svg width="2" height="32" className="text-vibe-border">
                      <motion.line
                        x1="1" y1="0" x2="1" y2="32"
                        stroke="currentColor"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={inView ? { pathLength: 1 } : {}}
                        transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                      />
                    </svg>
                  )}
                </div>
                
                {/* Step content */}
                <div className="py-3">
                  <span className="font-mono text-small text-accent-violet">{step.label}</span>
                  <p className="text-tiny text-text-muted">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Boot Sequence + OS Folder */}
          <div className="space-y-6">
            {/* Boot Sequence Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <WindowCard title="boot://sequence" showLive>
                <div className="space-y-3">
                  {bootSequence.map((item, index) => (
                    <motion.div
                      key={item.step}
                      className="flex items-center gap-3 font-mono text-small"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <span className="text-text-muted">{item.step}.</span>
                      <span className="text-accent-violet">{item.file}</span>
                      <span className="text-text-muted">→</span>
                      <span className="text-text-secondary">{item.description}</span>
                    </motion.div>
                  ))}
                </div>
              </WindowCard>
            </motion.div>

            {/* OS Folder Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <WindowCard title=".os/">
                <div className="grid grid-cols-2 gap-3">
                  {osFiles.map((file, index) => (
                    <motion.div
                      key={file.name}
                      className="border border-vibe-border p-3 hover:border-accent-violet transition-colors group"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      whileHover={{ x: 2, y: -2 }}
                    >
                      <span className="font-mono text-tiny text-accent-violet block mb-1 group-hover:text-accent-violet-light">
                        {file.name}
                      </span>
                      <span className="text-tiny text-text-muted">
                        {file.description}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </WindowCard>
            </motion.div>
          </div>
        </motion.div>

        {/* Project Types Row */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          {projectTypes.map((project) => (
            <motion.div
              key={project.type}
              className="border border-vibe-border p-6 hover:border-current transition-all group"
              style={{ '--hover-color': project.color } as React.CSSProperties}
              whileHover={{ 
                x: 4, 
                y: -4,
                boxShadow: `4px 4px 0 ${project.color}20`
              }}
            >
              <Badge 
                className="mb-4"
                style={{ borderColor: project.color, color: project.color }}
              >
                {project.type}
              </Badge>
              <p className="text-small text-text-secondary mb-4">{project.description}</p>
              <div className="space-y-1">
                {project.files.map((file) => (
                  <div key={file} className="font-mono text-tiny text-text-muted">
                    └─ {file}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
