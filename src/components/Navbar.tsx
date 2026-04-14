"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" >
                    <h1 className={`font-bold text-lg transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                        AddisHomes
                    </h1>
                </Link>

                {/* LOGO */}


                {/* NAV LINKS */}
                <nav className={`hidden md:flex gap-8 text-sm transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                    <a className="hover:opacity-80 transition" href="#">Home</a>
                    <a className="hover:opacity-80 transition" href="#featured-properties">Properties</a>
                    <a className="hover:opacity-80 transition" href="#">About</a>
                    <a className="hover:opacity-80 transition" href="#contact">Contact</a>
                </nav>

                {/* CTA */}
                <button className={`px-4 py-2 rounded-lg text-sm font-medium transition ${isScrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-black hover:opacity-90'}`}>
                    Book Now
                </button>

            </div>
        </header>
    );
}