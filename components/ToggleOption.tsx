'use client'

import React, { FC } from "react";

interface ToggleSwitchProps {
  labelLeft: string;
  labelRight: string;
  isOn: boolean;
  handleToggle: () => void;
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({ isOn, handleToggle, labelLeft, labelRight }) => {

  return (
    <label className="inline-flex relative items-center w-[300px] h-16 mb-6">
      <input
        type="checkbox"
        className="absolute h-0 w-0 opacity-0"
        checked={isOn}
        onChange={handleToggle}
      />
      <span className="bg-white px-8 flex justify-between items-center cursor-pointer w-full h-full rounded-full transition-colors gap-10">
        <span
          className={`z-20 ${
            isOn ? "text-gray-600" : "text-white"
          } text-md font-semibold w-1/2 uppercase transform transition-colors drop-shadow-lg break-words text-center`}
        >
          {labelLeft}
        </span>
        <span
          className={`z-20 ${
            isOn ? "text-white" : "text-gray-600"
          } text-md font-semibold w-1/2 uppercase transform transition-colors text-center drop-shadow-lg break-words`}
        >
          {labelRight}
        </span>
      </span>
      <span
        className={`p-4 w-1/2 h-[80%] mx-2 bg-yellow-300  absolute rounded-full top-1/2 -translate-y-1/2 transform transition-transform ${
          isOn ? "translate-x-[135px]" : "translate-0"
        }`}
      ></span>
    </label>
  );
};

export default ToggleSwitch;
