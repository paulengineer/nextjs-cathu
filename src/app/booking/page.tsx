import { Suspense } from "react";
import ArtTherapyBooking from "@/components/art-therapy-booking";

export default function BookingPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-cream">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pastel-pink to-pastel-blue bg-clip-text text-transparent">
            Book Your Session
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Reserve your space in one of our art therapy sessions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {sessionTypes.map((type, index) => (
            <div
              key={index}
              className="border-2 border-pastel-pink p-6 rounded-lg hover:shadow-glow-pink transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-pink rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="text-3xl mb-2">{type.icon}</div>
                <h3 className="font-bold text-lg mb-2">{type.name}</h3>
                <p className="text-sm opacity-70">{type.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-pastel-blue to-blue-50 dark:from-pastel-blue dark:to-blue-900 p-8 rounded-lg mb-8 border border-pastel-blue">
          <div className="text-black dark:text-white">
            <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="text-pastel-pink font-bold">→</span>
                <span>Choose your session type and preferred time</span>
              </li>
              <li className="flex gap-3">
                <span className="text-pastel-pink font-bold">→</span>
                <span>Share your contact information and any relevant details</span>
              </li>
              <li className="flex gap-3">
                <span className="text-pastel-pink font-bold">→</span>
                <span>Receive confirmation email with session details</span>
              </li>
              <li className="flex gap-3">
                <span className="text-pastel-pink font-bold">→</span>
                <span>Join us for a transformative creative experience</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-2 border-pastel-mint rounded-lg p-8 mb-12 bg-gradient-mint">
          <Suspense fallback={<div className="h-96 bg-gray-200 rounded-lg" />}>
            <ArtTherapyBooking />
          </Suspense>
        </div>

        <div className="border-t-2 border-pastel-pink pt-12">
          <h2 className="text-2xl font-bold mb-6">Questions?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-pastel-pink pl-6">
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <a
                href="mailto:hello@cothustudio.ie"
                className="text-pastel-pink hover:underline text-lg"
              >
                hello@cothustudio.ie
              </a>
            </div>
            <div className="border-l-4 border-pastel-blue pl-6">
              <h3 className="font-bold text-lg mb-2">Visit Us</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Waterford, Ireland<br />
                <span className="text-sm">Available by appointment</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gradient-pink rounded-lg border border-pastel-pink text-black">
          <p className="italic text-center">
            &quot;Art is the most honest form of self-expression. We&apos;re honored to be part of your journey.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}

const sessionTypes = [
  {
    icon: "👥",
    name: "Group Sessions",
    description: "Explore art with others in a supportive community"
  },
  {
    icon: "🎨",
    name: "Individual Sessions",
    description: "One-on-one guidance tailored to your needs"
  },
  {
    icon: "✨",
    name: "Art Adventures",
    description: "Guided creative journeys through storytelling"
  }
];
