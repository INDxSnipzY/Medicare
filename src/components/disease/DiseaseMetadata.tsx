import { CalendarDays, Clock3, ShieldCheck } from "lucide-react";

export default function DiseaseMetadata() {
  return (
    <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <CalendarDays className="h-4 w-4" />
        Updated Jul 2026
      </div>

      <div className="flex items-center gap-2">
        <Clock3 className="h-4 w-4" />8 min read
      </div>

      <div className="flex items-center gap-2">
        <ShieldCheck className="h-4 w-4 text-green-500" />
        Medically Reviewed
      </div>
    </div>
  );
}
