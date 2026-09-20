import Link from "next/link";

import { Disease } from "@/types/disease";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "symptoms", label: "Symptoms" },
  { id: "causes", label: "Causes" },
  { id: "risk-factors", label: "Risk Factors" },
  { id: "diagnosis", label: "Diagnosis" },
  { id: "treatment", label: "Treatment" },
  { id: "prevention", label: "Prevention" },
  { id: "complications", label: "Complications" },
  { id: "emergency", label: "Emergency Signs" },
  { id: "faq", label: "FAQ" },
];

interface DiseaseSidebarProps {
  disease: Disease;
}

export default function DiseaseSidebar({ disease }: DiseaseSidebarProps) {
  return (
    <div className="sticky top-24 space-y-6">
      <div className="rounded-2xl border bg-card p-6">
        <h3 className="mb-4 text-lg font-semibold">On This Page</h3>

        <nav className="space-y-2">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {section.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="rounded-2xl border bg-card p-6">
        <h3 className="mb-3 font-semibold">Medical Disclaimer</h3>

        <p className="text-sm leading-6 text-muted-foreground">
          This information is for educational purposes only and is not a
          substitute for professional medical advice, diagnosis, or treatment.
        </p>
      </div>
    </div>
  );
}
