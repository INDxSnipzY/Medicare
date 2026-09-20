import Container from "@/components/common/Container";
import HeroContent from "./HeroContent";
import FloatingDashboard from "./FloatingDashboard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
          <HeroContent />
          <FloatingDashboard />
        </div>
      </Container>
    </section>
  );
}
