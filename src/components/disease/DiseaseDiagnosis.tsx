import { Microscope, ClipboardCheck } from "lucide-react";

import Container from "@/components/common/Container";

import { Disease } from "@/types/disease";

interface DiseaseDiagnosisProps {
  disease: Disease;
}

export default function DiseaseDiagnosis({ disease }: DiseaseDiagnosisProps) {
  return (
    <section id="diagnosis" className="scroll-mt-24 py-12">
      <Container>
        <div className="rounded-3xl border bg-card p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10">
              <Microscope className="h-6 w-6 text-sky-500" />
            </div>

            <div>
              <h2 className="text-3xl font-bold">Diagnosis</h2>

              <p className="mt-1 text-muted-foreground">
                Doctors use a combination of medical history, physical
                examination, and diagnostic tests to confirm{" "}
                <span className="font-medium text-foreground">
                  {disease.name}
                </span>
                .
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {disease.diagnosis.map((item) => (
              <div
                key={item}
                className="rounded-2xl border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-sky-500/10 p-2">
                    <ClipboardCheck className="h-5 w-5 text-sky-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold">{item}</h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Your healthcare provider may recommend this evaluation to
                      help diagnose {disease.name.toLowerCase()} or rule out
                      other conditions with similar symptoms.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-sky-500/30 bg-sky-500/10 p-6">
            <h3 className="font-semibold text-sky-700 dark:text-sky-400">
              Early Diagnosis Matters
            </h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              Early diagnosis often leads to more effective treatment and can
              reduce the risk of serious complications. If you experience
              persistent symptoms or notice any unusual changes in your health,
              consult a qualified healthcare professional promptly.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
