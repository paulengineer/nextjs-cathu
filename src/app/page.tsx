import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/components/icons";
import FadeInOnScroll from "@/components/fade-in-on-scroll";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Cothú Studio
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Non-clinical DBT skills through group art, collage, open studio time, 
            and guided art adventures.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 text-lg font-medium hover:opacity-80 transition-opacity"
          >
            Explore Sessions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* What We Offer */}
      <FadeInOnScroll>
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
      </FadeInOnScroll>

      {/* Gallery Preview */}
      <FadeInOnScroll>
        <section className="py-20 px-4 border-t border-black dark:border-white bg-gray-50 dark:bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Studio Moments</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-white dark:bg-black border-2 border-black dark:border-white relative overflow-hidden hover:opacity-75 transition-opacity"
                >
                  <Image
                    src={`https://images.unsplash.com/photo-${1500000000000 + item}?w=400&h=400&fit=crop`}
                    alt={`Studio moment ${item}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-black dark:text-white hover:opacity-70 transition-opacity border-b-2 border-black dark:border-white pb-1"
              >
                View Full Gallery
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* Programs Section - Mint Green Accent */}
      <FadeInOnScroll>
        <section className="py-20 px-4 border-t border-black dark:border-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Our Programs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Group DBT Art */}
              <div className="border-2 border-black dark:border-white p-8 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group relative overflow-hidden">
                {/* Mint gradient accent background */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-mint rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="text-5xl mb-4">🎨</div>
                    <h3 className="text-3xl font-bold mb-4">Group DBT Art</h3>
                  </div>
                  <p className="text-lg mb-6 opacity-80">
                    Join guided sessions that blend mindfulness with creative expression, 
                    helping participants manage emotions, build skills, and connect through 
                    shared art projects.
                  </p>
                  <Link
                    href="/sessions"
                    className="inline-flex items-center gap-2 border-b-2 border-pastel-mint pb-1 hover:opacity-70 transition-opacity"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Open Studio Time */}
              <div className="border-2 border-black dark:border-white p-8 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group relative overflow-hidden">
                {/* Mint gradient accent background */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-mint rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="text-5xl mb-4">🖼️</div>
                    <h3 className="text-3xl font-bold mb-4">Open Studio Time</h3>
                  </div>
                  <p className="text-lg mb-6 opacity-80">
                    Art-therapy inspired support in a group setting with flexible scheduling 
                    and secure booking. Express yourself with professional materials and 
                    optional guidance in a welcoming community space.
                  </p>
                  <Link
                    href="/sessions"
                    className="inline-flex items-center gap-2 border-b-2 border-pastel-mint pb-1 hover:opacity-70 transition-opacity"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Additional Program Highlights */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              {programHighlights.map((highlight, index) => (
                <FadeInOnScroll key={index}>
                  <div className="flex gap-4">
                    <div className="text-4xl flex-shrink-0">{highlight.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{highlight.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* Why Choose Us - Pink Accents */}
      <FadeInOnScroll>
        <section className="py-20 px-4 border-t border-black dark:border-white bg-black dark:bg-white text-white dark:text-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Cothú</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3 group">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold">Secure & Private</h3>
                <p className="opacity-80">
                  Secure online booking, privacy-respecting policies, and friendly support 
                  to help you feel confident joining the studio.
                </p>
                <div className="h-1 w-12 bg-pastel-pink rounded-full group-hover:w-24 transition-all duration-300" />
              </div>
              <div className="space-y-3 group">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold">Community-Focused</h3>
                <p className="opacity-80">
                  Group-based healing in a supportive community. Open hours vary by season, 
                  with evening groups and weekend open studio times available by appointment.
                </p>
                <div className="h-1 w-12 bg-pastel-pink rounded-full group-hover:w-24 transition-all duration-300" />
              </div>
              <div className="space-y-3 group">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-2xl font-bold">Culturally Rooted</h3>
                <p className="opacity-80">
                  Integration of Irish mythology and cultural heritage with modern therapeutic 
                  practices for meaningful creative experiences.
                </p>
                <div className="h-1 w-12 bg-pastel-pink rounded-full group-hover:w-24 transition-all duration-300" />
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* CTA Section */}
      <FadeInOnScroll>
        <section className="py-20 px-4 border-t border-black dark:border-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Begin?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
              Join us for a transformative art therapy experience tailored to your needs
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 text-lg font-medium hover:opacity-80 transition-opacity"
            >
              Book a Session
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </FadeInOnScroll>
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

const programHighlights = [
  {
    icon: "🎯",
    title: "DBT Skill Integration",
    description: "Learn emotional regulation, mindfulness, and interpersonal effectiveness through creative expression",
  },
  {
    icon: "👥",
    title: "Small Group Settings",
    description: "Intimate group sizes ensure personalized attention and authentic community connection",
  },
  {
    icon: "📅",
    title: "Flexible Scheduling",
    description: "Evening and weekend sessions accommodate your lifestyle with secure online booking",
  },
  {
    icon: "🎓",
    title: "Experienced Facilitators",
    description: "Trained professionals guide your journey with expertise in art therapy and DBT principles",
  },
];

