import { DeveloperShowcase } from "@/components/home/DeveloperShowcase";
import { FAQSection } from "@/components/home/FAQSection";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HeroSection } from "@/components/home/HeroSection";
import { MarketInsights } from "@/components/home/MarketInsights";
import { PopularLocations } from "@/components/home/PopularLocations";
import { PropertyCategories } from "@/components/home/PropertyCategories";
import { PropertySearch } from "@/components/home/PropertySearch";
import { ServicesSection } from "@/components/home/ServicesSection";
import { Testimonials } from "@/components/home/Testimonials";
import { TrendingProjects } from "@/components/home/TrendingProjects";
import { Container } from "@/components/layout/SectionContainer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Container className="relative z-20 -mt-12">
        <PropertySearch />
      </Container>
      <PropertyCategories />
      <TrendingProjects />
      <ServicesSection />
      <MarketInsights />
      <PopularLocations />
      <FeaturedProperties />
      <DeveloperShowcase />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
