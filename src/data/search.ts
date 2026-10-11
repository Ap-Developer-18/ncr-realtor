import { Budget } from "@/types/property";

export const TRANSACTIONS = ["All", "Buy", "Rent", "Commercial"];
export const CATEGORIES = [
  "All types", "Apartment", "Independent House", "Villa",
  "Residential Plot", "Commercial Space",
];
export const LOCATION_OPTIONS = [
  "All locations", "New Gurugram", "Sohna", "Farrukh Nagar", "Dwarka Expressway", "Manesar",
];
export const BUDGETS: Budget[] = [
  { label: "Any budget", min: 0, max: Infinity },
  { label: "Under ₹50 L", min: 0, max: 50 },
  { label: "₹50 L – ₹1 Cr", min: 50, max: 100 },
  { label: "₹1 Cr – ₹2 Cr", min: 100, max: 200 },
  { label: "Above ₹2 Cr", min: 200, max: Infinity },
];
export const BUDGET_LABELS = BUDGETS.map((b) => b.label);
