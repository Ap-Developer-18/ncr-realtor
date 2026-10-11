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
      <div className="flex justify-center lg:justify-start"><Logo /></div>
      <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-white/70 lg:mx-0">
        Thoughtfully selected homes, premium residences and commercial spaces, presented clearly.
      </p>
      <address id="contact-info" className="mt-6 space-y-1 text-sm not-italic text-white/70">
        <p>Phone: [Add phone number]</p>
        <p>Email: [Add email address]</p>
        <p>Office: [Add office address]</p>
      </address>
      <div className="mt-6 flex justify-center gap-3 lg:justify-start">
        {socials.map(({ label, Icon }) => (
          <a key={label} href="#" aria-label={`${label} (link to be added)`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-300 hover:border-brand hover:text-brand focus-visible:ring-2 focus-visible:ring-brand">
            <Icon className="h-4 w-4" aria-hidden />
          </a>
        ))}
      </div>
    </div>
  );
}
