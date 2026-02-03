import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function ArtTherapyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-navy">Art Therapy</h1>
        <p className="text-xl text-navy opacity-80 mb-16">
          Individual sessions tailored to your personal journey
        </p>

        {/* What is Art Therapy */}
        <div className="mb-16 bg-white p-8 rounded-lg border-2 border-navy">
          <h2 className="text-3xl font-bold mb-6 text-navy">What is Art Therapy?</h2>
          <div className="space-y-4 text-navy">
            <p className="text-lg leading-relaxed">
              Art therapy is a form of expressive therapy that uses creative processes to improve mental, emotional, and physical well-being. At Cothú Studio, we integrate non-clinical DBT (Dialectical Behavior Therapy) skills with artistic expression to help you develop emotional regulation, mindfulness, distress tolerance, and interpersonal effectiveness.
            </p>
            <p className="text-lg leading-relaxed">
              No artistic experience is required. The focus is on the process of creation, not the final product. Through guided art-making, you&apos;ll explore your thoughts and feelings in a safe, supportive environment.
            </p>
          </div>
        </div>

        {/* Individual Session Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-navy">Individual Sessions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {sessions.map((session, index) => (
              <div
                key={index}
                className="border-2 border-navy p-8 bg-white hover:bg-navy hover:text-cream transition-all group"
              >
                <h3 className="text-2xl font-bold mb-4">{session.title}</h3>
                <p className="text-lg mb-6 opacity-80">{session.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center pb-2 border-b border-current opacity-50">
                    <span className="font-medium">Duration</span>
                    <span>{session.duration}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-current opacity-50">
                    <span className="font-medium">Format</span>
                    <span>{session.format}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Investment</span>
                    <span className="text-2xl font-bold">{session.price}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {session.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-bold">✓</span>
                      <span className="opacity-80">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 border-2 border-current font-medium hover:opacity-70 transition-opacity rounded"
                >
                  Book This Session
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* What to Expect */}
        <div className="mb-16 bg-navy text-cream p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Your First Session</h3>
              <ul className="space-y-2 opacity-90">
                <li>• Initial conversation about your goals and interests</li>
                <li>• Introduction to art materials and techniques</li>
                <li>• Gentle exploration through a guided art activity</li>
                <li>• Discussion and reflection on your experience</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Ongoing Sessions</h3>
              <ul className="space-y-2 opacity-90">
                <li>• Personalized art activities based on your needs</li>
                <li>• Integration of DBT skills and coping strategies</li>
                <li>• Supportive, non-judgmental guidance</li>
                <li>• Flexible pacing that honors your process</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Session Packages */}
        <div className="bg-white p-8 rounded-lg border-2 border-navy">
          <h2 className="text-3xl font-bold mb-4 text-navy">Session Packages</h2>
          <p className="text-lg text-navy mb-6 opacity-80">
            Commit to your wellbeing journey with discounted session packages
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border-2 ${
                  pkg.popular
                    ? "bg-navy text-cream border-navy"
                    : "bg-cream text-navy border-navy"
                }`}
              >
                {pkg.popular && (
                  <span className="inline-block px-3 py-1 bg-cream text-navy text-sm font-bold rounded mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.sessions}</h3>
                <p className="text-4xl font-bold mb-2">{pkg.price}</p>
                <p className="opacity-70">{pkg.savings}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-navy text-cream px-8 py-4 text-lg font-medium hover:opacity-90 transition-opacity rounded"
            >
              Schedule Your Session
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-navy">Have Questions?</h2>
          <p className="text-lg text-navy opacity-80 mb-6">
            Reach out to discuss which session format is right for you
          </p>
          <a
            href="mailto:hello@cothustudio.ie"
            className="inline-flex items-center gap-2 text-navy border-b-2 border-navy pb-1 hover:opacity-70 transition-opacity text-lg"
          >
            hello@cothustudio.ie
          </a>
        </div>
      </div>
    </div>
  );
}

const sessions = [
  {
    title: "60-Minute Session",
    description: "Perfect for focused work on specific goals or for those with limited time.",
    duration: "60 minutes",
    format: "One-on-one",
    price: "€70",
    includes: [
      "Personalized art therapy guidance",
      "All art materials provided",
      "Integration of DBT skills",
      "Supportive, confidential environment",
    ],
  },
  {
    title: "90-Minute Session",
    description: "Extended time for deeper exploration and more complex art projects.",
    duration: "90 minutes",
    format: "One-on-one",
    price: "€95",
    includes: [
      "Extended creative exploration time",
      "All premium art materials provided",
      "DBT skills integration and practice",
      "Personalized take-home strategies",
    ],
  },
];

const packages = [
  {
    sessions: "4 Sessions",
    price: "€250",
    savings: "Save €30",
    popular: false,
  },
  {
    sessions: "8 Sessions",
    price: "€480",
    savings: "Save €80",
    popular: true,
  },
  {
    sessions: "12 Sessions",
    price: "€690",
    savings: "Save €150",
    popular: false,
  },
];
