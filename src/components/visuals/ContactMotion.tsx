"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type ContactMotionProps = {
  className?: string;
};

/**
 * Contact aside visual — loops /public/contact-animation.mp4.
 * Uses a wide frame + cover crop so square exports with letterboxed
 * landscape art fill the slot instead of showing empty charcoal bands.
 * Pauses when prefers-reduced-motion is set.
 */
export function ContactMotion({ className }: ContactMotionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      if (reduced.matches) {
        video.pause();
        video.currentTime = 0;
      } else {
        void video.play().catch(() => {
          /* Autoplay may be blocked. */
        });
      }
    };

    sync();
    reduced.addEventListener("change", sync);
    return () => reduced.removeEventListener("change", sync);
  }, []);

  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-brand-charcoal-deep",
        className,
      )}
    >
      <video
        ref={videoRef}
        className="h-full w-full scale-[1.12] object-cover object-center"
        src="/contact-animation.mp4"
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border/60"
      />
    </div>
  );
}
