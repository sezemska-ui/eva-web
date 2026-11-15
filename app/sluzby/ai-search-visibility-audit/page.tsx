import { Eyebrow, H1, H2, P, Section, CtaBox, FactBox } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import { SITE_URL } from "@/components/SiteJsonLd";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Audit AI viditelnosti — Eva Sezemská",
  description:
    "Zjistím, jak vás dnes vidí ChatGPT, Perplexity a Google AI Overview — a proč AI někdy doporučí konkurenci místo vás.",
  path: "/sluzby/ai-search-visibility-audit",
});

const VIDEO = {
  src: "/videos/ukazka-auditu-ai-viditelnosti.mp4",
  poster: "/images/ukazka-auditu-ai-viditelnosti.webp",
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Ukázka výstupu auditu AI viditelnosti",
  description:
    "Ukázková webová aplikace s výsledky auditu AI viditelnosti pro fiktivní firmu: shrnutí, zjištění s doklady, výsledky testu v ChatGPT, Googlu a Perplexity, srovnání s konkurencí a seznam kroků.",
  thumbnailUrl: `${SITE_URL}${VIDEO.poster}`,
  contentUrl: `${SITE_URL}${VIDEO.src}`,
  uploadDate: "2026-11-15",
  duration: "PT58S",
  inLanguage: "cs",
  publisher: { "@id": `${SITE_URL}/#business` },
};

export default function Audit() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Služby", href: "/sluzby" }, { label: "Audit AI viditelnosti" }]} />
        <Eyebrow>Audit AI viditelnosti</Eyebrow>
        <H1>Nejprve zjistíme, kde skutečně stojíte.</H1>
        <P>
          Než začneme něco optimalizovat, potřebujeme vědět, jak vaši firmu
          skutečně vidí vyhledávače, AI systémy a digitální ekosystém kolem
          vás.
        </P>
        <FactBox
          rows={[
            ["Cena", "20 000–40 000 Kč podle velikosti firmy a webu. Přesnou cenu řeknu po úvodní konzultaci a cenu konzultace odečtu."],
            ["Termín", "Obvykle do 15 pracovních dnů od potvrzení."],
            ["Co dostanete", "Zprávu v PDF, webovou aplikaci s výsledky a 60minutové projití výsledků."],
            ["Váš čas", "Nepotřebuji přístupy do webu. Váš čas zabere jen závěrečné projití, případně pár doplňujících otázek."],
          ]}
        />
      </Section>

      <Section>
        <H2>Možná máte problém, který běžné SEO reporty neukážou.</H2>
        <P>
          Firma může mít kvalitní web, dobré recenze, skvělý produkt,
          sociální sítě, silnou historii — a přesto nebýt doporučována.
        </P>
      </Section>

      <Section>
        <H2>Co audit prověří</H2>
        <ul className="flex flex-col gap-5">
          {[
            ["01 — Viditelnost v AI", "Jestli vás ChatGPT, Perplexity a AI v Googlu doporučí u dotazů, které pokládají vaši zákazníci."],
            ["02 — Chvíle rozhodnutí", "Kdy vás AI zná, a přesto doporučí někoho jiného."],
            ["03 — Konkurence", "Koho AI doporučuje místo vás a čím ji přesvědčil."],
            ["04 — Údaje o firmě", "Jestli vás AI správně pozná: shoduje se název, adresa a telefon všude, kde o vás čte?"],
            ["05 — Obsah webu", "Jestli web odpovídá na otázky, které zákazníci řeší, když se rozhodují."],
            ["06 — Technické základy", "Co brání vyhledávačům a AI web přečíst."],
            ["07 — Důvěryhodnost", "Co o vás říkají jiné zdroje: recenze, katalogy, média."],
          ].map(([t, d]) => (
            <li key={t} className="border-l border-white/15 pl-5">
              <h3 className="mb-1 font-serif text-lg text-cream">{t}</h3>
              <p className="text-[15px] text-cream/75">{d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <H2>Jak testuji</H2>
        <P>
          Každý audit stojí na skutečných testech, ne na odhadech. Dotazy, které
          by položili vaši zákazníci, zadávám ve třech nástrojích – ChatGPT,
          Perplexity a AI v Googlu. Každý dotaz opakuji, protože AI neodpovídá
          pokaždé stejně, a každou odpověď ukládám jako doklad. Ve zprávě
          rozlišuji, co je ověřené, co je pravděpodobné a co je potřeba ještě
          ověřit.
        </P>
      </Section>

      <Section>
        <H2>Ukázka výstupu</H2>
        <P>
          Spolu se zprávou v PDF dostanete webovou aplikaci s výsledky. Ve
          videu je ukázková verze: firma i data jsou vymyšlené, struktura je
          stejná jako u skutečného auditu.
        </P>
        <figure className="mt-6">
          <video
            controls
            muted
            playsInline
            preload="none"
            poster={VIDEO.poster}
            aria-label="Video: ukázka webové aplikace s výsledky auditu AI viditelnosti"
            className="aspect-video w-full rounded-sm border border-white/10 bg-navy-deep"
          >
            <source src={VIDEO.src} type="video/mp4" />
          </video>
          <figcaption className="mt-3 max-w-[65ch] text-[14px] leading-relaxed text-cream/60">
            Video bez zvuku, s titulky, 58 s. Ukazuje shrnutí s hlavními čísly,
            zjištění s doklady, výsledky testu v ChatGPT, Googlu a Perplexity,
            srovnání s konkurencí a seznam kroků, které si odškrtáváte.
          </figcaption>
        </figure>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
      </Section>

      <Section>
        <H2>Nedostanete seznam 87 úkolů.</H2>
        <P>Dostanete jasnou strukturu: co nefunguje, proč na tom záleží, co změnit a co má prioritu.</P>
      </Section>

      <Section>
        <CtaBox title="Zjistěte, koho systémy doporučují místo vás.">
          Prvním krokem je konzultace. Pokud budete pokračovat auditem, cenu
          konzultace odečtu z ceny auditu.
        </CtaBox>
      </Section>
    </>
  );
}
