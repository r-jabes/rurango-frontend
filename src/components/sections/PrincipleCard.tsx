import { cn } from "@/lib/cn";

type PrincipleCardProps = {
  title: string;
  description: string;
  index?: number;
  className?: string;
};

export function PrincipleCard({
  title,
  description,
  index,
  className,
}: PrincipleCardProps) {
  return (
    <article
      className={cn(
        "rounded-xl border border-border bg-surface p-5 sm:p-6",
        className,
      )}
    >
      {typeof index === "number" ? (
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
          {String(index + 1).padStart(2, "0")}
        </p>
      ) : null}
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm text-foreground-secondary">{description}</p>
    </article>
  );
}
