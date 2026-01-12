"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-black dark:border-white bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Cothú</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Art therapy studio offering non-clinical DBT skills through group art, collage, open studio time, and guided art adventures.
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Opening Hours</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>
                <span className="font-medium text-black dark:text-white">Monday - Friday:</span>
                <br />
                4:00 PM - 8:00 PM
              </p>
              <p>
                <span className="font-medium text-black dark:text-white">Saturday:</span>
                <br />
                10:00 AM - 6:00 PM
              </p>
              <p>
                <span className="font-medium text-black dark:text-white">Sunday:</span>
                <br />
                By Appointment
              </p>
              <p className="text-xs italic pt-2">
                Hours vary by season. Evening groups and weekend open studio times available by appointment.
              </p>
            </div>
          </div>

          {/* Location & Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Location</h3>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-4">
              <div>
                <p className="font-medium text-black dark:text-white">Galway, Ireland</p>
                <p className="text-xs">West of Ireland</p>
              </div>
              <div>
                <p className="font-medium text-black dark:text-white mb-2">Contact</p>
                <a
                  href="mailto:hello@cothustudio.ie"
                  className="text-xs hover:opacity-70 transition-opacity"
                >
                  hello@cothustudio.ie
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/about" className="hover:opacity-70 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sessions" className="hover:opacity-70 transition-opacity">
                  Sessions
                </Link>
              </li>
              <li>
                <Link href="/individual" className="hover:opacity-70 transition-opacity">
                  Individual
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:opacity-70 transition-opacity">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/irish-mythology" className="hover:opacity-70 transition-opacity">
                  Mythology
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust & Policy Section */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-8 mb-8">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            🔒 Secure online booking, privacy-respecting policies, and friendly support to help you feel confident joining the studio. Your wellbeing and confidentiality are our priorities.
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 dark:text-gray-400">
            <p>&copy; 2026 Cothú Studio. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:opacity-70 transition-opacity">
                Privacy Policy
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
