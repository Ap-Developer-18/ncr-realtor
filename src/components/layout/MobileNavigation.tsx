"use client";
import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { NAV } from "@/data/site";

interface Props {
  open: boolean;
  onNavigate: () => void;
}

// Header ki height ke hisaab se adjust karo (e.g. h-16 = 64px, h-20 = 80px)
const HEADER_H = "72px";

export function MobileNavigation({ open, onNavigate }: Props) {
  // Menu khula ho to page scroll lock + Escape se band
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onNavigate();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onNavigate]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Blur backdrop: header ke neeche ka page blur, header sharp rahega */}
          <motion.div
            key="backdrop"
            aria-hidden
            onClick={onNavigate}
            style={{ top: HEADER_H }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          />

          {/* Fixed menu panel, header ke neeche */}
          <motion.nav
            key="panel"
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{ top: HEADER_H }}
            className="fixed inset-x-0 bottom-0 z-50 overflow-y-auto overscroll-contain border-t border-white/10 bg-forest px-4 pb-6 pt-2 shadow-2xl lg:hidden"
          >
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li
                  key={item.label}
                  className="border-b border-white/10 last:border-0"
                >
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="block py-3 text-base font-medium text-white transition-colors hover:text-brand"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mb-2 ml-4 flex flex-col">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            onClick={onNavigate}
                            className="block py-2 text-sm text-white/70 transition-colors hover:text-brand"
                          >
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
        </>
      )}
    </AnimatePresence>
  );
}
