"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
          ? "border-b border-border bg-background/95 shadow-[0_4px_12px_rgba(0,0,0,0.04)] backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="section-pad mx-auto flex h-16 max-w-7xl items-center justify-between lg:h-[72px]">
        <a href="#" className="group">
          <Logo size={32} showLabel />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Link href="#download" className="btn-primary hidden px-5 py-2.5 text-sm md:inline-flex">
          Download
        </Link>

        <Link href="#download" className="btn-primary px-4 py-2 text-sm md:hidden">
          Download
        </Link>
      </nav>
    </header>
  );
}
