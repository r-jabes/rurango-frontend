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
    absolute: `${site.name} · ${site.tagline}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.name,
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
            title="Products in the wild"
            description="Umutungo for property ops, Umugina for local shopping, and Rojisitiri for multi-store retail."
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
              eyebrow="Capabilities"
              title="What RURANGO can build"
              description="Product design and engineering drawn from the same work that powers Umutungo, Umugina, and Rojisitiri."
              action={
                <DirectionalLink href="/capabilities">
                  All capabilities
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
            description="The standards that guide how products are designed and engineered."
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
