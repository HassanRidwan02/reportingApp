import { useMemo, useState } from "react";
import {
  ChevronDown,
  Filter,
  Plus,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Container } from "../components/layout/Container";
import { BrowseItemCard } from "../components/items/BrowseItemCard";
import { browseItems } from "../data/browseItems";
import type { ItemStatus } from "../types/item";

type StatusFilter = "all" | ItemStatus;

export default function BrowseItems() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [category, setCategory] = useState("All categories");
  const [location, setLocation] = useState("All locations");

  const categories = [
    "All categories",
    "Electronics",
    "Personal items",
    "Bags",
    "Keys",
    "Accessories",
  ];

  const locations = [
    "All locations",
    "Library, Level 2",
    "Science Quad",
    "Student Union",
    "East Residence",
    "Campus Café",
    "Arts Building",
  ];

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase();

    return browseItems.filter((item) => {
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      const matchesStatus =
        status === "all" || item.status === status;

      const matchesCategory =
        category === "All categories" ||
        item.category === category;

      const matchesLocation =
        location === "All locations" ||
        item.location === location;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesCategory &&
        matchesLocation
      );
    });
  }, [search, status, category, location]);

  return (
    <main className="min-h-screen bg-slate-50 py-8 lg:py-10">
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
              Campus inventory
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Find an item
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Search recent campus lost-and-found reports.
            </p>
          </div>

          <Link
            to="/report"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            <Plus size={15} />
            Report an item
          </Link>
        </div>

        {/* Search / filters */}
        <div className="mt-7 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="grid gap-2 lg:grid-cols-[1fr_125px_125px_auto]">
            {/* Search */}
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by item, color, or keyword"
                className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Category */}
            <div className="relative">
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="h-10 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-8 text-xs text-slate-700 outline-none focus:border-blue-400"
              >
                {categories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
              />
            </div>

            {/* Location */}
            <div className="relative">
              <select
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                className="h-10 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 pr-8 text-xs text-slate-700 outline-none focus:border-blue-400"
              >
                {locations.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
              />
            </div>

            {/* More filters */}
            <button
              type="button"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <Filter size={14} />
              More filters
            </button>
          </div>

          {/* Status tabs */}
          <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3">
            <span className="mr-1 text-[10px] font-semibold text-slate-500">
              Show:
            </span>

            {[
              ["all", "All reports"],
              ["lost", "Lost"],
              ["found", "Found"],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setStatus(value as StatusFilter)}
                className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                  status === value
                    ? "bg-blue-600 text-white"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {label}
              </button>
            ))}

            <span className="ml-auto hidden text-[11px] text-slate-400 sm:block">
              24 reports this week
            </span>
          </div>
        </div>

        {/* Results header */}
        <div className="mt-7 flex items-center justify-between">
          <p className="text-xs font-semibold text-slate-700">
            Showing{" "}
            <span className="text-blue-600">
              {filteredItems.length}
            </span>{" "}
            campus reports
          </p>

          <button
            type="button"
            className="flex items-center gap-1 text-xs font-semibold text-blue-600"
          >
            Newest first
            <ChevronDown size={13} />
          </button>
        </div>

        {/* Cards */}
        {filteredItems.length > 0 ? (
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <BrowseItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <h2 className="text-sm font-bold text-slate-800">
              No matching items
            </h2>

            <p className="mt-2 text-xs text-slate-500">
              Try changing your search or filters.
            </p>
          </div>
        )}

        {/* Load more */}
        {filteredItems.length > 0 && (
          <div className="flex justify-center py-8">
            <button
              type="button"
              className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
            >
              Load more items
            </button>
          </div>
        )}
      </Container>
    </main>
  );
}