import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/components/icons";
import FadeInOnScroll from "@/components/fade-in-on-scroll";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-navy">
            Cothú Studio
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-navy opacity-80 max-w-2xl mx-auto">
            Non-clinical DBT skills through group art, collage, open studio time, 
            and guided art adventures.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 bg-navy text-cream px-8 py-4 text-lg font-medium hover:opacity-80 transition-opacity"
          >
            Explore Sessions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* What We Offer */}
      <FadeInOnScroll>
        <section className="py-20 px-4 border-t border-navy">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center text-navy">What We Offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {offerings.map((offering, index) => (
                <div key={index} className="space-y-4">
                  <div className="text-6xl">{offering.icon}</div>
                  <h3 className="text-2xl font-bold text-navy">{offering.title}</h3>
                  <p className="text-navy opacity-70">
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
        <section className="py-20 px-4 border-t border-navy bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-navy">Studio Moments</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-white border-2 border-navy relative overflow-hidden hover:opacity-75 transition-opacity"
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
                className="inline-flex items-center gap-2 text-navy hover:opacity-70 transition-opacity border-b-2 border-navy pb-1"
              >
                View Full Gallery
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* Programs Section */}
      <FadeInOnScroll>
        <section className="py-20 px-4 border-t border-navy">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center text-navy">Our Programs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Group DBT Art */}
              <div className="border-2 border-navy p-8 hover:bg-navy hover:text-cream transition-all group relative overflow-hidden">
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
                    className="inline-flex items-center gap-2 border-b-2 border-current pb-1 hover:opacity-70 transition-opacity"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Open Studio Time */}
              <div className="border-2 border-navy p-8 hover:bg-navy hover:text-cream transition-all group relative overflow-hidden">
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="text-5xl mb-4">🖼️</div>
                    <h3 className="text-3xl font-bold mb-4">Open Studio Time</h3>
                  </div>
                  <p className="text-lg mb-6 opacity-80">
                    Self-guided creative sessions where you can explore your own artistic 
                    practice at your own pace, with materials and optional guidance available.
                  </p>
                  <Link
                    href="/sessions"
                    className="inline-flex items-center gap-2 border-b-2 border-current pb-1 hover:opacity-70 transition-opacity"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* Why Choose Us */}
      <FadeInOnScroll>
        <section className="py-20 px-4 border-t border-navy bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center text-navy">Why Choose Cothú</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="space-y-3 group">
                  <h3 className="text-xl font-bold text-navy">{benefit.title}</h3>
                  <p className="text-navy opacity-70">{benefit.description}</p>
                  <div className="h-1 w-12 bg-navy group-hover:w-24 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* CTA */}
      <FadeInOnScroll>
        <section className="py-20 px-4 border-t border-navy">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-navy">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-navy opacity-70 mb-12">
              Join our community and discover the healing power of creative expression.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-navy text-cream px-10 py-4 text-lg font-medium hover:opacity-80 transition-opacity"
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
    description: "Collaborative sessions combining DBT skills with creative expression",
  },
  {
    icon: "🧵",
    title: "Collage Work",
    description: "Explore identity and emotions through mixed media techniques",
  },
  {
    icon: "🖼️",
    title: "Open Studio",
    description: "Self-directed creative time with professional materials available",
  },
  {
    icon: "✨",
    title: "Art Adventures",
    description: "Guided journeys through Irish mythology and storytelling",
  },
];

const benefits = [
  {
    title: "Community Support",
    description: "Join a supportive network of creative individuals on similar journeys",
  },
  {
    title: "Professional Guidance",
    description: "Learn from experienced facilitators trained in both art and DBT",
  },
  {
    title: "No Experience Needed",
    description: "All skill levels welcome—focus is on process, not perfection",
  },
  {
    title: "Cultural Connection",
    description: "Explore Irish heritage through art and mythology",
  },
  {
    title: "Flexible Options",
    description: "Group, individual, and open studio formats to fit your needs",
  },
  {
    title: "Real Skills Training",
    description: "Learn practical DBT skills applied through creative practice",
  },
];
