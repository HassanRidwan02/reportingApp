import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  ShieldCheck,
} from "lucide-react";

import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

export function Hero() {
  return (
    <section className="overflow-hidden bg-slate-50 py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          {/* Left side */}
          <div>
            <Badge>
              <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Built for your campus community
            </Badge>

            <h1 className="mt-6 max-w-2xl text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-slate-900 lg:text-[56px]">
              Lost something?
              <br />
              Let&apos;s help you find it.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 lg:text-[17px]">
              FindMe makes it simple for students and staff to report,
              discover, and recover belongings across campus—without the
              runaround.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button>
                Report an item
                <ArrowRight size={16} />
              </Button>

              <Button variant="secondary">
                Browse lost &amp; found
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-7 flex flex-wrap items-center gap-5 text-xs font-medium text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck
                  size={14}
                  className="text-blue-500"
                />
                Private claims
              </div>

              <div className="flex items-center gap-1.5">
                <CheckCircle2
                  size={14}
                  className="text-emerald-500"
                />
                Campus verified
              </div>
            </div>
          </div>

          {/* Right side */}
          <HeroPreview />
        </div>
      </Container>
    </section>
  );
}

function HeroPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      {/* Main card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
        <div className="rounded-xl bg-[#edf2ff] p-4 sm:p-5">
          {/* Top row */}
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-600">
              Found today
            </span>

            <span className="text-[11px] font-semibold text-slate-600">
              North Campus
            </span>
          </div>

          {/* Image area */}
          <div className="relative mt-5 flex h-[210px] items-center justify-center overflow-hidden rounded-xl bg-white sm:h-[235px]">
            {/* Temporary product illustration */}
            <div className="relative flex h-24 w-32 items-center justify-center rounded-xl border-[6px] border-slate-800">
              <Headphones
                size={58}
                strokeWidth={2}
                className="text-slate-800"
              />

              {/* Floating icon */}
              <div className="absolute -right-5 -top-5 flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
                <CheckCircle2 size={19} />
              </div>
            </div>
          </div>

          {/* Item information */}
          <div className="mt-4 flex items-end justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Sony WH-1000XM4
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Library · Quiet Study, Level 2
              </p>
            </div>

            <button className="shrink-0 rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-700">
              View item
            </button>
          </div>
        </div>
      </div>

      {/* Decorative floating label */}
      <div className="absolute -bottom-5 -left-4 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-lg sm:-left-7">
        <p className="text-[10px] font-medium text-slate-400">
          Recovered this semester
        </p>

        <p className="mt-0.5 text-sm font-bold text-slate-800">
          28 items
        </p>
      </div>
    </div>
  );
}