import { Eyebrow, H1, H2, P, Section } from "@/components/Ui";
import ConsultationForm from "@/components/ConsultationForm";
import { Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Strategická konzultace — Eva Sezemská",
  description:
    "Individuální 60minutová konzultace pro firmy, které nevědí, kde začít s viditelností ve vyhledávání a AI, a potřebují doporučení dalšího kroku.",
  path: "/sluzby/strategicka-konzultace",
});

export default function StrategickaKonzultace() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Služby", href: "/sluzby" }, { label: "Strategická konzultace" }]} />
        <Eyebrow>Strategická konzultace</Eyebrow>
        <H1>60 minut na to, abychom zjistili, kde začít.</H1>
        <P>
          Někdy stačí jeden rozhovor, aby bylo jasné, kde je skutečný problém
          a jaký další krok dává smysl.
        </P>

        <div className="mt-6 rounded-sm border border-gold/30 bg-white/5 p-5 sm:p-6">
          <p className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-serif text-3xl text-cream">4 500 Kč</span>
            <span className="text-[14px] text-cream/70">
              nejsem plátce DPH · 60 minut · online nebo osobně
            </span>
          </p>
          <p className="text-[14px] text-cream/70">
            Pokud budete pokračovat AI Search Visibility Auditem, cenu
            konzultace odečtu z ceny auditu.
          </p>
        </div>
      </Section>

      <Section>
        <H2>Proč tato cena</H2>
        <P>
          Na každou konzultaci se připravuji dvě až dvě a půl hodiny předem.
          Projdu váš web, profil na Googlu a otestuji, jak vás dnes vidí AI. Na
          schůzku tak nepřicházím s prázdnýma rukama, ale s prvními zjištěními
          o vaší firmě.
        </P>
      </Section>

      <Section>
        <H2>Konzultace je vždy první krok</H2>
        <P>
          Zjistíme, kde je skutečný problém a jaký další krok dává smysl. A obě
          strany zjistíme, jestli si sedneme. Pokud vám nebudu umět pomoct,
          řeknu vám to rovnou.
        </P>
      </Section>

      <Section>
        <H2>Pro koho je konzultace vhodná</H2>
        <P>
          Pokud si nejste jistí, zda potřebujete Audit, Strategii nebo rovnou
          Implementaci, konzultace vám pomůže se zorientovat dřív, než do
          něčeho investujete.
        </P>
      </Section>

      <Section>
        <H2>Co se v hodině stane</H2>
        <div className="flex flex-col gap-4">
          {[
            ["01", "Popíšete mi svou situaci a to, co vás trápí."],
            ["02", "Podívám se s vámi na to, jak vás dnes vidí vyhledávače a AI."],
            ["03", "Doporučím, jaký další krok dává v tuto chvíli smysl."],
          ].map(([n, t]) => (
            <div key={n} className="flex gap-4 border-b border-white/10 pb-4 last:border-b-0">
              <span className="font-mono text-[13px] text-gold">{n}</span>
              <span className="text-[15px] text-cream/80">{t}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <figure className="rounded-sm border-l-2 border-gold/60 bg-white/5 px-5 py-5 sm:px-6">
          <blockquote className="flex flex-col gap-3 text-[15.5px] leading-relaxed text-cream/80">
            <p>
              „S Evou Sezemskou jsem spolupracovala na vylepšení svého webu a
              její práci mohu jedině doporučit. Díky jejím odborným znalostem v
              oblasti SEO, AI Search a optimalizace webu se jí podařilo společně
              s IT specialistou dotáhnout můj web k dokonalosti.
            </p>
            <p>
              Velmi oceňuji její profesionalitu, flexibilitu, pracovitost a
              důraz na každý detail. Čas věnovaný spolupráci byl vždy maximálně
              efektivně využitý a výsledky její práce mají skutečný přínos pro
              mé podnikání. Díky jejímu úsilí je můj web lépe dohledatelný a mám
              větší šanci oslovit nové klienty.
            </p>
            <p>
              Pokud hledáte někoho, kdo své práci opravdu rozumí, přemýšlí nad
              věcmi v souvislostech a odvádí svou práci s maximální péčí, Evu
              mohu jedině doporučit. Děkuji za skvělou spolupráci! :)“
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
      </Section>

      <Section>
        <ConsultationForm />
      </Section>
    </>
  );
}
