"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import NavigationItem from "./NavigationItem";
import Nav from "./Nav";
import useScreenSize from "@/hooks/useScreenSize";
import BurgerMenu from "./BurgerMenu";
import Image from "next/image";
import Burger from "./Burger";

const navItems = [
  { name: "Poznaj nas", href: "/meet-us" },
  { name: "Galeria", href: "/gallery" },
  { name: "Godziny otwarcia", href: "/schedule" },
  { name: "Cennik", href: "/pricing" },
];

const Navigation = () => {
  const screenSize = useScreenSize();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItemsEl = navItems.map((item) => {
    const isActive = pathname === item.href;
    return (
      <NavigationItem
        target="_self"
        className={`text-4xl md:text-xl hover:text-yellow-300 md:hover:border-b-2 text-center md:hover:border-yellow-300 tranition-all duration-100 ${
          isActive ? "text-yellow-300 border-b-2 border-yellow-300" : ""
        }`}
        href={item.href}
        key={item.name}
        onClick={closeMenu}
      >
        {item.name}
      </NavigationItem>
    );
  });

  if (screenSize < 768) {
    return (
      <>
        <Nav>
          <NavigationItem href="/" target="_self">
            <Image
              src="https://res.cloudinary.com/doz2peb5r/image/upload/f_auto,q_auto/gym_logo_immgmy"
              alt="logo"
              height={100}
              width={100}
              onClick={closeMenu}
            />
          </NavigationItem>
          <Burger isOpen={isOpen} onClick={toggleOpen} />
        </Nav>
        <BurgerMenu showMenu={isOpen}>{navItemsEl}</BurgerMenu>
      </>
    );
  } else {
    return (
      <Nav>
        <NavigationItem href="/" target="_self">
          <Image
            src="https://res.cloudinary.com/doz2peb5r/image/upload/f_auto,q_auto/gym_logo_immgmy"
            alt="logo"
            height={100}
            width={100}
            onClick={closeMenu}
          />
        </NavigationItem>
        {navItemsEl}
      </Nav>
    );
  }
};

export default Navigation;
