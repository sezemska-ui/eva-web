"use client";

import { useState } from "react";

const recommended = [
  { name: "Zámecký Hotel Hrubá Skála", note: "wellness vtesané do skalního masivu, romantická zámecká atmosféra" },
  { name: "Grand Hotel Praha (Jičín)", note: "privátní wellness centrum v historickém centru" },
  { name: "Biokolna Suites & Spa", note: "prémiový butikový koncept, maximální soukromí" },
  { name: "Černá louže", note: "komorní wellness, minimalistický design" },
  { name: "Pivní Lázně Český Ráj", note: "originální pivní koupele, rodinná atmosféra" },
];

export default function RecommendationTest() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="rounded-sm border border-white/10 bg-navy-mid/40 p-6 md:p-8">
      <div className="mb-5 font-mono text-[11px] uppercase tracking-widest text-cream/45">
        Reálný dotaz · Google AI Overview
      </div>

      <p className="mb-6 font-serif text-xl italic text-cream/90 md:text-2xl">
        „Romantický wellness hotel v Českém ráji"
      </p>

      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="rounded-sm bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition-colors duration-200 hover:bg-gold-light"
        >
          Zobrazit, koho AI doporučila →
        </button>
      ) : (
        <div className="animate-[fadeInUp_0.4s_ease-out_both]">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-widest text-gold">
            AI doporučila těchto 5 podniků
          </div>
          <ul className="flex flex-col gap-3">
            {recommended.map((r, i) => (
              <li
                key={r.name}
                className="flex flex-col gap-0.5 border-b border-white/10 pb-3 last:border-b-0"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <span className="text-[15px] font-medium text-cream">{r.name}</span>
                <span className="text-[13px] text-cream/55">{r.note}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[14px] leading-relaxed text-cream/70">
            Ke každému podniku AI automaticky vygenerovala vlastní popis atmosféry a doporučení —
            zdarma, bez jakékoli reklamy. Podnik, který na tomhle seznamu není, o tenhle moment
            přichází úplně.
          </p>
        </div>
      )}
    </div>
  );
}
