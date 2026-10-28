"use server";

import {
  getInquiryLabel,
  isContactConfigured,
  normalizeContactPayload,
  type ContactActionResult,
  validateContactPayload,
} from "@/lib/contact";

export async function submitContactForm(
  _prev: ContactActionResult | null,
  formData: FormData,
): Promise<ContactActionResult> {
  const payload = normalizeContactPayload({
    name: formData.get("name"),
    email: formData.get("email"),
    organization: formData.get("organization"),
    inquiryType: formData.get("inquiryType"),
    message: formData.get("message"),
    companyWebsite: formData.get("companyWebsite"),
  });

  if (payload.companyWebsite?.trim()) {
    return {
      ok: false,
      code: "spam",
      message: "Unable to send this inquiry.",
    };
  }

  const fieldErrors = validateContactPayload(payload);
  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      code: "validation",
      message: "Please correct the highlighted fields.",
      fieldErrors,
    };
  }

  if (!isContactConfigured()) {
    return {
      ok: false,
      code: "not_configured",
      message:
        "Contact delivery is not configured yet. Add RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL to enable submissions.",
    };
  }

  const to = process.env.CONTACT_TO_EMAIL!;
  const from = process.env.CONTACT_FROM_EMAIL!;
  const apiKey = process.env.RESEND_API_KEY!;
  const inquiryLabel = getInquiryLabel(payload.inquiryType) ?? "General";

  const text = [
    `Name: ${payload.name.trim()}`,
    `Email: ${payload.email.trim()}`,
    `Organization: ${payload.organization?.trim() || "—"}`,
    `Inquiry type: ${inquiryLabel}`,
    "",
    payload.message.trim(),
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email.trim(),
        subject: `RURANGO inquiry — ${payload.name.trim()} (${inquiryLabel})`,
        text,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend error:", response.status, detail);
      return {
        ok: false,
        code: "provider",
        message:
          "The message could not be delivered. Please try again in a moment.",
      };
    }

    return { ok: true };
  } catch (error) {
    console.error("Contact submission failed:", error);
    return {
      ok: false,
      code: "provider",
      message:
        "The message could not be delivered. Please try again in a moment.",
    };
  }
}
