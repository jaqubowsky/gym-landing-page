"use client";

import { motion } from "framer-motion";
import { FC, HTMLAttributes } from "react";

interface Burger extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClick: () => void;
}

const Burger: FC<Burger> = ({ isOpen, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="absolute right-4 transition-all flex flex-col justify-around w-8 h-8 bg-transparent cursor-pointer p-0 z-20"
    >
      <motion.div
        animate={{
          rotate: isOpen ? 45 : 0,
          y: !isOpen ? 0 : -5,
        }}
        className={`relative bg-white h-1 w-8" ${
          isOpen ? "bg-yellow-300" : ""
        }`}
      ></motion.div>
      <motion.div
        animate={{
          opacity: isOpen ? 0 : 1,
          transform: isOpen ? "translateY(-20px)" : "translateY(0px)",
        }}
        className={`relative bg-white h-1 w-6" ${
          isOpen ? "bg-yellow-300" : ""
        }`}
      ></motion.div>
      <motion.div
        animate={{
          rotate: isOpen ? -45 : 0,
          y: !isOpen ? 0 : -27,
        }}
        className={`relative bg-white h-1 w-8 ${isOpen ? "bg-yellow-300" : ""}`}
      ></motion.div>
    </motion.div>
  );
};

export default Burger;
