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
        "z-50 top-0 items-center left-0 w-full flex sticky justify-between bg-neutral-900 drop-shadow-md-",
        className
      )}
    >
      {children}
    </nav>
  );
};

export default Nav;
