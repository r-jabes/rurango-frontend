"use client";

import { useCallback, useId, useRef, useState, useTransition } from "react";
import { submitContactForm } from "@/app/contact/actions";
import { Button } from "@/components/ui/Button";
import { Toast, type ToastMessage } from "@/components/ui/Toast";
import { INQUIRY_TYPES, type ContactActionResult } from "@/lib/contact";
import { TextAreaField, TextField } from "./FormField";
import { SelectField } from "./SelectField";

type ContactFormProps = {
  configured: boolean;
  /** Pre-selected inquiry type, e.g. from a service page link. */
  defaultInquiryType?: string;
};

type Draft = {
  name: string;
  email: string;
  organization: string;
  inquiryType: string;
  message: string;
};

const emptyDraft: Draft = {
  name: "",
  email: "",
  organization: "",
  inquiryType: "",
  message: "",
};

export function ContactForm({
  configured,
  defaultInquiryType = "",
}: ContactFormProps) {
  const [pending, startTransition] = useTransition();
  const [state, setState] = useState<ContactActionResult | null>(null);
  const [draft, setDraft] = useState<Draft>({
    ...emptyDraft,
    inquiryType: defaultInquiryType,
  });
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const statusId = useId();
  const statusRef = useRef<HTMLDivElement>(null);

  const dismissToast = useCallback(() => setToast(null), []);

  const formAction = (formData: FormData) => {
    startTransition(async () => {
      const result = await submitContactForm(null, formData);
      setState(result);

      if (result.ok) {
        setDraft(emptyDraft);
        setToast({
          id: Date.now(),
          tone: "success",
          title: "Your inquiry was sent.",
          description: "RURANGO will follow up at the email you provided.",
        });
        statusRef.current?.focus();
        return;
      }

      setToast({
        id: Date.now(),
        tone: "error",
        title: result.message,
        description:
          result.code === "validation"
            ? "Please review the highlighted fields and try again."
            : undefined,
      });

      if (result.fieldErrors) {
        const order = ["name", "email", "message"] as const;
        for (const field of order) {
          if (result.fieldErrors[field]) {
            document.getElementById(field)?.focus();
            return;
          }
        }
      }

      statusRef.current?.focus();
    });
  };

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
          value={draft.name}
          onChange={(event) =>
            setDraft((current) => ({ ...current, name: event.target.value }))
          }
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
          value={draft.email}
          onChange={(event) =>
            setDraft((current) => ({ ...current, email: event.target.value }))
          }
        />
        <TextField
          id="organization"
          name="organization"
          label="Organization"
          autoComplete="organization"
          placeholder="Company or team"
          disabled={pending}
          value={draft.organization}
          onChange={(event) =>
            setDraft((current) => ({
              ...current,
              organization: event.target.value,
            }))
          }
        />
        <SelectField
          id="inquiryType"
          name="inquiryType"
          label="Inquiry type"
          options={INQUIRY_TYPES}
          disabled={pending}
          error={fieldErrors?.inquiryType}
          value={draft.inquiryType}
          onChange={(event) =>
            setDraft((current) => ({
              ...current,
              inquiryType: event.target.value,
            }))
          }
        />
        <TextAreaField
          id="message"
          name="message"
          label="Project description"
          required
          placeholder="What are you building, and how can RURANGO help?"
          disabled={pending}
          error={fieldErrors?.message}
          value={draft.message}
          onChange={(event) =>
            setDraft((current) => ({ ...current, message: event.target.value }))
          }
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
          <Button
            type="submit"
            loading={pending}
            disabled={!configured || pending}
          >
            {pending ? "Sending…" : "Submit inquiry"}
          </Button>

          <div
            id={statusId}
            ref={statusRef}
            tabIndex={-1}
            className="sr-only"
            aria-live="polite"
          >
            {state?.ok
              ? "Your inquiry was sent. RURANGO will follow up at the email you provided."
              : null}
            {state && !state.ok ? state.message : null}
          </div>

          <p className="text-sm text-foreground-muted">
            Your message is emailed to RURANGO and is not stored in a database
            by this site.
          </p>
        </div>
      </form>

      <Toast toast={toast} onDismiss={dismissToast} />
    </div>
  );
}
