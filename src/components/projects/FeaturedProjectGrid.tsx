import Link from "next/link";
import type { Project } from "@/content/projects";
import { Reveal } from "@/components/visuals/Reveal";
import { cn } from "@/lib/cn";
import { ProjectMedia } from "./ProjectMedia";
import { ProjectMetadata } from "./ProjectMetadata";

const SCOPE_PREVIEW_COUNT = 3;

type FeaturedProjectGridProps = {
  projects: Project[];
  className?: string;
  /** Match the surrounding outline: "h2" under a page title, "h3" under a section heading. */
  headingLevel?: "h2" | "h3";
};

/**
 * Editorial project showcase — stacked rows with fixed-aspect media.
 * Stretched hit target + pointer-events-none on chrome so hover/click work.
 */
export function FeaturedProjectGrid({
  projects,
  className,
  headingLevel: Heading = "h3",
}: FeaturedProjectGridProps) {
  if (projects.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-border px-4 py-8 text-center text-sm text-foreground-secondary">
        No projects to show yet.
      </p>
    );
  }

  return (
    <ul className={cn("space-y-10 md:space-y-14", className)}>
      {projects.map((project, index) => {
        const reverse = index % 2 === 1;
        const href = `/work/${project.slug}`;

        return (
          <li key={project.slug}>
            <Reveal
              variant={index % 2 === 0 ? "media" : "section"}
              delay={index * 40}
            >
              <article
                className={cn(
                  "group relative grid items-center gap-6 md:gap-8 lg:grid-cols-12 lg:gap-10",
                )}
              >
                <div
                  className={cn("lg:col-span-7", reverse && "lg:order-2")}
                >
                  <ProjectMedia
                    src={project.previewImage}
                    alt={`Screenshot of the ${project.title} website`}
                    aspect="cover"
                    fit="contain"
                    priority={index === 0}
                  />
                </div>

                <div
                  className={cn(
                    "flex flex-col gap-4 lg:col-span-5",
                    reverse && "lg:order-1",
                  )}
                >
                  <p className="pointer-events-none font-mono text-[11px] text-foreground-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <div className="flex items-start justify-between gap-3">
                    <Heading className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      <Link
                        href={href}
                        className={cn(
                          "rounded-sm transition-colors duration-[var(--motion-base)] ease-[var(--ease-out)]",
                          "after:absolute after:inset-0 after:z-[1]",
                          "group-hover:text-accent group-focus-within:text-accent",
                          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
                        )}
                      >
                        {project.title}
                      </Link>
                    </Heading>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none relative z-[2] mt-1 inline-block text-accent transition-transform duration-[var(--motion-base)] ease-[var(--ease-out)] group-hover:translate-x-1.5 group-focus-within:translate-x-1.5"
                    >
                      →
                    </span>
                  </div>

                  <p className="pointer-events-none max-w-md text-sm text-foreground-secondary sm:text-base">
                    {project.summary}
                  </p>

                  {project.scope?.length ? (
                    <div className="pointer-events-none space-y-2">
                      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-muted">
                        Delivered
                      </p>
                      <ul className="list-disc space-y-1 pl-5 text-sm text-foreground-secondary">
                        {project.scope.slice(0, SCOPE_PREVIEW_COUNT).map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  <div className="pointer-events-none">
                    <ProjectMetadata project={project} />
                  </div>

                  <p className="pointer-events-none relative z-[2] mt-1 inline-flex items-center gap-2 text-sm font-medium text-accent">
                    <span className="underline-offset-4 transition-[text-decoration-color] duration-[var(--motion-base)] group-hover:underline group-focus-within:underline">
                      View case study
                    </span>
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-[var(--motion-base)] ease-[var(--ease-out)] group-hover:translate-x-1.5 group-focus-within:translate-x-1.5"
                    >
                      →
                    </span>
                  </p>
                </div>
              </article>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
