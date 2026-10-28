import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { FeaturedProjectGrid } from "@/components/projects/FeaturedProjectGrid";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { PageIntro } from "@/components/sections/PageIntro";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from RURANGO: software for property operations, local commerce, and multi-store retail, plus a client wholesale website. Each project shows its scope, decisions, and status.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work · RURANGO",
    description:
      "Software products and client websites, with the scope delivered and the decisions behind each.",
    url: "/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Work"
        title="Selected work"
        description="Software products and client websites that are live today. Each entry lists what was delivered, the decisions behind it, and where it stands."
        actions={
          <ButtonLink href="/contact" variant="secondary">
            Discuss a similar project
          </ButtonLink>
        }
      />
      <PageContainer className="space-y-8 py-12 md:py-16">
        <FeaturedProjectGrid projects={projects} />
      </PageContainer>
      <ClosingCta />
    </>
  );
}
