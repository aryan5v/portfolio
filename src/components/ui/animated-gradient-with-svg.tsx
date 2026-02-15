"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useDimensions } from "@/components/hooks/use-debounced-dimensions";

interface AnimatedGradientProps {
  colors: string[];
  speed?: number;
  blur?: "light" | "medium" | "heavy";
  /** When false, animation does not run (e.g. until card is in viewport). Default true. */
  runAnimation?: boolean;
}

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  colors,
  speed = 5,
  blur = "light",
  runAnimation = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(containerRef);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const circleSize = useMemo(
    () => Math.max(dimensions.width, dimensions.height),
    [dimensions.width, dimensions.height]
  );

  // Pre-compute random values once on mount to avoid hydration mismatch
  const randoms = useMemo(() => {
    if (!mounted) return [];
    return colors.map(() => ({
      top: Math.random() * 50,
      left: Math.random() * 50,
      tx1: Math.random() - 0.5,
      ty1: Math.random() - 0.5,
      tx2: Math.random() - 0.5,
      ty2: Math.random() - 0.5,
      tx3: Math.random() - 0.5,
      ty3: Math.random() - 0.5,
      tx4: Math.random() - 0.5,
      ty4: Math.random() - 0.5,
      sizeMul: randomInt(0.5, 1.5),
    }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, colors.length]);

  const blurClass =
    blur === "light"
      ? "blur-2xl"
      : blur === "medium"
        ? "blur-3xl"
        : "blur-[100px]";

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className={cn("absolute inset-0", blurClass)}>
        {mounted &&
          colors.map((color, index) => {
            const r = randoms[index];
            if (!r) return null;
            return (
              <svg
                key={index}
                className={runAnimation ? "absolute animate-background-gradient will-change-transform" : "absolute will-change-transform"}
                style={
                  {
                    top: `${r.top}%`,
                    left: `${r.left}%`,
                    "--background-gradient-speed": `${1 / speed}s`,
                    "--tx-1": r.tx1,
                    "--ty-1": r.ty1,
                    "--tx-2": r.tx2,
                    "--ty-2": r.ty2,
                    "--tx-3": r.tx3,
                    "--ty-3": r.ty3,
                    "--tx-4": r.tx4,
                    "--ty-4": r.ty4,
                  } as React.CSSProperties
                }
                width={circleSize * r.sizeMul}
                height={circleSize * r.sizeMul}
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="50"
                  fill={color}
                  className="opacity-30 dark:opacity-[0.15]"
                />
              </svg>
            );
          })}
      </div>
    </div>
  );
};

export { AnimatedGradient };
