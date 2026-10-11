import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { NavLink } from "@/data/site";
import { cn } from "@/lib/utils";

export function NavItem({ item, active }: { item: NavLink; active: boolean }) {
  const show = "group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100";
  return (
    <div className="group relative">
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={cn(
          "inline-flex items-center gap-1 rounded py-2 text-sm font-medium transition-colors duration-300 hover:text-brand focus-visible:ring-2 focus-visible:ring-brand",
          active ? "text-brand" : "text-white",
        )}
      >
        {item.label}
        {item.children && <ChevronDown aria-hidden className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />}
      </Link>
      {item.children && (
        <div className={cn("invisible absolute left-0 top-full z-50 w-56 pt-2 opacity-0 transition duration-200", show)}>
          <ul className="rounded-2xl border border-line bg-white p-2 shadow-lg">
            {item.children.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="block rounded-xl px-3 py-2 text-sm text-forest transition-colors duration-200 hover:bg-forest/5 hover:text-brand focus-visible:ring-2 focus-visible:ring-brand">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
