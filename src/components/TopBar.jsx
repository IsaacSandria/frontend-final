import { ChevronRight, ChevronUp, ChevronDown, Sparkles } from 'lucide-react'

export default function TopBar() {
  return (
    <header className="flex h-16 items-center gap-6 px-7">
      {/* breadcrumb */}
      <nav className="flex items-center gap-2 text-[15px] text-ink-soft">
        <span className="font-medium text-ink">Ali Asociades</span>
        <ChevronRight size={16} className="text-ink-faint" />
        <span>Ali Asociades</span>
      </nav>

      {/* centered AI model pill */}
      <div className="mx-auto flex items-center">
        <div className="glass flex items-center gap-3 rounded-full px-4 py-2 text-[13px]">
          <span className="rounded-md bg-teal-accent/15 px-2 py-0.5 text-[11px] font-bold tracking-wide text-teal-deep">
            <Sparkles size={11} className="-mt-0.5 mr-1 inline" />
            AI
          </span>
          <span className="text-ink-soft">
            Model: <span className="font-semibold text-ink">SE-9 Pro</span>
          </span>
          <span className="h-3.5 w-px bg-ink/15" />
          <span className="text-ink-soft">
            Risk: <span className="font-semibold text-ink">V3.2</span>
          </span>
          <span className="ml-1 flex flex-col text-ink-faint">
            <ChevronUp size={12} className="-mb-1 cursor-pointer hover:text-ink" />
            <ChevronDown size={12} className="cursor-pointer hover:text-ink" />
          </span>
        </div>
      </div>

      {/* date + user */}
      <div className="flex items-center gap-5">
        <span className="hidden text-[14px] text-ink-soft lg:block">
          Friday, June 19, 2026, 3:30 PM CST
        </span>
        <div className="glass flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-4">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-ink to-ink-soft text-[12px] font-semibold text-white">
            LS
          </span>
          <span className="leading-tight">
            <span className="block text-[14px] font-semibold text-ink">Isaac Sandria</span>
            <span className="block text-[12px] text-ink-faint">agent</span>
          </span>
        </div>
      </div>
    </header>
  )
}
