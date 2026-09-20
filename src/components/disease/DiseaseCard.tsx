import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  CalendarDays,
  Clock3,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import { Disease } from "@/types/disease";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface DiseaseCardProps {
  disease: Disease;
}

export default function DiseaseCard({
  disease,
}: DiseaseCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        {disease.image ? (
          <Image
            src={disease.image}
            alt={disease.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Stethoscope className="h-16 w-16 text-muted-foreground/30" />
          </div>
        )}

        <div className="absolute left-4 top-4">
          <Badge>{disease.category}</Badge>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div>
          <h3 className="line-clamp-1 text-2xl font-bold">
            {disease.name}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
            {disease.overview}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 rounded-xl bg-muted/50 p-3">
            <Clock3 className="h-4 w-4 text-primary" />
            <span>{disease.readTime}</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-muted/50 p-3">
            <CalendarDays className="h-4 w-4 text-primary" />
            <span>{disease.updatedAt}</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-muted/50 p-3">
            <Stethoscope className="h-4 w-4 text-primary" />
            <span>{disease.symptoms.length} Symptoms</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-muted/50 p-3">
            <ShieldCheck className="h-4 w-4 text-green-600" />
            <span>
              {disease.medicallyReviewed
                ? "Reviewed"
                : "Pending"}
            </span>
          </div>
        </div>

        <Link href={`/diseases/${disease.slug}`}>
          <Button className="w-full">
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </article>
  );
}