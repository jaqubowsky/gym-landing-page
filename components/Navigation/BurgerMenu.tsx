"use client";

import { FC, ReactNode, useState } from "react";
import Burger from "./Burger";
import { AnimatePresence, motion } from "framer-motion";
import NavigationItem from "./NavigationItem";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

interface BurgerMenu {
  children: ReactNode;
}

const BurgerMenu: FC<BurgerMenu> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      <Burger isOpen={isOpen} onClick={toggleOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-0 top-0 w-screen h-screen bg-neutral-700 flex items-center justify-center"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, height: "100vh", x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center justify-around h-3/4">
              <div className="h-48 w-48 flex-container">
                <Image
                  src="https://res.cloudinary.com/doz2peb5r/image/upload/f_auto,q_auto/gym_logo_immgmy"
                  alt="logo"
                  className="object-contain w-full h-full"
                  height={100}
                  width={100}
                />
              </div>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BurgerMenu;
