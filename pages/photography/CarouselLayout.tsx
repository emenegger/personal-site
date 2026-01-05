import React, { useCallback, useMemo, useState } from "react";
import { Images } from "./images";
import ImageCard from "./ImageCard";
import ImageWrapper from "./ImageWrapper";

const CarouselLayout = ({ images }: { images: Images[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const windowSize = 5;
  
  const landscapeImages = useMemo(
    () => images.filter(img => img.orientation === 'landscape'),
    [images]
  );
  
  const currentWindow = useMemo(
    () => Array.from(
      { length: windowSize }, 
      (_, i) => landscapeImages[(currentIndex + i) % landscapeImages.length]
    ),
    [landscapeImages, currentIndex, windowSize]
  );
  
  const handleClick = useCallback((direction: 'left' | 'right') => {
    setCurrentIndex(prev => {
      if (direction === 'left') {
        return prev <= 0 ? landscapeImages.length - 1 : prev - 1;
      } else {
        return (prev + 1) % landscapeImages.length;
      }
    });
  }, [landscapeImages.length]);

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
              coordinates
            },
            index
          ) => (
            <ImageWrapper
              index={index}
              id={id}
              onClick={handleClick}
            >
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
              />
            </ImageWrapper>
          )
        )}
      </div>
    </div>
  );
};

export default CarouselLayout;
