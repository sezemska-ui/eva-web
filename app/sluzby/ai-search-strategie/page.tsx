import { Eyebrow, H1, H2, P, Section, CtaBox, FactBox, DashList } from "@/components/Ui";
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
        <H1>Plán, co změnit, v jakém pořadí a proč.</H1>
        <P>
          Ze zjištění auditu připravím konkrétní podklady: co změnit na webu
          a v profilech, v jakém pořadí a proč právě tohle.
        </P>
        <FactBox
          rows={[
            ["Cena", "15 000–50 000 Kč podle rozsahu. Přesnou cenu stanovím podle výsledků auditu."],
            ["Výstup", "Podklady připravené k vložení na web a plán kroků s prioritami."],
          ]}
        />
      </Section>

      <Section>
        <H2>Co dostanete</H2>
        <P>
          Strategie je rozpis opravy. Zjištění z auditu převedu na podklady, se
          kterými můžete vy nebo váš webmaster rovnou pracovat:
        </P>
        <DashList
          items={[
            "návrh struktury webu – které stránky přidat, upravit nebo sloučit,",
            "hotové texty klíčových stránek, které odpovídají na skutečné otázky vašich zákazníků,",
            "podklady pro strukturovaná data – strojově čitelné údaje o firmě a nabídce pro vyhledávače a AI,",
            "doporučení pro profily na Googlu, Firmy.cz a dalších místech, odkud AI čerpá,",
            "témata dalšího obsahu a pořadí, v jakém je zpracovat.",
          ]}
        />
      </Section>

      <Section>
        <H2>Kde chcete být doporučováni?</H2>
        <P>
          Nezačínám klíčovými slovy, ale situacemi, ve kterých se vaši
          zákazníci ptají AI. Třeba rodina, která hledá ubytování
          s programem pro děti, nebo majitel domu, který chce ověřenou firmu
          na fasádu. U každé situace řeším, co o vás AI musí vědět, aby vás
          jmenovala.
        </P>
      </Section>

      <Section>
        <H2>Strategie řeší</H2>
        <DashList
          items={[
            "situace a dotazy, ve kterých chcete být v odpovědích AI,",
            "pořadí kroků podle toho, co má největší dopad,",
            "strukturu webu a obsah,",
            "údaje o firmě, které si nesmí nikde odporovat,",
            "Profil firmy na Googlu a místní katalogy,",
            "recenze a zmínky na jiných webech,",
            "technické překážky,",
            "jak budeme měřit, jestli změny fungují.",
          ]}
        />
      </Section>

      <Section>
        <H2>Výstup</H2>
        <P>
          Hotové texty a podklady k vložení na web a plán kroků s prioritami.
          Podle něj změny provedete sami, s webmasterem, nebo v rámci implementace se mnou.
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
