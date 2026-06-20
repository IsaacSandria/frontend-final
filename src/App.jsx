import {
  Mic,
  Zap,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  BarChart3,
  History,
  FolderLock,
  LayoutDashboard,
  Wifi,
  AlertTriangle,
  Sparkles,
} from 'lucide-react'
import Sidebar from './components/Sidebar.jsx'
import TopBar from './components/TopBar.jsx'
import StepDots from './components/StepDots.jsx'
import CarrierStatus from './components/CarrierStatus.jsx'
import ActionCard from './components/ActionCard.jsx'
import ContourBackground from './components/ContourBackground.jsx'

const cards = [
  {
    icon: Zap,
    title: 'Cotizar con IA',
    subtitle: 'o captura manual',
    description: 'Inicia una cotización completa y compara carriers.',
    tint: 'copper',
  },
  {
    icon: History,
    title: 'Historial',
    description: 'Revisar cotizaciones previas y ordenar resultados.',
    tint: 'teal',
  },
  {
    icon: FolderLock,
    title: 'Cartera',
    description: 'Importar a consultar pólizas capturadas por carrier.',
    tint: 'copper',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard',
    description: 'Ver métricas, gráficas e historial operativo.',
    tint: 'slate',
  },
  {
    icon: Wifi,
    title: 'Conectividad',
    description: 'Consultar estatus funcional de carriers conectados.',
    tint: 'teal',
  },
  {
    icon: AlertTriangle,
    title: 'Reportar problema',
    description: 'Levantar una incidencia con contexto operativo.',
    tint: 'amber',
  },
]

export default function App() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#eef1f5] text-ink">
      <Sidebar />

      {/* right column */}
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />

        {/* hero panel */}
        <main className="min-h-0 flex-1 px-6 pb-6">
          <section className="glass relative h-full overflow-hidden rounded-[28px] bg-white/55">
            <ContourBackground />

            {/* panel content */}
            <div className="relative z-10 flex h-full flex-col px-10 pt-7">
              {/* panel header row */}
              <div className="flex items-start justify-between">
                <StepDots active={2} />
                <div className="text-right">
                  <span className="text-[26px] font-extrabold tracking-[0.16em] text-ink">
                    SERIOUSTECH<span className="text-ink-faint">.COM</span>
                  </span>
                </div>
              </div>

              {/* hero copy */}
              <div className="mt-1 text-center">
                <p className="text-[15px] font-medium uppercase tracking-[0.32em] text-ink-soft">
                  Multicotizador de Seguros
                </p>
                <h1 className="mt-1 font-serif text-[68px] leading-none text-ink">Cotiza con IA</h1>
              </div>

              {/* search + cta */}
              <div className="mx-auto mt-7 w-full max-w-[640px]">
                <div className="glass flex items-center gap-3 rounded-2xl px-5 py-3.5">
                  <input
                    className="min-w-0 flex-1 bg-transparent text-[16px] text-ink outline-none placeholder:text-ink-faint"
                    placeholder="Escribe tu vehículo - marca, modelo, año"
                  />
                  <button
                    title="Dictar por voz"
                    className="glass-btn grid h-10 w-10 shrink-0 place-items-center rounded-full text-teal-deep"
                  >
                    <Mic size={18} strokeWidth={2} />
                  </button>
                </div>

                <div className="mt-6 flex items-center justify-center gap-4">
                  <button
                    title="Anterior"
                    className="glass-btn grid h-9 w-9 place-items-center rounded-full text-ink-soft"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button className="glass-btn glass-copper group flex items-center gap-3 rounded-full px-9 py-4 text-[16px] font-bold tracking-wide">
                    <Zap size={20} className="drop-shadow" fill="currentColor" />
                    COTIZAR CON IA
                  </button>

                  <button
                    title="Siguiente"
                    className="glass-btn grid h-9 w-9 place-items-center rounded-full text-ink-soft"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* carrier status — floated to the right under the hero */}
              <div className="mt-6 flex justify-end pr-2">
                <CarrierStatus />
              </div>

              {/* bottom action cards */}
              <div className="mt-auto pb-7">
                <div className="no-scrollbar -mx-2 flex gap-4 overflow-x-auto px-2 pb-2">
                  {cards.map((c) => (
                    <ActionCard key={c.title} {...c} />
                  ))}
                  <button
                    title="Más"
                    className="glass-btn my-auto grid h-11 w-11 shrink-0 place-items-center rounded-full text-copper-600"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* floating bottom dock */}
            <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2">
              <div className="glass flex items-center gap-2 rounded-full p-2 pl-3">
                <button className="glass-btn flex items-center gap-2 rounded-full py-2 pl-2 pr-4 text-[14px] font-medium text-ink">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-copper-200 to-copper-400 text-white">
                    <Sparkles size={14} />
                  </span>
                  AI Assistance
                </button>
                <button className="glass-btn glass-copper flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-bold">
                  Emitir Póliza
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
