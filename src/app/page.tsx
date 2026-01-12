import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Cothú Studio
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Non-clinical DBT skills through group art, collage, open studio time, 
            and guided art adventures.
          </p>
          <Link
            href="/sessions"
            className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 text-lg font-medium hover:opacity-80 transition-opacity"
          >
            Explore Sessions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 border-t border-black dark:border-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offering, index) => (
              <div key={index} className="space-y-4">
                <div className="text-6xl">{offering.icon}</div>
                <h3 className="text-2xl font-bold">{offering.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-black dark:border-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            Join us for a transformative art therapy experience
          </p>
          <Link
            href="https://cal.com"
            target="_blank"
            className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 text-lg font-medium hover:opacity-80 transition-opacity"
          >
            Book a Session
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

const offerings = [
  {
    icon: "🎨",
    title: "Group Art",
    description: "Collaborative art sessions in a supportive environment",
  },
  {
    icon: "✂️",
    title: "Collage",
    description: "Express yourself through mixed media and creative assemblage",
  },
  {
    icon: "🖼️",
    title: "Open Studio",
    description: "Personal creative time with access to professional materials",
  },
  {
    icon: "🗺️",
    title: "Art Adventures",
    description: "Guided creative journeys inspired by Irish mythology",
  },
];
