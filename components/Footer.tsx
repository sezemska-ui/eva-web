import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-4 font-serif text-base text-cream/80">
        Eva <span className="italic text-gold-light">Sezemská</span>
      </div>
      <p className="mb-5 text-[14px] text-cream/60">
        Buďte tam, kde vás zákazníci hledají.
      </p>
      <nav className="mb-5 flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-cream/60">
        <Link href="/sluzby" className="hover:text-cream">Služby</Link>
        <span className="text-cream/20">·</span>
        <Link href="/o-mne" className="hover:text-cream">O mně</Link>
        <span className="text-cream/20">·</span>
        <Link href="/field-notes" className="hover:text-cream">Field Notes</Link>
        <span className="text-cream/20">·</span>
        <Link href="/kontakt" className="hover:text-cream">Kontakt</Link>
        <span className="text-cream/20">·</span>
        <a
          href="https://www.linkedin.com/in/eva-sezemská-466292417/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cream"
        >
          LinkedIn
        </a>
      </nav>
      <div className="font-mono text-[11px] text-cream/40">
        Eva Sezemská · IČO 29800544
      </div>
    </footer>
  );
}
