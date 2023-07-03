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
              <NavigationItem href="/" target="_self">
                <Image
                  src={logo}
                  alt="logo"
                  height={200}
                  width={200}
                />
              </NavigationItem>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BurgerMenu;
