import { Pill, Stethoscope } from "lucide-react";

import Container from "@/components/common/Container";

import { Disease } from "@/types/disease";

interface DiseaseTreatmentProps {
  disease: Disease;
}

export default function DiseaseTreatment({ disease }: DiseaseTreatmentProps) {
  return (
    <section id="treatment" className="scroll-mt-24 py-12">
      <Container>
        <div className="rounded-3xl border bg-card p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10">
              <Pill className="h-6 w-6 text-emerald-500" />
            </div>

            <div>
              <h2 className="text-3xl font-bold">Treatment</h2>

              <p className="mt-1 text-muted-foreground">
                Treatment for{" "}
                <span className="font-medium text-foreground">
                  {disease.name}
                </span>{" "}
                depends on its severity, underlying cause, and your overall
                health. A healthcare professional will recommend the most
                appropriate treatment plan.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {disease.treatment.map((item) => (
              <div
                key={item}
                className="rounded-2xl border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-emerald-500/10 p-2">
                    <Stethoscope className="h-5 w-5 text-emerald-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold">{item}</h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      This treatment may help manage symptoms, improve recovery,
                      reduce complications, or slow the progression of{" "}
                      {disease.name.toLowerCase()}. Your doctor will determine
                      whether it is appropriate for your individual condition.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
            <h3 className="font-semibold text-emerald-700 dark:text-emerald-400">
              Follow Your Treatment Plan
            </h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              Take medications exactly as prescribed, attend follow-up
              appointments, and inform your healthcare provider if your symptoms
              worsen or you experience side effects. Do not stop or change your
              treatment without medical advice.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6">
            <h3 className="font-semibold text-blue-700 dark:text-blue-400">
              Healthy Lifestyle
            </h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              Alongside medical treatment, maintaining a balanced diet, regular
              physical activity, adequate sleep, stress management, and avoiding
              tobacco or excessive alcohol can significantly improve long-term
              health outcomes for many conditions.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
