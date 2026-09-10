import { Eyebrow, H1, H2, P, Section } from "@/components/Ui";
import ConsultationForm from "@/components/ConsultationForm";
import { Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategická konzultace — Eva Sezemská",
  description:
    "Individuální 60minutová konzultace pro firmy, které nevědí, kde začít s viditelností ve vyhledávání a AI, a potřebují doporučení dalšího kroku.",
  alternates: { canonical: "/sluzby/strategicka-konzultace" },
};

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
        <ConsultationForm />
      </Section>
    </>
  );
}
