import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { PageIntro } from "@/components/sections/PageIntro";
import { TextAreaField, TextField } from "@/components/forms/FormField";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with RURANGO about a product, collaboration, or opportunity.",
};

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Contact"
        title="Start a conversation"
        description="Share a short note about your project or opportunity. Form submission will be connected in a later phase — this page shows the shared field components for now."
      />
      <PageContainer className="py-12 md:py-16">
        <form className="max-w-xl space-y-5" noValidate>
          <TextField
            id="name"
            name="name"
            label="Name"
            required
            autoComplete="name"
            placeholder="Your name"
          />
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            required
            autoComplete="email"
            placeholder="you@example.com"
          />
          <TextField
            id="organization"
            name="organization"
            label="Organization"
            autoComplete="organization"
            placeholder="Company or team"
          />
          <TextAreaField
            id="message"
            name="message"
            label="Project description"
            required
            placeholder="What are you building, and how can RURANGO help?"
          />
          <div className="space-y-3 pt-2">
            <Button type="submit" disabled>
              Submit inquiry
            </Button>
            <p className="text-sm text-foreground-muted">
              Submission is not operational yet. A real delivery channel will be
              wired in Phase 6.
            </p>
          </div>
        </form>
      </PageContainer>
    </main>
  );
}
