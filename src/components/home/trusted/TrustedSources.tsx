import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

import SourceCard from "./SourceCard";
import { trustedSources } from "./trusted.data";

export default function TrustedSources() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="Trusted References"
          title="Evidence-Based Medical Information"
          description="Our educational content is prepared using trusted public health resources and established medical references."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trustedSources.map((source) => (
            <SourceCard key={source.id} source={source} />
          ))}
        </div>
      </Container>
    </section>
  );
}
