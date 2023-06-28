import { NavigationItem } from "./Navigation";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import clsx from "clsx";

interface Logo {
  logo: StaticImageData | string;
  className?: string;
}

const Logo: FC<Logo> = ({ logo, className }) => {
  return (
    <NavigationItem
      className={clsx("h-28 w-28", className)}
      href="/"
      key="Home"
    >
      <Image className="max-w-full" src={logo} alt="gym logo" />
    </NavigationItem>
  );
};

export default Logo;
