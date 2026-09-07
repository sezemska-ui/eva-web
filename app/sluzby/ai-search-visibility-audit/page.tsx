import { Eyebrow, H1, H2, P, Section, CtaBox } from "@/components/Ui";
import { ServiceJsonLd, Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Search Visibility Audit — Eva Sezemská",
  description:
    "Zjistím, jak vás dnes vidí ChatGPT, Perplexity a Google AI Overview — a proč vás AI někdy nedoporučí místo konkurence.",
  alternates: { canonical: "/sluzby/ai-search-visibility-audit" },
};

export default function Audit() {
  return (
    <>
      <ServiceJsonLd
        name="AI Search Visibility Audit"
        description="Audit AI viditelnosti firmy — testování reálných odpovědí ChatGPT, Perplexity a Google AI Overview, kontrola konzistence dat a technických základů."
        url="/sluzby/ai-search-visibility-audit"
      />
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Služby", href: "/sluzby" }, { label: "AI Search Visibility Audit" }]} />
        <Eyebrow>AI Search Visibility Audit</Eyebrow>
        <H1>Nejprve zjistíme, kde skutečně stojíte.</H1>
        <P>
          Než začneme něco optimalizovat, potřebujeme vědět, jak vaši firmu
          skutečně vidí vyhledávače, AI systémy a digitální ekosystém kolem
          vás.
        </P>
      </Section>

      <Section>
        <H2>Možná máte problém, který běžné SEO reporty neukážou.</H2>
        <P>
          Firma může mít kvalitní web, dobré recenze, skvělý produkt,
          sociální sítě, silnou historii — a přesto nebýt doporučována.
        </P>
      </Section>

      <Section>
        <H2>Co testuji</H2>
        <div className="flex flex-col gap-5">
          {[
            ["01 — AI Visibility", "Jak si vedete v relevantních zákaznických dotazech."],
            ["02 — Moment rozhodnutí", "Kdy vás systém může považovat za relevantní, ale přesto doporučí konkurenci."],
            ["03 — Competition", "Kdo dostává doporučení místo vás."],
            ["04 — Digital Entity", "Jak konzistentně systémy chápou, kdo jste — včetně shody NAP údajů napříč platformami."],
            ["05 — Content", "Zda váš obsah odpovídá skutečným rozhodovacím situacím zákazníků."],
            ["06 — Technical Foundation", "Co může vyhledávačům a AI komplikovat pochopení webu."],
            ["07 — Authority", "Jaké externí signály potvrzují vaši existenci, relevanci a důvěryhodnost."],
          ].map(([t, d]) => (
            <div key={t} className="border-l border-white/15 pl-5">
              <h3 className="mb-1 font-serif text-lg text-cream">{t}</h3>
              <p className="text-[15px] text-cream/75">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <H2>Nedostanete seznam 87 úkolů.</H2>
        <P>Dostanete jasnou strukturu: co nefunguje, proč na tom záleží, co změnit a co má prioritu.</P>
      </Section>

      <Section>
        <CtaBox
          title="Zjistěte, co vidí systémy místo vás."
          href="https://script.google.com/macros/s/AKfycbzP3VLI0hSpFds4PHc9oMsynueY8snUzI_THmtx4B3K8AaZTFh6x-7B7YI1xFBMHg0P/exec"
          ctaLabel="Probrat AI Search Visibility Audit →"
        >
          Nejrychlejší cesta, jak začít, je krátký vstupní dotazník.
        </CtaBox>
      </Section>
    </>
  );
}
