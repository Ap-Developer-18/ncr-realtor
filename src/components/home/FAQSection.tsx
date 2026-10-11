import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";

export function FAQSection() {
  return (
    <Section id="faq">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="Frequently Asked Questions" align="center" />
        <Accordion items={faqs} />
      </div>
    </Section>
  );
}
