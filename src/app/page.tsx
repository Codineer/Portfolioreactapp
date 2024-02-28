import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import { MovingCards } from "./components/MovingCards";
import FeaturedSection from "./components/FeaturedSection";
import UpcomingWebinars from "./components/UpcomingWebinars";
import { Developers } from "./components/Developers";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUs />
      <MovingCards />
      <UpcomingWebinars />
      <Developers />
      <Footer />
    </main>

  );
}


