import clsx from "clsx";
import { FC, ReactNode } from "react";
import NavigationItem from "./NavigationItem";
import Image from "next/image";

interface Nav {
  className?: string;
  children: ReactNode;
}

const Nav: FC<Nav> = ({ className, children }) => {
  return (
    <nav
      className={clsx(
        "z-30 inset-0 sticky md:p-1 w-full bg-neutral-900 drop-shadow-md shadow-lg flex md:justify-center",
        className
      )}
    >
      <div className="flex items-center w-full justify-between md:justify-around md:w-5/6 lg:w-4/5 xl:w-1/2">
        <NavigationItem href="/" target="_self">
          <Image
            src="https://res.cloudinary.com/doz2peb5r/image/upload/f_auto,q_auto/gym_logo_immgmy"
            alt="logo"
            height={100}
            width={100}
          />
        </NavigationItem>
        {children}
      </div>
    </nav>
  );
};

export default Nav;
