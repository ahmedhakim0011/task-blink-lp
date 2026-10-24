"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MonitorSmartphone } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import { SegmentedControl } from "./SegmentedControl";

const previews = {
  ios: {
    src: "/mockups/mockup1.png",
    alt: "Task Blink Screen Time permission screen",
    label: "iOS Screen Time",
    detail:
      "Uses Apple's native Screen Time shield with your task text. App selections stay private on your device.",
  },
  android: {
    src: "/mockups/mockup2.png",
    alt: "Task Blink home screen on Android",
    label: "Android overlay",
    detail:
      "Shows a brief custom overlay when you switch to selected apps. Foreground app name only — never screen content.",
  },
} as const;

export function ShieldInAction() {
  const [platform, setPlatform] = useState<"ios" | "android">("ios");
  const preview = previews[platform];

  return (
    <section className="section-pad py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <p className="section-eyebrow">In the moment</p>
            <h2 className="display-heading mt-4 text-4xl font-bold md:text-5xl">
              The blink that saves your afternoon
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-text-secondary">
              You reach for a distracting app out of habit. Before the feed
              loads, your task fills the screen. Two seconds. Then you choose —
              stay or drift — with your eyes open.
            </p>

            <div className="mt-8">
              <SegmentedControl
                options={[
                  { value: "ios", label: "iOS" },
                  { value: "android", label: "Android" },
                ]}
                value={platform}
                onChange={setPlatform}
              />
            </div>

            <motion.div
              key={platform}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-8 feature-card"
            >
              <div className="flex gap-4">
                <MonitorSmartphone className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">{preview.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {preview.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              key={preview.src}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <PhoneMockup src={preview.src} alt={preview.alt} tilt />
              <div className="absolute -right-2 top-10 rounded-full bg-surface-card px-4 py-2 text-xs font-semibold shadow-[0_4px_12px_rgba(0,0,0,0.04)] md:-right-6">
                Private on device
              </div>
              <div className="absolute inset-x-6 bottom-8 mx-auto flex w-fit items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
                <span className="size-2 rounded-full bg-primary-light" />
                <span className="text-xs font-medium text-foreground">
                  Shield active · 2s blink
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
