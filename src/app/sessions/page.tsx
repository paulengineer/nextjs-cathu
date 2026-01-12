import Link from "next/link";

export default function SessionsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Group Sessions</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-16">
          Join our community art therapy sessions
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="border-2 border-black dark:border-white p-8 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group relative overflow-hidden"
            >
              {/* Baby blue gradient accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-blue rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">{session.title}</h3>
                <p className="text-lg mb-6 opacity-70">{session.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="font-medium">Duration:</span>
                    <span className="opacity-70">{session.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Group Size:</span>
                    <span className="opacity-70">{session.groupSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Price:</span>
                    <span className="font-bold">{session.price}</span>
                  </div>
                </div>

                <Link
                  href="/booking"
                  className="inline-block w-full text-center py-3 border-2 border-current font-medium hover:bg-gradient-blue hover:text-black dark:group-hover:bg-gradient-blue dark:group-hover:text-black transition-all rounded"
                >
                  Book This Session
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 border-2 border-pastel-blue bg-gradient-blue rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-black">Session Packages</h2>
          <p className="text-lg text-black mb-6 font-semibold">
            Save when you book multiple sessions
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-pastel-blue to-blue-100 text-black rounded-lg hover:shadow-glow-blue transition-shadow">
              <h3 className="text-2xl font-bold mb-2">4 Sessions</h3>
              <p className="text-3xl font-bold mb-2">€140</p>
              <p className="opacity-70">Save €20</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-pastel-blue to-blue-100 text-black rounded-lg hover:shadow-glow-blue transition-shadow">
              <h3 className="text-2xl font-bold mb-2">8 Sessions</h3>
              <p className="text-3xl font-bold mb-2">€260</p>
              <p className="opacity-70">Save €60</p>
            </div>
            <div className="p-6 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:shadow-glow-blue transition-shadow">
              <h3 className="text-2xl font-bold mb-2">12 Sessions</h3>
              <p className="text-3xl font-bold mb-2">€360</p>
              <p className="opacity-70">Save €120</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const sessions = [
  {
    title: "Group Art Therapy",
    description: "Collaborative art-making in a supportive group environment. Learn DBT skills through creative expression.",
    duration: "2 hours",
    groupSize: "6-10 people",
    price: "€40",
  },
  {
    title: "Collage Workshop",
    description: "Express your inner world through mixed media collage. Perfect for exploring emotions and self-discovery.",
    duration: "2 hours",
    groupSize: "6-10 people",
    price: "€40",
  },
  {
    title: "Open Studio Time",
    description: "Self-directed creative time with access to professional materials and optional guidance.",
    duration: "3 hours",
    groupSize: "4-8 people",
    price: "€35",
  },
  {
    title: "Guided Art Adventures",
    description: "Journey through Irish mythology with guided creative exercises and storytelling.",
    duration: "2.5 hours",
    groupSize: "6-12 people",
    price: "€45",
  },
];
