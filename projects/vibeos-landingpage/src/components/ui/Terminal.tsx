import { useTypewriter } from '../../hooks/useTypewriter'
import { WindowCard } from './WindowCard'

interface TerminalLine {
  type: 'prompt' | 'response'
  text: string
  indent?: boolean
}

interface TerminalProps {
  lines: TerminalLine[]
  className?: string
  showLive?: boolean
}

export function Terminal({ lines, className = '', showLive = false }: TerminalProps) {
  const prompt = lines.find(l => l.type === 'prompt')?.text || ''
  const { displayText, isComplete } = useTypewriter(prompt, 40, 1000)

  return (
    <WindowCard title="terminal" showLive={showLive} className={className}>
      <div className="font-mono text-small space-y-2">
        <div className="flex gap-2">
          <span className="text-accent-violet">$</span>
          <span className="text-text-primary">
            {displayText}
            {!isComplete && <span className="animate-blink">▋</span>}
          </span>
        </div>

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
    </WindowCard>
  )
}
