import React from "react";
import ImageCard from "./ImageCard";
import { Images } from "./types";

const GridLayout = ({ images }: { images: Images[] }) => {
  const gridImages = images.filter(img => img.tags.includes('grid'));
  const landscapeImages = gridImages.filter(
    ({ orientation }) => orientation === "landscape"
  );
  const portraitImages = gridImages.filter(
    ({ orientation }) => orientation === "portrait"
  );

  return (
    <div className="relative min-h-screen w-screen bg-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {landscapeImages.map(
          ({
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
          }) => (
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
              key={id}
              isPriority={isPriority}
            />
          )
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {portraitImages.map(
          ({
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
          }) => (
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
              key={id}
              isPriority={isPriority}
            />
          )
        )}
      </div>
    </div>
  );
};

export default GridLayout;
