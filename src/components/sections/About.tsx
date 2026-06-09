"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-line bg-white/[0.01] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="ambient-brown-glow absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 sm:h-[500px] sm:w-[500px]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="About me"
          center
          title={
            <>
              Business transformation,{" "}
              <span className="font-light italic text-muted">
                powered by AI and automation.
              </span>
            </>
          }
          subtitle={site.about}
        />
      </div>
    </section>
  );
}
