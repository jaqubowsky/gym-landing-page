import { EmblaOptionsType } from "embla-carousel-react";
import Section from "../Section/Section";
import Carousel from "./Carousel";
import ButtonLink from "../ButtonLink";
import { mapImageResources, search } from "@/lib/cloudinary";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  slidesToScroll: "auto",
  containScroll: "trimSnaps",
};

const Gallery = async () => {
  const { resources } = await search({
    expression: 'folder="gallery" AND resource_type="image"',
    max_results: "7",
    direction: "desc",
  });

  const images = mapImageResources(resources);

  return (
    <Section id="gallery" innerStyle="md:max-w-6xl">
      <h2 className="text-6xl font-bold mb-4">Galeria</h2>
      <h5 className="font-bold mb-8 lg:text-2xl">
        Zobacz zdjęcia z naszego klubu.
      </h5>
      <Carousel images={images} options={OPTIONS} />
      <ButtonLink className="bg-yellow-300 mt-6" href="/gallery">
        Zobacz więcej
      </ButtonLink>
    </Section>
  );
};

export default Gallery;
