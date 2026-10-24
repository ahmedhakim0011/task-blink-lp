"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const comparison = [
  { feature: "Shielded apps", free: "Up to 3", pro: "Unlimited" },
  { feature: "Blink duration", free: "2 seconds", pro: "Customizable" },
  { feature: "Android coverage", free: "Selected apps", pro: "System-wide" },
  { feature: "Core shield", free: "Included", pro: "Included" },
  { feature: "Snooze breaks", free: "Included", pro: "Included" },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-pad py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Pricing</p>
          <h2 className="display-heading mt-4 text-4xl font-bold md:text-5xl">
            Start free.
            <br />
            Go Pro when it sticks.
          </h2>
          <p className="mt-5 text-lg text-text-secondary">
            The core shield is free forever. Pro unlocks when you&apos;re ready
            to protect more apps and fine-tune the nudge.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="feature-card md:p-10"
          >
            <p className="text-sm font-medium text-text-muted">Free</p>
            <p className="display-heading mt-2 text-5xl font-bold">$0</p>
            <p className="mt-2 text-text-secondary">
              Everything you need to try the habit.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Up to 3 shielded apps",
                "2-second reminder",
                "Task + snooze",
                "On-device privacy",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <Check className="size-4 text-primary" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="feature-card border-primary-border bg-primary-container md:p-10"
          >
            <div className="flex items-center gap-3">
              <p className="text-sm font-semibold text-primary">Pro</p>
              <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-on-primary">
                Popular
              </span>
            </div>
            <p className="display-heading mt-2 text-5xl font-bold">
              $2.99
              <span className="text-lg font-medium text-text-muted">/mo</span>
            </p>
            <p className="mt-2 text-text-secondary">
              Or save with annual billing in the app.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface-muted">
                    <th className="px-4 py-3 text-left font-medium text-text-muted">
                      Feature
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-text-muted">
                      Free
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-primary">
                      Pro
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-border last:border-0"
                    >
                      <td className="px-4 py-3">{row.feature}</td>
                      <td className="px-4 py-3 text-text-secondary">
                        {row.free}
                      </td>
                      <td className="px-4 py-3 font-medium text-primary">
                        {row.pro}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
