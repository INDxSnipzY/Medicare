import Container from "@/components/common/Container";

import { Disease } from "@/types/disease";

import Breadcrumb from "./Breadcrumb";
import DiseaseHero from "./DiseaseHero";
import DiseaseOverview from "./DiseaseOverview";
import DiseaseSymptoms from "./DiseaseSymptoms";
import DiseaseCauses from "./DiseaseCauses";
import DiseaseRiskFactors from "./DiseaseRiskFactors";
import DiseaseDiagnosis from "./DiseaseDiagnosis";
import DiseaseTreatment from "./DiseaseTreatment";
import DiseasePrevention from "./DiseasePrevention";
import DiseaseComplications from "./DiseaseComplications";
import DiseaseEmergency from "./DiseaseEmergency";
import DiseaseFAQ from "./DiseaseFAQ";
import DiseaseSidebar from "./DiseaseSidebar";
import RelatedDiseases from "./RelatedDiseases";

interface DiseaseArticleProps {
  disease: Disease;
}

export default function DiseaseArticle({ disease }: DiseaseArticleProps) {
  return (
    <>
      <Container>
        <Breadcrumb disease={disease} />
      </Container>

      <DiseaseHero disease={disease} />

      <Container>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_320px]">
          <article className="space-y-16">
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
          </article>

          <aside>
            <DiseaseSidebar disease={disease} />
          </aside>
        </div>
      </Container>
    </>
  );
}
