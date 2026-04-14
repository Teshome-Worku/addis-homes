import Link from "next/link";

export default function CTA() {
    return (
        <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white" id="contact">
            <div className="max-w-5xl mx-auto px-6 py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Ready to Find Your Dream Home?
                </h2>
                <p className="mt-4 text-white/90 max-w-2xl mx-auto">
                    Contact us today and let our experts help you find the perfect property.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="mailto:info@addishomes.com"
                        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
                    >
                        Contact Us
                    </Link>
                    <Link
                        href="/properties"
                        className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition"
                    >
                        Browse Properties
                    </Link>
                </div>
            </div>
        </section>
    );
}