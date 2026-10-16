import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectMetadata } from "@/components/projects/ProjectMetadata";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DirectionalLink } from "@/components/ui/DirectionalLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getProjectBySlug, projects } from "@/content/projects";

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

  return (
    <main>
      <PageContainer className="border-b border-border py-14 md:py-20">
        <div className="max-w-3xl space-y-5">
          <Eyebrow>Case study</Eyebrow>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="text-lg text-foreground-secondary">{project.summary}</p>
          <ProjectMetadata project={project} />
          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Visit live site
            </ButtonLink>
            <ButtonLink href="/work" variant="secondary">
              Back to work
            </ButtonLink>
          </div>
        </div>
      </PageContainer>

      <PageContainer className="space-y-10 py-12 md:py-16">
        {project.context ? (
          <section className="max-w-2xl space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">Context</h2>
            <p className="text-foreground-secondary">{project.context}</p>
          </section>
        ) : null}
        {project.problem ? (
          <section className="max-w-2xl space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">Problem</h2>
            <p className="text-foreground-secondary">{project.problem}</p>
          </section>
        ) : null}
        {project.approach ? (
          <section className="max-w-2xl space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">Approach</h2>
            <p className="text-foreground-secondary">{project.approach}</p>
          </section>
        ) : null}
        {project.capabilities?.length ? (
          <section className="max-w-2xl space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">
              Capabilities demonstrated
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-foreground-secondary">
              {project.capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}
        {project.notes ? (
          <section className="max-w-2xl rounded-lg border border-border bg-surface p-4 text-sm text-foreground-secondary">
            {project.notes}
          </section>
        ) : null}
        <DirectionalLink href="/contact">Discuss related work</DirectionalLink>
      </PageContainer>
    </main>
  );
}
