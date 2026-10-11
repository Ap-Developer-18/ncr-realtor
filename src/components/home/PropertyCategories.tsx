import Link from "next/link";
import { Section } from "@/components/layout/SectionContainer";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CATEGORY_CARDS } from "@/data/site";

export function PropertyCategories() {
  return (
    <Section>
      <SectionHeading
        title="Explore Properties Your Way"
        text="Start with the kind of space you are looking for and refine from there."
      />
      <RevealGroup className="grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORY_CARDS.map(({ title, description, href, icon: Icon }) => (
          <RevealItem key={title}>
            <Link
              href={href}
              className="group flex flex-col items-center border-t border-forest/40 py-8 text-center focus-visible:ring-2 focus-visible:ring-brand lg:items-start lg:text-left"
            >
              <Icon className="h-7 w-7 text-brand" aria-hidden />
              <h3 className="mt-5 text-2xl font-normal transition-colors duration-300 group-hover:text-brand">{title}</h3>
              <p className="mt-2 max-w-xs text-base leading-relaxed text-muted lg:text-lg">{description}</p>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
