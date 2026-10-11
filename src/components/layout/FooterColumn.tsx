import Link from "next/link";
import { FooterColumnData } from "@/data/site";

export function FooterColumn({ title, links }: FooterColumnData) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-base text-white/70 transition-colors duration-300 hover:text-brand focus-visible:ring-2 focus-visible:ring-brand">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
