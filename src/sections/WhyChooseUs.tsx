"use client";

import { ShieldCheck, Zap, DollarSign, MapPin } from 'lucide-react';

export default function WhyChooseUs() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Why Choose Addis Homes
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        We make finding your dream home simple, fast, and reliable.
                    </p>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* CARD 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <ShieldCheck className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Verified Properties
                        </h3>
                        <p className="text-gray-600 text-sm">
                            All listings are carefully verified to ensure quality and trust.
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                            <Zap className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Fast & Easy Process
                        </h3>
                        <p className="text-gray-600 text-sm">
                            We simplify your property search with a smooth and quick experience.
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                            <DollarSign className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Best Market Deals
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Get access to competitive pricing and exclusive offers.
                        </p>
                    </div>

                    {/* CARD 4 */}
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                            <MapPin className="w-6 h-6 text-orange-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Local Expertise
                        </h3>
                        <p className="text-gray-600 text-sm">
                            We understand the local market and help you make the right decision.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}