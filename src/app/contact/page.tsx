import type { Metadata } from "next";
import { Suspense } from "react";
import { connection } from "next/server";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageContainer } from "@/components/layout/PageContainer";
import { PageIntro } from "@/components/sections/PageIntro";
import { isContactConfigured } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with RURANGO about a product, collaboration, or opportunity.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · RURANGO",
    description:
      "Start a conversation with RURANGO about a product, collaboration, or opportunity.",
    url: "/contact",
  },
};

async function ContactFormSection() {
  await connection();
  const configured = isContactConfigured();
  return <ContactForm configured={configured} />;
}

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Start a conversation"
        description="Share a short note about a product to build, improve, or launch — or about a collaboration or opportunity. Required fields are marked."
      />
      <PageContainer className="py-12 md:py-16">
        <Suspense
          fallback={
            <div className="max-w-xl space-y-5" aria-hidden="true">
              <div className="h-16 rounded-md bg-surface" />
              <div className="h-16 rounded-md bg-surface" />
              <div className="h-16 rounded-md bg-surface" />
              <div className="h-32 rounded-md bg-surface" />
            </div>
          }
        >
          <ContactFormSection />
        </Suspense>
      </PageContainer>
    </>
  );
}
