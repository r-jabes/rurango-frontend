import { processSteps } from "@/content/capabilities";
import { cn } from "@/lib/cn";

type ProcessStepsProps = {
  className?: string;
};

export function ProcessSteps({ className }: ProcessStepsProps) {
  return (
    <ol className={cn("space-y-0", className)}>
      {processSteps.map((step, index) => (
        <li
          key={step.title}
          className="grid gap-3 border-t border-border py-6 first:border-t-0 first:pt-0 md:grid-cols-[4rem_1fr] md:gap-6 md:py-8"
        >
          <p className="font-mono text-xs text-accent">
            {String(index + 1).padStart(2, "0")}
          </p>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {step.title}
            </h3>
            <p className="max-w-2xl text-sm text-foreground-secondary sm:text-base">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
