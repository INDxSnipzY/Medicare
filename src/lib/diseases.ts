import { Disease } from "@/types/disease";

export const diseases: Disease[] = [
  {
    id: "1",
    slug: "diabetes",
    name: "Diabetes",
    category: "Endocrinology",
    image: "/diseases/diabetes.webp",
    overview:
      "Diabetes is a chronic condition that affects how your body turns food into energy and regulates blood sugar.",
    updatedAt: "2026-07-20",
    readTime: "10 min read",
    medicallyReviewed: true,
    
    symptoms: [
      "Frequent urination",
      "Increased thirst",
      "Fatigue",
      "Blurred vision",
    ],

    causes: ["Insulin resistance", "Genetics", "Lifestyle"],

    riskFactors: [],
    diagnosis: [],
    treatment: ["Healthy diet", "Exercise", "Medication", "Insulin therapy"],

    prevention: [],
    complications: [],
    emergencySigns: [],
    faqs: [],
    related: [],
    references: [],
  },
];

export function getDiseaseBySlug(slug: string) {
  return diseases.find((d) => d.slug === slug);
}
