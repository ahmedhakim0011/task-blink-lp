"use client";

type SegmentedControlProps<T extends string> = {
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
};

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  className = "",
}: SegmentedControlProps<T>) {
  return (
    <div
      className={`inline-flex rounded-full border border-border bg-surface-card p-1 ${className}`}
      role="tablist"
    >
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(option.value)}
            className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              active
                ? "bg-surface text-foreground shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                : "text-text-secondary hover:text-foreground"
            }`}
          >
            {option.label}
            {active && (
              <span
                className="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-primary"
                aria-hidden
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
