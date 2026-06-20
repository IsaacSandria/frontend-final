// The 4-dot progress indicator (3rd dot active / teal-filled).
export default function StepDots({ active = 2, size = 'md' }) {
  const dot = size === 'sm' ? 'h-3 w-3' : 'h-4 w-4'
  return (
    <div className="flex items-center gap-3">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={`${dot} rounded-full border-2 transition-colors ${
            i === active
              ? 'border-teal-accent bg-teal-accent shadow-[0_0_0_3px_rgba(26,161,184,0.18)]'
              : 'border-ink-faint/60 bg-transparent'
          }`}
        />
      ))}
    </div>
  )
}
