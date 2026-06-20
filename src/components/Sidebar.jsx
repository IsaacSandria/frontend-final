import {
  Home,
  LayoutGrid,
  Users,
  Briefcase,
  SlidersHorizontal,
  BarChart3,
  FileText,
  Wifi,
  Clock,
  Wallet,
  Receipt,
} from 'lucide-react'

const topIcons = [
  { icon: Home, label: 'Inicio', active: true },
  { icon: LayoutGrid, label: 'Tablero' },
  { icon: Users, label: 'Equipo' },
  { icon: Briefcase, label: 'Negocio' },
  { icon: SlidersHorizontal, label: 'Ajustes' },
]

const menu = [
  { icon: BarChart3, label: 'Dashboard' },
  { icon: FileText, label: 'Main Quoto', active: true },
  { icon: Wifi, label: 'Conectividad' },
  { icon: Users, label: 'Leads' },
  { icon: Clock, label: 'Historia' },
  { icon: Wallet, label: 'Cartera' },
  { icon: Receipt, label: 'Pagos' },
]

export default function Sidebar() {
  return (
    <aside className="flex w-[248px] shrink-0 flex-col bg-white/80 px-5 pb-6 pt-6">
      {/* brand dots */}
      <div className="mb-7 flex items-center gap-3 px-1">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`h-4 w-4 rounded-full border-2 ${
              i === 2 ? 'border-teal-accent bg-teal-accent' : 'border-ink-faint/50'
            }`}
          />
        ))}
      </div>

      {/* quick icon row */}
      <div className="mb-5 flex items-center gap-2">
        {topIcons.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            title={label}
            className={`grid h-10 w-10 place-items-center rounded-xl transition ${
              active
                ? 'glass-btn text-copper-600'
                : 'text-ink-soft hover:bg-ink/5'
            }`}
          >
            <Icon size={19} strokeWidth={1.9} />
          </button>
        ))}
      </div>

      <div className="mb-4 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />

      {/* main navigation */}
      <nav className="flex flex-col gap-1">
        {menu.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium transition ${
              active
                ? 'glass text-ink shadow-sm'
                : 'text-ink-soft hover:bg-ink/[0.04] hover:text-ink'
            }`}
          >
            <Icon
              size={19}
              strokeWidth={1.9}
              className={active ? 'text-copper-500' : 'text-ink-faint group-hover:text-ink-soft'}
            />
            <span className="relative z-10">{label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto px-1 pt-6 text-[11px] leading-relaxed text-ink-faint">
        <p className="font-semibold text-ink-soft">Ali Asociades</p>
        <p>Multicotizador · v3.2</p>
      </div>
    </aside>
  )
}
