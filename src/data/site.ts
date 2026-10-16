import {
  Briefcase,
  Building2,
  Home,
  Key,
  LucideIcon,
  Map,
  Trees,
} from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const NAV: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Buy",
    href: "/properties?tx=Buy",
    children: [
      { label: "Apartments", href: "/properties?tx=Buy&cat=Apartment" },
      {
        label: "Independent Houses",
        href: "/properties?tx=Buy&cat=Independent%20House",
      },
      { label: "Villas", href: "/properties?tx=Buy&cat=Villa" },
      {
        label: "Residential Plots",
        href: "/properties?tx=Buy&cat=Residential%20Plot",
      },
    ],
  },
  { label: "Rent", href: "/properties?tx=Rent" },
  { label: "Commercial", href: "/properties?tx=Commercial" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
];

export interface CategoryCard {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export const CATEGORY_CARDS: CategoryCard[] = [
  {
    title: "Apartments",
    icon: Building2,
    href: "/properties?cat=Apartment",
    description: "Modern flats in well-connected communities.",
  },
  {
    title: "Independent Houses",
    icon: Home,
    href: "/properties?cat=Independent%20House",
    description: "Private homes with space for family life.",
  },
  {
    title: "Villas",
    icon: Trees,
    href: "/properties?cat=Villa",
    description: "Low-density living with gardens and privacy.",
  },
  {
    title: "Residential Plots",
    icon: Map,
    href: "/properties?cat=Residential%20Plot",
    description: "Land to build the home you have planned.",
  },
  {
    title: "Commercial Spaces",
    icon: Briefcase,
    href: "/properties?tx=Commercial",
    description: "Offices and retail spaces for growing teams.",
  },
  {
    title: "Rental Properties",
    icon: Key,
    href: "/properties?tx=Rent",
    description: "Homes ready to move into on flexible terms.",
  },
];

export interface FooterColumnData {
  title: string;
  links: { label: string; href: string }[];
}

const cities = [
  "New Gurugram",
  "Sohna",
  "Farrukh Nagar",
  "Dwarka Expressway",
  "Manesar",
];

export const FOOTER_COLUMNS: FooterColumnData[] = [
  {
    title: "Navigation",
    links: NAV.map(({ label, href }) => ({ label, href })),
  },
  {
    title: "Categories",
    links: CATEGORY_CARDS.map((c) => ({ label: c.title, href: c.href })),
  },
  {
    title: "Locations",
    links: cities.map((c) => ({ label: c, href: `/properties?loc=${c}` })),
  },
  {
    title: "Resources",
    links: [
      { label: "Market Insights", href: "/insights" },
      { label: "Buying Guides", href: "/insights#first-home" },
      { label: "Trending Projects", href: "/projects" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
];
