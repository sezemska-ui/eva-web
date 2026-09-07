import Link from "next/link";
import { Eyebrow, H1, P, Section } from "@/components/Ui";

export default function NotFound() {
  return (
    <Section>
      <Eyebrow>404</Eyebrow>
      <H1>Tahle stránka tady není.</H1>
      <P>
        Možná byla přesunuta, nebo jste zadali adresu, která nikdy
        neexistovala. Zkuste se vrátit na začátek.
      </P>
      <Link
        href="/"
        className="mt-4 inline-block rounded-sm bg-cream px-6 py-3 text-sm font-semibold text-navy-deep transition-colors duration-200 hover:bg-gold-light"
      >
        Zpět na domů →
      </Link>
    </Section>
  );
}
