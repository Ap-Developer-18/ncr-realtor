import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Photo } from "@/components/ui/Photo";
import { Insight } from "@/types/property";

export function InsightCard({ insight: a }: { insight: Insight }) {
  return (
    <Link href={`/insights#${a.slug}`} className="group flex h-full flex-col focus-visible:ring-2 focus-visible:ring-brand">
      <Photo src={a.image} alt={`Illustration for ${a.title}`} className="aspect-card rounded-xl" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" zoom />
      <div className="flex flex-1 flex-col pt-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">{a.category}</p>
        <h3 className="mt-2 text-xl font-normal leading-snug transition-colors duration-300 group-hover:text-brand">{a.title}</h3>
        <p className="mt-2 flex-1 text-base leading-relaxed text-muted lg:text-lg">{a.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="inline-flex items-center gap-1.5 text-muted"><Clock className="h-4 w-4" aria-hidden />{a.readTime}</span>
          <span className="inline-flex items-center gap-1 font-semibold text-forest">
            Read Article
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}
