import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <header className="border-b border-border">
        <PageContainer className="flex items-center justify-between py-5">
          <Image
            src={site.brand.lightLogo}
            alt="RURANGO"
            width={180}
            height={40}
            priority
            className="h-8 w-auto"
          />
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-foreground-muted">
            Phase 1 foundation
          </p>
        </PageContainer>
      </header>

      <PageContainer className="flex flex-1 flex-col gap-16 py-16 md:py-24">
        <section className="max-w-2xl space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Technology portfolio
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {site.tagline}
          </h1>
          <p className="max-w-xl text-lg text-foreground-secondary">
            {site.description}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-brand-charcoal">
              Brand green
            </span>
            <span className="inline-flex items-center rounded-md border border-border bg-surface px-4 py-2 text-sm text-foreground">
              Raised charcoal
            </span>
            <span className="inline-flex items-center rounded-md border border-border-strong px-4 py-2 text-sm text-foreground-secondary">
              Focus ring ready
            </span>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Verified project sources
            </h2>
            <p className="max-w-xl text-foreground-secondary">
              Content model seeded from public product sites. Full pages arrive
              in later phases.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3">
            {projects.map((project) => (
              <li
                key={project.slug}
                className="rounded-lg border border-border bg-surface p-5"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                  {project.status.replace("-", " ")}
                </p>
                <h3 className="mt-2 text-lg font-medium">{project.title}</h3>
                <p className="mt-2 text-sm text-foreground-secondary">
                  {project.summary}
                </p>
                <a
                  href={project.liveUrl}
                  className="mt-4 inline-block text-sm text-accent underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.liveUrl.replace("https://", "")}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-6 rounded-xl border border-border bg-background-secondary p-6 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-medium text-foreground-muted">
              Dark surface logo
            </h2>
            <div className="mt-4 flex h-24 items-center rounded-lg bg-brand-charcoal-deep px-4">
              <Image
                src={site.brand.lightLogo}
                alt="RURANGO light logo on dark surface"
                width={200}
                height={44}
                className="h-9 w-auto"
              />
            </div>
          </div>
          <div>
            <h2 className="text-sm font-medium text-foreground-muted">
              Light surface logo
            </h2>
            <div className="mt-4 flex h-24 items-center rounded-lg bg-background-light px-4">
              <Image
                src={site.brand.darkLogo}
                alt="RURANGO dark logo on light surface"
                width={220}
                height={45}
                className="h-9 w-auto"
              />
            </div>
          </div>
        </section>
      </PageContainer>
    </main>
  );
}
