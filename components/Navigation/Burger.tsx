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
        className={`relative bg-white h-1 w-8 transition-all duration-300 will-change-transform" ${
          isOpen ? "bg-yellow-300 transform rotate-45 translate-y-[12px]" : "will-change-auto"
        }`}
      />
      <div
        className={`relative bg-white h-1 w-8 opacity-1 transition-all duration-300 will-change-transform" ${
          isOpen ? "bg-yellow-300 opacity-0" : "will-change-auto"
        }`}
      />
      <div
        className={`relative bg-white h-1 w-8 transition-all duration-200 will-change-transform ${
          isOpen ? "bg-yellow-300 -rotate-45 transform -translate-y-[9px]" : "will-change-auto"
        }`}
      />
    </div>
  );
};

export default Burger;
