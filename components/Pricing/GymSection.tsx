"use client";

import { useState } from "react";
import Section from "../Section/Section";
import ToggleOption from "../ToggleOption";
import Pass from "./Pass";

const passes = [
  {
    price: 120,
    benefits: ["4 wejścia", "Ważny we wszystkich klubach", "Wstęp do siłowni"],
  },
  {
    price: 135,
    benefits: ["8 wejśc", "Ważny we wszystkich klubach", "Wstęp do siłowni"],
  },
  {
    price: 145,
    benefits: ["12 wejśc", "Ważny we wszystkich klubach", "Wstęp do siłowni"],
  },
  {
    price: 155,
    benefits: ["OPEN", "Ważny we wszystkich klubach", "Wstęp do siłowni"],
  },
];

const GymSection = () => {
  const [isOptionOn, setIsOptionOn] = useState(false);

  const handleToggle = () => {
    setIsOptionOn(!isOptionOn);
  };

  const passesEl = passes.map((pass) => {
    return (
      <Pass
        isOptionOn={isOptionOn}
        passPrice={pass.price}
        benefits={pass.benefits}
        key={pass.price}
      />
    );
  });

  return (
    <>
      <h2 className="text-6xl text-center font-bold mb-8 text-white drop-shadow-sm">
        Siłownia
      </h2>
      <ToggleOption
        isOn={isOptionOn}
        handleToggle={handleToggle}
        labelLeft="Wejście bez limitu"
        labelRight="Wejście do 16"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {passesEl}
      </div>
    </>
  );
};

export default GymSection;
