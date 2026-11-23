import Link from "next/link";
import Image from "next/image";
import { CONSULTATION_HREF, ConsultationButton, LABEL, TEXT_LINK } from "./Ui";
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
    <div className={`mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 ${LABEL}`}>
      <span className="text-ink">{category}</span>
      {/* Tečka jen na širší obrazovce, na mobilu by po zalomení zůstala sama */}
      <span className="sm:before:mr-3 sm:before:content-['·']">
        <NoteDates note={getNote(href)} />
      </span>
    </div>
  );
}

// Box o autorce pod každým článkem
export function AuthorBox() {
  const linkClass = `py-2 text-base ${TEXT_LINK}`;
  return (
    <div className="mt-14 flex gap-5 border-y border-rule py-7 first:mt-0">
      <Image
        src="/images/eva-portrait.jpg"
        alt="Eva Sezemská"
        width={56}
        height={56}
        className="h-14 w-14 flex-none object-cover"
      />
      <div>
        <p className="mb-2 max-w-[56ch] text-[17px] leading-[1.65] text-ink-2">
          Eva Sezemská, AI Search Strategist z Mladé Boleslavi. Pomáhám firmám,
          aby je vyhledávače a AI správně pochopily a doporučily.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/o-mne" className={linkClass}>
            O mně
          </Link>
          <Link href={CONSULTATION_HREF} className={linkClass}>
            Domluvit konzultaci
          </Link>
        </div>
      </div>
    </div>
  );
}

export function WhatThisMeans({ points }: { points: string[] }) {
  return (
    <div className="mt-14 bg-paper-2 px-6 py-10 sm:px-10">
      <h2 className="mb-6 font-serif text-[28px] leading-[1.25] text-ink">Co to znamená pro váš byznys</h2>
      <ol className="mb-8 flex flex-col border-t border-rule">
        {points.map((p, i) => (
          <li key={i} className="flex gap-5 border-b border-rule py-3.5 text-[17px] leading-[1.65] text-ink-2">
            <span className="w-6 flex-none pt-[3px] font-mono text-[13px] text-muted">{String(i + 1).padStart(2, "0")}</span>
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
    <div className="mt-14">
      <div className={`mb-4 ${LABEL}`}>Další zápisy z praxe</div>
      <div className="flex flex-col border-t border-rule">
        {notes.map((note) => (
          <Link
            key={note.href}
            href={note.href}
            className="border-b border-rule py-4 font-serif text-[21px] leading-[1.35] text-ink decoration-rule underline-offset-[5px] hover:underline"
          >
            {note.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
