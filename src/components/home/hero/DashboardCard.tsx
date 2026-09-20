"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DashboardCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  subtitle: string;
  className?: string;
  delay?: number;
}

export default function DashboardCard({
  icon,
  title,
  value,
  subtitle,
  className,
  delay = 0,
}: DashboardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className={`rounded-3xl border border-border/50 bg-background/70 p-5 shadow-xl backdrop-blur-xl ${className}`}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        {icon}
      </div>

      <p className="text-sm text-muted-foreground">{title}</p>

      <h3 className="mt-1 text-2xl font-bold">{value}</h3>

      <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
    </motion.div>
  );
}
