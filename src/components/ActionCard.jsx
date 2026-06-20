// Horizontal action cards along the bottom of the panel.
export default function ActionCard({ icon: Icon, title, subtitle, description, tint = 'copper' }) {
  const tints = {
    copper: 'from-copper-200/80 to-copper-400/70 text-copper-700',
    teal: 'from-teal-accent/25 to-teal-accent/15 text-teal-deep',
    slate: 'from-slate-200/80 to-slate-300/60 text-slate-600',
    amber: 'from-amber-200/80 to-amber-400/60 text-amber-700',
  }
  return (
    <button className="group glass animate-sheen relative flex w-[210px] shrink-0 flex-col gap-3 overflow-hidden rounded-2xl p-4 text-left transition hover:-translate-y-1">
      <span
        className={`grid h-12 w-12 place-items-center rounded-2xl border border-white/60 bg-gradient-to-br shadow-inner ${tints[tint]}`}
      >
        <Icon size={22} strokeWidth={2} />
      </span>
      <div className="relative z-10">
        <h3 className="text-[15px] font-semibold leading-snug text-ink">{title}</h3>
        {subtitle && <p className="text-[13px] font-medium text-ink-soft">{subtitle}</p>}
        <p className="mt-1.5 text-[12px] leading-snug text-ink-faint">{description}</p>
      </div>
    </button>
  )
}
