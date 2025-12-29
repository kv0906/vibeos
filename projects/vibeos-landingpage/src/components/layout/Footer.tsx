import { Logo } from '../ui/Logo'

const links = [
  { label: 'GitHub', href: 'https://github.com/kv0906/vibeos' },
  { label: 'Docs', href: '#features' },
]

export function Footer() {
  return (
    <footer className="border-t border-vibe-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Logo className="w-6 h-6" />
            <span className="font-mono text-lg">
              vibe<span className="text-accent-violet">OS</span>
            </span>
          </a>

          {/* Links with border separators */}
          <div className="flex items-center">
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`
                  font-mono text-small text-text-muted hover:text-accent-violet transition-colors
                  px-4
                  ${index < links.length - 1 ? 'border-r border-vibe-border' : ''}
                `}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-mono text-tiny text-text-muted">
            © {new Date().getFullYear()} vibeOS
          </p>
        </div>
      </div>
    </footer>
  )
}
