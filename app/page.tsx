import Link from "next/link";
import Image from "next/image";
import {
  BTN_ON_NAVY,
  BTN_PRIMARY,
  BTN_SECONDARY,
  CONSULTATION_HREF,
  LABEL,
  TEXT_LINK,
  WRAP,
} from "@/components/Ui";
import RecommendationTest, {
  TEST_COUNT,
  TEST_QUERY,
  TEST_RECORDED,
  TEST_TOOL,
} from "@/components/RecommendationTest";
import ServicePath from "@/components/ServicePath";
import NoteList from "@/components/NoteList";
import { latestNotes } from "@/lib/fieldNotes";

const CASE_STUDY_HREF = "/field-notes/vysledky-po-31-dnech";
// Přímý odkaz na profil firmy na Googlu s recenzemi
const GOOGLE_REVIEWS_HREF = "https://share.google/K6dCfHNYKXWieBgiI";

const H2 = "font-serif text-[32px] font-normal leading-[1.15] tracking-[-0.005em] text-ink md:text-[40px] lg:text-[48px]";
const BODY = "max-w-[34em] text-[18px] leading-[1.7] text-ink-2";
const SECTION_Y = "py-20 md:py-28 lg:py-40";
const TWO_COLS = "grid grid-cols-1 gap-x-[clamp(48px,6vw,96px)] gap-y-12 md:grid-cols-2";

// Skutečné dotazy z testů pro klienty (viz Z praxe)
const queries = [
  { q: "Chceme s dětmi na víkend do Českého ráje. Doporuč nám ubytování.", obor: "ubytování" },
  { q: "Cena nehraje roli. Kam bys nás poslal?", obor: "ubytování" },
  { q: "Doporuč mi ověřenou firmu na čištění fasády.", obor: "čištění fasád" },
  { q: "Je tahle firma spolehlivá?", obor: "čištění fasád" },
];

