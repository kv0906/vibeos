import { useTypewriter } from '../../hooks/useTypewriter'

interface TerminalLine {
  type: 'prompt' | 'response'
  text: string
  indent?: boolean
}

interface TerminalProps {
  lines: TerminalLine[]
  className?: string
}

export function Terminal({ lines, className = '' }: TerminalProps) {
  const prompt = lines.find(l => l.type === 'prompt')?.text || ''
  const { displayText, isComplete } = useTypewriter(prompt, 40, 1000)

  return (
    <div className={`bg-vibe-dark border border-vibe-border rounded-xl overflow-hidden ${className}`}>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-vibe-elevated border-b border-vibe-border">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-tiny text-text-muted font-mono">terminal</span>
      </div>

      {/* Body */}
      <div className="p-6 font-mono text-small space-y-2">
        {/* Prompt line with typewriter */}
        <div className="flex gap-2">
          <span className="text-accent-violet">$</span>
          <span className="text-text-primary">
            {displayText}
            {!isComplete && <span className="animate-blink">▋</span>}
          </span>
        </div>

        {/* Response lines */}
        {isComplete && lines.filter(l => l.type === 'response').map((line, i) => (
          <div 
            key={i}
            className={`flex gap-2 animate-fade-up ${line.indent ? 'pl-6' : ''}`}
            style={{ animationDelay: `${i * 150}ms` }}
          >
            {!line.indent && <span className="text-role-engineer">AI:</span>}
            <span className="text-text-secondary">{line.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
