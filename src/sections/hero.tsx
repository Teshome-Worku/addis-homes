"use client";
import Image from 'next/image';

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="w-full bg-linear-to-b from-white to-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                    >
                        Find Your Dream Property Easily
                    </motion.h1>

                    <p className="mt-4 text-gray-600 text-lg">
                        Browse modern homes, apartments, and commercial spaces with ease.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-6 flex gap-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
                            Browse Properties
                        </button>

                        <button className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                            Contact Agent
                        </button>
                    </div>

                    {/* SEARCH BAR */}
                    <div className="mt-8 bg-white shadow-md rounded-xl p-4 grid md:grid-cols-4 gap-3">
                        <input
                            type="text"
                            placeholder="Location"
                            className="border rounded-lg px-3 py-2 text-sm outline-none"
                        />

                        <select className="border rounded-lg px-3 py-2 text-sm outline-none">
                            <option>Property Type</option>
                            <option>Apartment</option>
                            <option>Villa</option>
                            <option>Office</option>
                        </select>

                        <select className="border rounded-lg px-3 py-2 text-sm outline-none">
                            <option>Price Range</option>
                            <option>$10k - $50k</option>
                            <option>$50k - $100k</option>
                        </select>

                        <button className="bg-purple-600 text-white rounded-lg text-sm font-medium hover:opacity-90">
                            Search
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                        alt="House"
                        className="rounded-xl shadow-lg w-full object-cover"
                        width={600}
                        height={400}
                    />
                </motion.div>

            </div>
        </section>
    );
}