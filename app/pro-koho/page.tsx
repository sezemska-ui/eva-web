import Link from "next/link";
import { Eyebrow, H1, H2, P, Section, CtaBox } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pro koho — Eva Sezemská",
  description:
    "Pro lokální firmy, živnostníky a B2B firmy, které chtějí být mezi možnostmi, když se zákazník zeptá vyhledávače nebo AI, koho si má vybrat.",
  alternates: { canonical: "/pro-koho" },
};

type GroupLink = { label: string; href: string };

const groups: {
  n: string;
  title: string;
  situation: string;
  focus: string;
  caseLink?: GroupLink;
  start: GroupLink[];
}[] = [
  {
    n: "01",
    title: "Lokální firmy a provozovny",
    situation:
      "Zákazník se ptá „kde v okolí…“ a nezná vaše jméno. Odpověď se skládá z map, recenzí, katalogů a vašeho webu. Stačí, aby si tyto zdroje protiřečily, a doporučení dostane někdo jiný.",
    focus:
      "Google Business Profil, mapy, recenze, katalogy a to, jestli všude říkají totéž co váš web.",
    start: [
      { label: "AI Search Visibility Audit", href: "/sluzby/ai-search-visibility-audit" },
    ],
  },
  {
    n: "02",
    title: "Živnostníci a OSVČ",
    situation:
      "Vaší značkou je vaše jméno. AI vás ale může zaměnit s někým jiným, nebo neví, čím se živíte a kde působíte.",
    focus:
      "Jestli systémy chápou, kdo jste, co děláte a kde. A jestli pro to existují důkazy i mimo váš web.",
    caseLink: {
      label: "Proč AI zaměnila identitu",
      href: "/field-notes/proc-ai-zamenila-identitu",
    },
    start: [
      { label: "Strategická konzultace (60 minut)", href: "/sluzby/strategicka-konzultace" },
    ],
  },
  {
    n: "03",
    title: "B2B firmy a služby",
    situation:
      "Váš zákazník si dodavatele vybírá týdny. Než vám napíše, zeptá se AI, kdo v oboru za to stojí. Pokud vaši odbornost nic nepotvrzuje, v odpovědi nejste.",
    focus:
      "Jak je vaše odbornost čitelná z webu, referencí, zmínek v médiích a oborových katalozích.",
    start: [
      { label: "AI Search Visibility Audit", href: "/sluzby/ai-search-visibility-audit" },
      { label: "Digital Authority", href: "/sluzby/digital-authority" },
    ],
  },
];

const notFor = [
  "Pro firmy, které chtějí garanci první pozice nebo výsledek do týdne. Viditelnost v AI se buduje a ověřuje měřením v čase.",
  "Pro ty, kdo hledají správu reklamních kampaní. Placenou reklamu nedělám.",
  "Pro firmy, které nechtějí na webu ani v profilech nic měnit. Strategie bez implementace nic nezmění.",
];

const linkClass =
  "text-gold-light underline decoration-gold/40 underline-offset-4 transition-colors duration-200 hover:decoration-gold";

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 border-b border-white/10 py-3 last:border-b-0 sm:flex-row sm:gap-6">
      <dt className="flex-none pt-[3px] font-mono text-[11px] uppercase tracking-wider text-cream/45 sm:w-40">
        {label}
      </dt>
      <dd className="text-[15.5px] leading-relaxed text-cream/80">{children}</dd>
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
          Jsem Eva Sezemská, AI Search Strategist z Mladé Boleslavi. Pracuji s
          lokálními firmami, živnostníky a B2B firmami, které chtějí být mezi
          možnostmi, když se zákazník zeptá vyhledávače nebo AI, koho si má
          vybrat.
        </P>
      </Section>

      {groups.map((g) => (
        <Section key={g.n}>
          <div className="mb-1 font-mono text-[12px] text-gold">{g.n}</div>
          <h2 className="mb-4 font-serif text-2xl text-cream">{g.title}</h2>
          <dl>
            <Row label="Typická situace">{g.situation}</Row>
            <Row label="Na co se dívám">{g.focus}</Row>
            {g.caseLink && (
              <Row label="Z praxe">
                <Link href={g.caseLink.href} className={linkClass}>
                  {g.caseLink.label} →
                </Link>
              </Row>
            )}
            <Row label="Kde začít">
              {g.start.map((s, i) => (
                <span key={s.href}>
                  {i > 0 && <span className="text-cream/60">, dlouhodobě{" "}</span>}
                  <Link href={s.href} className={linkClass}>
                    {s.label} →
                  </Link>
                </span>
              ))}
            </Row>
          </dl>
        </Section>
      ))}

      <Section>
        <H2>Pro koho nejsem</H2>
        <ul className="flex flex-col">
          {notFor.map((t) => (
            <li
              key={t}
              className="flex gap-4 border-b border-white/10 py-3 text-[15.5px] leading-relaxed text-cream/80 last:border-b-0"
            >
              <span className="flex-none font-mono text-[13px] text-gold">—</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <CtaBox
          title="Nejste si jistí, kam patříte?"
          href="/sluzby/strategicka-konzultace"
          ctaLabel="Strategická konzultace (60 minut) →"
        >
          60 minut na to, abychom zjistili, kde začít.
        </CtaBox>
      </Section>
    </>
  );
}
