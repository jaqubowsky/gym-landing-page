import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";

interface NavigationItem extends LinkProps {
  children: ReactNode;
  className?: string;
}

const NavigationItem: FC<NavigationItem> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Link className={clsx("drop-shadow-md font-bold text-white", className)} {...props}>
      {children}
    </Link>
  );
};

export default NavigationItem;
