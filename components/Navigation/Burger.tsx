import { FC, HTMLAttributes } from "react";

interface Burger extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClick: () => void;
}

const Burger: FC<Burger> = ({ isOpen, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="mr-2 flex flex-col justify-around w-8 h-8 bg-transparent cursor-pointer p-0 z-20"
    >
      <div
        className={`relative bg-white h-1 w-8 transition-all duration-300 delay-75" ${
          isOpen ? "bg-yellow-300 transform rotate-45 translate-y-[12px]" : ""
        }`}
      />
      <div
        className={`relative bg-white h-1 w-8 opacity-1 transition-all duration-300 delay-75" ${
          isOpen ? "bg-yellow-300 opacity-0" : ""
        }`}
      />
      <div
        className={`relative bg-white h-1 w-8 transition-all duration-200 delay-75 ${
          isOpen ? "bg-yellow-300 -rotate-45 transform -translate-y-[9px]" : ""
        }`}
      />
    </div>
  );
};

export default Burger;
