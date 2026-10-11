import { Container } from "@/components/layout/SectionContainer";
import { FooterBrand } from "@/components/layout/FooterBrand";
import { FooterColumn } from "@/components/layout/FooterColumn";
import { FOOTER_COLUMNS } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-forest text-white">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-6 lg:text-left">
          <FooterBrand />
          {FOOTER_COLUMNS.map((c) => (
            <FooterColumn key={c.title} {...c} />
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/70 items-center text-center md:flex-row md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} All rights reserved. Demonstration content.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="transition-colors hover:text-brand">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-brand">Terms and Conditions</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
