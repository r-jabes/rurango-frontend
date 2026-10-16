import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

type HeadingLevel = "h1" | "h2" | "h3";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  as?: HeadingLevel;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className="max-w-2xl space-y-3">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Tag className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </Tag>
        {description ? (
          <p className="max-w-xl text-base text-foreground-secondary sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
