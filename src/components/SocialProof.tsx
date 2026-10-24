const feedItems = [
  {
    name: "Alex M.",
    action: "Stayed on task after opening Instagram",
    metric: "2s blink",
    time: "Today",
    initials: "AM",
  },
  {
    name: "Jordan K.",
    action: "Snoozed shield for an intentional break",
    metric: "15 min",
    time: "Yesterday",
    initials: "JK",
  },
  {
    name: "Sam R.",
    action: "Completed current task and cleared shield",
    metric: "1 task done",
    time: "This week",
    initials: "SR",
  },
];

export function SocialProof() {
  return (
    <section className="border-y border-border bg-surface-muted py-16 md:py-20">
      <div className="section-pad mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="section-eyebrow">Community</p>
          <h2 className="display-heading mt-3 text-3xl font-bold md:text-4xl">
            Small moments, big focus wins
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {feedItems.map((item) => (
            <article
              key={item.name}
              className="feature-card flex flex-col gap-4 !p-5"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="flex size-11 items-center justify-center rounded-full bg-primary-container text-sm font-bold text-primary">
                    {item.initials}
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-surface-card bg-primary-light" />
                </div>
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-xs text-text-muted">{item.time}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-text-secondary">
                {item.action}
              </p>

              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm font-bold text-foreground">
                  {item.metric}
                </span>
                <button
                  type="button"
                  className="rounded-full bg-surface px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-surface-variant"
                >
                  View profile
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
