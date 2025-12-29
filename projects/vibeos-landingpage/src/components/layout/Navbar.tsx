import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Logo } from '../ui/Logo'
import { Button } from '../ui/Button'
import { useScrollProgress } from '../../hooks/useScrollProgress'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Roles', href: '#roles' },
]

export function Navbar() {
  const { scrollY } = useScrollProgress()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const isScrolled = scrollY > 50

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-vibe-black border-b border-vibe-border' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <Logo className="w-8 h-8" />
              <span className="font-mono text-xl">
                vibe<span className="text-accent-violet">OS</span>
              </span>
            </a>

            {/* Desktop Nav - mono links with border separators */}
            <div className="hidden md:flex items-center">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`
                    font-mono text-small text-text-secondary hover:text-accent-violet transition-colors
                    px-4 py-2
                    ${index < navLinks.length - 1 ? 'border-r border-vibe-border' : ''}
                  `}
                >
                  {link.label}
                </a>
              ))}
              <div className="ml-6">
                <Button 
                  variant="outline" 
                  href="https://github.com/kv0906/vibeos"
                >
                  GITHUB
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 border border-vibe-border text-text-secondary hover:text-text-primary hover:border-text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div 
              className="absolute inset-0 bg-vibe-black/95"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute top-20 left-0 right-0 p-6 space-y-0 border-b border-vibe-border bg-vibe-black"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block font-mono text-lg text-text-primary py-4 border-b border-vibe-border hover:text-accent-violet transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                variant="outline" 
                href="https://github.com/kv0906/vibeos"
                className="w-full mt-6"
              >
                GITHUB
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
