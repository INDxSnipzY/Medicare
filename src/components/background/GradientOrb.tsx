"use client";

import { cn } from "@/lib/utils";

interface GradientOrbProps {
  className?: string;
}

export default function GradientOrb({ className }: GradientOrbProps) {
  return (
    <div
      className={cn("absolute rounded-full blur-3xl opacity-30", className)}
    />
  );
}
