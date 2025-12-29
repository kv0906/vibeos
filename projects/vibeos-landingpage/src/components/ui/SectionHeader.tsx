interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ label, title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <span className="inline-block text-tiny font-mono uppercase tracking-wider text-accent-violet mb-4">
        {label}
      </span>
      <h2 
        className="text-2xl md:text-3xl lg:text-[2.5rem] font-semibold text-text-primary leading-tight text-balance"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
