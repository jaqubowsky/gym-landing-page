"use client";

import { FC } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { image } from "../Lightbox/Lightbox";
import { useRouter } from "next/navigation";
import Image from "next/image";

type PropType = {
  images: image[];
  options?: EmblaOptionsType;
};

const Carousel: FC<PropType> = ({ options, images }) => {
  const router = useRouter();

  const navigateToGallery = () => {
    router.push("/gallery");
  };

  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  const slidesEl = images.map((image) => {
    return (
      <div
        className="relative h-64 flex-[1_0_auto] w-full md:w-[49.3%] lg:w-[32.5%] md:h-80 lg:h-96cursor-pointer"
        key={image.id}
        onClick={navigateToGallery}
      >
        <Image
          className="object-cover h-full"
          style={{ backgroundImage: `url(${image.pixelate})` }}
          src={image.src}
          alt="Your alt text"
          fill
        />
      </div>
    );
  });

  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex md:gap-1 lg:gap-2">{slidesEl}</div>
    </div>
  );
};

export default Carousel;
