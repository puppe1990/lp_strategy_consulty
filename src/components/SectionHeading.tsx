"use client";

import { FadeIn } from "./FadeIn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "text-left";
  return (
    <FadeIn className={`space-y-3 ${alignment}`}>
      <p className="text-brand-300 text-xs font-semibold tracking-[0.4em] uppercase">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description ? <p className="text-lg text-slate-300">{description}</p> : null}
    </FadeIn>
  );
}
