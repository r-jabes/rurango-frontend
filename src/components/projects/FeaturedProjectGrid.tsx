import Link from "next/link";
import type { Project } from "@/content/projects";
import { Reveal } from "@/components/visuals/Reveal";
import { cn } from "@/lib/cn";
import { ProjectMedia } from "./ProjectMedia";
import { ProjectMetadata } from "./ProjectMetadata";

type FeaturedProjectGridProps = {
  projects: Project[];
  className?: string;
};

/**
 * Editorial project showcase — stacked rows with fixed-aspect media.
 * Stretched hit target + pointer-events-none on chrome so hover/click work.
 */
export function FeaturedProjectGrid({
  projects,
  className,
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
                    alt={`${project.title} product interface`}
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
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
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
                    </h3>
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
