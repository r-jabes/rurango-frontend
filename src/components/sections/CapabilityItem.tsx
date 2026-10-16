import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CapabilityItemProps = {
  title: string;
  description: string;
  evidence?: ReactNode;
  index?: number;
  className?: string;
};

export function CapabilityItem({
  title,
  description,
  evidence,
  index,
  className,
}: CapabilityItemProps) {
  return (
    <article
      className={cn(
        "border-t border-border py-6 first:border-t-0 first:pt-0",
        className,
      )}
    >
      <div className="grid gap-3 md:grid-cols-[auto_1fr] md:gap-6">
        {typeof index === "number" ? (
          <p className="font-mono text-xs text-accent">
            {String(index + 1).padStart(2, "0")}
          </p>
        ) : null}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="max-w-2xl text-sm text-foreground-secondary sm:text-base">
            {description}
          </p>
          {evidence ? <div className="pt-2">{evidence}</div> : null}
        </div>
      </div>
    </article>
  );
}
