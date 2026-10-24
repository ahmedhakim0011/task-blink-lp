"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Clock,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Zap,
} from "lucide-react";
import { SegmentedControl } from "./SegmentedControl";

const coreFeatures = [
  {
    icon: ShieldCheck,
    title: "One task, always visible",
    body: "Your current focus lives on the home screen. Edit in one tap when priorities shift.",
    tag: "Live now",
    metric: "1 task",
  },
  {
    icon: Clock,
    title: "Snooze when you need a break",
    body: "Pause the shield for 15 minutes, then it resumes automatically.",
    tag: "Offline available",
    metric: "15 min",
  },
  {
    icon: SlidersHorizontal,
    title: "Your distraction list",
    body: "Pick exactly which apps trigger the nudge. Change the list anytime.",
    tag: "Private",
    metric: "3 apps free",
  },
];

const proFeatures = [
  {
    icon: Zap,
    title: "Unlimited shielded apps",
    body: "Protect every app that pulls you away — not just three.",
    tag: "Pro",
    metric: "∞ apps",
  },
  {
    icon: Bell,
    title: "Custom blink timing",
    body: "Tune the reminder duration to match how you work.",
    tag: "Pro",
    metric: "1–10s",
  },
  {
    icon: Smartphone,
    title: "Android system-wide mode",
    body: "Shield all apps except launchers when you need maximum coverage.",
    tag: "Pro",
    metric: "System-wide",
  },
];

export function Features() {
  const [tab, setTab] = useState<"individuals" | "teams">("individuals");
  const features = tab === "individuals" ? coreFeatures : proFeatures;

  return (
    <section id="features" className="section-pad py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Features</p>
          <h2 className="display-heading mt-4 text-4xl font-bold md:text-5xl">
            Built for real context switching
          </h2>
          <p className="mt-5 text-lg text-text-secondary">
            Card-based tools that meet you at the moment of drift — not another
            blocker you&apos;ll uninstall by Friday.
          </p>
          <div className="mt-8 flex justify-center">
            <SegmentedControl
              options={[
                { value: "individuals", label: "For individuals" },
                { value: "teams", label: "For power users" },
              ]}
              value={tab}
              onChange={setTab}
            />
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="feature-card group"
            >
              <div className="flex items-start justify-between">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary-container">
                  <feature.icon
                    className="size-5 text-primary"
                    strokeWidth={1.75}
                  />
                </div>
                <span className="rounded-full bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                  {feature.tag}
                </span>
              </div>

              <div className="mt-6 flex items-end justify-between gap-4">
                <h3 className="display-heading text-xl font-semibold">
                  {feature.title}
                </h3>
                <span className="display-heading shrink-0 text-2xl font-bold text-foreground">
                  {feature.metric}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {feature.body}
              </p>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-surface-variant">
                <div
                  className="h-full rounded-full bg-primary-light transition-all duration-500 group-hover:w-full"
                  style={{ width: `${65 + index * 10}%` }}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
