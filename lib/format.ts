/**
 * Norske tall-helpere. Bruk alltid disse i kalkulatorer — aldri rå
 * parseFloat/toFixed, som ikke håndterer komma og tusenskille korrekt.
 */

/** Tolker norsk tallinput: "12 500,50" / "12.500" / "1234.56" → number. */
export function parseNorwegianNumber(raw: string): number {
  if (!raw) return NaN;
  let s = raw.trim().replace(/\s/g, "").replace(/kr/gi, "");
  // Hvis både punktum og komma finnes: punktum = tusenskille, komma = desimal.
  if (s.includes(",") && s.includes(".")) {
    s = s.replace(/\./g, "").replace(",", ".");
  } else if (s.includes(",")) {
    s = s.replace(",", ".");
  }
  const n = Number(s);
  return Number.isFinite(n) ? n : NaN;
}

const nf0 = new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 0 });
const nf2 = new Intl.NumberFormat("nb-NO", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatNumber(n: number, decimals: 0 | 2 = 0): string {
  if (!Number.isFinite(n)) return "–";
  return decimals === 2 ? nf2.format(n) : nf0.format(n);
}

export function formatKr(n: number, decimals: 0 | 2 = 0): string {
  if (!Number.isFinite(n)) return "–";
  return `${formatNumber(n, decimals)} kr`;
}

export function formatPercent(n: number, decimals = 2): string {
  if (!Number.isFinite(n)) return "–";
  return `${new Intl.NumberFormat("nb-NO", {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  }).format(n)} %`;
}

/**
 * Annuitetslån: månedlig betaling for et lån.
 * @param principal hovedstol
 * @param annualNominalRatePct nominell årsrente i prosent
 * @param months løpetid i måneder
 */
export function monthlyPayment(
  principal: number,
  annualNominalRatePct: number,
  months: number
): number {
  if (!(principal > 0) || !(months > 0)) return NaN;
  const r = annualNominalRatePct / 100 / 12;
  if (r === 0) return principal / months;
  return (principal * r) / (1 - Math.pow(1 + r, -months));
}
