import Hero from "@/sections/hero";
import Navbar from "@/components/Navbar";
import FeaturedProperties from "@/sections/FeaturedProperties";
import WhyChooseUs from "@/sections/WhyChooseUs";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />

    </main>
  );
}