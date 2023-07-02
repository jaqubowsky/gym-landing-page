"use client";

import ButtonLink from "../ButtonLink";
import Section from "../Section/Section";
import { CldImage } from "next-cloudinary";

const About = () => {
  return (
    <Section className="bg-neutral-800" id="about">
      <h2 className="text-4xl text-center font-bold mb-8 text-white">O nas</h2>
      <p className="text-gray-100 drop-shadow-sm mb-8">
        <span className="text-yellow-300 text-xl">Palladium Fitness Club </span>
        to wyjątkowe miejsce, które oferuje nie tylko doskonałe wyposażenie, ale
        również niezrównane doświadczenie treningowe. Nasze studio jest
        przestrzenią stworzoną z myślą o entuzjastach fitnessu, niezależnie od
        ich poziomu zaawansowania. Bez względu na to, czy jesteś nowicjuszem czy
        doświadczonym sportowcem, Palladium Fitness Club zapewnia idealne
        środowisko do osiągnięcia swoich celów.
      </p>
      <ButtonLink href="/" className="bg-yellow-300">
        Dołącz
      </ButtonLink>
    </Section>
  );
};

export default About;
