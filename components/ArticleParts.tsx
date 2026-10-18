import Link from "next/link";
import Image from "next/image";
import { CONSULTATION_HREF, ConsultationButton } from "./Ui";
import { formatNoteDate, getNote, type FieldNote } from "@/lib/fieldNotes";

// „Publikováno 14. 10. 2026“, případně „· Aktualizováno …“, data bere z lib/fieldNotes.ts
export function NoteDates({ note }: { note: FieldNote }) {
  return (
    <>
      Publikováno {formatNoteDate(note.datePublished)}
      {note.dateModified !== note.datePublished && ` · Aktualizováno ${formatNoteDate(note.dateModified)}`}
    </>
  );
}

export function ArticleMeta({ category, href }: { category: string; href: string }) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-cream/45">
      <span className="text-gold">{category}</span>
      {/* Tečka jen na širší obrazovce, na mobilu by po zalomení zůstala sama */}
      <span className="sm:before:mr-3 sm:before:content-['·']">
        <NoteDates note={getNote(href)} />
      </span>
    </div>
  );
}

// Box o autorce pod každým článkem
export function AuthorBox() {
  const linkClass =
    "text-sm font-semibold text-cream underline decoration-gold/50 underline-offset-4 transition-colors duration-200 hover:decoration-gold";
  return (
    <div className="mt-10 flex gap-4 rounded-sm first:mt-0 border border-gold/30 bg-white/5 p-5 sm:p-6">
      <Image
        src="/images/eva-portrait.png"
        alt="Eva Sezemská"
        width={56}
        height={56}
        className="h-14 w-14 flex-none rounded-full object-cover"
      />
      <div>
        <p className="mb-3 text-[15px] text-cream/80">
          Eva Sezemská, AI Search Strategist z Mladé Boleslavi. Pomáhám firmám,
          aby je vyhledávače a AI správně pochopily a doporučily.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/o-mne" className={linkClass}>
            O mně →
          </Link>
          <Link href={CONSULTATION_HREF} className={linkClass}>
            Domluvit konzultaci →
          </Link>
        </div>
      </div>
    </div>
  );
}

export function WhatThisMeans({ points }: { points: string[] }) {
  return (
    <div className="mt-10 rounded-sm bg-cream p-8 text-ink">
      <h2 className="mb-4 font-serif text-xl text-ink">Co to znamená pro váš byznys</h2>
      <ol className="mb-6 flex flex-col gap-2">
        {points.map((p, i) => (
          <li key={i} className="flex gap-3 text-[15px] text-[#3a3428]">
            <span className="flex-none font-mono text-[13px] text-gold">{i + 1}</span>
            <span>{p}</span>
          </li>
        ))}
      </ol>
      <ConsultationButton />
    </div>
  );
}

export function RelatedNotes({
  notes,
}: {
  notes: { title: string; href: string }[];
}) {
  return (
    <div className="mt-10">
      <div className="mb-4 font-mono text-[11px] uppercase tracking-widest text-cream/45">
        Další field notes
      </div>
      <div className="flex flex-col gap-4">
        {notes.map((note) => (
          <Link
            key={note.href}
            href={note.href}
            className="text-[15px] text-cream/80 underline decoration-gold/30 underline-offset-4 transition-colors duration-200 hover:text-gold-light hover:decoration-gold"
          >
            {note.title} →
          </Link>
        ))}
      </div>
    </div>
  );
}
