import { Lock } from "lucide-react";
import { DisclaimerBox } from "./DisclaimerBox";

/**
 * Felles ramme for kalkulatorer. Viser tydelig at ingenting lagres på server,
 * og avslutter med veiledende ansvarsfraskrivelse.
 */
export function CalculatorShell({
  children,
  privacyNote = "Tallene lagres ikke hos Lånekompass.no. Alt regnes ut lokalt i nettleseren din.",
  disclaimer,
}: {
  children: React.ReactNode;
  privacyNote?: string;
  disclaimer?: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <p className="flex items-center gap-2 text-sm text-accent bg-accent-soft/50 border border-accent-soft rounded-xl px-4 py-2.5">
        <Lock aria-hidden className="h-4 w-4 shrink-0" />
        {privacyNote}
      </p>

      {children}

      <DisclaimerBox>{disclaimer}</DisclaimerBox>
    </div>
  );
}
