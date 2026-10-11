import { IMG } from "@/lib/images";
import { Project, ProjectType } from "@/types/project";

export const PROJECT_TYPES: ProjectType[] = ["Residential", "Commercial"];

// Illustrative sample records, not verified live developments.
export const projects: Project[] = [
  { slug: "skyline-residences", name: "Skyline Residences", developer: "Aurum Developers",
    location: "New Gurugram", price: "From ₹1.8 Cr", status: "New Launch", type: "Residential", image: IMG.hero },
  { slug: "the-urban-district", name: "The Urban District", developer: "Northfield Group",
    location: "Dwarka Expressway", price: "From ₹95 L", status: "Ready to Move", type: "Residential", image: IMG.about },
  { slug: "greencrest-enclave", name: "Greencrest Enclave", developer: "Greencrest Builders",
    location: "Sohna", price: "From ₹70 L", status: "New Launch", type: "Residential", image: IMG.pine },
  { slug: "meridian-business-park", name: "Meridian Business Park", developer: "Meridian Estates",
    location: "Manesar", price: "From ₹2.2 Cr", status: "Office Spaces", type: "Commercial", image: IMG.cta },
];
