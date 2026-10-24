"use client";

import { StoreButtons } from "./StoreButtons";

export function FinalCTA() {
  return (
    <section id="download" className="section-pad pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary px-8 py-14 text-on-primary md:px-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display-heading text-4xl font-bold md:text-5xl">
            Your task is waiting.
            <br />
            Catch the drift.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-on-primary/85 md:text-lg">
            Set one task. Pick your apps. Let the shield do the rest — quietly,
            for two seconds at a time.
          </p>

          <form
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@email.com"
              aria-label="Email address"
              className="min-w-0 flex-1 rounded-full border border-on-primary/20 bg-on-primary/10 px-5 py-3.5 text-sm text-on-primary placeholder:text-on-primary/60 outline-none focus:border-on-primary/40 focus:ring-2 focus:ring-on-primary/20"
            />
            <button
              type="submit"
              className="rounded-full bg-on-primary px-6 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
            >
              Get updates
            </button>
          </form>

          <div className="mt-10">
            <StoreButtons size="large" />
          </div>
          <p className="mt-6 text-xs text-on-primary/70">
            Free to start · Pro optional · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
