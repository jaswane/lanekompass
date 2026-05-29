import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { OfficialSourcesBox } from "@/components/OfficialSourcesBox";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Kredittkortgjeld forklart enkelt – hvorfor minstebeløp ikke får ned gjelden",
  description:
    "Hvorfor blir kredittkortgjeld så dyr, hva betyr minstebeløp, og hva bør du gjøre hvis kortet har blitt en buffer? Enkelt forklart, med praktiske steg.",
  path: "/kredittkortgjeld-forklart",
});

const CRUMBS = [
  { name: "Hjem", href: "/" },
  { name: "Lån forklart enkelt", href: "/lan-forklart-enkelt" },
  { name: "Kredittkortgjeld forklart", href: "/kredittkortgjeld-forklart" },
];

export default function KredittkortgjeldPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: `${SITE.url}/kredittkortgjeld-forklart`,
            name: "Kredittkortgjeld forklart enkelt",
            description:
              "Forstå hvorfor kredittkortgjeld blir dyr, og hva du bør gjøre.",
          }),
          breadcrumbSchema(
            CRUMBS.map((c) => ({ name: c.name, url: `${SITE.url}${c.href}` }))
          ),
        ]}
      />

      <PageHeader
        kicker="Lån forklart enkelt"
        title="Kredittkortgjeld forklart enkelt"
        lede="Kredittkort er praktisk i hverdagen, men gjeld på kredittkort blir fort dyrt. Her er hvorfor — og hva du kan gjøre hvis kortet har blitt en buffer du ikke får ned."
        crumbs={CRUMBS}
      />

      <div className="narrow-container pb-10 space-y-6 prose-soft text-ink/90 leading-relaxed">
        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Hvorfor blir kredittkortgjeld så dyr?
        </h2>
        <p>
          Effektiv rente på kredittkort ligger ofte mellom 20 % og 30 % i året
          — langt høyere enn på et vanlig boliglån eller forbrukslån. Det
          betyr at hvis du har 30 000 kroner i gjeld på kortet, og bare betaler
          renter, kan rentene alene utgjøre 6 000–9 000 kroner i året.
        </p>
        <p>
          Hver måned du lar gjelden stå, vokser den fordi nye renter legges til
          det du allerede skylder.
        </p>

        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Hva betyr minstebeløp?
        </h2>
        <p>
          Minstebeløp er det <strong>laveste</strong> banken vil ha at du
          betaler hver måned for å holde kontoen i orden. Det er ofte rundt
          2–3 prosent av det du skylder, eller et minimum på noen hundrelapper.
        </p>
        <p>
          Det høres greit ut, men problemet er: minstebeløpet er regnet ut
          slik at det stort sett dekker rentene — og lite eller ingenting av
          selve gjelden.
        </p>

        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Eksempel: Når minstebeløp ikke får ned gjelden
        </h2>
        <p>Tenk deg dette:</p>
        <ul className="space-y-1.5">
          <li>Du skylder 50 000 kroner på kortet.</li>
          <li>Effektiv rente er 25 % i året.</li>
          <li>Du betaler minstebeløp på cirka 1 500 kroner i måneden.</li>
        </ul>
        <p>
          Av disse 1 500 kronene går rundt 1 000 til å betale rentene. Bare
          500 kroner går faktisk til å redusere selve gjelden. Hvis du
          fortsetter å betale bare minstebeløp, og samtidig bruker kortet litt
          i tillegg, kan det ta mange år å bli kvitt gjelden.
        </p>
        <p>Det er derfor minstebeløp er en felle: det føles trygt, men du står stort sett stille.</p>

        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Hva bør du gjøre hvis kortet er blitt en buffer?
        </h2>
        <p>
          Hvis du har begynt å bruke kredittkortet til vanlige utgifter — mat,
          regninger, drivstoff — er det et tegn på at det er på tide å ta tak.
          Her er fem praktiske steg, i rekkefølge:
        </p>
        <ol className="space-y-2 list-decimal pl-5">
          <li>
            <strong>Slutt å bruke kortet til hverdagsutgifter.</strong> Bruk
            heller debet-kort fra lønnskontoen. Det stopper gjelden fra å vokse.
          </li>
          <li>
            <strong>Lag oversikt.</strong> Hvor mye skylder du, og hvor mye
            betaler du i renter? Bruk{" "}
            <Link href="/kalkulator/gjeldsoversikt">
              gjeldsoversikt-kalkulatoren
            </Link>{" "}
            — den lagrer ingenting og regner alt lokalt.
          </li>
          <li>
            <strong>Betal alltid mer enn minstebeløp</strong> hvis du kan. Selv
            litt mer hver måned gjør at gjelden faktisk begynner å gå ned.
          </li>
          <li>
            <strong>Vurder refinansiering</strong> hvis du har dyr kortgjeld og
            mulighet til å samle den i ett lån med lavere effektiv rente. Bare
            husk å sammenligne total kostnad. Les mer i{" "}
            <Link href="/refinansiering-forklart">
              Refinansiering forklart enkelt
            </Link>
            .
          </li>
          <li>
            <strong>Trenger du hjelp?</strong> NAV økonomi- og gjeldsveiledning
            er gratis og uforpliktende. Telefon 55 55 33 39. Det er smartere å
            ringe tidlig enn å vente til det blir inkasso.
          </li>
        </ol>

        <p>
          Du finner all din usikrede gjeld — inkludert kredittkort — gratis hos{" "}
          <strong>Gjeldsregisteret</strong>. Det er et godt utgangspunkt for å
          fylle ut gjeldsoversikten.
        </p>
      </div>

      <div className="narrow-container pb-10 space-y-6">
        <OfficialSourcesBox
          ids={["gjeldsregisteret", "forbrukerradet", "finanstilsynet", "nav"]}
          intro="Trenger du å se all din gjeld eller snakke med noen? Disse offentlige tjenestene er trygge og gratis."
        />

        <DisclaimerBox />
      </div>
    </>
  );
}
