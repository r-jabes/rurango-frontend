import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  tone?: "accent" | "muted";
};

export function Eyebrow({
  children,
  className,
  tone = "accent",
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.18em]",
        tone === "accent" ? "text-accent" : "text-foreground-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}
