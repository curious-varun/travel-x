import { VisualSection } from "@/components/visual-section";
import { FreatureSection } from "@/components/freature-section";
import { HeroSection } from "@/components/hero-section";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
export default function HomePage() {
  return (
    <div className="w-full max-w-[2000px] mx-auto">
      <NavBar />
      <HeroSection />
      <FreatureSection />
      <VisualSection />
      <Footer />
    </div>


  );
}
