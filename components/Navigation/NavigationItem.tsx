import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";

interface NavigationItem extends LinkProps {
  children: ReactNode;
  className?: string;
  target?: string;
}

const NavigationItem: FC<NavigationItem> = ({
  children,
  target = "_blank",
  className,
  ...props
}) => {
  return (
    <Link target={target} className={clsx("drop-shadow-md font-bold text-white", className)} {...props}>
      {children}
    </Link>
  );
};

export default NavigationItem;
