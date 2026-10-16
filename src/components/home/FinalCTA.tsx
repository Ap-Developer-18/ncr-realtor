import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/SectionContainer";
import { IMG } from "@/lib/images";

export function FinalCTA() {
  return (
    <Section tone="dark" id="contact">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <Reveal className="relative w-full lg:mx-auto lg:max-w-md">
          <Photo
            src={IMG.cta}
            alt="Contemporary home exterior"
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="aspect-square rounded-2xl"
          />
        </Reveal>
        <Reveal>
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl lg:max-w-lg lg:text-5xl">
            Your Next Move Starts Here
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70 lg:max-w-lg lg:text-lg">
            Tell us what you&apos;re looking for, and let us help you discover
            the right property.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/properties" arrow>
              Find Your Property
            </Button>
            <Button
              href="#contact-info"
              variant="outline"
              className="text-white"
            >
              Talk to an Expert
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
