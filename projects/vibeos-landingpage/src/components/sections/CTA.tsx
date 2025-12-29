import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Copy, Check } from 'lucide-react'
import { Button } from '../ui/Button'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
import { fadeUp } from '../../lib/animations'

const cloneCommand = 'git clone https://github.com/kv0906/vibeos.git'

export function CTA() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  const { copied, copy } = useCopyToClipboard()

  return (
    <section className="section-padding bg-gradient-to-b from-vibe-black to-vibe-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Ready to ship faster?
          </h2>
          <p className="text-lg text-text-secondary mb-10">
            Clone vibeOS and start building in 2 minutes.
          </p>

          {/* Terminal command */}
          <div className="inline-flex items-center gap-3 bg-vibe-elevated border border-vibe-border rounded-lg px-5 py-3 mb-8">
            <code className="font-mono text-small text-text-primary">
              {cloneCommand}
            </code>
            <button
              onClick={() => copy(cloneCommand)}
              className="p-1.5 rounded hover:bg-vibe-border transition-colors"
              aria-label="Copy command"
            >
              <motion.div
                initial={false}
                animate={{ scale: copied ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.2 }}
              >
                {copied ? (
                  <Check className="w-4 h-4 text-role-engineer" />
                ) : (
                  <Copy className="w-4 h-4 text-text-muted hover:text-text-primary transition-colors" />
                )}
              </motion.div>
            </button>
          </div>

          <div className="block">
            <Button 
              href="https://github.com/kv0906/vibeos" 
              size="large"
              showArrow
            >
              View on GitHub
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
