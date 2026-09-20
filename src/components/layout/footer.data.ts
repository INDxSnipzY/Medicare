import { FooterSection } from "./types";

export const footerSections: FooterSection[] = [
  {
    title: "Explore",
    links: [
      { label: "Diseases", href: "/diseases" },
      { label: "Symptoms", href: "/symptoms" },
      { label: "Medicines", href: "/medicines" },
      { label: "Doctors", href: "/doctors" },
      { label: "Hospitals", href: "/hospitals" },
    ],
  },
  {
    title: "Health Tools",
    links: [
      { label: "BMI Calculator", href: "/calculators/bmi" },
      { label: "Symptom Checker", href: "/symptom-checker" },
      { label: "Medicine Search", href: "/medicines" },
      { label: "Emergency Guide", href: "/emergency" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];
