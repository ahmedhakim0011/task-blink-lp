import Image from "next/image";

type LogoProps = {
  size?: number;
  showLabel?: boolean;
  className?: string;
};

export function Logo({
  size = 32,
  showLabel = false,
  className = "",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/app-icon.png"
        alt="Task Blink"
        width={size}
        height={size}
        className="rounded-[22%]"
        priority={size >= 32}
      />
      {showLabel && (
        <span className="display-heading text-[15px] font-semibold tracking-tight">
          Task Blink
        </span>
      )}
    </span>
  );
}
