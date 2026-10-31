const nodes = [
  { label: "AI", angle: -90 },
  { label: "GOOGLE", angle: -18 },
  { label: "MAPS", angle: 54 },
  { label: "REVIEWS", angle: 126 },
  { label: "MEDIA", angle: 198 },
];

// Paprsky nezačínají ve středu, ale až za slovem „tam“, a končí kousek před
// popiskem. Mezera kolem slova je elipsa (v procentech plochy motivu).
const GAP_X = 22;
const GAP_Y = 20;
const END = 0.78;

function ray(angleDeg: number, radius: number) {
  const p = pointOnCircle(angleDeg, radius);
  const dx = p.x - 50;
  const dy = p.y - 50;
  const start = 1 / Math.hypot(dx / GAP_X, dy / GAP_Y);
  return {
    x1: 50 + dx * start,
    y1: 50 + dy * start,
    x2: 50 + dx * END,
    y2: 50 + dy * END,
  };
}

function pointOnCircle(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: 50 + radius * Math.cos(rad),
    y: 50 + radius * Math.sin(rad),
  };
}

export default function TamMotif() {
  const radius = 40;

  return (
    <div className="relative mx-auto h-[260px] w-full max-w-[420px] sm:h-[320px] sm:max-w-[480px]">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {nodes.map((n, i) => {
          const r = ray(n.angle, radius);
          return (
            <line
              key={n.label}
              {...r}
              stroke="var(--gold)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              opacity="0.45"
              style={{
                animation: `fadeRay 0.6s ease-out ${0.3 + i * 0.08}s both`,
              }}
            />
          );
        })}
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="font-serif text-6xl italic text-gold-light sm:text-7xl">
          tam
        </span>
      </div>

      {nodes.map((n) => {
        const p = pointOnCircle(n.angle, radius);
        return (
          <div
            key={n.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 font-mono text-[10px] uppercase tracking-widest text-cream/50 sm:text-[11px]"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            {n.label}
          </div>
        );
      })}
    </div>
  );
}
