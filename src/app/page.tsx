import Hero from "@/sections/hero";
import Navbar from "@/components/Navbar";
import FeaturedProperties from "@/sections/FeaturedProperties";
import HowItWorks from "@/sections/HowItWorks";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Testimonials from "@/sections/Testimonials";
import CTA from "@/sections/CTA";
import Footer from "@/sections/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />

    </main>
  );
}