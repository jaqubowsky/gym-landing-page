import React, { FC } from "react";

interface ToggleSwitchProps {
  isOn: boolean;
  handleToggle: () => void;
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({ isOn, handleToggle }) => {
  return (
    <div className="w-12" onClick={handleToggle}>
      <div className={`${isOn ? "bg-neutral-900" : "bg-white border-2 border-neutral-900"} cursor-pointer w-full h-full rounded-full transition-colors relative`}>
        <span
          className={`w-2/5 h-3/4 mx-2 bg-yellow-300 shadow-lg absolute rounded-full top-1/2 -left-1 -translate-y-1/2 transform transition-transform ${
            isOn ? "translate-x-5" : "translate-0"
          }`}
        ></span>
      </div>
    </div>
  );
};

export default ToggleSwitch;
