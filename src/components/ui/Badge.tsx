import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "blue" | "success" | "neutral";
}

export function Badge({children, variant = "blue",}: BadgeProps) {
    
  const variants = {
    blue: "bg-blue-50 text-blue-600",
    success: "bg-emerald-50 text-emerald-700",
    neutral: "bg-slate-100 text-slate-600",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold ${variants[variant]}`}
    >
      {children}
    </span>
  );
}