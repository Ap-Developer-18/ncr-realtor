import { DeveloperCard } from "@/components/property/DeveloperCard";
import { Section } from "@/components/layout/SectionContainer";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { developers } from "@/data/developers";

export function DeveloperShowcase() {
  return (
    <Section>
      <SectionHeading title="Discover Established Developers" text="Sample developer profiles. Real partners will appear here once confirmed." />
      <RevealGroup className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
        {developers.map((d) => (
          <RevealItem key={d.name} className="h-full"><DeveloperCard developer={d} /></RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
