"use client";

import { motion } from "framer-motion";
import { ListChecks, Smartphone, Target } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Set your current task",
    body: "A short reminder of what you're working on. One line is enough — \"Finish the deck\" or \"Reply to Sarah.\"",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Pick distracting apps",
    body: "Choose which apps should trigger the shield. Instagram, TikTok, Reddit — you decide what pulls you away.",
  },
  {
    number: "03",
    icon: ListChecks,
    title: "Get a gentle nudge",
    body: "When you open a selected app, your task appears for ~2 seconds. Enough to notice. Not enough to fight.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">How it works</p>
          <h2 className="display-heading mt-4 text-4xl font-bold md:text-5xl">
            Three steps.
            <br />
            Zero willpower theater.
          </h2>
          <p className="mt-5 text-lg text-text-secondary">
            Task Blink doesn&apos;t block your phone or shame you. It interrupts
            the autopilot moment — the second before you scroll.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="feature-card"
            >
              <div className="flex items-start justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-container text-primary">
                  <step.icon className="size-5" strokeWidth={1.75} />
                </span>
                <span className="display-heading text-3xl font-bold text-border">
                  {step.number}
                </span>
              </div>
              <h3 className="display-heading mt-8 text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                {step.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
