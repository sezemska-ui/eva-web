import Link from "next/link";
import { Eyebrow, H1, H2, P, Section, CtaBox } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Služby — Eva Sezemská",
  description:
    "Audit, strategie, implementace a digitální autorita — čtyři kroky k tomu, aby vás vyhledávače a AI dohledaly, pochopily a doporučily.",
  alternates: { canonical: "/sluzby" },
};

const services = [
  {
    n: "01",
    title: "AI Search Visibility Audit",
    href: "/sluzby/ai-search-visibility-audit",
    text: "Zjistíme, jak vás skutečně vidí Google a AI. Testuji konkrétní zákaznické scénáře, konkurenci, digitální entitu, obsah, technické základy a signály autority.",
  },
  {
    n: "02",
    title: "AI Search Strategie",
    href: "/sluzby/ai-search-strategie",
    text: "Z diagnostiky vytvoříme plán. Určíme, kde potřebujete být vidět, pro jaké rozhodovací situace a jaké změny k tomu povedou.",
  },
  {
    n: "03",
    title: "Implementace strategie",
    href: "/sluzby/implementace-strategie",
    text: "Strategie musí skončit změnou. Technické, obsahové, strukturální a lokální úpravy realizujeme podle priorit — ve spolupráci s vaším webmasterem.",
  },
  {
    n: "04",
    title: "Digital Authority",
    href: "/sluzby/digital-authority",
    text: "Budujeme důkazy, které podporují vaši důvěryhodnost. Web, Google, média, katalogy, recenze a další zdroje skládáme do konzistentního digitálního obrazu firmy.",
  },
];

export default function Sluzby() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Služby" }]} />
        <Eyebrow>Services / 01–04</Eyebrow>
        <H1>Od prvního zjištění k dlouhodobé digitální autoritě.</H1>
        <P>
          Pomáhám firmám zjistit, co se děje ve chvíli, kdy jejich zákazník
          hledá bez znalosti jejich jména.
        </P>
        <P>
          Testuji, jak je v těchto situacích vidí Google a AI, proč doporučují
          jiné firmy místo nich a co je potřeba změnit, aby se jejich značka
          stala dohledatelnou, pochopitelnou a doporučitelnou.
        </P>
      </Section>

      <Section>
        <H2>Nezačínáme optimalizací. Začínáme otázkou.</H2>
        <div className="flex flex-col gap-4">
          <Link href="/sluzby/ai-search-visibility-audit" className="group flex flex-col gap-1 border-b border-white/10 py-3 transition-colors hover:border-gold/40 sm:flex-row sm:items-baseline sm:justify-between">
            <span className="text-[15px] text-cream/85">Jste vidět?</span>
            <span className="text-sm text-gold-light">AI Search Visibility Audit →</span>
          </Link>
          <Link href="/sluzby/ai-search-strategie" className="group flex flex-col gap-1 border-b border-white/10 py-3 transition-colors hover:border-gold/40 sm:flex-row sm:items-baseline sm:justify-between">
            <span className="text-[15px] text-cream/85">Víte, proč vás systémy nevybírají?</span>
            <span className="text-sm text-gold-light">AI Search Strategie →</span>
          </Link>
          <Link href="/sluzby/implementace-strategie" className="group flex flex-col gap-1 border-b border-white/10 py-3 transition-colors hover:border-gold/40 sm:flex-row sm:items-baseline sm:justify-between">
            <span className="text-[15px] text-cream/85">Víte, co změnit?</span>
            <span className="text-sm text-gold-light">Implementace strategie →</span>
          </Link>
          <Link href="/sluzby/digital-authority" className="group flex flex-col gap-1 py-3 transition-colors hover:border-gold/40 sm:flex-row sm:items-baseline sm:justify-between">
            <span className="text-[15px] text-cream/85">Má vaše značka dost důkazů, že jí lze věřit?</span>
            <span className="text-sm text-gold-light">Digital Authority →</span>
          </Link>
        </div>

        <div className="mt-6 flex items-center gap-3 text-cream/30">
          <span className="h-px flex-1 bg-white/10" />
          <span className="font-mono text-[11px] uppercase tracking-widest">nebo</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <Link href="/sluzby/strategicka-konzultace" className="group mt-4 flex flex-col gap-1 rounded-sm border border-gold/30 bg-white/5 p-4 transition-colors hover:border-gold/50 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[15px] text-cream/85">Nejste si jistí, kde začít?</span>
          <span className="text-sm text-gold-light">Strategická konzultace →</span>
        </Link>
      </Section>

      <Section>
        {services.map((s) => (
          <div key={s.n} className="mb-8 border-l border-white/15 pl-5">
            <div className="mb-1 font-mono text-[12px] text-gold">{s.n}</div>
            <h3 className="mb-2 font-serif text-xl text-cream">{s.title}</h3>
            <p className="mb-2 text-[15px] text-cream/75">{s.text}</p>
            <Link href={s.href} className="text-sm text-gold-light underline decoration-gold/40 underline-offset-4">
              Prozkoumat →
            </Link>
          </div>
        ))}
      </Section>

      <Section>
        <H2>Jedna služba často nestačí.</H2>
        <P>
          Některé firmy potřebují pouze zjistit, kde mají problém. Jiné
          potřebují celý proces od diagnostiky po dlouhodobé budování
          digitální autority.
        </P>
      </Section>

      <Section>
        <CtaBox
          title="Kde začít?"
          href="/sluzby/ai-search-visibility-audit"
          ctaLabel="Zjistit, jak jste vidět →"
        >
          Nevíte, proč vás zákazníci nenacházejí nebo nedostávají mezi
          doporučeními? Začněte AI Search Visibility Auditem.
        </CtaBox>
      </Section>
    </>
  );
}
