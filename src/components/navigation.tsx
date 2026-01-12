"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "./icons";

export default function Navigation() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-black dark:border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold hover:opacity-70 transition-opacity">
            Cothú
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:opacity-70 transition-opacity">
              Home
            </Link>
            <Link href="/about" className="hover:opacity-70 transition-opacity">
              About
            </Link>
            <Link href="/sessions" className="hover:opacity-70 transition-opacity">
              Sessions
            </Link>
            <Link href="/individual" className="hover:opacity-70 transition-opacity">
              Individual
            </Link>
            <Link href="/gallery" className="hover:opacity-70 transition-opacity">
              Gallery
            </Link>
            <Link href="/irish-mythology" className="hover:opacity-70 transition-opacity">
              Irish Mythology
            </Link>
          </div>

          {/* Right Side: Theme Toggle + Book Button */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 hover:opacity-70 transition-opacity"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            )}

            {/* Book Button */}
            <Link
              href="https://cal.com"
              target="_blank"
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 font-medium hover:opacity-80 transition-opacity"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden border-t border-black dark:border-white">
        <div className="px-4 py-4 space-y-3">
          <Link href="/" className="block hover:opacity-70 transition-opacity">
            Home
          </Link>
          <Link href="/about" className="block hover:opacity-70 transition-opacity">
            About
          </Link>
          <Link href="/sessions" className="block hover:opacity-70 transition-opacity">
            Sessions
          </Link>
          <Link href="/individual" className="block hover:opacity-70 transition-opacity">
            Individual
          </Link>
          <Link href="/gallery" className="block hover:opacity-70 transition-opacity">
            Gallery
          </Link>
          <Link href="/irish-mythology" className="block hover:opacity-70 transition-opacity">
            Irish Mythology
          </Link>
        </div>
      </div>
    </nav>
  );
}
