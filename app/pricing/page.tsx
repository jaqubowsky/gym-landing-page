"use client";

import { useState } from "react";
import {
  FitnessSection,
  GymSection,
  MartialArtsSection,
  NotSelected,
} from "@/components/Pricing";
import { ArrowDown } from "react-feather";
import Select from "@/components/Select";
import Section from "@/components/Section/Section";

const options = [
  {
    id: 0,
    value: "Wybierz sekcję",
  },
  {
    id: 1,
    value: "Siłownia",
  },
  {
    id: 2,
    value: "Sztuki walki",
  },
  {
    id: 3,
    value: "Fitness / Joga",
  },
];

export default function Pricing() {
  const [selectedOption, setSelectedOption] = useState("Wybierz sekcję");

  const renderSection = () => {
    switch (selectedOption) {
      case "Siłownia":
        return <GymSection />;
      case "Sztuki walki":
        return <MartialArtsSection />;
      case "Fitness / Joga":
        return <FitnessSection />;
      default:
        return <NotSelected />;
    }
  };

  return (
    <Section className="bg-neutral-800 md:p-16" innerStyle="max-w-full">
      <div className="flex items-center justify-center h-32 w-32 animate-bounce">
        <ArrowDown className="text-white w-full h-full" />
      </div>
      <div className="flex w-[320px] md:w-[450px] z-[25]">
        <Select
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      {renderSection()}
    </Section>
  );
}
