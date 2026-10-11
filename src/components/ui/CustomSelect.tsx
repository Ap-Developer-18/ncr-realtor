"use client";
import { useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, LucideIcon } from "lucide-react";
import { useDropdown } from "@/hooks/useDropdown";
import { dropdownTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface Props {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  icon?: LucideIcon;
  placeholder?: string;
  disabled?: boolean;
}

export function CustomSelect({
  label,
  value,
  options,
  onChange,
  icon: Icon,
  placeholder = "Select",
  disabled,
}: Props) {
  const id = useId();
  const d = useDropdown(options.length, (i) => onChange(options[i]));

  return (
    <div ref={d.ref} className="relative" onKeyDown={d.onKeyDown}>
      <button
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={d.open}
        aria-controls={id}
        aria-activedescendant={d.open ? `${id}-${d.active}` : undefined}
        onClick={() => d.setOpen(!d.open)}
        className="flex w-full items-center gap-3 rounded-2xl border border-line/50 bg-white px-4 py-3 text-left transition-all duration-300 hover:border-line hover:bg-forest/[0.01] focus-visible:border-forest/20 focus-visible:bg-forest/[0.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-forest/5 disabled:opacity-50"
      >
        {Icon && (
          <Icon className="h-4 w-4 shrink-0 text-muted/70" aria-hidden />
        )}
        <span className="min-w-0 flex-1">
          <span className="block text-xs lg:text-base font-medium text-muted/80">
            {label}
          </span>
          <span className="block truncate text-sm font-semibold text-forest mt-0.5">
            {value || placeholder}
          </span>
        </span>
        <ChevronDown
          aria-hidden
          className={cn(
            "h-4 w-4 text-muted/50 transition-transform duration-500 ease-out",
            d.open && "rotate-180 text-forest",
          )}
        />
      </button>

      <AnimatePresence>
        {d.open && (
          <motion.ul
            id={id}
            role="listbox"
            aria-label={label}
            {...dropdownTransition}
            className="absolute inset-x-0 top-[calc(100%+8px)] z-30 max-h-60 overflow-auto rounded-2xl border border-line/40 bg-white p-1.5 shadow-[0_12px_40px_rgb(9,38,29,0.08)] backdrop-blur-xl"
          >
            {options.map((o, i) => (
              <li
                key={o}
                id={`${id}-${i}`}
                role="option"
                aria-selected={o === value}
                onMouseEnter={() => d.setActive(i)}
                onClick={() => {
                  onChange(o);
                  d.setOpen(false);
                }}
                className={cn(
                  "cursor-pointer rounded-xl px-3 py-2.5 text-sm lg:text-base transition-all duration-200 ease-out",
                  i === d.active && "bg-forest/[0.03]",
                  o === value
                    ? "font-semibold text-forest bg-forest/[0.04]"
                    : "text-muted font-medium hover:text-forest",
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
