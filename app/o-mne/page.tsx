import Image from "next/image";
import Link from "next/link";
import { Eyebrow, H1, H2, P, Photo, Section, Annotated } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "O mně — Eva Sezemská",
  description:
    "Dívám se na vyhledávání z druhé strany. Eva Sezemská, AI Search Strategist — jak přemýšlím o AI viditelnosti firem.",
  path: "/o-mne",
});

export default function OMne() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "O mně" }]} />
        <Eyebrow>O mně / Eva Sezemská · Mladá Boleslav</Eyebrow>
        <H1>Dívám se na vyhledávání z druhé strany.</H1>
        <P>
          Zajímá mě okamžik, kdy zákazník ještě nehledá konkrétní firmu. Hledá
          odpověď.
        </P>
        <P>
          Právě v tomto okamžiku vzniká prostor, ve kterém rozhoduje nejen
          SEO, ale také to, jak dobře je firma pochopená, propojená a
          potvrzená v digitálním prostředí.
        </P>
        <Photo
          src="/images/eva-sezemska-pri-praci.webp"
          alt="Eva Sezemská pracuje u notebooku"
          width={1600}
          height={900}
        />
      </Section>

      <Section>
        <H2>Když zákazník zná vaše jméno, je pozdě.</H2>
        <P>
          Pokud zákazník hledá přímo vaši firmu, už o vás pravděpodobně ví.
          Zajímavější je okamžik předtím — když hledá hotel, specialistu,
          řešení, když se ptá, koho by měl vybrat.
        </P>
        <P>A potom: koho mu vyhledávač doporučí? To je přesně moje území.</P>
      </Section>

      <Section>
        <H2>Co vlastně dělám</H2>
        <P>
          Pomáhám firmám pochopit, jak jejich digitální přítomnost funguje z
          pohledu vyhledávačů a AI systémů. Neřeším pouze to, zda je firma
          někde online — zajímá mě, zda je dohledatelná, pochopitelná,
          relevantní, důvěryhodná a nakonec doporučitelná.
        </P>
        <div className="mt-4 flex flex-wrap justify-center gap-x-1 gap-y-4 text-center">
          <Annotated word="nalezená" note="lze vás najít" />
          <span className="self-center text-rule">→</span>
          <Annotated word="pochopená" note="systémy chápou, kdo jste" />
          <span className="self-center text-rule">→</span>
          <Annotated word="relevantní" note="odpovídáte záměru" />
          <span className="self-center text-rule">→</span>
          <Annotated word="důvěryhodná" note="existují důkazy" />
          <span className="self-center text-rule">→</span>
          <Annotated word="doporučovaná" note="dostanete se mezi možnosti" />
        </div>
      </Section>

      <Section>
        <div className="border border-rule bg-paper-2 p-6 sm:p-8">
          <h2 className="mb-4 font-serif text-2xl text-ink">
            Přenáším autoritu firem z reálného světa do digitálního.
          </h2>
          <p className="mb-4 text-[17px] leading-relaxed text-ink-2">
            Firma může mít roky zkušeností, stovky spokojených zákazníků,
            skvělou pověst a silné postavení ve svém regionu. Digitální
            systémy ale tuto autoritu nevnímají automaticky.
          </p>
          <p className="text-[17px] leading-relaxed text-ink-2">
            Potřebují ji vidět v datech, obsahu, vztazích, zmínkách,
            recenzích, strukturách a dalších signálech napříč webem. Mojí
            prací je tyto signály identifikovat, propojit a systematicky
            posilovat.
          </p>
        </div>
      </Section>

      <Section>
        <H2>Můj pohled stojí na průsečíku několika disciplín.</H2>
        <p className="font-serif text-lg text-ink-2 leading-relaxed">
          SEO · lokální vyhledávání · AI vyhledávání · digitální entity · obsah · důvěryhodnost
        </p>
        <P>
          Digitální entita je firma tak, jak ji chápou vyhledávače: jméno,
          adresa, obor a vazby na další zdroje, které se navzájem potvrzují.
        </P>
        <P>
          Jednotlivé disciplíny nevnímám odděleně. Důležité je, jak společně
          vytvářejí obraz firmy, který mohou vyhledávače a AI systémy
          pochopit a použít.
        </P>
      </Section>

      <Section>
        <H2>Jak pracuji</H2>
        <div className="flex flex-col gap-4">
          {[
            ["01 — Začínám realitou", "Nejdříve testuji, co se skutečně děje."],
            ["02 — Hledám příčinu", "Neřeším pouze symptom. Zajímá mě, proč systém firmu nevidí nebo nedoporučuje."],
            ["03 — Prioritizuji", "Nezahlcuji klienta desítkami úkolů. Hledám zásahy s největším významem."],
            ["04 — Propojuji", "Web, Google, AI, obsah, lokální zdroje, recenze a externí autoritu vnímám jako jeden ekosystém."],
          ].map(([t, d]) => (
            <div key={t} className="border border-rule p-4 sm:p-5">
              <h3 className="mb-1 font-serif text-lg text-ink">{t}</h3>
              <p className="text-[15px] text-ink-2">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <H2>Certifikace a čísla</H2>
        <dl className="mb-8 mt-2 border-t border-rule">
          {[
            ["Certifikace", "HubSpot AEO Fundamentals, 08/2026"],
            ["Otestováno", "přibližně 400 analyzovaných odpovědí AI"],
            ["Obory", "hotely a ubytování, řemeslné služby (čištění fasád), fotografie"],
          ].map(([k, v]) => (
            <div key={k} className="flex flex-col gap-1 border-b border-rule py-4 sm:flex-row sm:gap-6">
              <dt className="flex-none pt-[3px] font-mono text-[13px] tracking-[0.04em] text-muted sm:w-36">{k}</dt>
              <dd className="text-[17px] leading-[1.65] text-ink">{v}</dd>
            </div>
          ))}
        </dl>
        <P>
          V srpnu 2026 jsem absolvovala certifikaci HubSpot AEO Fundamentals
          (ID 64bh5v4s), zaměřenou na optimalizaci pro odpovědi AI systémů.
        </P>
        <P>
          Tento obor bývá označovaný také jako GEO (Generative Engine
          Optimization) nebo AEO (Answer Engine Optimization) — souhrnně pro
          něj používám pojem SEO pro AI vyhledávání: práce na tom, aby vás
          AI systémy jako ChatGPT nebo Přehled od AI v Googlu jmenovaly ve
          svých odpovědích.
        </P>
      </Section>

      <Section>
        <H2>Nejsem agentura.</H2>
        <P>
          Pracuji jako strategický partner. Neprodávám desítky oddělených
          marketingových služeb. Nejprve potřebuji pochopit, kde je problém,
          a potom navrhnout cestu, která odpovídá konkrétní firmě, jejím
          zákazníkům a jejímu trhu.
        </P>
      </Section>

      <Section>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
          <Image
            src="/images/eva-portrait.jpg"
            alt="Eva Sezemská, AI Search Strategist"
            width={220}
            height={220}
            className="h-[220px] w-[220px] flex-none object-cover"
          />
          <div className="flex-1">
            <p className="mb-1 font-serif text-2xl text-ink">Eva Sezemská</p>
            <p className="mb-5 text-[14px] text-muted">AI Search Strategist</p>

            <div className="mb-4">
              <div className="mb-1 font-mono text-[13px] tracking-[0.04em] text-muted">Zaměření</div>
              <p className="text-[14px] text-ink-2">AI vyhledávání · lokální vyhledávání · digitální entity · obsah · důvěryhodnost</p>
            </div>
            <div className="mb-6">
              <div className="mb-1 font-mono text-[13px] tracking-[0.04em] text-muted">Přístup</div>
              <p className="text-[14px] text-ink-2">nezávisle · strategicky · na základě důkazů</p>
            </div>

            <H2>Proč právě AI vyhledávání?</H2>
            <P>
              Fascinuje mě okamžik, kdy technologie začne rozhodovat nejen o
              tom, co člověk najde, ale také o tom, co mu doporučí.
            </P>
            <P>
              A čím víc jsem tento proces zkoumala na konkrétních firmách,
              tím jasnější bylo, že problém často není v tom, že by firma
              neměla co nabídnout. Problém je v tom, že její skutečná
              hodnota není digitálně dostatečně čitelná.
            </P>
          </div>
        </div>
      </Section>

      <Section>
        <H2>Z praxe</H2>
        <P>Pozorování a případové studie z reálné práce s klienty.</P>
        <Link
          href="/field-notes"
          className="inline-block text-base font-semibold text-ink underline decoration-rule underline-offset-[6px]"
        >
          Prozkoumat zápisy z praxe
        </Link>
      </Section>
    </>
  );
}
