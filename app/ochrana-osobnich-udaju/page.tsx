import { H1, H2, P, Section } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů — Eva Sezemská",
  description:
    "Zásady ochrany osobních údajů: jaké údaje Eva Sezemská shromažďuje, proč, jak dlouho je uchovává a jaká máte práva.",
  alternates: { canonical: "/ochrana-osobnich-udaju" },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Ochrana osobních údajů" }]} />
        <H1>Ochrana osobních údajů</H1>
        <P>
          Tyto zásady popisují, jaké osobní údaje na searchstrategy.cz
          shromažďuji, proč, jak dlouho je uchovávám a jaká máte práva. Platí
          od 21. 9. 2026.
        </P>
      </Section>

      <Section>
        <H2>Kdo je správcem údajů</H2>
        <P>
          Správcem osobních údajů je Eva Sezemská, IČO 29800544. V otázkách
          ochrany osobních údajů mě můžete kontaktovat na e-mailu
          sezemska@searchstrategy.cz.
        </P>
      </Section>

      <Section>
        <H2>Jaké údaje shromažďuji a proč</H2>
        <P>
          <span className="font-semibold text-cream">
            Konzultační formulář.
          </span>{" "}
          Když si přes web domluvíte konzultaci, ukládám jméno, e-mail a
          text vaší zprávy. Používám je výhradně k tomu, abych vám
          odpověděla a domluvila se s vámi na dalším postupu.
        </P>
        <P>
          <span className="font-semibold text-cream">Vstupní dotazník.</span>{" "}
          Pokud vyplníte vstupní dotazník před naší schůzkou, ukládám údaje o
          vaší firmě a kontaktní osobě (název firmy, jméno, e-mail, telefon,
          web) a vaše odpovědi na otázky o byznysu, cílech a technickém
          zázemí webu. Tyto údaje používám k přípravě naší první schůzky a
          návrhu spolupráce.
        </P>
        <P>
          <span className="font-semibold text-cream">
            Analytika návštěvnosti.
          </span>{" "}
          Web používá Google Analytics (GA4), který pomocí cookies
          zaznamenává anonymizovaná data o návštěvnosti (např. odkud
          návštěvníci přišli, jaké stránky si prohlédli). Tato data
          nepoužívám k identifikaci konkrétních osob.
        </P>
      </Section>

      <Section>
        <H2>Právní základ zpracování</H2>
        <P>
          Údaje z konzultačního formuláře a vstupního dotazníku zpracovávám
          na základě vašeho souhlasu a za účelem jednání o uzavření smlouvy
          (čl. 6 odst. 1 písm. b) a a) GDPR). Analytiku návštěvnosti
          zpracovávám na základě vašeho souhlasu s cookies.
        </P>
      </Section>

      <Section>
        <H2>Komu údaje předávám</H2>
        <P>
          Údaje z vstupního dotazníku ukládám kromě Google Sheets i do
          Notionu, kde si spravuji přehled klientů — Notion tak vystupuje
          jako zpracovatel osobních údajů. Data z Google Analytics zpracovává
          Google Ireland Limited, přičemž část dat může být přenášena na
          servery Google LLC v USA v rámci standardních smluvních doložek
          schválených Evropskou komisí. Údaje nikomu jinému neprodávám ani
          nepředávám k marketingovým účelům.
        </P>
      </Section>

      <Section>
        <H2>Jak dlouho údaje uchovávám</H2>
        <P>
          Údaje z formulářů uchovávám po dobu, kdy spolu jednáme o možné
          spolupráci, a pokud spolupráce vznikne, po celou dobu jejího
          trvání. Pokud ke spolupráci nedojde, nebo po jejím ukončení,
          uchovávám údaje ještě 3 roky kvůli případným právním nárokům, poté
          je bezpečně smažu.
        </P>
      </Section>

      <Section>
        <H2>Vaše práva</H2>
        <P>
          Máte právo na přístup ke svým osobním údajům, jejich opravu nebo
          výmaz, omezení zpracování, přenositelnost údajů a právo vznést
          námitku proti zpracování. Souhlas s cookies můžete kdykoli odvolat
          v nastavení prohlížeče. Pokud se domníváte, že vaše údaje
          zpracovávám v rozporu se zákonem, máte právo podat stížnost u
          Úřadu pro ochranu osobních údajů (uoou.cz).
        </P>
        <P>
          Pro uplatnění kteréhokoli z těchto práv mě kontaktujte na
          sezemska@searchstrategy.cz.
        </P>
      </Section>
    </>
  );
}
