import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { imageReveal } from "@/lib/motion";
import { IMG } from "@/lib/images";

export function HeroImages() {
  return (
    <Reveal variants={imageReveal} className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <Photo
        src={IMG.hero} alt="Modern architectural home with large windows at dusk" priority
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="aspect-portrait rounded-b-3xl rounded-t-full"
      />
      <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 text-forest shadow-lg sm:-left-4">
        <Photo src={IMG.willow} alt="Willow Heights exterior" sizes="56px" className="h-14 w-14 rounded-xl" />
        <div>
          <p className="text-sm font-semibold">Willow Heights</p>
          <p className="text-xs text-muted">New Gurugram, sample listing</p>
        </div>
      </div>
    </Reveal>
  );
}
