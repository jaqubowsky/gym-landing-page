import { cva, VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import { FC } from "react";

const buttonLinkClasses = cva(
  [
    "cursor-pointer",
    "rounded-sm",
    "text-neutral-800",
    "font-bold",
    "drop-shadow-lg",
    "transition-all",
    "duration-300",
    "delay-75",
    "hover:scale-105",
    "focus:scale-105",
    "ease-in-out",
  ],
  {
    variants: {
      intent: {
        yellow: ["bg-yellow-300", "uppercase"],
      },
      hover: {
        dark: [
          "hover:bg-neutral-800",
          "hover:text-white",
          "focus:bg-neutral-800",
          "focus:text-white",
        ],
        white: [
          "hover:bg-white",
          "hover:text-neutral-800",
          "focus:bg-white",
          "focus:text-neutral-800",
        ],
      },
      size: {
        small: ["text-md", "px-3", "py-1"],
        medium: ["text-lg", "px-6", "py-2"],
        large: ["text-xlg", "px-10", "py-4"],
      },
    },
    defaultVariants: {
      intent: "yellow",
      size: "medium",
      hover: "white",
    },
  }
);

interface ButtonLink extends LinkProps, VariantProps<typeof buttonLinkClasses> {
  className?: string;
  href: string;
  children: React.ReactNode;
}

const ButtonLink: FC<ButtonLink> = ({
  className,
  children,
  href,
  intent,
  hover,
  size,
  ...props
}) => {
  return (
    <Link
      {...props}
      href={href}
      className={buttonLinkClasses({ intent, size, hover, className })}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
