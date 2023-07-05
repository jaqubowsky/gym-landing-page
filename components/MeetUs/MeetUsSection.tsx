import Section from "../Section/Section";
import MeetUsBox from "./MeetUsBox";
import Andrzej from "@/assets/images/Andrzej.jpg";
import Alicja from "@/assets/images/Alicja.jpg";
import Pawel from "@/assets/images/about.png";
import { Carousel } from "../Carrousel";
import { EmblaOptionsType } from "embla-carousel-react";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  slidesToScroll: 1,
  containScroll: "keepSnaps",
};

const data = [
  {
    name: "Alicja",
    desc: "Personel",
    src: Alicja,
  },
  {
    name: "Paweł",
    desc: "Właściciel",
    src: Pawel,
  },
  {
    name: "Andrzej",
    desc: "Trener personalny",
    src: Andrzej,
  },
];

const MeetUsSection = () => {
  const meetUsBoxes = data.map((item) => {
    return (
      <MeetUsBox aboutData={item} key={item.name} />
    );
  });

  return (
    <Section id="meet-us" className="bg-neutral-800">
      <h2 className="font-bold text-6xl text-white mb-2">
        Poznaj <span className="text-yellow-300">nas!</span>
      </h2>
      <Carousel options={OPTIONS}>{meetUsBoxes}</Carousel>
    </Section>
  );
};

export default MeetUsSection;
