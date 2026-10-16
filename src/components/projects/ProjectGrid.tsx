import type { Project } from "@/content/projects";
import { cn } from "@/lib/cn";
import { ProjectCard } from "./ProjectCard";

type ProjectGridProps = {
  projects: Project[];
  className?: string;
  showIndex?: boolean;
};

export function ProjectGrid({
  projects,
  className,
  showIndex = true,
}: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-border px-4 py-8 text-center text-sm text-foreground-secondary">
        No projects to show yet.
      </p>
    );
  }

  return (
    <ul
      className={cn(
        "grid gap-5 sm:grid-cols-2 xl:grid-cols-3",
        className,
      )}
    >
      {projects.map((project, index) => (
        <li key={project.slug}>
          <ProjectCard
            project={project}
            index={showIndex ? index : undefined}
          />
        </li>
      ))}
    </ul>
  );
}
