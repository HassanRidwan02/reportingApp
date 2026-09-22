import { ArrowRight, Search, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

import { Container } from "../layout/Container";

export function CTASection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-blue-600 px-6 py-12 sm:px-10 lg:px-14 lg:py-14">
          {/* Decorative shapes */}
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-28 right-24 h-48 w-48 rounded-full bg-white/5" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-100">
                Keep the campus connected
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Something missing?
                <br />
                Something found?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-blue-100">
                Help someone get their belongings back. Report an item or
                browse recent reports from your campus community.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/report"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50"
                >
                  Report an item
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/browse"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  <Search size={16} />
                  Browse items
                </Link>
              </div>
            </div>

            {/* Trust card */}
            <div className="hidden w-[220px] rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm lg:block">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white">
                <ShieldCheck size={19} />
              </div>

              <p className="mt-4 text-sm font-bold text-white">
                Built with privacy in mind
              </p>

              <p className="mt-2 text-xs leading-5 text-blue-100">
                Keep personal details private while connecting with the right
                person.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}