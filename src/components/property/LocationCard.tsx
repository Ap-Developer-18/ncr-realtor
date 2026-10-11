import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { Location } from "@/types/property";

export function LocationCard({ location: l }: { location: Location }) {
  return (
    <Link
      href={`/properties?loc=${l.city}`}
      className="group relative block overflow-hidden rounded-xl focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
    >
      <Photo src={l.image} alt={`${l.city} skyline and residences`} className="aspect-card" zoom />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-center text-white lg:text-left">
        <h3 className="text-xl font-semibold">{l.city}</h3>
        <p className="mt-1 text-base text-white/80">{l.subtitle}</p>
      </div>
    </Link>
  );
}
