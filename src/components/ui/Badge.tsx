import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-border px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-foreground-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}
