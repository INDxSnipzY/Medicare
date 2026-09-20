import { notFound } from "next/navigation";

import Breadcrumb from "@/components/disease/Breadcrumb";
import DiseaseHero from "@/components/disease/DiseaseHero";
import DiseaseOverview from "@/components/disease/DiseaseOverview";
import DiseaseSymptoms from "@/components/disease/DiseaseSymptoms";
import DiseaseCauses from "@/components/disease/DiseaseCauses";
import DiseaseRiskFactors from "@/components/disease/DiseaseRiskFactors";
import DiseaseDiagnosis from "@/components/disease/DiseaseDiagnosis";
import DiseaseTreatment from "@/components/disease/DiseaseTreatment";
import DiseasePrevention from "@/components/disease/DiseasePrevention";
import DiseaseComplications from "@/components/disease/DiseaseComplications";
import DiseaseEmergency from "@/components/disease/DiseaseEmergency";
import DiseaseFAQ from "@/components/disease/DiseaseFAQ";
import RelatedDiseases from "@/components/disease/RelatedDiseases";

import { diseases } from "@/data/diseases";

interface DiseasePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DiseasePage({
  params,
}: DiseasePageProps) {
  const { slug } = await params;

  const disease = diseases.find(
    (item) => item.slug === slug
  );

  if (!disease) {
    notFound();
  }

  const relatedDiseases = diseases
    .filter(
      (item) =>
        item.slug !== disease.slug &&
        item.category === disease.category
    )
    .slice(0, 6);

  return (
    <main className="pb-16">
      <Breadcrumb disease={disease} />

      <DiseaseHero disease={disease} />

      <DiseaseOverview disease={disease} />

      <DiseaseSymptoms disease={disease} />

      <DiseaseCauses disease={disease} />

      <DiseaseRiskFactors disease={disease} />

      <DiseaseDiagnosis disease={disease} />

      <DiseaseTreatment disease={disease} />

      <DiseasePrevention disease={disease} />

      <DiseaseComplications disease={disease} />

      <DiseaseEmergency disease={disease} />

      <DiseaseFAQ disease={disease} />

      <RelatedDiseases
        diseases={relatedDiseases}
      />
    </main>
  );
}