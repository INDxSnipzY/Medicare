"use client";

import { CircleHelp, MessageCircleQuestion } from "lucide-react";

import Container from "@/components/common/Container";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Disease } from "@/types/disease";

interface DiseaseFAQProps {
  disease: Disease;
}

export default function DiseaseFAQ({ disease }: DiseaseFAQProps) {
  return (
    <section id="faq" className="scroll-mt-24 py-12">
      <Container>
        <div className="rounded-3xl border bg-card p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10">
              <CircleHelp className="h-6 w-6 text-violet-500" />
            </div>

            <div>
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>

              <p className="mt-1 text-muted-foreground">
                Answers to some common questions about{" "}
                <span className="font-medium text-foreground">
                  {disease.name}
                </span>
                .
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Accordion className="space-y-4">
              {disease.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="overflow-hidden rounded-2xl border bg-background px-6"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                    <div className="flex items-center gap-3">
                      <MessageCircleQuestion className="h-5 w-5 text-primary" />

                      {faq.question}
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-6 text-base leading-7 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <h3 className="font-semibold">Still have questions?</h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              Every person's medical condition is unique. If you have concerns
              about symptoms, diagnosis, treatment, or recovery, consult a
              qualified healthcare professional for personalized medical advice.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
