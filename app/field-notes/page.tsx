import Link from "next/link";
import { Eyebrow, H1, P, Section } from "@/components/Ui";
import { Breadcrumbs } from "@/components/Seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Notes — Eva Sezemská",
  description:
    "Pozorování, testy a analýzy toho, jak Google, AI systémy a digitální ekosystémy rozhodují o tom, koho zákazník uvidí.",
  alternates: { canonical: "/field-notes" },
};

const notes = [
  {
    n: "01",
    category: "AI Search Visibility Audit · Case Note",
    date: "20. 8. 2026",
    title: "Jak AI zaměnila identitu mé klientky — a co to prozradilo o její viditelnosti",
    href: "/field-notes/proc-ai-zamenila-identitu",
  },
  {
    n: "02",
    category: "AI Search Strategie · Case Note",
    date: "Zář 2026",
    title: "Nový web nestačí. Co jsme museli nasadit, aby ho AI vůbec „přečetla\"",
    href: "/field-notes/co-jsme-museli-nasadit",
  },
];

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
        <div className="flex flex-col">
          {notes.map((note) => (
            <Link
              key={note.n}
              href={note.href}
              className="group border-b border-white/10 py-6 transition-colors hover:border-gold/40"
            >
              <div className="mb-2 flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-cream/45">
                <span className="text-gold">{note.n}</span>
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
      </Section>
    </>
  );
}
