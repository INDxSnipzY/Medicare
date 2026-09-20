import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

import { TrustedSource } from "./types";

interface SourceCardProps {
  source: TrustedSource;
}

export default function SourceCard({ source }: SourceCardProps) {
  return (
    <Link
      href={source.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-3xl border border-border/50 bg-background/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <ShieldCheck className="h-6 w-6" />
        </div>

        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>

      <h3 className="mt-6 text-lg font-semibold">{source.name}</h3>

      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {source.description}
      </p>
    </Link>
  );
}
