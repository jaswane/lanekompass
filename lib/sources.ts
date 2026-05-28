/**
 * Offentlige kilder. Brukes av OfficialSourcesBox og /kilder.
 * Alt innhold om lån, gjeld, refinansiering og kreditt skal vise relevante
 * kilder herfra, slik at innholdet er etterprøvbart og trygt.
 */

export interface Source {
  id: string;
  name: string;
  url: string;
  /** Kort beskrivelse av hva kilden dekker. */
  blurb: string;
}

export const SOURCES: Record<string, Source> = {
  finanstilsynet: {
    id: "finanstilsynet",
    name: "Finanstilsynet",
    url: "https://www.finanstilsynet.no/",
    blurb:
      "Tilsyn med banker, finansforetak og låneformidlere. Regler for forsvarlig utlånspraksis.",
  },
  forbrukerradet: {
    id: "forbrukerradet",
    name: "Forbrukerrådet",
    url: "https://www.forbrukerradet.no/",
    blurb:
      "Uavhengig forbrukerinformasjon om lån, gjeld og privatøkonomi.",
  },
  finansportalen: {
    id: "finansportalen",
    name: "Finansportalen",
    url: "https://www.finansportalen.no/",
    blurb:
      "Forbrukerrådets offentlige tjeneste for å sammenligne lån, renter og gebyrer.",
  },
  nav: {
    id: "nav",
    name: "NAV – økonomi- og gjeldsrådgivning",
    url: "https://www.nav.no/okonomi-og-gjeldsradgivning",
    blurb:
      "Gratis økonomi- og gjeldsveiledning. Ring 55 55 33 39 for hjelp hvis du sliter med gjeld.",
  },
  gjeldsregisteret: {
    id: "gjeldsregisteret",
    name: "Gjeldsregisteret",
    url: "https://www.gjeldsregisteret.com/",
    blurb:
      "Offentlig godkjent register over usikret gjeld (forbrukslån og kredittkort). Du kan se din egen gjeld gratis.",
  },
  forbrukertilsynet: {
    id: "forbrukertilsynet",
    name: "Forbrukertilsynet",
    url: "https://www.forbrukertilsynet.no/",
    blurb:
      "Fører tilsyn med markedsføring av kreditt og lån, og hva som er lov å love forbrukere.",
  },
  lovdata: {
    id: "lovdata",
    name: "Lovdata – Finansavtaleloven",
    url: "https://lovdata.no/dokument/NL/lov/2020-12-18-146",
    blurb:
      "Lovverket som regulerer låneavtaler, kredittvurdering og opplysningsplikt.",
  },
} as const;

export type SourceId = keyof typeof SOURCES;

export function getSources(ids: SourceId[]): Source[] {
  return ids.map((id) => SOURCES[id]);
}

/** Alle kilder som liste, til /kilder-siden. */
export const ALL_SOURCES: Source[] = Object.values(SOURCES);
