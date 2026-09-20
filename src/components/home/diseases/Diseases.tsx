"use client";

import { useMemo, useState } from "react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

import DiseaseCard from "./DiseaseCard";
import DiseaseFilters from "./DiseaseFilters";
import { diseases } from "./diseases.data";

export default function Diseases() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return diseases;

    return diseases.filter((disease) => disease.category === filter);
  }, [filter]);

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="Featured Diseases"
          title="Explore Common Health Conditions"
          description="Learn about symptoms, causes, diagnosis, treatment and prevention from trusted medical references."
        />

        <DiseaseFilters active={filter} onChange={setFilter} />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filtered.map((disease) => (
            <DiseaseCard key={disease.id} disease={disease} />
          ))}
        </div>
      </Container>
    </section>
  );
}
