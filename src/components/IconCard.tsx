"use client";

import { FadeIn } from "./FadeIn";
import type { ReactNode } from "react";

interface IconCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  detail?: string;
  chips?: string[];
  delay?: number;
  variant?: "default" | "gradient" | "highlight";
}

export function IconCard({
  icon,
  title,
  description,
  detail,
  chips,
  delay = 0,
  variant = "default",
}: IconCardProps) {
  const baseClasses =
    "relative overflow-hidden rounded-3xl border p-8 transition duration-300 hover:-translate-y-1";

  const variantClasses = {
    default:
      "border-white/10 bg-white/5 hover:border-white/15 hover:bg-white/[0.07]",
    gradient:
      "border-white/10 bg-gradient-to-b from-brand-500/20 to-slate-900 hover:from-brand-500/25",
    highlight:
      "border-white/[0.08] bg-[linear-gradient(180deg,rgba(13,24,37,0.88),rgba(8,15,24,0.96)),radial-gradient(circle_at_top_right,rgba(242,192,120,0.08),transparent_40%)] shadow-[0_18px_60px_rgba(2,6,23,0.28)] hover:border-white/12",
  };

  return (
    <FadeIn delay={delay} className="h-full">
      <div className={`${baseClasses} ${variantClasses[variant]} h-full`}>
        <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-3 text-brand-200">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-base leading-relaxed text-slate-300">
          {description}
        </p>
        {detail ? (
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-500">
            {detail}
          </p>
        ) : null}
        {chips ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
              >
                {chip}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </FadeIn>
  );
}
