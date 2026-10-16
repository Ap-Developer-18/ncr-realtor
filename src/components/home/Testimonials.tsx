"use client";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { A11y, Autoplay, EffectFade, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/layout/SectionContainer";
import { IconButton } from "@/components/ui/IconButton";
import { Photo } from "@/components/ui/Photo";
import { testimonials } from "@/data/testimonials";

const ctrl = "border-white text-white hover:bg-white hover:text-brand";

export function Testimonials() {
  const textRef = useRef<SwiperType | null>(null);
  const photoRef = useRef<SwiperType | null>(null);
  const [i, setI] = useState(0);

  // Text swiper is the "master"; the photo swiper just follows it.
  const onChange = (s: SwiperType) => {
    setI(s.realIndex);
    photoRef.current?.slideToLoop(s.realIndex);
  };

  return (
    <Section tone="brand" id="testimonials">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div
          className="min-w-0 text-center lg:text-left"
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer stories"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
            Demonstration content
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
            Stories From Our Property Buyers
          </h2>

          <Swiper
            className="mt-8 min-h-48 !overflow-hidden"
            modules={[EffectFade, Autoplay, Keyboard, A11y]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            speed={500}
            autoHeight
            keyboard={{ enabled: true }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            a11y={{ enabled: true }}
            onSwiper={(s) => (textRef.current = s)}
            onSlideChange={onChange}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <figure>
                  <blockquote className="mx-auto max-w-lg text-lg leading-relaxed sm:text-xl lg:mx-0 lg:text-2xl">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6">
                    <span className="block text-lg font-semibold">
                      {t.name}
                    </span>
                    <span className="text-sm text-white/90">{t.role}</span>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            <IconButton
              label="Previous testimonial"
              onClick={() => textRef.current?.slidePrev()}
              className={ctrl}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </IconButton>
            <IconButton
              label="Next testimonial"
              onClick={() => textRef.current?.slideNext()}
              className={ctrl}
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </IconButton>
            <span className="ml-2 text-sm" aria-live="polite">
              {i + 1} / {testimonials.length}
            </span>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm min-w-0">
          <Swiper
            modules={[EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            speed={500}
            allowTouchMove={false}
            className="rounded-b-2xl rounded-t-full"
            onSwiper={(s) => (photoRef.current = s)}
            aria-hidden
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <Photo
                  src={t.image}
                  alt={`Portrait for demonstration testimonial from ${t.name}`}
                  sizes="(min-width: 1024px) 384px, 90vw"
                  className="aspect-portrait rounded-b-2xl rounded-t-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Section>
  );
}
