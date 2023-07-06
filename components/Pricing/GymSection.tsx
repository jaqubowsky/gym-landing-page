"use client";

import { useState } from "react";
import Section from "../Section/Section";
import ToggleOption from "../ToggleOption";
import Pass from "./Pass";

const GymSection = () => {
  const [isOptionOn, setIsOptionOn] = useState(false);

  const handleToggle = () => {
    setIsOptionOn(!isOptionOn);
  };

  console.log(isOptionOn)

  return (
    <Section id="gym" className="bg-neutral-800" innerStyle="md:max-w-4xl">
      <h2 className="text-6xl text-center font-bold mb-8 text-white drop-shadow-sm">
        Siłownia
      </h2>
      <ToggleOption
        isOn={isOptionOn}
        handleToggle={handleToggle}
        labelLeft="Wejście bez limitu"
        labelRight="Wejście do 16"
      />
      <Pass isOptionOn={isOptionOn} passPrice={120}/>
    </Section>
  );
};

export default GymSection;
