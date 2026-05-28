import { Info } from "lucide-react";

/**
 * Standard ansvarsfraskrivelse. Skal være tydelig på at Lånekompass.no ikke
 * gir personlig økonomisk rådgivning og at beregninger er veiledende.
 */
export function DisclaimerBox({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <aside
      className={`card-soft px-4 py-3 flex gap-3 text-sm text-muted ${className}`}
    >
      <Info aria-hidden className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
      <p className="leading-relaxed">
        {children ??
          "Beregninger og innhold på Lånekompass.no er veiledende og til informasjon. Vi er ikke bank, låneformidler eller økonomisk rådgiver, og gir ikke personlig økonomisk rådgivning. Sjekk alltid vilkår og tall hos den enkelte tilbyder før du tar valg."}
      </p>
    </aside>
  );
}
