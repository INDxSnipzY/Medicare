import { PhoneCall, Siren, TriangleAlert } from "lucide-react";

import Container from "@/components/common/Container";

import { Disease } from "@/types/disease";

interface DiseaseEmergencyProps {
  disease: Disease;
}

export default function DiseaseEmergency({ disease }: DiseaseEmergencyProps) {
  return (
    <section id="emergency" className="scroll-mt-24 py-12">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-red-500/5 shadow-sm">
          <div className="border-b border-red-500/20 p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500 text-white">
                <Siren className="h-7 w-7" />
              </div>

              <div>
                <h2 className="text-3xl font-bold">Emergency Warning Signs</h2>

                <p className="mt-2 text-muted-foreground">
                  Seek immediate medical attention if any of the following
                  symptoms occur while experiencing{" "}
                  <span className="font-medium text-foreground">
                    {disease.name}
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid gap-4 md:grid-cols-2">
              {disease.emergencySigns.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-red-500/20 bg-background p-5 transition-all hover:border-red-500/40 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-red-500/10 p-2">
                      <TriangleAlert className="h-5 w-5 text-red-500" />
                    </div>

                    <div>
                      <h3 className="font-semibold">{item}</h3>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        This symptom may indicate a serious medical emergency
                        and should never be ignored.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-red-500 bg-red-500 p-6 text-white">
              <div className="flex items-start gap-4">
                <PhoneCall className="mt-1 h-6 w-6" />

                <div>
                  <h3 className="text-xl font-bold">
                    Call Emergency Services Immediately
                  </h3>

                  <p className="mt-3 leading-7 text-red-100">
                    If the person is unconscious, having difficulty breathing,
                    experiencing severe chest pain, uncontrolled bleeding,
                    seizures, or any life-threatening condition, call your local
                    emergency medical services immediately.
                  </p>

                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <div className="rounded-xl bg-white/10 p-4">
                      <div className="text-sm text-red-100">Ambulance</div>

                      <div className="mt-1 text-2xl font-bold">108</div>
                    </div>

                    <div className="rounded-xl bg-white/10 p-4">
                      <div className="text-sm text-red-100">
                        Emergency Response
                      </div>

                      <div className="mt-1 text-2xl font-bold">112</div>
                    </div>

                    <div className="rounded-xl bg-white/10 p-4">
                      <div className="text-sm text-red-100">
                        Medical Helpline
                      </div>

                      <div className="mt-1 text-2xl font-bold">104</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
              <h3 className="font-semibold text-amber-700 dark:text-amber-400">
                Important Reminder
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                Do not attempt to diagnose or treat a medical emergency using
                online information alone. If you believe you or someone else is
                experiencing a life-threatening emergency, seek immediate
                medical care without delay.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
