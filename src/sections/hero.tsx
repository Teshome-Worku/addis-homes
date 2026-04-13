"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden">

            {/* BACKGROUND IMAGE */}
            <Image
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                alt="Luxury House"
                className="absolute inset-0 w-full h-full object-cover "
                width={1920}
                height={1080}
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">

                <div className="max-w-xl text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold leading-tight"
                    >
                        Enjoy Living <br />
                        <span className="text-blue-400">with Best View</span>
                    </motion.h1>

                    <p className="mt-4 text-gray-200">
                        Discover modern homes and real estate deals before they hit the market.
                    </p>

                    <motion.button
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mt-10 bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                    >
                        Explore Properties
                    </motion.button>
                </div>

            </div>
        </section>
    );
}