// Decorative topographic "contour line" artwork rendered as concentric,
// slightly rotated ellipses — evokes the flowing lines in the brand panel.
function Cluster({ cx, cy, rotate, count = 16, baseRx = 40, baseRy = 26, step = 26 }) {
  const rings = Array.from({ length: count }, (_, i) => {
    const rx = baseRx + i * step
    const ry = baseRy + i * step * 0.78
    // fade lines toward the outside for depth
    const opacity = 0.7 - (i / count) * 0.5
    return (
      <ellipse
        key={i}
        cx={cx}
        cy={cy}
        rx={rx}
        ry={ry}
        fill="none"
        stroke="url(#contourStroke)"
        strokeWidth={1.1}
        style={{ opacity }}
      />
    )
  })
  return <g transform={`rotate(${rotate} ${cx} ${cy})`}>{rings}</g>
}

export default function ContourBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 680"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="contourStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d9a876" />
          <stop offset="55%" stopColor="#c98a52" />
          <stop offset="100%" stopColor="#e7c4a0" />
        </linearGradient>
      </defs>
      {/* top-right flowing cluster */}
      <Cluster cx={1230} cy={70} rotate={-18} count={20} step={24} />
      {/* bottom-left flowing cluster */}
      <Cluster cx={120} cy={700} rotate={22} count={16} step={28} />
      {/* soft secondary swirl, center-right */}
      <Cluster cx={1360} cy={520} rotate={8} count={12} baseRx={30} step={30} />
    </svg>
  )
}
