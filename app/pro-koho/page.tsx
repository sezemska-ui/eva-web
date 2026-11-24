import Link from "next/link";
import { Eyebrow, H1, H2, P, Photo, Section, CtaBox } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Pro koho — Eva Sezemská",
  description:
    "Pro ubytování, řemesla a místní služby z Mladé Boleslavi, Českého ráje i odjinud, které chtějí být mezi doporučenými, když se zákazník zeptá vyhledávače nebo AI, koho si má vybrat.",
  path: "/pro-koho",
});

type GroupLink = { label: string; href: string };

const groups: {
  n: string;
  title: string;
  situation: string;
  focus: string;
  caseLink?: GroupLink;
  start: GroupLink[];
  price: string;
}[] = [
  {
    n: "01",
    title: "Ubytování a hotely",
    situation:
      "Host napíše „chceme s dětmi na víkend do Českého ráje, doporuč nám ubytování“. AI odpoví několika jmény a ke každému přidá vlastní popis. V mém testu dávala párům hlavně hotely, rodinám penziony, a občas se spletla v tom, komu je podnik určený.",
    focus:
      "Jestli vás AI řadí ke správnému typu hosta, co o vás píše a odkud to bere: web, Profil firmy na Googlu, rezervační portály, recenze a katalogy.",
    caseLink: {
      label: "Páry dostanou hotel, rodiny penzion: 30 odpovědí AI z Českého ráje",
      href: "/field-notes/ai-ubytovani-cesky-raj-pary-a-rodiny",
    },
    price: "audit obvykle 20 000–30 000 Kč.",
    start: [
      { label: "Audit AI viditelnosti", href: "/sluzby/ai-search-visibility-audit" },
    ],
  },
  {
    n: "02",
    title: "Řemesla a místní služby",
    situation:
      "Zákazník napíše „doporuč mi ověřenou firmu na čištění fasády“, nebo se rovnou zeptá „je tahle firma spolehlivá?“. Odpověď se skládá z map, recenzí, katalogů a vašeho webu. Stačí, aby si tyto zdroje protiřečily, a doporučení dostane někdo jiný.",
    focus:
      "Profil firmy na Googlu, mapy, recenze, katalogy, reference a to, jestli všude říkají totéž co váš web.",
    caseLink: {
      label: "Jak AI vyhledávače doporučují firmu na čištění fasád",
      href: "/field-notes/jak-ai-doporucuje-firmu-na-cisteni-fasad",
    },
    price: "audit obvykle 20 000–40 000 Kč podle počtu služeb a lokalit.",
    start: [
      { label: "Audit AI viditelnosti", href: "/sluzby/ai-search-visibility-audit" },
      { label: "Budování důvěryhodnosti", href: "/sluzby/digital-authority" },
    ],
  },
  {
    n: "03",
    title: "Živnostníci a osobní značky",
    situation:
      "Vaší značkou je vaše jméno, třeba jako fotografka nebo poradce. AI vás ale může zaměnit s někým jiným, nebo neví, čím se živíte a kde působíte.",
    focus:
      "Jestli systémy chápou, kdo jste, co děláte a kde. A jestli pro to existují důkazy i mimo váš web.",
    caseLink: {
      label: "Jak AI zaměnila identitu mé klientky",
      href: "/field-notes/proc-ai-zamenila-identitu",
    },
    price: "audit obvykle kolem 20 000 Kč.",
    start: [
      { label: "Úvodní konzultace (60 minut)", href: "/sluzby/strategicka-konzultace" },
    ],
  },
];

const notFor = [
  "Pro firmy, které chtějí garanci první pozice nebo výsledek do týdne. Viditelnost v AI se buduje a ověřuje měřením v čase.",
  "Pro ty, kdo hledají správu reklamních kampaní. Placenou reklamu nedělám.",
  "Pro firmy, které nechtějí na webu ani v profilech nic měnit. Strategie bez implementace nic nezmění.",
];

const linkClass =
  "text-ink underline decoration-rule underline-offset-4 transition-colors duration-200 hover:decoration-ink";

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 border-b border-rule py-3 last:border-b-0 sm:flex-row sm:gap-6">
      <dt className="flex-none pt-[3px] font-mono text-[13px] tracking-[0.04em] text-muted sm:w-40">
        {label}
      </dt>
      <dd className="text-[17px] leading-relaxed text-ink-2">{children}</dd>
    </div>
  );
}

export default function ProKoho() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Pro koho" }]} />
        <Eyebrow>Pro koho / 01–03</Eyebrow>
        <H1>Pro firmy, které mají dobrou pověst ve skutečnosti, ale AI o ní neví.</H1>
        <P>
          Jsem Eva Sezemská, AI Search Strategist z Mladé Boleslavi. Pracuji
          s ubytováním, řemesly a místními službami z Mladé Boleslavi, Českého
          ráje i odjinud, které chtějí být mezi doporučenými, když se zákazník
          zeptá vyhledávače nebo AI, koho si má vybrat.
        </P>
        <Photo
          src="/images/web-stranka-pro-koho.webp"
          alt="Ruce na klávesnici notebooku, na obrazovce stránka Pro koho"
          width={800}
          height={600}
          maxWidth={640}
        />
      </Section>

      {groups.map((g) => (
        <Section key={g.n}>
          <div className="mb-1 font-mono text-[12px] text-muted">{g.n}</div>
          <h2 className="mb-4 font-serif text-2xl text-ink">{g.title}</h2>
          <dl>
            <Row label="Typická situace">{g.situation}</Row>
            <Row label="Na co se dívám">{g.focus}</Row>
            {g.caseLink && (
              <Row label="Z praxe">
                <Link href={g.caseLink.href} className={linkClass}>
                  {g.caseLink.label}
                </Link>
              </Row>
            )}
            <Row label="Kde začít">
              {g.start.map((s, i) => (
                <span key={s.href}>
                  {i > 0 && <span className="text-muted">, dlouhodobě{" "}</span>}
                  <Link href={s.href} className={linkClass}>
                    {s.label}
                  </Link>
                </span>
              ))}
            </Row>
            <Row label="Orientační cena">{g.price}</Row>
          </dl>
        </Section>
      ))}

      <Section>
        <H2>Pro koho nejsem</H2>
        <ul className="flex flex-col">
          {notFor.map((t) => (
            <li
              key={t}
              className="flex gap-4 border-b border-rule py-3 text-[17px] leading-relaxed text-ink-2 last:border-b-0"
            >
              <span className="flex-none font-mono text-[13px] text-muted">—</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <CtaBox title="Nejste si jistí, kam patříte?">
          60 minut na to, abychom zjistili, kde začít.
        </CtaBox>
      </Section>
    </>
  );
}
