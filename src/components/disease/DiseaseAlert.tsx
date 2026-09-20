import { AlertTriangle } from "lucide-react";

interface DiseaseAlertProps {
  title: string;
  children: React.ReactNode;
}

export default function DiseaseAlert({ title, children }: DiseaseAlertProps) {
  return (
    <div className="my-10 rounded-2xl border border-red-500/30 bg-red-500/5 p-6">
      <div className="flex items-center gap-3">
        <AlertTriangle className="h-6 w-6 text-red-500" />

        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <div className="mt-4">{children}</div>
    </div>
  );
}
