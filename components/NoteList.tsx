import Link from "next/link";
import { type FieldNote } from "@/lib/fieldNotes";
import { NoteDates } from "./ArticleParts";

// Seznam článků Field Notes: štítek (díl a datum) a název
export default function NoteList({ notes, showPart }: { notes: FieldNote[]; showPart?: boolean }) {
  return (
    <div className="flex flex-col">
      {notes.map((note) => (
        <Link
          key={note.href}
          href={note.href}
          className="group border-b border-white/10 py-5 transition-colors first:pt-0 last:border-b-0 last:pb-0 hover:border-gold/40"
        >
          <div className="mb-2 font-mono text-[11px] uppercase tracking-wider text-cream/45">
            {showPart && note.part ? `${note.part} · ` : ""}
            <NoteDates note={note} />
          </div>
          <h3 className="font-serif text-xl text-cream transition-colors group-hover:text-gold-light">
            {note.title}
          </h3>
        </Link>
      ))}
    </div>
  );
}
