import { CalendarDays, Clock3, ShieldCheck } from "lucide-react";

import Container from "@/components/common/Container";
import { Badge } from "@/components/ui/badge";

import ShareButtons from "./ShareButtons";

import { Disease } from "@/types/disease";

interface DiseaseHeroProps {
  disease: Disease;
}

export default function DiseaseHero({ disease }: DiseaseHeroProps) {
  return (
    <section className="border-b bg-gradient-to-b from-primary/5 via-background to-background py-14">
      <Container>
        <div className="max-w-4xl">
          <Badge className="mb-4">{disease.category}</Badge>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {disease.name}
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {disease.overview}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              Updated July 2026
            </div>

            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4" />8 min read
            </div>

            <div className="flex items-center gap-2 text-green-600 dark:text-green-500">
              <ShieldCheck className="h-4 w-4" />
              Medically Reviewed
            </div>
          </div>

          <div className="mt-8">
            <ShareButtons title={disease.name} />
          </div>

          <div className="mt-10 rounded-2xl border border-amber-300/40 bg-amber-500/10 p-5">
            <h3 className="font-semibold">Medical Disclaimer</h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              This article is intended for educational purposes only. It should
              not replace professional medical advice, diagnosis, or treatment.
              Always consult a qualified healthcare provider regarding any
              medical concerns.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
