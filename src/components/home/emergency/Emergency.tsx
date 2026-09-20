import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

import EmergencyCard from "./EmergencyCard";
import { emergencyItems } from "./emergency.data";

export default function Emergency() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="Emergency & First Aid"
          title="Be Prepared for Medical Emergencies"
          description="Quick access to essential first-aid guidance and emergency information."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {emergencyItems.map((item) => (
            <EmergencyCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
