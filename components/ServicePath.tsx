import Link from "next/link";

// Služby jako cesta: od konzultace po dlouhodobou digitální autoritu.
// Používá ji úvodní stránka i /sluzby.
const steps = [
  {
    label: "00 · První krok",
    title: "Strategická konzultace",
    href: "/sluzby/strategicka-konzultace",
    text: "60 minut, 4 500 Kč. Na schůzku přicházím s prvními zjištěními o vaší firmě. Cenu odečtu z auditu.",
  },
  {
    label: "01",
    title: "AI Search Visibility Audit",
    href: "/sluzby/ai-search-visibility-audit",
    text: "Zjistíme, jak vás skutečně vidí Google a AI — testuji konkrétní zákaznické scénáře, konkurenci, digitální entitu i technické základy.",
  },
  {
    label: "02",
    title: "AI Search Strategie",
    href: "/sluzby/ai-search-strategie",
    text: "Z diagnostiky vytvoříme plán — kde potřebujete být vidět a jaké změny k tomu povedou.",
  },
  {
    label: "03",
    title: "Implementace strategie",
    href: "/sluzby/implementace-strategie",
    text: "Strategie musí skončit změnou. Rozdělíme si, co uděláte vy, co váš webmaster a co já. Nasazení koordinuji a mluvím oběma jazyky.",
  },
  {
    label: "04",
    title: "Digital Authority",
    href: "/sluzby/digital-authority",
    text: "Budujeme vaši digitální autoritu — důkazy, které podporují vaši důvěryhodnost napříč webem, médii a katalogy.",
  },
];

export default function ServicePath() {
  return (
    <>
      <p className="mb-6 text-[15.5px] leading-relaxed text-cream/75">
        Každá spolupráce začíná rozhovorem. Další kroky pak volíme podle toho,
        co vaše firma opravdu potřebuje.
      </p>
      <div className="flex flex-col border-l border-white/15 pl-5">
        {steps.map((s) => (
          <div key={s.href} className="border-b border-white/10 py-5 first:pt-0 last:border-b-0 last:pb-0">
            <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-gold">
              {s.label}
            </div>
            <h3 className="mb-2 font-serif text-xl text-cream">{s.title}</h3>
            <p className="mb-2 text-[15px] text-cream/75">{s.text}</p>
            <Link
              href={s.href}
              className="text-sm text-gold-light underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
            >
              Více →
            </Link>
          </div>
        ))}
      </div>
      <p className="mt-6 text-[14px] text-cream/60">
        Cenu dalších kroků připravím na míru po konzultaci, podle velikosti
        firmy a rozsahu práce.
      </p>
    </>
  );
}
