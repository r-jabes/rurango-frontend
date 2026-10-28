import Link from "next/link";
import { DirectionalLink } from "@/components/ui/DirectionalLink";
import type { Capability } from "@/content/capabilities";
import { getProjectBySlug } from "@/content/projects";
import { cn } from "@/lib/cn";

type CapabilityItemProps = {
  capability: Capability;
  index?: number;
  className?: string;
  /** Home variant: title links to the full entry, summary only. */
  compact?: boolean;
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus";

function DetailLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-muted">
      {children}
    </p>
  );
}

export function CapabilityItem({
  capability,
  index,
  className,
  compact = false,
}: CapabilityItemProps) {
  const related = capability.relatedSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is NonNullable<typeof project> =>
      Boolean(project),
    );

  return (
    <article
      id={compact ? undefined : capability.id}
      className={cn(
        "border-t border-border first:border-t-0 first:pt-0",
        compact ? "py-6" : "scroll-mt-24 py-8 md:py-10",
        className,
      )}
    >
      <div className="grid gap-4 md:grid-cols-[auto_1fr] md:gap-8">
        {typeof index === "number" ? (
          <p className="font-mono text-xs text-accent">
            {String(index + 1).padStart(2, "0")}
          </p>
        ) : null}
        <div className={cn("space-y-6", compact && "space-y-2")}>
          <div className="space-y-2">
            <h3
              className={cn(
                "font-semibold tracking-tight text-foreground",
                compact ? "text-xl" : "text-xl md:text-2xl",
              )}
            >
              {compact ? (
                <Link
                  href={`/capabilities#${capability.id}`}
                  className={cn(
                    "rounded-sm transition-colors hover:text-accent",
                    focusRing,
                  )}
                >
                  {capability.title}
                </Link>
              ) : (
                capability.title
              )}
            </h3>
            <p className="max-w-2xl text-sm text-foreground-secondary sm:text-base">
              {compact ? capability.summary : capability.description}
            </p>
          </div>

          {!compact ? (
            <>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <DetailLabel>Problem it addresses</DetailLabel>
                  <p className="text-sm text-foreground-secondary">
                    {capability.problem}
                  </p>
                </div>
                <div className="space-y-2">
                  <DetailLabel>Who it is for</DetailLabel>
                  <p className="text-sm text-foreground-secondary">
                    {capability.forWhom}
                  </p>
                </div>
                <div className="space-y-2">
                  <DetailLabel>Typical deliverables</DetailLabel>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-foreground-secondary">
                    {capability.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <DetailLabel>What to bring</DetailLabel>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-foreground-secondary">
                    {capability.youProvide.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                {related.length > 0 ? (
                  <div className="space-y-2">
                    <DetailLabel>Project evidence</DetailLabel>
                    <ul className="flex flex-wrap gap-2">
                      {related.map((project) => (
                        <li key={project.slug}>
                          <Link
                            href={`/work/${project.slug}`}
                            className={cn(
                              "inline-flex min-h-11 items-center rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent",
                              focusRing,
                            )}
                          >
                            {project.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="text-sm text-foreground-muted">
                    Offered as a service engagement.
                  </p>
                )}
                <DirectionalLink
                  href={`/contact?service=${capability.inquiryType}`}
                >
                  Ask about this service
                </DirectionalLink>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </article>
  );
}
