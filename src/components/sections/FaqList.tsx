import { cn } from "@/lib/cn";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  items: readonly FaqItem[];
  className?: string;
};

/** Native disclosure widgets — keyboard accessible with no client JavaScript. */
export function FaqList({ items, className }: FaqListProps) {
  return (
    <div className={cn("border-y border-border", className)}>
      {items.map((item) => (
        <details
          key={item.question}
          className="group border-t border-border first:border-t-0"
        >
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-4 text-base font-medium text-foreground transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <span
              aria-hidden="true"
              className="font-mono text-lg text-accent transition-transform duration-[var(--motion-base)] ease-[var(--ease-out)] group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-2xl pb-5 text-sm text-foreground-secondary sm:text-base">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
