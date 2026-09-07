"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Domů" },
  { href: "/sluzby", label: "Služby" },
  { href: "/o-mne", label: "O mně" },
  { href: "/field-notes", label: "Field Notes" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-cream transition-opacity duration-200 hover:opacity-80"
        >
          Eva <span className="italic text-gold-light">Sezemská</span>
        </Link>
        <nav className="flex items-center gap-5">
          {links.map((l) => {
            const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative py-1 text-sm transition-colors duration-200 ${
                  active ? "text-cream font-medium" : "text-cream/60 hover:text-cream"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-gold transition-transform duration-300 ease-out ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href="/kontakt"
            className="hidden rounded-sm bg-gold px-4 py-2 text-[13px] font-semibold text-navy-deep transition-colors duration-200 hover:bg-gold-light sm:inline-block"
          >
            Zjistit, jak jste vidět →
          </Link>
        </nav>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
    </header>
  );
}
