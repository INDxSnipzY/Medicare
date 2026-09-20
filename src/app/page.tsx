import AppShell from "@/components/layout/AppShell";
import AnnouncementBanner from "@/components/layout/AnnouncementBanner";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/hero/Hero";
import Footer from "@/components/layout/Footer";
import Categories from "@/components/home/categories";
import TrustedSources from "@/components/home/trusted";
import Diseases from "@/components/home/diseases";
import Emergency from "@/components/home/emergency";

export default function HomePage() {
  return (
    <AppShell>
      <AnnouncementBanner />
      <Navbar />

      <main>
        <Hero />
        <Categories />
        <TrustedSources />
        <Diseases />
        <Emergency />
      </main>

      <Footer />
    </AppShell>
  );
}
