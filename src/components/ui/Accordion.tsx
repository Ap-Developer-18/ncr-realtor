"use client";
import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { accordionTransition } from "@/lib/motion";

interface Item { question: string; answer: string }

export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button" aria-expanded={isOpen} aria-controls={`${id}-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium lg:text-xl transition-colors duration-300 hover:text-brand focus-visible:ring-2 focus-visible:ring-brand"
              >
                {item.question}
                {isOpen ? <Minus className="h-5 w-5 shrink-0 text-brand" aria-hidden /> : <Plus className="h-5 w-5 shrink-0 text-brand" aria-hidden />}
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div id={`${id}-${i}`} role="region" {...accordionTransition} className="overflow-hidden">
                  <p className="pb-5 text-base leading-relaxed text-muted lg:text-lg">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
