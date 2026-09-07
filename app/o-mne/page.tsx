import Image from "next/image";
import Link from "next/link";
import { Eyebrow, H1, H2, P, Section, Annotated } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O mně — Eva Sezemská",
  description:
    "Dívám se na vyhledávání z druhé strany. Eva Sezemská, AI Search Strategist — jak přemýšlím o AI viditelnosti firem.",
  alternates: { canonical: "/o-mne" },
};

export default function OMne() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "O mně" }]} />
        <Eyebrow>About / Eva Sezemská</Eyebrow>
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
      </Section>

      <Section>
        <H2>Když zákazník zná vaše jméno, je pozdě.</H2>
        <P>
          Pokud zákazník hledá přímo vaši firmu, už o vás pravděpodobně ví.
          Zajímavější je okamžik předtím — když hledá hotel, specialistu,
          řešení, když se ptá, koho by měl vybrat.
        </P>
        <P>A potom: koho mu vyhledávač doporučí? To je přesně tvoje území.</P>
      </Section>

      <Section>
        <H2>Co vlastně dělám</H2>
        <P>
          Pomáhám firmám pochopit, jak jejich digitální přítomnost funguje z
          pohledu vyhledávačů a AI systémů. Neřeším pouze to, zda je firma
          někde online — zajímá mě, zda je dohledatelná, pochopitelná,
          relevantní, důvěryhodná a nakonec doporučitelná.
        </P>
        <div className="mt-4 flex flex-wrap gap-x-1 gap-y-4">
          <Annotated word="FOUND" note="lze vás najít" />
          <span className="self-center text-cream/20">→</span>
          <Annotated word="UNDERSTOOD" note="systémy chápou, kdo jste" />
          <span className="self-center text-cream/20">→</span>
          <Annotated word="RELEVANT" note="odpovídáte záměru" />
          <span className="self-center text-cream/20">→</span>
          <Annotated word="TRUSTED" note="existují důkazy" />
          <span className="self-center text-cream/20">→</span>
          <Annotated word="RECOMMENDED" note="dostanete se mezi možnosti" />
        </div>
      </Section>

      <Section>
        <H2 >Přenáším autoritu firem z reálného světa do digitálního.</H2>
        <P>
          Firma může mít roky zkušeností, stovky spokojených zákazníků,
          skvělou pověst a silné postavení ve svém regionu. Digitální systémy
          ale tuto autoritu nevnímají automaticky.
        </P>
        <P>
          Potřebují ji vidět v datech, obsahu, vztazích, zmínkách, recenzích,
          strukturách a dalších signálech napříč webem. Mojí prací je tyto
          signály identifikovat, propojit a systematicky posilovat.
        </P>
      </Section>

      <Section>
        <H2>Můj pohled stojí na průsečíku několika disciplín.</H2>
        <p className="font-serif text-lg text-cream/80 leading-relaxed">
          SEO · Local Search · AI Search · Digital Entities · Content · Authority
        </p>
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
            <div key={t}>
              <h3 className="mb-1 font-serif text-lg text-cream">{t}</h3>
              <p className="text-[15px] text-cream/75">{d}</p>
            </div>
          ))}
        </div>
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
            src="/images/eva-portrait.png"
            alt="Eva Sezemská, AI Search Strategist"
            width={220}
            height={220}
            className="h-[220px] w-[220px] flex-none rounded-sm object-cover grayscale-[15%]"
          />
          <div className="flex-1">
            <h2 className="mb-1 font-serif text-2xl text-cream">Eva Sezemská</h2>
            <p className="mb-5 text-[14px] text-cream/60">AI Search Strategist</p>

            <div className="mb-4">
              <div className="mb-1 font-mono text-[11px] uppercase tracking-widest text-gold">Focus</div>
              <p className="text-[14px] text-cream/75">AI Search · Local Search · Digital Entities · Content · Authority</p>
            </div>
            <div className="mb-6">
              <div className="mb-1 font-mono text-[11px] uppercase tracking-widest text-gold">Approach</div>
              <p className="text-[14px] text-cream/75">Independent · Strategic · Evidence-led</p>
            </div>

            <H2>Proč právě AI Search?</H2>
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
        <H2>Field Notes</H2>
        <P>Pozorování a případové studie z reálné práce s klienty.</P>
        <Link
          href="/field-notes"
          className="inline-block text-sm font-semibold text-cream underline decoration-gold/50 underline-offset-4"
        >
          Prozkoumat Field Notes →
        </Link>
      </Section>
    </>
  );
}
