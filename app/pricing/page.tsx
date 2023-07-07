"use client";

import { useState, Fragment } from "react";
import {
  FitnessSection,
  GymSection,
  MartialArtsSection,
  PricingSection,
} from "@/components/Pricing";
import { Listbox, Transition } from "@headlessui/react";

const options = [
  {
    id: 0,
    value: "",
    label: "Wybierz sekcję",
  },
  {
    id: 1,
    value: "Siłownia",
    label: "Siłownia",
  },
  {
    id: 2,
    value: "Sztuki walki",
    label: "Sztuki walki",
  },
  {
    id: 3,
    value: "Fitness / Joga",
    label: "Fitness / Joga",
  },
];

export default function Pricing() {
  const [selectedOption, setSelectedOption] = useState("");

  const renderSection = () => {
    switch (selectedOption) {
      case "Siłownia":
        return <GymSection />;
      case "Sztuki walki":
        return <MartialArtsSection />;
      case "Fitness / Joga":
        return <FitnessSection />;
      default:
        return null;
    }
  };

  return (
    <PricingSection>
      <div className="flex w-[300px] z-40 mb-10">
        <Listbox value={selectedOption} onChange={setSelectedOption}>
          <div className="w-full mt-1 relative">
            <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-yellow-300 sm:text-sm">
              <span className="block truncate">{selectedOption}</span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={option.value}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {option.label}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      {renderSection()}
    </PricingSection>
  );
}
