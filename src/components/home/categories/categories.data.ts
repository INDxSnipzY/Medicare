import {
  Brain,
  HeartPulse,
  Activity,
  Pill,
  Bone,
  Baby,
  Eye,
  Stethoscope,
} from "lucide-react";

import { Category } from "./types";

export const categories: Category[] = [
  {
    id: "cardiology",
    title: "Heart Health",
    description: "Heart diseases and cardiovascular care",
    icon: HeartPulse,
    diseases: 420,
    href: "/diseases/heart",
  },
  {
    id: "neurology",
    title: "Brain & Nerves",
    description: "Neurological disorders and brain health",
    icon: Brain,
    diseases: 285,
    href: "/diseases/brain",
  },
  {
    id: "general",
    title: "General Medicine",
    description: "Common illnesses and infections",
    icon: Stethoscope,
    diseases: 610,
    href: "/diseases/general",
  },
  {
    id: "orthopedic",
    title: "Bones & Joints",
    description: "Bone and joint conditions",
    icon: Bone,
    diseases: 190,
    href: "/diseases/bones",
  },
  {
    id: "pediatrics",
    title: "Child Health",
    description: "Healthcare for infants and children",
    icon: Baby,
    diseases: 170,
    href: "/diseases/children",
  },
  {
    id: "ophthalmology",
    title: "Eye Care",
    description: "Vision and eye-related conditions",
    icon: Eye,
    diseases: 140,
    href: "/diseases/eyes",
  },
  {
    id: "fitness",
    title: "Fitness",
    description: "Exercise and physical wellness",
    icon: Activity,
    diseases: 120,
    href: "/fitness",
  },
  {
    id: "medication",
    title: "Medicines",
    description: "Drug information and safety",
    icon: Pill,
    diseases: 15000,
    href: "/medicines",
  },
];
