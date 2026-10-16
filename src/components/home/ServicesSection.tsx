import { ClipboardCheck, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/SectionContainer";
import { IMG } from "@/lib/images";

const benefits = [
  {
    icon: Users,
    title: "Personalized Property Assistance",
    text: "Shortlists shaped around your budget and priorities.",
  },
  {
    icon: Lightbulb,
    title: "Expert Real Estate Guidance",
    text: "Clear advice on localities, pricing and paperwork.",
  },
  {
    icon: ClipboardCheck,
    title: "End-to-End Buying Support",
    text: "Help from first search to final handover.",
  },
];

export function ServicesSection() {
  return (
    <Section tone="dark" id="services">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative mx-auto w-full max-w-md">
          <Photo
            src={IMG.about}
            alt="Contemporary home exterior"
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="aspect-portrait rounded-t-full rounded-b-3xl"
          />
        </Reveal>
        <Reveal className="text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">
            More than property search
          </p>
          <h2 className="mx-auto mt-3 max-w-lg text-3xl font-semibold leading-tight lg:mx-0 md:text-4xl">
            Make Every Property Decision Easier
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70 lg:mx-0 lg:text-lg">
            Explore services that simplify your next move, from property
            discovery to expert guidance.
          </p>
          <ul className="mt-8 space-y-5">
            {benefits.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="flex flex-col items-center gap-3 lg:flex-row lg:items-start lg:gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-brand">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-base text-white/70 lg:text-lg">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center lg:justify-start">
            <Button href="#contact" arrow>
              Explore Our Services
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
