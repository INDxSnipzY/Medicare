import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Disease } from "./types";

interface DiseaseCardProps {
  disease: Disease;
}

export default function DiseaseCard({ disease }: DiseaseCardProps) {
  return (
    <Link
      href={disease.href}
      className="group rounded-3xl border border-border/50 bg-background/70 p-6 backdrop-blur-xl transition-all hover:-translate-y-2 hover:shadow-2xl"
    >
      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
        {disease.category}
      </span>

      <h3 className="mt-5 text-2xl font-bold">{disease.name}</h3>

      <p className="mt-3 text-muted-foreground">{disease.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {disease.symptoms.map((symptom) => (
          <span
            key={symptom}
            className="rounded-full bg-muted px-3 py-1 text-xs"
          >
            {symptom}
          </span>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-2 font-medium text-primary">
        Read More
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
