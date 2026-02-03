export default function IrishMythologyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-cream">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Irish Mythology</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-16">
          Ancient stories guiding modern healing
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">The Power of Myth</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Irish mythology offers rich narratives of transformation, resilience, 
              and the human experience. At Cothú Studio, we weave these ancient 
              stories into our creative practice, using them as prompts for personal 
              reflection and artistic expression.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mythologicalThemes.map((theme, index) => (
              <div
                key={index}
                className="border-2 border-pastel-blue p-6 hover:bg-gradient-blue dark:hover:bg-gradient-blue transition-all group relative overflow-hidden rounded-lg"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-blue rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{theme.symbol}</div>
                  <h3 className="text-2xl font-bold mb-3">{theme.title}</h3>
                  <p className="opacity-70 mb-4">{theme.description}</p>
                  <p className="text-sm italic opacity-60">{theme.connection}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-pastel-blue pt-12">
            <h2 className="text-3xl font-bold mb-6">Guided Art Adventures</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Our Guided Art Adventures sessions take you on a creative journey 
              through Irish mythology. Each session explores a different mythological 
              theme, using storytelling, creative prompts, and DBT skills to create 
              meaningful artistic responses.
            </p>
            
            <div className="bg-gradient-blue text-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Upcoming Themes</h3>
              <ul className="space-y-3 text-lg">
                {[
                  "The Salmon of Knowledge: Wisdom and Learning",
                  "The Children of Lir: Transformation and Resilience",
                  "Brigid's Flame: Creativity and Healing",
                  "The Táin: Courage and Self-Advocacy",
                  "The Otherworld: Liminality and Change"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-black font-bold">✨</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-l-4 border-pastel-blue pl-6 my-12 bg-gradient-blue p-6 rounded-lg">
            <p className="text-2xl font-medium italic text-black">
              &quot;In the old stories, we find mirrors for our own journeys — 
              tales of struggle, transformation, and ultimately, healing.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mythologicalThemes = [
  {
    symbol: "🌊",
    title: "Water & Flow",
    description: "Rivers, wells, and the sea represent emotional currents and the subconscious in Irish lore.",
    connection: "Connects to emotional regulation and mindfulness practices",
  },
  {
    symbol: "🔥",
    title: "Fire & Transformation",
    description: "Sacred flames and forge represent change, purification, and creative power.",
    connection: "Explores themes of personal transformation and growth",
  },
  {
    symbol: "🌳",
    title: "Trees & Roots",
    description: "The sacred oak and world tree symbolize grounding, connection, and ancestral wisdom.",
    connection: "Grounding techniques and connection to self and community",
  },
  {
    symbol: "🦢",
    title: "Shape-shifting",
    description: "Many Irish tales feature transformation between human and animal forms.",
    connection: "Explores identity, change, and adaptability in challenging times",
  },
  {
    symbol: "✨",
    title: "The Otherworld",
    description: "The realm between worlds represents liminal spaces and possibility.",
    connection: "Navigating transitions and embracing uncertainty",
  },
  {
    symbol: "⚔️",
    title: "Heroes & Quests",
    description: "Epic journeys of heroes facing trials and discovering inner strength.",
    connection: "Personal agency, resilience, and overcoming obstacles",
  },
];
