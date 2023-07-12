'use client'

import { FC, MouseEvent, useCallback, useEffect, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import { ArrowLeft, ArrowRight, X } from "react-feather";
import Image from "next/image";

export type ImageData = {
  id: string;
  title: string;
  pixelate: string;
  src: string;
  width: number;
  height: number;
};

interface Props {
  images: ImageData[];
}

const Lightbox: FC<Props> = ({ images }) => {
  const [lightboxDisplay, setLightboxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState<ImageData | undefined>();
  const ref = useOutsideClick(() => setLightboxDisplay(false));

  const showImage = (image: ImageData) => {
    setImageToShow(image);
    setLightboxDisplay(true);
  };

const closeLightbox = useCallback(() => {
  setLightboxDisplay(false);
}, [setLightboxDisplay]);

const showNext = useCallback(
  (e: MouseEvent<HTMLButtonElement> | KeyboardEvent) => {
    e.stopPropagation();
    const currentIndex = images.indexOf(imageToShow!);
    const nextIndex = (currentIndex + 1) % images.length;
    setImageToShow(images[nextIndex]);
  },
  [images, imageToShow]
);

const showPrev = useCallback(
  (e: MouseEvent<HTMLButtonElement> | KeyboardEvent) => {
    e.stopPropagation();
    const currentIndex = images.indexOf(imageToShow!);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setImageToShow(images[prevIndex]);
  },
  [images, imageToShow]
);


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxDisplay) {
        if (e.key === "ArrowLeft") {
          showPrev(e);
        } else if (e.key === "ArrowRight") {
          showNext(e);
        } else if (e.key === "Escape") {
          closeLightbox();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxDisplay, showPrev, showNext, closeLightbox]);

  const imageCards = images.map((image) => (
    <div
      className="cursor-pointer rounded-sm drop-shadow-md h-72 md:h-80 lg:h-96 flex-1 flex-container hover:scale-105 transition-all duration-300 ease-in-out"
      onClick={() => showImage(image)}
      key={image.src}
    >
      <Image
        className="object-cover w-full h-full"
        src={image.src}
        alt={image.title}
        width={image.width}
        height={image.height}
      />
    </div>
  ));

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {imageCards}
      </div>
        {lightboxDisplay && (
          <div
            id="lightbox"
            className="z-40 fixed inset-0 w-screen h-screen bg-lightbox flex-container"
          >
            <div
              className="absolute top-[20px] right-[10px] cursor-pointer"
              onClick={closeLightbox}
            >
              <X className="h-16 w-16 text-yellow-300" />
            </div>
            <button
              className="bg-yellow-300 bg-opacity-80 z-50 p-2 md:p-4 text-2xl rounded-sm drop-shadow-md absolute top-1/2 left-[5px] md:left-[50px] -translate-y-1/2"
              onClick={showPrev}
            >
              <ArrowLeft />
            </button>
              {imageToShow && (
                <div
                  ref={ref}
                  className="flex-container"
                >
                  <Image
                    className="object-contain h-full w-full"
                    src={imageToShow.src}
                    alt={imageToShow.title}
                    width={imageToShow.width}
                    height={imageToShow.height}
                    sizes="65vw"
                  />
                </div>
              )}
            <button
              className="bg-yellow-300 bg-opacity-80 z-50 p-2 text-2xl md:p-4 rounded-sm drop-shadow-md absolute md:right-[50px] top-1/2 right-[5px] -translate-y-1/2"
              onClick={showNext}
            >
              <ArrowRight />
            </button>
          </div>
        )}
    </>
  );
};

export default Lightbox;
