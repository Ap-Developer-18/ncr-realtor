import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/SectionContainer";
import { IMG } from "@/lib/images";

export function FinalCTA() {
  return (
    <Section tone="dark" id="contact">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative mx-auto w-full max-w-md">
          <Photo
            src={IMG.cta}
            alt="Contemporary home exterior"
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="aspect-square rounded-t-full rounded-b-3xl"
          />
        </Reveal>
        <Reveal className="text-center lg:text-left">
          <h2 className="mx-auto max-w-lg text-3xl font-semibold leading-tight md:text-4xl lg:mx-0 lg:text-5xl">
            Your Next Move Starts Here
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/70 lg:mx-0 lg:text-lg">
            Tell us what you&apos;re looking for, and let us help you discover
            the right property.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
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
