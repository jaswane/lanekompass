import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { StepCard } from "@/components/StepCard";
import { OfficialSourcesBox } from "@/components/OfficialSourcesBox";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { webPageSchema, breadcrumbSchema, howToSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Rydd økonomien på 7 steg",
  description:
    "En rolig, menneskelig guide i 7 steg: finn inntekt og utgifter, lag full gjeldsoversikt, se faresignalene og lag en 7-dagers handlingsplan.",
  path: "/rydd-okonomien",
});

interface Step {
  title: string;
  body: React.ReactNode;
  whereToFind?: string[];
  action: { label: string; href: string };
}

const STEPS: Step[] = [
  {
    title: "Finn frem det du trenger",
    body: "Du trenger ikke ha alt på plass for å begynne. Sett av en rolig halvtime og finn frem det du har av lønnsslipper, kontoutskrifter, regninger og oversikt over lån og kredittkort. Det holder å samle det på ett bord.",
    whereToFind: [
      "Nettbanken din — kontoutskrifter og faste betalinger",
      "E-post og post — fakturaer, kredittkortregninger og eventuelle inkassovarsler",
      "Lønnsslipp fra arbeidsgiver eller utbetalinger fra NAV",
    ],
    action: { label: "Se hvor du finner alle tallene", href: "/hvor-finner-du-tallene" },
  },
  {
    title: "Finn inntekten din",
    body: "Skriv ned hva du faktisk har å rutte med hver måned etter skatt. Ta med lønn, eventuelle ytelser fra NAV og andre faste inntekter. Bruk gjennomsnittet hvis inntekten varierer.",
    whereToFind: [
      "Lønnsslipp — nettolønn utbetalt per måned",
      "NAV — dagpenger, AAP, uføretrygd eller andre ytelser",
      "Skattemeldingen — for å se samlet inntekt over året",
    ],
    action: { label: "Slik finner du inntekt og ytelser", href: "/hvor-finner-du-tallene" },
  },
  {
    title: "Finn faste utgifter",
    body: "Kartlegg det som går ut hver måned uansett: husleie eller boliglån, strøm, forsikring, abonnement, mat og transport. Mange blir overrasket over hvor mye de små faste utgiftene utgjør til sammen.",
    whereToFind: [
      "AvtaleGiro og eFaktura i nettbanken — faste trekk",
      "Kontoutskrift siste 2–3 måneder — for å fange opp alt",
      "Abonnementer (strømming, trening, apper) på e-post eller i appbutikken",
    ],
    action: { label: "Finn de faste utgiftene", href: "/hvor-finner-du-tallene" },
  },
  {
    title: "Lag full gjeldsoversikt",
    body: "Nå samler du all gjeld ett sted: kredittkort, forbrukslån, smålån, billån og annet. Noter restbeløp, rente og hva du betaler per måned. Målet er ett klart bilde — ikke å dømme deg selv.",
    whereToFind: [
      "Gjeldsregisteret — din usikrede gjeld (forbrukslån og kredittkort) samlet",
      "Hver enkelt långiver — restbeløp, nominell og effektiv rente",
      "Kredittkortappen eller nettbanken — saldo og minstebeløp",
    ],
    action: { label: "Åpne gjeldsoversikt-kalkulatoren", href: "/kalkulator/gjeldsoversikt" },
  },
  {
    title: "Se faresignalene",
    body: "Med oversikten på plass blir det lettere å kjenne igjen tegn på at gjelden har blitt for dyr eller for stor. Dette handler ikke om skyld — det handler om å oppdage det tidlig nok til å handle rolig.",
    whereToFind: [
      "Betaler du bare minstebeløp på kredittkortet hver måned?",
      "Bruker du kreditt til vanlige utgifter som mat og regninger?",
      "Har du fått inkassovarsel, eller vet du ikke samlet gjeld?",
    ],
    action: { label: "Ta den varsomme sjekklisten", href: "/verktoy/nar-bor-du-ta-tak" },
  },
  {
    title: "Velg ryddeplan",
    body: "Nå kan du vurdere hva som passer din situasjon. Det kan være å betale ned de dyreste kredittene først, sette opp en nedbetalingsplan, eller å vurdere om refinansiering kan samle gjelden. Refinansiering er ett mulig verktøy — ikke det første svaret.",
    whereToFind: [
      "Dyreste gjeld først: se på effektiv rente, ikke bare beløpet",
      "Vurder refinansiering kun når du har full oversikt",
      "Trenger du hjelp? NAV tilbyr gratis økonomi- og gjeldsrådgivning",
    ],
    action: { label: "Sammenlign refinansiering", href: "/kalkulator/refinansiering" },
  },
  {
    title: "Lag 7-dagers handlingsplan",
    body: "Del opp i små, konkrete steg — ett om dagen i sju dager. For eksempel: si opp ett abonnement, ring én långiver, sett opp ett fast nedbetalingsbeløp. Små steg som faktisk blir gjort, slår en perfekt plan som aldri starter.",
    whereToFind: [
      "Dag 1–3: før opp inntekt og faste utgifter",
      "Dag 4–5: lag gjeldsoversikt og se hva som er dyrest",
      "Dag 6–7: kutt det enkleste, og legg en enkel nedbetalingsplan",
    ],
    action: { label: "Last ned 7-dagers ryddeplan", href: "/verktoy/7-dagers-ryddeplan-a4" },
  },
];

