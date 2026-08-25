import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function PhoneMockup({
  src,
  alt,
  priority = false,
  className = "",
}: PhoneMockupProps) {
  return (
    <div className={`relative mx-auto w-full max-w-[280px] ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={349}
        height={714}
        className="h-auto w-full drop-shadow-[0_24px_64px_rgba(0,0,0,0.55)]"
        priority={priority}
        sizes="(max-width: 768px) 72vw, 280px"
      />
    </div>
  );
}
