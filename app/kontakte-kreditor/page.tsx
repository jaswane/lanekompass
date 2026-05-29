import { PageHeader } from "@/components/PageHeader";
import { OfficialSourcesBox } from "@/components/OfficialSourcesBox";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Slik kontakter du kreditor hvis du sliter med å betale",
  description:
    "Praktisk veiledning hvis du sliter med å betale en regning eller et avdrag — hva du bør finne frem, hva du kan spørre om, og hvor du får gratis hjelp.",
  path: "/kontakte-kreditor",
});

const CRUMBS = [
  { name: "Hjem", href: "/" },
  { name: "Lån forklart enkelt", href: "/lan-forklart-enkelt" },
  { name: "Kontakte kreditor", href: "/kontakte-kreditor" },
];

export default function KontakteKreditorPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            url: `${SITE.url}/kontakte-kreditor`,
            name: "Slik kontakter du kreditor",
            description:
              "Hvordan du tar kontakt hvis du sliter med å betale en regning eller et lån.",
          }),
          breadcrumbSchema(
            CRUMBS.map((c) => ({ name: c.name, url: `${SITE.url}${c.href}` }))
          ),
        ]}
      />

      <PageHeader
        kicker="Lån forklart enkelt"
        title="Slik kontakter du kreditor hvis du sliter med å betale"
        lede="Det er normalt å bli urolig når en regning eller et avdrag blir vanskelig. Det viktigste rådet er enkelt: ta kontakt så tidlig som mulig. Her er hva du bør finne frem, og hva du kan be om."
        crumbs={CRUMBS}
      />

      <div className="narrow-container pb-10 space-y-6 prose-soft text-ink/90 leading-relaxed">
        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Ta kontakt tidlig — det lønner seg
        </h2>
        <p>
          Banker og långivere foretrekker som regel en avtale fremfor å sende
          kravet til inkasso. Det er mye lettere for dem å finne en løsning før
          beløpet vokser med inkassogebyrer.
        </p>
        <p>
          Det er heller ingen grunn til å skamme seg. De aller fleste banker og
          inkassoselskaper håndterer slike henvendelser hver dag. Du er ikke
          alene, og du blir ikke dømt for å spørre om hjelp.
        </p>

        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Hva du bør finne frem først
        </h2>
        <p>
          Det er lettere å føre en samtale når du har tallene klare. Før du
          ringer, samle:
        </p>
        <ul className="space-y-1.5">
          <li>Lånenummer eller navn på kreditor</li>
          <li>Hva du skylder, både hovedstol og renter/gebyrer</li>
          <li>Hva du klarer å betale per måned akkurat nå</li>
          <li>
            En kort, ærlig forklaring på hvorfor det er vanskelig — du trenger
            ikke gå inn på personlige detaljer
          </li>
        </ul>
        <p>
          Ta gjerne notater under samtalen, og be om å få avtalen skriftlig på
          e-post etterpå.
        </p>

        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Hva du kan spørre om
        </h2>
        <ul className="space-y-2">
          <li>
            <strong>Betalingsutsettelse.</strong> En kort pause i nedbetalingen
            — for eksempel én eller flere måneder. Spør om renter fortsetter å
            løpe i pausen.
          </li>
          <li>
            <strong>Nedbetalingsplan.</strong> En avtale om lavere månedsbeløp
            over lengre tid. Husk at lavere månedsbeløp ofte betyr høyere total
            kostnad.
          </li>
          <li>
            <strong>Oversikt over kravet.</strong> Du har rett til å få en
            spesifikk oppstilling som viser hovedstol, renter og gebyrer hver
            for seg.
          </li>
          <li>
            <strong>Reduksjon av gebyrer.</strong> I noen tilfeller, særlig hvis
            kravet er gått til inkasso, kan tilleggsgebyrer reduseres hvis du
            betaler raskt.
          </li>
        </ul>
        <p>
          Et godt utgangspunkt før samtalen: ha hele gjeldsoversikten din klar.
          Det viser at du tar grep, og det gjør det lettere å finne en avtale
          som faktisk fungerer.
        </p>

        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Trenger du noen å snakke med først?
        </h2>
        <p>
          Hvis det er flere kreditorer eller hvis det føles uoversiktlig, er
          det ofte lurt å snakke med <strong>NAV økonomi- og gjeldsveiledning</strong>{" "}
          før du tar kontakt med kreditorene. Det er gratis og uforpliktende,
          og de kan også hjelpe deg å forhandle.
        </p>
        <p>
          Telefon: <strong>55 55 33 39</strong>. Du finner mer informasjon på{" "}
          <a
            href="https://www.nav.no/okonomi-gjeld"
            target="_blank"
            rel="noopener noreferrer"
          >
            nav.no/okonomi-gjeld
          </a>
          .
        </p>

        <h2 className="font-display font-bold text-2xl text-ink tracking-display pt-2">
          Hva du ikke bør gjøre
        </h2>
        <ul className="space-y-1.5">
          <li>
            <strong>Ikke ignorer brev</strong> fra kreditor eller inkasso. Det
            gjør sjelden problemet mindre, og det kan gi nye gebyrer.
          </li>
          <li>
            <strong>Ikke ta opp nytt lån</strong> for å betale gammel gjeld
            uten å først ha skaffet deg oversikt. Det er sjelden løsningen, og
            kan gjøre situasjonen verre.
          </li>
          <li>
            <strong>Ikke betal alt du har</strong> på én kreditor hvis du da
            ikke har penger igjen til mat og bolig. Snakk med NAV først hvis du
            er usikker.
          </li>
        </ul>
      </div>

      <div className="narrow-container pb-10 space-y-6">
        <OfficialSourcesBox
          ids={["nav", "forbrukerradet", "forbrukertilsynet", "lovdata"]}
          intro="Disse offentlige instansene gir gratis veiledning og forklarer dine rettigheter når du sliter med gjeld eller betalingsproblemer."
        />

        <DisclaimerBox />
      </div>
    </>
  );
}
