import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Faste ruter. Eventuelle fremtidige /go-partnerlenker holdes bevisst UTE
// av sitemap.
const ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/rydd-okonomien", priority: 0.9 },
  { path: "/hvor-finner-du-tallene", priority: 0.8 },
  { path: "/kalkulator/gjeldsoversikt", priority: 0.8 },
  { path: "/kalkulator/refinansiering", priority: 0.8 },
  { path: "/verktoy", priority: 0.7 },
  { path: "/verktoy/okonomioversikt-a4", priority: 0.7 },
  { path: "/verktoy/gjeldsoversikt-a4", priority: 0.7 },
  { path: "/verktoy/30-dagers-ryddeplan-a4", priority: 0.7 },
  { path: "/verktoy/nar-bor-du-ta-tak", priority: 0.7 },
  { path: "/kilder", priority: 0.6 },
  { path: "/om", priority: 0.5 },
  { path: "/personvern", priority: 0.4 },
  { path: "/ansvarsfraskrivelse", priority: 0.4 },
  { path: "/annonser-og-samarbeid", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
