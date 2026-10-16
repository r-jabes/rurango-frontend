"use client";

import { useActionState, useEffect, useId, useRef } from "react";
import { submitContactForm } from "@/app/contact/actions";
import { Button } from "@/components/ui/Button";
import { INQUIRY_TYPES, type ContactActionResult } from "@/lib/contact";
import { TextAreaField, TextField } from "./FormField";
import { SelectField } from "./SelectField";

type ContactFormProps = {
  configured: boolean;
};

const initialState: ContactActionResult | null = null;

export function ContactForm({ configured }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );
  const statusId = useId();
  const statusRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state) return;

    if (!state.ok && state.fieldErrors) {
      const order = ["name", "email", "message"] as const;
      for (const field of order) {
        if (state.fieldErrors[field]) {
          document.getElementById(field)?.focus();
          return;
        }
      }
    }

    statusRef.current?.focus();
    if (state.ok) {
      formRef.current?.reset();
    }
  }, [state]);

  const fieldErrors = state && !state.ok ? state.fieldErrors : undefined;

  return (
    <div className="space-y-6">
      {!configured ? (
        <div
          className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground-secondary"
          role="status"
        >
          Form delivery is not configured in this environment yet. You can still
          review the fields below; submissions will not be accepted until{" "}
          <code className="font-mono text-xs text-accent">RESEND_API_KEY</code>,{" "}
          <code className="font-mono text-xs text-accent">CONTACT_TO_EMAIL</code>
          , and{" "}
          <code className="font-mono text-xs text-accent">
            CONTACT_FROM_EMAIL
          </code>{" "}
          are set.
        </div>
      ) : null}

      <form
        ref={formRef}
        action={formAction}
        className="relative max-w-xl space-y-5"
        noValidate
        aria-describedby={statusId}
      >
        <TextField
          id="name"
          name="name"
          label="Name"
          required
          autoComplete="name"
          placeholder="Your name"
          disabled={pending}
          error={fieldErrors?.name}
        />
        <TextField
          id="email"
          name="email"
          type="email"
          label="Email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          disabled={pending}
          error={fieldErrors?.email}
        />
        <TextField
          id="organization"
          name="organization"
          label="Organization"
          autoComplete="organization"
          placeholder="Company or team"
          disabled={pending}
        />
        <SelectField
          id="inquiryType"
          name="inquiryType"
          label="Inquiry type"
          options={INQUIRY_TYPES}
          disabled={pending}
          error={fieldErrors?.inquiryType}
        />
        <TextAreaField
          id="message"
          name="message"
          label="Project description"
          required
          placeholder="What are you building, and how can RURANGO help?"
          disabled={pending}
          error={fieldErrors?.message}
        />

        <div
          className="pointer-events-none absolute left-0 top-0 -z-10 h-px w-px overflow-hidden opacity-0"
          aria-hidden="true"
        >
          <label htmlFor="companyWebsite">Company website</label>
          <input
            id="companyWebsite"
            name="companyWebsite"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="space-y-3 pt-2">
          <Button type="submit" loading={pending} disabled={!configured || pending}>
            {pending ? "Sending…" : "Submit inquiry"}
          </Button>

          <div
            id={statusId}
            ref={statusRef}
            tabIndex={-1}
            className="outline-none"
            aria-live="polite"
          >
            {state?.ok ? (
              <p className="rounded-lg border border-accent/40 bg-surface px-4 py-3 text-sm text-foreground">
                Message sent. Thanks — RURANGO will follow up at the email you
                provided.
              </p>
            ) : null}
            {state && !state.ok ? (
              <p
                className="rounded-lg border border-red-400/40 bg-surface px-4 py-3 text-sm text-red-200"
                role="alert"
              >
                {state.message}
              </p>
            ) : null}
          </div>

          <p className="text-sm text-foreground-muted">
            Inquiries are for product projects, collaborations, and
            opportunities. When delivery is configured, submissions are emailed
            to RURANGO and not stored in an application database by this site.
          </p>
        </div>
      </form>
    </div>
  );
}
