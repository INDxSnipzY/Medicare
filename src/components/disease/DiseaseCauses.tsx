import { Activity, CircleCheckBig } from "lucide-react";

import Container from "@/components/common/Container";

import { Disease } from "@/types/disease";

interface DiseaseCausesProps {
  disease: Disease;
}

export default function DiseaseCauses({ disease }: DiseaseCausesProps) {
  return (
    <section id="causes" className="scroll-mt-24 py-12">
      <Container>
        <div className="rounded-3xl border bg-card p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <Activity className="h-6 w-6 text-primary" />
            </div>

            <div>
              <h2 className="text-3xl font-bold">Causes</h2>

              <p className="mt-1 text-muted-foreground">
                Factors that may contribute to the development of{" "}
                <span className="font-medium text-foreground">
                  {disease.name}
                </span>
                .
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {disease.causes.map((cause) => (
              <div
                key={cause}
                className="group rounded-2xl border bg-background p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-primary/10 p-2">
                    <CircleCheckBig className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-semibold">{cause}</h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      This factor has been associated with the development or
                      progression of {disease.name.toLowerCase()}. Individual
                      risk varies from person to person.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-blue-400/30 bg-blue-500/10 p-6">
            <h3 className="font-semibold text-blue-700 dark:text-blue-400">
              Important Note
            </h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              Many diseases do not have a single cause. They often result from a
              combination of genetic, environmental, lifestyle, infectious, and
              metabolic factors. Having one or more risk factors does not
              necessarily mean a person will develop the disease.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
