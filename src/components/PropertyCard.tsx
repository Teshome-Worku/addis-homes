"use client";
import Image from 'next/image'

type Property = {
    image: string;
    price: string;
    title: string;
    location: string;
    beds: number;
    baths: number;
};

type PropertyCardProps = {
    properties: Property[];
};

export default function PropertyCard({ properties }: PropertyCardProps) {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Featured Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map((property, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer">
                            {/* IMAGE */}
                            <div className="relative">
                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    width={208}
                                    height={208}
                                    className="w-full h-52 object-cover"
                                />
                                {/* PRICE BADGE */}
                                <span className="absolute top-3 left-3 bg-blue-600 text-white text-sm px-3 py-1 rounded-md font-medium">
                                    {property.price}
                                </span>
                            </div>
                            {/* CONTENT */}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {property.title}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    {property.location}
                                </p>
                                {/* FEATURES */}
                                <div className="flex justify-between text-sm text-gray-600 mt-3">
                                    <span>🛏 {property.beds} Beds</span>
                                    <span>🛁 {property.baths} Baths</span>
                                </div>
                                {/* BUTTON */}
                                <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:opacity-90 transition">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}