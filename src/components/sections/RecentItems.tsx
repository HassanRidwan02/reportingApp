import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Container } from "../layout/Container";
import { ItemCard } from "../items/ItemCard";
import { recentItems } from "../../data/mockItems";

export function RecentItems() {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <Container>
        {/* Heading */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
              Recently reported
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-800">
              Items looking for their way home
            </h2>
          </div>

          <Link
            to="/browse"
            className="hidden items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:flex"
          >
            View all items
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Items */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recentItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>

        {/* Mobile button */}
        <div className="mt-6 flex sm:hidden">
          <Link
            to="/browse"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-700"
          >
            View all items
            <ArrowRight size={13} />
          </Link>
        </div>
      </Container>
    </section>
  );
}