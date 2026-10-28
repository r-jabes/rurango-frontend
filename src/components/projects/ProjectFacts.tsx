import type { Project } from "@/content/projects";

type ProjectFactsProps = {
  project: Project;
};

function hostnameOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

/** Key facts under the case-study title. Rows without data are omitted. */
export function ProjectFacts({ project }: ProjectFactsProps) {
  const rows = [
    { label: "Role", value: project.role },
    {
      label: "Built with",
      value: project.technologies?.length
        ? project.technologies.join(", ")
        : undefined,
    },
    { label: "Live at", value: hostnameOf(project.liveUrl) ?? undefined },
  ].filter((row): row is { label: string; value: string } =>
    Boolean(row.value),
  );

  if (rows.length === 0) return null;

  return (
    <dl className="grid gap-x-8 gap-y-3 border-t border-border pt-5 text-sm sm:grid-cols-[auto_1fr]">
      {rows.map((row) => (
        <div key={row.label} className="contents">
          <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-muted sm:pt-0.5">
            {row.label}
          </dt>
          <dd className="text-foreground-secondary">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
