import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhereToFindBox } from "./WhereToFindBox";

export interface StepAction {
  label: string;
  href: string;
}

/**
 * Ett steg i "Rydd økonomien". Menneskelig forklaring, valgfri
 * "Hvor finner du dette?"-boks og en neste handling.
 */
export function StepCard({
  number,
  title,
  body,
  whereToFind,
  action,
}: {
  number: number;
  title: string;
  body: React.ReactNode;
  whereToFind?: string[];
  action?: StepAction;
}) {
  return (
    <article className="card p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <span
          aria-hidden
          className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white font-display text-lg"
        >
          {number}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-xl text-ink tracking-display">
            {title}
          </h3>
          <div className="mt-2 text-ink/90 leading-relaxed prose-soft">
            {body}
          </div>

          {whereToFind && whereToFind.length > 0 && (
            <div className="mt-4">
              <WhereToFindBox items={whereToFind} />
            </div>
          )}

          {action && (
            <Link
              href={action.href}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-4"
            >
              {action.label}
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
