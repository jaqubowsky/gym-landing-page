"use client";

import clsx from "clsx";
import { CldImage } from "next-cloudinary";
import { FC } from "react";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
}

const CloudinaryImage: FC<Props> = ({
  src,
  alt,
  width,
  height,
  fill,
  className,
  ...props
}) => {
  return (
    <CldImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={clsx("", className)}
      {...props}
    />
  );
};

export default CloudinaryImage;
