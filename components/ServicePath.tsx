import Link from "next/link";

// Služby a ceny jako cesta: od konzultace po dlouhodobé budování důvěryhodnosti.
// Používá ji úvodní stránka i /sluzby. Ceny musí odpovídat JSON-LD v SiteJsonLd.tsx.
const steps = [
  {
    label: "00",
    title: "Úvodní konzultace",
    price: "4 500 Kč",
    href: "/sluzby/strategicka-konzultace",
    text: "60 minut. Přijdu s prvními zjištěními o vaší firmě a řekneme si, jestli a jaký audit má smysl. Pokud se pro audit rozhodnete, cenu konzultace z něj odečtu.",
  },
  {
    label: "01",
    title: "Audit AI viditelnosti",
    price: "20 000–40 000 Kč",
    href: "/sluzby/ai-search-visibility-audit",
    text: "Diagnostika: zjistím, jestli vás AI doporučuje, odkud o vás čerpá, proč dává přednost konkurenci a co řešit jako první. Hotovo obvykle do 15 pracovních dnů.",
  },
  {
    label: "02",
    title: "Strategie AI viditelnosti",
    price: "15 000–50 000 Kč",
    href: "/sluzby/ai-search-strategie",
    text: "Zjištění z auditu převedu na hotové texty, strukturu webu a podklady, které váš webmaster jen vloží na web.",
  },
  {
    label: "03",
    title: "Implementace",
    price: "podle rozsahu",
    href: "/sluzby/implementace-strategie",
    text: "Převezmu komunikaci s webmasterem, zkontroluji nasazení a ověřím, jak se změny projevují v odpovědích AI. Cenu řeknu předem.",
  },
  {
    label: "04",
    title: "Budování důvěryhodnosti",
    price: "měsíční spolupráce",
    href: "/sluzby/digital-authority",
    text: "Dlouhodobá péče o recenze, profily, zmínky mimo váš web a pravidelné měření doporučení. Cena individuálně, obvykle na minimálně 3 měsíce.",
  },
];

export default function ServicePath() {
  return (
    <>
      <p className="mb-6 text-[15.5px] leading-relaxed text-cream/75">
        Každá spolupráce začíná rozhovorem. Další kroky volíte podle toho, co
        vám dává smysl.
      </p>
      <ol className="flex flex-col border-l border-white/15 pl-5">
        {steps.map((s) => (
          <li key={s.href} className="border-b border-white/10 py-5 first:pt-0 last:border-b-0 last:pb-0">
            <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-gold">
              {s.label}
            </div>
            <h3 className="mb-1 font-serif text-xl text-cream">{s.title}</h3>
            <p className="mb-2 text-[15px] font-semibold text-gold-light">{s.price}</p>
            <p className="mb-2 text-[15px] text-cream/75">{s.text}</p>
            <Link
              href={s.href}
              className="text-sm text-gold-light underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
            >
              Více →
            </Link>
          </li>
        ))}
      </ol>
      <div className="mt-10 flex flex-col gap-6">
        <details className="group border-l-2 border-gold pl-5">
          <summary className="flex cursor-pointer list-none items-end justify-between gap-4 [&::-webkit-details-marker]:hidden">
            <div>
              <div className="mb-1 font-mono text-[11px] uppercase tracking-wider text-gold">Cena</div>
              <h3 className="font-serif text-lg text-cream">Na čem cena závisí?</h3>
            </div>
            <span aria-hidden="true" className="shrink-0 font-mono text-lg text-gold transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-cream/75">
            Spodní hranice odpovídá živnostníkům a malým firmám do tří
            zaměstnanců s jednoduchým webem. Horní hranice se týká například
            hotelu s vícejazyčným webem, mnoha službami nebo několika
            provozovnami. Pro větší firmy a sítě poboček připravím cenu
            individuálně. Přesnou cenu vám vždy řeknu předem, po úvodní
            konzultaci.
          </p>
        </details>
        <details className="group border-l-2 border-gold pl-5">
          <summary className="flex cursor-pointer list-none items-end justify-between gap-4 [&::-webkit-details-marker]:hidden">
            <div>
              <div className="mb-1 font-mono text-[11px] uppercase tracking-wider text-gold">Postup</div>
              <h3 className="font-serif text-lg text-cream">Proč jsou kroky oddělené?</h3>
            </div>
            <span aria-hidden="true" className="shrink-0 font-mono text-lg text-gold transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-cream/75">
            Nemusíte hned investovat do celého řešení. Audit vám ukáže, co a v
            jakém pořadí má smysl řešit. Některé kroky zvládnete sami nebo s
            webmasterem, jiné můžete nechat na později. Rozhodujete se postupně,
            podle výsledků.
          </p>
        </details>
      </div>
    </>
  );
}
