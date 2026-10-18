import Link from "next/link";
import type { Capability } from "@/content/capabilities";
import { getProjectBySlug } from "@/content/projects";
import { cn } from "@/lib/cn";

type CapabilityItemProps = {
  capability: Capability;
  index?: number;
  className?: string;
  compact?: boolean;
};

export function CapabilityItem({
  capability,
  index,
  className,
  compact = false,
}: CapabilityItemProps) {
  const related = capability.relatedSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter(Boolean);

  return (
    <article
      className={cn(
        "border-t border-border first:border-t-0 first:pt-0",
        compact ? "py-6" : "py-8 md:py-10",
        className,
      )}
    >
      <div className="grid gap-4 md:grid-cols-[auto_1fr] md:gap-8">
        {typeof index === "number" ? (
          <p className="font-mono text-xs text-accent">
            {String(index + 1).padStart(2, "0")}
          </p>
        ) : null}
        <div className={cn("space-y-5", compact && "space-y-2")}>
          <div className="space-y-2">
            <h3
              className={cn(
                "font-semibold tracking-tight text-foreground",
                compact ? "text-xl" : "text-xl md:text-2xl",
              )}
            >
              {capability.title}
            </h3>
            <p className="max-w-2xl text-sm text-foreground-secondary sm:text-base">
              {capability.description}
            </p>
          </div>

          {!compact ? (
            <>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-muted">
                    Problem it addresses
                  </p>
                  <p className="text-sm text-foreground-secondary">
                    {capability.problem}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-muted">
                    Typical deliverables
                  </p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-foreground-secondary">
                    {capability.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {related.length > 0 ? (
                <div className="space-y-2">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-muted">
                    Project evidence
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {related.map((project) =>
                      project ? (
                        <li key={project.slug}>
                          <Link
                            href={`/work/${project.slug}`}
                            className="inline-flex rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                          >
                            {project.title}
                          </Link>
                        </li>
                      ) : null,
                    )}
                  </ul>
                </div>
              ) : (
                <p className="text-sm text-foreground-muted">
                  Offered as a service engagement.{" "}
                  <Link
                    href="/contact"
                    className="text-foreground-secondary underline-offset-2 hover:text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                  >
                    Contact RURANGO
                  </Link>{" "}
                  to discuss scope.
                </p>
              )}
            </>
          ) : null}
        </div>
      </div>
    </article>
  );
}
