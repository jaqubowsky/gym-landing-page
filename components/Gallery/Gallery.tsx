import { EmblaOptionsType } from "embla-carousel-react";
import Section from "../Section/Section";
import Carousel from "./Carousel";
import { images } from "@/utils/getImageByIndex";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  slidesToScroll: "auto",
  containScroll: "trimSnaps",
};
const SLIDES_COUNT = images.length;
const SLIDES = Array.from(Array(SLIDES_COUNT).keys());

const Gallery = () => {
  return (
    <Section id="gallery">
      <h2 className="text-4xl font-bold mb-8">Galeria</h2>
      <Carousel slides={SLIDES} options={OPTIONS} />
    </Section>
  );
};

export default Gallery;
