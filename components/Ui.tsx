import Image from "next/image";
import Link from "next/link";

// Kontejner 1200 px s bočním okrajem 16–96 px (box-content: okraj se přičítá k šířce)
export const WRAP = "mx-auto box-content max-w-[1200px] px-[clamp(16px,6vw,96px)]";

// Mono štítek: 13 px, jen štítky, data, ceny a adresy
export const LABEL = "font-mono text-[13px] tracking-[0.04em] text-muted";

// Tlačítka: hranatá, bez šipek, text říká, kam vedou
export const BTN_PRIMARY =
  "inline-flex min-h-12 items-center border border-navy bg-navy px-7 py-4 text-base font-semibold leading-none tracking-[0.02em] text-on-navy transition-colors duration-200 hover:bg-navy-2";
export const BTN_SECONDARY =
  "inline-flex min-h-12 items-center border border-ink bg-transparent px-7 py-4 text-base font-semibold leading-none tracking-[0.02em] text-ink transition-colors duration-200 hover:bg-ink hover:text-paper";
export const BTN_ON_NAVY =
  "inline-flex min-h-12 items-center border border-on-navy bg-transparent px-7 py-4 text-base font-semibold leading-none tracking-[0.02em] text-on-navy transition-colors duration-200 hover:bg-on-navy hover:text-navy";

// Textový odkaz s jemnou linkou
export const TEXT_LINK =
  "font-semibold text-ink underline decoration-rule underline-offset-[6px] transition-colors duration-200 hover:decoration-ink";

// Znak ES| : „ES“ v Newsreaderu a zlatá čárka, která po načtení dvakrát blikne jako kurzor
export function EsMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center font-serif font-normal leading-none tracking-[0.02em] ${className}`}
    >
      ES
      <span aria-hidden="true" className="es-cursor" />
    </span>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className={`mb-5 ${LABEL}`}>{children}</div>;
}

export function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mb-6 font-serif text-[40px] font-light leading-[1.1] tracking-[-0.01em] text-ink md:text-[56px]">
      {children}
    </h1>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 mt-14 font-serif text-[30px] font-normal leading-[1.15] tracking-[-0.005em] text-ink first:mt-0 md:text-[38px]">
      {children}
    </h2>
  );
}

export function Lede({ children }: { children: React.ReactNode }) {
  return <p className="max-w-[34em] text-[19px] leading-[1.7] text-ink-2 md:text-[21px]">{children}</p>;
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 max-w-[62ch] text-[18px] leading-[1.7] text-ink-2">{children}</p>;
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
      sizes={`(max-width: 848px) 100vw, ${maxWidth ?? 800}px`}
      style={maxWidth ? { maxWidth } : undefined}
      className="mt-10 h-auto w-full"
    />
  );
}

export function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-t border-rule py-14 first-of-type:border-t-0 first-of-type:pt-0 last-of-type:pb-0 md:py-20">
      {children}
    </section>
  );
}

// Jediná hlavní výzva na webu: všechna hlavní tlačítka vedou na konzultaci
export const CONSULTATION_HREF = "/sluzby/strategicka-konzultace";
export const CONSULTATION_LABEL = "Domluvit konzultaci";

export function ConsultationButton({
  tone = "dark",
  label = CONSULTATION_LABEL,
}: {
  tone?: "dark" | "light";
  label?: string;
}) {
  return (
    <Link href={CONSULTATION_HREF} className={tone === "dark" ? BTN_PRIMARY : BTN_ON_NAVY}>
      {label}
    </Link>
  );
}

// Tmavá výzva na konci stránky, jediná tmavá plocha
export function CtaBox({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-navy px-6 py-12 text-on-navy sm:px-12 sm:py-14">
      <h2 className="mb-4 font-serif text-[32px] font-light leading-[1.12] tracking-[-0.01em] text-on-navy md:text-[42px]">
        {title}
      </h2>
      {children ? (
        <p className="mb-8 max-w-[30em] font-serif text-[21px] leading-[1.4] text-on-navy-2">{children}</p>
      ) : (
        <div className="mb-8" />
      )}
      <ConsultationButton tone="light" />
    </div>
  );
}

export function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-col border-t border-rule">
      {steps.map((s, i) => (
        <li key={i} className="flex gap-5 border-b border-rule py-4 text-[17px] leading-[1.65] text-ink-2">
          <span className="w-6 flex-none pt-[3px] font-mono text-[13px] text-muted">
            {String(i + 1).padStart(2, "0")}
          </span>
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
      <span className="text-ink">{word}</span>
      <span className="mt-1 font-mono text-[11px] tracking-[0.04em] text-muted">{note}</span>
    </span>
  );
}

export function BigNumber({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
      <span className="font-serif text-[48px] font-light leading-none tracking-[-0.02em] text-ink">{n}</span>
      <span className="text-[17px] text-ink-2">{label}</span>
    </div>
  );
}

// Fakta o službě (cena, termín…) jako katalogový záznam. Na mobilu popisek nad textem.
export function FactBox({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="mt-8 border-t border-rule">
      {rows.map(([label, text]) => (
        <div key={label} className="flex flex-col gap-1 border-b border-rule py-4 sm:flex-row sm:gap-6">
          <dt className={`flex-none pt-[3px] sm:w-36 ${LABEL}`}>{label}</dt>
          <dd className="max-w-[60ch] text-[17px] leading-[1.65] text-ink">{text}</dd>
        </div>
      ))}
    </dl>
  );
}

// Seznam s pomlčkami a linkami
export function DashList({ items }: { items: string[] }) {
  return (
    <ul className="mb-5 flex max-w-[62ch] flex-col border-t border-rule">
      {items.map((t) => (
        <li key={t} className="flex gap-4 border-b border-rule py-3.5 text-[17px] leading-[1.65] text-ink-2">
          <span aria-hidden="true" className="flex-none font-mono text-[13px] leading-[1.9] text-muted">
            —
          </span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
