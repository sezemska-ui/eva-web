import { H1, H2, P, Section } from "@/components/Ui";
import { ArticleMeta, WhatThisMeans } from "@/components/ArticleParts";
import { ArticleJsonLd, Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Co jsme museli nasadit, aby AI web přečetla — Eva Sezemská",
  description:
    "Druhá část případové studie: jaká technická a strategická rozhodnutí dělají web čitelný pro AI systémy.",
  alternates: { canonical: "/field-notes/co-jsme-museli-nasadit" },
};

export default function Article() {
  return (
    <>
      <ArticleJsonLd
        headline="Nový web nestačí. Co jsme museli nasadit, aby ho AI vůbec „přečetla“"
        description="Případová studie o technickém a strategickém nasazení pro AI viditelnost."
        url="/field-notes/co-jsme-museli-nasadit"
        datePublished="2026-09-01"
      />
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Field Notes", href: "/field-notes" }, { label: "Co jsme museli nasadit" }]} />
        <ArticleMeta category="AI Search Strategie · Case Note" date="Září 2026" />
        <H1>Nový web nestačí. Co jsme museli nasadit, aby ho AI vůbec „přečetla"</H1>
        <P>
          Nový, rychlý, hezký web na Next.js. A přesto by bez dalšího kroku
          zůstal pro AI systémy stejně neviditelný jako ten předchozí. Druhá
          část případové studie ukazuje, jaká konkrétní strategická
          rozhodnutí a technická opatření dělají rozdíl mezi webem pro lidi a
          webem, kterému AI rozumí.
        </P>
      </Section>

      <Section>
        <H2>Technologie webu má význam</H2>
        <P>
          Server-side rendering (SSR) zajišťuje, že AI crawler vidí obsah
          stránky stejně jako běžný návštěvník — na rozdíl od client-side
          renderingu, kde AI musí čekat, než se stránka „dokreslí".
        </P>
      </Section>

      <Section>
        <H2>Schema markup jako „občanský průkaz" firmy</H2>
        <P>
          Strukturovaná data jasně, bez marketingové omáčky říkají AI, kdo
          jste, co nabízíte a kde vás najít. Nasazeny byly typy Person,
          LocalBusiness, OfferCatalog, FAQPage a další, včetně propojení na
          Wikidata pro ověření existence v reálném světě.
        </P>
      </Section>

      <Section>
        <H2>Detaily, které se často přehlížejí</H2>
        <P>
          Title tagy a meta description musí obsahovat konkrétní, přirozeně
          formulovaná klíčová slova a lokalitu — ne obecné marketingové
          fráze. I obrázky mají vlastní SEO: popisné názvy souborů a
          jedinečný ALT text u každé fotky.
        </P>
        <P>
          Blog jako budoucí zdroj odborné autority dlouhodobě podporuje
          důvěryhodnost, kterou AI i lidé vyhodnocují jako důkaz skutečné
          expertízy.
        </P>
      </Section>

      <Section>
        <WhatThisMeans
          points={[
            "Vizuálně hezký web bez technického základu (schema, SSR, správné meta tagy) zůstává pro AI prakticky neviditelný.",
            "Klíčová slova musí být konkrétní a přirozená — obecné fráze jako „kvalitní služby\" AI nic neřeknou.",
            "Strategie není jednorázová oprava — je to soubor návazných kroků, které se ověřují měřením v čase, ne odhadem.",
          ]}
          ctaLabel="Probrat AI Search Strategii →"
          ctaHref="/sluzby/ai-search-strategie"
        />
      </Section>
    </>
  );
}
