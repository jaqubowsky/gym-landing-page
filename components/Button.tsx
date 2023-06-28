import clsx from "clsx";
import { FC } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ className, children }) => {
  return (
    <button
      className={clsx(
        "py-4 px-10 rounded-sm text-neutral-800 uppercase font-bold drop-shadow-lg",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
