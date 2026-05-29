import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { OfficialSourcesBox } from "@/components/OfficialSourcesBox";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Effektiv rente forklart enkelt – sammenlign hva lån faktisk koster",
  description:
    "Effektiv rente er den ekte prisen på lånet — renter pluss gebyrer i ett tall. Få det forklart på vanlig norsk, med et konkret eksempel.",
  path: "/effektiv-rente-forklart",
});

const CRUMBS = [
  { name: "Hjem", href: "/" },
  { name: "Lån forklart enkelt", href: "/lan-forklart-enkelt" },
  { name: "Effektiv rente forklart", href: "/effektiv-rente-forklart" },
];

export default function EffektivRentePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: `${SITE.url}/effektiv-rente-forklart`,
            name: "Effektiv rente forklart enkelt",
            description:
              "Hva effektiv rente er og hvordan den brukes for å sammenligne lån.",
          }),
          breadcrumbSchema(
            CRUMBS.map((c) => ({ name: c.name, url: `${SITE.url}${c.href}` }))
          ),
        ]}
      />

      <PageHeader
        kicker="Lån forklart enkelt"
        title="Effektiv rente forklart enkelt"
        lede="Effektiv rente er den ekte prisen på lånet. Her får du forklart hva den er, hvorfor den er det viktigste tallet — og hvordan den slår ut i et helt konkret eksempel."
        crumbs={CRUMBS}
      />

      <div className="narrow-container pb-10 space-y-6 prose-soft text-ink/90 leading-relaxed">
        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Hva er forskjellen på nominell og effektiv rente?
        </h2>
        <p>
          <strong>Nominell rente</strong> er bare selve renten på lånet — uten
          gebyrer. Det er ofte den banken pleier å vise stort i annonsene.
        </p>
        <p>
          <strong>Effektiv rente</strong> er renten <em>pluss</em> alle
          gebyrene, regnet om til ett prosenttall. Den effektive renten er
          derfor alltid lik eller høyere enn den nominelle.
        </p>
        <p>
          Banker er forpliktet til å oppgi effektiv rente — du finner den i
          låneavtalen og i nedbetalingsplanen.
        </p>

        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Hvorfor effektiv rente er det riktige tallet å sammenligne
        </h2>
        <p>
          To lån kan ha samme nominelle rente, men helt ulike gebyrer. Da er
          det effektiv rente som viser hvilket lån som faktisk er billigst. Det
          er det eneste tallet du kan stole på når du sammenligner tilbud.
        </p>

        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Et enkelt eksempel
        </h2>
        <p>
          Tenk deg at du skal låne 100 000 kroner og skal betale tilbake over
          5 år. To banker tilbyr deg:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Lån A:</strong> Nominell rente 8 %. Etableringsgebyr
            1 500 kr. Termingebyr 75 kr/mnd. Effektiv rente blir omtrent{" "}
            <strong>10 %</strong>.
          </li>
          <li>
            <strong>Lån B:</strong> Nominell rente 9 %. Ingen gebyrer.
            Effektiv rente blir omtrent <strong>9 %</strong>.
          </li>
        </ul>
        <p>
          Selv om <strong>Lån B</strong> har en høyere nominell rente, er det
          billigere totalt fordi det ikke har gebyrer. Det er effektiv rente
          som avslører dette.
        </p>

        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Ikke bare se på månedsbeløpet
        </h2>
        <p>
          En bank kan tilby et lavere månedsbeløp ved å forlenge nedbetalingen.
          Det føles billigere, men du betaler renter over mye lengre tid. Den
          totale kostnaden blir høyere.
        </p>
        <p>
          Bruk derfor <strong>effektiv rente + total kostnad</strong> for å
          forstå hva lånet egentlig vil koste deg. Da blir du ikke lurt av små
          tall i en annonse.
        </p>

        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Slik finner du den effektive renten
        </h2>
        <ul className="space-y-1.5">
          <li>I låneavtalen eller nedbetalingsplanen — den skal stå der.</li>
          <li>
            På fakturaen fra långiver — særlig hvis du har et lån du allerede
            betaler på.
          </li>
          <li>
            På <strong>Finansportalen</strong> kan du sammenligne effektiv
            rente på lån fra ulike banker.
          </li>
        </ul>

        <p>
          Vil du sammenligne dagens gjeld mot et mulig nytt lån? Bruk{" "}
          <Link href="/kalkulator/refinansiering">
            refinansieringskalkulatoren
          </Link>{" "}
          — den viser deg total kostnad og månedsbeløp side om side.
        </p>
      </div>

      <div className="narrow-container pb-10 space-y-6">
        <OfficialSourcesBox
          ids={["forbrukerradet", "finansportalen", "finanstilsynet"]}
          intro="Finansportalen er Forbrukerrådets offentlige sammenligningstjeneste. Der finner du effektiv rente på lånetilbud fra norske banker."
        />

        <DisclaimerBox />
      </div>
    </>
  );
}
