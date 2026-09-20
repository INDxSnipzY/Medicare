import { Shield, HeartPulse } from "lucide-react";

import Container from "@/components/common/Container";

import { Disease } from "@/types/disease";

interface DiseasePreventionProps {
  disease: Disease;
}

export default function DiseasePrevention({ disease }: DiseasePreventionProps) {
  return (
    <section id="prevention" className="scroll-mt-24 py-12">
      <Container>
        <div className="rounded-3xl border bg-card p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10">
              <Shield className="h-6 w-6 text-green-500" />
            </div>

            <div>
              <h2 className="text-3xl font-bold">Prevention</h2>

              <p className="mt-1 text-muted-foreground">
                Although not every case of{" "}
                <span className="font-medium text-foreground">
                  {disease.name}
                </span>{" "}
                can be prevented, healthy lifestyle choices and regular medical
                care can significantly lower the risk.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {disease.prevention.map((item) => (
              <div
                key={item}
                className="rounded-2xl border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-green-500/10 p-2">
                    <HeartPulse className="h-5 w-5 text-green-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold">{item}</h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Following this recommendation may help reduce your risk of
                      developing {disease.name.toLowerCase()} or prevent
                      complications associated with the condition.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-green-500/30 bg-green-500/10 p-6">
            <h3 className="font-semibold text-green-700 dark:text-green-400">
              Healthy Living Tips
            </h3>

            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li>• Eat a balanced and nutritious diet.</li>
              <li>• Exercise regularly according to your fitness level.</li>
              <li>• Maintain a healthy body weight.</li>
              <li>• Get 7–9 hours of quality sleep each night.</li>
              <li>• Avoid smoking, tobacco, and excessive alcohol.</li>
              <li>• Stay up to date with recommended vaccinations.</li>
              <li>• Manage stress through relaxation and mindfulness.</li>
              <li>• Schedule regular health check-ups and screenings.</li>
            </ul>
          </div>

          <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <h3 className="font-semibold">Prevention Is Better Than Cure</h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              Adopting healthy habits early in life can reduce the likelihood of
              many chronic diseases and improve long-term physical and mental
              well-being. Small, consistent lifestyle changes often have the
              greatest impact over time.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
