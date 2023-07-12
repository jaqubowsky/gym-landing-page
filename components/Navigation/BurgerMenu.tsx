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
      {isOpen && (
        <div className="absolute slideIn left-0 top-0 w-screen h-screen bg-neutral-700 flex items-center justify-center">
          <div className="flex flex-col items-center justify-around h-3/4">
            <div className="h-48 w-48 flex-container">
              <Image
                src="https://res.cloudinary.com/doz2peb5r/image/upload/f_auto,q_auto/gym_logo_immgmy"
                alt="logo"
                className="object-contain w-full h-full"
                height={200}
                width={200}
                priority
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
