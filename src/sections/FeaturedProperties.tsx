"use client";

import { useState } from 'react';
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";


export default function FeaturedProperties() {
    const [showAll, setShowAll] = useState(false);
    const displayedProperties = showAll ? properties : properties.slice(0, 6);
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">
                            Featured Properties
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Explore our handpicked properties for you
                        </p>
                    </div>

                    <button
                        className="text-blue-600 font-medium hover:underline cursor-pointer"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "Show Less ←" : "View All →"}
                    </button>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-3 gap-6">
                    {displayedProperties.map((property, index) => (
                        <PropertyCard key={index} {...property} />
                    ))}
                </div>

            </div>
        </section>
    );
}