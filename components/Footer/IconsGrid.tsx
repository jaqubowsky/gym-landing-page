"use client";

import { Facebook, Instagram, Mail } from "react-feather";
import { NavigationItem } from "../Navigation";

const icons = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/PalladiumPultusk",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/fitnessclubpalladium/",
  },
  {
    icon: Mail,
    href: "mailto:recepcja.braingym@op.pl",
  },
];

const IconsGrid = () => {
  const iconsEl = icons.map((icon) => {
    const Icon = icon.icon;

    return (
      <NavigationItem
        className="h-auto w-auto"
        href={icon.href}
        key={icon.href}
      >
        <Icon className="text-neutral-900" />
      </NavigationItem>
    );
  });

  return (
    <div className="grid grid-cols-3 items-center justify-center gap-16">
      {iconsEl}
    </div>
  );
};

export default IconsGrid;
