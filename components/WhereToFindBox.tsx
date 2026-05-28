import { Search } from "lucide-react";

/**
 * "Hvor finner du dette?" / "Se her først"-boks. Konkret, praktisk
 * veiledning om hvor brukeren finner et tall eller dokument.
 */
export function WhereToFindBox({
  title = "Hvor finner du dette?",
  items,
  children,
}: {
  title?: string;
  items?: string[];
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-accent-soft bg-accent-soft/40 px-4 py-4">
      <p className="flex items-center gap-2 text-sm font-semibold text-accent mb-2">
        <Search aria-hidden className="h-4 w-4" />
        {title}
      </p>
      {items && (
        <ul className="space-y-1.5 text-sm text-ink/90">
          {items.map((it, i) => (
            <li key={i} className="flex gap-2">
              <span aria-hidden className="text-accent">
                •
              </span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      )}
      {children && <div className="text-sm text-ink/90">{children}</div>}
    </div>
  );
}
