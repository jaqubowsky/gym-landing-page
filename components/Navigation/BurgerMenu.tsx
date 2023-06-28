"use client";

import { FC, ReactNode, useState } from "react";
import Burger from "./Burger";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/images/gym_logo.png";
import Logo from "../Logo";

interface BurgerMenu {
  children: ReactNode;
}

const BurgerMenu: FC<BurgerMenu> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Logo logo={logo} />
      <Burger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-0 top-0 w-full h-screen bg-neutral-700 flex items-center justify-center"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, height: "100vh", x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center justify-around h-3/4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BurgerMenu;
