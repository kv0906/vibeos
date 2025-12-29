import { Logo } from '../ui/Logo'

export function Footer() {
  return (
    <footer className="border-t border-vibe-border py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Logo className="w-6 h-6" />
            <span className="text-lg font-bold">
              vibe<span className="gradient-text">OS</span>
            </span>
          </a>

          {/* Tagline */}
          <p className="text-text-secondary italic">
            Think deeply. Build simply. Let systems carry the weight.
          </p>

          {/* Copyright */}
          <p className="text-small text-text-muted">
            © {new Date().getFullYear()} vibeOS. Take what works. Make it yours.
          </p>
        </div>
      </div>
    </footer>
  )
}
