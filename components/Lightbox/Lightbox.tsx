"use client";

import { FC, MouseEvent, Suspense, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import { AnimatePresence, motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { X } from "react-feather";

export type image = {
  id: string;
  src: string;
  image: string;
  width: number;
  height: number;
};

interface Props {
  imagesArr: image[];
}

const Lightbox: FC<Props> = ({ imagesArr: images }) => {
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState<image>();
  const ref = useOutsideClick(() => setLightBoxDisplay(false));

  const showImage = (image: image) => {
    //set imageToShow to be the one that's been clicked on
    setImageToShow(image);
    //set lightbox visibility to true
    setLightBoxDisplay(true);
  };

  const closeLightbox = () => {
    setLightBoxDisplay(false);
  };

  const showNext = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      currentIndex = 0;
      setImageToShow(images[currentIndex]);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      currentIndex = images.length - 1;
      setImageToShow(images[currentIndex]);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  const imageCards = images.map((image) => (
    <div
      className="cursor-pointer w-64 h-64 rounded-sm drop-shadow-md flex-container hover:scale-105 transition-all duration-300 ease-in-out"
      onClick={() => showImage(image)}
      key={image.src}
    >
      <CldImage
        className="object-contain"
        id="lightbox-img"
        src={image.src}
        alt="lightbox"
        fill
      />
    </div>
  ));

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {imageCards}
      </div>
      <AnimatePresence>
        {lightboxDisplay ? (
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
              className="bg-yellow-300 bg-opacity-80 z-50 p-4 rounded-sm drop-shadow-md text-2xl absolute top-1/2 left-[50px] -translate-y-1/2"
              onClick={(e) => showPrev(e)}
            >
              ⭠
            </button>
            <AnimatePresence mode="sync">
              {imageToShow && (
                <Suspense fallback={<div>Loading...</div>}>
                  <motion.div
                    ref={ref}
                    className="flex-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <CldImage
                      className="object-contain h-full w-full"
                      id="lightbox-img"
                      src={imageToShow.src}
                      alt="lightbox"
                      width={500}
                      height={500}
                    />
                  </motion.div>
                </Suspense>
              )}
            </AnimatePresence>
            <button
              className="bg-yellow-300 bg-opacity-80 z-50 p-4 rounded-sm drop-shadow-md text-2xl absolute top-1/2 right-[50px] -translate-y-1/2"
              onClick={(e) => showNext(e)}
            >
              ⭢
            </button>
          </div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
};

export default Lightbox;
