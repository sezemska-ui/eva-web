import Image from "next/image";
import Link from "next/link";

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

// Fotka přes šířku obsahu; menší originály omezit přes maxWidth, ať se nerozmazávají
export function Photo({
  src,
  alt,
  width,
  height,
  maxWidth,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  maxWidth?: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={`(max-width: 896px) 100vw, ${maxWidth ?? 848}px`}
      style={maxWidth ? { maxWidth } : undefined}
      className="mt-8 h-auto w-full rounded-sm"
    />
  );
}

export function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-t border-white/10 py-12 first:border-t-0 first:pt-0">
      {children}
    </section>
  );
}

// Jediná hlavní výzva na webu: všechna hlavní tlačítka vedou na konzultaci
export const CONSULTATION_HREF = "/sluzby/strategicka-konzultace";
export const CONSULTATION_LABEL = "Domluvit konzultaci →";

export function ConsultationButton({
  tone = "dark",
  label = CONSULTATION_LABEL,
}: {
  tone?: "dark" | "light";
  label?: string;
}) {
  const colors =
    tone === "dark"
      ? "bg-navy-deep text-cream hover:bg-[#223652]"
      : "bg-cream text-navy-deep hover:bg-gold-light";
  return (
    <Link
      href={CONSULTATION_HREF}
      className={`inline-block rounded-sm px-6 py-3 text-sm font-semibold transition-colors duration-200 ${colors}`}
    >
      {label}
    </Link>
  );
}

export function CtaBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-sm bg-cream p-8 text-ink">
      <h2 className="mb-3 font-serif text-2xl text-ink">{title}</h2>
      <p className="mb-5 text-[15px] text-[#4b4536]">{children}</p>
      <ConsultationButton />
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

// Krémový rámeček s fakty o službě (cena, termín…). Na mobilu popisek nad textem.
export function FactBox({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="mt-6 rounded-sm border-l-4 border-gold bg-cream px-5 py-2 text-ink sm:px-6">
      {rows.map(([label, text]) => (
        <div
          key={label}
          className="flex flex-col gap-1 border-b border-ink/10 py-3 last:border-b-0 sm:flex-row sm:gap-6"
        >
          <dt className="flex-none pt-[2px] font-mono text-[11px] font-semibold uppercase tracking-wider text-[#7a6434] sm:w-32">
            {label}
          </dt>
          <dd className="text-[15px] leading-relaxed text-ink">{text}</dd>
        </div>
      ))}
    </dl>
  );
}

// Řádek s cenou na stránce služby
export function PriceNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 rounded-sm border-l-4 border-gold bg-cream px-5 py-4 text-[15px] leading-relaxed text-ink sm:px-6">
      <strong className="font-semibold">Cena:</strong> {children}
    </p>
  );
}
