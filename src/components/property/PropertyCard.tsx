"use client";
import Link from "next/link";
import { useState } from "react";
import { Heart } from "lucide-react";
import { ArrowOverlay } from "@/components/ui/ArrowOverlay";
import { Badge } from "@/components/ui/Badge";
import { IconButton } from "@/components/ui/IconButton";
import { Photo } from "@/components/ui/Photo";
import { PropertyCardDetails } from "@/components/property/PropertyCardDetails";
import { cn } from "@/lib/utils";
import { Property } from "@/types/property";

export function PropertyCard({ property: p }: { property: Property }) {
  const [saved, setSaved] = useState(false);
  return (
    <article className="group relative">
      <div className="relative">
        <Photo src={p.image} alt={`${p.name} property exterior`} className="aspect-card rounded-xl" zoom />
        <ArrowOverlay />
        <Badge className="absolute left-3 top-3">{p.transaction}</Badge>
        <IconButton
          label={saved ? `Remove ${p.name} from saved` : `Save ${p.name}`} aria-pressed={saved}
          onClick={() => setSaved(!saved)}
          className={cn("absolute right-3 top-3 z-10 border-transparent bg-white", saved ? "text-brand" : "text-forest hover:text-brand")}
        >
          <Heart className={cn("h-4 w-4", saved && "fill-brand")} aria-hidden />
        </IconButton>
        <span aria-live="polite" className="sr-only">{saved ? `${p.name} saved` : ""}</span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-xl font-normal lg:text-2xl">
            <Link href={`/properties/${p.slug}`} className="transition-colors duration-300 after:absolute after:inset-0 group-hover:text-brand focus-visible:ring-2 focus-visible:ring-brand">
              {p.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-muted lg:text-base">{p.locality}, {p.city}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-xl font-normal lg:text-2xl">{p.price}</p>
          <p className="mt-1 text-sm text-muted lg:text-base">{p.area.toLocaleString("en-IN")} sq ft</p>
        </div>
      </div>
      <div className="mt-2"><PropertyCardDetails property={p} /></div>
    </article>
  );
}
