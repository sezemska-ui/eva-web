const results = ["Hrubá Skála", "Grand Hotel Praha", "Biokolna Suites", "Černá louže"];

export default function HeroRecommendationSnapshot() {
  return (
    <div className="rounded-sm border border-white/10 bg-navy-mid/40 p-5 font-mono text-[11px]">
      <div className="mb-3 uppercase tracking-widest text-cream/40">
        Real customer query
      </div>
      <p className="mb-4 font-serif text-[15px] italic text-cream/85">
        „Romantický wellness hotel v Českém ráji"
      </p>

      <div className="mb-3 uppercase tracking-widest text-gold">
        AI recommendation
      </div>
      <ul className="mb-4 flex flex-col gap-1.5">
        {results.map((r) => (
          <li key={r} className="flex items-center gap-2 text-[12px] text-cream/70">
            <span className="h-1 w-1 flex-none rounded-full bg-gold/60" />
            {r}
          </li>
        ))}
      </ul>

      <div className="mb-2 uppercase tracking-widest text-cream/40">
        Recommendation gap
      </div>
      <div className="rounded-sm bg-cream/95 px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-widest text-navy-deep">
        Vaše firma — Not recommended
      </div>
    </div>
  );
}
