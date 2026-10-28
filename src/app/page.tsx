import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { FeaturedProjectGrid } from "@/components/projects/FeaturedProjectGrid";
import { CapabilityItem } from "@/components/sections/CapabilityItem";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { HomeHero } from "@/components/sections/HomeHero";
import { DirectionalLink } from "@/components/ui/DirectionalLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/visuals/Reveal";
import { capabilities } from "@/content/capabilities";
import { getFeaturedProjects } from "@/content/projects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: {
    absolute: `${site.name} · Software, web development & SEO`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} · Websites, applications & platforms`,
    description: site.description,
    url: "/",
  },
};

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <>
      <HomeHero />

      <Reveal>
        <PageContainer className="space-y-10 py-16 md:py-24">
          <SectionHeading
            eyebrow="Selected work"
            title="Live work, with the reasoning behind it"
            description="Each project shows the problem it addresses, the decisions made, and where it stands today."
            action={
              <DirectionalLink href="/work">View all work</DirectionalLink>
            }
          />
          <FeaturedProjectGrid projects={featured} />
        </PageContainer>
      </Reveal>

      <section className="border-y border-border bg-background-secondary">
        <Reveal>
          <PageContainer className="space-y-10 py-16 md:py-24">
            <SectionHeading
              eyebrow="Services"
              title="What you can hire RURANGO for"
              description="Scope, deliverables, and related projects for each service are on the services page."
              action={
                <DirectionalLink href="/capabilities">
                  All services
                </DirectionalLink>
              }
            />
            <div className="border-t border-border">
              {capabilities.map((capability, index) => (
                <CapabilityItem
                  key={capability.title}
                  capability={capability}
                  index={index}
                  compact
                />
              ))}
            </div>
          </PageContainer>
        </Reveal>
      </section>

      <ClosingCta />
    </>
  );
}
