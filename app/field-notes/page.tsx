import NoteList from "@/components/NoteList";
import { audits, caseStudy, guides, research } from "@/lib/fieldNotes";
import { Eyebrow, H1, P, Section } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Field Notes — Eva Sezemská",
  description:
    "Průvodce AI vyhledáváním, vlastní výzkumy a případové studie z praxe: jak Google a AI systémy rozhodují o tom, koho zákazník uvidí.",
  path: "/field-notes",
});

// 1 článek, 2–4 články, 5+ článků
function count(n: number, one: string, few: string, many: string) {
  return `${n} ${n === 1 ? one : n >= 2 && n <= 4 ? few : many}`;
}

export default function FieldNotes() {
  return (
    <>
      <Section>
        <Breadcrumbs items={[{ label: "Domů", href: "/" }, { label: "Field Notes" }]} />
        <Eyebrow>Field Notes</Eyebrow>
        <H1>Co se skutečně děje ve vyhledávání.</H1>
        <P>
          Pozorování, testy a analýzy toho, jak Google, AI systémy a digitální
          ekosystémy rozhodují o tom, koho zákazník uvidí.
        </P>
      </Section>

      <Section>
        <Eyebrow>
          Výzkumy ·{" "}
          {research.length > 0 ? count(research.length, "výzkum", "výzkumy", "výzkumů") : "připravuji"}
        </Eyebrow>
        <p className="mb-6 text-[14px] text-cream/60">
          Vlastní testy napříč oborem nebo regionem: koho AI doporučuje a proč.
        </p>
        {research.length > 0 ? (
          <NoteList notes={research} />
        ) : (
          <p className="text-[15px] text-cream/75">
            První výzkum vyjde v nejbližších dnech.
          </p>
        )}
      </Section>

      <Section>
        <Eyebrow>Průvodce · {count(guides.length, "článek", "články", "článků")}</Eyebrow>
        <p className="mb-6 text-[14px] text-cream/60">
          Jak AI vyhledávání funguje a co znamená pro firmy.
        </p>
        <NoteList notes={guides} />
      </Section>

      <Section>
        <Eyebrow>Audity AI viditelnosti · {count(audits.length, "studie", "studie", "studií")}</Eyebrow>
        <p className="mb-6 text-[14px] text-cream/60">
          Co ukázal audit AI viditelnosti u konkrétních firem.
        </p>
        <NoteList notes={audits} />
      </Section>

      <Section>
        <Eyebrow>Případová studie · {count(caseStudy.length, "díl", "díly", "dílů")}</Eyebrow>
        <p className="mb-6 text-[14px] text-cream/60">
          Fotografka z Českého ráje: z 6 na 23 doporučení z 30 za 31 dní. Díly
          seřazené v pořadí čtení.
        </p>
        <div className="border-l border-white/15 pl-5">
          <NoteList notes={caseStudy} showPart />
        </div>
      </Section>
    </>
  );
}
