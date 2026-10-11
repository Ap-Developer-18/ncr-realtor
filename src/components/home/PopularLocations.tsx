import { LocationCard } from "@/components/property/LocationCard";
import { Section } from "@/components/layout/SectionContainer";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { locations } from "@/data/locations";

export function PopularLocations() {
  return (
    <Section>
      <SectionHeading title="Explore Properties in Popular Locations" text="Areas where we work, from New Gurugram to Manesar." />
      <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {locations.map((l, i) => (
          <RevealItem key={l.city} className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}>
            <LocationCard location={l} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
