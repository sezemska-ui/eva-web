import Link from "next/link";
import { H1, H2, P, Section } from "@/components/Ui";
import { ArticleMeta, WhatThisMeans, RelatedNotes } from "@/components/ArticleParts";
import { ArticleJsonLd, Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Od strategie k nasazení — Eva Sezemská",
  description:
    "Případová studie: spolupráce s webmasterem, implementace AI viditelnosti a co odhalilo ověření po nasazení — zrychlení načítání z 14,5 s na 2,9 s.",
  alternates: { canonical: "/field-notes/implementace-a-overeni" },
};

export default function Article() {
  return (
    <>
      <ArticleJsonLd
        headline="Strategie nestačí. Jak jsme ji dostali na živý web — a co ukazuje ověření po nasazení."
        description="Případová studie o implementaci AI viditelnosti fotografky ve spolupráci s webmasterem a o ověření výsledků po nasazení."
        url="/field-notes/implementace-a-overeni"
        datePublished="2026-09-15"
      />
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Field Notes", href: "/field-notes" }, { label: "Od strategie k nasazení" }]} />
        <ArticleMeta category="Implementace strategie · Case Note" date="15. 9. 2026" />
        <H1>
          Strategie nestačí. Jak jsme ji dostali na živý web — a co ukazuje
          ověření po nasazení.
        </H1>
        <P>
          Dobrá strategie AI viditelnosti je jen plán. Aby fungovala, musí ji
          někdo skutečně nasadit — a pak ověřit, že to, co mělo být hotové,
          opravdu funguje tak, jak má. Tohle je záznam obojího: spolupráce s
          webmasterem na implementaci a to, co odhalila kontrola po spuštění.
        </P>
      </Section>

      <Section>
        <H2>Jak probíhala spolupráce s webmasterem?</H2>
        <P>
          Implementace probíhala v úzké spolupráci s webmasterem Michalem
          Jirákem, který web technicky realizoval na Next.js a Sanity CMS.
          Celá komunikace proběhla na dálku — bez jediné dlouhé osobní
          schůzky, jen s jedním telefonátem těsně před spuštěním.
        </P>
        <P>
          Místo posílání jednotlivých souborů e-mailem jsme podklady sdíleli
          přes Notion, kam jsem postupně vkládala hotové kroky (včetně code
          bloků pro schema.org) i klientčinu zpětnou vazbu k designu. Každá
          nová položka měla datum poslední aktualizace, aby webmaster věděl,
          co je nové.
        </P>
      </Section>

      <Section>
        <H2>Co jsme pro AI viditelnost postupně implementovali?</H2>
        <P>
          Postup měl jasné pořadí: nejdřív technický základ, pak strukturovaná
          data a obsah, až nakonec doplňkové kroky pro dlouhodobou autoritu.
        </P>
        <ul className="flex flex-col gap-3">
          <li className="text-[15px] text-cream/80">
            <span className="font-semibold text-cream">Technický základ</span>{" "}
            — server-side rendering (Next.js), robots.txt a sitemap, aby byl
            web vůbec dostupný a čitelný pro crawling.
          </li>
          <li className="text-[15px] text-cream/80">
            <span className="font-semibold text-cream">
              Strukturovaná data a obsah
            </span>{" "}
            — schema markup (Person, LocalBusiness/ProfessionalService,
            OfferCatalog, WebSite, WebPage, FAQPage, ImageObject) propojený s
            Wikidaty míst, title tagy, geo meta tagy a viditelná FAQ sekce.
          </li>
          <li className="text-[15px] text-cream/80">
            <span className="font-semibold text-cream">Obsah fotek</span> —
            přejmenování souborů fotografií (např.
            rodinne-foceni-jicin.png) a alt popisky, které si klientka
            spravuje sama přímo v Sanity CMS.
          </li>
          <li className="text-[15px] text-cream/80">
            <span className="font-semibold text-cream">Blog</span> — nová
            sekce, kterou webmaster propojil tak, že každý nový článek
            automaticky vygeneruje i vlastní BlogPosting schema.
          </li>
          <li className="text-[15px] text-cream/80">
            <span className="font-semibold text-cream">llms.txt</span> —
            nasazený přímo webmasterem na server.
          </li>
        </ul>
        <P>
          Design a obsah šly ruku v ruce se stejnou pečlivostí: do hero sekce
          bylo potřeba přidat, kdo klientka je — "Fotografka z Českého ráje" —
          a lokality, kde působí, aniž by to narušilo dominantní postavení
          jejího jména. Řešením bylo menší písmo, verzálky a nižší
          průhlednost pro popisek i lokality.
        </P>
      </Section>

      <Section>
        <H2>Jak jsme ověřovali, že všechno skutečně funguje?</H2>
        <P>
          Web byl spuštěn 18. 8. 2026, pod tlakem končícího starého hostingu.
          Vyhodnocení jsem proto stavěla na vlastním testování — před
          spuštěním se klientka v Google rankingu pohybovala zhruba na 4.–5.
          straně, srovnávací analytická data z původního webu chybí, protože
          tam nebyla nasazená.
        </P>
        <P>
          Neformální testování konkrétních dotazů v ChatGPT, Google AI
          Overview a Perplexity ukázalo zlepšení oproti květnu. Až s
          odstupem ale technická validace na produkci odhalila nesrovnalost:
          schema.org validátor našel neplatnou hodnotu "Photographer" místo
          správného "LocalBusiness" jako součásti typu business entity — ne
          kritická chyba, ale stálo za to ji opravit kvůli čistotě dat.
        </P>
        <P>
          Test v PageSpeed Insights zase v sekci "Procházení agenty" odhalil,
          že odkazy na podstránky služeb chyběly hned u výčtu služeb a byly
          až na konci souboru — přesunula jsem je přímo k příslušným sekcím.
          Stejný test zachytil i výrazné zrychlení načítání hlavního obsahu
          stránky (LCP):
        </P>
        <div className="grid grid-cols-2 gap-6 rounded-sm border border-white/10 p-5">
          <div>
            <div className="mb-1 font-mono text-[11px] uppercase tracking-widest text-cream/45">
              LCP — duben 2026
            </div>
            <div className="font-serif text-3xl text-cream">14,5 s</div>
          </div>
          <div>
            <div className="mb-1 font-mono text-[11px] uppercase tracking-widest text-cream/45">
              LCP — září 2026
            </div>
            <div className="font-serif text-3xl text-gold-light">2,9 s</div>
          </div>
        </div>
        <P>
          Projekt je stále v rané fázi a výsledky zatím nejde přičítat
          jednotlivým úpravám izolovaně. V dalších dílech budu pracovat se
          standardizovanými testy stejných dotazů a sledovat vývoj v čase —
          přesně to shrnuje článek{" "}
          <Link href="/field-notes/vysledky-po-31-dnech" className="text-cream underline decoration-gold/40 underline-offset-4 hover:decoration-gold">
            Od záměny identity k 23 z 30 doporučení
          </Link>
          , kde porovnávám výsledky po 31 dnech provozu.
        </P>
      </Section>

      <Section>
        <WhatThisMeans
          points={[
            "Strategie bez implementace zůstává jen dokumentem — potřebuje webmastera, jasnou komunikaci a někoho, kdo hlídá pořadí kroků.",
            "Automatická validace (schema.org, PageSpeed Insights) najde chyby, které při běžném testování přehlédnete — stojí za to je po nasazení projít ručně.",
            "Rychlost načítání není jen otázka pohodlí uživatele — ovlivňuje i to, jak snadno vás dokážou přečíst vyhledávače a AI systémy.",
          ]}
          ctaLabel="Probrat Implementaci strategie →"
          ctaHref="/sluzby/implementace-strategie"
        />
      </Section>

      <Section>
        <RelatedNotes
          notes={[
            { title: "Jak AI zaměnila identitu mé klientky", href: "/field-notes/proc-ai-zamenila-identitu" },
            { title: "Co jsme museli nasadit, aby AI web přečetla", href: "/field-notes/co-jsme-museli-nasadit" },
            { title: "Od záměny identity k 23 z 30 doporučení", href: "/field-notes/vysledky-po-31-dnech" },
          ]}
        />
      </Section>
    </>
  );
}
