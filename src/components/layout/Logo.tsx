import Link from "next/link";
import { HeartPulse } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 transition-opacity hover:opacity-90"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
        <HeartPulse className="h-6 w-6" />
      </div>

      <div className="leading-none">
        <h1 className="text-xl font-bold tracking-tight">Medicare</h1>

        <p className="text-xs text-muted-foreground">Trusted Health Guide</p>
      </div>
    </Link>
  );
}
