"use client";
import { useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, LucideIcon } from "lucide-react";
import { useDropdown } from "@/hooks/useDropdown";
import { dropdownTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface Props {
  label: string; value: string; options: string[]; onChange: (v: string) => void;
  icon?: LucideIcon; placeholder?: string; disabled?: boolean;
}

export function CustomSelect({ label, value, options, onChange, icon: Icon, placeholder = "Select", disabled }: Props) {
  const id = useId();
  const d = useDropdown(options.length, (i) => onChange(options[i]));
  return (
    <div ref={d.ref} className="relative" onKeyDown={d.onKeyDown}>
      <button
        type="button" disabled={disabled} aria-haspopup="listbox" aria-expanded={d.open}
        aria-controls={id} aria-activedescendant={d.open ? `${id}-${d.active}` : undefined}
        onClick={() => d.setOpen(!d.open)}
        className="flex w-full items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 text-left transition-colors duration-300 hover:border-brand focus-visible:ring-2 focus-visible:ring-brand disabled:opacity-50"
      >
        {Icon && <Icon className="h-4 w-4 shrink-0 text-brand" aria-hidden />}
        <span className="min-w-0 flex-1">
          <span className="block text-xs text-muted">{label}</span>
          <span className="block truncate text-sm font-medium text-forest">{value || placeholder}</span>
        </span>
        <ChevronDown aria-hidden className={cn("h-4 w-4 text-muted transition-transform duration-300", d.open && "rotate-180")} />
      </button>
      <AnimatePresence>
        {d.open && (
          <motion.ul
            id={id} role="listbox" aria-label={label} {...dropdownTransition}
            className="absolute inset-x-0 top-full z-30 mt-2 max-h-60 overflow-auto rounded-2xl border border-line bg-white p-1 shadow-lg"
          >
            {options.map((o, i) => (
              <li
                key={o} id={`${id}-${i}`} role="option" aria-selected={o === value}
                onMouseEnter={() => d.setActive(i)}
                onClick={() => { onChange(o); d.setOpen(false); }}
                className={cn(
                  "cursor-pointer rounded-xl px-3 py-2 text-sm transition-colors duration-200",
                  i === d.active && "bg-forest/5",
                  o === value ? "font-semibold text-brand" : "text-forest",
                )}
              >
                {o}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
