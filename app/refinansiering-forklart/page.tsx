import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { OfficialSourcesBox } from "@/components/OfficialSourcesBox";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Refinansiering forklart enkelt – når lønner det seg, og når gjør det ikke det?",
  description:
    "Refinansiering kan hjelpe — eller gjøre ting dyrere. Forstå hva det er, når det passer, hva som er fellene, og hvorfor total kostnad teller mer enn månedsbeløp.",
  path: "/refinansiering-forklart",
});

const CRUMBS = [
  { name: "Hjem", href: "/" },
  { name: "Lån forklart enkelt", href: "/lan-forklart-enkelt" },
  { name: "Refinansiering forklart", href: "/refinansiering-forklart" },
];

export default function RefinansieringPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: `${SITE.url}/refinansiering-forklart`,
            name: "Refinansiering forklart enkelt",
            description:
              "Hva refinansiering betyr og hvordan du vurderer om det er aktuelt.",
          }),
          breadcrumbSchema(
            CRUMBS.map((c) => ({ name: c.name, url: `${SITE.url}${c.href}` }))
          ),
        ]}
      />

      <PageHeader
        kicker="Lån forklart enkelt"
        title="Refinansiering forklart enkelt"
        lede="Refinansiering betyr å samle flere lån i ett nytt lån. Det kan hjelpe — men det kan også gjøre ting dyrere. Her er hva du bør tenke gjennom først."
        crumbs={CRUMBS}
      />

      <div className="narrow-container pb-10 space-y-6 prose-soft text-ink/90 leading-relaxed">
        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Hva betyr refinansiering?
        </h2>
        <p>
          Refinansiering vil si at du tar opp ett nytt lån og bruker det til å
          betale ned flere gamle lån eller kredittkort. Etterpå har du bare ett
          lån å forholde deg til — én månedlig betaling, én avtale.
        </p>

        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Når kan refinansiering hjelpe?
        </h2>
        <ul className="space-y-2">
          <li>
            <strong>Når den effektive renten blir lavere.</strong> Hvis du har
            flere små lån eller kredittkort med 20–30 % effektiv rente, og kan
            få ett nytt lån med lavere effektiv rente, vil du spare på rentene.
          </li>
          <li>
            <strong>Når du trenger oversikt.</strong> Det er lettere å holde
            styr på ett lån enn på fem. Det reduserer risikoen for å glemme en
            forfall.
          </li>
          <li>
            <strong>Når du klarer å la kortet ligge.</strong> Refinansiering
            virker bare hvis du ikke fyller opp kredittkortet igjen etterpå.
          </li>
        </ul>

        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Når kan refinansiering gjøre ting dyrere?
        </h2>
        <ul className="space-y-2">
          <li>
            <strong>Når du forlenger nedbetalingen mye.</strong> Et lavere
            månedsbeløp ser bra ut, men hvis du betaler renter i 8 år i stedet
            for 4, kan totalen bli mye dyrere.
          </li>
          <li>
            <strong>Når det nye lånet har høye gebyrer.</strong>{" "}
            Etableringsgebyr og termingebyr kan spise opp det du sparer på
            lavere rente. Sjekk alltid effektiv rente på det nye lånet.
          </li>
          <li>
            <strong>Når du fortsetter å bruke kredittkortet.</strong> Da har du
            både det gamle problemet og det nye lånet. Det er det vanligste
            problemet med refinansiering.
          </li>
        </ul>

        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Hvorfor total kostnad og løpetid er viktig
        </h2>
        <p>
          Hvis du blir tilbudt et refinansieringslån, må du sammenligne to ting
          — ikke bare ett:
        </p>
        <ul className="space-y-1.5">
          <li>
            <strong>Hva betaler du per måned?</strong> Dette er det banken
            gjerne fremhever.
          </li>
          <li>
            <strong>Hva betaler du totalt</strong>, fra første termin til siste?
            Det er denne summen som teller for lommeboken din.
          </li>
        </ul>
        <p>
          Et lavere månedsbeløp som varer i 8 år kan koste mer enn et høyere
          månedsbeløp som varer i 4 år. Bruk{" "}
          <Link href="/kalkulator/refinansiering">
            refinansieringskalkulatoren
          </Link>{" "}
          for å sammenligne — den viser begge tallene side om side.
        </p>

        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Refinansiering er ikke en kur
        </h2>
        <p>
          Refinansiering kan flytte gjelden over til billigere vilkår, men
          fjerner ikke det som skapte gjelden i utgangspunktet. Hvis utgiftene
          er høyere enn inntekten, eller hvis kredittkortet brukes til vanlige
          utgifter, kommer gjelden tilbake.
        </p>
        <p>
          Derfor er det smart å begynne med oversikt. Når du ser hele bildet —
          inntekt, utgifter og dagens gjeld — blir det lettere å vurdere om
          refinansiering er riktig for deg, eller om noe annet hjelper mer.
        </p>
        <p>
          <Link href="/rydd-okonomien">
            Rydd økonomien på 7 steg — start med oversikt →
          </Link>
        </p>
      </div>

      <div className="narrow-container pb-10 space-y-6">
        <OfficialSourcesBox
          ids={["forbrukerradet", "finansportalen", "finanstilsynet", "lovdata"]}
          intro="Reglene for utlån og kredittformidling er strenge. På disse offentlige sidene kan du sjekke vilkår og dine rettigheter."
        />

        <DisclaimerBox />
      </div>
    </>
  );
}
