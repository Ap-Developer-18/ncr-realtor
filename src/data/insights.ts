import { IMG } from "@/lib/images";
import { Insight } from "@/types/property";

// Sample article summaries. No market statistics are included.
export const insights: Insight[] = [
  {
    slug: "first-home", category: "Buying Guides", readTime: "6 min read", image: IMG.willow,
    title: "What to Know Before Buying Your First Home",
    excerpt: "Budget, paperwork and site visits: a calm checklist for first-time buyers.",
  },
  {
    slug: "emerging-locations", category: "Locality Guides", readTime: "5 min read", image: IMG.maple,
    title: "How to Compare Emerging Residential Locations",
    excerpt: "Connectivity, social infrastructure and supply: what to weigh side by side.",
  },
  {
    slug: "ownership-costs", category: "Investment Basics", readTime: "7 min read", image: IMG.pine,
    title: "Understanding Property Prices and Total Ownership Costs",
    excerpt: "Beyond the listed price: registration, maintenance and other costs to plan for.",
  },
  {
    slug: "residential-vs-commercial", category: "Market Trends", readTime: "5 min read", image: IMG.cta,
    title: "Residential vs Commercial Property: Key Differences",
    excerpt: "How use, leasing and ownership differ between the two property types.",
  },
];
