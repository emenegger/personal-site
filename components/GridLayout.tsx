import React from "react";
import { Images } from "../images/images";
import ImageCard from "./ImageCard";

const GridLayout = ({ images }: { images: Images[] }) => {
  return (
    <div className="relative min-h-screen w-screen bg-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {images.map(
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
                onClick={() => {}}
                id={id}
                countryId={countryId}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default GridLayout;
