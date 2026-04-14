import Link from 'next/link';
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import Navbar from '@/components/Navbar';

export default function PropertiesPage() {
    return (
        < >
            <Navbar />
            <main className="min-h-screen bg-gray-100 pt-24">
                <div className="max-w-7xl mx-auto px-6 py-8">

                    {/* HEADER */}
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900">
                                All Properties
                            </h1>
                            <p className="text-gray-600 mt-2">
                                Browse our complete collection of available properties
                            </p>
                        </div>

                        <Link href="/">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                                ← Back to Home
                            </button>
                        </Link>
                    </div>

                    {/* GRID */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {properties.map((property, index) => (
                            <PropertyCard key={index} {...property} />
                        ))}
                    </div>

                </div>
            </main>
        </>
    );
}