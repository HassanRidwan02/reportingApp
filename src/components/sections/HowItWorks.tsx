import {
  FileText,
  Search,
  Handshake,
  ArrowRight,
} from "lucide-react";

import { Container } from "../layout/Container";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Report",
    description:
      "Tell us what you lost or found, where it happened, and add a few helpful details.",
  },
  {
    number: "02",
    icon: Search,
    title: "Discover",
    description:
      "Browse reports from your campus community and look for items that match.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Reconnect",
    description:
      "Verify the item details and connect safely with the person who reported it.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-slate-200 bg-[#eef3ff] py-16 lg:py-20">
      <Container>
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
            How it works
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            Simple steps from lost to found
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
            FindMe keeps the process simple so you can spend less time
            searching and more time getting your belongings back.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-10 grid gap-5 md:grid-cols-3">
          {/* Connecting line on desktop */}
          <div className="absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-blue-200 md:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="relative rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Number / icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                    <Icon size={18} strokeWidth={2} />
                  </div>

                  <span className="text-[11px] font-bold tracking-wider text-blue-200">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="text-base font-bold text-slate-800">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    {step.description}
                  </p>
                </div>

                {/* Small arrow between cards */}
                {step.number !== "03" && (
                  <div className="absolute -right-3 top-7 z-20 hidden h-6 w-6 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-500 md:flex">
                    <ArrowRight size={12} />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}