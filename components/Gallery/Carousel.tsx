"use client";

import { FC } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import CloudinaryImage from "../CloudinaryImage";
import { image } from "../Lightbox/Lightbox";
import { useRouter } from "next/navigation";

type PropType = {
  images: image[];
  options?: EmblaOptionsType;
};

const Carousel: FC<PropType> = ({ options, images }) => {
  const router = useRouter();

  const navigateToGallery = () => {
    router.push("/gallery");
  };

  const slidesEl = images.map((image) => {
    return (
      <div
        className="relative h-64 flex-[0_0_auto] w-full md:w-1/3 gap-6"
        key={image.id}
        onClick={navigateToGallery}
      >
        <CloudinaryImage
          fill
          className="object-cover h-full w-full"
          src={image.src}
          alt="Your alt text"
        />
      </div>
    );
  });

  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex">{slidesEl}</div>
    </div>
  );
};

export default Carousel;
