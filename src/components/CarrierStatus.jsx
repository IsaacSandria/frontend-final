// Carrier connectivity status — "Activo" carriers ring teal, "Desactivado" copper & dimmed.
function CarrierBadge({ short, label, active }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`grid h-[58px] w-[58px] place-items-center rounded-full bg-white/70 text-center text-[9px] font-bold leading-tight tracking-tight ${
          active
            ? 'border-2 border-teal-accent text-teal-deep shadow-[0_0_0_4px_rgba(26,161,184,0.10)]'
            : 'border-2 border-copper-400/80 text-copper-600 opacity-70 grayscale-[35%]'
        }`}
      >
        {short}
      </div>
      <span className={`text-[12px] ${active ? 'text-ink-soft' : 'text-ink-faint'}`}>{label}</span>
    </div>
  )
}

export default function CarrierStatus() {
  return (
    <div className="flex items-start gap-8">
      <div>
        <p className="mb-3 text-center text-[13px] font-semibold text-teal-deep">Activo</p>
        <div className="flex gap-5">
          <CarrierBadge short="Qualitas" label="Afrime" active />
          <CarrierBadge short="CHUBB" label="Chubb" active />
        </div>
      </div>
      <div>
        <p className="mb-3 text-center text-[13px] font-semibold text-copper-600">Desactivado</p>
        <div className="flex gap-5">
          <CarrierBadge short="Banorte" label="Banorte" />
          <CarrierBadge short="Zurich" label="Zurich" />
        </div>
      </div>
    </div>
  )
}
