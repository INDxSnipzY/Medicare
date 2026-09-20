import { Disease } from "@/types/disease";

export const diseases: Disease[] = [
  {
    slug: "diabetes-type-2",
    id: "diabetes-type-2",
    related: [],
    references: [],

    name: "Type 2 Diabetes",

    category: "Endocrine",

    image: "/diseases/diabetes.webp",

    overview:
      "Type 2 diabetes is a chronic condition that affects how the body processes blood sugar (glucose). It develops when the body becomes resistant to insulin or does not produce enough insulin.",

    symptoms: [
      "Frequent urination",
      "Increased thirst",
      "Extreme hunger",
      "Unexplained weight loss",
      "Blurred vision",
      "Fatigue",
      "Slow healing wounds",
      "Frequent infections",
    ],

    causes: [
      "Insulin resistance",
      "Genetics",
      "Obesity",
      "Sedentary lifestyle",
    ],

    riskFactors: [
      "Overweight or obesity",
      "Age over 45 years",
      "Family history",
      "High blood pressure",
      "Physical inactivity",
      "Prediabetes",
    ],

    diagnosis: [
      "HbA1c Test",
      "Fasting Blood Sugar",
      "Random Blood Sugar",
      "Oral Glucose Tolerance Test",
    ],

    treatment: [
      "Lifestyle modification",
      "Healthy diet",
      "Regular exercise",
      "Blood sugar monitoring",
      "Metformin",
      "Insulin therapy (if required)",
    ],

    prevention: [
      "Maintain healthy weight",
      "Exercise regularly",
      "Balanced diet",
      "Avoid sugary drinks",
      "Routine health checkups",
    ],

    complications: [
      "Heart disease",
      "Stroke",
      "Kidney disease",
      "Nerve damage",
      "Vision loss",
      "Foot ulcers",
    ],

    emergencySigns: [
      "Difficulty breathing",
      "Loss of consciousness",
      "Severe dehydration",
      "Chest pain",
      "Persistent vomiting",
    ],

    faqs: [
      {
        question: "Can Type 2 Diabetes be cured?",
        answer:
          "There is currently no permanent cure, but it can often be effectively managed through healthy lifestyle changes, medications, and regular monitoring.",
      },
      {
        question: "Can I eat sweets?",
        answer:
          "Occasional sweets may be included in moderation, but it's important to follow your healthcare provider's dietary advice and monitor blood sugar levels.",
      },
      {
        question: "Is exercise important?",
        answer:
          "Yes. Regular physical activity helps improve insulin sensitivity, supports weight management, and contributes to better blood glucose control.",
      },
    ],
  },
];