import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main";
};

export function PageContainer({
  children,
  className = "",
  as: Tag = "div",
}: PageContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-container px-[var(--gutter)] ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
