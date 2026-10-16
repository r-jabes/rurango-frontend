import Image from "next/image";
import { cn } from "@/lib/cn";

type ProjectMediaProps = {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspect?: "landscape" | "portrait";
};

export function ProjectMedia({
  src,
  alt,
  className,
  priority = false,
  aspect = "landscape",
}: ProjectMediaProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-border bg-surface",
        aspect === "portrait" ? "aspect-[4/5]" : "aspect-[16/10]",
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover transition-transform duration-[var(--motion-base)] ease-[var(--ease-out)] group-hover:scale-[1.02] group-focus-within:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div
          className="absolute inset-0 bg-[linear-gradient(135deg,var(--background-secondary),var(--surface-secondary))]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,var(--border-subtle)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-subtle)_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              Preview
            </p>
            <p className="mt-1 truncate text-sm text-foreground-secondary">
              {alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
