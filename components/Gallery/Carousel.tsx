"use client";

import { FC } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import imageByIndex from "@/utils/getImageByIndex";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Carousel: FC<PropType> = ({ options, slides }) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex">
        {slides.map((index) => (
          <div className="relative h-64 flex-[0_0_auto] w-full md:w-1/3 gap-6" key={index}>
            <Image
              fill
              className="object-cover"
              src={imageByIndex(index)}
              alt="Your alt text"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
