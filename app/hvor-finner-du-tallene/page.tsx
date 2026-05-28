import { PageHeader } from "@/components/PageHeader";
import { WhereToFindBox } from "@/components/WhereToFindBox";
import { OfficialSourcesBox } from "@/components/OfficialSourcesBox";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Hvor finner du tallene?",
  description:
    "Konkret oversikt over hvor du finner inntekt, lønnsslipp, NAV-ytelser, skattemelding, faste utgifter, kredittkortsaldo, effektiv rente, gebyrer, inkassokrav og usikret gjeld via Gjeldsregisteret.",
  path: "/hvor-finner-du-tallene",
});

const CRUMBS = [
  { name: "Hjem", href: "/" },
  { name: "Hvor finner du tallene?", href: "/hvor-finner-du-tallene" },
];

interface Block {
  heading: string;
  intro: string;
  title: string;
  items: string[];
}

const BLOCKS: Block[] = [
  {
    heading: "Inntekt",
    intro:
      "Inntekten din er utgangspunktet for hele oversikten. Du vil vite hva du faktisk har til rådighet hver måned etter skatt.",
    title: "Se her først",
    items: [
      "Nettbanken: se hva som er gått inn på konto siste 2–3 måneder",
      "Skattemeldingen (skatteetaten.no): samlet inntekt for året",
      "Varierer inntekten? Regn et snitt av de siste 3 månedene",
    ],
  },
  {
    heading: "Lønnsslipp",
    intro:
      "Lønnsslippen viser brutto- og nettolønn, skattetrekk og eventuelle faste trekk som er gjort før pengene når kontoen din.",
    title: "Se her først",
    items: [
      "Arbeidsgiverens lønnssystem eller på e-post hver lønningsdag",
      "Mange bedrifter bruker portaler som Visma, Huldt & Lillevik eller tilsvarende",
      "Se etter «utbetalt» eller «netto» — det er beløpet du får på konto",
    ],
  },
  {
    heading: "NAV-ytelser",
    intro:
      "Får du dagpenger, AAP, uføretrygd, sykepenger eller andre ytelser, finner du oversikt og utbetalinger hos NAV.",
    title: "Se her først",
    items: [
      "Logg inn på nav.no → «Utbetalingsoversikt»",
      "Se hva som er utbetalt og hvilken ytelse det gjelder",
      "Trenger du hjelp med økonomi? NAV har gratis gjeldsrådgivning på 55 55 33 39",
    ],
  },
  {
    heading: "Skattemelding",
    intro:
      "Skattemeldingen gir et godt årsbilde av inntekt, gjeld og formue — nyttig når du vil dobbeltsjekke helheten.",
    title: "Se her først",
    items: [
      "Logg inn på skatteetaten.no → «Min skattemelding»",
      "Under «Gjeld» ser du registrert gjeld ved årsskiftet",
      "Tidligere års skattemeldinger ligger også tilgjengelig",
    ],
  },
  {
    heading: "Faste utgifter",
    intro:
      "Faste utgifter er alt som går ut omtrent hver måned: bolig, strøm, forsikring, mat, transport og abonnementer.",
    title: "Se her først",
    items: [
      "Kontoutskrift siste 3 måneder — den mest pålitelige kilden",
      "Se etter gjentakende beløp til samme mottaker",
      "Husk uregelmessige, men faste utgifter (forsikring, kommunale avgifter)",
    ],
  },
  {
    heading: "AvtaleGiro og eFaktura",
    intro:
      "Faste betalinger du har satt opp i nettbanken gir en rask liste over hva du betaler regelmessig.",
    title: "Se her først",
    items: [
      "Nettbanken → «Faste oppdrag», «AvtaleGiro» eller «eFaktura»",
      "Her ser du mottaker, beløp og hvor ofte det trekkes",
      "Avtaler du ikke kjenner igjen? Verdt å undersøke nærmere",
    ],
  },
  {
    heading: "Kredittkortsaldo",
    intro:
      "Saldoen er det du faktisk skylder på kortet akkurat nå — ikke det samme som kredittgrensen din.",
    title: "Se her først",
    items: [
      "Kredittkortappen eller utsteders nettsider",
      "Se etter «utestående saldo» og «minste innbetaling»",
      "Betaler du bare minstebeløpet, vokser ofte rentekostnaden",
    ],
  },
  {
    heading: "Forbrukslån",
    intro:
      "Forbrukslån og smålån har ofte høy rente. Du vil vite restbeløp og hva lånet faktisk koster.",
    title: "Se her først",
    items: [
      "Långiverens app eller «Min side»",
      "Nedbetalingsplanen viser restbeløp og månedlig termin",
      "Alle forbrukslån finnes også samlet i Gjeldsregisteret",
    ],
  },
  {
    heading: "Effektiv rente",
    intro:
      "Effektiv rente inkluderer renter og gebyrer, og er det beste tallet for å sammenligne hva ulike lån faktisk koster.",
    title: "Se her først",
    items: [
      "Låneavtalen eller nedbetalingsplanen — oppgis alltid som «effektiv rente»",
      "Skiller seg fra «nominell rente», som ikke inkluderer gebyrer",
      "Bruk effektiv rente når du sammenligner to lån",
    ],
  },
  {
    heading: "Gebyrer",
    intro:
      "Etableringsgebyr, termingebyr og fakturagebyr legger seg på toppen av renten og kan utgjøre mye over tid.",
    title: "Se her først",
    items: [
      "Låneavtalen — egen linje for etablerings- og termingebyr",
      "Faktura/kontoutskrift — se etter «gebyr» eller «fakturagebyr»",
      "Mange gebyrer kan reduseres ved å bytte til e-faktura/AvtaleGiro",
    ],
  },
  {
    heading: "Inkassokrav",
    intro:
      "Har en regning gått til inkasso, skal du ha fått skriftlig varsel. Det er viktig å ta tak i dette tidlig.",
    title: "Se her først",
    items: [
      "Brev eller e-post fra inkassoselskapet — kravets størrelse og frist",
      "Sjekk at hovedkravet og gebyrene stemmer",
      "Er kravet feil eller umulig å betale? Kontakt NAV gjeldsrådgivning",
    ],
  },
  {
    heading: "Usikret gjeld via Gjeldsregisteret",
    intro:
      "Gjeldsregisteret er et offentlig godkjent register som samler all usikret gjeld din — forbrukslån og kredittkort — på ett sted.",
    title: "Se her først",
    items: [
      "Logg inn på gjeldsregisteret.com med BankID — det er gratis",
      "Du ser samlet ramme, brukt kreditt og restgjeld",
      "Perfekt utgangspunkt for en fullstendig gjeldsoversikt",
    ],
  },
];

export default function HvorFinnerDuTalleneePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: `${SITE.url}/hvor-finner-du-tallene`,
            name: "Hvor finner du tallene?",
            description:
              "Konkret veiledning om hvor du finner inntekt, utgifter, renter, gebyrer og gjeld.",
          }),
          breadcrumbSchema(
            CRUMBS.map((c) => ({ name: c.name, url: `${SITE.url}${c.href}` }))
          ),
        ]}
      />

      <PageHeader
        kicker="Praktisk veiviser"
        title="Hvor finner du tallene?"
        lede="Det vanskeligste er ofte å vite hvor man skal lete. Her er konkrete «se her først»-tips for hvert tall du trenger til oversikten din."
        crumbs={CRUMBS}
      />

      <div className="narrow-container pb-10 space-y-8">
        {BLOCKS.map((b) => (
          <section key={b.heading}>
            <h2 className="font-display text-2xl text-ink tracking-display">
              {b.heading}
            </h2>
            <p className="mt-2 mb-4 text-muted leading-relaxed">{b.intro}</p>
            <WhereToFindBox title={b.title} items={b.items} />
          </section>
        ))}

        <OfficialSourcesBox
          ids={["gjeldsregisteret", "nav", "forbrukerradet", "finansportalen"]}
          intro="Disse offentlige tjenestene hjelper deg å finne og sammenligne de faktiske tallene."
        />

        <DisclaimerBox />
      </div>
    </>
  );
}
