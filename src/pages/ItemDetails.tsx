import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Info,
  MapPin,
  Share2,
  Sparkles,
  Tag,
} from "lucide-react";

import { browseItems } from "../data/browseItems";

export default function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = browseItems.find((item) => item.id === id);

  if (!item) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <Link
            to="/browse"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800"
          >
            <ArrowLeft size={16} />
            Back to all items
          </Link>

          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-10 text-center">
            <h1 className="text-xl font-bold text-slate-900">
              Item not found
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              This report may have been removed or is no longer available.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const isFound = item.status === "found";

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      {/* <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-[1080px] items-center justify-between px-5">
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
              <span className="text-lg">⌕</span>
            </span>

            <span className="text-lg font-bold tracking-tight text-slate-900">
              FindMe
            </span>
          </Link>

          <nav className="flex items-center gap-7">
            <Link
              to="/"
              className="text-xs font-semibold text-slate-800 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              to="/browse"
              className="text-xs font-semibold text-slate-800 hover:text-blue-600"
            >
              Browse items
            </Link>

            <Link
              to="/report"
              className="text-xs font-semibold text-slate-800 hover:text-blue-600"
            >
              Report item
            </Link>
          </nav>
        </div>
      </header> */}

      {/* Content */}
      <div className="mx-auto max-w-[1080px] px-5 py-8">
        {/* Back */}
        <button
          type="button"
          onClick={() => navigate("/browse")}
          className="mb-7 inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition hover:text-slate-800"
        >
          <ArrowLeft size={15} />
          All items
        </button>

        <div className="grid gap-5 lg:grid-cols-[1.55fr_1fr]">
          {/* LEFT COLUMN */}
          <div className="space-y-5">
            {/* Main image */}
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[410px] w-full object-cover"
                />
              ) : (
                <div className="flex h-[410px] items-center justify-center bg-blue-50">
                  <span className="text-7xl">{item.icon ?? "📦"}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-slate-800">
                Description
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {item.description}
              </p>

              {item.title.toLowerCase().includes("sony") && (
                <p className="mt-1 text-sm leading-7 text-slate-500">
                  The carry case was not nearby. Please submit a private claim
                  with a detail only the owner would know.
                </p>
              )}
            </section>

            {/* Potential matches */}
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Sparkles size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-blue-600">
                    FindMe matches
                  </p>

                  <h2 className="mt-1 text-lg font-bold text-slate-800">
                    Potential matches
                  </h2>
                </div>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                FindMe found items with similar descriptions. These are
                suggestions, not proof of ownership.
              </p>

              <div className="mt-4 space-y-2.5">
                <MatchItem
                  title="Black Sony headphones"
                  subtitle="Reported near Library · Sep 17"
                />

                <MatchItem
                  title="Headphone carry case"
                  subtitle="Reported near West Hall · Sep 16"
                />
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-5">
            {/* Item information */}
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${
                    isFound
                      ? "bg-blue-50 text-blue-600"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {isFound ? "Found item" : "Lost item"}
                </span>

                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                  aria-label="Share item"
                >
                  <Share2 size={16} />
                </button>
              </div>

              <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900">
                {item.title}
              </h1>

              <p className="mt-2 text-xs text-slate-500">
                Report #FM-{String(item.id).padStart(4, "0")} · Posted{" "}
                {item.date.toLowerCase() === "today"
                  ? "today"
                  : item.date}
              </p>

              {/* Details */}
              <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
                <DetailRow
                  icon={<Tag size={17} />}
                  label="Category"
                  value={item.category}
                />

                <DetailRow
                  icon={<MapPin size={17} />}
                  label={isFound ? "Found at" : "Last seen at"}
                  value={item.location}
                />

                <DetailRow
                  icon={<CalendarDays size={17} />}
                  label={isFound ? "Date found" : "Date reported"}
                  value="September 19, 2026"
                  last
                />
              </div>

              {/* Claim */}
              <button
                type="button"
                className="mt-5 flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-blue-700"
              >
                This is my item
              </button>

              <p className="mt-3 text-center text-[11px] text-slate-400">
                You'll be asked for a private detail to verify ownership.
              </p>
            </section>

            {/* Report information */}
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Info size={17} />
                </div>

                <div>
                  <h2 className="text-sm font-bold text-slate-800">
                    Report information
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Submitted by a verified campus community member. The
                    reporter's contact details stay private until a claim is
                    reviewed.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

/* -------------------------------- */
/* Detail row                       */
/* -------------------------------- */

function DetailRow({
  icon,
  label,
  value,
  last = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 p-4 ${
        !last ? "border-b border-slate-200" : ""
      }`}
    >
      <div className="text-blue-600">{icon}</div>

      <div>
        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
          {label}
        </p>

        <p className="mt-1 text-xs font-semibold text-slate-800">
          {value}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* Potential match                  */
/* -------------------------------- */

function MatchItem({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
        🎧
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-xs font-bold text-slate-800">
          {title}
        </h3>

        <p className="mt-1 text-[10px] text-slate-500">
          {subtitle}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className="rounded-full bg-slate-200 px-2.5 py-1 text-[9px] font-bold uppercase text-slate-600">
          Lost
        </span>

        <button
          type="button"
          className="text-xs font-bold text-blue-600 hover:text-blue-700"
        >
          View
        </button>
      </div>
    </div>
  );
}