import { MapPin } from "lucide-react";
import type { Item } from "../../types/item";

import { Link } from "react-router-dom";

interface BrowseItemCardProps {
  item: Item;
}

export function BrowseItemCard({ item }: BrowseItemCardProps) {
  const isFound = item.status === "found";

  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="h-[205px] overflow-hidden bg-slate-100">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[#edf2ff]">
            <span className="text-5xl">{item.icon ?? "📦"}</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <span
            className={`rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide ${
              isFound
                ? "bg-blue-50 text-blue-600"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            {item.status}
          </span>

          <span className="text-[10px] font-medium text-slate-400">
            {item.date}
          </span>
        </div>

        <h3 className="mt-3 text-sm font-bold text-slate-800">
          {item.title}
        </h3>

        <p className="mt-2 min-h-[40px] text-xs leading-5 text-slate-500">
          {item.description}
        </p>

        <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-500">
          <MapPin size={12} className="shrink-0 text-blue-600" />
          <span>{item.location}</span>
        </div>

        <Link
          to={`/items/${item.id}`}
          className="mt-4 flex w-full items-center justify-center rounded-lg border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
        >
          View details
        </Link>
      </div>
    </article>
  );
}