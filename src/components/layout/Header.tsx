"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/SectionContainer";
import { Logo } from "@/components/layout/Logo";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { NavItem } from "@/components/layout/NavItem";
import { NAV } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-forest text-white">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <NavItem key={item.label} item={item} active={!item.href.includes("?") && pathname === item.href} />
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button href="/properties" variant="outline" className="hidden px-5 py-2 text-white sm:inline-flex">
            Browse Properties
          </Button>
          <button
            type="button" aria-expanded={open} aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 focus-visible:ring-2 focus-visible:ring-brand lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </Container>
      <MobileNavigation open={open} onNavigate={() => setOpen(false)} />
    </header>
  );
}
