import { Eyebrow, H1, H2, P, Section, CtaBox, PriceNote } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Strategie AI viditelnosti — Eva Sezemská",
  description:
    "Strategický plán, co konkrétně opravit a v jakém pořadí, aby se z vaší firmy stala pro AI jasně rozpoznatelná a doporučovaná entita.",
  path: "/sluzby/ai-search-strategie",
});

export default function Strategie() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Služby", href: "/sluzby" }, { label: "Strategie AI viditelnosti" }]} />
        <Eyebrow>Strategie AI viditelnosti</Eyebrow>
        <H1>Vědět, co změnit, je začátek. Vědět, proč to změnit, je strategie.</H1>
        <P>
          Na základě auditu vytvářím strategii, která propojuje zákaznické
          rozhodovací situace, vyhledávání, AI, obsah, digitální entitu a
          autoritu.
        </P>
        <PriceNote>
          15 000–50 000 Kč podle rozsahu. Přesnou cenu stanovím podle výsledků auditu.
        </PriceNote>
      </Section>

      <Section>
        <H2>Co dostanete</H2>
        <P>
          Strategie je rozpis opravy. Zjištění z auditu převedu na podklady, se
          kterými můžete vy nebo váš webmaster rovnou pracovat:
        </P>
        <ul className="mb-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-cream/80 marker:text-gold">
          <li>návrh struktury webu – které stránky přidat, upravit nebo sloučit,</li>
          <li>hotové texty klíčových stránek, které odpovídají na skutečné otázky vašich zákazníků,</li>
          <li>podklady pro strukturovaná data – strojově čitelné údaje o firmě a nabídce pro vyhledávače a AI,</li>
          <li>doporučení pro profily na Googlu, Firmy.cz a dalších místech, odkud AI čerpá,</li>
          <li>témata dalšího obsahu a pořadí, v jakém je zpracovat.</li>
        </ul>
        <P>
          Výstupem jsou podklady připravené k vložení na web a plán kroků s
          prioritami.
        </P>
      </Section>

      <Section>
        <H2>Kde chcete být doporučováni?</H2>
        <P>Nezačínáme klíčovým slovem. Začínáme zákazníkem:</P>
        <p className="text-[14px] font-mono text-cream/60">
          ZÁKAZNÍK → ZÁMĚR → DOTAZ → SEARCH / AI → DOPORUČENÍ → KONVERZE
        </p>
      </Section>

      <Section>
        <H2>Strategie řeší</H2>
        <ul className="list-inside list-disc text-[15px] text-cream/75 space-y-1">
          <li>klíčové zákaznické scénáře</li>
          <li>priority</li>
          <li>obsahovou architekturu</li>
          <li>digitální entitu</li>
          <li>lokální viditelnost</li>
          <li>AI Search</li>
          <li>externí zdroje a signály autority</li>
          <li>technické priority</li>
          <li>měření</li>
        </ul>
      </Section>

      <Section>
        <H2>Výstup</H2>
        <P>
          Strategický dokument s prioritizovanými kroky, podle kterého lze
          následně realizovat jednotlivé změny.
        </P>
      </Section>

      <Section>
        <CtaBox title="Máte audit. Teď potřebujete plán.">
          Pojďme probrat, jak by mohla vypadat strategie pro vaši firmu.
        </CtaBox>
      </Section>
    </>
  );
}
