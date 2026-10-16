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
    "Selected digital products from RURANGO — property operations, local commerce, and retail systems.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work · RURANGO",
    description:
      "Selected digital products from RURANGO — property operations, local commerce, and retail systems.",
    url: "/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Work"
        title="Selected products"
        description="Three live product surfaces across PropTech, local commerce, and retail operations. Case studies use public product facts only — no invented clients or metrics."
        actions={
          <ButtonLink href="/contact" variant="secondary">
            Discuss a project
          </ButtonLink>
        }
      />
      <PageContainer className="space-y-8 py-12 md:py-16">
        <p className="max-w-2xl text-sm text-foreground-muted">
          Editorial order: property operations, marketplace discovery, then
          retail systems. Filters are omitted while the portfolio stays small.
        </p>
        <FeaturedProjectGrid projects={projects} />
      </PageContainer>
      <ClosingCta />
    </>
  );
}
