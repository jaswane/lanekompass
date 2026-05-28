export const SITE = {
  name: "Lånekompass.no",
  domain: "lanekompass.no",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.lanekompass.no",
  description:
    "Få oversikt over dyr gjeld, kredittkort, smålån og faste utgifter før du vurderer neste steg. Rolig veiledning med offentlige kilder.",
  tagline: "Få oversikt før du vurderer neste steg.",
  contactEmail: "kontakt@swanecreative.no",
  company: {
    name: "Swane Creative",
    url: "https://www.swanecreative.no/",
  },
} as const;
