import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const tones = {
  light: "bg-white/90 text-forest",
  dark: "bg-forest text-white",
  brand: "bg-brand text-white",
};

interface Props { tone?: keyof typeof tones; className?: string; children: ReactNode }

export function Badge({ tone = "light", className, children }: Props) {
  return (
    <span className={cn("inline-flex rounded-full px-3 py-1 text-xs font-semibold", tones[tone], className)}>
      {children}
    </span>
  );
}
