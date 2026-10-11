import { cn } from "@/lib/utils";

interface Props { tabs: string[]; value: string; onChange: (v: string) => void; label: string }

export function CategoryTabs({ tabs, value, onChange, label }: Props) {
  return (
    <div className="flex justify-center lg:justify-start">
      <div role="group" aria-label={label} className="flex max-w-full gap-2 overflow-x-auto pb-2">
        {tabs.map((t) => (
          <button
            key={t} type="button" aria-pressed={t === value} onClick={() => onChange(t)}
            className={cn(
              "shrink-0 whitespace-nowrap rounded-full border px-6 py-2.5 text-base font-medium transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand",
              t === value ? "border-brand bg-brand text-white" : "border-forest/20 bg-white text-forest hover:border-brand hover:text-brand",
            )}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
