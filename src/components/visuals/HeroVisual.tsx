"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";
import { HeroGeometry } from "./HeroGeometry";

type HeroVisualProps = {
  className?: string;
};

/**
 * Wraps the signature geometry with optional fine-pointer parallax.
 * Disabled for reduced-motion and coarse pointers.
 */
export function HeroVisual({ className }: HeroVisualProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const motionOk = window.matchMedia(
      "(prefers-reduced-motion: no-preference)",
    ).matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!motionOk || !finePointer) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = Math.max(-1, Math.min(1, nx)) * 10;
      targetY = Math.max(-1, Math.min(1, ny)) * 8;
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      root.style.setProperty("--hero-parallax-x", `${currentX.toFixed(2)}px`);
      root.style.setProperty("--hero-parallax-y", `${currentY.toFixed(2)}px`);
      frame = window.requestAnimationFrame(tick);
    };

    root.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("pointerleave", onLeave);
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      root.style.removeProperty("--hero-parallax-x");
      root.style.removeProperty("--hero-parallax-y");
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={cn(
        "hero-visual relative will-change-transform",
        "[transform:translate3d(var(--hero-parallax-x,0),var(--hero-parallax-y,0),0)]",
        className,
      )}
    >
      <HeroGeometry />
    </div>
  );
}
