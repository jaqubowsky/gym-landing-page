"use client";

import NavigationItem from "./NavigationItem";
import Nav from "./Nav";
import useScreenSize from "@/hooks/useScreenSize";
import BurgerMenu from "./BurgerMenu";
import CloudinaryImage from "../CloudinaryImage";

const navItems = [
  { name: "O nas", href: "/about" },
  { name: "Galeria", href: "/gallery" },
  { name: "Godziny otwarcia", href: "/schedule" },
  { name: "Cennik", href: "/price" },
  { name: "Kontakt", href: "/contact" },
];

const Navigation = () => {
  const screenSize = useScreenSize();

  const navItemsEl = navItems.map((item) => {
    return (
      <NavigationItem target="_self" className="text-4xl" href={item.href} key={item.name}>
        {item.name}
      </NavigationItem>
    );
  });

  if (screenSize <= 425) {
    return (
      <Nav>
        <NavigationItem href="/" target="_self">
          <CloudinaryImage
            src="/gym_logo_immgmy"
            alt="logo"
            height={100}
            width={100}
          />
        </NavigationItem>
        <BurgerMenu>{navItemsEl}</BurgerMenu>
      </Nav>
    );
  } else {
    return <Nav>{navItemsEl}</Nav>;
  }
};

export default Navigation;
