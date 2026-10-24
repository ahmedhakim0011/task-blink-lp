"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section className="hero-ambient relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40">
      <div className="section-pad relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pill-badge mb-8 gap-2">
            <span className="size-2 rounded-full bg-primary-light pulse-ring" />
            New generation focus app
          </div>

          <h1 className="display-heading text-[clamp(2.75rem,6vw,4.5rem)] font-extrabold tracking-tight text-foreground">
            Stay on task
            <br />
            <span className="text-primary">when you drift</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
            Every time you switch to a distracting app, Task Blink reminds you
            what you were actually doing — for 2 seconds, then gets out of your
            way.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="#download" className="btn-primary">
              Download free
            </Link>
            <Link href="#how-it-works" className="btn-secondary">
              See how it works
            </Link>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8">
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
            tilt
          />
        </motion.div>
      </div>
    </section>
  );
}
