"use client";

import { motion } from "framer-motion";
import { EyeOff, Lock, ServerOff } from "lucide-react";

const pillars = [
  {
    icon: Lock,
    title: "Your data stays on device",
    body: "Task text and settings are stored locally. We don't build profiles from your behavior.",
  },
  {
    icon: EyeOff,
    title: "No screen reading",
    body: "On Android we read the foreground app name only — never keystrokes, messages, or screen content. On iOS, Apple keeps your app selections private.",
  },
  {
    icon: ServerOff,
    title: "Nothing sold",
    body: "No ads. No data brokers. Revenue comes from optional Pro subscriptions — not from watching what you do.",
  },
];

export function Privacy() {
  return (
    <section id="privacy" className="section-pad py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-surface">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Privacy
              </p>
              <h2 className="display-heading mt-4 text-3xl font-bold md:text-4xl">
                We can&apos;t read your mind.
                <br />
                Or your screen.
              </h2>
              <p className="mt-5 text-text-secondary">
                Task Blink needs system permissions to know when you
                open a selected app. That&apos;s it. The scope is narrow by
                design — and explained plainly before you grant access.
              </p>

              <div className="mt-10 space-y-6">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="flex gap-4"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <pillar.icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="font-semibold">{pillar.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                        {pillar.body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="border-t border-border bg-background/50 p-8 md:p-12 lg:border-t-0 lg:border-l lg:p-16">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                What we access
              </h3>
              <dl className="mt-6 space-y-5">
                <PermissionRow
                  label="iOS — Screen Time"
                  detail="Shield apps you choose via Apple's Family Controls API. App names stay opaque to us."
                />
                <PermissionRow
                  label="Android — Accessibility"
                  detail="Detect foreground app package name when you switch apps."
                />
                <PermissionRow
                  label="Android — Display overlay"
                  detail="Show the 2-second task reminder on top of distracting apps."
                />
              </dl>
              <p className="mt-8 text-xs leading-relaxed text-text-muted">
                Full details in our privacy policy. Competitors in this space
                include Opal and One Sec — we&apos;re in the same lane: self-directed
                focus, not parental control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PermissionRow({
  label,
  detail,
}: {
  label: string;
  detail: string;
}) {
  return (
    <div className="rounded-xl border border-border/70 bg-surface/40 p-4">
      <dt className="text-sm font-semibold">{label}</dt>
      <dd className="mt-1 text-sm text-text-secondary">{detail}</dd>
    </div>
  );
}
