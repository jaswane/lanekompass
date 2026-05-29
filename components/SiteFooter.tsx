import Link from "next/link";
import { SITE } from "@/lib/site";

const COLUMNS = [
  {
    heading: "Kom i gang",
    items: [
      { href: "/rydd-okonomien", label: "Rydd økonomien på 7 steg" },
      { href: "/hvor-finner-du-tallene", label: "Hvor finner du tallene?" },
      { href: "/unngaa-lan", label: "Slik kan du unngå å låne" },
      { href: "/verktoy", label: "Gratis arbeidsark" },
    ],
  },
  {
    heading: "Verktøy",
    items: [
      { href: "/kalkulator/gjeldsoversikt", label: "Gjeldsoversikt" },
      { href: "/kalkulator/refinansiering", label: "Refinansiering" },
      { href: "/verktoy/nar-bor-du-ta-tak", label: "Når bør du ta tak i økonomien?" },
    ],
  },
  {
    heading: "Trygghet",
    items: [
      { href: "/kilder", label: "Offentlige kilder" },
      { href: "/ansvarsfraskrivelse", label: "Ansvarsfraskrivelse" },
      { href: "/personvern", label: "Personvern" },
    ],
  },
  {
    heading: "Om",
    items: [
      { href: "/om", label: "Om Lånekompass.no" },
      { href: "/annonser-og-samarbeid", label: "Annonser og samarbeid" },
    ],
  },
];

export function SiteFooter({ currentYear }: { currentYear: number }) {
  return (
    <footer className="mt-20 border-t border-line bg-surface">
      <div className="site-container py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {COLUMNS.map((col) => (
          <div key={col.heading}>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted mb-3">
              {col.heading}
            </h3>
            <ul className="space-y-2 text-sm">
              {col.items.map((it) => (
                <li key={it.href}>
                  <Link href={it.href} className="text-ink hover:text-accent">
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="site-container py-5">
          <p className="text-xs text-muted leading-relaxed max-w-3xl mx-auto text-center">
            Trenger du å snakke med noen om gjeld? NAV tilbyr gratis økonomi- og
            gjeldsveiledning på telefon{" "}
            <a
              href="https://www.nav.no/okonomi-gjeld"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-accent"
            >
              55 55 33 39
            </a>
            .
          </p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="site-container py-6 text-xs text-muted flex flex-col gap-2 items-center text-center">
          <div className="font-display text-base text-ink">
            Lånekompass<span className="text-accent">.no</span>
          </div>
          <p className="max-w-2xl">
            © {currentYear} {SITE.name} · Et prosjekt fra{" "}
            <a
              href={SITE.company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-accent"
            >
              Swane Creative
            </a>
            . Lånekompass.no er ikke bank, låneformidler eller økonomisk
            rådgiver. Innholdet er generell veiledning, ikke personlig
            økonomisk rådgivning.
          </p>
        </div>
      </div>
    </footer>
  );
}
