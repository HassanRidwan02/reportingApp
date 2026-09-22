import { MapPin } from "lucide-react";

import type { Item } from "../../types/item";

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  const isFound = item.status === "found";

  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      {/* Image */}
      <div className="h-48 overflow-hidden bg-slate-100">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Status + date */}
        <div className="flex items-center justify-between gap-3">
          <span
            className={`rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide ${
              isFound
                ? "bg-blue-50 text-blue-600"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            {item.status}
          </span>

          <span className="text-[10px] font-medium text-slate-400">
            {item.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-3 text-sm font-bold text-slate-800">
          {item.title}
        </h3>

        {/* Location */}
        <div className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-500">
          <MapPin size={12} />

          <span>
            {item.category} · {item.location}
          </span>
        </div>
      </div>
    </article>
  );
}