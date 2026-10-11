import { InsightCard } from "@/components/property/InsightCard";
import { Section } from "@/components/layout/SectionContainer";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { insights } from "@/data/insights";

export function MarketInsights() {
  return (
    <Section>
      <SectionHeading
        title="Understand the Market Before You Move"
        text="Guides on trends, buying, investing and localities. Sample articles for demonstration."
        action={{ label: "All Insights", href: "/insights" }}
      />
      <RevealGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {insights.map((a) => (
          <RevealItem key={a.slug} className="h-full"><InsightCard insight={a} /></RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
