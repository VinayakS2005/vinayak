"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CyclingTextProps {
  roles: string[];
  interval?: number;
  className?: string;
  startDelay?: number;
}

export default function CyclingText({
  roles,
  interval = 3000,
  className,
  startDelay = 0,
}: CyclingTextProps) {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(startDelay === 0);

  useEffect(() => {
    if (startDelay > 0) {
      const timeout = setTimeout(() => setStarted(true), startDelay);
      return () => clearTimeout(timeout);
    }
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, interval);
    return () => clearInterval(timer);
  }, [started, interval, roles.length]);

  return (
    <div className={cn("relative", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 16, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -16, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="inline-block"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
