
import DiseaseList from "@/components/disease/DiseaseList";
import { diseases } from "@/data/diseases";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export default function DiseasesPage() {
  return (
    <main className="pb-16">
      <Navbar />
      <section className="border-b bg-muted/30 py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Diseases & Conditions
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Browse information about diseases, symptoms,
            diagnosis, treatment, prevention, and warning signs.
          </p>
        </div>
       
      </section>
      
      <DiseaseList diseases={diseases} />
      <Footer />
    </main>
  );
}