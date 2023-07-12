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
        "z-[9999] top-0 left-0 sticky md:p-1 w-full h-24 bg-neutral-900 drop-shadow-md shadow-lg flex md:justify-center",
        className
      )}
    >
      <div className="flex items-center w-full justify-between md:justify-around md:w-5/6 lg:w-4/5 xl:w-1/2">
        {children}
      </div>
    </nav>
  );
};

export default Nav;
