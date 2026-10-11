import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Photo } from "@/components/ui/Photo";
import { PropertyCardDetails } from "@/components/property/PropertyCardDetails";
import { Property } from "@/types/property";

export function PropertyRow({ property: p }: { property: Property }) {
  return (
    <article className="group relative grid items-stretch gap-6 border-b border-forest/40 py-8 text-center lg:grid-cols-12 lg:gap-10 lg:text-left">
      <Photo src={p.image} alt={`${p.name} property exterior`} className="aspect-card rounded-xl lg:col-span-5" sizes="(min-width: 1024px) 40vw, 100vw" zoom />
      <div className="flex flex-col items-center gap-4 lg:col-span-7 lg:items-start lg:justify-between">
        <div>
          <h3 className="text-2xl font-normal lg:text-4xl">
            <Link href={`/properties/${p.slug}`} className="transition-colors duration-300 after:absolute after:inset-0 group-hover:text-brand focus-visible:ring-2 focus-visible:ring-brand">
              {p.name}
            </Link>
          </h3>
          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-forest lg:mx-0 lg:text-lg">{p.description}</p>
          <div className="mt-3 flex justify-center lg:justify-start"><PropertyCardDetails property={p} /></div>
        </div>
        <p className="text-2xl font-normal lg:text-3xl">
          {p.price} <span className="text-sm text-muted lg:text-base">{p.transaction === "Rent" ? "/Monthly" : p.transaction}</span>
        </p>
      </div>
      <span aria-hidden className="absolute right-0 top-8 hidden h-12 w-12 items-center justify-center rounded-full bg-brand text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:flex">
        <ArrowUpRight className="h-5 w-5" />
      </span>
    </article>
  );
}
