import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  tilt?: boolean;
};

export function PhoneMockup({
  src,
  alt,
  priority = false,
  className = "",
  tilt = false,
}: PhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[280px] ${className}`}
      style={tilt ? { perspective: "1200px" } : undefined}
    >
      <div
        className="relative transition-transform duration-500 hover:scale-[1.02]"
        style={
          tilt
            ? {
                transform: "rotateY(-8deg) rotateX(4deg)",
                transformStyle: "preserve-3d",
              }
            : undefined
        }
      >
        <Image
          src={src}
          alt={alt}
          width={349}
          height={714}
          className="h-auto w-full rounded-[2rem] mockup-shadow"
          priority={priority}
          sizes="(max-width: 768px) 72vw, 280px"
        />
      </div>
    </div>
  );
}
