import about from "@/assets/images/about.png";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface Props {
  aboutData: {
    name: string;
    desc: string;
    src: StaticImageData;
  };
  className?: string;
}

const MeetUsBox: FC<Props> = ({ aboutData, className }) => {
  const { name, desc, src } = aboutData;

  return (
    <>
      <div
        className={clsx(
          "embla__slide overflow-hidden cursor-pointer p-4 group",
          className
        )}
      >
        <div className="relative w-full h-full transition-all duration-300 ease-in-out transform group-hover:scale-105 shadow-md group-hover:shadow-yellow-300">
          <Image
            src={src}
            alt={name}
            width={1000}
            height={1000}
            className="embla__slide__img"
          />
          <div className="absolute bottom-0 w-full left-0 bg-trBlack py-2">
            <h3 className="font-bold text-2xl text-yellow-300 drop-shadow-2xl">
              {name}
            </h3>
            <p className="text-white">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetUsBox;
