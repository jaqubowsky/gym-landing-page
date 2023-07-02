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
        "z-30 inset-0 items-center flex sticky justify-between md:justify-around bg-neutral-900 drop-shadow-md",
        className
      )}
    >
      {children}
    </nav>
  );
};

export default Nav;
