"use client";

import { usePathname } from "next/navigation";
import NavigationItem from "./NavigationItem";
import Nav from "./Nav";
import useScreenSize from "@/hooks/useScreenSize";
import BurgerMenu from "./BurgerMenu";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

const navItems = [
  { name: "O nas", href: "/about" },
  { name: "Galeria", href: "/gallery" },
  { name: "Godziny otwarcia", href: "/schedule" },
  { name: "Cennik", href: "/pricing" },
  { name: "Kontakt", href: "/contact" },
];

const Navigation = () => {
  const screenSize = useScreenSize();
  const pathname = usePathname();

  const navItemsEl = navItems.map((item) => {

    const isActive = pathname === item.href;
    return (
      <NavigationItem
        target="_self"
        className={`text-4xl md:text-xl hover:text-yellow-300 md:hover:border-b-2 md:hover:border-yellow-300 tranition-all duration-100 ${
          isActive ? "text-yellow-300 border-b-2 border-yellow-300" : ""
        }`}
        href={item.href}
        key={item.name}
      >
        {item.name}
      </NavigationItem>
    );
  });

  if (screenSize < 768) {
    return (
      <Nav>
        <NavigationItem href="/" target="_self">
          <Image src={logo} alt="logo" height={100} width={100} />
        </NavigationItem>
        <BurgerMenu>{navItemsEl}</BurgerMenu>
      </Nav>
    );
  } else {
    return (
      <Nav>
        <NavigationItem href="/" target="_self">
          <Image src={logo} alt="logo" height={100} width={100} />
        </NavigationItem>
        {navItemsEl}
      </Nav>
    );
  }
};

export default Navigation;
