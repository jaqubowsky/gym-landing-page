import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { FC } from "react";

interface ButtonLink extends LinkProps {
  className?: string;
  href: string;
  children: React.ReactNode;
}

const ButtonLink: FC<ButtonLink> = ({ className, children, href }) => {
  return (
    <Link
      href={href}
      className={clsx(
        "py-4 px-10 rounded-sm text-neutral-800 uppercase font-bold drop-shadow-lg",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
