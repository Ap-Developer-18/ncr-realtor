import { IMG } from "@/lib/images";
import { Property } from "@/types/property";

// Demonstration listings only. Not live inventory.
export const properties: Property[] = [
  {
    slug: "willow-heights", name: "Willow Heights", locality: "Sector 84", city: "New Gurugram",
    type: "Apartment", transaction: "Buy", beds: 3, baths: 2, area: 1600,
    price: "₹1.45 Cr", priceLakh: 145, image: IMG.willow, featured: true,
    description: "A light-filled home with high ceilings, an open kitchen and a private balcony.",
  },
  {
    slug: "maple-grove", name: "Maple Grove", locality: "Sohna Road", city: "Sohna",
    type: "Independent House", transaction: "Buy", beds: 4, baths: 3, area: 2200,
    price: "₹2.40 Cr", priceLakh: 240, image: IMG.maple, featured: true,
    description: "A renovated family house on a quiet, tree-lined street with a sunroom.",
  },
  {
    slug: "pine-estates", name: "Pine Estates", locality: "Sector 8", city: "Manesar",
    type: "Villa", transaction: "Buy", beds: 3, baths: 3, area: 1800,
    price: "₹1.80 Cr", priceLakh: 180, image: IMG.pine, featured: true,
    description: "A compact villa with an efficient layout, covered parking and a rooftop deck.",
  },
  {
    slug: "cedar-court", name: "Cedar Court", locality: "Sector 102", city: "Dwarka Expressway",
    type: "Apartment", transaction: "Rent", beds: 2, baths: 2, area: 1100,
    price: "₹45,000/mo", priceLakh: 0.45, image: IMG.hero,
    description: "A bright two-bedroom apartment close to offices, cafes and metro access.",
  },
  {
    slug: "aster-plots", name: "Aster Plots", locality: "Farrukh Nagar Road", city: "Farrukh Nagar",
    type: "Residential Plot", transaction: "Buy", beds: 0, baths: 0, area: 2400,
    price: "₹95 L", priceLakh: 95, image: IMG.about,
    description: "A corner residential plot in a planned sector with wide internal roads.",
  },
  {
    slug: "harbor-offices", name: "Harbor Offices", locality: "IMT Manesar", city: "Manesar",
    type: "Commercial Space", transaction: "Commercial", beds: 0, baths: 2, area: 2800,
    price: "₹4.20 Cr", priceLakh: 420, image: IMG.cta,
    description: "A flexible office floor with reception, meeting rooms and dedicated parking.",
  },
];
