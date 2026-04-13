import Hero from "@/sections/hero";
import Navbar from "@/components/Navbar";
import FeaturedProperties from "@/sections/FeaturedProperties";
import HowItWorks from "@/sections/HowItWorks";
import WhyChooseUs from "@/sections/WhyChooseUs";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <HowItWorks />
      <WhyChooseUs />

    </main>
  );
}