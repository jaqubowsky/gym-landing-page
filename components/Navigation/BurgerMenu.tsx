import { FC, ReactNode } from "react";
import Image from "next/image";

interface BurgerMenu {
  children: ReactNode;
}

const BurgerMenu: FC<BurgerMenu> = ({ children }) => {
  return (
    <>
      <div
        className={`will-change-transform slideIn flex transition-all duration-300 h-full w-screen bg-neutral-700 justify-center`}
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
      </div>
    </>
  );
};

export default BurgerMenu;
