import Image from "next/image";
import Link from "next/link";

export default function AboutAddisHomes() {
    return (
        <section className="bg-white" id="about">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <Image
                            src="https://images.unsplash.com/photo-1460317442991-0ec209397118"
                            alt="Modern residential building in Addis Ababa"
                            width={1200}
                            height={900}
                            className="w-full h-90 md:h-110 object-cover rounded-xl shadow-sm"
                        />
                    </div>

                    <div className="space-y-4">
                        <p className="text-blue-600 font-medium text-sm">About Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            We Help You Find the Perfect Home in Addis Ababa
                        </h2>
                        <p className="text-gray-600">
                            Addis Homes is dedicated to connecting you with verified properties that
                            match your lifestyle and budget. We simplify the process of finding,
                            choosing, and securing your dream home.
                        </p>

                        <ul className="space-y-3 text-gray-700">
                            <li>Verified property listings</li>
                            <li>Trusted by local clients</li>
                            <li>Easy and fast process</li>
                        </ul>

                        <Link
                            href="/#contact"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}