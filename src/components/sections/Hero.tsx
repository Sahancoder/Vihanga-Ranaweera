"use client";

import Image from "next/image";
import { site } from "@/data/site";
import { motion } from "framer-motion";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    show: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } 
    },
  };

  const maskReveal = {
    hidden: { y: "100%" },
    show: { 
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] }
    },
  };

  return (
    <section id="home" className="relative w-full overflow-hidden pt-20">
      {/* Art-directed background portrait */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/hero/hero-web.png"
          alt={`${site.name} — portrait`}
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-top md:block"
        />
        <Image
          src="/images/hero/hero-mobile.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top md:hidden"
        />

        {/* Legibility overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/10 via-transparent to-transparent md:bg-gradient-to-r md:from-bg/90 md:via-bg/40 md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-bg to-transparent md:h-1/3" />

        {/* Face Spotlight (to naturally light up the character) */}
        <div className="absolute top-[15%] right-[5%] md:top-[10%] md:right-[15%] h-[400px] w-[400px] rounded-full bg-white/5 blur-[100px] pointer-events-none" />
      </motion.div>

      {/* Breathing Orange Glow Blob */}
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px] -z-10 pointer-events-none"
      />

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-start px-4 pb-20 pt-28 sm:px-6 md:justify-center lg:px-8"
      >
        <div className="max-w-2xl">
          {/* Availability pill */}
          {site.available ? (
            <motion.div variants={fadeUp} className="mb-6 flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <span className="font-display text-xs uppercase tracking-[0.25em] text-muted">
                Available for work
              </span>
            </motion.div>
          ) : null}

          {/* Name with Mask Reveal */}
          <div className="overflow-hidden pb-2">
            <motion.h1 
              variants={maskReveal}
              className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              {site.name}
            </motion.h1>
          </div>

          {/* Role */}
          <motion.div variants={fadeUp} className="mt-5 flex items-center gap-3">
            <motion.span 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-[2px] w-8 bg-accent origin-left" 
            />
            <p className="font-display text-sm uppercase tracking-wider text-muted sm:text-base">
              {site.role} · {site.location}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p variants={fadeUp} className="mt-8 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {site.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-sm bg-accent px-8 py-4 font-display text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Contact me
            </a>
            <a
              href="#work"
              className="rounded-sm border border-line px-8 py-4 font-display text-xs font-bold uppercase tracking-widest text-white/90 transition-all hover:border-white/40 hover:bg-white/5"
            >
              View work
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
