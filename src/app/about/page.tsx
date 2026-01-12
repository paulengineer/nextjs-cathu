import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">About Cothú Studio</h1>
        
        <div className="space-y-8 text-lg leading-relaxed">
          <p className="text-gray-600 dark:text-gray-400">
            Cothú (pronounced "co-HOO") is an Irish word meaning nourishment, 
            sustenance, and care. At Cothú Studio, we believe in the healing power 
            of creative expression.
          </p>

          <div className="border-l-4 border-black dark:border-white pl-6 my-12">
            <p className="text-2xl font-medium italic">
              "Art washes away from the soul the dust of everyday life."
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-4">Our Approach</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We integrate non-clinical Dialectical Behavior Therapy (DBT) skills 
            with creative art practices. Our sessions focus on mindfulness, 
            emotional regulation, distress tolerance, and interpersonal effectiveness 
            — all through the lens of artistic expression.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">What Makes Us Different</h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-400">
            <li className="flex gap-3">
              <span className="text-black dark:text-white">•</span>
              <span>Group-based healing in a supportive community</span>
            </li>
            <li className="flex gap-3">
              <span className="text-black dark:text-white">•</span>
              <span>No artistic experience required</span>
            </li>
            <li className="flex gap-3">
              <span className="text-black dark:text-white">•</span>
              <span>Integration of Irish mythology and cultural heritage</span>
            </li>
            <li className="flex gap-3">
              <span className="text-black dark:text-white">•</span>
              <span>Professional art materials and guidance provided</span>
            </li>
            <li className="flex gap-3">
              <span className="text-black dark:text-white">•</span>
              <span>Accessible, non-clinical environment</span>
            </li>
          </ul>

          <div className="mt-16 pt-8 border-t border-black dark:border-white">
            <Link
              href="/sessions"
              className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 text-lg font-medium hover:opacity-80 transition-opacity"
            >
              View Our Sessions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
