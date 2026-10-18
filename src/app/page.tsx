import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { FeaturedProjectGrid } from "@/components/projects/FeaturedProjectGrid";
import { CapabilityItem } from "@/components/sections/CapabilityItem";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { HomeHero } from "@/components/sections/HomeHero";
import { PrincipleCard } from "@/components/sections/PrincipleCard";
import { DirectionalLink } from "@/components/ui/DirectionalLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/visuals/Reveal";
import { capabilities, principles } from "@/content/capabilities";
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
            title="Products in production"
            description="Umutungo for property operations, Umugina for local commerce, and Rojisitiri for multi-store retail — evidence of how RURANGO designs and ships software."
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
              title="What RURANGO delivers"
              description="Custom software, websites and web applications, search engine optimization, Google Business Profile setup, frontend engineering, and operations platforms."
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

      <Reveal>
        <PageContainer className="space-y-10 py-16 md:py-24">
          <SectionHeading
            eyebrow="Studio"
            title="Working principles"
            description="The standards that guide how products and services are designed, engineered, and delivered."
            action={
              <DirectionalLink href="/studio">About the studio</DirectionalLink>
            }
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <li key={principle.title}>
                <PrincipleCard
                  title={principle.title}
                  description={principle.description}
                  index={index}
                />
              </li>
            ))}
          </ul>
        </PageContainer>
      </Reveal>

      <ClosingCta />
    </>
  );
}
