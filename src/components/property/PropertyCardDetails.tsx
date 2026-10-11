import { Bath, BedDouble } from "lucide-react";
import { Property } from "@/types/property";

export function PropertyCardDetails({ property: p }: { property: Property }) {
  return (
    <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted lg:text-base">
      <li>{p.type}</li>
      {p.beds > 0 && (
        <li className="inline-flex items-center gap-1.5"><BedDouble className="h-4 w-4" aria-hidden />{p.beds} Beds</li>
      )}
      {p.baths > 0 && (
        <li className="inline-flex items-center gap-1.5"><Bath className="h-4 w-4" aria-hidden />{p.baths} Baths</li>
      )}
    </ul>
  );
}
