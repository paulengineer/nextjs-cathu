"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream border-b border-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-navy hover:opacity-70 transition-opacity">
            Cothú
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-navy hover:opacity-70 transition-opacity">
              Home
            </Link>
            <Link href="/about" className="text-navy hover:opacity-70 transition-opacity">
              About
            </Link>
            <Link href="/sessions" className="text-navy hover:opacity-70 transition-opacity">
              Sessions
            </Link>
            <Link href="/individual" className="text-navy hover:opacity-70 transition-opacity">
              Art Therapy
            </Link>
            <Link href="/irish-mythology" className="text-navy hover:opacity-70 transition-opacity">
              Irish Mythology
            </Link>
          </div>

          {/* Book Button */}
          <div>
            <Link
              href="/booking"
              className="bg-navy text-cream px-6 py-2 font-medium hover:opacity-80 transition-opacity"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden border-t border-navy">
        <div className="px-4 py-4 space-y-3">
          <Link href="/" className="block text-navy hover:opacity-70 transition-opacity">
            Home
          </Link>
          <Link href="/about" className="block text-navy hover:opacity-70 transition-opacity">
            About
          </Link>
          <Link href="/sessions" className="block text-navy hover:opacity-70 transition-opacity">
            Sessions
          </Link>
          <Link href="/individual" className="block text-navy hover:opacity-70 transition-opacity">
            Art Therapy
          </Link>
          <Link href="/irish-mythology" className="block text-navy hover:opacity-70 transition-opacity">
            Irish Mythology
          </Link>
        </div>
      </div>
    </nav>
  );
}
