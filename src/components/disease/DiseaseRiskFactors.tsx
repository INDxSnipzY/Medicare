import { ShieldAlert, TriangleAlert } from "lucide-react";

import Container from "@/components/common/Container";

import { Disease } from "@/types/disease";

interface DiseaseRiskFactorsProps {
  disease: Disease;
}

export default function DiseaseRiskFactors({
  disease,
}: DiseaseRiskFactorsProps) {
  return (
    <section id="risk-factors" className="scroll-mt-24 py-12">
      <Container>
        <div className="rounded-3xl border bg-card p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10">
              <ShieldAlert className="h-6 w-6 text-orange-500" />
            </div>

            <div>
              <h2 className="text-3xl font-bold">Risk Factors</h2>

              <p className="mt-1 text-muted-foreground">
                Factors that may increase your chances of developing{" "}
                <span className="font-medium text-foreground">
                  {disease.name}
                </span>
                .
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {disease.riskFactors.map((risk) => (
              <div
                key={risk}
                className="rounded-2xl border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-orange-500/10 p-2">
                    <TriangleAlert className="h-5 w-5 text-orange-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold">{risk}</h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      People with this risk factor may have a higher likelihood
                      of developing {disease.name.toLowerCase()}. Risk does not
                      guarantee disease, but awareness allows early prevention
                      and screening.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-green-500/30 bg-green-500/10 p-6">
            <h3 className="font-semibold text-green-700 dark:text-green-400">
              Can Risk Be Reduced?
            </h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              Some risk factors, such as age or genetics, cannot be changed.
              However, many lifestyle-related risks—including smoking, unhealthy
              diet, physical inactivity, excessive alcohol consumption, obesity,
              and poor sleep—can often be improved through healthy habits and
              regular medical check-ups.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
