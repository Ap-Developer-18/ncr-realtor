import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Logo } from "@/components/layout/Logo";

const socials = [
  { label: "Instagram", Icon: Instagram },
  { label: "Facebook", Icon: Facebook },
  { label: "X (Twitter)", Icon: Twitter },
  { label: "LinkedIn", Icon: Linkedin },
];

export function FooterBrand() {
  return (
    <div className="col-span-2">
      <div className="flex">
        <Logo />
      </div>
      <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base lg:max-w-sm">
        Thoughtfully selected homes, premium residences and commercial spaces,
        presented clearly.
      </p>
      <address
        id="contact-info"
        className="mt-5 space-y-1 text-sm not-italic text-white/70"
      >
        <p>
          Phone:{" "}
          <a
            href="tel:+917300070040"
            className="transition-colors hover:text-brand"
          >
            +91 73000 70040
          </a>
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:sumitsihag085@gmail.com"
            className="break-all transition-colors hover:text-brand"
          >
            sumitsihag085@gmail.com
          </a>
        </p>
        <p>Office: Sector 88B, Dwarka Expressway, Gurugram</p>
      </address>
      <div className="mt-5 flex gap-3">
        {socials.map(({ label, Icon }) => (
          <a
            key={label}
            href="#"
            aria-label={`${label} (link to be added)`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-300 hover:border-brand hover:text-brand focus-visible:ring-2 focus-visible:ring-brand"
          >
            <Icon className="h-4 w-4" aria-hidden />
          </a>
        ))}
      </div>
    </div>
  );
}
