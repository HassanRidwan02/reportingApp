import {
  Hand,
  Info,
  Search,
} from "lucide-react";

import { Container } from "../layout/Container";
import { FeatureCard } from "../ui/FeatureCard";

const features = [
  {
    icon: Info,
    title: "Report lost item",
    description:
      "Share what went missing and where you last saw it.",
    linkText: "Start report",
  },
  {
    icon: Hand,
    title: "Report found item",
    description:
      "Help return something to the person who needs it.",
    linkText: "Start report",
  },
  {
    icon: Search,
    title: "Browse items",
    description:
      "Search campus reports and reconnect the right item.",
    linkText: "Explore reports",
  },
];

export function StartHere() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 lg:py-20">
      <Container>
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
              Start here
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-800">
              One place for every item story
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500 lg:justify-self-end">
            Whether you misplaced something or found it, FindMe keeps the
            next step clear.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              linkText={feature.linkText}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}