import { Disease } from "./types";

export const diseases: Disease[] = [
  {
    id: "diabetes",
    name: "Diabetes",
    category: "Endocrinology",
    description:
      "A chronic condition that affects how the body processes blood sugar.",
    symptoms: ["Increased thirst", "Frequent urination", "Fatigue"],
    image: "/diseases/diabetes.jpg",
    href: "/diseases/diabetes",
    featured: true,
  },
  {
    id: "hypertension",
    name: "Hypertension",
    category: "Cardiology",
    description:
      "Persistently elevated blood pressure increasing cardiovascular risk.",
    symptoms: ["Headache", "Dizziness", "Blurred vision"],
    image: "/diseases/hypertension.jpg",
    href: "/diseases/hypertension",
    featured: true,
  },
  {
    id: "asthma",
    name: "Asthma",
    category: "Respiratory",
    description: "Inflammation and narrowing of the airways.",
    symptoms: ["Wheezing", "Cough", "Shortness of breath"],
    image: "/diseases/asthma.jpg",
    href: "/diseases/asthma",
    featured: true,
  },
  {
    id: "migraine",
    name: "Migraine",
    category: "Neurology",
    description: "A neurological disorder causing severe headaches.",
    symptoms: ["Headache", "Nausea", "Light sensitivity"],
    image: "/diseases/migraine.jpg",
    href: "/diseases/migraine",
    featured: true,
  },
];
