import type { Project } from "@/content/projects";
import { cn } from "@/lib/cn";
import { ProjectCard } from "./ProjectCard";

type FeaturedProjectGridProps = {
  projects: Project[];
  className?: string;
};

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

  const [lead, ...rest] = projects;

  return (
    <ul
      className={cn(
        "grid gap-5 lg:grid-cols-2",
        className,
      )}
    >
      <li className="lg:row-span-2">
        <ProjectCard project={lead} index={0} featured />
      </li>
      {rest.map((project, index) => (
        <li key={project.slug}>
          <ProjectCard project={project} index={index + 1} className="h-full" />
        </li>
      ))}
    </ul>
  );
}
