import Link from "next/link";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/cn";
import { ProjectMedia } from "./ProjectMedia";
import { ProjectMetadata } from "./ProjectMetadata";

type ProjectCardProps = {
  project: Project;
  index?: number;
  className?: string;
  href?: string;
};

/** Compact card for dense grids — media keeps a fixed aspect ratio. */
export function ProjectCard({
  project,
  index,
  className,
  href,
}: ProjectCardProps) {
  const destination = href ?? `/work/${project.slug}`;

  return (
    <article
      className={cn(
        "group relative flex flex-col gap-4 rounded-xl border border-border bg-surface p-3",
        "transition-[border-color,background-color] duration-[var(--motion-base)] ease-[var(--ease-out)]",
        "hover:border-border-strong hover:bg-surface-secondary/40 focus-within:border-accent",
        className,
      )}
    >
      <ProjectMedia
        src={project.previewImage}
        alt={`${project.title} product interface`}
        aspect="cover"
        fit="contain"
      />

      <div className="flex flex-col gap-3 px-1 pb-2">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2">
            {typeof index === "number" ? (
              <p className="pointer-events-none font-mono text-[11px] text-foreground-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
            ) : null}
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              <Link
                href={destination}
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
          </div>
          <span
            aria-hidden="true"
            className="pointer-events-none relative z-[2] mt-1 inline-block text-accent opacity-70 transition-[opacity,transform] duration-[var(--motion-base)] ease-[var(--ease-out)] group-hover:translate-x-1.5 group-hover:opacity-100 group-focus-within:translate-x-1.5 group-focus-within:opacity-100"
          >
            →
          </span>
        </div>

        <p className="pointer-events-none text-sm text-foreground-secondary">
          {project.summary}
        </p>
        <div className="pointer-events-none">
          <ProjectMetadata project={project} />
        </div>
      </div>
    </article>
  );
}
