"use client";

import { useInView } from "@/hooks/useInView";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  className = "",
}: FadeInProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  const directionOffset = {
    up: "translateY(24px)",
    down: "translateY(-24px)",
    left: "translateX(24px)",
    right: "translateX(-24px)",
    none: "translateY(0)",
  };

  const style: React.CSSProperties = {
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0) translateX(0)" : directionOffset[direction],
    transition: `opacity ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
