"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: React.ReactNode;
  colors: string[];
  delay?: number;
  className?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({
  children,
  colors,
  delay = 0,
  className,
}) => {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/6 bg-[#0f0f0f]",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="heavy" />
      <div className="relative z-10 p-6 sm:p-8">{children}</div>
    </motion.div>
  );
};

export { BentoCard };
