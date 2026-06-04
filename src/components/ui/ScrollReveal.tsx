"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
  blur?: boolean;
  as?: "div" | "span" | "li" | "ul";
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  stagger = false,
  blur = true,
  as = "div",
}: ScrollRevealProps) {
  const MotionTag = motion[as] as any;

  // Staggered Container
  if (stagger) {
    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: delay,
        },
      },
    };
    return (
      <MotionTag
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className={className}
      >
        {children}
      </MotionTag>
    );
  }

  // Individual item reveal
  const item = {
    hidden: { 
      opacity: 0, 
      y: 40, 
      scale: 0.96,
      filter: blur ? "blur(10px)" : "blur(0px)",
    },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1], // cinematic smooth ease
        delay: delay,
      }
    },
  };

  return (
    <MotionTag
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
