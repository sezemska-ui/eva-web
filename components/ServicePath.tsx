import Link from "next/link";
import { LABEL } from "./Ui";

// Služby a ceny jako cesta: od konzultace po dlouhodobé budování důvěryhodnosti.
// Používá ji úvodní stránka (krátká věta) i /sluzby (celý text). Ceny musí odpovídat JSON-LD v SiteJsonLd.tsx.
const steps = [
  {
    label: "00",
    title: "Úvodní konzultace",
    price: "4 500 Kč",
    href: "/sluzby/strategicka-konzultace",
    short: "Šedesát minut, po kterých víte, jestli vás AI doporučuje a jestli má audit smysl.",
    side: "odečte se z auditu",
    tag: "00 — začněte zde",
    note: "Cenu konzultace odečtu z auditu.",
    text: "Odejdete s jasnou odpovědí, jestli vás AI dnes doporučuje a jestli má audit smysl. 60 minut, přijdu s prvními zjištěními o vaší firmě.",
  },
  {
    label: "01",
    title: "Audit AI viditelnosti",
    price: "20 000–40 000 Kč",
    href: "/sluzby/ai-search-visibility-audit",
    short: "Zjistím, odkud AI o vás čerpá a čím ji přesvědčila konkurence. Dostanete plán změn seřazený podle priorit.",
    side: "obvykle do 15 prac. dnů",
    text: "Budete vědět, proč vás AI nedoporučuje a čím začít. Zjistím, odkud o vás AI čerpá a čím ji přesvědčila konkurence. Dostanete akční plán: co změnit a v jakém pořadí. Hotovo obvykle do 15 pracovních dnů.",
  },
  {
    label: "02",
    title: "Strategie AI viditelnosti",
    price: "15 000–50 000 Kč",
    href: "/sluzby/ai-search-strategie",
    short: "Zjištění z auditu převedu na podklady pro webmastera: texty, strukturu webu a technické zadání.",
    side: "podle rozsahu webu",
    text: "Váš webmaster dostane hotové podklady a nemusí nic vymýšlet. Zjištění z auditu převedu na texty, strukturu webu a technické podklady.",
  },
  {
    label: "03",
    title: "Implementace",
    price: "podle rozsahu",
    href: "/sluzby/implementace-strategie",
    short: "Komunikuji s webmasterem, kontroluji změny a ověřuji, jak se projeví v odpovědích AI.",
    side: "cenu znáte předem",
    text: "Budu komunikovat s vaším webmasterem a vše zkontroluji za vás. Ověřím také, jak se změny projevují v odpovědích AI. Cenu řeknu předem.",
  },
  {
    label: "04",
    title: "Budování důvěryhodnosti",
    price: "měsíční spolupráce",
    href: "/sluzby/digital-authority",
    short: "Každý měsíc sleduji, jak často vás AI doporučuje, a starám se o recenze, profily a zmínky mimo web.",
    side: "obvykle min. 3 měsíce",
    text: "Každý měsíc uvidíte, jak často vás AI doporučuje a jestli to roste. Starám se o recenze, profily a zmínky mimo váš web. Cena individuálně, obvykle na minimálně 3 měsíce.",
  },
];


type Step = (typeof steps)[number] & { note?: string; tag?: string };

// Celý řádek je odkaz: mono číslo, název s popisem, cena a poznámka vpravo
export default function ServicePath({ compact = false }: { compact?: boolean }) {
  return (
    <>
      {!compact && (
        <p className="mb-10 max-w-[62ch] text-[18px] leading-[1.7] text-ink-2">
          Každá spolupráce začíná rozhovorem. Další kroky volíte podle toho, co
          vám dává smysl.
        </p>
      )}
      <ol className="border-b border-rule">
        {(steps as Step[]).map((s) => (
          <li key={s.href} className="border-t border-rule">
            <Link
              href={s.href}
              className="group grid grid-cols-1 items-baseline gap-x-8 gap-y-3 py-8 text-ink lg:gap-x-12 md:grid-cols-[140px_minmax(0,1fr)_190px] lg:grid-cols-[200px_minmax(0,1fr)_220px]"
            >
              <span className={LABEL}>{s.tag ?? s.label}</span>
              <div className="flex min-w-0 flex-col gap-2">
                <h3 className="font-serif text-[24px] font-normal leading-[1.25] decoration-rule underline-offset-[5px] group-hover:underline md:text-[28px]">
                  {s.title}
                </h3>
                <span className="max-w-[56ch] text-[17px] leading-[1.65] text-ink-2">
                  {compact ? s.short : s.text}
                  {!compact && s.note ? ` ${s.note}` : ""}
                </span>
              </div>
              <span className="flex flex-col gap-1 md:items-end md:text-right">
                <span className="whitespace-nowrap font-mono text-[15px] text-ink">{s.price}</span>
                <span className="font-mono text-[12px] tracking-[0.04em] text-muted">{s.side}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
      <div className="mt-12 grid grid-cols-1 gap-x-[clamp(48px,6vw,96px)] md:grid-cols-2">
        <PriceQuestion title="Na čem cena závisí?">
          Spodní hranice odpovídá živnostníkům a malým firmám do tří
          zaměstnanců s jednoduchým webem. Horní hranice se týká například
          hotelu s vícejazyčným webem, mnoha službami nebo několika
          provozovnami. Pro větší firmy a sítě poboček připravím cenu
          individuálně. Přesnou cenu vám vždy řeknu předem, po úvodní
          konzultaci.
        </PriceQuestion>
        <PriceQuestion title="Proč jsou kroky oddělené?">
          Nemusíte hned investovat do celého řešení. Audit vám ukáže, co a v
          jakém pořadí má smysl řešit. Některé kroky zvládnete sami nebo s
          webmasterem, jiné můžete nechat na později. Rozhodujete se postupně,
          podle výsledků.
        </PriceQuestion>
      </div>
    </>
  );
}

function PriceQuestion({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="group border-b border-rule">
      <summary className="flex min-h-11 items-center justify-between gap-4 py-6 font-serif text-[22px] leading-[1.3] text-ink md:text-[24px]">
        <span>{title}</span>
        <span
          aria-hidden="true"
          className="font-mono text-[20px] text-muted transition-transform duration-200 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <p className="mb-7 max-w-[34em] text-[17px] leading-[1.7] text-ink-2">{children}</p>
    </details>
  );
}
