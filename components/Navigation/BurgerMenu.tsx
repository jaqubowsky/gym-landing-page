import { FC, ReactNode } from "react";
import Burger from "./Burger";
import Image from "next/image";

interface BurgerMenu {
  children: ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
}

const BurgerMenu: FC<BurgerMenu> = ({ children, isOpen, toggleOpen }) => {
  return (
    <>
      <Burger isOpen={isOpen} onClick={toggleOpen} />
      <div
        className={`absolute will-change-transform transition-all filter duration-300 delay-75 left-0 top-0 w-screen h-screen bg-neutral-700 items-center justify-center ${
          isOpen ? "slideIn flex" : "hidden will-change-auto"
        } `}
      >
        <div className="flex flex-col items-center justify-around h-3/4">
          <div className="h-48 w-48 flex-container">
            <Image
              src="https://res.cloudinary.com/doz2peb5r/image/upload/f_auto,q_auto/gym_logo_immgmy"
              alt="logo"
              className="object-contain w-full h-full"
              height={75}
              width={75}
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
