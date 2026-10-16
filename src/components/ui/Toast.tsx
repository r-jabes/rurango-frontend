"use client";

import { useEffect } from "react";
import { cn } from "@/lib/cn";

export type ToastTone = "success" | "error" | "info";

export type ToastMessage = {
  id: number;
  tone: ToastTone;
  title: string;
  description?: string;
};

type ToastProps = {
  toast: ToastMessage | null;
  onDismiss: () => void;
  /** Auto-dismiss success/info after ms. Errors stay until dismissed or replaced. */
  durationMs?: number;
};

const toneClasses: Record<ToastTone, string> = {
  success:
    "border-accent/50 bg-surface text-foreground shadow-[0_12px_40px_-20px_rgba(0,0,0,0.7)]",
  error:
    "border-red-400/40 bg-surface text-foreground shadow-[0_12px_40px_-20px_rgba(0,0,0,0.7)]",
  info: "border-border-strong bg-surface text-foreground shadow-[0_12px_40px_-20px_rgba(0,0,0,0.7)]",
};

const labelClasses: Record<ToastTone, string> = {
  success: "text-accent",
  error: "text-red-300",
  info: "text-foreground-muted",
};

/**
 * Restrained toast — fixed corner notice, no dependency.
 * Content remains available via aria-live for assistive tech.
 */
export function Toast({ toast, onDismiss, durationMs = 5200 }: ToastProps) {
  useEffect(() => {
    if (!toast) return;
    if (toast.tone === "error") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ms = reduced ? Math.min(durationMs, 3000) : durationMs;
    const id = window.setTimeout(onDismiss, ms);
    return () => window.clearTimeout(id);
  }, [toast, durationMs, onDismiss]);

  if (!toast) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center p-4 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:justify-end"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div
        className={cn(
          "pointer-events-auto w-full max-w-sm rounded-lg border px-4 py-3",
          "toast-enter",
          toneClasses[toast.tone],
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 space-y-1">
            <p
              className={cn(
                "font-mono text-[11px] uppercase tracking-[0.14em]",
                labelClasses[toast.tone],
              )}
            >
              {toast.tone === "success"
                ? "Sent"
                : toast.tone === "error"
                  ? "Unable to send"
                  : "Notice"}
            </p>
            <p className="text-sm font-medium text-foreground">{toast.title}</p>
            {toast.description ? (
              <p className="text-sm text-foreground-secondary">
                {toast.description}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onDismiss}
            className="shrink-0 cursor-pointer rounded-sm px-1.5 py-0.5 text-sm text-foreground-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            aria-label="Dismiss notification"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
