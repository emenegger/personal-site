import React from "react";
import { Images } from "./images";
import ImageCard from "./ImageCard";

const GridLayout = ({ images }: { images: Images[] }) => {
  const sortedImages = [...images].sort((a, b) => 
  a.orientation === 'landscape' ? -1 : b.orientation === 'landscape' ? 1 : 0
);
  return (
    <div className="relative min-h-screen w-screen bg-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {sortedImages.map(
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
          }) => (
            <div>
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
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default GridLayout;
