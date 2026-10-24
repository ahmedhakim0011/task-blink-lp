import { Logo } from "./Logo";

const footerLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Privacy", href: "#privacy" },
  { label: "Pricing", href: "#pricing" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="section-pad mx-auto max-w-7xl py-16 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo size={32} showLabel className="[&_span]:text-sm" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-text-muted">
              Stay on task when you drift. A gentle reminder at the moment of
              context switch — not another app you&apos;ll ignore.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-10 gap-y-4">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-border pt-10 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Task Blink. All rights reserved.</p>
          <div className="flex flex-wrap gap-8">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </a>
            <a
              href="mailto:support@taskblink.app"
              className="transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
