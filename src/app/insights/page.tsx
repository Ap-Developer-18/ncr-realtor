import { InsightCard } from "@/components/property/InsightCard";
import { Section } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { insights } from "@/data/insights";

export const metadata = { title: "Insights" };

export default function InsightsPage() {
  return (
    <Section>
      <SectionHeading title="Property Insights" text="Sample articles. Full guides will be published here." />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {insights.map((a) => (
          <div key={a.slug} id={a.slug} className="scroll-mt-24"><InsightCard insight={a} /></div>
        ))}
      </div>
    </Section>
  );
}
