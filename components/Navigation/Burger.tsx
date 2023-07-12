import { FC, HTMLAttributes } from "react";

interface Burger extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClick: () => void;
}

const Burger: FC<Burger> = ({ isOpen, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute right-4 transition-all flex flex-col justify-around w-8 h-8 bg-transparent cursor-pointer p-0 z-20"
    >
      <div
        className={`relative bg-white h-1 w-8" ${
          isOpen ? "bg-yellow-300" : ""
        }`}
      />
      <div
        className={`relative bg-white h-1 w-6" ${
          isOpen ? "bg-yellow-300" : ""
        }`}
      />
      <div
        className={`relative bg-white h-1 w-8 ${isOpen ? "bg-yellow-300" : ""}`}
      />
    </div>
  );
};

export default Burger;
