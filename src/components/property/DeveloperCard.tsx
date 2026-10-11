import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Developer } from "@/types/property";

export function DeveloperCard({ developer: d }: { developer: Developer }) {
  return (
    <div className="flex h-full flex-col items-center border-t border-forest/40 py-8 text-center lg:items-start lg:text-left">
      <h3 className="text-2xl font-normal">{d.name}</h3>
      <p className="mt-2 flex-1 text-base text-muted lg:text-lg">{d.tagline}</p>
      <Link href="/projects" className="group mt-5 inline-flex items-center gap-1 text-base font-semibold text-brand focus-visible:ring-2 focus-visible:ring-brand">
        Explore Projects
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
      </Link>
    </div>
  );
}
