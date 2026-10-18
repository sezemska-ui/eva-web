import Link from "next/link";
import Image from "next/image";
import { H2, P, Section, CtaBox, BigNumber, ConsultationButton } from "@/components/Ui";
import RecommendationTest from "@/components/RecommendationTest";
import TamMotif from "@/components/TamMotif";
import ServicePath from "@/components/ServicePath";
import NoteList from "@/components/NoteList";
import { latestNotes } from "@/lib/fieldNotes";

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

        <div className="mt-10 flex justify-center">
          <ConsultationButton tone="light" />
        </div>
      </Section>

      {/* 02 VÝSLEDKY A RECENZE */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <BigNumber n="z 6 na 23" label="doporučení z 30 za 31 dní" />
            <p className="mb-4 mt-4 text-[15.5px] leading-relaxed text-cream/75">
              Fotografka Michaela Čížková z Českého ráje. Tři AI systémy
              (ChatGPT, Google AI Overview a Perplexity) ji na začátku
              doporučily v 6 z 30 testovaných zákaznických dotazů. Po 31 dnech
              úprav ve 23.
            </p>
            <Link href="/field-notes/vysledky-po-31-dnech" className="inline-block text-sm font-semibold text-cream underline decoration-gold/50 underline-offset-4 transition-colors duration-200 hover:decoration-gold">
              Celá případová studie →
            </Link>
          </div>
          <figure className="rounded-sm border-l-2 border-gold/60 bg-white/5 px-5 py-5 sm:px-6">
            <blockquote className="text-[15.5px] leading-relaxed text-cream/80">
              <p>
                „Díky jejímu úsilí je můj web lépe dohledatelný a mám větší
                šanci oslovit nové klienty. (…) Pokud hledáte někoho, kdo své
                práci opravdu rozumí, přemýšlí nad věcmi v souvislostech a
                odvádí svou práci s maximální péčí, Evu mohu jedině doporučit.“
              </p>
            </blockquote>
            <figcaption className="mt-4 font-mono text-[12px] text-cream/55">
              Michaela Čížková, fotografka ·{" "}
              <a
                href="https://www.google.com/search?kgmid=/g/11zhdhh8r6"
                target="_blank"
                rel="noopener"
                className="underline decoration-gold/40 underline-offset-4 hover:text-cream/80 hover:decoration-gold"
              >
                recenze na Googlu
              </a>
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* 03 PROBLÉM */}
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

      {/* 03 RECOMMENDATION TEST */}
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

      {/* 04 JAK VÁM MOHU POMOCI */}
      <Section>
        <H2>Jak vám mohu pomoci</H2>
        <ServicePath />
        <Link href="/pro-koho" className="mt-6 inline-block text-sm font-semibold text-cream underline decoration-gold/50 underline-offset-4 transition-colors duration-200 hover:decoration-gold">
          Pro koho pracuji →
        </Link>
      </Section>

      {/* 05 JAK PŘEMÝŠLÍM */}
      <Section>
        <H2>Jak přemýšlím</H2>
        <p className="mb-6 text-[15.5px] leading-relaxed text-cream/75">
          Pozorování a případové studie z reálné práce s klienty.
        </p>
        <NoteList notes={latestNotes(3)} />
        <Link href="/field-notes" className="mt-6 inline-block text-sm font-semibold text-cream underline decoration-gold/50 underline-offset-4 transition-colors duration-200 hover:decoration-gold">
          Všechny články →
        </Link>
      </Section>

      {/* 06 O MNĚ */}
      <Section>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
          <Image
            src="/images/eva-portrait-laptop.png"
            alt="Eva Sezemská, AI Search Strategist z Mladé Boleslavi"
            width={220}
            height={220}
            className="h-[220px] w-[220px] flex-none rounded-sm object-cover grayscale-[15%]"
          />
          <div>
            <H2>Dívám se na vyhledávání z druhé strany.</H2>
            <P>
              Jsem Eva Sezemská, AI Search Strategist z Mladé Boleslavi.
              Zajímá mě, co se stane ve chvíli, kdy zákazník nezná jméno
              firmy a požádá AI, aby mu někoho doporučila.
            </P>
            <Link
              href="/o-mne"
              className="inline-block text-sm font-semibold text-cream underline decoration-gold/50 underline-offset-4 transition-colors duration-200 hover:decoration-gold"
            >
              Více o mně →
            </Link>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section>
        <CtaBox title="Otázka není, jestli jste online.">
          Otázka je, jestli jste tou odpovědí, kterou AI dá vašemu
          zákazníkovi.
        </CtaBox>
      </Section>
    </>
  );
}
