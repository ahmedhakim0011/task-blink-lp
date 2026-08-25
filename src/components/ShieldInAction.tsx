"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";

export function ShieldInAction() {
  return (
    <section className="section-pad py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              In the moment
            </p>
            <h2 className="display-heading mt-4 text-4xl font-bold md:text-5xl">
              The blink
              <br />
              that saves your afternoon
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-text-secondary">
              You reach for a distracting app out of habit. Before the feed
              loads, your task fills the screen. Two seconds. Then you choose —
              stay or drift — with your eyes open.
            </p>

            <div className="mt-10 space-y-4">
              <PlatformNote
                platform="iOS"
                detail="Uses Apple's native Screen Time shield with your task text. App selections stay private on your device."
              />
              <PlatformNote
                platform="Android"
                detail="Shows a brief custom overlay when you switch to selected apps. Foreground app name only — never screen content."
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative">
              <PhoneMockup
                src="/mockups/mockup1.png"
                alt="Task Blink Screen Time permission screen"
              />
              <div className="absolute -right-2 top-8 rounded-full border border-border bg-background/90 px-4 py-2 text-xs font-medium backdrop-blur-md md:-right-6">
                Private on device
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PlatformNote({
  platform,
  detail,
}: {
  platform: string;
  detail: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-surface/60 p-5">
      <MonitorSmartphone className="mt-0.5 size-5 shrink-0 text-primary" />
      <div>
        <p className="font-semibold">{platform}</p>
        <p className="mt-1 text-sm leading-relaxed text-text-secondary">
          {detail}
        </p>
      </div>
    </div>
  );
}
