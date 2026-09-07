import { H1, H2, P, Section } from "@/components/Ui";
import { ArticleMeta, WhatThisMeans } from "@/components/ArticleParts";
import { ArticleJsonLd, Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jak AI zaměnila identitu mé klientky — Field Notes",
  description:
    "Případová studie z auditu AI viditelnosti: proč AI systémy klientku nedoporučily a jednou dokonce zaměnily za jinou osobu.",
  alternates: { canonical: "/field-notes/proc-ai-zamenila-identitu" },
};

export default function Article() {
  return (
    <>
      <ArticleJsonLd
        headline="Jak AI zaměnila identitu mé klientky — a co to prozradilo o její viditelnosti"
        description="Případová studie z auditu AI viditelnosti fotografky."
        url="/field-notes/proc-ai-zamenila-identitu"
        datePublished="2026-08-20"
      />
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Field Notes", href: "/field-notes" }, { label: "Jak AI zaměnila identitu" }]} />
        <ArticleMeta category="AI Search Visibility Audit · Case Note" date="20. 8. 2026" />
        <H1>Jak AI zaměnila identitu mé klientky — a co to prozradilo o její viditelnosti</H1>
        <P>
          Fotografka s kvalitním portfoliem a spokojenými klienty. A přesto ji
          ve třech ze čtyř AI systémů nedoporučí — a jednou ji dokonce zamění
          za jinou osobu stejného jména. Případová studie z auditu, který
          ukázal, kde přesně se autorita v reálném světě ztrácí cestou do
          digitálního.
        </P>
      </Section>

      <Section>
        <H2>Co testování ukázalo</H2>
        <P>
          Testování napříč ChatGPT, Google AI Overview a Perplexity ukázalo,
          že klientku nedoporučily v naprosté většině zadaných dotazů — ve
          výsledcích se opakovaně objevovala jen 4–5 zavedených jmen s delší
          historií a víc recenzemi.
        </P>
        <P>
          Google AI Overview navíc zaměnil identitu klientky s jinou
          fotografkou stejného jména — jasný signál, že digitální entita
          nebyla dost jasně ukotvená.
        </P>
      </Section>

      <Section>
        <H2>Kde byl skutečný problém</H2>
        <P>
          Problém nebyl v kvalitě práce ani v portfoliu. Byl v tom, že web
          nedával AI ani člověku jasně najevo, kdo klientka je, kde působí a
          jaký typ focení dělá — chyběl schema markup, title tag neobsahoval
          lokalitu, chyběly odborné články i FAQ.
        </P>
        <P>
          Nekonzistentní NAP údaje a nízký počet recenzí (oproti počtu
          reálných klientů) dál oslabovaly důvěryhodnost v očích AI systémů.
        </P>
      </Section>

      <Section>
        <WhatThisMeans
          points={[
            "Kvalitní produkt nebo služba negarantuje, že vás AI doporučí — bez čitelných signálů o vás AI prostě neví dost.",
            "I jedna nesrovnalost v datech (jméno, adresa, telefon) může znamenat, že vás AI zamění s někým jiným, nebo vás radši nezmíní vůbec.",
            "Chybějící struktura (schema markup, jasné nadpisy, lokalita v textu) dělá z kvalitního webu jen vizitku, ne zdroj pravdy pro AI.",
          ]}
          ctaLabel="Probrat AI Search Visibility Audit →"
          ctaHref="/sluzby/ai-search-visibility-audit"
        />
      </Section>
    </>
  );
}
