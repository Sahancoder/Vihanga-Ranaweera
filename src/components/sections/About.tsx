"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { site } from "@/data/site";
import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-line bg-white/[0.01] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="ambient-brown-glow absolute -left-20 top-1/4 h-[500px] w-[500px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About me"
          title={
            <>
              Business transformation,{" "}
              <span className="font-light italic text-muted">
                built into software.
              </span>
            </>
          }
          subtitle={site.about}
        />

        {/* Skills */}
        <ScrollReveal stagger className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.skills.map((skill, i) => (
            <ScrollReveal
              as="article"
              key={skill.label}
              className="glass-card flex flex-col justify-between rounded-2xl p-6"
            >
              <div className="mb-10 flex items-start justify-between">
                <div>
                  <p className="font-display text-xs uppercase tracking-widest text-muted">
                    {skill.label}
                  </p>
                  <p className="font-mono text-[10px] text-accent">
                    /{String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                {skill.hint ? (
                  <span className="text-right font-display text-[10px] uppercase tracking-wider text-muted">
                    {skill.hint}
                  </span>
                ) : null}
              </div>

              <div>
                <div className="mb-4 font-display text-5xl font-bold tracking-tighter text-white">
                  {skill.value}%
                </div>
                <div className="skill-track">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                    className="skill-fill"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
