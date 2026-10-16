import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function PageContainer({
  children,
  className,
  as: Tag = "div",
}: PageContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-container px-[var(--gutter)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
