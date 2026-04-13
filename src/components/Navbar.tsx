"use client";
import Link from 'next/link';
export default function Navbar() {
    return (
        <header className="absolute top-0 left-0 w-full z-20">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" >
                    <h1 className="text-white font-bold text-lg">
                        AddisHomes
                    </h1>
                </Link>

                {/* LOGO */}


                {/* NAV LINKS */}
                <nav className="hidden md:flex gap-8 text-white text-sm">
                    <a href="#">Home</a>
                    <a href="#featured-properties">Properties</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>

                {/* CTA */}
                <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium">
                    Book Now
                </button>

            </div>
        </header>
    );
}