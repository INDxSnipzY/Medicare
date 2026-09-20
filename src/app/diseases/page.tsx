import DiseaseList from "@/components/disease/DiseaseList";
import DiseaseSearch from "@/components/disease/DiseaseSearch";
import DiseaseCategories from "@/components/disease/DiseaseCategories";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


import { diseases } from "@/data/diseases";

export default function DiseasesPage() {
  return (
    <main className="pb-16">
      
      <section className="border-b bg-muted/30 py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Diseases & Conditions
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Browse comprehensive information about diseases, symptoms,
            diagnosis, treatment, prevention, and emergency warning signs.
          </p>

          <div className="mt-8">
            <DiseaseSearch />
          </div>
        </div>
      </section>

      <DiseaseCategories />

      <DiseaseList diseases={diseases} />
    </main>
  );
}