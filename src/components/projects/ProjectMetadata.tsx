import type { Project } from "@/content/projects";
import { Badge } from "@/components/ui/Badge";

type ProjectMetadataProps = {
  project: Project;
};

const TYPE_LABELS: Record<Project["projectType"], string> = {
  product: "Product",
  client: "Client project",
  internal: "Internal tool",
  personal: "Personal project",
  concept: "Concept",
};

const STATUS_LABELS: Record<Project["status"], string> = {
  shipped: "Shipped",
  "in-progress": "In progress",
  "soft-launch": "Soft launch",
  concept: "Concept",
};

export function ProjectMetadata({ project }: ProjectMetadataProps) {
  const items = [
    project.year ? String(project.year) : null,
    TYPE_LABELS[project.projectType],
    STATUS_LABELS[project.status],
  ].filter((item): item is string => Boolean(item));

  // A concept type with a concept status would read twice.
  const unique = [...new Set(items)];

  return (
    <div className="flex flex-wrap gap-2">
      {unique.map((item) => (
        <Badge key={item}>{item}</Badge>
      ))}
    </div>
  );
}
