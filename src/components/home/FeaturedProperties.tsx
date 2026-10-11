import { PropertyRow } from "@/components/property/PropertyRow";
import { Section } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { properties } from "@/data/properties";

export function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured);
  return (
    <Section>
      <SectionHeading
        title="Find a Place That Feels Like Home"
        text="Explore selected properties with thoughtfully presented details. Demonstration listings."
      />
      <div className="border-t border-forest/40">
        {featured.map((p) => (
          <Reveal key={p.slug}><PropertyRow property={p} /></Reveal>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button href="/properties" variant="outline" arrow className="text-brand">Explore All Properties</Button>
      </div>
    </Section>
  );
}
