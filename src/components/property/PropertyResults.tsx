"use client";
import { PropertySearch } from "@/components/home/PropertySearch";
import { PropertyCard } from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/SectionContainer";
import { usePropertyFilters } from "@/hooks/usePropertyFilters";
import { toQuery } from "@/lib/filters";

export function PropertyResults() {
  const { filters, results } = usePropertyFilters();
  return (
    <>
      <div className="bg-forest pb-16 pt-12 text-white">
        <Container>
          <h1 className="text-center text-3xl lg:text-left font-semibold md:text-4xl">Properties</h1>
          <p className="mt-3 text-center text-white/70 lg:text-left">Demonstration listings. Search and filters are fully interactive.</p>
        </Container>
      </div>
      <Container className="-mt-8 pb-16">
        <PropertySearch key={toQuery(filters)} initial={filters} />
        <p className="mb-6 mt-10 text-sm text-muted" aria-live="polite">
          {results.length} {results.length === 1 ? "property" : "properties"} found
        </p>
        {results.length === 0 ? (
          <div className="rounded-2xl border border-line bg-surface p-10 text-center">
            <h2 className="text-xl font-semibold">No properties match your search</h2>
            <p className="mt-2 text-muted">Try a different location, category or budget.</p>
            <Button href="/properties" className="mt-6">Clear filters</Button>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((p) => <PropertyCard key={p.slug} property={p} />)}
          </div>
        )}
      </Container>
    </>
  );
}
