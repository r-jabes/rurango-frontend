import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/TextLink";
import { cn } from "@/lib/cn";

type HeroCopyProps = {
  className?: string;
  compact?: boolean;
};

/** Shared hero messaging — kept consistent across prototype directions. */
export function HeroCopy({ className, compact = false }: HeroCopyProps) {
  return (
    <div className={cn("relative z-10 max-w-xl space-y-3 sm:space-y-4", className)}>
      <div className="hero-reveal hero-reveal-1">
        <Eyebrow>Software · Web · Search</Eyebrow>
      </div>

      <h1
        className={cn(
          "hero-reveal hero-reveal-2 font-semibold tracking-tight text-foreground",
          compact
            ? "text-[1.75rem] leading-[1.12] sm:text-3xl md:text-4xl"
            : "text-[1.85rem] leading-[1.12] sm:text-4xl sm:leading-[1.1] md:text-[2.65rem] lg:text-[3.1rem] lg:leading-[1.06] xl:text-[3.4rem]",
        )}
      >
        Websites, apps, and platforms —
        <br className="hidden sm:block" />{" "}
        <span className="text-accent">built</span> to be found and used.
      </h1>

      <p className="hero-reveal hero-reveal-3 max-w-md text-sm leading-relaxed text-foreground-secondary sm:text-base lg:text-lg">
        Custom software, web development, search engine optimization, and Google
        Business Profile setup — backed by shipped products such as Umutungo,
        Umugina, and Rojisitiri.
      </p>

      <div className="hero-reveal hero-reveal-4 flex flex-wrap items-center gap-x-5 gap-y-2 pt-0.5">
        <ButtonLink href="/capabilities" size="large">
          View services
        </ButtonLink>
        <TextLink
          href="/contact"
          className="text-sm font-medium no-underline decoration-transparent hover:underline hover:decoration-accent sm:text-base"
        >
          Start a project
        </TextLink>
      </div>
    </div>
  );
}
