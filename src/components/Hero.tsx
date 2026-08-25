"use client";

import { motion } from "framer-motion";
import { StoreButtons } from "./StoreButtons";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -top-32 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute top-1/3 -right-24 h-64 w-64 rounded-full bg-primary/5 blur-[80px]" />
      </div>

      <div className="section-pad relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-xs text-text-secondary backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-primary pulse-ring" />
            iOS & Android · Gentle nudge, not a lockout
          </div>

          <h1 className="display-heading text-[clamp(2.5rem,6vw,4.25rem)] font-extrabold tracking-tight">
            Stay on task
            <br />
            <span className="text-primary">when you drift</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
            Every time you switch to a distracting app, Task Blink
            reminds you what you were actually doing — for 2 seconds, then gets
            out of your way.
          </p>

          <div className="mt-10">
            <StoreButtons size="large" />
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border/70 pt-8">
            {[
              { value: "2s", label: "Brief reminder" },
              { value: "0", label: "Data sold" },
              { value: "100%", label: "On-device" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="display-heading text-2xl font-bold text-foreground md:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-text-muted md:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <PhoneMockup
            src="/mockups/mockup2.png"
            alt="Task Blink welcome screen — Stay on task when you drift"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
