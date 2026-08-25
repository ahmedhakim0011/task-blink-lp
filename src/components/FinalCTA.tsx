import { StoreButtons } from "./StoreButtons";

export function FinalCTA() {
  return (
    <section id="download" className="section-pad pb-24 md:pb-32">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-border bg-surface">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute -bottom-24 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[100px]" />
        </div>

        <div className="relative px-8 py-16 text-center md:px-16 md:py-24">
          <h2 className="display-heading text-4xl font-bold md:text-5xl lg:text-6xl">
            Your task is waiting.
            <br />
            <span className="text-primary">Catch the drift.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-text-secondary">
            Set one task. Pick your apps. Let the shield do the rest — quietly,
            for two seconds at a time.
          </p>
          <div className="mt-10 flex justify-center">
            <StoreButtons size="large" />
          </div>
          <p className="mt-6 text-xs text-text-muted">
            Free to start · Pro optional · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
