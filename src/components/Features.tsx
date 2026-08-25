"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Globe,
  Moon,
  ShieldCheck,
  SlidersHorizontal,
  Zap,
} from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";

const features = [
  {
    icon: ShieldCheck,
    title: "One task, always visible",
    body: "Your current focus lives on the home screen. Edit in one tap when priorities shift.",
  },
  {
    icon: Clock,
    title: "Snooze when you need a break",
    body: "Intentional breaks matter. Pause the shield for 15 minutes, then it resumes automatically.",
  },
  {
    icon: SlidersHorizontal,
    title: "Your distraction list",
    body: "Pick exactly which apps trigger the nudge. Change the list anytime from settings.",
  },
  {
    icon: Moon,
    title: "Dark, calm interface",
    body: "Designed to feel like part of your phone — not another loud productivity app screaming at you.",
  },
  {
    icon: Globe,
    title: "Works across platforms",
    body: "Same mental model on iOS and Android. Native integrations on each — honest about the differences.",
  },
  {
    icon: Zap,
    title: "Pro: unlimited + custom timing",
    body: "Shield unlimited apps, tweak blink duration, and unlock Android system-wide mode.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent" />

      <div className="section-pad relative mx-auto max-w-7xl">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Features
            </p>
            <h2 className="display-heading mt-4 text-4xl font-bold md:text-5xl">
              Built for real
              <br />
              context switching
            </h2>
            <p className="mt-5 max-w-md text-lg text-text-secondary">
              Not another blocker that you&apos;ll uninstall by Friday. A small
              friction point at the exact moment your brain goes on autopilot.
            </p>
          </div>

          <div className="relative flex items-end justify-center gap-4 sm:gap-6">
            <PhoneMockup
              src="/mockups/mockup2.png"
              alt="Welcome onboarding screen"
              className="max-w-[220px] sm:max-w-[240px]"
            />
            <PhoneMockup
              src="/mockups/mockup1.png"
              alt="Screen Time permission screen"
              className="max-w-[220px] translate-y-6 sm:max-w-[240px] sm:translate-y-10"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-2xl border border-border/80 bg-surface/50 p-6 backdrop-blur-sm"
            >
              <feature.icon
                className="size-5 text-primary"
                strokeWidth={1.75}
              />
              <h3 className="display-heading mt-4 text-lg font-semibold">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
