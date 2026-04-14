import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="space-y-3">
                        <h3 className="text-white text-xl font-semibold">Addis Homes</h3>
                        <p>Helping you find your dream home in Addis Ababa.</p>
                        <p className="text-sm text-gray-400">
                            Trusted local experts guiding buyers and families to the right property.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-white text-lg font-semibold">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="hover:text-white transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/properties" className="hover:text-white transition">
                                    Properties
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="hover:text-white transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-white text-lg font-semibold">Contact</h4>
                        <p>Phone: +251 923 124 355</p>
                        <p>
                            Email:{" "}
                            <a href="mailto:info@addishomes.com" className="hover:text-white transition">
                                info@addishomes.com
                            </a>
                        </p>
                        <p>Location: Addis Ababa, Ethiopia</p>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-400">
                    © 2026 Addis Homes. All rights reserved.
                </div>
            </div>
        </footer>
    );
}