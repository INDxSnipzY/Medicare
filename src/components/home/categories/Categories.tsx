import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

import CategoryCard from "./CategoryCard";
import { categories } from "./categories.data";

export default function Categories() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="Health Categories"
          title="Browse by Medical Specialty"
          description="Explore trusted medical information organized into specialized healthcare categories."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
