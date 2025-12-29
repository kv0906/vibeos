import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Terminal } from '../ui/Terminal'
import { GradientDots } from '../ui/GradientDots'
import { staggerContainer, staggerItem } from '../../lib/animations'

const terminalLines = [
  { type: 'prompt' as const, text: 'vibeOS — I want to build a habit tracker' },
  { type: 'response' as const, text: "Let's start with the problem." },
  { type: 'response' as const, text: '• What habit-tracking pain are you solving?', indent: true },
  { type: 'response' as const, text: '• Is this for you or others?', indent: true },
  { type: 'response' as const, text: '• What does "done" look like?', indent: true },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <GradientDots duration={20} className="-z-10" backgroundColor="hsl(var(--background))" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          className="max-w-4xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Title - Serif heading */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-display-lg font-bold tracking-tight font-serif"
            variants={staggerItem}
          >
            Turn your AI coding tool into a
            <br />
            <span className="text-accent-violet">workspace, knowledge hub,</span>
            <br />
            and build engine.
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="mt-6 text-lg lg:text-xl text-text-secondary max-w-2xl"
            variants={staggerItem}
          >
            vibeOS is a cognitive operating system that makes AI work as an 
            extension of YOU — not a generic assistant.
          </motion.p>

          {/* CTA Buttons - Outlined style */}
          <motion.div 
            className="mt-10 flex flex-wrap gap-4"
            variants={staggerItem}
          >
            <Button 
              href="https://github.com/kv0906/vibeos" 
              size="large"
              showArrow
            >
              Get Started
            </Button>
            <Button 
              variant="ghost" 
              href="#features"
              size="large"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Terminal with window chrome */}
          <motion.div 
            className="mt-16 max-w-2xl"
            variants={staggerItem}
          >
            <Terminal lines={terminalLines} showLive />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
