const moments = [
  "You opened Instagram again.",
  "Slack pulled you into a thread.",
  "Reddit for 'just one minute.'",
  "Three tabs, zero progress.",
];

export function ProblemStrip() {
  return (
    <section className="border-y border-border/70 bg-surface/40 py-5">
      <div className="section-pad overflow-hidden">
        <div className="animate-marquee flex gap-12 whitespace-nowrap">
          {[...moments, ...moments].map((text, i) => (
            <span
              key={`${text}-${i}`}
              className="inline-flex items-center gap-3 text-sm text-text-secondary md:text-base"
            >
              <span className="size-1 rounded-full bg-snoozed" />
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
