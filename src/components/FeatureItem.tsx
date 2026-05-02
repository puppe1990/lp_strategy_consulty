"use client";

import { CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

interface FeatureItemProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function FeatureItem({
  children,
  icon = <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />,
  className = "",
}: FeatureItemProps) {
  return (
    <li className={`flex items-start gap-3 text-sm text-slate-200 ${className}`}>
      {icon}
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}
