import clsx from "clsx";
import { FC, ReactNode } from "react";

interface Section {
  children: ReactNode;
  id: string;
  className?: string;
}

const Section: FC<Section> = ({ children, className, id }) => {
  return (
    <section
      id={id}
      className={clsx("flex-container flex-col w-full text-center", className)}
    >
      <div className="max-w-6xl px-6 py-12 w-full flex-container flex-col">
        {children}
      </div>
    </section>
  );
};

export default Section;
