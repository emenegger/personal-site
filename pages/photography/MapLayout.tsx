"use strict";
import { Images, images3 } from "../../images/images";
import ImageCard from "./ImageCard";
import Map from "./Map";
import { useCallback, useState } from "react";
import { colors } from "./colors";

const MapLayout = ({ images }: { images: Images[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhotoId, setCurrentPhotoId] = useState<string | null>("");

  const handleClick = useCallback((id: string | null) => {
    setIsModalOpen((prev) => !prev);
    setCurrentPhotoId(id);
  }, []);

  const currentImage = images.find((ele) => ele.countryId == currentPhotoId);
  const {
    src,
    stampSrc,
    orientation,
    location,
    camera,
    date,
    alt,
    id,
    countryId,
  } = currentImage ?? {};

  return (
    <div
      className="relative min-h-screen bg-[#e5e7eb] p-30"
      style={{ backgroundColor: colors.background }}
    >
      <div className="font-mono flex flex-col md:flex-row justify-center items-center text-center text-[#F5F5DC]">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-2"
          style={{
            textShadow: "3px 3px 0px #4A4A4A, 6px 6px 0px #2A2A2A",
          }}
        >
          welcome
        </h1>
        <p className="text-sm md:text-xl px-2">to some</p>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-2"
          style={{
            textShadow: "3px 3px 0px #4A4A4A, 6px 6px 0px #2A2A2A",
          }}
        >
          photography
        </h1>
      </div>
      <div
        className="font-satisfy absolute left-6 top-1/3 -translate-y-2/3 text-[#F5F5DC] text-sm md:text-4xl w-20 md:w-40 "
        style={{
          textShadow: "2px 2px 0px #4A4A4A, 3px 3px 0px #2A2A2A",
        }}
      >
        click a country to see more
      </div>
      {isModalOpen && currentImage && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-40" />
          <div className="absolute w-screen h-screen justify-center items-start flex z-50">
            <div className="h-4/5 w-4/5 flex justify-center items-center">
              <ImageCard
                src={src}
                stampSrc={stampSrc}
                orientation={orientation}
                location={location}
                camera={camera}
                date={date}
                alt={alt}
                key={id}
                id={id}
                countryId={countryId}
                onClick={handleClick}
                showCloseButton
              />
            </div>
          </div>
        </>
      )}
      <Map onClick={handleClick} />
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { images: images3 },
  };
}

export default MapLayout;
