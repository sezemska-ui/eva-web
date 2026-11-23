import Link from "next/link";
import { BTN_PRIMARY, Eyebrow, H1, P, Section } from "@/components/Ui";

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
        className={`mt-4 ${BTN_PRIMARY}`}
      >
        Zpět na úvod
      </Link>
    </Section>
  );
}