export default function Home() {
  return (
    <div data-full-bleed>
      {/* HERO */}
      <section
        className={`${WRAP} grid grid-cols-1 items-center gap-12 pb-20 pt-14 md:pb-28 md:pt-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-24 lg:pb-40 lg:pt-32`}
      >
        <div className="flex flex-col gap-7">
          <p className={LABEL}>Mladá Boleslav a&nbsp;Český ráj — ubytování, řemesla, služby</p>
          <h1 className="font-serif text-[42px] font-light leading-[1.08] tracking-[-0.01em] text-ink md:text-[60px] xl:text-[72px]">
            Doporučí vás AI, když se zákazník zeptá na váš obor?
          </h1>
          <p className="max-w-[34em] text-[18px] leading-[1.7] tracking-[0.005em] text-ink-2 md:text-[21px]">
            Váš zákazník napíše do ChatGPT nebo Googlu „kde najdu dobrý…“
            a&nbsp;AI mu doporučí konkurenci.
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-[17px] font-semibold text-ink">Zjistím pro vás:</p>
            <ul className="flex flex-col gap-2.5">
              {[
                "jestli vás AI doporučuje a na jaké dotazy,",
                "proč dává přednost konkurenci,",
                "co změnit jako první, aby jmenovala i vás.",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-[17px] leading-[1.55] text-ink-2 md:text-[19px]">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-4 flex-none bg-gold" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className={LABEL}>SEO pro AI vyhledávání — aby vás ChatGPT i&nbsp;Google uvedly mezi doporučenými</p>
          <div className="mt-1 flex flex-wrap gap-4">
            <Link href={CONSULTATION_HREF} className={BTN_PRIMARY}>
              Domluvit úvodní konzultaci
            </Link>
            <Link href={CASE_STUDY_HREF} className={BTN_SECONDARY}>
              Přečíst případovou studii
            </Link>
          </div>
        </div>

        <div className="relative sm:pb-14">
          <Image
            src="/images/portret-navy-sako.jpg"
            alt="Eva Sezemská, AI Search Strategist z Mladé Boleslavi"
            width={1717}
            height={2576}
            preload
            sizes="(max-width: 1024px) 100vw, 480px"
            className="ml-auto block aspect-[4/5] w-full max-w-[480px] object-cover"
          />
          {/* Karta Zápis: jediný prvek se stínem */}
          <div className="relative -mt-12 ml-auto mr-3 w-[78%] border border-rule bg-card p-4 shadow-[0_20px_50px_rgba(11,23,38,0.12)] sm:absolute sm:bottom-0 sm:left-0 sm:m-0 sm:w-[min(340px,88%)] sm:p-7">
            <p className="font-mono text-[11px] tracking-[0.04em] text-gold-text sm:text-[12px]">Případová studie — fotografka, Český ráj</p>
            <p className="mb-2 mt-2 font-serif text-[40px] font-light leading-none tracking-[-0.02em] text-ink sm:mb-2.5 sm:mt-3.5 sm:text-[64px]">
              6 → 23
            </p>
            <p className="text-[14px] leading-[1.5] text-ink-2 sm:text-[15px] sm:leading-[1.55]">
              Doporučení ve 30 dotazech napříč třemi AI systémy, na začátku a&nbsp;po 31 dnech.
            </p>
            <p className="mt-3.5 hidden font-mono text-[12px] tracking-[0.04em] text-muted sm:block">3 nástroje, 30 dotazů, 31 dní</p>
          </div>
        </div>
      </section>

      {/* 01 KLIENTI */}
      <section className="bg-paper-2">
        <div className={`${WRAP} ${SECTION_Y} flex flex-col gap-12`}>
          <SectionLabel>01 — co říkají klienti z různých oborů</SectionLabel>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <Review
              quote="„Díky jejímu úsilí je můj web lépe dohledatelný…“"
              author="Michaela Čížková"
              meta="fotografka, Český ráj — recenze na Googlu"
              studyHref={CASE_STUDY_HREF}
            />
            <Review
              quote="„Dostali jsme naprosto skvělé výsledky.“"
              author="Lukáš Kaudl"
              meta="Přijedeme Umyjeme, čištění fasád — Audit AI viditelnosti"
              studyHref="/field-notes/jak-ai-doporucuje-firmu-na-cisteni-fasad"
            />
          </div>
        </div>
      </section>

      {/* 02 KDE SE ROZHODUJE */}
      <section className={`${WRAP} ${SECTION_Y} ${TWO_COLS} items-start`}>
        <div className="flex flex-col gap-6">
          <SectionLabel>02 — kde se rozhoduje</SectionLabel>
          <h2 className={H2}>Vaši zákazníci vás nehledají vždy jménem.</h2>
          <p className={BODY}>
            Tohle jsou skutečné dotazy z&nbsp;mých testů pro klienty. AI na ně
            odpoví jmény konkrétních podniků. Kdo mezi nimi chybí, přijde
            o&nbsp;zákazníka dřív, než si otevře jeho web.
          </p>
        </div>
        <ul className="flex flex-col gap-3">
          {queries.map(({ q, obor }) => (
            <li key={q} className="flex flex-col gap-2 border-l-2 border-gold bg-paper-2 px-5 py-4 md:px-6 md:py-5">
              <span className="font-mono text-[12px] tracking-[0.04em] text-gold-text">{obor}</span>
              <span className="font-serif text-[21px] leading-[1.3] text-ink md:text-[25px]">„{q}“</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 03 TEST DOPORUČENÍ */}
      <section className="bg-paper-2">
        <div className={`${WRAP} ${SECTION_Y} ${TWO_COLS} items-start`}>
          <div className="flex flex-col gap-6">
            <SectionLabel>03 — test doporučení</SectionLabel>
            <h2 className={H2}>Co se stane, když zákazník nezná vaše jméno?</h2>
            <p className={BODY}>
              Tohle je skutečný výstup {TEST_TOOL} na běžný zákaznický dotaz — bez
              jména jakékoli konkrétní firmy, jen s&nbsp;popisem toho, co člověk hledá.
            </p>
            <dl className="mt-4 grid grid-cols-[110px_1fr] items-baseline gap-4 border-t border-rule pt-7 sm:grid-cols-[140px_1fr]">
              <dt className={LABEL}>dotaz</dt>
              <dd className="text-[18px] text-ink">{TEST_QUERY}</dd>
              <dt className={LABEL}>nástroj</dt>
              <dd>
                <span className="inline-block border border-rule px-2.5 py-1 font-mono text-[13px] text-ink-2">
                  {TEST_TOOL}
                </span>
              </dd>
              <dt className={LABEL}>zapsala</dt>
              <dd className="font-mono text-[15px] text-ink">{TEST_RECORDED}</dd>
              <dt className={LABEL}>doporučeno</dt>
              <dd className="font-mono text-[15px] text-ink">{TEST_COUNT} podniků</dd>
            </dl>
            <p className={LABEL}>Stav k&nbsp;datu zápisu. Odpovědi AI se mění.</p>
          </div>
          <RecommendationTest />
        </div>
      </section>

      {/* 04 SLUŽBY */}
      <section className={`${WRAP} ${SECTION_Y} flex flex-col gap-12`}>
        <div className="flex max-w-[760px] flex-col gap-6">
          <SectionLabel>04 — jak vám mohu pomoci</SectionLabel>
          <h2 className={H2}>Každá spolupráce začíná rozhovorem.</h2>
          <p className={BODY}>Další kroky volíte podle toho, co vám dává smysl.</p>
        </div>
        <div>
          <ServicePath compact />
        </div>
        <div>
          <Link href="/pro-koho" className={BTN_SECONDARY}>
            Pro koho pracuji
          </Link>
        </div>
      </section>

      {/* 05 Z PRAXE */}
      <section className="bg-paper-2">
        <div className={`${WRAP} ${SECTION_Y} flex flex-col gap-12`}>
          <div className="flex max-w-[760px] flex-col gap-6">
            <SectionLabel>05 — z praxe</SectionLabel>
            <h2 className={H2}>Co jsem zjistila u&nbsp;firem jako je ta vaše</h2>
            <p className={BODY}>Skutečné testy a&nbsp;výsledky z&nbsp;ubytování, řemesel a&nbsp;služeb.</p>
          </div>
          <NoteList notes={latestNotes(3)} />
          <div>
            <Link href="/field-notes" className={BTN_SECONDARY}>
              Všechny zápisy z praxe
            </Link>
          </div>
        </div>
      </section>

      {/* 06 O AUTORCE */}
      <section className={`${WRAP} ${SECTION_Y} ${TWO_COLS} items-center`}>
        <Image
          src="/images/zapisnik.jpg"
          alt="Ruční poznámky z testování odpovědí AI v zápisníku"
          width={800}
          height={1200}
          sizes="(max-width: 768px) 100vw, 560px"
          className="block aspect-[3/2] w-full object-cover"
        />
        <div className="flex flex-col gap-6">
          <SectionLabel>06 — o autorce</SectionLabel>
          <h2 className={H2}>S&nbsp;kým budete mluvit</h2>
          <p className={BODY}>
            Jsem Eva Sezemská, AI Search Strategist z&nbsp;Mladé Boleslavi.
            Na každé zakázce pracuji osobně: testy dělám sama a&nbsp;výsledky
            vám vysvětlím bez odborných slov.
          </p>
          <div>
            <Link href="/o-mne" className={BTN_SECONDARY}>
              Jak pracuji a&nbsp;s&nbsp;kým
            </Link>
          </div>
        </div>
      </section>

      {/* 07 ZÁVĚREČNÁ VÝZVA */}
      <section className="bg-navy text-on-navy">
        <div className={`${WRAP} ${SECTION_Y} flex flex-col gap-7`}>
          <p className="font-mono text-[13px] tracking-[0.04em] text-on-navy-muted">07 — první krok</p>
          <h2 className="max-w-[16em] font-serif text-[36px] font-light leading-[1.12] tracking-[-0.01em] text-on-navy md:text-[48px] lg:text-[60px]">
            Otázka není, jestli jste online.
          </h2>
          <p className="max-w-[30em] font-serif text-[22px] leading-[1.4] text-on-navy-2 md:text-[28px]">
            Otázka je, jestli jste tou odpovědí, kterou AI dá vašemu zákazníkovi.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Link href={CONSULTATION_HREF} className={BTN_ON_NAVY}>
              Domluvit úvodní konzultaci
            </Link>
            <span className="font-mono text-[13px] tracking-[0.04em] text-gold-on-navy">
              60 min — 4&nbsp;500 Kč, odečte se z&nbsp;auditu
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

// Štítek sekce se zlatou linkou, aby se sekce na mobilu vizuálně oddělily
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-start gap-3 font-mono text-[13px] leading-[1.5] tracking-[0.04em] text-gold-text">
      <span aria-hidden="true" className="mt-[0.75em] h-px w-8 flex-none bg-gold" />
      {children}
    </p>
  );
}

// Citace z recenze na Googlu: podpis, odkaz na studii a na celou recenzi
function Review({
  quote,
  author,
  meta,
  studyHref,
}: {
  quote: string;
  author: string;
  meta: string;
  studyHref: string;
}) {
  return (
    <figure className="flex flex-col gap-5 border border-rule bg-card p-6 shadow-[0_12px_32px_rgba(11,23,38,0.06)] sm:p-8">
      <p className="text-[20px] leading-none tracking-[0.12em] text-gold" aria-label="Hodnocení 5 z 5 hvězdiček">
        ★★★★★
      </p>
      <blockquote className="font-serif text-[26px] leading-[1.3] text-ink md:text-[30px] lg:text-[34px]">
        <p>{quote}</p>
      </blockquote>
      <figcaption className="flex flex-col gap-1 border-t border-rule pt-5">
        <span className="text-[17px] font-semibold text-ink">{author}</span>
        <span className={LABEL}>{meta}</span>
      </figcaption>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <Link href={studyHref} className={`py-3 text-base ${TEXT_LINK}`}>
          Přečíst případovou studii
        </Link>
        <a
          href={GOOGLE_REVIEWS_HREF}
          target="_blank"
          rel="noopener"
          className="py-3 text-base font-medium text-ink-2 underline decoration-rule underline-offset-[6px] hover:text-ink hover:decoration-ink"
        >
          Celá recenze na Googlu
        </a>
      </div>
    </figure>
  );
}
