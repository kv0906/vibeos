export function Logo({ className = '' }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <path 
        d="M0 28 Q10 20, 20 28 Q30 36, 40 28" 
        stroke="#4B5563" 
        strokeWidth="3" 
        strokeLinecap="round" 
        fill="none" 
        opacity="0.4"
      />
      <path 
        d="M0 20 Q10 12, 20 20 Q30 28, 40 20" 
        stroke="#6B7280" 
        strokeWidth="3" 
        strokeLinecap="round" 
        fill="none" 
        opacity="0.6"
      />
      <path 
        d="M0 12 Q10 4, 20 12 Q30 20, 40 12" 
        stroke="url(#logoGradient)" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        fill="none"
      />
      <circle cx="20" cy="16" r="4" fill="url(#logoGradient)" />
    </svg>
  )
}
