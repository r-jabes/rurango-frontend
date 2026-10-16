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
    "Selected work from RURANGO — Umutungo, Umugina, and Rojisitiri.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work · RURANGO",
    description:
      "Selected work from RURANGO — Umutungo, Umugina, and Rojisitiri.",
    url: "/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Work"
        title="Selected products"
        description="Three live products: property software for landlords, a marketplace for local shops, and retail ops for multi-store teams."
        actions={
          <ButtonLink href="/contact" variant="secondary">
            Discuss a project
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
