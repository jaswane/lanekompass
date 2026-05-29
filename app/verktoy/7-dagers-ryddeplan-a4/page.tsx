import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PrintButton } from "@/components/print/PrintButton";
import {
  PrintSheet,
  PrintCheckItem,
  PrintHelpBox,
} from "@/components/print/PrintKit";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "7-dagers ryddeplan – gratis A4-arbeidsark",
  description:
    "Skriv ut en rolig ryddeplan på sju dager, med ett lite steg om dagen du kan krysse av for hånd. Gratis, og du trenger ikke oppgi e-post.",
  path: "/verktoy/7-dagers-ryddeplan-a4",
});

const CRUMBS = [
  { name: "Hjem", href: "/" },
  { name: "Verktøy", href: "/verktoy" },
  { name: "7-dagers ryddeplan (A4)", href: "/verktoy/7-dagers-ryddeplan-a4" },
];

const DAYS = [
  {
    day: "Dag 1",
    title: "Finn frem papirene",
    text: "Samle lønnsslipp, kontoutskrifter og regninger på ett sted.",
  },
  {
    day: "Dag 2",
    title: "Skriv ned inntekten",
    text: "Før opp hva du faktisk får inn hver måned. Bruk økonomioversikt-arket.",
  },
  {
    day: "Dag 3",
    title: "Finn faste utgifter",
    text: "Gå gjennom AvtaleGiro, eFaktura og kontoutskrift, og før opp alt som går fast.",
  },
  {
    day: "Dag 4",
    title: "Lag gjeldsoversikt",
    text: "Logg inn på Gjeldsregisteret og fyll ut gjeldsoversikt-arket.",
  },
  {
    day: "Dag 5",
    title: "Se hva som er dyrest",
    text: "Marker gjelden med høyest effektiv rente — den koster deg mest.",
  },
  {
    day: "Dag 6",
    title: "Kutt én ting, ta én telefon",
    text: "Si opp ett abonnement du ikke trenger, og ring én långiver hvis du trenger en avtale.",
  },
  {
    day: "Dag 7",
    title: "Legg en enkel plan",
    text: "Sett opp fast nedbetaling og en dato for å sjekke status. Trenger du hjelp? Ring NAV på 55 55 33 39.",
  },
];

export default function RyddeplanA4Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: `${SITE.url}/verktoy/7-dagers-ryddeplan-a4`,
            name: "7-dagers ryddeplan – A4-arbeidsark",
            description:
              "Gratis A4-ark med en rolig ryddeplan på sju dager, ett steg om dagen.",
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
          title="7-dagers ryddeplan"
          intro="Ett lite steg om dagen i sju dager. Kryss av etter hvert — små steg som faktisk blir gjort, slår en perfekt plan som aldri starter."
          shortLink="lånekompass.no/start"
          qrSrc="/qr/qr-start.svg"
          qrCaption="Skann for å følge 7 steg digitalt."
          sourcesNote={
            <>
              Trenger du å snakke med noen om gjeld? NAV tilbyr gratis økonomi-
              og gjeldsveiledning på 55 55 33 39. Forbrukerrådet har nøytral
              informasjon om lån og budsjett.
            </>
          }
        >
          <PrintHelpBox
            title="Før du starter"
            items={[
              "Ha økonomioversikt- og gjeldsoversikt-arkene klare først",
              "Ett steg om dagen — du trenger ikke gjøre alt på én gang",
            ]}
          />

          <div className="space-y-1">
            {DAYS.map((d) => (
              <PrintCheckItem key={d.day}>
                <strong className="font-semibold text-ink">
                  {d.day} — {d.title}.
                </strong>{" "}
                {d.text}
              </PrintCheckItem>
            ))}
          </div>

          <div className="pt-1">
            <p className="text-xs text-ink/60 mb-1">
              Mitt neste konkrete steg etter disse sju dagene:
            </p>
            <span className="write-line block" aria-hidden />
          </div>
        </PrintSheet>
      </div>
    </>
  );
}
