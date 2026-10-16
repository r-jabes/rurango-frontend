import type { Project } from "@/content/projects";
import { DirectionalLink } from "@/components/ui/DirectionalLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProjectCard } from "./ProjectCard";

type RelatedProjectsProps = {
  projects: Project[];
};

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <section className="space-y-6 border-t border-border pt-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <Eyebrow tone="muted">Related work</Eyebrow>
          <h2 className="text-2xl font-semibold tracking-tight">
            Continue exploring
          </h2>
        </div>
        <DirectionalLink href="/work">All work</DirectionalLink>
      </div>
      <ul className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, index) => (
          <li key={project.slug}>
            <ProjectCard project={project} index={index} />
          </li>
        ))}
      </ul>
    </section>
  );
}
