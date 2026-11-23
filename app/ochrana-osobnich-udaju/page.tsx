import { H1, H2, P, Section } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Ochrana osobních údajů — Eva Sezemská",
  description:
    "Zásady ochrany osobních údajů: jaké údaje Eva Sezemská shromažďuje, proč, jak dlouho je uchovává a jaká máte práva.",
  path: "/ochrana-osobnich-udaju",
});

export default function PrivacyPolicy() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Ochrana osobních údajů" }]} />
        <H1>Ochrana osobních údajů</H1>
        <P>
          Tyto zásady popisují, jaké osobní údaje na searchstrategy.cz
          shromažďuji, proč, jak dlouho je uchovávám a jaká máte práva. Platí
          od 18. 11. 2026.
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
          <span className="font-semibold text-ink">
            Konzultační formulář.
          </span>{" "}
          Když si přes web domluvíte konzultaci, ukládám jméno, e-mail,
          telefon (pokud ho uvedete), web firmy, navrhované termíny a text
          vaší zprávy. Používám je výhradně k tomu, abych vám
          odpověděla a domluvila se s vámi na dalším postupu.
        </P>
        <P>
          <span className="font-semibold text-ink">Vstupní dotazník.</span>{" "}
          Pokud vám po konzultaci pošlu vstupní dotazník a vyplníte ho,
          ukládám údaje o vaší firmě a kontaktní osobě (název firmy, jméno,
          e-mail, telefon, web) a vaše odpovědi na otázky o byznysu, cílech a
          technickém zázemí webu. Tyto údaje používám k přípravě návrhu
          spolupráce.
        </P>
        <P>
          <span className="font-semibold text-ink">
            Analytika návštěvnosti.
          </span>{" "}
          Web používá Google Analytics (GA4), který pomocí cookies
          zaznamenává anonymizovaná data o návštěvnosti (např. odkud
          návštěvníci přišli, jaké stránky si prohlédli). Tato data
          nepoužívám k identifikaci konkrétních osob.
        </P>
        <P>
          Web také používá Microsoft Clarity, který zaznamenává, jak
          návštěvníci stránky používají (pohyb myši, klikání, posouvání),
          a vytváří z toho anonymní záznamy a teplotní mapy. Obsah
          formulářových polí se nezaznamenává. Záznamy mi pomáhají najít
          místa, kde se návštěvníci na webu ztrácejí.
        </P>
      </Section>

      <Section>
        <H2>Právní základ zpracování</H2>
        <P>
          Údaje z konzultačního formuláře a vstupního dotazníku zpracovávám
          na základě vašeho souhlasu a za účelem jednání o uzavření smlouvy
          (čl. 6 odst. 1 písm. b) a a) GDPR). Analytiku návštěvnosti
          (Google Analytics a Microsoft Clarity) zpracovávám jen na základě
          vašeho souhlasu s cookies (čl. 6 odst. 1 písm. a) GDPR). Bez
          souhlasu se tyto nástroje nenačtou.
        </P>
      </Section>

      <Section>
        <H2>Komu údaje předávám</H2>
        <P>
          Údaje ze vstupního dotazníku ukládám kromě Google Sheets i do
          Notionu, kde si spravuji přehled klientů — Notion tak vystupuje
          jako zpracovatel osobních údajů. Data z Google Analytics zpracovává
          Google Ireland Limited, přičemž část dat může být přenášena na
          servery Google LLC v USA v rámci standardních smluvních doložek
          schválených Evropskou komisí. Data z Microsoft Clarity zpracovává
          Microsoft Ireland Operations Limited, přičemž část dat může být
          přenášena na servery Microsoft Corporation v USA v rámci
          standardních smluvních doložek. Údaje nikomu jinému neprodávám ani
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
        <P>
          Záznamy návštěv v Microsoft Clarity se mažou po 30 dnech,
          souhrnná data (teplotní mapy, statistiky) po 13 měsících.
        </P>
      </Section>

      <Section>
        <H2>Cookies</H2>
        <P>
          Analytické cookies se ukládají jen po kliknutí na „Přijmout“ v liště
          na webu:
        </P>
        <ul className="mt-3 flex flex-col gap-2 text-[15px] text-ink-2">
          <li>
            <span className="text-ink">_ga, _ga_*</span> (Google
            Analytics): rozlišení návštěvníků, platnost 2 roky.
          </li>
          <li>
            <span className="text-ink">_clck</span> (Microsoft Clarity):
            rozlišení návštěvníků, platnost 1 rok.
          </li>
          <li>
            <span className="text-ink">_clsk</span> (Microsoft Clarity):
            propojení stránek jedné návštěvy, platnost 1 den.
          </li>
        </ul>
        <P>
          Vaši volbu si web pamatuje v úložišti prohlížeče. Změnit ji můžete
          smazáním dat webu searchstrategy.cz v nastavení prohlížeče; lišta se
          pak zobrazí znovu.
        </P>
      </Section>

      <Section>
        <H2>Vaše práva</H2>
        <P>
          Máte právo na přístup ke svým osobním údajům, jejich opravu nebo
          výmaz, omezení zpracování, přenositelnost údajů a právo vznést
          námitku proti zpracování. Souhlas s cookies můžete kdykoli odvolat
          smazáním dat webu v nastavení prohlížeče (viz Cookies). Pokud se domníváte, že vaše údaje
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
