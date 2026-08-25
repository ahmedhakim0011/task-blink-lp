import { Apple, Play } from "lucide-react";

type StoreButtonsProps = {
  size?: "default" | "large";
  className?: string;
};

export function StoreButtons({
  size = "default",
  className = "",
}: StoreButtonsProps) {
  const isLarge = size === "large";

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href="#download"
        className={`group inline-flex items-center gap-3 rounded-full border border-border bg-surface transition-all hover:border-primary/40 hover:bg-surface-variant ${
          isLarge ? "px-6 py-3.5" : "px-5 py-2.5"
        }`}
      >
        <Apple
          className={`text-foreground ${isLarge ? "size-6" : "size-5"}`}
          strokeWidth={1.5}
        />
        <div className="text-left">
          <div className="text-[10px] uppercase tracking-wider text-text-muted">
            Download on the
          </div>
          <div
            className={`font-semibold leading-tight ${isLarge ? "text-base" : "text-sm"}`}
          >
            App Store
          </div>
        </div>
      </a>
      <a
        href="#download"
        className={`group inline-flex items-center gap-3 rounded-full border border-border bg-surface transition-all hover:border-primary/40 hover:bg-surface-variant ${
          isLarge ? "px-6 py-3.5" : "px-5 py-2.5"
        }`}
      >
        <Play
          className={`text-foreground ${isLarge ? "size-6" : "size-5"}`}
          fill="currentColor"
          strokeWidth={0}
        />
        <div className="text-left">
          <div className="text-[10px] uppercase tracking-wider text-text-muted">
            Get it on
          </div>
          <div
            className={`font-semibold leading-tight ${isLarge ? "text-base" : "text-sm"}`}
          >
            Google Play
          </div>
        </div>
      </a>
    </div>
  );
}
