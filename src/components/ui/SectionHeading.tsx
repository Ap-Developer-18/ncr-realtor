import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface Props {
  title: string; eyebrow?: string; text?: string; dark?: boolean;
  align?: "left" | "center"; action?: { label: string; href: string };
}

export function SectionHeading({ title, eyebrow, text, dark, align = "left", action }: Props) {
  const center = align === "center";
  return (
    <div className={cn(
      "mb-10 flex flex-col items-center gap-6 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left",
      center && "lg:flex-col lg:items-center lg:text-center",
    )}>
      <div className="max-w-2xl">
        {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">{eyebrow}</p>}
        <h2 className={cn("text-3xl font-semibold leading-tight md:text-4xl", dark ? "text-white" : "text-forest")}>{title}</h2>
        {text && <p className={cn("mt-4 text-base leading-relaxed lg:text-lg", dark ? "text-white/70" : "text-muted")}>{text}</p>}
      </div>
      {action && (
        <Button href={action.href} variant="outline" arrow className={dark ? "text-white" : "text-brand"}>
          {action.label}
        </Button>
      )}
    </div>
  );
}
