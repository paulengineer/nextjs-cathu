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
              <div className="border-2 border-black dark:border-white p-6">
                <h3 className="text-2xl font-bold mb-4">60-Minute Session</h3>
                <p className="text-4xl font-bold mb-4">€70</p>
                <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-400">
                  <li>• Personalized guidance</li>
                  <li>• All materials included</li>
                  <li>• DBT skill integration</li>
                  <li>• Flexible scheduling</li>
                </ul>
                <Link
                  href="https://cal.com"
                  target="_blank"
                  className="block w-full text-center py-3 bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-80 transition-opacity"
                >
                  Book 60-Min Session
                </Link>
              </div>

              <div className="border-2 border-black dark:border-white p-6">
                <h3 className="text-2xl font-bold mb-4">90-Minute Session</h3>
                <p className="text-4xl font-bold mb-4">€95</p>
                <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-400">
                  <li>• Extended creative time</li>
                  <li>• Deep exploration</li>
                  <li>• All materials included</li>
                  <li>• Most popular option</li>
                </ul>
                <Link
                  href="https://cal.com"
                  target="_blank"
                  className="block w-full text-center py-3 bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-80 transition-opacity"
                >
                  Book 90-Min Session
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-black dark:border-white pt-12">
            <h2 className="text-3xl font-bold mb-6">Individual Session Packages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border-2 border-black dark:border-white">
                <h3 className="text-xl font-bold mb-2">4 Sessions</h3>
                <p className="text-3xl font-bold mb-2">€260</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">60-minute sessions</p>
                <p className="text-sm font-medium mt-2">Save €20</p>
              </div>
              <div className="p-6 border-2 border-black dark:border-white">
                <h3 className="text-xl font-bold mb-2">4 Sessions</h3>
                <p className="text-3xl font-bold mb-2">€350</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">90-minute sessions</p>
                <p className="text-sm font-medium mt-2">Save €30</p>
              </div>
              <div className="p-6 bg-black dark:bg-white text-white dark:text-black">
                <h3 className="text-xl font-bold mb-2">8 Sessions</h3>
                <p className="text-3xl font-bold mb-2">€680</p>
                <p className="text-sm opacity-70">90-minute sessions</p>
                <p className="text-sm font-medium mt-2">Save €80</p>
              </div>
            </div>
          </div>

          <div className="bg-black dark:bg-white text-white dark:text-black p-8">
            <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
            <ul className="space-y-3 text-lg">
              <li>• Initial consultation to understand your goals</li>
              <li>• Personalized creative exercises and projects</li>
              <li>• Integration of DBT skills relevant to your journey</li>
              <li>• All art materials and supplies provided</li>
              <li>• Supportive, non-judgmental environment</li>
              <li>• No previous art experience necessary</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
