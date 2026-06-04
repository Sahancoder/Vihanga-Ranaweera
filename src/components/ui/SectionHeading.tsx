"use client";

import { motion, Variants } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: SectionHeadingProps) {
  // Stagger wrapper
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemFade: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const lineDraw: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    show: { 
      scaleX: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
    },
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1, margin: "0px 0px -10% 0px" }}
      className={center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}
    >
      <motion.p 
        variants={itemFade}
        className="mb-4 font-display text-xs uppercase tracking-[0.25em] text-accent"
      >
        <span className="opacity-50 mr-1">//</span>
        {eyebrow}
      </motion.p>
      
      <motion.div variants={itemFade} className="relative inline-block">
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {/* Animated orange underline */}
        <motion.div 
          variants={lineDraw}
          className={`absolute -bottom-3 h-[2px] bg-gradient-to-r from-accent to-accent-soft origin-left ${center ? 'left-1/2 -translate-x-1/2 w-16 origin-center' : 'left-0 w-24'}`}
        />
      </motion.div>

      {subtitle ? (
        <motion.p 
          variants={itemFade}
          className="mt-6 text-sm leading-relaxed text-muted sm:text-base"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
