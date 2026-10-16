import type { ReactNode } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  actions,
}: PageIntroProps) {
  return (
    <PageContainer className="border-b border-border py-14 md:py-20">
      <div className="max-w-2xl space-y-5">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="text-lg text-foreground-secondary">{description}</p>
        ) : null}
        {actions ? <div className="flex flex-wrap gap-3 pt-2">{actions}</div> : null}
      </div>
    </PageContainer>
  );
}
