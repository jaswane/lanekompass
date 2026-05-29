import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PrintButton } from "@/components/print/PrintButton";
import {
  PrintSheet,
  PrintSection,
  PrintCheckItem,
  PrintHelpBox,
} from "@/components/print/PrintKit";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "30-dagers ryddeplan – gratis A4-arbeidsark",
  description:
    "Skriv ut en rolig 30-dagers ryddeplan i fire uker, med små konkrete steg du kan krysse av for hånd. Du trenger ikke oppgi e-post.",
  path: "/verktoy/30-dagers-ryddeplan-a4",
});

const CRUMBS = [
  { name: "Hjem", href: "/" },
  { name: "Verktøy", href: "/verktoy" },
  { name: "30-dagers ryddeplan (A4)", href: "/verktoy/30-dagers-ryddeplan-a4" },
];

const WEEKS = [
  {
    title: "Uke 1 — Skaff oversikt",
    tasks: [
      "Samle lønnsslipp, kontoutskrifter og regninger",
      "Fyll ut økonomioversikt (inntekt og faste utgifter)",
      "Logg inn på Gjeldsregisteret og fyll ut gjeldsoversikt",
    ],
  },
  {
    title: "Uke 2 — Kutt det enkleste",
    tasks: [
      "Si opp minst ett abonnement du ikke trenger",
      "Bytt til e-faktura/AvtaleGiro for å kutte gebyrer",
      "Sett et realistisk månedsbudsjett",
    ],
  },
  {
    title: "Uke 3 — Kontakt og rydd",
    tasks: [
      "Ring én långiver om betalingsutsettelse eller avtale",
      "Sorter gjelden etter effektiv rente (dyreste først)",
      "Vurder om refinansiering er aktuelt — sammenlign total kostnad",
    ],
  },
  {
    title: "Uke 4 — Sett en plan",
    tasks: [
      "Sett opp fast nedbetaling på den dyreste gjelden",
      "Avtal en fast dato i måneden for å sjekke status",
      "Trenger du hjelp? Kontakt NAV gjeldsrådgivning (55 55 33 39)",
    ],
  },
];

export default function RyddeplanA4Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: `${SITE.url}/verktoy/30-dagers-ryddeplan-a4`,
            name: "30-dagers ryddeplan – A4-arbeidsark",
            description:
              "Gratis A4-ark med en rolig 30-dagers ryddeplan i fire uker.",
          }),
          breadcrumbSchema(
            CRUMBS.map((c) => ({ name: c.name, url: `${SITE.url}${c.href}` }))
          ),
        ]}
      />

      <div className="no-print site-container pt-8 pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Breadcrumbs crumbs={CRUMBS} />
        <PrintButton />
      </div>

      <div className="site-container pb-16">
        <PrintSheet
          title="30-dagers ryddeplan"
          intro="Del opp ryddejobben i fire rolige uker. Kryss av etter hvert — små steg som faktisk blir gjort, slår en perfekt plan som aldri starter."
          shortLink="lanekompass.no/start"
          sourcesNote={
            <>
              Trenger du å snakke med noen om gjeld? NAV tilbyr gratis økonomi-
              og gjeldsrådgivning på 55 55 33 39. Forbrukerrådet har nøytral
              informasjon om lån og budsjett.
            </>
          }
        >
          <PrintHelpBox
            title="Før du starter"
            items={[
              "Ha økonomioversikt- og gjeldsoversikt-arkene klare først",
              "Ett steg av gangen — du trenger ikke gjøre alt på én dag",
            ]}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {WEEKS.map((w) => (
              <PrintSection key={w.title} title={w.title}>
                {w.tasks.map((t) => (
                  <PrintCheckItem key={t}>{t}</PrintCheckItem>
                ))}
                <div className="mt-2">
                  <p className="text-xs text-ink/60 mb-1">
                    Min viktigste handling denne uken:
                  </p>
                  <span className="write-line block" aria-hidden />
                </div>
              </PrintSection>
            ))}
          </div>
        </PrintSheet>
      </div>
    </>
  );
}
