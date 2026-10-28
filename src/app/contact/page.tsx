import type { Metadata } from "next";
import { Suspense } from "react";
import { connection } from "next/server";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageContainer } from "@/components/layout/PageContainer";
import { ContactAside } from "@/components/sections/ContactAside";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AmbientSurface } from "@/components/visuals/AmbientSurface";
import { Reveal } from "@/components/visuals/Reveal";
import { isContactConfigured } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact RURANGO about a website, web application, custom software project, search engine optimization, or Google Business Profile setup.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · RURANGO",
    description:
      "Discuss a website, application, SEO, or Google Business Profile project with RURANGO.",
    url: "/contact",
  },
};

async function ContactFormSection() {
  await connection();
  const configured = isContactConfigured();
  return <ContactForm configured={configured} />;
}

function FormSkeleton() {
  return (
    <div className="max-w-xl space-y-5" aria-hidden="true">
      <div className="h-16 rounded-md bg-surface" />
      <div className="h-16 rounded-md bg-surface" />
      <div className="h-16 rounded-md bg-surface" />
      <div className="h-32 rounded-md bg-surface" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <AmbientSurface intensity="subtle" grid className="flex-1 border-b border-border">
      <PageContainer className="py-12 md:py-16 lg:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <Reveal className="lg:col-span-6 xl:col-span-6" variant="text">
            <div className="space-y-8">
              <header className="max-w-xl space-y-4">
                <Eyebrow>Contact</Eyebrow>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
                  Tell us what you need built or improved.
                </h1>
                <p className="text-base text-foreground-secondary sm:text-lg">
                  Share what you are trying to achieve, who it is for, and any
                  deadline. Required fields are marked.
                </p>
              </header>

              <Suspense fallback={<FormSkeleton />}>
                <ContactFormSection />
              </Suspense>
            </div>
          </Reveal>

          <Reveal
            className="lg:col-span-6 xl:col-span-6"
            variant="visual"
            delay={80}
          >
            <ContactAside />
          </Reveal>
        </div>
      </PageContainer>
    </AmbientSurface>
  );
}
