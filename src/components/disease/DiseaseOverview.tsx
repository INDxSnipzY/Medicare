import Container from "@/components/common/Container";

import { Disease } from "@/types/disease";

interface DiseaseOverviewProps {
  disease: Disease;
}

export default function DiseaseOverview({ disease }: DiseaseOverviewProps) {
  return (
    <section id="overview" className="scroll-mt-24 py-12">
      <Container>
        <div className="rounded-3xl border bg-card p-8 shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight">Overview</h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
            <p>{disease.overview}</p>

            <p>
              Early diagnosis and proper treatment can help reduce complications
              and improve quality of life. Learning about the symptoms, causes,
              diagnosis, treatment options, and prevention is an important step
              toward better health.
            </p>

            <p>
              The information below is based on guidance from trusted medical
              organizations and is intended to support—not replace—the advice of
              qualified healthcare professionals.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border bg-background p-5">
              <h3 className="font-semibold">Category</h3>

              <p className="mt-2 text-muted-foreground">{disease.category}</p>
            </div>

            <div className="rounded-2xl border bg-background p-5">
              <h3 className="font-semibold">Common Symptoms</h3>

              <p className="mt-2 text-muted-foreground">
                {disease.symptoms.length}
              </p>
            </div>

            <div className="rounded-2xl border bg-background p-5">
              <h3 className="font-semibold">Treatment Options</h3>

              <p className="mt-2 text-muted-foreground">
                {disease.treatment.length}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
