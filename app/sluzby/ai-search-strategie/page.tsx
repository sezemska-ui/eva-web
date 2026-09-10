import { Eyebrow, H1, H2, P, Section, CtaBox } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import { FORM_URL } from "@/components/SiteJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Search Strategie — Eva Sezemská",
  description:
    "Strategický plán, co konkrétně opravit a v jakém pořadí, aby se z vaší firmy stala pro AI jasně rozpoznatelná a doporučovaná entita.",
  alternates: { canonical: "/sluzby/ai-search-strategie" },
};

export default function Strategie() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Služby", href: "/sluzby" }, { label: "AI Search Strategie" }]} />
        <Eyebrow>AI Search Strategie</Eyebrow>
        <H1>Vědět, co změnit, je začátek. Vědět, proč to změnit, je strategie.</H1>
        <P>
          Na základě auditu vytvářím strategii, která propojuje zákaznické
          rozhodovací situace, vyhledávání, AI, obsah, digitální entitu a
          autoritu.
        </P>
      </Section>

      <Section>
        <H2>Kam chcete být doporučováni?</H2>
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
        <CtaBox
          title="Máte audit. Teď potřebujete plán."
          href={FORM_URL}
          ctaLabel="Probrat strategii →"
        >
          Pojďme probrat, jak by mohla vypadat strategie pro vaši firmu.
        </CtaBox>
      </Section>
    </>
  );
}
