import clsx from "clsx";
import { FC, ReactNode } from "react";

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
        {children}
      </div>
    </nav>
  );
};

export default Nav;
