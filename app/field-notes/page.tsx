import Link from "next/link";
import { Eyebrow, H1, P, Section } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Notes — Eva Sezemská",
  description:
    "Průvodce AI vyhledáváním a případová studie z praxe: jak Google a AI systémy rozhodují o tom, koho zákazník uvidí.",
  alternates: { canonical: "/field-notes" },
};

type Note = { label: string; title: string; href: string };

// Obecné články, nejnovější nahoře
const guides: Note[] = [
  {
    label: "14. 10. 2026",
    title: "Jak funguje AI vyhledávání a čím se liší od klasického Googlu",
    href: "/field-notes/jak-funguje-ai-vyhledavani",
  },
];

// Díly případové studie v pořadí čtení
const caseStudy: Note[] = [
  {
    label: "Díl 1/4 · 20. 8. 2026",
    title: "Jak AI zaměnila identitu mé klientky — a co to prozradilo o její viditelnosti",
    href: "/field-notes/proc-ai-zamenila-identitu",
  },
  {
    label: "Díl 2/4 · 1. 9. 2026",
    title: "Nový web nestačí. Co jsme museli nasadit, aby ho AI vůbec „přečetla“",
    href: "/field-notes/co-jsme-museli-nasadit",
  },
  {
    label: "Díl 3/4 · 15. 9. 2026",
    title: "Strategie nestačí. Jak jsme ji dostali na živý web — a co ukazuje ověření po nasazení.",
    href: "/field-notes/implementace-a-overeni",
  },
  {
    label: "Mezikrok: výsledky po 31 dnech · 18. 9. 2026",
    title: "Od záměny identity k 23 z 30 doporučení: případová studie AI viditelnosti po 31 dnech",
    href: "/field-notes/vysledky-po-31-dnech",
  },
  {
    label: "Díl 4/4 · 4. 10. 2026",
    title: "Jak budovat AI viditelnost v čase",
    href: "/field-notes/jak-budovat-ai-viditelnost-v-case",
  },
];

// 1 článek, 2–4 články, 5+ článků
function count(n: number, one: string, few: string, many: string) {
  return `${n} ${n === 1 ? one : n >= 2 && n <= 4 ? few : many}`;
}

function NoteList({ notes }: { notes: Note[] }) {
  return (
    <div className="flex flex-col">
      {notes.map((note) => (
        <Link
          key={note.href}
          href={note.href}
          className="group border-b border-white/10 py-5 transition-colors first:pt-0 last:border-b-0 last:pb-0 hover:border-gold/40"
        >
          <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-cream/45">
            {note.label}
          </div>
          <h3 className="font-serif text-xl text-cream transition-colors group-hover:text-gold-light">
            {note.title}
          </h3>
        </Link>
      ))}
    </div>
  );
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
        <Eyebrow>Průvodce · {count(guides.length, "článek", "články", "článků")}</Eyebrow>
        <p className="mb-6 text-[14px] text-cream/60">
          Jak AI vyhledávání funguje a co znamená pro firmy.
        </p>
        <NoteList notes={guides} />
      </Section>

      <Section>
        <Eyebrow>Případová studie · {count(caseStudy.length, "díl", "díly", "dílů")}</Eyebrow>
        <p className="mb-6 text-[14px] text-cream/60">
          Fotografka z Českého ráje: z 6 na 23 doporučení z 30 za 31 dní. Díly
          seřazené v pořadí čtení.
        </p>
        <div className="border-l border-white/15 pl-5">
          <NoteList notes={caseStudy} />
        </div>
      </Section>
    </>
  );
}
