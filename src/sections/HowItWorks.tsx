"use client";

import { Home, PhoneCall, Search } from "lucide-react";

export default function HowItWorks() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
                    <p className="text-gray-600 mt-3">
                        Find your dream home in just a few simple steps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                        <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold flex items-center justify-center mx-auto">
                            01
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mt-4">
                            <Search className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-lg text-gray-900 mt-5">Search Properties</h3>
                        <p className="text-gray-600 text-sm mt-2">
                            Browse through a wide range of verified properties based on your needs.
                        </p>
                    </div>

                    <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                        <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold flex items-center justify-center mx-auto">
                            02
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mx-auto mt-4">
                            <Home className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="font-semibold text-lg text-gray-900 mt-5">Choose Your Home</h3>
                        <p className="text-gray-600 text-sm mt-2">
                            Compare options and select the property that fits your lifestyle.
                        </p>
                    </div>

                    <div className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                        <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold flex items-center justify-center mx-auto">
                            03
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mt-4">
                            <PhoneCall className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-lg text-gray-900 mt-5">Contact & Book</h3>
                        <p className="text-gray-600 text-sm mt-2">
                            Reach out to us and schedule a visit or secure your property quickly.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}