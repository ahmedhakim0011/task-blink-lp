"use client";

import { useEffect, useState } from "react";
import { StoreButtons } from "./StoreButtons";
import { Logo } from "./Logo";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#privacy", label: "Privacy" },
  { href: "#pricing", label: "Pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="section-pad mx-auto flex h-16 max-w-7xl items-center justify-between lg:h-[72px]">
        <a href="#" className="group transition-opacity hover:opacity-90">
          <Logo size={32} showLabel />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <StoreButtons />
        </div>

        <a
          href="#download"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90 md:hidden"
        >
          Download
        </a>
      </nav>
    </header>
  );
}
