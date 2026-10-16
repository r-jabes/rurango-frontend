export const INQUIRY_TYPES = [
  { value: "", label: "Select an option" },
  { value: "project", label: "New product or project" },
  { value: "collaboration", label: "Collaboration" },
  { value: "opportunity", label: "Role or opportunity" },
  { value: "other", label: "Something else" },
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number]["value"];

export type ContactPayload = {
  name: string;
  email: string;
  organization?: string;
  inquiryType?: string;
  message: string;
  /** Honeypot — must remain empty */
  companyWebsite?: string;
};

export type ContactFieldErrors = Partial<
  Record<"name" | "email" | "message" | "inquiryType", string>
>;

export type ContactActionResult =
  | { ok: true }
  | {
      ok: false;
      code: "validation" | "not_configured" | "provider" | "spam";
      message: string;
      fieldErrors?: ContactFieldErrors;
    };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isContactConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY &&
      process.env.CONTACT_TO_EMAIL &&
      process.env.CONTACT_FROM_EMAIL,
  );
}

export function validateContactPayload(
  payload: ContactPayload,
): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (!payload.name.trim()) {
    errors.name = "Enter your name.";
  } else if (payload.name.trim().length > 120) {
    errors.name = "Name is too long.";
  }

  if (!payload.email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!EMAIL_PATTERN.test(payload.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!payload.message.trim()) {
    errors.message = "Describe your project or inquiry.";
  } else if (payload.message.trim().length < 20) {
    errors.message = "Please add a bit more detail (at least 20 characters).";
  } else if (payload.message.trim().length > 5000) {
    errors.message = "Message is too long.";
  }

  return errors;
}

export function normalizeContactPayload(
  input: Record<string, FormDataEntryValue | null | undefined>,
): ContactPayload {
  const read = (key: string) => {
    const value = input[key];
    return typeof value === "string" ? value : "";
  };

  return {
    name: read("name"),
    email: read("email"),
    organization: read("organization") || undefined,
    inquiryType: read("inquiryType") || undefined,
    message: read("message"),
    companyWebsite: read("companyWebsite") || undefined,
  };
}
