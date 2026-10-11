import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/SectionContainer";
import { HeroImages } from "@/components/home/HeroImages";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function HeroSection() {
  return (
    <section className="bg-forest pb-28 pt-12 text-white md:pt-16 lg:pb-32">
      <Container>
        <RevealGroup className="grid items-center gap-14 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <RevealItem>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand sm:text-sm">
                Find a place to call home
              </p>
            </RevealItem>
            <RevealItem>
              <h1 className="mx-auto mt-4 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl lg:mx-0 lg:text-6xl">
                Find the Right Property for Your Next Chapter
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/70 lg:mx-0 lg:text-xl">
                Discover thoughtfully selected homes, premium residences, and commercial spaces in the locations that matter to you.
              </p>
            </RevealItem>
            <RevealItem className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button href="/properties" arrow>Explore Properties</Button>
              <Button href="/projects" variant="outline" className="text-white">Discover Projects</Button>
            </RevealItem>
          </div>
          <HeroImages />
        </RevealGroup>
      </Container>
    </section>
  );
}
