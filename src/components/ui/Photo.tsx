import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  src: string; alt: string; className?: string; sizes?: string;
  priority?: boolean; zoom?: boolean;
}

export function Photo({ src, alt, className, sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw", priority, zoom }: Props) {
  return (
    <div className={cn("relative overflow-hidden bg-forest/5", className)}>
      <Image
        src={src} alt={alt} fill sizes={sizes} priority={priority}
        className={cn("object-cover", zoom && "transition-transform duration-500 group-hover:scale-105")}
      />
    </div>
  );
}
