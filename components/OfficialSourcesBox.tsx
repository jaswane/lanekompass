import { Landmark, ExternalLink } from "lucide-react";
import { getSources, type SourceId } from "@/lib/sources";

/**
 * Kildeboks med relevante offentlige kilder. Skal vises på alle sider om lån,
 * gjeld, refinansiering, økonomiske problemer eller kreditt.
 */
export function OfficialSourcesBox({
  ids,
  title = "Offentlige kilder",
  intro,
}: {
  ids: SourceId[];
  title?: string;
  intro?: string;
}) {
  const sources = getSources(ids);
  return (
    <section
      aria-label="Offentlige kilder"
      className="rounded-2xl border border-line bg-surface px-5 py-5"
    >
      <h2 className="flex items-center gap-2 text-base font-semibold text-ink mb-1">
        <Landmark aria-hidden className="h-4 w-4 text-accent" />
        {title}
      </h2>
      <p className="text-sm text-muted mb-4">
        {intro ??
          "Lånekompass.no bygger på offentlige kilder slik at du selv kan etterprøve informasjonen."}
      </p>
      <ul className="space-y-3">
        {sources.map((s) => (
          <li key={s.id} className="text-sm">
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline underline-offset-4"
            >
              {s.name}
              <ExternalLink aria-hidden className="h-3.5 w-3.5 opacity-70" />
            </a>
            <p className="text-muted mt-0.5">{s.blurb}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
