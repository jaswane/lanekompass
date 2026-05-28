import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHeader({
  kicker,
  title,
  lede,
  crumbs,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  crumbs?: Crumb[];
}) {
  return (
    <header className="narrow-container pt-10 pb-8 sm:pt-14">
      {crumbs && crumbs.length > 0 && (
        <div className="mb-5">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      )}
      {kicker && (
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent mb-3">
          {kicker}
        </p>
      )}
      <h1 className="font-display text-3xl sm:text-4xl text-ink tracking-display text-balance">
        {title}
      </h1>
      {lede && (
        <p className="mt-4 text-lg text-muted leading-relaxed max-w-2xl">
          {lede}
        </p>
      )}
    </header>
  );
}
