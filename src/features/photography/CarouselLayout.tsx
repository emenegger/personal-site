import React, { useCallback, useMemo, useState } from "react";
import ImageCard from "./ImageCard";
import ImageWrapper from "./ImageWrapper";
import { Images } from "./types";

const CarouselLayout = ({ images }: { images: Images[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const windowSize = 5;

  const filteredImages = useMemo(
    () =>
      images.filter(
        (img) =>
          img.orientation === "landscape" && img.tags?.includes('carousel')
      ),
    [images]
  );

  const currentWindow = useMemo(() => {
    if (filteredImages.length === 0) {
      return [];
    }
    return Array.from(
      { length: windowSize },
      (_, i) => filteredImages[(currentIndex + i) % filteredImages.length]
    );
  }, [filteredImages, currentIndex, windowSize]);

  const handleClick = useCallback(
    (direction: "left" | "right") => {
      setCurrentIndex((prev) => {
        if (direction === "left") {
          return prev <= 0 ? filteredImages.length - 1 : prev - 1;
        } else {
          return (prev + 1) % filteredImages.length;
        }
      });
    },
    [filteredImages.length]
  );

  if (!currentWindow) {
    return null;
  }

  return (
    <div className="relative min-h-screen w-screen bg-gray-300 flex flex-col justify-center items-center">
      <div className="relative h-screen flex flex-row justify-center items-center ">
        {currentWindow.map(
          (
            {
              src,
              stampSrc,
              location,
              camera,
              date,
              alt,
              id,
              countryId,
              orientation,
              coordinates,
              isPriority
            },
            index
          ) => (
            <ImageWrapper index={index} id={id} onClick={handleClick} key={id}>
              <ImageCard
                orientation={orientation}
                src={src}
                location={location}
                camera={camera}
                date={date}
                stampSrc={stampSrc}
                alt={alt}
                id={id}
                countryId={countryId}
                coordinates={coordinates}
                isPriority={isPriority}
              />
            </ImageWrapper>
          )
        )}
      </div>
    </div>
  );
};

export default CarouselLayout;
