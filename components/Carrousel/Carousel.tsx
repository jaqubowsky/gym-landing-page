"use client";

import { FC } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
  options?: EmblaOptionsType;
  children?: React.ReactNode;
};

const Carousel: FC<PropType> = ({ options, children }) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container p-2 md:p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
