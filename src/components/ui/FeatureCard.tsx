import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  linkText: string;
  href?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  linkText,
  href = "#",
}: FeatureCardProps) {
  return (
    <article className="group flex min-h-[180px] flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      {/* Icon */}
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        <Icon size={16} strokeWidth={2} />
      </div>

      {/* Content */}
      <div className="mt-5">
        <h3 className="text-sm font-bold text-slate-800">
          {title}
        </h3>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>

      {/* Link */}
      <a
        href={href}
        className="mt-auto flex items-center gap-1 pt-5 text-xs font-bold text-blue-600 transition-colors hover:text-blue-700"
      >
        {linkText}

        <ArrowRight
          size={13}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </a>
    </article>
  );
}