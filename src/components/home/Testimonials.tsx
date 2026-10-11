"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/layout/SectionContainer";
import { IconButton } from "@/components/ui/IconButton";
import { Photo } from "@/components/ui/Photo";
import { testimonials } from "@/data/testimonials";

const ctrl = "border-white text-white hover:bg-white hover:text-brand";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d: number) => setI((x) => (x + d + testimonials.length) % testimonials.length);
  return (
    <Section tone="brand" id="testimonials">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="text-center lg:text-left" role="region" aria-roledescription="carousel" aria-label="Customer stories">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/80">Demonstration content</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">Stories From Our Property Buyers</h2>
          <div aria-live="polite" className="mt-8 min-h-48">
            <AnimatePresence mode="wait">
              <motion.figure key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
                <blockquote className="mx-auto max-w-lg text-lg leading-relaxed sm:text-xl lg:mx-0 lg:text-2xl">“{t.quote}”</blockquote>
                <figcaption className="mt-6">
                  <span className="block text-lg font-semibold">{t.name}</span>
                  <span className="text-sm text-white/90">{t.role}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            <IconButton label="Previous testimonial" onClick={() => go(-1)} className={ctrl}><ChevronLeft className="h-5 w-5" aria-hidden /></IconButton>
            <IconButton label="Next testimonial" onClick={() => go(1)} className={ctrl}><ChevronRight className="h-5 w-5" aria-hidden /></IconButton>
            <span className="ml-2 text-sm">{i + 1} / {testimonials.length}</span>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <Photo src={t.image} alt={`Portrait for demonstration testimonial from ${t.name}`} sizes="(min-width: 1024px) 384px, 90vw" className="aspect-portrait rounded-b-2xl rounded-t-full" />
        </div>
      </div>
    </Section>
  );
}