const CRUMBS = [
  { name: "Hjem", href: "/" },
  { name: "Rydd økonomien", href: "/rydd-okonomien" },
];

export default function RyddOkonomienPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: `${SITE.url}/rydd-okonomien`,
            name: "Rydd økonomien på 7 steg",
            description:
              "En rolig guide i 7 steg for å få oversikt over inntekt, utgifter og gjeld.",
          }),
          breadcrumbSchema(
            CRUMBS.map((c) => ({ name: c.name, url: `${SITE.url}${c.href}` }))
          ),
          howToSchema({
            name: "Rydd økonomien på 7 steg",
            description:
              "Få oversikt over inntekt, faste utgifter og gjeld, se faresignalene og lag en handlingsplan.",
            steps: STEPS.map((s) => ({
              name: s.title,
              text: typeof s.body === "string" ? s.body : s.title,
            })),
          }),
        ]}
      />

      <PageHeader
        kicker="Rolig steg for steg"
        title="Rydd økonomien på 7 steg"
        lede="Dette er en guide du kan følge i ditt eget tempo. Ingen kjefter, ingen skam — bare en rolig vei til oversikt, slik at du kan ta gode valg på et trygt grunnlag."
        crumbs={CRUMBS}
      />

      <div className="narrow-container pb-10">
        <ol className="space-y-5">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <StepCard
                number={i + 1}
                title={step.title}
                body={<p>{step.body}</p>}
                whereToFind={step.whereToFind}
                action={step.action}
              />
            </li>
          ))}
        </ol>

        <div className="mt-10 space-y-6">
          <OfficialSourcesBox
            ids={["nav", "forbrukerradet", "gjeldsregisteret", "finanstilsynet"]}
            intro="Trenger du mer hjelp enn et verktøy kan gi? Disse offentlige instansene tilbyr veiledning og pålitelig informasjon."
          />

          <div className="card p-6 text-center">
            <p className="text-ink/90">
              Klar for å sette tall på det? Begynn med en gjeldsoversikt.
            </p>
            <Link
              href="/kalkulator/gjeldsoversikt"
              className="btn-primary mt-4"
            >
              Finn tallene dine
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <p className="mt-4 text-sm text-muted">
              Vurderer du å låne?{" "}
              <Link
                href="/unngaa-lan"
                className="font-semibold text-accent hover:underline underline-offset-4"
              >
                Se først om du kan unngå det
              </Link>
              .
            </p>
          </div>

          <DisclaimerBox />
        </div>
      </div>
    </>
  );
}
