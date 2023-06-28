"use client";

import NavigationItem from "./NavigationItem";
import Nav from "./Nav";
import useScreenSize from "@/hooks/useScreenSize";
import BurgerMenu from "./BurgerMenu";
import logo from "@/assets/images/gym_logo.png";
import Logo from "../Logo";

const navItems = [
  { name: "O nas", href: "/about" },
  { name: "Rozpiska", href: "/scheudle" },
  { name: "Galeria", href: "/gallery" },
  { name: "Kontakt", href: "/contact" },
];

const Navigation = () => {
  const screenSize = useScreenSize();

  const navItemsEl = navItems.map((item) => {
    return (
      <NavigationItem className="text-4xl" href={item.href} key={item.name}>
        {item.name}
      </NavigationItem>
    );
  });

  if (screenSize <= 425) {
    return (
      <Nav>
        <BurgerMenu>
          <Logo className="h-40 w-40" logo={logo} />
          {navItemsEl}
        </BurgerMenu>
      </Nav>
    );
  } else {
    return <Nav>{navItemsEl}</Nav>;
  }
};

export default Navigation;
