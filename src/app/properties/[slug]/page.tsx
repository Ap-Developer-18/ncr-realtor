import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { PropertyCardDetails } from "@/components/property/PropertyCardDetails";
import { Section } from "@/components/layout/SectionContainer";
import { properties } from "@/data/properties";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export default function PropertyPage({ params }: { params: { slug: string } }) {
  const p = properties.find((x) => x.slug === params.slug);
  if (!p) notFound();
  return (
    <Section>
      <Button href="/properties" variant="ghost" className="mb-6">Back to properties</Button>
      <div className="grid gap-10 lg:grid-cols-2">
        <Photo src={p.image} alt={`${p.name} property exterior`} priority sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-card rounded-2xl" />
        <div>
          <p className="text-sm font-semibold text-brand">{p.transaction}</p>
          <h1 className="mt-2 text-3xl font-semibold md:text-4xl">{p.name}</h1>
          <p className="mt-2 text-muted">{p.locality}, {p.city}</p>
          <p className="mt-6 text-2xl font-bold text-brand">{p.price}</p>
          <p className="mt-2 text-muted">{p.area.toLocaleString("en-IN")} sq ft</p>
          <div className="mt-3"><PropertyCardDetails property={p} /></div>
          <p className="mt-6 leading-relaxed text-muted">{p.description}</p>
          <p className="mt-4 text-sm text-muted">Demonstration listing. Not live inventory.</p>
          <Button href="/#contact" arrow className="mt-8">Talk to an Expert</Button>
        </div>
      </div>
    </Section>
  );
}
