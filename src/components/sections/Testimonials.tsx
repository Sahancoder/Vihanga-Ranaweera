"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { site } from "@/data/site";

export function Testimonials() {
  if (site.testimonials.length === 0) return null;

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="ambient-glow absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people say"
          center
        />

        <ScrollReveal stagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.testimonials.map((t, i) => (
            <ScrollReveal
              as="figure"
              key={`${t.name}-${i}`}
              className="glass-card flex flex-col justify-between rounded-2xl p-7"
            >
              <blockquote className="text-sm leading-relaxed text-muted">
                <span className="mr-1 font-display text-2xl text-accent">“</span>
                {t.quote}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-4 border-t border-line pt-5">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-full object-cover border border-white/10"
                  />
                ) : null}
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-display text-sm font-bold uppercase text-white">
                      {t.name}
                    </p>
                    {t.placeholder ? (
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-display text-[9px] uppercase tracking-widest text-accent">
                        Draft
                      </span>
                    ) : null}
                  </div>
                  <p className="text-[11px] uppercase tracking-wider text-muted">
                    {t.role}
                    {t.company ? ` · ${t.company}` : ""}
                  </p>
                </div>
              </figcaption>
            </ScrollReveal>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
