export type Transaction = "Buy" | "Rent" | "Commercial";

export interface Property {
  slug: string; name: string; locality: string; city: string; type: string;
  transaction: Transaction; beds: number; baths: number; area: number;
  price: string; priceLakh: number; description: string; image: string;
  featured?: boolean;
}
export interface Location { city: string; subtitle: string; image: string }
export interface Insight {
  slug: string; category: string; title: string; excerpt: string;
  readTime: string; image: string;
}
export interface Testimonial { name: string; role: string; quote: string; image: string }
export interface Faq { question: string; answer: string }
export interface Developer { name: string; tagline: string }
export interface Budget { label: string; min: number; max: number }
