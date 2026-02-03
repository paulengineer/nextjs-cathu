"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream border-t-2 border-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-cream">Cothú</h3>
            <p className="text-cream text-sm leading-relaxed opacity-90">
              Art therapy studio offering non-clinical DBT skills through group art, collage, open studio time, and guided art adventures.
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cream">Opening Hours</h3>
            <div className="space-y-2 text-sm text-cream opacity-90">
              <p>
                <span className="font-medium">Monday - Friday:</span>
                <br />
                4:00 PM - 8:00 PM
              </p>
              <p>
                <span className="font-medium">Saturday:</span>
                <br />
                10:00 AM - 6:00 PM
              </p>
              <p>
                <span className="font-medium">Sunday:</span>
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
            <h3 className="text-lg font-bold mb-4 text-cream">Location</h3>
            <div className="text-sm text-cream opacity-90 space-y-4">
              <div className="border-l-4 border-cream pl-4">
                <p className="font-medium">Galway, Ireland</p>
              </div>
              <div>
                <p className="font-medium mb-2">Contact</p>
                <a
                  href="mailto:hello@cothustudio.ie"
                  className="text-cream hover:underline text-xs"
                >
                  hello@cothustudio.ie
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-cream">Quick Links</h3>
            <ul className="space-y-2 text-sm text-cream opacity-90">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sessions" className="hover:underline">
                  Sessions
                </Link>
              </li>
              <li>
                <Link href="/individual" className="hover:underline">
                  Art Therapy
                </Link>
              </li>
              <li>
                <Link href="/irish-mythology" className="hover:underline">
                  Mythology
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust & Policy Section */}
        <div className="border-t border-cream opacity-50 pt-8 mb-8">
          <p className="text-sm text-cream opacity-90 leading-relaxed">
            🔒 Secure online booking, privacy-respecting policies, and friendly support to help you feel confident joining the studio. Your wellbeing and confidentiality are our priorities.
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream opacity-50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-cream opacity-75">
            <p>&copy; 2026 Cothú Studio. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
