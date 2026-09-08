import Link from "next/link";
import { H2, P, Section, ServiceCard, CtaBox, Annotated } from "@/components/Ui";
import RecommendationTest from "@/components/RecommendationTest";
import TamMotif from "@/components/TamMotif";
import SignalFlow from "@/components/SignalFlow";

export default function Home() {
  return (
    <>
      {/* 01 HERO */}
      <Section>
        <div className="mb-8 flex items-center justify-between">
          <div className="font-mono text-[11px] uppercase tracking-widest text-cream/45">
            Eva Sezemská — AI Search Strategist · Mladá Boleslav
          </div>
          <div className="hidden font-mono text-[11px] uppercase tracking-widest text-cream/30 sm:block">
            01 / The Search Moment
          </div>
        </div>

        <h1 className="mb-6 font-serif text-4xl leading-[1.15] tracking-tight text-cream md:text-5xl">
          Buďte{" "}
          <span className="italic text-gold-light">tam</span>, kde vás
          zákazníci hledají.
        </h1>

        <p className="mb-10 max-w-[52ch] text-[15px] text-cream/70">
          Když zákazník nezná vaše jméno, nezačíná u vaší značky. Začíná
          otázkou — a tu si dnes čím dál častěji zodpoví ještě předtím, než
          na vás vůbec narazí.
        </p>

        <div className="animate-[fadeInUp_0.8s_ease-out_0.15s_both]">
          <TamMotif />
        </div>

        <div className="mt-10 flex flex-col items-center gap-6">
          <SignalFlow />
          <Link
            href="/sluzby/ai-search-visibility-audit"
            className="inline-block rounded-sm bg-cream px-6 py-3 text-sm font-semibold text-navy-deep transition-colors duration-200 hover:bg-gold-light"
          >
            Zjistit, jak jste vidět →
          </Link>
        </div>
      </Section>

      {/* 02 THE RECOMMENDATION TEST */}
      <Section>
        <H2>Co se stane, když zákazník nezná vaše jméno?</H2>
        <P>
          Tohle je skutečný výstup Google AI na běžný zákaznický dotaz — bez
          jména jakékoli konkrétní firmy, jen s popisem toho, co člověk hledá.
        </P>
        <div className="mt-6">
          <RecommendationTest />
        </div>
      </Section>

      {/* 03 THE PROBLEM */}
      <Section>
        <H2>Vaši zákazníci vás nehledají vždy jménem.</H2>
        <P>
          Kam na víkend? Koho doporučujete pro firemní akci? Který hotel má
          nejlepší wellness? Kterého dodavatele mám vybrat?
        </P>
        <P>
          V těchto momentech se rozhoduje ještě předtím, než zákazník
          navštíví váš web.
        </P>
      </Section>

      {/* 04 THE ECOSYSTEM */}
      <Section>
        <H2>Být online nestačí.</H2>
        <P>
          Web, Google, mapy, recenze, katalogy i zmínky v médiích — všechny
          tyto zdroje společně vytvářejí obraz vaší firmy, ze kterého AI a
          vyhledávače skládají doporučení.
        </P>
        <div className="mt-4 flex flex-wrap justify-center gap-x-2 gap-y-4 text-center text-[13px] text-cream/50">
          <Annotated word="WEBSITE" note="váš vlastní zdroj pravdy" />
          <span className="self-center text-cream/20">+</span>
          <Annotated word="GOOGLE" note="mapy, profil, recenze" />
          <span className="self-center text-cream/20">+</span>
          <Annotated word="MÉDIA" note="zmínky, katalogy" />
          <span className="self-center text-cream/20">→</span>
          <Annotated word="DIGITÁLNÍ ENTITA" note="jak vás AI chápe" />
          <span className="self-center text-cream/20">→</span>
          <Annotated word="DOPORUČENÍ" note="výsledek" />
        </div>
      </Section>

      {/* 05 THE METHOD */}
      <Section>
        <H2>Zjistím, kde se ztrácíte.</H2>
        <div className="flex flex-col gap-4">
          <Annotated word="00 CONSULT" note="když nevíte, kde začít" />
          <Annotated word="01 DISCOVER" note="zjišťuji, co se skutečně děje" />
          <Annotated word="02 DIAGNOSE" note="hledám příčinu, ne jen symptom" />
          <Annotated word="03 STRATEGIZE" note="navrhuji plán a priority" />
          <Annotated word="04 BUILD" note="pomáhám změny reálně nasadit" />
        </div>
      </Section>

      {/* 06 THE PRODUCT */}
      <Section>
        <H2>Kdo dostane doporučení?</H2>
        <div className="flex flex-col gap-6">
          <ServiceCard title="AI Search Visibility Audit">
            Zjistíme, jak vás skutečně vidí Google a AI — testuji konkrétní
            zákaznické scénáře, konkurenci, digitální entitu i technické
            základy.
          </ServiceCard>
          <ServiceCard title="AI Search Strategie">
            Z diagnostiky vytvoříme plán — kde potřebujete být vidět a jaké
            změny k tomu povedou.
          </ServiceCard>
          <ServiceCard title="Implementace strategie">
            Strategie musí skončit změnou. Koordinuji nasazení s vaším
            webmasterem a mluvím oběma jazyky.
          </ServiceCard>
          <ServiceCard title="Digital Authority">
            Budujeme důkazy, které podporují vaši důvěryhodnost napříč
            webem, médii a katalogy.
          </ServiceCard>
          <ServiceCard title="Strategická konzultace">
            Šedesát minut na to, abychom zjistili, kde je problém a jaký
            další krok dává smysl.
          </ServiceCard>
        </div>
        <Link
          href="/sluzby"
          className="mt-6 inline-block text-sm font-semibold text-cream underline decoration-gold/50 underline-offset-4 transition-colors duration-200 hover:decoration-gold"
        >
          Prozkoumat všechny služby →
        </Link>
      </Section>

      {/* 07 THE CONSEQUENCE */}
      <Section>
        <div className="rounded-sm border border-gold/30 bg-white/5 p-6 sm:p-8">
          <h2 className="mb-4 font-serif text-2xl text-cream">
            Možná máte skvělý produkt. Možná skvělé recenze. Možná web, do
            kterého jste investovali statisíce.
          </h2>
          <p className="text-[15.5px] leading-relaxed text-cream/75">
            Ale pokud vás zákazník při rozhodování nenajde, v daném okamžiku
            se to nepočítá. Nejdřív potřebujete vědět, co dnes zákazník
            skutečně vidí.
          </p>
        </div>
      </Section>

      {/* 08 ABOUT PREVIEW */}
      <Section>
        <H2>Dívám se na vyhledávání z druhé strany.</H2>
        <P>
          Eva Sezemská, AI Search Strategist. Zajímá ji, co se stane ve
          chvíli, kdy zákazník nezná jméno firmy a požádá AI, aby mu někoho
          doporučila.
        </P>
        <Link
          href="/o-mne"
          className="inline-block text-sm font-semibold text-cream underline decoration-gold/50 underline-offset-4 transition-colors duration-200 hover:decoration-gold"
        >
          Více o mně →
        </Link>
      </Section>

      {/* FINAL CTA */}
      <Section>
        <CtaBox
          title="Otázka není, jestli jste online."
          href="https://script.google.com/macros/s/AKfycbzP3VLI0hSpFds4PHc9oMsynueY8snUzI_THmtx4B3K8AaZTFh6x-7B7YI1xFBMHg0P/exec"
          ctaLabel="Zjistit, jak jste vidět →"
        >
          Otázka je, jestli jste tou odpovědí, kterou AI dá vašemu
          zákazníkovi.
        </CtaBox>
      </Section>
    </>
  );
}
