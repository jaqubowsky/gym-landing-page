"use client";

import { useState } from "react";
import ToggleOption from "../ToggleOption";
import Pass from "./Pass";

const passes = [
  {
    price: 119,
    benefits: [
      "4 wejścia",
      "Ważny we wszystkich klubach",
      "Wstęp na sztuki walki",
    ],
  },
  {
    price: 139,
    benefits: [
      "8 wejśc",
      "Ważny we wszystkich klubach",
      "Wstęp na sztuki walki",
    ],
  },
  {
    price: 159,
    benefits: [
      "12 wejśc",
      "Ważny we wszystkich klubach",
      "Wstęp na sztuki walki",
    ],
  },
  {
    price: 179,
    benefits: [
      "16 wejść",
      "Ważny we wszystkich klubach",
      "Wstęp na sztuki walki",
    ],
  },
];

const MartialArtsSection = () => {
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
      <h5 className="text-gray-300 text-sm mt-2 mb-8">
        Zakup możliwy tylko stancjonarnie przy recepcji.
      </h5>
      <ToggleOption
        isOn={isOptionOn}
        handleToggle={handleToggle}
        labelLeft="Dorośli"
        labelRight="Dzieci"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {passesEl}
      </div>
    </>
  );
};

export default MartialArtsSection;
