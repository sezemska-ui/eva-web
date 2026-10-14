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
    n: "06",
    category: "Průvodce",
    date: "14. 10. 2026",
    title: "Jak funguje AI vyhledávání a čím se liší od klasického Googlu",
    href: "/field-notes/jak-funguje-ai-vyhledavani",
  },
  {
    n: "01",
    category: "AI Search Visibility Audit · Case Note · část 1/4",
    date: "20. 8. 2026",
    title: "Jak AI zaměnila identitu mé klientky — a co to prozradilo o její viditelnosti",
    href: "/field-notes/proc-ai-zamenila-identitu",
  },
  {
    n: "02",
    category: "AI Search Strategie · Case Note · část 2/4",
    date: "Září 2026",
    title: "Nový web nestačí. Co jsme museli nasadit, aby ho AI vůbec „přečetla“",
    href: "/field-notes/co-jsme-museli-nasadit",
  },
  {
    n: "03",
    category: "Implementace strategie · Case Note · část 3/4",
    date: "15. 9. 2026",
    title: "Strategie nestačí. Jak jsme ji dostali na živý web — a co ukazuje ověření po nasazení.",
    href: "/field-notes/implementace-a-overeni",
  },
  {
    n: "04",
    category: "Výsledky a měření · samostatné testování",
    date: "18. 9. 2026",
    title: "Od záměny identity k 23 z 30 doporučení: případová studie AI viditelnosti po 31 dnech",
    href: "/field-notes/vysledky-po-31-dnech",
  },
  {
    n: "05",
    category: "Budování AI viditelnosti · Case Note · část 4/4",
    date: "4. 10. 2026",
    title: "Jak budovat AI viditelnost v čase",
    href: "/field-notes/jak-budovat-ai-viditelnost-v-case",
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
