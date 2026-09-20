import { TriangleAlert, ShieldAlert } from "lucide-react";

import Container from "@/components/common/Container";

import { Disease } from "@/types/disease";

interface DiseaseComplicationsProps {
  disease: Disease;
}

export default function DiseaseComplications({
  disease,
}: DiseaseComplicationsProps) {
  return (
    <section id="complications" className="scroll-mt-24 py-12">
      <Container>
        <div className="rounded-3xl border bg-card p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10">
              <TriangleAlert className="h-6 w-6 text-red-500" />
            </div>

            <div>
              <h2 className="text-3xl font-bold">Complications</h2>

              <p className="mt-1 text-muted-foreground">
                If left untreated or poorly managed,{" "}
                <span className="font-medium text-foreground">
                  {disease.name}
                </span>{" "}
                may lead to serious health complications.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {disease.complications.map((item) => (
              <div
                key={item}
                className="rounded-2xl border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-red-500/10 p-2">
                    <ShieldAlert className="h-5 w-5 text-red-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold">{item}</h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Early diagnosis, regular monitoring, and proper treatment
                      can help reduce the likelihood of this complication and
                      improve long-term health outcomes.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-red-500/30 bg-red-500/10 p-6">
            <h3 className="font-semibold text-red-700 dark:text-red-400">
              Why Early Treatment Matters
            </h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              Delaying medical care may allow the disease to progress and
              increase the risk of permanent organ damage, disability, or
              life-threatening complications. Seeking timely medical attention
              and following your treatment plan are essential for preventing
              severe outcomes.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
            <h3 className="font-semibold text-amber-700 dark:text-amber-400">
              Regular Follow-up
            </h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              Regular check-ups allow healthcare providers to detect
              complications early, adjust treatment when necessary, and monitor
              your overall health. Never skip scheduled follow-up appointments,
              even if you feel well.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
