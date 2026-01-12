export default function IrishMythologyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Irish Mythology</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-16">
          Ancient stories guiding modern healing
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">The Power of Myth</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
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
                className="border-2 border-black dark:border-white p-6 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                <div className="text-4xl mb-4">{theme.symbol}</div>
                <h3 className="text-2xl font-bold mb-3">{theme.title}</h3>
                <p className="opacity-70 mb-4">{theme.description}</p>
                <p className="text-sm italic opacity-60">{theme.connection}</p>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-black dark:border-white pt-12">
            <h2 className="text-3xl font-bold mb-6">Guided Art Adventures</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Our Guided Art Adventures sessions take you on a creative journey 
              through Irish mythology. Each session explores a different mythological 
              theme, using storytelling, creative prompts, and DBT skills to create 
              meaningful artistic responses.
            </p>
            
            <div className="bg-black dark:bg-white text-white dark:text-black p-8">
              <h3 className="text-2xl font-bold mb-4">Upcoming Themes</h3>
              <ul className="space-y-3 text-lg">
                <li>• The Salmon of Knowledge: Wisdom and Learning</li>
                <li>• The Children of Lir: Transformation and Resilience</li>
                <li>• Brigid's Flame: Creativity and Healing</li>
                <li>• The Táin: Courage and Self-Advocacy</li>
                <li>• The Otherworld: Liminality and Change</li>
              </ul>
            </div>
          </div>

          <div className="border-l-4 border-black dark:border-white pl-6 my-12">
            <p className="text-2xl font-medium italic">
              "In the old stories, we find mirrors for our own journeys — 
              tales of struggle, transformation, and ultimately, healing."
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
