const steps = ["SEARCH", "DIGITAL ENTITY", "AUTHORITY", "RECOMMENDATION"];

export default function SignalFlow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-cream/45 sm:text-[12px]">
      {steps.map((s, i) => (
        <span key={s} className="flex items-center gap-2">
          <span className={i === steps.length - 1 ? "text-gold-light" : ""}>{s}</span>
          {i < steps.length - 1 && <span className="text-gold/50">→</span>}
        </span>
      ))}
    </div>
  );
}
