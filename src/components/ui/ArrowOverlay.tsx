import { ArrowUpRight } from "lucide-react";

export function ArrowOverlay() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <ArrowUpRight className="h-6 w-6" />
    </span>
  );
}
