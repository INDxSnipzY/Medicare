import Link from "next/link";
import { ArrowRight, CircleAlert, Stethoscope } from "lucide-react";

import Container from "@/components/common/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Disease } from "@/types/disease";

interface RelatedDiseasesProps {
  diseases: Disease[];
}

export default function RelatedDiseases({ diseases }: RelatedDiseasesProps) {
  if (!diseases.length) return null;

  return (
    <section className="py-14">
      <Container>
        <div className="mb-10">
          <Badge className="mb-4">Explore More</Badge>

          <h2 className="text-3xl font-bold tracking-tight">
            Related Diseases
          </h2>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            These conditions may share similar symptoms, causes, risk factors,
            or treatment approaches.
          </p>
        </div>

        <div className="space-y-5">
          {diseases.map((disease) => (
            <article
              key={disease.slug}
              className="group rounded-3xl border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-1 gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <Stethoscope className="h-7 w-7 text-primary" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">{disease.category}</Badge>

                      <Badge variant="outline" className="gap-1">
                        <CircleAlert className="h-3.5 w-3.5" />
                        Medical Condition
                      </Badge>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">{disease.name}</h3>

                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                        {disease.overview}
                      </p>
                    </div>
                  </div>
                </div>

                <Link href={`/diseases/${disease.slug}`}>
                  <Button className="shrink-0">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
