import { ShieldCheck } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
      <ShieldCheck className="h-4 w-4" />
      <span>Evidence-based medical information</span>
    </div>
  );
}
