import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/PageContainer";
import { CaseStudyDiagram } from "@/components/projects/CaseStudyDiagram";
import { CaseStudySection } from "@/components/projects/CaseStudySection";
import { ProjectMetadata } from "@/components/projects/ProjectMetadata";
import { RelatedProjects } from "@/components/projects/RelatedProjects";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DirectionalLink } from "@/components/ui/DirectionalLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  getProjectBySlug,
  getRelatedProjects,
  projects,
} from "@/content/projects";

type WorkCaseParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: WorkCaseParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} · RURANGO`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function WorkCasePage({
  params,
}: {
  params: WorkCaseParams;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.slug);

  return (
    <main>
      <PageContainer className="border-b border-border py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
          <div className="max-w-3xl space-y-5">
            <Eyebrow>Case study</Eyebrow>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <p className="text-lg text-foreground-secondary">
              {project.summary}
            </p>
            <ProjectMetadata project={project} />
            {project.role ? (
              <p className="text-sm text-foreground-muted">
                Role:{" "}
                <span className="text-foreground-secondary">{project.role}</span>
              </p>
            ) : null}
            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit live site
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary">
                Back to work
              </ButtonLink>
            </div>
          </div>
          <CaseStudyDiagram project={project} />
        </div>
      </PageContainer>

      <PageContainer className="space-y-12 py-12 md:space-y-16 md:py-16">
        {project.audience ? (
          <CaseStudySection title="Audience">
            <p>{project.audience}</p>
          </CaseStudySection>
        ) : null}

        {project.context ? (
          <CaseStudySection title="Context">
            <p>{project.context}</p>
          </CaseStudySection>
        ) : null}

        {project.problem ? (
          <CaseStudySection title="Problem">
            <p>{project.problem}</p>
          </CaseStudySection>
        ) : null}

        {project.constraints?.length ? (
          <CaseStudySection title="Constraints">
            <ul className="list-disc space-y-2 pl-5">
              {project.constraints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CaseStudySection>
        ) : null}

        {project.scope?.length ? (
          <CaseStudySection title="Role and scope">
            {project.role ? (
              <p>
                RURANGO contribution:{" "}
                <span className="text-foreground">{project.role}</span>.
              </p>
            ) : null}
            <ul className="list-disc space-y-2 pl-5">
              {project.scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CaseStudySection>
        ) : null}

        {project.approach ? (
          <CaseStudySection title="Approach">
            <p>{project.approach}</p>
          </CaseStudySection>
        ) : null}

        {project.decisions?.length ? (
          <CaseStudySection title="Key decisions">
            <ul className="space-y-5">
              {project.decisions.map((decision) => (
                <li
                  key={decision.title}
                  className="rounded-lg border border-border bg-surface p-4"
                >
                  <h3 className="font-medium text-foreground">
                    {decision.title}
                  </h3>
                  <p className="mt-2 text-sm">{decision.detail}</p>
                </li>
              ))}
            </ul>
          </CaseStudySection>
        ) : null}

        {project.implementation ? (
          <CaseStudySection title="Implementation">
            <p>{project.implementation}</p>
            {project.capabilities?.length ? (
              <ul className="list-disc space-y-2 pl-5">
                {project.capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </CaseStudySection>
        ) : null}

        {project.outcomes?.length ? (
          <CaseStudySection title="Outcomes">
            <ul className="list-disc space-y-2 pl-5">
              {project.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm text-foreground-muted">
              Outcomes are limited to verified public deliverables — no invented
              metrics.
            </p>
          </CaseStudySection>
        ) : null}

        {project.learnings?.length ? (
          <CaseStudySection title="Reflection">
            <ul className="list-disc space-y-2 pl-5">
              {project.learnings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CaseStudySection>
        ) : null}

        {project.notes ? (
          <aside className="max-w-2xl rounded-lg border border-border bg-background-secondary p-4 text-sm text-foreground-secondary">
            {project.notes}
          </aside>
        ) : null}

        <div className="flex flex-wrap gap-4">
          <DirectionalLink href="/work">All work</DirectionalLink>
          <DirectionalLink href="/contact">Discuss related work</DirectionalLink>
        </div>

        <RelatedProjects projects={related} />
      </PageContainer>

      <ClosingCta />
    </main>
  );
}
