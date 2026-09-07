export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 font-mono text-[12px] uppercase tracking-widest text-cream/45">
      <span className="h-px w-6 bg-gold/70" />
      {children}
    </div>
  );
}

export function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mb-3 font-serif text-4xl leading-tight tracking-tight text-cream md:text-5xl">
      {children}
    </h1>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 mt-12 font-serif text-2xl text-cream">{children}</h2>
  );
}

export function Lede({ children }: { children: React.ReactNode }) {
  return <p className="max-w-[56ch] text-lg text-cream/80">{children}</p>;
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-[15.5px] leading-relaxed text-cream/75">{children}</p>;
}

export function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-t border-white/10 py-12 first:border-t-0 first:pt-0">
      {children}
    </section>
  );
}

export function ServiceCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-l border-white/15 pl-5 transition-colors duration-300 hover:border-gold/50">
      <h3 className="mb-2 font-serif text-lg text-cream">{title}</h3>
      <p className="text-[15px] text-cream/75">{children}</p>
    </div>
  );
}

export function CtaBox({
  title,
  children,
  href,
  ctaLabel,
}: {
  title: string;
  children: React.ReactNode;
  href: string;
  ctaLabel: string;
}) {
  return (
    <div className="rounded-sm bg-cream p-8 text-ink">
      <h2 className="mb-3 font-serif text-2xl text-ink">{title}</h2>
      <p className="mb-5 text-[15px] text-[#4b4536]">{children}</p>
      <a
        href={href}
        className="inline-block rounded-sm bg-navy-deep px-6 py-3 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-[#223652]"
      >
        {ctaLabel}
      </a>
    </div>
  );
}

export function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-col">
      {steps.map((s, i) => (
        <li
          key={i}
          className="flex gap-4 border-b border-white/10 py-3 text-[15.5px] text-cream/85 last:border-b-0"
        >
          <span className="w-5 flex-none font-mono text-[13px] text-gold">{i + 1}</span>
          <span>{s}</span>
        </li>
      ))}
    </ol>
  );
}

export function Annotated({
  word,
  note,
}: {
  word: string;
  note: string;
}) {
  return (
    <span className="relative inline-flex flex-col items-center px-1">
      <span className="text-gold-light">{word}</span>
      <span className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-cream/40">
        {note}
      </span>
    </span>
  );
}

export function BigNumber({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-serif text-4xl text-gold-light">{n}</span>
      <span className="text-[15px] text-cream/80">{label}</span>
    </div>
  );
}
