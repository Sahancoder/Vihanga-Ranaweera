"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { site } from "@/data/site";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="ambient-glow absolute -right-20 top-10 h-[450px] w-[450px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Associated with"
          title="Experience & Associations"
          subtitle="Where I've contributed — applying transformation thinking and software inside real organisations."
        />

        <ScrollReveal stagger className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {site.experience.map((exp) => (
            <ScrollReveal
              as="article"
              key={exp.company}
              className="glass-card group flex flex-col rounded-2xl p-7 transition-colors hover:border-accent/40 sm:flex-row sm:items-start sm:gap-6"
            >
              {/* Logo chip — light backing so navy/colour logos stay legible */}
              <div className="mb-5 flex h-20 w-28 shrink-0 items-center justify-center rounded-xl bg-white p-3 sm:mb-0">
                <Image
                  src={exp.logo}
                  alt={exp.logoAlt}
                  width={96}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                    {exp.company}
                  </h3>
                  {exp.placeholder ? (
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-display text-[9px] uppercase tracking-widest text-accent">
                      Draft
                    </span>
                  ) : null}
                </div>

                <p className="mt-1 text-sm font-medium text-accent-soft">
                  {exp.role}
                </p>
                {exp.period ? (
                  <p className="mt-1 font-display text-[11px] uppercase tracking-widest text-muted">
                    {exp.period}
                  </p>
                ) : null}

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {exp.summary}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
