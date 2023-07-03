import clsx from "clsx";
import { FC, ReactNode } from "react";

interface Section extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  innerStyle?: string;
}

const Section: FC<Section> = ({ children, className, id, style, innerStyle }) => {
  return (
    <section
      id={id}
      style={style}
      className={clsx("flex-container flex-col w-full text-center mx-auto", className)}
    >
      <div className={clsx("max-w-6xl md:max-w-2xl px-6 py-12 w-full flex-container flex-col", innerStyle)}>
        {children}
      </div>
    </section>
  );
};

export default Section;
