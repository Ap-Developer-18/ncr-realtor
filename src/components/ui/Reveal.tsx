"use client";
import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

interface Props {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}
const viewport = { once: true, margin: "-60px" };

export function Reveal({ children, className, variants = fadeUp }: Props) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({ children, className }: Props) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: Props) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}
