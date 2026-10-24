"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is this a blocker like Opal or One Sec?",
    a: "Similar lane, different feel. We show your task for ~2 seconds when you open a distracting app — a nudge, not a hard lock. You can still proceed. The goal is breaking autopilot, not fighting you.",
  },
  {
    q: "Does it work the same on iOS and Android?",
    a: "Honestly, no. iOS uses Apple's native Screen Time shield with your task text. Android uses a brief custom overlay. Same mental model, native implementation on each platform.",
  },
  {
    q: "Can you see what apps I use?",
    a: "On iOS, Apple keeps your app selections private — we never see readable app names. On Android, we detect the foreground app package to trigger the shield. We never read screen content, messages, or keystrokes.",
  },
  {
    q: "What happens during the 2-second reminder?",
    a: "Your current task appears front and center. After about 2 seconds, it dismisses and you can use the app normally. On Pro, you can customize the duration.",
  },
  {
    q: "Can I pause the shield for a meeting or break?",
    a: "Yes. Snooze for 15 minutes whenever you need intentional time away. The shield resumes automatically when the snooze ends.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-pad py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="section-eyebrow">FAQ</p>
          <h2 className="display-heading mt-4 text-3xl font-bold md:text-4xl">
            Questions, answered plainly
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-surface-card shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface-muted"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold">{faq.q}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-text-muted transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-[15px] leading-relaxed text-text-secondary">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
