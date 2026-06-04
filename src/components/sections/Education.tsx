"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { site } from "@/data/site";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Education() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  if (!site.education || site.education.length === 0) return null;

  return (
    <section ref={containerRef} id="education" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 bg-surface">
      {/* Background Giant Text */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <span className="font-display text-[120px] md:text-[200px] lg:text-[280px] font-black uppercase text-white/[0.03] tracking-widest blur-[2px]">
          EDUCATION
        </span>
      </motion.div>

      {/* Ambient Glow */}
      <div className="ambient-glow absolute right-0 top-1/3 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education & Qualifications"
          center
        />
        <ScrollReveal>
          <p className="mt-6 text-center text-muted max-w-2xl mx-auto">
            Blending AI, computing science, and business administration to build technology solutions with both technical depth and business impact.
          </p>
        </ScrollReveal>

        <div className="mt-20 relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-line">
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 w-full h-full bg-gradient-to-b from-accent via-accent-soft to-transparent origin-top opacity-50" 
            />
          </div>

          <ScrollReveal stagger className="space-y-12">
            {site.education.map((edu, idx) => (
              <ScrollReveal 
                as="div"
                key={`${edu.degree}-${idx}`} 
                className="relative pl-12 md:pl-20 transition-all duration-500 hover:-translate-y-1 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[11px] md:left-[27px] top-2 h-3 w-3 rounded-full bg-bg border-2 border-accent group-hover:scale-150 group-hover:bg-accent transition-all duration-300 shadow-[0_0_12px_rgba(216,48,26,0.5)]" />

                <div className="relative">
                  {/* Slow pulsing glow behind the card */}
                  <motion.div
                    animate={{ opacity: [0.15, 0.4, 0.15], scale: [0.98, 1.02, 0.98] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: idx * 1.5 }}
                    className="absolute -inset-2 md:-inset-3 rounded-[2rem] bg-accent/20 blur-xl z-0 pointer-events-none"
                  />
                  
                  <div className="glass-card rounded-2xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-6 relative z-10">
                      {edu.image ? (
                        <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-xl bg-white p-2">
                          <img
                            src={edu.image}
                            alt={edu.university}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      ) : null}
                      
                      <div>
                        <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">
                          {edu.degree}
                        </h3>
                        
                        <div className="font-display text-sm md:text-base font-semibold text-accent mb-3 tracking-wide">
                          {edu.institution} <span className="text-muted mx-2">|</span> <span className="text-white/80">{edu.university}</span>
                        </div>
                        
                        <p className="text-muted text-sm md:text-base leading-relaxed">
                          {edu.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
