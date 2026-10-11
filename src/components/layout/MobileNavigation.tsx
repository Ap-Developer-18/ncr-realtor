"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { NAV } from "@/data/site";

interface Props { open: boolean; onNavigate: () => void }

export function MobileNavigation({ open, onNavigate }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          id="mobile-nav" aria-label="Mobile"
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="border-t border-white/10 bg-forest px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.label} className="border-b border-white/10 last:border-0">
                <Link href={item.href} onClick={onNavigate} className="block py-3 text-base font-medium text-white transition-colors hover:text-brand">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-2 ml-4 flex flex-col">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} onClick={onNavigate} className="block py-2 text-sm text-white/70 transition-colors hover:text-brand">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
