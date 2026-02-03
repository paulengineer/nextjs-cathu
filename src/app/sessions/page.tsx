import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function SessionsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-navy">Programs</h1>
        <p className="text-xl text-navy opacity-80 mb-16">
          Creative sessions designed to nourish and support your wellbeing
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="border-2 border-navy p-8 bg-white hover:bg-navy hover:text-cream transition-all group"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-4">{program.title}</h3>
                <p className="text-lg mb-4">{program.subtitle}</p>
                <p className="text-base opacity-70 leading-relaxed">{program.description}</p>
              </div>

              <Link
                href="/booking"
                className="inline-flex items-center gap-2 border-b-2 border-current pb-1 hover:opacity-70 transition-opacity"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-navy text-cream rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Session Information</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="font-bold mb-2">Duration</h3>
              <p className="opacity-90">90 - 120 minutes per session</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Group Size</h3>
              <p className="opacity-90">4-8 participants maximum</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Price</h3>
              <p className="opacity-90">€40 per session</p>
            </div>
          </div>
          
          <div className="border-t border-cream opacity-50 pt-6">
            <h3 className="font-bold mb-4">Session Packages - Save More</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white text-navy p-4 rounded">
                <p className="text-2xl font-bold">4 Sessions</p>
                <p className="text-3xl font-bold my-2">€140</p>
                <p className="text-sm opacity-70">Save €20</p>
              </div>
              <div className="bg-white text-navy p-4 rounded">
                <p className="text-2xl font-bold">8 Sessions</p>
                <p className="text-3xl font-bold my-2">€260</p>
                <p className="text-sm opacity-70">Save €60</p>
              </div>
              <div className="bg-cream text-navy p-4 rounded">
                <p className="text-2xl font-bold">12 Sessions</p>
                <p className="text-3xl font-bold my-2">€360</p>
                <p className="text-sm opacity-70">Save €120</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-cream text-navy px-8 py-4 text-lg font-medium hover:opacity-90 transition-opacity rounded"
            >
              Book a Session
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const programs = [
  {
    title: "Venture to Create",
    subtitle: "An open studio session.",
    description: "The art materials are yours to express your creativity.",
  },
  {
    title: "Nourishing Skills",
    subtitle: "An arts-based DBT group.",
    description: "Develop practical dialectical behavior therapy skills through creative expression and group support.",
  },
  {
    title: "Gather",
    subtitle: "Collage making.",
    description: "Browse through images, meditatively cut, assemble and stick to make a collage.",
  },
  {
    title: "Harvest",
    subtitle: "A structured art activity.",
    description: "In this session an art activity is provided. You select your preferred colour palette and art materials to interpret the activity to your liking. The level of support in this venture is given at your discretion.",
  },
];
