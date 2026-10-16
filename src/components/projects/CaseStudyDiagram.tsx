import type { Project } from "@/content/projects";
import { cn } from "@/lib/cn";

type CaseStudyDiagramProps = {
  project: Project;
  className?: string;
};

const diagrams: Record<
  string,
  { label: string; nodes: string[]; accent: string }
> = {
  umutungo: {
    label: "Illustrative system view from the public product",
    nodes: ["Ops workspace", "Units & leases", "Listings host", "Prospects"],
    accent: "Private ops stay separated from public vacancy browsing.",
  },
  umugina: {
    label: "Illustrative system view from the public product",
    nodes: ["Customers", "Explore & compare", "Business catalogs", "Agents"],
    accent: "Discovery connects shoppers to local sellers and attributed sales.",
  },
  rojisitiri: {
    label: "Illustrative system view from the public product",
    nodes: ["POS floor", "Inventory", "Customer credit", "Owner reports"],
    accent: "One operating picture for the floor and the back office.",
  },
};

export function CaseStudyDiagram({ project, className }: CaseStudyDiagramProps) {
  const diagram = diagrams[project.slug] ?? {
    label: "Illustrative product structure",
    nodes: ["Product surface", "Core workflow", "Participants"],
    accent: project.summary,
  };

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-surface",
        className,
      )}
    >
      <div className="relative aspect-[16/9] bg-[linear-gradient(160deg,var(--brand-charcoal-deep),var(--surface-primary)_55%,var(--background-secondary))] p-6 sm:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,var(--border-subtle)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-subtle)_1px,transparent_1px)] [background-size:32px_32px]"
        />
        <div className="relative flex h-full flex-col justify-between gap-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
            {project.title}
          </p>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {diagram.nodes.map((node, index) => (
              <li
                key={node}
                className="rounded-lg border border-border bg-background/70 px-3 py-4 backdrop-blur-sm"
              >
                <p className="font-mono text-[10px] text-foreground-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">
                  {node}
                </p>
              </li>
            ))}
          </ul>
          <p className="max-w-xl text-sm text-foreground-secondary">
            {diagram.accent}
          </p>
        </div>
      </div>
      <figcaption className="border-t border-border px-4 py-3 text-xs text-foreground-muted sm:px-5">
        {diagram.label}. Not a fabricated product screenshot.
      </figcaption>
    </figure>
  );
}
