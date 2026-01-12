import Link from "next/link";

export default function IndividualPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Individual Sessions</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-16">
          Personalized one-on-one art therapy experiences
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Private Art Therapy</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Work one-on-one with our experienced facilitators to explore your 
              personal creative journey. Individual sessions offer personalized 
              attention and the opportunity to work at your own pace.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-2 border-pastel-pink p-6 hover-glow-pink hover:border-pastel-pink transition-all group relative overflow-hidden rounded-lg">
                {/* Soft pink gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">60-Minute Session</h3>
                  <p className="text-4xl font-bold mb-4 text-pastel-pink">€70</p>
                  <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-400">
                    <li className="flex gap-2">
                      <span className="text-pastel-pink">✓</span>
                      <span>Personalized guidance</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-pastel-pink">✓</span>
                      <span>All materials included</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-pastel-pink">✓</span>
                      <span>DBT skill integration</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-pastel-pink">✓</span>
                      <span>Flexible scheduling</span>
                    </li>
                  </ul>
                  <Link
                    href="/booking"
                    className="block w-full text-center py-3 bg-gradient-pink text-black font-medium hover:shadow-glow-pink transition-all rounded"
                  >
                    Book 60-Min Session
                  </Link>
                </div>
              </div>

              <div className="border-2 border-pastel-pink p-6 hover-glow-pink hover:border-pastel-pink transition-all group relative overflow-hidden rounded-lg">
                {/* Soft pink gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">90-Minute Session</h3>
                  <p className="text-4xl font-bold mb-4 text-pastel-pink">€95</p>
                  <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-400">
                    <li className="flex gap-2">
                      <span className="text-pastel-pink">✓</span>
                      <span>Extended creative time</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-pastel-pink">✓</span>
                      <span>Deep exploration</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-pastel-pink">✓</span>
                      <span>All materials included</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-pastel-pink">✓</span>
                      <span>Most popular option</span>
                    </li>
                  </ul>
                  <Link
                    href="/booking"
                    className="block w-full text-center py-3 bg-gradient-pink text-black font-medium hover:shadow-glow-pink transition-all rounded"
                  >
                    Book 90-Min Session
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-pastel-pink pt-12">
            <h2 className="text-3xl font-bold mb-6">Individual Session Packages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border-2 border-pastel-pink rounded-lg hover:shadow-glow-pink transition-shadow">
                <h3 className="text-xl font-bold mb-2">4 Sessions</h3>
                <p className="text-3xl font-bold mb-2 text-pastel-pink">€260</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">60-minute sessions</p>
                <p className="text-sm font-medium mt-2">Save €20</p>
              </div>
              <div className="p-6 border-2 border-pastel-pink rounded-lg hover:shadow-glow-pink transition-shadow">
                <h3 className="text-xl font-bold mb-2">4 Sessions</h3>
                <p className="text-3xl font-bold mb-2 text-pastel-pink">€350</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">90-minute sessions</p>
                <p className="text-sm font-medium mt-2">Save €30</p>
              </div>
              <div className="p-6 bg-gradient-pink text-black rounded-lg hover:shadow-glow-pink transition-shadow">
                <h3 className="text-xl font-bold mb-2">8 Sessions</h3>
                <p className="text-3xl font-bold mb-2">€680</p>
                <p className="text-sm opacity-70">90-minute sessions</p>
                <p className="text-sm font-medium mt-2">Save €80</p>
              </div>
            </div>
          </div>

          <div className="bg-black dark:bg-white text-white dark:text-black p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
            <ul className="space-y-3 text-lg">
              {[
                "Initial consultation to understand your goals",
                "Personalized creative exercises and projects",
                "Integration of DBT skills relevant to your journey",
                "All art materials and supplies provided",
                "Supportive, non-judgmental environment",
                "No previous art experience necessary"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-pastel-pink">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
