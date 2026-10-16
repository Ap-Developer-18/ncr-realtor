import Link from "next/link";

// NOTE: adjust the prop shape if your FOOTER_COLUMNS items differ.
interface Props {
  title: string;
  links: { label: string; href: string }[];
}

export function FooterColumn({ title, links }: Props) {
  return (
    <div className="min-w-0">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="block text-sm leading-snug text-white/70 transition-colors hover:text-brand"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
