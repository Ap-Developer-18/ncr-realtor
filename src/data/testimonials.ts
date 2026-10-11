import { IMG } from "@/lib/images";
import { Testimonial } from "@/types/property";

// Demonstration testimonials. Replace with client-approved stories.
export const testimonials: Testimonial[] = [
  { name: "Mark Orta", role: "Home seller", image: IMG.portraits[0],
    quote: "Selling felt manageable because every step was explained clearly and on time." },
  { name: "John Smith", role: "Home buyer", image: IMG.portraits[1],
    quote: "The search tools and personal recommendations helped me shortlist homes quickly." },
  { name: "Walter Starnes", role: "First-time buyer", image: IMG.portraits[2],
    quote: "As a first-time buyer, I always knew what to do next and who to ask." },
  { name: "James Raulston", role: "Property seller", image: IMG.portraits[3],
    quote: "Clear guidance on pricing and presentation made the whole process calmer." },
];
