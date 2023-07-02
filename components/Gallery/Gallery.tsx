import { EmblaOptionsType } from "embla-carousel-react";
import Section from "../Section/Section";
import Carousel from "./Carousel";
import ButtonLink from "../ButtonLink";
import { mapImageResources, search } from "@/lib/cloudinary";
import { Suspense } from "react";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  slidesToScroll: "auto",
  containScroll: "trimSnaps",
};

const Gallery = async () => {
  const { resources } = await search({
    expression: 'folder="gallery" AND resource_type="image"',
    max_results: 4,
    direction: "desc",
  });

  const images = mapImageResources(resources);

  return (
    <Section id="gallery">
      <h2 className="text-4xl font-bold mb-4">Galeria</h2>
      <h5 className="font-bold mb-8">Zobacz zdjęcia z naszego klubu.</h5>
      <Suspense fallback={<div>Loading...</div>}>
        <Carousel images={images} options={OPTIONS} />
      </Suspense>
      <ButtonLink className="bg-yellow-300 mt-6" href="/gallery">
        Zobacz więcej
      </ButtonLink>
    </Section>
  );
};

export default Gallery;
