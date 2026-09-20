import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <Link
        href="/login"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
      >
        Get Started
        <ArrowRight className="h-4 w-4" />
      </Link>

      <Link
        href="/diseases"
        className="inline-flex items-center rounded-full border border-border bg-background/70 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-muted"
      >
        Explore Diseases
      </Link>
    </div>
  );
}
