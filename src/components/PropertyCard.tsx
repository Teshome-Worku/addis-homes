"use client";
import Image from 'next/image'
import { Property } from '@/data/properties';

type PropertyCardProps = Property;

export default function PropertyCard({
    image,
    price,
    title,
    location,
    beds,
    baths,
}: PropertyCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer">

            {/* IMAGE */}
            <div className="relative">
                <Image
                    src={image}
                    alt={title}
                    width={208}
                    height={208}
                    className="w-full h-52 object-cover"
                />

                {/* PRICE BADGE */}
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-sm px-3 py-1 rounded-md font-medium">
                    {price}
                </span>
            </div>

            {/* CONTENT */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                    {title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                    {location}
                </p>

                {/* FEATURES */}
                <div className="flex justify-between text-sm text-gray-600 mt-3">
                    <span>🛏 {beds} Beds</span>
                    <span>🛁 {baths} Baths</span>
                </div>

                {/* BUTTON */}
                <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:opacity-90 transition">
                    View Details
                </button>
            </div>
        </div>
    );
}