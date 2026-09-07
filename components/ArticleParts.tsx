import Link from "next/link";

export function ArticleMeta({ category, date }: { category: string; date: string }) {
  return (
    <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-cream/45">
      <span className="text-gold">{category}</span>
      <span>·</span>
      <span>{date}</span>
    </div>
  );
}

export function WhatThisMeans({
  points,
  ctaLabel,
  ctaHref,
}: {
  points: string[];
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="mt-10 rounded-sm bg-cream p-8 text-ink">
      <h2 className="mb-4 font-serif text-xl text-ink">Co to znamená pro váš byznys</h2>
      <ol className="mb-6 flex flex-col gap-2">
        {points.map((p, i) => (
          <li key={i} className="flex gap-3 text-[15px] text-[#3a3428]">
            <span className="flex-none font-mono text-[13px] text-gold">{i + 1}</span>
            <span>{p}</span>
          </li>
        ))}
      </ol>
      <Link
        href={ctaHref}
        className="inline-block rounded-sm bg-navy-deep px-6 py-3 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-[#223652]"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
