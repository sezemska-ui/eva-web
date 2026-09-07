"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Domů" },
  { href: "/sluzby", label: "Služby" },
  { href: "/o-mne", label: "O mně" },
  { href: "/field-notes", label: "Field Notes" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-serif text-xl tracking-tight text-cream transition-opacity duration-200 hover:opacity-80"
        >
          Eva <span className="italic text-gold-light">Sezemská</span>
        </Link>

        {/* Menu pro počítač */}
        <nav className="hidden sm:flex gap-5">
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
        </nav>

        {/* Tlačítko menu pro mobil */}
        <button
          type="button"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col justify-center gap-[5px] p-2 sm:hidden"
        >
          <span
            className={`block h-px w-6 bg-cream transition-transform duration-200 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-cream transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-6 bg-cream transition-transform duration-200 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Rozbalené menu pro mobil */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-6 py-4 sm:hidden">
          {links.map((l) => {
            const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-2 text-sm transition-colors duration-200 ${
                  active ? "text-cream font-medium" : "text-cream/60 hover:text-cream"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      )}

      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
    </header>
  );
}
