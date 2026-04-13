import Hero from "@/sections/hero";
import PropertyCard from "@/components/PropertyCard";

const properties = [
  {
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    price: "$120,000",
    title: "Modern Family House",
    location: "Addis Ababa, Bole",
    beds: 3,
    baths: 2,
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: "$95,000",
    title: "Luxury Villa",
    location: "Addis Ababa, CMC",
    beds: 4,
    baths: 3,
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <PropertyCard properties={properties} />
    </main>
  );
}