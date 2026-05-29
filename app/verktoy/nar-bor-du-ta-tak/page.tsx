import { PageHeader } from "@/components/PageHeader";
import { LocalChecklist, type ChecklistItem, type ResultTier } from "@/components/LocalChecklist";
import { OfficialSourcesBox } from "@/components/OfficialSourcesBox";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Når bør du ta tak i økonomien? Sjekkliste for gjeld og regninger",
  description:
    "Svar på noen enkle spørsmål om regninger, kredittkort, smålån og økonomisk stress. Sjekklisten lagres bare i nettleseren din, aldri hos Lånekompass.no.",
  path: "/verktoy/nar-bor-du-ta-tak",
});

const CRUMBS = [
  { name: "Hjem", href: "/" },
  { name: "Verktøy", href: "/verktoy" },
  { name: "Når bør du ta tak i økonomien?", href: "/verktoy/nar-bor-du-ta-tak" },
];

const ITEMS: ChecklistItem[] = [
  { id: "minstebelop", label: "Betaler du bare minstebeløp på kredittkort?" },
  { id: "kreditt-vanlig", label: "Bruker du kreditt til vanlige utgifter, som mat og regninger?" },
  { id: "ny-for-gammel", label: "Tar du opp ny kreditt for å betale gammel gjeld?" },
  { id: "unngar-regninger", label: "Unngår du å åpne regninger?" },
  { id: "inkassovarsel", label: "Har du fått inkassovarsel?" },
  { id: "vet-ikke-gjeld", label: "Vet du ikke hvor mye du skylder til sammen?" },
  { id: "flere-smaalan", label: "Har du flere små lån med høy rente?" },
];

const TIERS: ResultTier[] = [
  {
    minChecked: 0,
    tone: "calm",
    title: "Godt utgangspunkt",
    body: "Det er fint at du sjekker. Hvis du ikke kjenner deg igjen i noen av punktene, er du sannsynligvis i en grei posisjon. Det kan likevel være nyttig å lage en full gjeldsoversikt, så du beholder kontrollen.",
  },
  {
    minChecked: 1,
    tone: "attention",
    title: "Verdt å følge med på",
    body: "Du kjenner deg igjen i noe. Det er ikke noe å skamme seg over — mange er i samme situasjon. Et godt neste steg er å skaffe full oversikt over gjeld og faste utgifter, så du ser helheten før du gjør noe.",
  },
  {
    minChecked: 3,
    tone: "serious",
    title: "Det kan være lurt å ta tak nå",
    body: "Flere av punktene peker på at gjelden kan ha blitt krevende å håndtere. Det viktigste er at du ikke står alene med dette. Skaff deg full oversikt, og vurder å snakke med NAVs gratis gjeldsrådgivning — de hjelper mange i akkurat din situasjon, helt uforpliktende.",
    showNav: true,
  },
];

export default function NarBorDuTaTakPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: `${SITE.url}/verktoy/nar-bor-du-ta-tak`,
            name: "Når bør du ta tak i økonomien?",
            description:
              "Enkel sjekkliste for gjeld, regninger og kredittkort. Lagres kun i nettleseren.",
          }),
          breadcrumbSchema(
            CRUMBS.map((c) => ({ name: c.name, url: `${SITE.url}${c.href}` }))
          ),
        ]}
      />

      <PageHeader
        kicker="Digital sjekkliste"
        title="Når bør du ta tak i økonomien?"
        lede="Svar på noen enkle spørsmål om regninger, kredittkort, smålån og økonomisk stress. Sjekklisten lagres bare i nettleseren din."
        crumbs={CRUMBS}
      />

      <div className="narrow-container pb-10 space-y-8">
        <LocalChecklist
          storageKey="lanekompass:nar-bor-du-ta-tak"
          items={ITEMS}
          tiers={TIERS}
        />

        <OfficialSourcesBox
          ids={["nav", "forbrukerradet", "gjeldsregisteret", "forbrukertilsynet"]}
          intro="Trenger du noen å snakke med? Disse offentlige instansene tilbyr gratis og pålitelig hjelp."
        />

        <DisclaimerBox>
          Denne sjekklisten gir generell veiledning, ikke personlig økonomisk
          rådgivning, og stiller ingen diagnose. Opplever du at gjeld går ut
          over hverdagen, ta kontakt med NAV økonomi- og gjeldsrådgivning på 55
          55 33 39.
        </DisclaimerBox>
      </div>
    </>
  );
}
