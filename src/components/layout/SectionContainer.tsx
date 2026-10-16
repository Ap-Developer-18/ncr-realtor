import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const tones = {
  light: "bg-white text-forest",
  surface: "bg-surface text-forest",
  dark: "bg-forest text-white",
  brand: "bg-brand text-white",
};

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </div>
  );
}

interface Props {
  tone?: keyof typeof tones;
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ tone = "light", id, className, children }: Props) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 py-12 md:py-24", tones[tone], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
