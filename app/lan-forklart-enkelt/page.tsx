import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { OfficialSourcesBox } from "@/components/OfficialSourcesBox";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Lån forklart enkelt – rente, gebyrer og effektiv rente på vanlig norsk",
  description:
    "Forstå lån, renter, gebyrer og hvorfor lavt månedsbeløp kan bli dyrt — uten finansprat. En enkel veiviser før du tar opp eller refinansierer lån.",
  path: "/lan-forklart-enkelt",
});

const CRUMBS = [
  { name: "Hjem", href: "/" },
  { name: "Lån forklart enkelt", href: "/lan-forklart-enkelt" },
];

const READING_PATH = [
  {
    href: "/effektiv-rente-forklart",
    title: "Effektiv rente forklart enkelt",
    body: "Det ekte tallet på hvor mye lånet koster — renter + alle gebyrer i ett.",
  },
  {
    href: "/kredittkortgjeld-forklart",
    title: "Kredittkortgjeld forklart enkelt",
    body: "Hvorfor kredittkort blir dyrt, og hva du bør gjøre hvis du bare betaler minstebeløp.",
  },
  {
    href: "/refinansiering-forklart",
    title: "Refinansiering forklart enkelt",
    body: "Når kan det hjelpe, og når gjør det ting dyrere? Balansert forklart.",
  },
  {
    href: "/kontakte-kreditor",
    title: "Slik kontakter du kreditor",
    body: "Praktisk veiledning hvis du sliter med å betale — hva du bør si og spørre om.",
  },
];

const TOOLS = [
  {
    href: "/rydd-okonomien",
    title: "Rydd økonomien på 7 steg",
    body: "Få oversikt over inntekt, faste utgifter og gjeld før du gjør noe annet.",
  },
  {
    href: "/kalkulator/gjeldsoversikt",
    title: "Gjeldsoversikt-kalkulator",
    body: "Samle all gjeld og se samlet beløp og månedlig betaling.",
  },
  {
    href: "/kalkulator/refinansiering",
    title: "Refinansieringskalkulator",
    body: "Sammenlign dagens gjeld mot et nytt lån — se hele kostnaden.",
  },
  {
    href: "/unngaa-lan",
    title: "Slik kan du unngå å låne",
    body: "Praktiske grep før du tar opp lån eller bruker kreditt.",
  },
];

export default function LanForklartEnkeltPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: `${SITE.url}/lan-forklart-enkelt`,
            name: "Lån forklart enkelt",
            description:
              "Forstå lån, renter og gebyrer på vanlig norsk.",
          }),
          breadcrumbSchema(
            CRUMBS.map((c) => ({ name: c.name, url: `${SITE.url}${c.href}` }))
          ),
        ]}
      />

      <PageHeader
        kicker="Lån forklart enkelt"
        title="Lån forklart enkelt"
        lede="Lån, renter og gebyrer trenger ikke være vanskelig. Her er det viktigste i klartekst — uten finansprat — slik at du kan ta gode valg på et trygt grunnlag."
        crumbs={CRUMBS}
      />

      <div className="narrow-container pb-10 space-y-6 prose-soft text-ink/90 leading-relaxed">
        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Hva er egentlig et lån?
        </h2>
        <p>
          Et lån er at noen — som regel en bank — gir deg penger nå, og du
          betaler tilbake litt av gangen. I tillegg til selve summen betaler du
          for å låne. Det er det vi kaller renter og gebyrer.
        </p>

        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Hva er rente?
        </h2>
        <p>
          Rente er prisen for å låne. Den oppgis i prosent per år. Låner du
          100 000 kroner med 8 % rente, betaler du i utgangspunktet rundt
          8 000 kroner i renter det første året. Jo høyere rente, jo dyrere lån.
        </p>

        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Hva er gebyrer?
        </h2>
        <p>
          Gebyrer er småbeløp som kommer i tillegg til renten. Et lån har ofte
          et <strong>etableringsgebyr</strong> som betales én gang i starten, og
          et <strong>termingebyr</strong> som trekkes hver måned. Hver for seg
          virker de små, men over flere år blir summen mye penger.
        </p>

        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Hvorfor effektiv rente er det viktigste tallet
        </h2>
        <p>
          Effektiv rente er renten <em>pluss</em> alle gebyrer, samlet i ett
          prosenttall. Det er det ekte tallet for hvor mye lånet koster. To lån
          kan ha samme «vanlige» rente, men ulike gebyrer — da er det effektiv
          rente som viser hvilket lån som faktisk er billigst.
        </p>
        <p>
          <Link href="/effektiv-rente-forklart">
            Les mer om effektiv rente med et konkret eksempel →
          </Link>
        </p>

        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Hvorfor lavt månedsbeløp kan bli dyrt
        </h2>
        <p>
          Mange banker tilbyr å strekke nedbetalingen over mange år, slik at
          månedsbeløpet ser lite ut. Problemet er at du betaler renter i mye
          lengre tid. Du kan ende opp med å betale tusenvis av kroner mer enn
          om du hadde hatt et høyere månedsbeløp og blitt ferdig raskere.
        </p>
        <p>
          Sammenlign alltid <strong>total kostnad</strong> — altså hva du har
          betalt når lånet er ferdig — ikke bare månedsbeløpet.
        </p>

        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Få oversikt før du søker nytt lån
        </h2>
        <p>
          Det enkleste, og ofte viktigste, steget kommer før selve lånet: vit
          hva du faktisk har av inntekt, faste utgifter og gjeld. Da ser du om
          du i det hele tatt trenger å låne, og hvilket alternativ som passer
          for deg.
        </p>
      </div>

      <div className="narrow-container pb-10 space-y-8">
        {/* Fortsett å lese */}
        <section>
          <h2 className="font-display font-bold text-2xl text-ink tracking-display mb-4">
            Fortsett å lese
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {READING_PATH.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="card p-5 flex flex-col gap-2 hover:border-accent transition-colors"
              >
                <h3 className="font-display font-bold text-lg text-ink tracking-display">
                  {it.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{it.body}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Les videre <ArrowRight aria-hidden className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Verktøy */}
        <section>
          <h2 className="font-display font-bold text-2xl text-ink tracking-display mb-4">
            Bruk verktøyene
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {TOOLS.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="card p-5 flex flex-col gap-2 hover:border-accent transition-colors"
              >
                <h3 className="font-display font-bold text-lg text-ink tracking-display">
                  {it.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{it.body}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Åpne <ArrowRight aria-hidden className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <OfficialSourcesBox
          ids={["forbrukerradet", "finansportalen", "finanstilsynet", "lovdata"]}
          intro="Vil du lese mer eller sammenligne lån selv? Disse offentlige tjenestene er trygge utgangspunkter."
        />

        <DisclaimerBox />
      </div>
    </>
  );
}
