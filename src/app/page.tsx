import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import { MovingCards } from "./components/MovingCards";
import FeaturedSection from "./components/FeaturedSection";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUs />
      <MovingCards />
    </main>

  );
}


