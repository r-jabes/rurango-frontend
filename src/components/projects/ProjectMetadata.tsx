import type { Project } from "@/content/projects";
import { Badge } from "@/components/ui/Badge";

type ProjectMetadataProps = {
  project: Project;
};

function formatStatus(status: Project["status"]) {
  return status.replace(/-/g, " ");
}

export function ProjectMetadata({ project }: ProjectMetadataProps) {
  const items = [
    project.year ? String(project.year) : null,
    project.projectType,
    formatStatus(project.status),
  ].filter(Boolean);

  if (items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge key={item}>{item}</Badge>
      ))}
    </div>
  );
}
