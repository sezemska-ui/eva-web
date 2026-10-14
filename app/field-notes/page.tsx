import Link from "next/link";
import { Eyebrow, H1, H2, P, Section } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Notes — Eva Sezemská",
  description:
    "Průvodce AI vyhledáváním a případová studie z praxe: jak Google a AI systémy rozhodují o tom, koho zákazník uvidí.",
  alternates: { canonical: "/field-notes" },
};

type Note = { category: string; date: string; title: string; href: string };

// Obecné články, nejnovější nahoře
const guides: Note[] = [
  {
    category: "Průvodce",
    date: "14. 10. 2026",
    title: "Jak funguje AI vyhledávání a čím se liší od klasického Googlu",
    href: "/field-notes/jak-funguje-ai-vyhledavani",
  },
];

// Díly případové studie v pořadí čtení
const caseStudy: Note[] = [
  {
    category: "AI Search Visibility Audit · Case Note · část 1/4",
    date: "20. 8. 2026",
    title: "Jak AI zaměnila identitu mé klientky — a co to prozradilo o její viditelnosti",
    href: "/field-notes/proc-ai-zamenila-identitu",
  },
  {
    category: "AI Search Strategie · Case Note · část 2/4",
    date: "Září 2026",
    title: "Nový web nestačí. Co jsme museli nasadit, aby ho AI vůbec „přečetla“",
    href: "/field-notes/co-jsme-museli-nasadit",
  },
  {
    category: "Implementace strategie · Case Note · část 3/4",
    date: "15. 9. 2026",
    title: "Strategie nestačí. Jak jsme ji dostali na živý web — a co ukazuje ověření po nasazení.",
    href: "/field-notes/implementace-a-overeni",
  },
  {
    category: "Výsledky a měření · samostatné testování",
    date: "18. 9. 2026",
    title: "Od záměny identity k 23 z 30 doporučení: případová studie AI viditelnosti po 31 dnech",
    href: "/field-notes/vysledky-po-31-dnech",
  },
  {
    category: "Budování AI viditelnosti · Case Note · část 4/4",
    date: "4. 10. 2026",
    title: "Jak budovat AI viditelnost v čase",
    href: "/field-notes/jak-budovat-ai-viditelnost-v-case",
  },
];

function NoteList({ notes }: { notes: Note[] }) {
  return (
    <div className="flex flex-col">
      {notes.map((note) => (
        <Link
          key={note.href}
          href={note.href}
          className="group border-b border-white/10 py-6 transition-colors hover:border-gold/40"
        >
          <div className="mb-2 flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-cream/45">
            <span>{note.category}</span>
            <span>·</span>
            <span>{note.date}</span>
          </div>
          <h3 className="font-serif text-xl text-cream group-hover:text-gold-light transition-colors">
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
        <H2>Průvodce AI vyhledáváním</H2>
        <P>
          Obecné články o tom, jak AI vyhledávání funguje a co znamená pro
          firmy.
        </P>
        <NoteList notes={guides} />
      </Section>

      <Section>
        <H2>Případová studie: fotografka z Českého ráje</H2>
        <P>
          Jak jsme fotografku Michaelu Čížkovou dostali za 31 dní z 6 na 23
          doporučení z 30 a co dělat dál. Díly jsou seřazené v pořadí čtení.
        </P>
        <NoteList notes={caseStudy} />
      </Section>
    </>
  );
}
