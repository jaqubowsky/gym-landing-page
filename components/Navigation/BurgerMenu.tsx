"use client";

import React, { FC, ReactNode } from "react";
import { useTransition, animated } from "@react-spring/web";
import Image from "next/image";

interface BurgerMenuProps {
  children: ReactNode;
  showMenu: boolean; // State passed as prop
}

const BurgerMenu: FC<BurgerMenuProps> = ({ children, showMenu }) => {
  const transition = useTransition(showMenu, {
    from: { opacity: 0, x: "-100%" },
    enter: { opacity: 1, x: "0%" },
    leave: { opacity: 0, x: "-100%" },
    config: { duration: 200 },
  });

  return transition((styles, item) =>
    item ? (
      <animated.div
        style={styles}
        className="fixed z-50 flex h-full w-screen bg-neutral-700 justify-center"
      >
        <div className="flex flex-col items-center mt-10">
          <div className="h-48 w-48 flex-container mb-6">
            <Image
              src="https://res.cloudinary.com/doz2peb5r/image/upload/f_auto,q_auto/gym_logo_immgmy"
              alt="logo"
              className="object-contain w-full h-full"
              height={75}
              width={75}
            />
          </div>
          <div className="flex-container flex-col gap-16">{children}</div>
        </div>
      </animated.div>
    ) : null
  );
};

export default BurgerMenu;
