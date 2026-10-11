import Link from "next/link";
import { ArrowOverlay } from "@/components/ui/ArrowOverlay";
import { Badge } from "@/components/ui/Badge";
import { Photo } from "@/components/ui/Photo";
import { Project } from "@/types/project";

export function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="group relative">
      <div className="relative">
        <Photo src={p.image} alt={`${p.name} project visual`} className="aspect-card rounded-xl" zoom />
        <ArrowOverlay />
        <Badge className="absolute left-3 top-3">{p.status}</Badge>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-xl font-normal lg:text-2xl">
            <Link href={`/projects#${p.slug}`} className="transition-colors duration-300 after:absolute after:inset-0 group-hover:text-brand focus-visible:ring-2 focus-visible:ring-brand">
              {p.name}<span className="sr-only">, view project</span>
            </Link>
          </h3>
          <p className="mt-1 text-sm text-muted lg:text-base">{p.location}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-xl font-normal lg:text-2xl">{p.price}</p>
          <p className="mt-1 text-sm text-muted lg:text-base">{p.type}</p>
        </div>
      </div>
    </article>
  );
}
