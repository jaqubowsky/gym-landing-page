import { EmblaOptionsType } from "embla-carousel-react";
import Section from "../Section/Section";
import Carousel from "./Carousel";
import ButtonLink from "../ButtonLink";
import { mapImageResources, search } from "@/lib/cloudinary";
import Image from "next/image";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  slidesToScroll: 1,
  containScroll: "keepSnaps",
};

const CarouselSection = async () => {
  const { resources } = await search({
    expression: 'folder="gallery" AND resource_type="image"',
    max_results: "7",
    direction: "desc",
  });

  const images = mapImageResources(resources);

  const slidesEl = images.map((image) => {
    return (
      <div className="embla__slide" key={image.id}>
        <Image
          className="embla__slide__img cursor-pointer hover:scale-105 transition-all"
          style={{ backgroundImage: `url(${image.pixelate})` }}
          src={image.src}
          alt={image.title}
          width={1000}
          height={1000}
        />
      </div>
    );
  });

  return (
    <Section id="gallery" innerStyle="md:max-w-6xl">
      <h2 className="text-6xl font-bold mb-4">Galeria</h2>
      <h5 className="font-bold mb-8 lg:text-2xl">
        Zobacz zdjęcia z naszego klubu.
      </h5>
      <Carousel options={OPTIONS}>
        {slidesEl}
      </Carousel>
      <ButtonLink intent="yellow" hover="dark" className="mt-6" href="/gallery">
        Zobacz więcej
      </ButtonLink>
    </Section>
  );
};

export default CarouselSection;
