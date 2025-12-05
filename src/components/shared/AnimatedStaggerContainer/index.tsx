"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  amount?: number;
}

export function AnimatedStaggerContainer({
  children,
  className,
  staggerDelay = 0.15,
  delayChildren = 0.1,
  amount = 0.2,
}: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
