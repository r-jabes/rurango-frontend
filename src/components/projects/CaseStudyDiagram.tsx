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
    label: "How the product is structured",
    nodes: ["Ops workspace", "Units & leases", "Public listings", "Prospects"],
    accent: "Owners run the portfolio privately; vacant units can go on a public listings site.",
  },
  umugina: {
    label: "How the product is structured",
    nodes: ["Shoppers", "Explore & compare", "Shop catalogs", "Agents"],
    accent: "Shoppers find local stock first; businesses list catalogs; agents earn on referred sales.",
  },
  rojisitiri: {
    label: "How the product is structured",
    nodes: ["POS floor", "Inventory", "Customer credit", "Owner reports"],
    accent: "The till, the stockroom, and the owner reports share one system.",
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
                className="diagram-node rounded-lg border border-border bg-background/70 px-3 py-4 backdrop-blur-sm"
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
        {diagram.label} — diagram only, not a product screenshot.
      </figcaption>
    </figure>
  );
}
