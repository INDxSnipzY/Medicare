import { AlertCircle, CircleCheckBig } from "lucide-react";

import Container from "@/components/common/Container";

import { Disease } from "@/types/disease";

interface DiseaseSymptomsProps {
  disease: Disease;
}

export default function DiseaseSymptoms({ disease }: DiseaseSymptomsProps) {
  return (
    <section id="symptoms" className="scroll-mt-24 py-12">
      <Container>
        <div className="rounded-3xl border bg-card p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <AlertCircle className="h-6 w-6 text-primary" />
            </div>

            <div>
              <h2 className="text-3xl font-bold">Symptoms</h2>

              <p className="mt-1 text-muted-foreground">
                Common signs and symptoms associated with{" "}
                <span className="font-medium text-foreground">
                  {disease.name}
                </span>
                .
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {disease.symptoms.map((symptom) => (
              <div
                key={symptom}
                className="group rounded-2xl border bg-background p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-primary/10 p-2">
                    <CircleCheckBig className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-semibold">{symptom}</h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      This symptom may occur in some people with{" "}
                      {disease.name.toLowerCase()}. If it is severe, persistent,
                      or worsening, seek medical advice.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-amber-400/30 bg-amber-500/10 p-6">
            <h3 className="font-semibold">When should you see a doctor?</h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              Consult a healthcare professional if your symptoms are severe,
              persist for several days, interfere with daily life, or are
              accompanied by emergency warning signs such as difficulty
              breathing, chest pain, confusion, loss of consciousness, or
              uncontrolled bleeding.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
