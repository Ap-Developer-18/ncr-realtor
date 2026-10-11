"use client";
import { KeyboardEvent, useEffect, useRef, useState } from "react";

export function useDropdown(count: number, onPick: (index: number) => void) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") return setOpen(false);
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
      const step = e.key === "ArrowDown" ? 1 : -1;
      setActive((a) => (a + step + count) % count);
    } else if ((e.key === "Enter" || e.key === " ") && open) {
      e.preventDefault();
      onPick(active);
      setOpen(false);
    }
  };
  return { open, setOpen, active, setActive, ref, onKeyDown };
}
