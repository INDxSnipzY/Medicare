export interface Disease {
  id: string;
  slug: string;
  name: string;
  image: string;
  category: string;
  overview: string;
  symptoms: string[];
  causes: string[];
  riskFactors: string[];
  diagnosis: string[];
  treatment: string[];
  prevention: string[];
  complications: string[];
  emergencySigns: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  related: string[];
  references: {
    title: string;
    url: string;
  }[];
}
