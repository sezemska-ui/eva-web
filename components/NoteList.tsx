import Link from "next/link";
import { type FieldNote } from "@/lib/fieldNotes";
import { NoteDates } from "./ArticleParts";

// Seznam článků z praxe: řádky s linkami, název vlevo, díl a datum mono písmem
export default function NoteList({ notes, showPart }: { notes: FieldNote[]; showPart?: boolean }) {
  return (
    <ul className="border-b border-rule">
      {notes.map((note) => (
        <li key={note.href} className="border-t border-rule">
          <Link
            href={note.href}
            className="group flex flex-wrap items-baseline justify-between gap-x-12 gap-y-3 py-7 text-ink"
          >
            <span className="min-w-0 flex-[1_1_420px] font-serif text-[22px] leading-[1.3] decoration-rule underline-offset-[5px] group-hover:underline md:text-[26px]">
              {note.title}
            </span>
            <span className="font-mono text-[13px] tracking-[0.04em] text-muted">
              {showPart && note.part ? `${note.part} · ` : ""}
              <NoteDates note={note} />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
