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
  featured?: boolean;
};

export function ProjectCard({
  project,
  index,
  className,
  href,
  featured = false,
}: ProjectCardProps) {
  const destination = href ?? `/work/${project.slug}`;

  return (
    <article
      className={cn(
        "group relative flex flex-col gap-4 rounded-xl border border-border bg-surface p-3 transition-colors duration-[var(--motion-base)]",
        "hover:border-border-strong focus-within:border-accent",
        featured && "h-full",
        className,
      )}
    >
      <ProjectMedia
        alt={`${project.title} preview`}
        aspect={featured ? "portrait" : "landscape"}
        className={featured ? "lg:min-h-[22rem]" : undefined}
      />

      <div className="flex flex-1 flex-col gap-3 px-1 pb-2">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2">
            {typeof index === "number" ? (
              <p className="font-mono text-[11px] text-foreground-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
            ) : null}
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              <Link
                href={destination}
                className="rounded-sm after:absolute after:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                {project.title}
              </Link>
            </h3>
          </div>
          <span
            aria-hidden="true"
            className="mt-1 text-accent opacity-0 transition-all duration-[var(--motion-base)] group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-within:opacity-100"
          >
            →
          </span>
        </div>

        <p className="text-sm text-foreground-secondary">{project.summary}</p>
        <ProjectMetadata project={project} />
      </div>
    </article>
  );
}
