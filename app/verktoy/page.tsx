import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { PdfToolCard } from "@/components/PdfToolCard";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Gratis verktøy og arbeidsark",
  description:
    "Gratis A4-arbeidsark og sjekklister: økonomioversikt, gjeldsoversikt og 7-dagers ryddeplan. Skriv ut fra nettleseren — du trenger ikke oppgi e-post.",
  path: "/verktoy",
});

const CRUMBS = [
  { name: "Hjem", href: "/" },
  { name: "Verktøy", href: "/verktoy" },
];

const TOOLS = [
  {
    title: "Økonomioversikt",
    description:
      "A4-ark for å føre opp inntekt og faste utgifter for hånd, slik at du ser hva du har igjen hver måned.",
    href: "/verktoy/okonomioversikt-a4",
  },
  {
    title: "Gjeldsoversikt",
    description:
      "A4-ark for å samle alle lån, kredittkort og smålån med restbeløp, effektiv rente og månedlig betaling.",
    href: "/verktoy/gjeldsoversikt-a4",
  },
  {
    title: "7-dagers ryddeplan",
    description:
      "A4-ark med en rolig plan som deler opp ryddejobben i ett lite steg om dagen i sju dager.",
    href: "/verktoy/7-dagers-ryddeplan-a4",
  },
];

export default function VerktoyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: `${SITE.url}/verktoy`,
            name: "Gratis verktøy og arbeidsark",
            description:
              "Gratis PDF-er og sjekklister for å få oversikt over økonomien.",
          }),
          breadcrumbSchema(
            CRUMBS.map((c) => ({ name: c.name, url: `${SITE.url}${c.href}` }))
          ),
        ]}
      />

      <PageHeader
        kicker="Gratis arbeidsark"
        title="Verktøy som hjelper deg i gang"
        lede="Gratis A4-arbeidsark og sjekklister, eller bruk de digitale verktøyene direkte. Alt er gratis — du trenger ikke oppgi e-post."
        crumbs={CRUMBS}
      />

      <div className="narrow-container pb-10 space-y-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {TOOLS.map((t) => (
            <PdfToolCard
              key={t.title}
              title={t.title}
              description={t.description}
              href={t.href}
            />
          ))}
        </div>

        <p className="text-sm text-muted text-center">
          Arkene kan skrives ut rett fra nettleseren nå, og blir senere
          tilgjengelige som nedlastbar PDF. Du trenger aldri å oppgi e-post, og
          ingenting du skriver på arket sendes til oss.
        </p>

        <div className="card p-6 sm:p-7">
          <h2 className="font-display text-xl text-ink tracking-display">
            Usikker på om du bør ta tak nå?
          </h2>
          <p className="mt-2 text-muted leading-relaxed">
            Ta den korte, varsomme sjekklisten. Den hjelper deg å kjenne igjen
            faresignaler — og lagres kun i din egen nettleser.
          </p>
          <Link
            href="/verktoy/nar-bor-du-ta-tak"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-4"
          >
            Åpne sjekklisten «Når bør du ta tak i økonomien?»
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </div>

        <DisclaimerBox />
      </div>
    </>
  );
}
