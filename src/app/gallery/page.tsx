export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-16">
          Creative works from our studio community
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square border-2 border-pastel-mint flex items-center justify-center text-gray-400 dark:text-gray-600 hover:bg-gradient-mint hover:text-black dark:hover:bg-gradient-mint dark:hover:text-black transition-all group hover:shadow-glow-mint rounded-lg cursor-pointer"
            >
              <div className="text-center group-hover:scale-110 transition-transform">
                <div className="text-4xl mb-2">🎨</div>
                <p className="text-sm">Artwork {i + 1}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 border-2 border-pastel-mint bg-gradient-mint rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-black">About Our Gallery</h2>
          <p className="text-lg text-black mb-6">
            Our gallery showcases the creative expressions of our community members. 
            Each piece represents a personal journey of healing, exploration, and growth 
            through art therapy.
          </p>
          <p className="text-lg text-black">
            Participation in the gallery is always optional and decided by each individual 
            artist. We respect the personal nature of therapeutic art and celebrate those 
            who choose to share their work.
          </p>
        </div>
      </div>
    </div>
  );
}
