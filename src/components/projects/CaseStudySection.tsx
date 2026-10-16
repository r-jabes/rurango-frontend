import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CaseStudySectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function CaseStudySection({
  title,
  children,
  className,
}: CaseStudySectionProps) {
  return (
    <section className={cn("max-w-2xl space-y-4", className)}>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="space-y-4 text-foreground-secondary">{children}</div>
    </section>
  );
}
